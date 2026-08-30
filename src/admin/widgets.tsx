import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export function Card({
  title,
  description,
  children,
  actions,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
          {description && (
            <p className="mt-1 text-xs leading-relaxed text-white/45">{description}</p>
          )}
        </div>
        {actions}
      </div>
      {children}
    </div>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
        {label}
      </span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-white/35">{hint}</span>}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/15 bg-ink/60 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(inputCls, props.className)} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(inputCls, "min-h-24 resize-y", props.className)} />;
}

export function Btn({
  children,
  onClick,
  variant = "primary",
  disabled,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "danger";
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "bg-gradient-to-r from-brand to-brand-2 text-white shadow-lg shadow-brand/25 hover:brightness-110",
        variant === "ghost" &&
          "border border-white/15 text-white/80 hover:border-white/40 hover:text-white",
        variant === "danger" &&
          "border border-red-500/40 text-red-400 hover:bg-red-500/10",
        className
      )}
    >
      {children}
    </button>
  );
}

export function IconBtn({
  children,
  onClick,
  title,
  disabled,
  danger,
}: {
  children: ReactNode;
  onClick?: () => void;
  title?: string;
  disabled?: boolean;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={cn(
        "flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 text-xs text-white/60 transition-all hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30",
        danger && "hover:border-red-500/50 hover:bg-red-500/15 hover:text-red-400"
      )}
    >
      {children}
    </button>
  );
}

export function SaveBar({ onSave, saving }: { onSave: () => void; saving: boolean }) {
  return (
    <div className="sticky bottom-4 z-10 mt-2 flex justify-end">
      <button
        onClick={onSave}
        disabled={saving}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-all hover:brightness-110 disabled:opacity-60"
      >
        {saving ? (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Saving…
          </>
        ) : (
          "💾 Save changes"
        )}
      </button>
    </div>
  );
}
