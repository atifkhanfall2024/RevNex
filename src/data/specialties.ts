export type Specialty = {
  slug: string;
  title: string;
  description: string;
};

export const specialties: Specialty[] = [
  {
    slug: "mental-behavioral-health",
    title: "Mental & Behavioral Health",
    description:
      "RCM tailored for therapy sessions, psychiatric evaluations, and behavioral health billing complexities.",
  },
  {
    slug: "physical-occupational-therapy",
    title: "Physical & Occupational Therapy",
    description:
      "Specialized billing for PT/OT visits, treatment plans, and therapy cap management.",
  },
  {
    slug: "speech-therapy",
    title: "Speech Therapy",
    description:
      "Accurate coding and auth management for speech-language pathology services.",
  },
  {
    slug: "primary-care",
    title: "Primary Care",
    description:
      "End-to-end RCM for family medicine and general practice workflows.",
  },
  {
    slug: "internal-medicine",
    title: "Internal Medicine",
    description:
      "Complex visit coding, chronic care management, and preventive service billing.",
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    description:
      "Surgical and non-surgical ortho billing with implant and DME coordination.",
  },
  {
    slug: "pain-management",
    title: "Pain Management",
    description:
      "Specialized auth and coding for interventional pain procedures and injections.",
  },
  {
    slug: "pediatrics",
    title: "Pediatrics",
    description:
      "Well-child visits, immunization billing, and pediatric-specific payer rules.",
  },
  {
    slug: "chiropractic",
    title: "Chiropractic",
    description:
      "Visit-based billing, care plan management, and payer-specific chiropractic rules.",
  },
  {
    slug: "dermatology",
    title: "Dermatology",
    description:
      "Procedure-heavy billing for biopsies, Mohs surgery, and cosmetic vs. medical splits.",
  },
];

export function getSpecialtyBySlug(slug: string): Specialty | undefined {
  return specialties.find((s) => s.slug === slug);
}
