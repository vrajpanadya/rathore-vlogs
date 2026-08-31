// // // /**
// // //  * Rathore Vlogs - Express + MySQL API
// // //  * Run schema.sql, seed.js, then: node server/index.js
// // //  */
// // // require("dotenv").config();
// // // const express = require("express");
// // // const cors = require("cors");
// // // const crypto = require("crypto");
// // // const bcrypt = require("bcryptjs");
// // // const mysql = require("mysql2/promise");
// // // const multer = require("multer");
// // // const fs = require("fs");
// // // const path = require("path");

// // // const PORT = process.env.PORT || 4000;
// // // const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;
// // // const SECRET = process.env.SECRET || crypto.randomBytes(32).toString("hex");

// // // const app = express();
// // // app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
// // // app.use(express.json({ limit: "5mb" }));

// // // const uploadDir = path.join(__dirname, "uploads");
// // // fs.mkdirSync(uploadDir, { recursive: true });
// // // app.use("/uploads", express.static(uploadDir));
// // // const upload = multer({
// // //   storage: multer.diskStorage({
// // //     destination: (_req, _file, cb) => cb(null, uploadDir),
// // //     filename: (_req, file, cb) => {
// // //       const ext = path.extname(file.originalname).toLowerCase();
// // //       const safeExt = [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext) ? ext : ".jpg";
// // //       cb(null, `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${safeExt}`);
// // //     },
// // //   }),
// // //   limits: { fileSize: 10 * 1024 * 1024 },
// // //   fileFilter: (_req, file, cb) => {
// // //     if (/^image\/(jpeg|png|webp|gif)$/.test(file.mimetype)) cb(null, true);
// // //     else cb(new Error("Only JPG, PNG, WEBP and GIF images are allowed"));
// // //   },
// // // });

// // // const pool = mysql.createPool({
// // //   host: process.env.DB_HOST || "localhost",
// // //   port: Number(process.env.DB_PORT || 3306),
// // //   user: process.env.DB_USER || "root",
// // //   password: process.env.DB_PASSWORD || "",
// // //   database: process.env.DB_NAME || "kirti_site",
// // //   waitForConnections: true,
// // //   connectionLimit: 10,
// // //   charset: "utf8mb4",
// // // });

// // // function makeToken(username) {
// // //   const payload = Buffer.from(
// // //     JSON.stringify({ username, issuedAt: Date.now() })
// // //   ).toString("base64url");
// // //   const signature = crypto
// // //     .createHmac("sha256", SECRET)
// // //     .update(payload)
// // //     .digest("base64url");
// // //   return `${payload}.${signature}`;
// // // }

// // // function verifyToken(token) {
// // //   try {
// // //     const [payload, signature] = token.split(".");
// // //     if (!payload || !signature) return null;
// // //     const expected = crypto
// // //       .createHmac("sha256", SECRET)
// // //       .update(payload)
// // //       .digest("base64url");
// // //     if (
// // //       signature.length !== expected.length ||
// // //       !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
// // //     ) {
// // //       return null;
// // //     }
// // //     const parsed = JSON.parse(Buffer.from(payload, "base64url").toString());
// // //     if (!parsed.username || Date.now() - parsed.issuedAt > TOKEN_TTL_MS) return null;
// // //     return parsed.username;
// // //   } catch {
// // //     return null;
// // //   }
// // // }

// // // function requireAuth(req, res, next) {
// // //   const header = req.headers.authorization || "";
// // //   const token = header.startsWith("Bearer ") ? header.slice(7) : "";
// // //   const username = verifyToken(token);
// // //   if (!username) return res.status(401).json({ error: "Unauthorized" });
// // //   req.username = username;
// // //   next();
// // // }

// // // function parseJson(value) {
// // //   return typeof value === "string" ? JSON.parse(value) : value;
// // // }

// // // async function readSite(db = pool) {
// // //   const [settingsRows] = await db.query(
// // //     "SELECT `value` FROM settings WHERE `key` = 'site' LIMIT 1"
// // //   );
// // //   if (!settingsRows.length) throw new Error("Database is not seeded. Run server/schema.sql");

// // //   const [videoRows] = await db.query(
// // //     "SELECT title, duration, views, thumb, badge FROM videos ORDER BY sort_order, id"
// // //   );
// // //   const [galleryRows] = await db.query(
// // //     "SELECT src, likes, caption FROM gallery_items ORDER BY sort_order, id"
// // //   );

// // //   const settings = parseJson(settingsRows[0].value);
// // //   delete settings.admin;
// // //   return {
// // //     ...settings,
// // //     videos: videoRows.map((row) => ({ ...row, badge: row.badge || undefined })),
// // //     gallery: galleryRows,
// // //   };
// // // }

// // // async function replaceVideos(connection, videos) {
// // //   await connection.query("DELETE FROM videos");
// // //   for (const [sortOrder, video] of videos.entries()) {
// // //     await connection.execute(
// // //       `INSERT INTO videos (sort_order, title, duration, views, thumb, badge)
// // //        VALUES (?, ?, ?, ?, ?, ?)`,
// // //       [
// // //         sortOrder,
// // //         String(video.title || ""),
// // //         String(video.duration || ""),
// // //         String(video.views || ""),
// // //         String(video.thumb || ""),
// // //         video.badge ? String(video.badge) : null,
// // //       ]
// // //     );
// // //   }
// // // }

// // // async function replaceGallery(connection, gallery) {
// // //   await connection.query("DELETE FROM gallery_items");
// // //   for (const [sortOrder, item] of gallery.entries()) {
// // //     await connection.execute(
// // //       `INSERT INTO gallery_items (sort_order, src, likes, caption)
// // //        VALUES (?, ?, ?, ?)`,
// // //       [
// // //         sortOrder,
// // //         String(item.src || ""),
// // //         String(item.likes || "0"),
// // //         String(item.caption || ""),
// // //       ]
// // //     );
// // //   }
// // // }

// // // async function saveSite(site) {
// // //   const connection = await pool.getConnection();
// // //   try {
// // //     await connection.beginTransaction();
// // //     const videos = Array.isArray(site.videos) ? site.videos : [];
// // //     const gallery = Array.isArray(site.gallery) ? site.gallery : [];
// // //     const settings = { ...site };
// // //     delete settings.videos;
// // //     delete settings.gallery;
// // //     delete settings.admin;

// // //     await connection.execute(
// // //       `INSERT INTO settings (\`key\`, \`value\`) VALUES ('site', ?)
// // //        ON DUPLICATE KEY UPDATE \`value\` = VALUES(\`value\`)`,
// // //       [JSON.stringify(settings)]
// // //     );
// // //     await replaceVideos(connection, videos);
// // //     await replaceGallery(connection, gallery);
// // //     await connection.commit();
// // //     return await readSite(connection);
// // //   } catch (error) {
// // //     await connection.rollback();
// // //     throw error;
// // //   } finally {
// // //     connection.release();
// // //   }
// // // }

// // // app.get("/api/health", async (_req, res) => {
// // //   try {
// // //     await pool.query("SELECT 1");
// // //     res.json({ ok: true, service: "rathore-admin-api", database: "connected" });
// // //   } catch (error) {
// // //     res.status(503).json({ ok: false, error: error.message });
// // //   }
// // // });

// // // app.get("/api/site", async (_req, res) => {
// // //   try {
// // //     res.json(await readSite());
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // });

// // // // Public resource endpoints read directly from their normalized tables.
// // // app.get("/api/videos", async (_req, res) => {
// // //   try {
// // //     const [rows] = await pool.query(
// // //       "SELECT title, duration, views, thumb, badge FROM videos ORDER BY sort_order, id"
// // //     );
// // //     res.json(rows);
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // });

// // // app.get("/api/gallery", async (_req, res) => {
// // //   try {
// // //     const [rows] = await pool.query(
// // //       "SELECT src, likes, caption FROM gallery_items ORDER BY sort_order, id"
// // //     );
// // //     res.json(rows);
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // });

// // // app.post("/api/admin/upload", requireAuth, (req, res) => {
// // //   upload.single("image")(req, res, (error) => {
// // //     if (error) return res.status(400).json({ error: error.message });
// // //     if (!req.file) return res.status(400).json({ error: "No image selected" });
// // //     res.json({ ok: true, url: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` });
// // //   });
// // // });

// // // app.post("/api/admin/login", async (req, res) => {
// // //   const { username, password } = req.body || {};
// // //   if (!username || !password) return res.status(400).json({ error: "Missing credentials" });
// // //   try {
// // //     const [rows] = await pool.query(
// // //       "SELECT password_hash FROM users WHERE username = ? LIMIT 1",
// // //       [username]
// // //     );
// // //     const valid = rows[0] && (await bcrypt.compare(password, rows[0].password_hash));
// // //     if (!valid) return res.status(401).json({ error: "Invalid username or password" });
// // //     res.json({ token: makeToken(username) });
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // });

// // // app.put("/api/site", requireAuth, async (req, res) => {
// // //   if (!req.body || typeof req.body !== "object") {
// // //     return res.status(400).json({ error: "Invalid payload" });
// // //   }
// // //   try {
// // //     const site = await saveSite(req.body);
// // //     res.json({ ok: true, site });
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // });

// // // app.post("/api/admin/password", requireAuth, async (req, res) => {
// // //   const { current, next } = req.body || {};
// // //   if (!current || !next) return res.status(400).json({ error: "Missing fields" });
// // //   if (String(next).length < 6) {
// // //     return res.status(400).json({ error: "Password must be at least 6 characters" });
// // //   }
// // //   try {
// // //     const [rows] = await pool.query(
// // //       "SELECT password_hash FROM users WHERE username = ? LIMIT 1",
// // //       [req.username]
// // //     );
// // //     const valid = rows[0] && (await bcrypt.compare(current, rows[0].password_hash));
// // //     if (!valid) return res.status(401).json({ error: "Current password is incorrect" });
// // //     const hash = await bcrypt.hash(next, 10);
// // //     await pool.execute("UPDATE users SET password_hash = ? WHERE username = ?", [
// // //       hash,
// // //       req.username,
// // //     ]);
// // //     res.json({ ok: true });
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // });

// // // app.listen(PORT, () => {
// // //   console.log(`Rathore Admin API running on http://localhost:${PORT}`);
// // // });
// // /**
// //  * Rathore Vlogs - Express + MySQL API
// //  * Run schema.sql, seed.js, then: node server/index.js
// //  */
// //   /**
// //  * Rathore Vlogs - Express + MySQL API
// //  */

// // require("dotenv").config();

// // const express = require("express");
// // const cors = require("cors");
// // const crypto = require("crypto");
// // const bcrypt = require("bcryptjs");
// // const mysql = require("mysql2/promise");
// // const multer = require("multer");
// // const fs = require("fs");
// // const path = require("path");
// // const { execFile } = require("child_process");


// // const PORT = process.env.PORT || 4000;

// // const TOKEN_TTL_MS =
// //   12 * 60 * 60 * 1000;

// // const SECRET =
// //   process.env.SECRET ||
// //   crypto.randomBytes(32).toString("hex");

// // const app = express();

// // /* =========================================================
// //    MIDDLEWARE
// // ========================================================= */

// // app.use(
// //   cors({
// //     origin:
// //       process.env.CORS_ORIGIN ||
// //       true,
// //   })
// // );

// // app.use(
// //   express.json({
// //     limit: "5mb",
// //   })
// // );

// // /* =========================================================
// //    UPLOAD DIRECTORY
// // ========================================================= */

// // const uploadDir =
// //   path.join(__dirname, "uploads");

// // fs.mkdirSync(uploadDir, {
// //   recursive: true,
// // });

