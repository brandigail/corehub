"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { cvProfile } from "@/data/cv";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-base focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const body = new URLSearchParams(new FormData(event.currentTarget) as unknown as Record<string, string>);
    body.set("form-name", "contact");
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="rounded-2xl bg-accent-soft p-6 text-accent">
        Thanks, your message is on its way. I&apos;ll reply as soon as I can.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p aria-hidden className="hidden">
        <label>
          Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div>
        <label htmlFor="contact-name" className="font-medium">Name</label>
        <input id="contact-name" name="name" required maxLength={100} autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="contact-email" className="font-medium">Email</label>
        <input id="contact-email" name="email" type="email" required maxLength={150} autoComplete="email" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="contact-message" className="font-medium">Message</label>
        <textarea id="contact-message" name="message" required rows={6} maxLength={2000} className={fieldClass} />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-accent-foreground transition-colors hover:bg-accent-hover disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"} <Send size={16} aria-hidden />
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700 dark:text-red-400">
          Something went wrong sending that. Please email me directly at{" "}
          <a href={`mailto:${cvProfile.email}`} className="underline">{cvProfile.email}</a>.
        </p>
      )}
    </form>
  );
}
