export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "patient-appointment-scheduling",
    title: "Patient Appointment Scheduling",
    shortDescription:
      "Streamlined scheduling that reduces no-shows and keeps your calendar optimized.",
    description:
      "Our patient appointment scheduling service ensures your front desk runs efficiently with automated reminders, waitlist management, and seamless calendar coordination across providers.",
    benefits: [
      "Reduced no-show rates with automated reminders",
      "Multi-provider calendar management",
      "Insurance eligibility pre-check integration",
      "Patient self-scheduling options",
    ],
  },
  {
    slug: "prior-authorizations",
    title: "Prior Authorizations",
    shortDescription:
      "Fast, accurate prior auth submissions to prevent claim delays and denials.",
    description:
      "We handle the entire prior authorization process—from submission to follow-up—so your clinical staff can focus on patient care instead of payer phone calls.",
    benefits: [
      "Faster approval turnaround times",
      "Dedicated auth specialists per payer",
      "Real-time status tracking",
      "Appeal support for denied authorizations",
    ],
  },
  {
    slug: "verification-of-benefits",
    title: "Verification of Benefits (VOB)",
    shortDescription:
      "Comprehensive insurance verification before every patient visit.",
    description:
      "Our VOB team verifies coverage, copays, deductibles, and out-of-network benefits so you know exactly what to expect before services are rendered.",
    benefits: [
      "Same-day verification for urgent cases",
      "Detailed benefit breakdown reports",
      "Secondary insurance coordination",
      "Reduced front-desk billing surprises",
    ],
  },
  {
    slug: "charge-entry",
    title: "Charge Entry",
    shortDescription:
      "Accurate, timely charge capture to maximize reimbursement.",
    description:
      "We ensure every billable service is captured correctly with proper coding, modifiers, and documentation alignment to minimize undercoding and compliance risk.",
    benefits: [
      "Certified coding specialists",
      "Same-day charge entry turnaround",
      "Modifier and bundling accuracy",
      "Audit-ready documentation trails",
    ],
  },
  {
    slug: "payment-posting",
    title: "Payment Posting",
    shortDescription:
      "Precise payment posting with full reconciliation against EOBs.",
    description:
      "Our team posts insurance and patient payments accurately, identifies underpayments, and reconciles every remittance to keep your AR clean and current.",
    benefits: [
      "ERA/EOB auto-posting integration",
      "Underpayment identification",
      "Patient balance updates in real time",
      "Daily reconciliation reports",
    ],
  },
  {
    slug: "ar-denial-management",
    title: "AR & Denial Management",
    shortDescription:
      "Proactive denial prevention and aggressive AR follow-up.",
    description:
      "We analyze denial trends, appeal rejected claims, and work aged AR systematically to recover revenue that would otherwise be written off.",
    benefits: [
      "Root-cause denial analysis",
      "Structured appeal workflows",
      "Aged AR bucket management",
      "Monthly performance dashboards",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