// // app.use(
// //   "/uploads",
// //   express.static(uploadDir, {
// //     maxAge: "7d",
// //     immutable: true,
// //   })
// // );

// // /* =========================================================
// //    IMAGE UPLOAD CONFIG
// // ========================================================= */

// // const upload = multer({
// //   storage: multer.diskStorage({
// //     destination: (
// //       _req,
// //       _file,
// //       cb
// //     ) => {
// //       cb(null, uploadDir);
// //     },

// //     filename: (
// //       _req,
// //       file,
// //       cb
// //     ) => {
// //       const ext =
// //         path
// //           .extname(
// //             file.originalname
// //           )
// //           .toLowerCase();

// //       const safeExt = [
// //         ".jpg",
// //         ".jpeg",
// //         ".png",
// //         ".webp",
// //         ".gif",
// //       ].includes(ext)
// //         ? ext
// //         : ".jpg";

// //       cb(
// //         null,
// //         `${Date.now()}-${crypto
// //           .randomBytes(6)
// //           .toString(
// //             "hex"
// //           )}${safeExt}`
// //       );
// //     },
// //   }),

// //   limits: {
// //     fileSize:
// //       10 *
// //       1024 *
// //       1024,
// //   },

// //   fileFilter: (
// //     _req,
// //     file,
// //     cb
// //   ) => {
// //     if (
// //       /^image\/(jpeg|png|webp|gif)$/.test(
// //         file.mimetype
// //       )
// //     ) {
// //       cb(null, true);
// //     } else {
// //       cb(
// //         new Error(
// //           "Only JPG, PNG, WEBP and GIF images are allowed"
// //         )
// //       );
// //     }
// //   },
// // });

// // /* =========================================================
// //    DATABASE
// // ========================================================= */

// // const pool =
// //   mysql.createPool({
// //     host:
// //       process.env.DB_HOST ||
// //       "localhost",

// //     port: Number(
// //       process.env.DB_PORT ||
// //         3306
// //     ),

// //     user:
// //       process.env.DB_USER ||
// //       "root",

// //     password:
// //       process.env
// //         .DB_PASSWORD || "",

// //     database:
// //       process.env.DB_NAME ||
// //       "bjp",

// //     waitForConnections:
// //       true,

// //     connectionLimit: 10,

// //     charset: "utf8mb4",
// //   });

// // /* =========================================================
// //    AUTH TOKEN
// // ========================================================= */

// // function makeToken(
// //   username
// // ) {
// //   const payload =
// //     Buffer.from(
// //       JSON.stringify({
// //         username,
// //         issuedAt:
// //           Date.now(),
// //       })
// //     ).toString(
// //       "base64url"
// //     );

// //   const signature =
// //     crypto
// //       .createHmac(
// //         "sha256",
// //         SECRET
// //       )
// //       .update(payload)
// //       .digest(
// //         "base64url"
// //       );

// //   return `${payload}.${signature}`;
// // }

// // function verifyToken(
// //   token
// // ) {
// //   try {
// //     const [
// //       payload,
// //       signature,
// //     ] =
// //       token.split(".");

// //     if (
// //       !payload ||
// //       !signature
// //     ) {
// //       return null;
// //     }

// //     const expected =
// //       crypto
// //         .createHmac(
// //           "sha256",
// //           SECRET
// //         )
// //         .update(
// //           payload
// //         )
// //         .digest(
// //           "base64url"
// //         );

// //     if (
// //       signature.length !==
// //         expected.length ||
// //       !crypto.timingSafeEqual(
// //         Buffer.from(
// //           signature
// //         ),
// //         Buffer.from(
// //           expected
// //         )
// //       )
// //     ) {
// //       return null;
// //     }

// //     const parsed =
// //       JSON.parse(
// //         Buffer.from(
// //           payload,
// //           "base64url"
// //         ).toString()
// //       );

// //     if (
// //       !parsed.username ||
// //       Date.now() -
// //         parsed.issuedAt >
// //         TOKEN_TTL_MS
// //     ) {
// //       return null;
// //     }

// //     return parsed.username;
// //   } catch {
// //     return null;
// //   }
// // }

// // function requireAuth(
// //   req,
// //   res,
// //   next
// // ) {
// //   const header =
// //     req.headers
// //       .authorization || "";

// //   const token =
// //     header.startsWith(
// //       "Bearer "
// //     )
// //       ? header.slice(7)
// //       : "";

// //   const username =
// //     verifyToken(token);

// //   if (!username) {
// //     return res
// //       .status(401)
// //       .json({
// //         error:
// //           "Unauthorized",
// //       });
// //   }

// //   req.username =
// //     username;

// //   next();
// // }

// // /* =========================================================
// //    HELPERS
// // ========================================================= */

// // function parseJson(
// //   value
// // ) {
// //   return typeof value ===
// //     "string"
// //     ? JSON.parse(value)
// //     : value;
// // }

// // /* =========================================================
// //    READ SITE
// // ========================================================= */

// // async function readSite(
// //   db = pool
// // ) {
// //   const [
// //     settingsRows,
// //   ] =
// //     await db.query(
// //       `
// //       SELECT \`value\`
// //       FROM settings
// //       WHERE \`key\` = 'site'
// //       LIMIT 1
// //       `
// //     );

// //   if (
// //     !settingsRows.length
// //   ) {
// //     throw new Error(
// //       "Database is not seeded. Run server/schema.sql"
// //     );
// //   }

// //   const [videoRows] =
// //     await db.query(`
// //       SELECT
// //         title,
// //         duration,
// //         views,
// //         thumb,
// //         youtube_url AS youtubeUrl,
// //         badge
// //       FROM videos
// //       ORDER BY sort_order, id
// //     `);

// //   const [
// //     galleryRows,
// //   ] =
// //     await db.query(`
// //       SELECT
// //         src,
// //         likes,
// //         caption
// //       FROM gallery_items
// //       ORDER BY sort_order, id
// //     `);

// //   const settings =
// //     parseJson(
// //       settingsRows[0]
// //         .value
// //     );

// //   delete settings.admin;

// //   return {
// //     ...settings,

// //     videos:
// //       videoRows.map(
// //         (row) => ({
// //           ...row,

// //           youtubeUrl:
// //             row.youtubeUrl ||
// //             "",

// //           badge:
// //             row.badge ||
// //             undefined,
// //         })
// //       ),

// //     gallery:
// //       galleryRows,
// //   };
// // }

// // /* =========================================================
// //    SAVE VIDEOS
// // ========================================================= */

// // async function replaceVideos(
// //   connection,
// //   videos
// // ) {
// //   await connection.query(
// //     "DELETE FROM videos"
// //   );

// //   for (
// //     const [
// //       sortOrder,
// //       video,
// //     ] of videos.entries()
// //   ) {
// //     await connection.execute(
// //       `
// //       INSERT INTO videos (
// //         sort_order,
// //         title,
// //         duration,
// //         views,
// //         thumb,
// //         youtube_url,
// //         badge
// //       )
// //       VALUES (?, ?, ?, ?, ?, ?, ?)
// //       `,
// //       [
// //         sortOrder,

// //         String(
// //           video.title ||
// //             ""
// //         ),

// //         String(
// //           video.duration ||
// //             ""
// //         ),

// //         String(
// //           video.views ||
// //             ""
// //         ),

// //         String(
// //           video.thumb ||
// //             ""
// //         ),

// //         video.youtubeUrl
// //           ? String(
// //               video.youtubeUrl
// //             ).trim()
// //           : null,

// //         video.badge
// //           ? String(
// //               video.badge
// //             )
// //           : null,
// //       ]
// //     );
// //   }
// // }

// // /* =========================================================
// //    SAVE GALLERY
// // ========================================================= */

// // async function replaceGallery(
// //   connection,
// //   gallery
// // ) {
// //   await connection.query(
// //     "DELETE FROM gallery_items"
// //   );

// //   for (
// //     const [
// //       sortOrder,
// //       item,
// //     ] of gallery.entries()
// //   ) {
// //     await connection.execute(
// //       `
// //       INSERT INTO gallery_items (
// //         sort_order,
// //         src,
// //         likes,
// //         caption
// //       )
// //       VALUES (?, ?, ?, ?)
// //       `,
// //       [
// //         sortOrder,

// //         String(
// //           item.src || ""
// //         ),

// //         String(
// //           item.likes ||
// //             "0"
// //         ),

// //         String(
// //           item.caption ||
// //             ""
// //         ),
// //       ]
// //     );
// //   }
// // }

// // /* =========================================================
// //    SAVE SITE
// // ========================================================= */

// // async function saveSite(
// //   site
// // ) {
// //   const connection =
// //     await pool.getConnection();

// //   try {
// //     await connection.beginTransaction();

// //     const videos =
// //       Array.isArray(
// //         site.videos
// //       )
// //         ? site.videos
// //         : [];

// //     const gallery =
// //       Array.isArray(
// //         site.gallery
// //       )
// //         ? site.gallery
// //         : [];

// //     const settings = {
// //       ...site,
// //     };

// //     delete settings.videos;
// //     delete settings.gallery;
// //     delete settings.admin;

// //     await connection.execute(
// //       `
// //       INSERT INTO settings (
// //         \`key\`,
// //         \`value\`
// //       )
// //       VALUES ('site', ?)

// //       ON DUPLICATE KEY UPDATE
// //       \`value\` =
// //       VALUES(\`value\`)
// //       `,
// //       [
// //         JSON.stringify(
// //           settings
// //         ),
// //       ]
// //     );

// //     await replaceVideos(
// //       connection,
// //       videos
// //     );

// //     await replaceGallery(
// //       connection,
// //       gallery
// //     );

// //     await connection.commit();

// //     return await readSite(
// //       connection
// //     );
// //   } catch (error) {
// //     await connection.rollback();

// //     throw error;
// //   } finally {
// //     connection.release();
// //   }
// // }

// // /* =========================================================
// //    HEALTH
// // ========================================================= */

// // app.get(
// //   "/api/health",
// //   async (
// //     _req,
// //     res
// //   ) => {
// //     try {
// //       await pool.query(
// //         "SELECT 1"
// //       );

// //       res.json({
// //         ok: true,

// //         service:
// //           "rathore-admin-api",

// //         database:
// //           "connected",
// //       });
// //     } catch (error) {
// //       res
// //         .status(503)
// //         .json({
// //           ok: false,

// //           error:
// //             error.message,
// //         });
// //     }
// //   }
// // );

// // /* =========================================================
// //    SITE DATA
// // ========================================================= */

// // app.get(
// //   "/api/site",
// //   async (
// //     _req,
// //     res
// //   ) => {
// //     try {
// //       res.json(
// //         await readSite()
// //       );
// //     } catch (error) {
// //       res
// //         .status(500)
// //         .json({
// //           error:
// //             error.message,
// //         });
// //     }
// //   }
// // );

// // /* =========================================================
// //    YOUTUBE INFO USING YT-DLP
// //    NO API KEY NEEDED
// // ========================================================= */

// // app.get(
// //   "/api/youtube-info",
// //   requireAuth,
// //   (req, res) => {
// //     const url =
// //       String(
// //         req.query.url ||
// //           ""
// //       ).trim();

// //     /* =========================
// //        CHECK URL
// //     ========================= */

// //     if (!url) {
// //       return res
// //         .status(400)
// //         .json({
// //           error:
// //             "YouTube URL is required",
// //         });
// //     }

// //     try {
// //       const parsed =
// //         new URL(url);

// //       const allowedHosts =
// //         [
// //           "youtube.com",

// //           "www.youtube.com",

// //           "m.youtube.com",

