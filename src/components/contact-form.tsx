"use client";

import { consentCheckboxText } from "@/data/legal-content";
import { servicePages, siteSettings } from "@/data/site-content";
import Link from "next/link";
import { FormEvent, useState } from "react";

type ContactFormProps = {
  compact?: boolean;
  initialTopic?: string;
};

const defaultTopic = "Allgemeine Anfrage";
const baseTopicOptions = [
  defaultTopic,
  "Immobilien",
  "Costa Blanca",
  "Auswandern nach Spanien",
  "Ratgeber",
  ...servicePages.map((page) => page.title),
];

function buildMailtoBody(values: Record<string, string>) {
  return [
    `Vorname: ${values.firstName}`,
    `Nachname: ${values.lastName}`,
    `E-Mail: ${values.email}`,
    `Telefon: ${values.phone || "-"}`,
    `Thema: ${values.topic}`,
    "",
    "Nachricht:",
    values.message,
  ].join("\n");
}

export function ContactForm({
  compact = false,
  initialTopic,
}: ContactFormProps) {
  const [topic, setTopic] = useState(initialTopic?.trim() || defaultTopic);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const topicOptions = Array.from(
    new Set([...baseTopicOptions, initialTopic?.trim() || ""]),
  ).filter(Boolean);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      topic: String(formData.get("topic") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.topic ||
      !values.message ||
      !consent
    ) {
      setError(
        "Bitte füllen Sie die Pflichtfelder aus und bestätigen Sie die Einwilligung.",
      );
      return;
    }

    setError("");

    const mailto = new URL(`mailto:${siteSettings.email}`);
    mailto.searchParams.set(
      "subject",
      `Anfrage über die Website: ${values.topic}`,
    );
    mailto.searchParams.set("body", buildMailtoBody(values));

    window.location.href = mailto.toString();
  };

  const inputClasses =
    "w-full rounded-[1.3rem] border border-[#0d2230]/10 bg-white px-4 py-3.5 text-sm text-[#163749] outline-none transition placeholder:text-[#7a8d98] focus:border-[#c59a5a] focus:ring-4 focus:ring-[#c59a5a]/10";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] border border-[#0d2230]/10 bg-white p-6 shadow-[0_22px_60px_rgba(17,44,60,0.08)] sm:p-8"
    >
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#7a8d98]">
            Vorname *
          </label>
          <input
            name="firstName"
            type="text"
            className={inputClasses}
            placeholder="Vorname"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#7a8d98]">
            Nachname *
          </label>
          <input
            name="lastName"
            type="text"
            className={inputClasses}
            placeholder="Nachname"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#7a8d98]">
            E-Mail *
          </label>
          <input
            name="email"
            type="email"
            className={inputClasses}
            placeholder="info@beispiel.de"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#7a8d98]">
            Telefon
          </label>
          <input
            name="phone"
            type="tel"
            className={inputClasses}
            placeholder="+49 ..."
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#7a8d98]">
          Thema *
        </label>
        <select
          name="topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          className={inputClasses}
        >
          {topicOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#7a8d98]">
          Nachricht *
        </label>
        <textarea
          name="message"
          rows={compact ? 5 : 7}
          className={`${inputClasses} resize-none`}
          placeholder="Worum geht es genau? Je klarer Ihre Anfrage, desto besser können wir den nächsten Schritt vorbereiten."
        />
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-[1.4rem] border border-[#0d2230]/8 bg-[#f8fcfe] px-4 py-4 text-sm leading-7 text-[#45606f]">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-[#b6c8d3] text-[#c59a5a] focus:ring-[#c59a5a]"
        />
        <span>
          {consentCheckboxText}{" "}
          <Link
            href="/rechtliches#datenschutz"
            className="font-semibold text-[#1c5673] underline decoration-[#c59a5a]/50 underline-offset-4"
          >
            Datenschutzerklärung
          </Link>
          .
        </span>
      </label>

      {error ? (
        <p className="mt-4 text-sm text-[#9c4d39]">{error}</p>
      ) : (
        <p className="mt-4 text-sm text-[#6d8290]">
          Die Anfrage wird per E-Mail an {siteSettings.email} vorbereitet.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#d7b172] px-6 py-3.5 text-sm font-semibold text-[#08131b] shadow-[0_18px_36px_rgba(184,135,72,0.22)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
        >
          Anfrage senden
        </button>
        <Link
          href={siteSettings.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[#183f55]/12 bg-[#eff7fb] px-6 py-3.5 text-sm font-semibold text-[#14384e] transition hover:bg-white"
        >
          Lieber per WhatsApp?
        </Link>
      </div>
    </form>
  );
}
