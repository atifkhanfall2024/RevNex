export type Audience = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
};

export const audiences: Audience[] = [
  {
    slug: "physician-practices",
    title: "Physician Practices",
    description:
      "Solo and small-group practices that need reliable RCM without the overhead of an in-house billing team.",
    highlights: [
      "Dedicated billing specialist assigned to your practice",
      "Transparent monthly reporting",
      "Scalable as your patient volume grows",
    ],
  },
  {
    slug: "medical-groups",
    title: "Medical Groups",
    description:
      "Multi-provider groups requiring coordinated billing across specialties and locations.",
    highlights: [
      "Multi-location revenue consolidation",
      "Provider-level performance metrics",
      "Standardized workflows across sites",
    ],
  },
  {
    slug: "outpatient-clinics",
    title: "Outpatient Clinics",
    description:
      "Ambulatory and outpatient facilities with high visit volumes and complex payer mixes.",
    highlights: [
      "High-volume charge entry capacity",
      "Same-day eligibility verification",
      "Denial trend analysis and prevention",
    ],
  },
  {
    slug: "practices",
    title: "Practices",
    description:
      "Medical practices of all sizes seeking reliable, scalable revenue cycle support.",
    highlights: [
      "Flexible engagement models",
      "Works with your existing EHR",
      "Dedicated account management",
    ],
  },
];