// //           "music.youtube.com",

// //           "youtu.be",

// //           "www.youtu.be",
// //         ];

// //       if (
// //         !allowedHosts.includes(
// //           parsed.hostname.toLowerCase()
// //         )
// //       ) {
// //         return res
// //           .status(400)
// //           .json({
// //             error:
// //               "Please enter a valid YouTube URL",
// //           });
// //       }
// //     } catch {
// //       return res
// //         .status(400)
// //         .json({
// //           error:
// //             "Invalid YouTube URL",
// //         });
// //     }

// //     /* =========================
// //        YT-DLP LOCATION

// //        C:\avc\tools\yt-dlp.exe
// //     ========================= */

// //     const ytdlpPath =
// //       path.join(
// //         __dirname,
// //         "..",
// //         "tools",
// //         "yt-dlp.exe"
// //       );

// //     if (
// //       !fs.existsSync(
// //         ytdlpPath
// //       )
// //     ) {
// //       return res
// //         .status(500)
// //         .json({
// //           error:
// //             "yt-dlp.exe not found in C:\\avc\\tools",
// //         });
// //     }

// //     /* =========================
// //        RUN YT-DLP
// //     ========================= */

// //     execFile(
// //       ytdlpPath,

// //       [
// //         "--js-runtimes",
// //           "node",

// //         "--remote-components",
// //           "ejs:github",
// //         "--dump-single-json",

// //         "--skip-download",

// //         "--no-playlist",

// //         "--no-warnings",

// //         url,
// //       ],

// //       {
// //         windowsHide: true,

// //         maxBuffer:
// //           20 *
// //           1024 *
// //           1024,
// //       },

// //       (
// //         error,
// //         stdout,
// //         stderr
// //       ) => {
// //         if (error) {
// //           console.error(
// //             "YT-DLP ERROR:"
// //           );

// //           console.error(
// //             stderr ||
// //               error.message
// //           );

// //           return res
// //             .status(500)
// //             .json({
// //               error:
// //                 "Could not fetch YouTube video information",
// //             });
// //         }

// //         try {
// //           const info =
// //             JSON.parse(
// //               stdout
// //             );

// //           /* =========================
// //              DURATION
// //           ========================= */

// //           const durationSeconds =
// //             Number(
// //               info.duration ||
// //                 0
// //             );

// //           const hours =
// //             Math.floor(
// //               durationSeconds /
// //                 3600
// //             );

// //           const minutes =
// //             Math.floor(
// //               (durationSeconds %
// //                 3600) /
// //                 60
// //             );

// //           const seconds =
// //             Math.floor(
// //               durationSeconds %
// //                 60
// //             );

// //           let duration =
// //             "";

// //           if (
// //             durationSeconds >
// //             0
// //           ) {
// //             if (
// //               hours > 0
// //             ) {
// //               duration =
// //                 `${hours}:` +
// //                 `${String(
// //                   minutes
// //                 ).padStart(
// //                   2,
// //                   "0"
// //                 )}:` +
// //                 `${String(
// //                   seconds
// //                 ).padStart(
// //                   2,
// //                   "0"
// //                 )}`;
// //             } else {
// //               duration =
// //                 `${minutes}:` +
// //                 `${String(
// //                   seconds
// //                 ).padStart(
// //                   2,
// //                   "0"
// //                 )}`;
// //             }
// //           }

// //           /* =========================
// //              VIEW COUNT
// //           ========================= */

// //           const viewsNumber =
// //             Number(
// //               info.view_count ||
// //                 0
// //             );

// //           let views = "";

// //           if (
// //             viewsNumber >=
// //             1000000000
// //           ) {
// //             views =
// //               `${(
// //                 viewsNumber /
// //                 1000000000
// //               )
// //                 .toFixed(1)
// //                 .replace(
// //                   ".0",
// //                   ""
// //                 )}B views`;
// //           } else if (
// //             viewsNumber >=
// //             1000000
// //           ) {
// //             views =
// //               `${(
// //                 viewsNumber /
// //                 1000000
// //               )
// //                 .toFixed(1)
// //                 .replace(
// //                   ".0",
// //                   ""
// //                 )}M views`;
// //           } else if (
// //             viewsNumber >=
// //             1000
// //           ) {
// //             views =
// //               `${(
// //                 viewsNumber /
// //                 1000
// //               )
// //                 .toFixed(1)
// //                 .replace(
// //                   ".0",
// //                   ""
// //                 )}K views`;
// //           } else if (
// //             viewsNumber >
// //             0
// //           ) {
// //             views =
// //               `${viewsNumber} views`;
// //           }

// //           /* =========================
// //              THUMBNAIL
// //           ========================= */

// //           let thumbnail =
// //             info.thumbnail ||
// //             "";

// //           if (
// //             Array.isArray(
// //               info.thumbnails
// //             ) &&
// //             info.thumbnails
// //               .length
// //           ) {
// //             const best =
// //               info
// //                 .thumbnails[
// //                 info
// //                   .thumbnails
// //                   .length - 1
// //               ];

// //             if (
// //               best?.url
// //             ) {
// //               thumbnail =
// //                 best.url;
// //             }
// //           }

// //           /* =========================
// //              RESPONSE
// //           ========================= */

// //           return res.json({
// //             ok: true,

// //             title:
// //               info.title ||
// //               "",

// //             duration,

// //             views,

// //             viewCount:
// //               viewsNumber,

// //             thumb:
// //               thumbnail,

// //             youtubeUrl:
// //               info.webpage_url ||
// //               url,

// //             channel:
// //               info.channel ||
// //               info.uploader ||
// //               "",

// //             videoId:
// //               info.id || "",
// //           });
// //         } catch (
// //           parseError
// //         ) {
// //           console.error(
// //             "YouTube JSON parse error:",
// //             parseError
// //           );

// //           return res
// //             .status(500)
// //             .json({
// //               error:
// //                 "Invalid YouTube response",
// //             });
// //         }
// //       }
// //     );
// //   }
// // );

// // /* =========================================================
// //    PUBLIC VIDEOS
// // ========================================================= */

// // app.get(
// //   "/api/videos",
// //   async (
// //     _req,
// //     res
// //   ) => {
// //     try {
// //       const [rows] =
// //         await pool.query(`
// //           SELECT
// //             title,
// //             duration,
// //             views,
// //             thumb,
// //             youtube_url AS youtubeUrl,
// //             badge
// //           FROM videos
// //           ORDER BY sort_order, id
// //         `);

// //       res.json(
// //         rows.map(
// //           (row) => ({
// //             ...row,

// //             youtubeUrl:
// //               row.youtubeUrl ||
// //               "",

// //             badge:
// //               row.badge ||
// //               undefined,
// //           })
// //         )
// //       );
// //     } catch (error) {
// //       res
// //         .status(500)
// //         .json({
// //           error:
// //             error.message,
// //         });
// //     }
// //   }
// // );

// // /* =========================================================
// //    GALLERY
// // ========================================================= */

// // app.get(
// //   "/api/gallery",
// //   async (
// //     _req,
// //     res
// //   ) => {
// //     try {
// //       const [rows] =
// //         await pool.query(`
// //           SELECT
// //             src,
// //             likes,
// //             caption
// //           FROM gallery_items
// //           ORDER BY sort_order, id
// //         `);

// //       res.json(rows);
// //     } catch (error) {
// //       res
// //         .status(500)
// //         .json({
// //           error:
// //             error.message,
// //         });
// //     }
// //   }
// // );

// // /* =========================================================
// //    IMAGE UPLOAD
// // ========================================================= */

// // app.post(
// //   "/api/admin/upload",
// //   requireAuth,
// //   (
// //     req,
// //     res
// //   ) => {
// //     upload.single(
// //       "image"
// //     )(
// //       req,
// //       res,
// //       (error) => {
// //         if (error) {
// //           return res
// //             .status(400)
// //             .json({
// //               error:
// //                 error.message,
// //             });
// //         }

// //         if (
// //           !req.file
// //         ) {
// //           return res
// //             .status(400)
// //             .json({
// //               error:
// //                 "No image selected",
// //             });
// //         }

// //         res.json({
// //           ok: true,

// //           url:
// //             `${req.protocol}://` +
// //             `${req.get(
// //               "host"
// //             )}/uploads/` +
// //             `${req.file.filename}`,
// //         });
// //       }
// //     );
// //   }
// // );

// // /* =========================================================
// //    ADMIN LOGIN
// // ========================================================= */

// // app.post(
// //   "/api/admin/login",
// //   async (
// //     req,
// //     res
// //   ) => {
// //     const {
// //       username,
// //       password,
// //     } =
// //       req.body || {};

// //     if (
// //       !username ||
// //       !password
// //     ) {
// //       return res
// //         .status(400)
// //         .json({
// //           error:
// //             "Missing credentials",
// //         });
// //     }

// //     try {
// //       const [rows] =
// //         await pool.query(
// //           `
// //           SELECT password_hash
// //           FROM users
// //           WHERE username = ?
// //           LIMIT 1
// //           `,
// //           [
// //             username,
// //           ]
// //         );

// //       const valid =
// //         rows[0] &&
// //         (await bcrypt.compare(
// //           password,
// //           rows[0]
// //             .password_hash
// //         ));

// //       if (!valid) {
// //         return res
// //           .status(401)
// //           .json({
// //             error:
// //               "Invalid username or password",
// //           });
// //       }

// //       res.json({
// //         token:
// //           makeToken(
// //             username
// //           ),
// //       });
// //     } catch (error) {
// //       res
// //         .status(500)
// //         .json({
// //           error:
// //             error.message,
// //         });
// //     }
// //   }
// // );

// // /* =========================================================
// //    SAVE SITE
// // ========================================================= */

// // app.put(
// //   "/api/site",
// //   requireAuth,
// //   async (
// //     req,
// //     res
// //   ) => {
// //     if (
// //       !req.body ||
// //       typeof req.body !==
// //         "object"
// //     ) {
// //       return res
// //         .status(400)
// //         .json({
// //           error:
// //             "Invalid payload",
// //         });
// //     }

// //     try {
// //       const site =
// //         await saveSite(
// //           req.body
// //         );

// //       res.json({
// //         ok: true,
// //         site,
// //       });
// //     } catch (error) {
// //       res
// //         .status(500)
// //         .json({
// //           error:
// //             error.message,
// //         });
// //     }
// //   }
// // );

// // /* =========================================================
// //    CHANGE PASSWORD
// // ========================================================= */

// // app.post(
// //   "/api/admin/password",
// //   requireAuth,
// //   async (
// //     req,
// //     res
// //   ) => {
// //     const {
// //       current,
// //       next,
// //     } =
// //       req.body || {};

// //     if (
// //       !current ||
// //       !next
// //     ) {
// //       return res
// //         .status(400)
// //         .json({
// //           error:
// //             "Missing fields",
// //         });
// //     }

// //     if (
// //       String(
// //         next
// //       ).length < 6
// //     ) {
// //       return res
// //         .status(400)
// //         .json({
// //           error:
// //             "Password must be at least 6 characters",
// //         });
// //     }

// //     try {
// //       const [rows] =
// //         await pool.query(
// //           `
// //           SELECT password_hash
// //           FROM users
// //           WHERE username = ?
// //           LIMIT 1
// //           `,
// //           [
// //             req.username,
// //           ]
// //         );

// //       const valid =
// //         rows[0] &&
// //         (await bcrypt.compare(
// //           current,
// //           rows[0]
// //             .password_hash
// //         ));

// //       if (!valid) {
// //         return res
// //           .status(401)
// //           .json({
// //             error:
// //               "Current password is incorrect",
// //           });
// //       }

