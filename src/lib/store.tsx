
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { DEFAULT_SITE, type SiteData } from "../data/site";

const SESSION_KEY = "kirti_admin_session";
const API_KEY = "kirti_api_base";

const viteEnv = (import.meta as unknown as {
  env?: Record<string, string>;
}).env;

const DEFAULT_API =
  viteEnv?.VITE_API_URL || "http://localhost:4000";

export interface Session {
  token: string;
  exp: number;
  username: string;
}

export type BackendStatus = "connecting" | "live" | "offline";

interface Result {
  ok: boolean;
  message: string;
}

interface SiteContextValue {
  data: SiteData;
  status: BackendStatus;
  apiBase: string;
  error: string;
  session: Session | null;

  save: (next: SiteData) => Promise<Result>;

  login: (
    username: string,
    password: string
  ) => Promise<Result>;

  logout: () => void;

  setApiBase: (url: string) => void;

  refresh: () => Promise<void>;

  resetAll: () => Promise<Result>;

  importData: (json: string) => Promise<Result>;

  changePassword: (
    current: string,
    next: string
  ) => Promise<Result>;
}

const SiteContext =
  createContext<SiteContextValue | null>(null);

/* =========================================================
   HTTPS URL NORMALIZATION
========================================================= */

function forceHttpsUrl(value: string) {
  return value.replace(
    /^http:\/\/rathore-vlogs-production\.up\.railway\.app/i,
    "https://rathore-vlogs-production.up.railway.app"
  );
}

function normalizeHttps<T>(value: T): T {
  if (typeof value === "string") {
    return forceHttpsUrl(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) =>
      normalizeHttps(item)
    ) as T;
  }

  if (
    value &&
    typeof value === "object"
  ) {
    return Object.fromEntries(
      Object.entries(
        value as Record<string, unknown>
      ).map(([key, item]) => [
        key,
        normalizeHttps(item),
      ])
    ) as T;
  }

  return value;
}

/* =========================================================
   ENSURE SITE DATA
========================================================= */

function ensure(raw: unknown): SiteData {
  const d = DEFAULT_SITE;

  if (!raw || typeof raw !== "object") {
    throw new Error("Invalid site data");
  }

  const r = raw as Partial<SiteData>;

  return normalizeHttps({
    ...d,
    ...r,

    links: {
      ...d.links,
      ...(r.links ?? {}),
    },

    hero: {
      ...d.hero,
      ...(r.hero ?? {}),
      images: {
        ...d.hero.images,
        ...(r.hero?.images ?? {}),
      },
    },

    about: {
      ...d.about,
      ...(r.about ?? {}),

      images: {
        ...d.about.images,
        ...(r.about?.images ?? {}),
      },

      highlights: Array.isArray(r.about?.highlights)
        ? r.about.highlights
        : d.about.highlights,

      stats: Array.isArray(r.about?.stats)
        ? r.about.stats
        : d.about.stats,
    },

    /* =====================================
       NEW - MY MOMENTS VIDEO
    ===================================== */

    moments: {
      ...d.moments,
      ...(r.moments ?? {}),
    },

    videos: Array.isArray(r.videos)
      ? r.videos
      : [],

    gallery: Array.isArray(r.gallery)
      ? r.gallery
      : [],

    marquee: Array.isArray(r.marquee)
      ? r.marquee
      : d.marquee,

    pillars: Array.isArray(r.pillars)
      ? r.pillars
      : d.pillars,
  });
}

/* =========================================================
   API BASE
========================================================= */

export function getApiBase() {
  const envApi = DEFAULT_API.replace(/\/+$/, "");

  if (import.meta.env.PROD) {
    return envApi;
  }

  return (
    localStorage.getItem(API_KEY) ||
    envApi
  ).replace(/\/+$/, "");
}

/* =========================================================
   SESSION
========================================================= */

