"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { specialties } from "@/data/specialties";
import { states } from "@/data/states";

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  options?: { value: string; label: string }[];
};

function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  as = "input",
  options,
}: FormFieldProps) {
  const baseClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/15 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-brand-500 dark:focus:bg-slate-900";

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className={baseClass}
        />
      ) : as === "select" ? (
        <select id={name} name={name} required={required} className={baseClass}>
          <option value="">Select...</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
}

function FormSuccess({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900/50 dark:bg-green-950/40">
      <CheckCircle className="mx-auto h-12 w-12 text-green-600 dark:text-green-400" />
      <h3 className="mt-4 text-xl font-bold text-green-900 dark:text-green-100">{title}</h3>
      <p className="mt-2 text-green-700 dark:text-green-300">{message}</p>
    </div>
  );
}

const specialtyOptions = specialties.map((s) => ({
  value: s.slug,
  label: s.title,
}));

const stateOptions = states.map((s) => ({
  value: s.code,
  label: `${s.name} (${s.code})`,
}));

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // UI only — backend will be connected later
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Consultation Request Received!"
        message="Our team will contact you within 1 business day to schedule your consultation."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" name="fullName" required placeholder="Dr. John Smith" />
        <FormField label="Email" name="email" type="email" required placeholder="you@practice.com" />
        <FormField label="Phone" name="phone" type="tel" required placeholder="+1 (555) 000-0000" />
        <FormField label="Practice Name" name="practiceName" required placeholder="Smith Family Medicine" />
        <FormField label="Specialty" name="specialty" as="select" required options={specialtyOptions} />
        <FormField label="State" name="state" as="select" required options={stateOptions} />
      </div>
      <FormField
        label="Message (Optional)"
        name="message"
        as="textarea"
        placeholder="Tell us about your current RCM challenges..."
      />
      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Book Consultation"
        )}
      </Button>
    </form>
  );
}

export function AssessmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Assessment Request Submitted!"
        message="We'll begin your free 2-week RCM assessment and reach out with next steps shortly."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" name="fullName" required placeholder="Dr. Jane Doe" />
        <FormField label="Email" name="email" type="email" required placeholder="you@clinic.com" />
        <FormField label="Phone" name="phone" type="tel" required placeholder="+1 (555) 000-0000" />
        <FormField label="Practice Name" name="practiceName" required placeholder="Doe Medical Group" />
        <FormField label="Number of Providers" name="providers" required placeholder="e.g. 5" />
        <FormField label="Monthly Patient Volume" name="volume" required placeholder="e.g. 500 visits" />
        <FormField label="Specialty" name="specialty" as="select" required options={specialtyOptions} />
        <FormField label="State" name="state" as="select" required options={stateOptions} />
      </div>
      <FormField
        label="Current RCM Challenges"
        name="challenges"
        as="textarea"
        required
        placeholder="Describe your biggest billing pain points — denials, AR aging, staffing, etc."
      />
      <Button type="submit" size="lg" variant="secondary" className="w-full sm:w-auto" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Request Free Assessment"
        )}
      </Button>
    </form>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Message Sent!"
        message="Thank you for reaching out. We'll get back to you within 24 hours."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" name="name" required placeholder="Your name" />
        <FormField label="Email" name="email" type="email" required placeholder="you@email.com" />
      </div>
      <FormField label="Subject" name="subject" required placeholder="How can we help?" />
      <FormField label="Message" name="message" as="textarea" required placeholder="Your message..." />
      <Button type="submit" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