// //       const hash =
// //         await bcrypt.hash(
// //           next,
// //           10
// //         );

// //       await pool.execute(
// //         `
// //         UPDATE users
// //         SET password_hash = ?
// //         WHERE username = ?
// //         `,
// //         [
// //           hash,
// //           req.username,
// //         ]
// //       );

// //       res.json({
// //         ok: true,
// //       });
// //     } catch (error) {
// //       res
// //         .status(500)
// //         .json({
// //           error:
// //             error.message,
// //         });
// //     }
// //   }
// // );

// // /* =========================================================
// //    START SERVER
// // ========================================================= */

// // app.listen(
// //   PORT,
// //   () => {
// //     console.log(
// //       `Rathore Admin API running on http://localhost:${PORT}`
// //     );

// //     console.log(
// //       `yt-dlp path: ${path.join(
// //         __dirname,
// //         "..",
// //         "tools",
// //         "yt-dlp.exe"
// //       )}`
// //     );
// //   }
// // );
// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const crypto = require("crypto");
// const bcrypt = require("bcryptjs");
// const mysql = require("mysql2/promise");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
// const { execFile } = require("child_process");
// const { chromium } = require("playwright");

// const PORT = process.env.PORT || 4000;
// const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

// const SECRET =
//   process.env.SECRET ||
//   crypto.randomBytes(32).toString("hex");

// const app = express();

// /* =========================================================
//    INSTAGRAM PROFILE CACHE
// ========================================================= */

// const instagramProfileCache = new Map();

// const INSTAGRAM_PROFILE_CACHE_MS =
//   2 * 60 * 60 * 1000;

// /* =========================================================
//    MIDDLEWARE
// ========================================================= */

// app.use(
//   cors({
//     origin:
//       process.env.CORS_ORIGIN ||
//       true,
//   })
// );

// app.use(
//   express.json({
//     limit: "5mb",
//   })
// );

// /* =========================================================
//    UPLOAD DIRECTORY
// ========================================================= */

// const uploadDir =
//   path.join(__dirname, "uploads");

// fs.mkdirSync(uploadDir, {
//   recursive: true,
// });

// app.use(
//   "/uploads",
//   express.static(uploadDir, {
//     maxAge: "7d",
//     immutable: true,
//   })
// );