export function readSession(): Session | null {
  try {
    const raw =
      sessionStorage.getItem(SESSION_KEY);

    if (!raw) return null;

    const session =
      JSON.parse(raw) as Session;

    if (
      typeof session.exp !== "number" ||
      session.exp < Date.now()
    ) {
      sessionStorage.removeItem(SESSION_KEY);
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

function persistSession(
  session: Session | null
) {
  if (session) {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify(session)
    );
  } else {
    sessionStorage.removeItem(
      SESSION_KEY
    );
  }
}

async function fetchWithTimeout(
  url: string,
  timeout = 20000
) {
  const controller = new AbortController();

  const timer = window.setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    return await fetch(url, {
      signal: controller.signal,
    });
  } finally {
    window.clearTimeout(timer);
  }
}

/* =========================================================
   PROVIDER
========================================================= */

export function SiteProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] =
    useState<SiteData>(() =>
      normalizeHttps(DEFAULT_SITE)
    );

  const [status, setStatus] =
    useState<BackendStatus>("connecting");

  const [apiBase, setApiBaseState] =
    useState(getApiBase);

  const [error, setError] =
    useState("");

  const [session, setSession] =
    useState<Session | null>(
      readSession
    );

  /* =====================================================
     REFRESH
  ===================================================== */

  const refresh = useCallback(
    async () => {
      const api = getApiBase();

      setApiBaseState(api);
      setStatus("connecting");
      setError("");

      let lastError = "";

      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          const health = await fetchWithTimeout(
            `${api}/api/health`,
            15000
          );

          if (!health.ok) {
            throw new Error(
              `API health check failed (${health.status})`
            );
          }

          const response = await fetchWithTimeout(
            `${api}/api/site`,
            20000
          );

          if (!response.ok) {
            const body =
              await response
                .json()
                .catch(() => ({}));

            throw new Error(
              body.error ||
                `Could not load content (${response.status})`
            );
          }

          const site =
            await response.json();

          setData(ensure(site));
          setStatus("live");
          setError("");

          return;
        } catch (err) {
          lastError =
            err instanceof Error
              ? err.message
              : "The database API is unavailable";

          if (attempt < 2) {
            await new Promise((resolve) =>
              window.setTimeout(resolve, 2000)
            );
          }
        }
      }

      setStatus("offline");
      setError(lastError);
    },
    []
  );

  useEffect(() => {
    void refresh();
  }, [refresh]);

  /* =====================================================
     SAVE
  ===================================================== */

  const save = useCallback(
    async (
      next: SiteData
    ): Promise<Result> => {
      const activeSession =
        readSession();

      if (!activeSession) {
        return {
          ok: false,
          message:
            "Your session expired. Please log in again.",
        };
      }

      try {
        const response = await fetch(
          `${getApiBase()}/api/site`,
          {
            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${activeSession.token}`,
            },

            body: JSON.stringify(
              normalizeHttps(next)
            ),
          }
        );

        const body =
          await response
            .json()
            .catch(() => ({}));

        if (!response.ok) {
          throw new Error(
            body.error ||
              `Save failed (${response.status})`
          );
        }

        setData(
          ensure(
            body.site ?? next
          )
        );

        setStatus("live");

        return {
          ok: true,
          message:
            "Saved to MySQL database ✓",
        };
      } catch (err) {
        setStatus("offline");

        return {
          ok: false,
          message:
            err instanceof Error
              ? err.message
              : "Database save failed",
        };
      }
    },
    []
  );

  /* =====================================================
     LOGIN
  ===================================================== */

  const login = useCallback(
    async (
      username: string,
      password: string
    ): Promise<Result> => {
      try {
        const response =
          await fetch(
            `${getApiBase()}/api/admin/login`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                username,
                password,
              }),
            }
          );

        const body =
          await response
            .json()
            .catch(() => ({}));

        if (!response.ok) {
          return {
            ok: false,
            message:
              body.error ||
              "Invalid username or password",
          };
        }

        const nextSession: Session = {
          token: body.token,

          exp:
            Date.now() +
            12 * 3600 * 1000,

          username,
        };

        persistSession(
          nextSession
        );

        setSession(
          nextSession
        );

        return {
          ok: true,
          message: "Logged in",
        };
      } catch {
        return {
          ok: false,
          message:
            "MySQL backend is unavailable",
        };
      }
    },
    []
  );

  /* =====================================================
     LOGOUT
  ===================================================== */

  const logout = useCallback(
    () => {
      persistSession(null);
      setSession(null);
    },
    []
  );

  /* =====================================================
     API URL
  ===================================================== */

  const setApiBase =
    useCallback(
      (url: string) => {
        const clean =
          url
            .trim()
            .replace(/\/+$/, "");

        if (!clean) return;

        localStorage.setItem(
          API_KEY,
          clean
        );

        setApiBaseState(clean);

        window.location.reload();
      },
      []
    );

  /* =====================================================
     RESET
  ===================================================== */

  const resetAll =
    useCallback(
      async (): Promise<Result> =>
        save(DEFAULT_SITE),
      [save]
    );

  /* =====================================================
     IMPORT
  ===================================================== */

  const importData =
    useCallback(
      async (
        json: string
      ): Promise<Result> => {
        try {
          return await save(
            ensure(
              JSON.parse(json)
            )
          );
        } catch {
          return {
            ok: false,
            message:
              "Invalid JSON backup",
          };
        }
      },
      [save]
    );

  /* =====================================================
     CHANGE PASSWORD
  ===================================================== */

  const changePassword =
    useCallback(
      async (
        current: string,
        next: string
      ): Promise<Result> => {
        const activeSession =
          readSession();

        if (!activeSession) {
          return {
            ok: false,
            message:
              "Your session expired",
          };
        }

        try {
          const response =
            await fetch(
              `${getApiBase()}/api/admin/password`,
              {
                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json",

                  Authorization:
                    `Bearer ${activeSession.token}`,
                },

                body: JSON.stringify({
                  current,
                  next,
                }),
              }
            );

          const body =
            await response
              .json()
              .catch(() => ({}));

          if (!response.ok) {
            return {
              ok: false,
              message:
                body.error ||
                "Password change failed",
            };
          }

          return {
            ok: true,
            message:
              "Password changed ✓",
          };
        } catch {
          return {
            ok: false,
            message:
              "MySQL backend is unavailable",
          };
        }
      },
      []
    );

  /* =====================================================
     PROVIDER
  ===================================================== */

  return (
    <SiteContext.Provider
      value={{
        data,
        status,
        apiBase,
        error,
        session,

        save,
        login,
        logout,
        setApiBase,
        refresh,
        resetAll,
        importData,
        changePassword,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

/* =========================================================
   HOOK
========================================================= */

export function useSite(): SiteContextValue {
  const context =
    useContext(SiteContext);

  if (!context) {
    throw new Error(
      "useSite must be used inside <SiteProvider>"
    );
  }

  return context;
}