export type State = {
  code: string;
  name: string;
  description: string;
};

export const states: State[] = [
  {
    code: "CA",
    name: "California",
    description:
      "Full RCM support for practices across California, including Medi-Cal and commercial payer expertise.",
  },
  {
    code: "TX",
    name: "Texas",
    description:
      "Revenue cycle services for Texas physician groups, clinics, and multi-location practices.",
  },
  {
    code: "FL",
    name: "Florida",
    description:
      "Florida-focused RCM with experience in Medicare Advantage and seasonal patient volume shifts.",
  },
  {
    code: "NY",
    name: "New York",
    description:
      "Comprehensive billing support for New York practices navigating complex payer landscapes.",
  },
  {
    code: "NJ",
    name: "New Jersey",
    description:
      "Dedicated RCM for New Jersey medical groups and outpatient specialty clinics.",
  },
  {
    code: "PA",
    name: "Pennsylvania",
    description:
      "Pennsylvania revenue cycle management with local payer knowledge and compliance focus.",
  },
  {
    code: "MA",
    name: "Massachusetts",
    description:
      "Massachusetts RCM services including MassHealth and commercial plan expertise.",
  },
];

export function getStateByCode(code: string): State | undefined {
  return states.find((s) => s.code.toLowerCase() === code.toLowerCase());
}