// /* =========================================================
//    IMAGE UPLOAD CONFIG
// ========================================================= */

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (
//       _req,
//       _file,
//       cb
//     ) => {
//       cb(null, uploadDir);
//     },

//     filename: (
//       _req,
//       file,
//       cb
//     ) => {
//       const ext =
//         path
//           .extname(
//             file.originalname
//           )
//           .toLowerCase();

//       const safeExt = [
//         ".jpg",
//         ".jpeg",
//         ".png",
//         ".webp",
//         ".gif",
//       ].includes(ext)
//         ? ext
//         : ".jpg";

//       cb(
//         null,
//         `${Date.now()}-${crypto
//           .randomBytes(6)
//           .toString(
//             "hex"
//           )}${safeExt}`
//       );
//     },
//   }),

//   limits: {
//     fileSize:
//       10 *
//       1024 *
//       1024,
//   },

//   fileFilter: (
//     _req,
//     file,
//     cb
//   ) => {
//     if (
//       /^image\/(jpeg|png|webp|gif)$/.test(
//         file.mimetype
//       )
//     ) {
//       cb(null, true);
//     } else {
//       cb(
//         new Error(
//           "Only JPG, PNG, WEBP and GIF images are allowed"
//         )
//       );
//     }
//   },
// });

// /* =========================================================
//    DATABASE
// ========================================================= */

// const pool =
//   mysql.createPool({
//     host:
//       process.env.DB_HOST ||
//       "localhost",

//     port: Number(
//       process.env.DB_PORT ||
//         3306
//     ),

//     user:
//       process.env.DB_USER ||
//       "root",

//     password:
//       process.env.DB_PASSWORD ||
//       "",

//     database:
//       process.env.DB_NAME ||
//       "bjp",

//     waitForConnections:
//       true,

//     connectionLimit: 10,

//     charset: "utf8mb4",
//   });

// /* =========================================================
//    AUTH TOKEN
// ========================================================= */

// function makeToken(
//   username
// ) {
//   const payload =
//     Buffer.from(
//       JSON.stringify({
//         username,
//         issuedAt:
//           Date.now(),
//       })
//     ).toString(
//       "base64url"
//     );

//   const signature =
//     crypto
//       .createHmac(
//         "sha256",
//         SECRET
//       )
//       .update(payload)
//       .digest(
//         "base64url"
//       );

//   return `${payload}.${signature}`;
// }

// function verifyToken(
//   token
// ) {
//   try {
//     const [
//       payload,
//       signature,
//     ] =
//       token.split(".");

//     if (
//       !payload ||
//       !signature
//     ) {
//       return null;
//     }

//     const expected =
//       crypto
//         .createHmac(
//           "sha256",
//           SECRET
//         )
//         .update(
//           payload
//         )
//         .digest(
//           "base64url"
//         );

//     if (
//       signature.length !==
//         expected.length ||
//       !crypto.timingSafeEqual(
//         Buffer.from(
//           signature
//         ),
//         Buffer.from(
//           expected
//         )
//       )
//     ) {
//       return null;
//     }

//     const parsed =
//       JSON.parse(
//         Buffer.from(
//           payload,
//           "base64url"
//         ).toString()
//       );

//     if (
//       !parsed.username ||
//       Date.now() -
//         parsed.issuedAt >
//         TOKEN_TTL_MS
//     ) {
//       return null;
//     }

//     return parsed.username;
//   } catch {
//     return null;
//   }
// }

// function requireAuth(
//   req,
//   res,
//   next
// ) {
//   const header =
//     req.headers
//       .authorization ||
//     "";

//   const token =
//     header.startsWith(
//       "Bearer "
//     )
//       ? header.slice(7)
//       : "";

//   const username =
//     verifyToken(token);

//   if (!username) {
//     return res
//       .status(401)
//       .json({
//         error:
//           "Unauthorized",
//       });
//   }

//   req.username =
//     username;

//   next();
// }

// /* =========================================================
//    HELPERS
// ========================================================= */

// function parseJson(
//   value
// ) {
//   return typeof value ===
//     "string"
//     ? JSON.parse(value)
//     : value;
// }

// /* =========================================================
//    READ SITE
// ========================================================= */

// async function readSite(
//   db = pool
// ) {
//   const [
//     settingsRows,
//   ] =
//     await db.query(
//       `
//       SELECT \`value\`
//       FROM settings
//       WHERE \`key\` = 'site'
//       LIMIT 1
//       `
//     );

//   if (
//     !settingsRows.length
//   ) {
//     throw new Error(
//       "Database is not seeded. Run server/schema.sql"
//     );
//   }

//   const [videoRows] =
//     await db.query(`
//       SELECT
//         title,
//         duration,
//         views,
//         thumb,
//         youtube_url AS youtubeUrl,
//         badge
//       FROM videos
//       ORDER BY sort_order, id
//     `);

//   const [
//     galleryRows,
//   ] =
//     await db.query(`
//       SELECT
//         src,
//         likes,
//         caption
//       FROM gallery_items
//       ORDER BY sort_order, id
//     `);

//   const settings =
//     parseJson(
//       settingsRows[0]
//         .value
//     );

//   delete settings.admin;

//   return {
//     ...settings,

//     videos:
//       videoRows.map(
//         (row) => ({
//           ...row,

//           youtubeUrl:
//             row.youtubeUrl ||
//             "",

//           badge:
//             row.badge ||
//             undefined,
//         })
//       ),

//     gallery:
//       galleryRows,
//   };
// }

// /* =========================================================
//    SAVE VIDEOS
// ========================================================= */

// async function replaceVideos(
//   connection,
//   videos
// ) {
//   await connection.query(
//     "DELETE FROM videos"
//   );

//   for (
//     const [
//       sortOrder,
//       video,
//     ] of videos.entries()
//   ) {
//     await connection.execute(
//       `
//       INSERT INTO videos (
//         sort_order,
//         title,
//         duration,
//         views,
//         thumb,
//         youtube_url,
//         badge
//       )
//       VALUES (?, ?, ?, ?, ?, ?, ?)
//       `,
//       [
//         sortOrder,

//         String(
//           video.title ||
//             ""
//         ),

//         String(
//           video.duration ||
//             ""
//         ),

//         String(
//           video.views ||
//             ""
//         ),

//         String(
//           video.thumb ||
//             ""
//         ),

//         video.youtubeUrl
//           ? String(
//               video.youtubeUrl
//             ).trim()
//           : null,

//         video.badge
//           ? String(
//               video.badge
//             )
//           : null,
//       ]
//     );
//   }
// }

// /* =========================================================
//    SAVE GALLERY
// ========================================================= */

// async function replaceGallery(
//   connection,
//   gallery
// ) {
//   await connection.query(
//     "DELETE FROM gallery_items"
//   );

//   for (
//     const [
//       sortOrder,
//       item,
//     ] of gallery.entries()
//   ) {
//     await connection.execute(
//       `
//       INSERT INTO gallery_items (
//         sort_order,
//         src,
//         likes,
//         caption
//       )
//       VALUES (?, ?, ?, ?)
//       `,
//       [
//         sortOrder,

//         String(
//           item.src ||
//             ""
//         ),

//         String(
//           item.likes ||
//             "0"
//         ),

//         String(
//           item.caption ||
//             ""
//         ),
//       ]
//     );
//   }
// }

// /* =========================================================
//    SAVE SITE
// ========================================================= */

// async function saveSite(
//   site
// ) {
//   const connection =
//     await pool.getConnection();

//   try {
//     await connection
//       .beginTransaction();

//     const videos =
//       Array.isArray(
//         site.videos
//       )
//         ? site.videos
//         : [];

//     const gallery =
//       Array.isArray(
//         site.gallery
//       )
//         ? site.gallery
//         : [];

//     const settings = {
//       ...site,
//     };

//     delete settings.videos;
//     delete settings.gallery;
//     delete settings.admin;

//     await connection.execute(
//       `
//       INSERT INTO settings (
//         \`key\`,
//         \`value\`
//       )
//       VALUES ('site', ?)

//       ON DUPLICATE KEY UPDATE
//       \`value\` =
//       VALUES(\`value\`)
//       `,
//       [
//         JSON.stringify(
//           settings
//         ),
//       ]
//     );

//     await replaceVideos(
//       connection,
//       videos
//     );

//     await replaceGallery(
//       connection,
//       gallery
//     );

//     await connection.commit();

//     return await readSite(
//       connection
//     );
//   } catch (error) {
//     await connection.rollback();

//     throw error;
//   } finally {
//     connection.release();
//   }
// }

// /* =========================================================
//    HEALTH
// ========================================================= */

// app.get(
//   "/api/health",
//   async (
//     _req,
//     res
//   ) => {
//     try {
//       await pool.query(
//         "SELECT 1"
//       );

//       res.json({
//         ok: true,

//         service:
//           "rathore-admin-api",

//         database:
//           "connected",
//       });
//     } catch (error) {
//       res
//         .status(503)
//         .json({
//           ok: false,

//           error:
//             error.message,
//         });
//     }
//   }
// );

// /* =========================================================
//    SITE DATA
// ========================================================= */

// app.get(
//   "/api/site",
//   async (
//     _req,
//     res
//   ) => {
//     try {
//       res.json(
//         await readSite()
//       );
//     } catch (error) {
//       res
//         .status(500)
//         .json({
//           error:
//             error.message,
//         });
//     }
//   }
// );

// /* =========================================================
//    INSTAGRAM PROFILE PICTURE
//    PLAYWRIGHT - NO API KEY
// ========================================================= */

// app.get(
//   "/api/instagram-profile",
//   async (
//     req,
//     res
//   ) => {
//     const username =
//       String(
//         req.query.username ||
//           ""
//       )
//         .trim()
//         .replace(
//           /^@/,
//           ""
//         );

//     /* =========================
//        VALIDATE USERNAME
//     ========================= */

//     if (!username) {
//       return res
//         .status(400)
//         .json({
//           error:
//             "Instagram username is required",
//         });
//     }

//     if (
//       !/^[A-Za-z0-9._]{1,30}$/.test(
//         username
//       )
//     ) {
//       return res
//         .status(400)
//         .json({
//           error:
//             "Invalid Instagram username",
//         });
//     }

//     const cacheKey =
//       username.toLowerCase();

//     /* =========================
//        CHECK CACHE
//     ========================= */

//     const cached =
//       instagramProfileCache.get(
//         cacheKey
//       );

//     if (
//       cached &&
//       Date.now() -
//         cached.fetchedAt <
//         INSTAGRAM_PROFILE_CACHE_MS
//     ) {
//       return res.json({
//         ok: true,

//         username,

//         profilePicture:
//           cached.profilePicture,

//         profileUrl:
//           `https://www.instagram.com/${username}/`,

//         cached: true,
//       });
//     }

//     let browser = null;

//     try {
//       /* =========================
//          OPEN CHROMIUM
//       ========================= */

//       browser =
//         await chromium.launch({
//           headless: true,
//         });

//       const context =
//         await browser.newContext({
//           userAgent:
//             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
//             "AppleWebKit/537.36 (KHTML, like Gecko) " +
//             "Chrome/131.0.0.0 Safari/537.36",

//           viewport: {
//             width: 1280,
//             height: 900,
//           },

//           locale:
//             "en-US",
//         });

//       const page =
//         await context.newPage();

//       const profileUrl =
//         `https://www.instagram.com/${username}/`;

//       /* =========================
//          OPEN INSTAGRAM
//       ========================= */

//       await page.goto(
//         profileUrl,
//         {
//           waitUntil:
//             "domcontentloaded",

//           timeout:
//             30000,
//         }
//       );

//       await page.waitForTimeout(
//         2500
//       );

//       /* =========================
//          METHOD 1 - OG IMAGE
//       ========================= */

//       let profilePicture =
//         await page
//           .locator(
//             'meta[property="og:image"]'
//           )
//           .getAttribute(
//             "content"
//           )
//           .catch(
//             () => null
//           );

//       /* =========================
//          METHOD 2 - IMAGE SRC
//       ========================= */

//       if (!profilePicture) {
//         profilePicture =
//           await page
//             .locator(
//               'link[rel="image_src"]'
//             )
//             .getAttribute(
//               "href"
//             )
//             .catch(
//               () => null
//             );
//       }

//       /* =========================
//          METHOD 3 - PROFILE IMG
//       ========================= */

//       if (!profilePicture) {
//         profilePicture =
//           await page.evaluate(
//             () => {
//               const images =
//                 Array.from(
//                   document
//                     .querySelectorAll(
//                       "img"
//                     )
//                 );

//               const likelyProfileImage =
//                 images.find(
//                   (
//                     img
//                   ) => {
//                     const alt =
//                       (
//                         img.getAttribute(
//                           "alt"
//                         ) ||
//                         ""
//                       ).toLowerCase();

//                     const src =
//                       img.getAttribute(
//                         "src"
//                       ) ||
//                       "";

//                     return (
//                       src &&
//                       (
//                         alt.includes(
//                           "profile picture"
//                         ) ||
//                         alt.includes(
//                           "profile photo"
//                         )
//                       )
//                     );
//                   }
//                 );

//               return (
//                 likelyProfileImage
//                   ?.src ||
//                 ""
//               );
//             }
//           );
//       }

//       /* =========================
//          CHECK IMAGE
//       ========================= */

//       if (
//         !profilePicture ||
//         !/^https?:\/\//i.test(
//           profilePicture
//         )
//       ) {
//         throw new Error(
//           "Instagram profile picture could not be found"
//         );
//       }

//       /* =========================
//          SAVE CACHE
//       ========================= */

//       instagramProfileCache.set(
//         cacheKey,
//         {
//           profilePicture,

//           fetchedAt:
//             Date.now(),
//         }
//       );

//       /* =========================
//          RESPONSE
//       ========================= */

//       return res.json({
//         ok: true,

//         username,

//         profilePicture,

//         profileUrl,

//         cached: false,
//       });
//     } catch (error) {
//       console.error(
//         "Instagram profile fetch error:",
//         error.message
//       );

//       return res
//         .status(502)
//         .json({
//           ok: false,

//           error:
//             "Could not fetch Instagram profile picture",
//         });
//     } finally {
//       /* =========================
//          CLOSE BROWSER
//       ========================= */

//       if (browser) {
//         await browser
//           .close()
//           .catch(
//             () => {}
//           );
//       }
//     }
//   }
// );

// /* =========================================================
//    YOUTUBE INFO USING YT-DLP
//    NO API KEY NEEDED
// ========================================================= */

// app.get(
//   "/api/youtube-info",
//   requireAuth,
//   (
//     req,
//     res
//   ) => {
//     const url =
//       String(
//         req.query.url ||
//           ""
//       ).trim();

//     /* =========================
//        CHECK URL
//     ========================= */

//     if (!url) {
//       return res
//         .status(400)
//         .json({
//           error:
//             "YouTube URL is required",
//         });
//     }

//     try {
//       const parsed =
//         new URL(url);

//       const allowedHosts =
//         [
//           "youtube.com",

//           "www.youtube.com",

//           "m.youtube.com",

//           "music.youtube.com",

//           "youtu.be",

//           "www.youtu.be",
//         ];

//       if (
//         !allowedHosts.includes(
//           parsed.hostname
//             .toLowerCase()
//         )
//       ) {
//         return res
//           .status(400)
//           .json({
//             error:
//               "Please enter a valid YouTube URL",
//           });
//       }
//     } catch {
//       return res
//         .status(400)
//         .json({
//           error:
//             "Invalid YouTube URL",
//         });
//     }

//     /* =========================
//        YT-DLP LOCATION
//     ========================= */

//     const ytdlpPath =
//       path.join(
//         __dirname,
//         "..",
//         "tools",
//         "yt-dlp.exe"
//       );

//     if (
//       !fs.existsSync(
//         ytdlpPath
//       )
//     ) {
//       return res
//         .status(500)
//         .json({
//           error:
//             "yt-dlp.exe not found in C:\\avc\\tools",
//         });
//     }

//     /* =========================
//        RUN YT-DLP
//     ========================= */

//     execFile(
//       ytdlpPath,

//       [
//         "--js-runtimes",
//         "node",

//         "--remote-components",
//         "ejs:github",

//         "--dump-single-json",

//         "--skip-download",

//         "--no-playlist",

//         "--no-warnings",

//         url,
//       ],

//       {
//         windowsHide:
//           true,

//         maxBuffer:
//           20 *
//           1024 *
//           1024,
//       },

//       (
//         error,
//         stdout,
//         stderr
//       ) => {
//         if (error) {
//           console.error(
//             "YT-DLP ERROR:"
//           );

//           console.error(
//             stderr ||
//               error.message
//           );

//           return res
//             .status(500)
//             .json({
//               error:
//                 "Could not fetch YouTube video information",
//             });
//         }

//         try {
//           const info =
//             JSON.parse(
//               stdout
//             );

//           /* =========================
//              DURATION
//           ========================= */

//           const durationSeconds =
//             Number(
//               info.duration ||
//                 0
//             );

//           const hours =
//             Math.floor(
//               durationSeconds /
//                 3600
//             );

//           const minutes =
//             Math.floor(
//               (
//                 durationSeconds %
//                 3600
//               ) /
//                 60
//             );

//           const seconds =
//             Math.floor(
//               durationSeconds %
//                 60
//             );

//           let duration =
//             "";

//           if (
//             durationSeconds >
//             0
//           ) {
//             if (
//               hours > 0
//             ) {
//               duration =
//                 `${hours}:` +
//                 `${String(
//                   minutes
//                 ).padStart(
//                   2,
//                   "0"
//                 )}:` +
//                 `${String(
//                   seconds
//                 ).padStart(
//                   2,
//                   "0"
//                 )}`;
//             } else {
//               duration =
//                 `${minutes}:` +
//                 `${String(
//                   seconds
//                 ).padStart(
//                   2,
//                   "0"
//                 )}`;
//             }
//           }

//           /* =========================
//              VIEW COUNT
//           ========================= */

//           const viewsNumber =
//             Number(
//               info.view_count ||
//                 0
//             );

//           let views =
//             "";

//           if (
//             viewsNumber >=
//             1000000000
//           ) {
//             views =
//               `${(
//                 viewsNumber /
//                 1000000000
//               )
//                 .toFixed(1)
//                 .replace(
//                   ".0",
//                   ""
//                 )}B views`;
//           } else if (
//             viewsNumber >=
//             1000000
//           ) {
//             views =
//               `${(
//                 viewsNumber /
//                 1000000
//               )
//                 .toFixed(1)
//                 .replace(
//                   ".0",
//                   ""
//                 )}M views`;
//           } else if (
//             viewsNumber >=
//             1000
//           ) {
//             views =
//               `${(
//                 viewsNumber /
//                 1000
//               )
//                 .toFixed(1)
//                 .replace(
//                   ".0",
//                   ""
//                 )}K views`;
//           } else if (
//             viewsNumber >
//             0
//           ) {
//             views =
//               `${viewsNumber} views`;
//           }

//           /* =========================
//              THUMBNAIL
//           ========================= */

//           let thumbnail =
//             info.thumbnail ||
//             "";

//           if (
//             Array.isArray(
//               info.thumbnails
//             ) &&
//             info.thumbnails
//               .length
//           ) {
//             const best =
//               info
//                 .thumbnails[
//                 info
//                   .thumbnails
//                   .length -
//                   1
//               ];

//             if (
//               best?.url
//             ) {
//               thumbnail =
//                 best.url;
//             }
//           }

//           /* =========================
//              RESPONSE
//           ========================= */

//           return res.json({
//             ok: true,

//             title:
//               info.title ||
//               "",

//             duration,

//             views,

//             viewCount:
//               viewsNumber,

//             thumb:
//               thumbnail,

//             youtubeUrl:
//               info.webpage_url ||
//               url,

//             channel:
//               info.channel ||
//               info.uploader ||
//               "",

//             videoId:
//               info.id ||
//               "",
//           });
//         } catch (
//           parseError
//         ) {
//           console.error(
//             "YouTube JSON parse error:",
//             parseError
//           );

//           return res
//             .status(500)
//             .json({
//               error:
//                 "Invalid YouTube response",
//             });
//         }
//       }
//     );
//   }
// );

// /* =========================================================
//    PUBLIC VIDEOS
// ========================================================= */

// app.get(
//   "/api/videos",
//   async (
//     _req,
//     res
//   ) => {
//     try {
//       const [rows] =
//         await pool.query(`
//           SELECT
//             title,
//             duration,
//             views,
//             thumb,
//             youtube_url AS youtubeUrl,
//             badge
//           FROM videos
//           ORDER BY sort_order, id
//         `);

//       res.json(
//         rows.map(
//           (
//             row
//           ) => ({
//             ...row,

//             youtubeUrl:
//               row.youtubeUrl ||
//               "",

//             badge:
//               row.badge ||
//               undefined,
//           })
//         )
//       );
//     } catch (error) {
//       res
//         .status(500)
//         .json({
//           error:
//             error.message,
//         });
//     }
//   }
// );

// /* =========================================================
//    GALLERY
// ========================================================= */

// app.get(
//   "/api/gallery",
//   async (
//     _req,
//     res
//   ) => {
//     try {
//       const [rows] =
//         await pool.query(`
//           SELECT
//             src,
//             likes,
//             caption
//           FROM gallery_items
//           ORDER BY sort_order, id
//         `);

//       res.json(
//         rows
//       );
//     } catch (error) {
//       res
//         .status(500)
//         .json({
//           error:
//             error.message,
//         });
//     }
//   }
// );

// /* =========================================================
//    IMAGE UPLOAD
// ========================================================= */

// app.post(
//   "/api/admin/upload",
//   requireAuth,
//   (
//     req,
//     res
//   ) => {
//     upload.single(
//       "image"
//     )(
//       req,
//       res,

//       (
//         error
//       ) => {
//         if (error) {
//           return res
//             .status(400)
//             .json({
//               error:
//                 error.message,
//             });
//         }

//         if (
//           !req.file
//         ) {
//           return res
//             .status(400)
//             .json({
//               error:
//                 "No image selected",
//             });
//         }

//         res.json({
//           ok: true,

//           url:
//             `${req.protocol}://` +
//             `${req.get(
//               "host"
//             )}/uploads/` +
//             `${req.file.filename}`,
//         });
//       }
//     );
//   }
// );

// /* =========================================================
//    ADMIN LOGIN
// ========================================================= */

// app.post(
//   "/api/admin/login",
//   async (
//     req,
//     res
//   ) => {
//     const {
//       username,
//       password,
//     } =
//       req.body ||
//       {};

//     if (
//       !username ||
//       !password
//     ) {
//       return res
//         .status(400)
//         .json({
//           error:
//             "Missing credentials",
//         });
//     }

//     try {
//       const [rows] =
//         await pool.query(
//           `
//           SELECT password_hash
//           FROM users
//           WHERE username = ?
//           LIMIT 1
//           `,
//           [
//             username,
//           ]
//         );

//       const valid =
//         rows[0] &&
//         (
//           await bcrypt.compare(
//             password,
//             rows[0]
//               .password_hash
//           )
//         );

//       if (!valid) {
//         return res
//           .status(401)
//           .json({
//             error:
//               "Invalid username or password",
//           });
//       }

//       res.json({
//         token:
//           makeToken(
//             username
//           ),
//       });
//     } catch (error) {
//       res
//         .status(500)
//         .json({
//           error:
//             error.message,
//         });
//     }
//   }
// );

// /* =========================================================
//    SAVE SITE
// ========================================================= */

// app.put(
//   "/api/site",
//   requireAuth,
//   async (
//     req,
//     res
//   ) => {
//     if (
//       !req.body ||
//       typeof req.body !==
//         "object"
//     ) {
//       return res
//         .status(400)
//         .json({
//           error:
//             "Invalid payload",
//         });
//     }

//     try {
//       const site =
//         await saveSite(
//           req.body
//         );

//       res.json({
//         ok: true,
//         site,
//       });
//     } catch (error) {
//       res
//         .status(500)
//         .json({
//           error:
//             error.message,
//         });
//     }
//   }
// );

// /* =========================================================
//    CHANGE PASSWORD
// ========================================================= */

// app.post(
//   "/api/admin/password",
//   requireAuth,
//   async (
//     req,
//     res
//   ) => {
//     const {
//       current,
//       next,
//     } =
//       req.body ||
//       {};

//     if (
//       !current ||
//       !next
//     ) {
//       return res
//         .status(400)
//         .json({
//           error:
//             "Missing fields",
//         });
//     }

//     if (
//       String(
//         next
//       ).length <
//       6
//     ) {
//       return res
//         .status(400)
//         .json({
//           error:
//             "Password must be at least 6 characters",
//         });
//     }

//     try {
//       const [rows] =
//         await pool.query(
//           `
//           SELECT password_hash
//           FROM users
//           WHERE username = ?
//           LIMIT 1
//           `,
//           [
//             req.username,
//           ]
//         );

//       const valid =
//         rows[0] &&
//         (
//           await bcrypt.compare(
//             current,
//             rows[0]
//               .password_hash
//           )
//         );

//       if (!valid) {
//         return res
//           .status(401)
//           .json({
//             error:
//               "Current password is incorrect",
//           });
//       }

//       const hash =
//         await bcrypt.hash(
//           next,
//           10
//         );

//       await pool.execute(
//         `
//         UPDATE users
//         SET password_hash = ?
//         WHERE username = ?
//         `,
//         [
//           hash,
//           req.username,
//         ]
//       );

//       res.json({
//         ok: true,
//       });
//     } catch (error) {
//       res
//         .status(500)
//         .json({
//           error:
//             error.message,
//         });
//     }
//   }
// );

// /* =========================================================
//    START SERVER
// ========================================================= */

// app.listen(
//   PORT,
//   () => {
//     console.log(
//       `Rathore Admin API running on http://localhost:${PORT}`
//     );

//     console.log(
//       `yt-dlp path: ${path.join(
//         __dirname,
//         "..",
//         "tools",
//         "yt-dlp.exe"
//       )}`
//     );
//   }
// );
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const mysql = require("mysql2/promise");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { execFile } = require("child_process");
const { chromium } = require("playwright");

const PORT = process.env.PORT || 4000;

const TOKEN_TTL_MS =
  12 * 60 * 60 * 1000;

const SECRET =
  process.env.SECRET ||
  crypto.randomBytes(32).toString("hex");

const app = express();

app.set("trust proxy", 1);

/* =========================================================
   INSTAGRAM PROFILE CACHE
========================================================= */

const instagramProfileCache = new Map();

const INSTAGRAM_PROFILE_CACHE_MS =
  2 * 60 * 60 * 1000;

/* =========================================================
   MIDDLEWARE
========================================================= */

// app.use(
//   cors({
//     origin:
//       process.env.CORS_ORIGIN ||
//       true,
//   })
// );
const allowedOrigins = new Set([
  "http://localhost:5173",
  "https://rathore-vlogs.vercel.app",

  ...String(
    process.env.CORS_ORIGIN || ""
  )
    .split(",")
    .map((origin) =>
      origin.trim()
    )
    .filter(Boolean),
]);

function isAllowedOrigin(origin) {
  // Direct browser / Postman / server requests
  if (!origin) {
    return true;
  }

  // Main website + localhost
  if (
    allowedOrigins.has(origin)
  ) {
    return true;
  }

  // Allow all Rathore Vlogs Vercel
  // preview/deployment domains
  const isVercelDomain =
    /^https:\/\/rathore-vlogs(?:-[a-z0-9-]+)?\.vercel\.app$/i.test(
      origin
    );

  if (isVercelDomain) {
    return true;
  }

  return false;
}

app.use(
  cors({
    origin: (
      origin,
      callback
    ) => {
      if (
        isAllowedOrigin(origin)
      ) {
        return callback(
          null,
          true
        );
      }

      return callback(
        new Error(
          "Not allowed by CORS"
        )
      );
    },
  })
);

app.use(
  express.json({
    limit: "5mb",
  })
);

/* =========================================================
   UPLOAD DIRECTORY
========================================================= */

const uploadDir =
  process.env.UPLOAD_DIR ||
  (
    process.env.RAILWAY_VOLUME_MOUNT_PATH
      ? path.join(
          process.env.RAILWAY_VOLUME_MOUNT_PATH,
          "uploads"
        )
      : path.join(
          __dirname,
          "uploads"
        )
  );

fs.mkdirSync(
  uploadDir,
  {
    recursive: true,
  }
);

app.use(
  "/uploads",
  express.static(
    uploadDir,
    {
      maxAge: "7d",
      immutable: true,
    }
  )
);

/* =========================================================
   IMAGE UPLOAD CONFIG
========================================================= */

const upload = multer({
  storage: multer.diskStorage({
    destination: (
      _req,
      _file,
      cb
    ) => {
      cb(
        null,
        uploadDir
      );
    },

    filename: (
      _req,
      file,
      cb
    ) => {
      const ext =
        path
          .extname(
            file.originalname
          )
          .toLowerCase();

      const safeExt =
        [
          ".jpg",
          ".jpeg",
          ".png",
          ".webp",
          ".gif",
        ].includes(ext)
          ? ext
          : ".jpg";

      cb(
        null,
        `${Date.now()}-${crypto
          .randomBytes(6)
          .toString("hex")}${safeExt}`
      );
    },
  }),

  limits: {
    fileSize:
      10 *
      1024 *
      1024,
  },

  fileFilter: (
    _req,
    file,
    cb
  ) => {
    if (
      /^image\/(jpeg|png|webp|gif)$/.test(
        file.mimetype
      )
    ) {
      cb(
        null,
        true
      );
    } else {
      cb(
        new Error(
          "Only JPG, PNG, WEBP and GIF images are allowed"
        )
      );
    }
  },
});

/* =========================================================
   DATABASE
========================================================= */

const pool =
  mysql.createPool({
    host:
      process.env.DB_HOST ||
      process.env.MYSQLHOST ||
      "localhost",

    port: Number(
      process.env.DB_PORT ||
      process.env.MYSQLPORT ||
      3306
    ),

    user:
      process.env.DB_USER ||
      process.env.MYSQLUSER ||
      "root",

    password:
      process.env.DB_PASSWORD ||
      process.env.MYSQLPASSWORD ||
      "",

    database:
      process.env.DB_NAME ||
      process.env.MYSQLDATABASE ||
      "bjp",

    waitForConnections: true,

    connectionLimit: 10,

    charset: "utf8mb4",
  });

/* =========================================================
   AUTH TOKEN
========================================================= */

function makeToken(
  username
) {
  const payload =
    Buffer.from(
      JSON.stringify({
        username,
        issuedAt:
          Date.now(),
      })
    ).toString(
      "base64url"
    );

  const signature =
    crypto
      .createHmac(
        "sha256",
        SECRET
      )
      .update(
        payload
      )
      .digest(
        "base64url"
      );

  return `${payload}.${signature}`;
}

function verifyToken(
  token
) {
  try {
    const [
      payload,
      signature,
    ] =
      token.split(".");

    if (
      !payload ||
      !signature
    ) {
      return null;
    }

    const expected =
      crypto
        .createHmac(
          "sha256",
          SECRET
        )
        .update(
          payload
        )
        .digest(
          "base64url"
        );

    if (
      signature.length !==
        expected.length ||
      !crypto.timingSafeEqual(
        Buffer.from(
          signature
        ),
        Buffer.from(
          expected
        )
      )
    ) {
      return null;
    }

    const parsed =
      JSON.parse(
        Buffer.from(
          payload,
          "base64url"
        ).toString()
      );

    if (
      !parsed.username ||
      Date.now() -
        parsed.issuedAt >
        TOKEN_TTL_MS
    ) {
      return null;
    }

    return parsed.username;
  } catch {
    return null;
  }
}

function requireAuth(
  req,
  res,
  next
) {
  const header =
    req.headers
      .authorization ||
    "";

  const token =
    header.startsWith(
      "Bearer "
    )
      ? header.slice(7)
      : "";

  const username =
    verifyToken(
      token
    );

  if (!username) {
    return res
      .status(401)
      .json({
        error:
          "Unauthorized",
      });
  }

  req.username =
    username;

  next();
}

/* =========================================================
   HELPERS
========================================================= */

function parseJson(
  value
) {
  return typeof value ===
    "string"
    ? JSON.parse(value)
    : value;
}

function forceHttps(value) {
  if (typeof value !== "string") {
    return value;
  }

  return value.replace(
    /^http:\/\/rathore-vlogs-production\.up\.railway\.app/i,
    "https://rathore-vlogs-production.up.railway.app"
  );
}

function normalizeHttps(value) {
  if (Array.isArray(value)) {
    return value.map(normalizeHttps);
  }

  if (
    value &&
    typeof value === "object"
  ) {
    return Object.fromEntries(
      Object.entries(value).map(
        ([key, item]) => [
          key,
          normalizeHttps(item),
        ]
      )
    );
  }

  return forceHttps(value);
}
/* =========================================================
   READ SITE
========================================================= */

async function readSite(
  db = pool
) {
  const [
    settingsRows,
  ] =
    await db.query(
      `
        SELECT \`value\`
        FROM settings
        WHERE \`key\` = 'site'
        LIMIT 1
      `
    );

  if (
    !settingsRows.length
  ) {
    throw new Error(
      "Database is not seeded. Run server/schema.sql"
    );
  }

  const [
    videoRows,
  ] =
    await db.query(
      `
        SELECT
          title,
          duration,
          views,
          thumb,
          youtube_url AS youtubeUrl,
          badge
        FROM videos
        ORDER BY sort_order, id
      `
    );

  const [
    galleryRows,
  ] =
    await db.query(
      `
        SELECT
          src,
          likes,
          caption
        FROM gallery_items
        ORDER BY sort_order, id
      `
    );

  const settings =
    parseJson(
      settingsRows[0].value
    );

  delete settings.admin;

  return {
    ...settings,

    videos:
      videoRows.map(
        (
          row
        ) => ({
          ...row,

          youtubeUrl:
            row.youtubeUrl ||
            "",

          badge:
            row.badge ||
            undefined,
        })
      ),

    gallery:
      galleryRows,
  };
}

/* =========================================================
   SAVE VIDEOS
========================================================= */

async function replaceVideos(
  connection,
  videos
) {
  await connection.query(
    "DELETE FROM videos"
  );

  for (
    const [
      sortOrder,
      video,
    ] of videos.entries()
  ) {
    await connection.execute(
      `
        INSERT INTO videos (
          sort_order,
          title,
          duration,
          views,
          thumb,
          youtube_url,
          badge
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        sortOrder,

        String(
          video.title ||
          ""
        ),

        String(
          video.duration ||
          ""
        ),

        String(
          video.views ||
          ""
        ),

        String(
          video.thumb ||
          ""
        ),

        video.youtubeUrl
          ? String(
              video.youtubeUrl
            ).trim()
          : null,

        video.badge
          ? String(
              video.badge
            )
          : null,
      ]
    );
  }
}

/* =========================================================
   SAVE GALLERY
========================================================= */

async function replaceGallery(
  connection,
  gallery
) {
  await connection.query(
    "DELETE FROM gallery_items"
  );

  for (
    const [
      sortOrder,
      item,
    ] of gallery.entries()
  ) {
    await connection.execute(
      `
        INSERT INTO gallery_items (
          sort_order,
          src,
          likes,
          caption
        )
        VALUES (?, ?, ?, ?)
      `,
      [
        sortOrder,

        String(
          item.src ||
          ""
        ),

        String(
          item.likes ||
          "0"
        ),

        String(
          item.caption ||
          ""
        ),
      ]
    );
  }
}
/* =========================================================
   FORGOT USERNAME / PASSWORD
========================================================= */

app.post(
  "/api/admin/recover",
  async (req, res) => {
    const {
      recoveryKey,
      newPassword,
    } = req.body || {};

    const savedRecoveryKey =
      process.env.ADMIN_RECOVERY_KEY || "";

    /* =========================
       CHECK RECOVERY SETUP
    ========================= */

    if (!savedRecoveryKey) {
      return res.status(503).json({
        error:
          "Account recovery is not configured",
      });
    }

    /* =========================
       CHECK REQUIRED FIELDS
    ========================= */

    if (!recoveryKey || !newPassword) {
      return res.status(400).json({
        error:
          "Recovery key and new password are required",
      });
    }

    /* =========================
       PASSWORD VALIDATION
    ========================= */

    if (String(newPassword).length < 6) {
      return res.status(400).json({
        error:
          "New password must be at least 6 characters",
      });
    }

    /* =========================
       VERIFY RECOVERY KEY
    ========================= */

    const enteredKey = Buffer.from(
      String(recoveryKey)
    );

    const correctKey = Buffer.from(
      String(savedRecoveryKey)
    );

    const validRecoveryKey =
      enteredKey.length === correctKey.length &&
      crypto.timingSafeEqual(
        enteredKey,
        correctKey
      );

    if (!validRecoveryKey) {
      return res.status(401).json({
        error:
          "Invalid recovery key",
      });
    }

    try {
      /* =========================
         GET ADMIN USERNAME
      ========================= */

      const [rows] = await pool.query(`
        SELECT username
        FROM users
        LIMIT 1
      `);

      if (!rows.length) {
        return res.status(404).json({
          error:
            "Admin account not found",
        });
      }

      const username =
        rows[0].username;

      /* =========================
         CREATE NEW PASSWORD HASH
      ========================= */

      const passwordHash =
        await bcrypt.hash(
          String(newPassword),
          12
        );

      /* =========================
         UPDATE PASSWORD
      ========================= */

      await pool.execute(
        `
        UPDATE users
        SET password_hash = ?
        WHERE username = ?
        `,
        [
          passwordHash,
          username,
        ]
      );

      /* =========================
         SUCCESS
      ========================= */

      return res.json({
        ok: true,
        username,
        message:
          "Account recovered successfully",
      });
    } catch (error) {
      console.error(
        "Admin recovery error:",
        error.message
      );

      return res.status(500).json({
        error:
          "Could not recover admin account",
      });
    }
  }
);
/* =========================================================
   SAVE SITE
========================================================= */

async function saveSite(
  site
) {
  const connection =
    await pool.getConnection();

  try {
    await connection
      .beginTransaction();

    const videos =
      Array.isArray(
        site.videos
      )
        ? site.videos
        : [];

    const gallery =
      Array.isArray(
        site.gallery
      )
        ? site.gallery
        : [];

    const settings = {
      ...site,
    };

    delete settings.videos;
    delete settings.gallery;
    delete settings.admin;

    await connection.execute(
      `
        INSERT INTO settings (
          \`key\`,
          \`value\`
        )
        VALUES ('site', ?)

        ON DUPLICATE KEY UPDATE
        \`value\` =
        VALUES(\`value\`)
      `,
      [
        JSON.stringify(
          settings
        ),
      ]
    );

    await replaceVideos(
      connection,
      videos
    );

    await replaceGallery(
      connection,
      gallery
    );

    await connection.commit();

    return await readSite(
      connection
    );
  } catch (
    error
  ) {
    await connection.rollback();

    throw error;
  } finally {
    connection.release();
  }
}

/* =========================================================
   HEALTH
========================================================= */

app.get(
  "/api/health",
  async (
    _req,
    res
  ) => {
    try {
      await pool.query(
        "SELECT 1"
      );

      return res.json({
        ok: true,

        service:
          "rathore-admin-api",

        database:
          "connected",
      });
    } catch (
      error
    ) {
      return res
        .status(503)
        .json({
          ok: false,

          error:
            error.message,
        });
    }
  }
);

/* =========================================================
   SITE DATA
========================================================= */

app.get(
  "/api/site",
  async (
    _req,
    res
  ) => {
    try {
      return res.json(
        await readSite()
      );
    } catch (
      error
    ) {
      return res
        .status(500)
        .json({
          error:
            error.message,
        });
    }
  }
);

/* =========================================================
   INSTAGRAM PROFILE PICTURE
   PLAYWRIGHT - NO API KEY
========================================================= */

app.get(
  "/api/instagram-profile",
  async (
    req,
    res
  ) => {
    const username =
      String(
        req.query.username ||
        ""
      )
        .trim()
        .replace(
          /^@/,
          ""
        );

    /* =========================
       VALIDATE USERNAME
    ========================= */

    if (
      !username
    ) {
      return res
        .status(400)
        .json({
          error:
            "Instagram username is required",
        });
    }

    if (
      !/^[A-Za-z0-9._]{1,30}$/.test(
        username
      )
    ) {
      return res
        .status(400)
        .json({
          error:
            "Invalid Instagram username",
        });
    }

    const cacheKey =
      username.toLowerCase();

    const cached =
      instagramProfileCache.get(
        cacheKey
      );

    /* =========================
       RETURN CACHED DP
    ========================= */

    if (
      cached &&
      Date.now() -
        cached.fetchedAt <
        INSTAGRAM_PROFILE_CACHE_MS
    ) {
      return res.json({
        ok: true,

        username,

        profilePicture:
          cached.profilePicture,

        profileUrl:
          `https://www.instagram.com/${username}/`,

        cached: true,
      });
    }

    let browser =
      null;

    try {
      /* =========================
         OPEN PLAYWRIGHT
      ========================= */

      browser =
        await chromium.launch({
          headless: true,

          args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
          ],
        });

      const context =
        await browser.newContext({
          userAgent:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
            "AppleWebKit/537.36 (KHTML, like Gecko) " +
            "Chrome/131.0.0.0 Safari/537.36",

          viewport: {
            width: 1280,
            height: 900,
          },

          locale:
            "en-US",
        });

      const page =
        await context.newPage();

      const profileUrl =
        `https://www.instagram.com/${username}/`;

      /* =========================
         OPEN PROFILE
      ========================= */

      await page.goto(
        profileUrl,
        {
          waitUntil:
            "domcontentloaded",

          timeout:
            30000,
        }
      );

      await page.waitForTimeout(
        2500
      );

      /* =========================
         METHOD 1
         OG IMAGE
      ========================= */

      let profilePicture =
        await page
          .locator(
            'meta[property="og:image"]'
          )
          .getAttribute(
            "content"
          )
          .catch(
            () => null
          );

      /* =========================
         METHOD 2
         IMAGE_SRC
      ========================= */

      if (
        !profilePicture
      ) {
        profilePicture =
          await page
            .locator(
              'link[rel="image_src"]'
            )
            .getAttribute(
              "href"
            )
            .catch(
              () => null
            );
      }

      /* =========================
         METHOD 3
         FIND PROFILE IMAGE
      ========================= */

      if (
        !profilePicture
      ) {
        profilePicture =
          await page.evaluate(
            () => {
              const images =
                Array.from(
                  document
                    .querySelectorAll(
                      "img"
                    )
                );

              const profileImage =
                images.find(
                  (
                    img
                  ) => {
                    const alt =
                      (
                        img.getAttribute(
                          "alt"
                        ) ||
                        ""
                      ).toLowerCase();

                    const src =
                      img.getAttribute(
                        "src"
                      ) ||
                      "";

                    return (
                      src &&
                      (
                        alt.includes(
                          "profile picture"
                        ) ||
                        alt.includes(
                          "profile photo"
                        )
                      )
                    );
                  }
                );

              return (
                profileImage?.src ||
                ""
              );
            }
          );
      }

      /* =========================
         VALIDATE RESULT
      ========================= */

      if (
        !profilePicture ||
        !/^https?:\/\//i.test(
          profilePicture
        )
      ) {
        throw new Error(
          "Instagram profile picture could not be found"
        );
      }

      /* =========================
         CACHE PROFILE DP
      ========================= */

      instagramProfileCache.set(
        cacheKey,
        {
          profilePicture,

          fetchedAt:
            Date.now(),
        }
      );

      /* =========================
         RESPONSE
      ========================= */

      return res.json({
        ok: true,

        username,

        profilePicture,

        profileUrl,

        cached: false,
      });
    } catch (
      error
    ) {
      console.error(
        "Instagram profile fetch error:",
        error.message
      );

      return res
        .status(502)
        .json({
          ok: false,

          error:
            "Could not fetch Instagram profile picture",
        });
    } finally {
      if (
        browser
      ) {
        await browser
          .close()
          .catch(
            () => {}
          );
      }
    }
  }
);

