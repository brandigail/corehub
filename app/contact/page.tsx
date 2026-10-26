import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { cvProfile } from "@/data/cv";

export const metadata: Metadata = {
  title: "Contact | CoreHub",
  description: `Get in touch with ${cvProfile.name} about roles, projects or questions.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Get in touch</h1>
      <p className="mt-3 text-lg leading-7 text-muted">
        Hiring, or curious about one of the projects? Send a message, or email{" "}
        <a href={`mailto:${cvProfile.email}`} className="text-accent underline">
          {cvProfile.email}
        </a>
        .
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