/* =========================================================
   YOUTUBE INFO USING YT-DLP
   NO API KEY
========================================================= */

app.get(
  "/api/youtube-info",
  requireAuth,
  (
    req,
    res
  ) => {
    const url =
      String(
        req.query.url ||
        ""
      ).trim();

    /* =========================
       VALIDATE URL
    ========================= */

    if (
      !url
    ) {
      return res
        .status(400)
        .json({
          error:
            "YouTube URL is required",
        });
    }

    try {
      const parsed =
        new URL(
          url
        );

      const allowedHosts =
        [
          "youtube.com",
          "www.youtube.com",
          "m.youtube.com",
          "music.youtube.com",
          "youtu.be",
          "www.youtu.be",
        ];

      if (
        !allowedHosts.includes(
          parsed.hostname
            .toLowerCase()
        )
      ) {
        return res
          .status(400)
          .json({
            error:
              "Please enter a valid YouTube URL",
          });
      }
    } catch {
      return res
        .status(400)
        .json({
          error:
            "Invalid YouTube URL",
        });
    }

    /* =========================
       YT-DLP LOCATION

       WINDOWS:
       C:\avc\tools\yt-dlp.exe

       DEPLOY / LINUX:
       /usr/local/bin/yt-dlp
       or system yt-dlp
    ========================= */

    const ytdlpPath =
      process.env.YTDLP_PATH ||
      (
        process.platform ===
        "win32"
          ? path.join(
              __dirname,
              "..",
              "tools",
              "yt-dlp.exe"
            )
          : "yt-dlp"
      );

    /* =========================
       WINDOWS FILE CHECK
    ========================= */

    if (
      process.platform ===
        "win32" &&
      !fs.existsSync(
        ytdlpPath
      )
    ) {
      return res
        .status(500)
        .json({
          error:
            "yt-dlp.exe not found in C:\\avc\\tools",
        });
    }

    /* =========================
       RUN YT-DLP
    ========================= */

    execFile(
      ytdlpPath,

      [
        "--js-runtimes",
        "node",

        "--remote-components",
        "ejs:github",

        "--dump-single-json",

        "--skip-download",

        "--no-playlist",

        "--no-warnings",

        url,
      ],

      {
        windowsHide:
          true,

        maxBuffer:
          20 *
          1024 *
          1024,
      },

      (
        error,
        stdout,
        stderr
      ) => {
        if (
          error
        ) {
          console.error(
            "YT-DLP ERROR:"
          );

          console.error(
            stderr ||
            error.message
          );

          return res
            .status(500)
            .json({
              error:
                "Could not fetch YouTube video information",
            });
        }

        try {
          const info =
            JSON.parse(
              stdout
            );

          /* =========================
             DURATION
          ========================= */

          const durationSeconds =
            Number(
              info.duration ||
              0
            );

          const hours =
            Math.floor(
              durationSeconds /
              3600
            );

          const minutes =
            Math.floor(
              (
                durationSeconds %
                3600
              ) /
              60
            );

          const seconds =
            Math.floor(
              durationSeconds %
              60
            );

          let duration =
            "";

          if (
            durationSeconds >
            0
          ) {
            if (
              hours >
              0
            ) {
              duration =
                `${hours}:` +
                `${String(
                  minutes
                ).padStart(
                  2,
                  "0"
                )}:` +
                `${String(
                  seconds
                ).padStart(
                  2,
                  "0"
                )}`;
            } else {
              duration =
                `${minutes}:` +
                `${String(
                  seconds
                ).padStart(
                  2,
                  "0"
                )}`;
            }
          }

          /* =========================
             VIEW COUNT
          ========================= */

          const viewsNumber =
            Number(
              info.view_count ||
              0
            );

          let views =
            "";

          if (
            viewsNumber >=
            1000000000
          ) {
            views =
              `${(
                viewsNumber /
                1000000000
              )
                .toFixed(1)
                .replace(
                  ".0",
                  ""
                )}B views`;
          } else if (
            viewsNumber >=
            1000000
          ) {
            views =
              `${(
                viewsNumber /
                1000000
              )
                .toFixed(1)
                .replace(
                  ".0",
                  ""
                )}M views`;
          } else if (
            viewsNumber >=
            1000
          ) {
            views =
              `${(
                viewsNumber /
                1000
              )
                .toFixed(1)
                .replace(
                  ".0",
                  ""
                )}K views`;
          } else if (
            viewsNumber >
            0
          ) {
            views =
              `${viewsNumber} views`;
          }

          /* =========================
             THUMBNAIL
          ========================= */

          let thumbnail =
            info.thumbnail ||
            "";

          if (
            Array.isArray(
              info.thumbnails
            ) &&
            info.thumbnails
              .length
          ) {
            const best =
              info.thumbnails[
                info.thumbnails.length -
                1
              ];

            if (
              best?.url
            ) {
              thumbnail =
                best.url;
            }
          }

          /* =========================
             RESPONSE
          ========================= */

          return res.json({
            ok: true,

            title:
              info.title ||
              "",

            duration,

            views,

            viewCount:
              viewsNumber,

            thumb:
              thumbnail,

            youtubeUrl:
              info.webpage_url ||
              url,

            channel:
              info.channel ||
              info.uploader ||
              "",

            videoId:
              info.id ||
              "",
          });
        } catch (
          parseError
        ) {
          console.error(
            "YouTube JSON parse error:",
            parseError
          );

          return res
            .status(500)
            .json({
              error:
                "Invalid YouTube response",
            });
        }
      }
    );
  }
);

/* =========================================================
   PUBLIC VIDEOS
========================================================= */

app.get(
  "/api/videos",
  async (
    _req,
    res
  ) => {
    try {
      const [
        rows,
      ] =
        await pool.query(
          `
            SELECT
              title,
              duration,
              views,
              thumb,
              youtube_url AS youtubeUrl,
              badge
            FROM videos
            ORDER BY sort_order, id
          `
        );

      return res.json(
        rows.map(
          (
            row
          ) => ({
            ...row,

            youtubeUrl:
              row.youtubeUrl ||
              "",

            badge:
              row.badge ||
              undefined,
          })
        )
      );
    } catch (
      error
    ) {
      return res
        .status(500)
        .json({
          error:
            error.message,
        });
    }
  }
);

/* =========================================================
   GALLERY
========================================================= */

app.get(
  "/api/gallery",
  async (
    _req,
    res
  ) => {
    try {
      const [
        rows,
      ] =
        await pool.query(
          `
            SELECT
              src,
              likes,
              caption
            FROM gallery_items
            ORDER BY sort_order, id
          `
        );

      return res.json(
        rows
      );
    } catch (
      error
    ) {
      return res
        .status(500)
        .json({
          error:
            error.message,
        });
    }
  }
);

/* =========================================================
   IMAGE UPLOAD
========================================================= */

app.post(
  "/api/admin/upload",
  requireAuth,
  (
    req,
    res
  ) => {
    upload.single(
      "image"
    )(
      req,
      res,
      (
        error
      ) => {
        if (
          error
        ) {
          return res
            .status(400)
            .json({
              error:
                error.message,
            });
        }

        if (
          !req.file
        ) {
          return res
            .status(400)
            .json({
              error:
                "No image selected",
            });
        }

       const protocol =
  process.env.NODE_ENV === "production"
    ? "https"
    : req.protocol;

const uploadedUrl =
  `${protocol}://` +
  `${req.get(
    "host"
  )}/uploads/` +
  `${req.file.filename}`;

        return res.json({
          ok: true,

          url:
            uploadedUrl,
        });
      }
    );
  }
);

/* =========================================================
   ADMIN LOGIN
========================================================= */

app.post(
  "/api/admin/login",
  async (
    req,
    res
  ) => {
    const {
      username,
      password,
    } =
      req.body ||
      {};

    if (
      !username ||
      !password
    ) {
      return res
        .status(400)
        .json({
          error:
            "Missing credentials",
        });
    }

    try {
      const [
        rows,
      ] =
        await pool.query(
          `
            SELECT
              password_hash
            FROM users
            WHERE username = ?
            LIMIT 1
          `,
          [
            username,
          ]
        );

      const valid =
        rows[0] &&
        (
          await bcrypt.compare(
            password,
            rows[0]
              .password_hash
          )
        );

      if (
        !valid
      ) {
        return res
          .status(401)
          .json({
            error:
              "Invalid username or password",
          });
      }

      return res.json({
        token:
          makeToken(
            username
          ),
      });
    } catch (
      error
    ) {
      return res
        .status(500)
        .json({
          error:
            error.message,
        });
    }
  }
);

/* =========================================================
   SAVE SITE
========================================================= */

app.put(
  "/api/site",
  requireAuth,
  async (
    req,
    res
  ) => {
    if (
      !req.body ||
      typeof req.body !==
        "object"
    ) {
      return res
        .status(400)
        .json({
          error:
            "Invalid payload",
        });
    }

    try {
      const site =
        await saveSite(
          req.body
        );

      return res.json({
        ok: true,

        site,
      });
    } catch (
      error
    ) {
      return res
        .status(500)
        .json({
          error:
            error.message,
        });
    }
  }
);

/* =========================================================
   CHANGE PASSWORD
========================================================= */

app.post(
  "/api/admin/password",
  requireAuth,
  async (
    req,
    res
  ) => {
    const {
      current,
      next,
    } =
      req.body ||
      {};

    if (
      !current ||
      !next
    ) {
      return res
        .status(400)
        .json({
          error:
            "Missing fields",
        });
    }

    if (
      String(
        next
      ).length <
      6
    ) {
      return res
        .status(400)
        .json({
          error:
            "Password must be at least 6 characters",
        });
    }

    try {
      const [
        rows,
      ] =
        await pool.query(
          `
            SELECT
              password_hash
            FROM users
            WHERE username = ?
            LIMIT 1
          `,
          [
            req.username,
          ]
        );

      const valid =
        rows[0] &&
        (
          await bcrypt.compare(
            current,
            rows[0]
              .password_hash
          )
        );

      if (
        !valid
      ) {
        return res
          .status(401)
          .json({
            error:
              "Current password is incorrect",
          });
      }

      const hash =
        await bcrypt.hash(
          next,
          10
        );

      await pool.execute(
        `
          UPDATE users
          SET password_hash = ?
          WHERE username = ?
        `,
        [
          hash,
          req.username,
        ]
      );

      return res.json({
        ok: true,
      });
    } catch (
      error
    ) {
      return res
        .status(500)
        .json({
          error:
            error.message,
        });
    }
  }
);

/* =========================================================
   START SERVER
========================================================= */

app.listen(
  PORT,
  () => {
    console.log(
      `Rathore Admin API running on http://localhost:${PORT}`
    );

    console.log(
      `Uploads directory: ${uploadDir}`
    );

    console.log(
      `yt-dlp path: ${
        process.env.YTDLP_PATH ||
        (
          process.platform ===
          "win32"
            ? path.join(
                __dirname,
                "..",
                "tools",
                "yt-dlp.exe"
              )
            : "yt-dlp"
        )
      }`
    );
  }
);