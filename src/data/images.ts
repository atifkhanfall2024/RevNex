/** Hero slider — real clinic / team scenes (not dashboard stock) */
export const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=85&auto=format&fit=crop",
    caption: "Care team at work",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=85&auto=format&fit=crop",
    caption: "Outpatient clinic",
  },
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b165bb1e93?w=1600&q=85&auto=format&fit=crop",
    caption: "Physician office",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85&auto=format&fit=crop",
    caption: "Patient care",
  },
] as const;

/** High-quality medical billing & healthcare imagery (Unsplash) */
export const images = {
  hero: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=90&auto=format&fit=crop",
  heroMobile:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop",
  billingDashboard:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=90&auto=format&fit=crop",
  medicalTeam:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1400&q=90&auto=format&fit=crop",
  medicalRecords:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=90&auto=format&fit=crop",
  clinic:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=90&auto=format&fit=crop",
  doctorOffice:
    "https://images.unsplash.com/photo-1631217868264-e5b165bb1e93?w=1400&q=90&auto=format&fit=crop",
  services:
    "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=1400&q=90&auto=format&fit=crop",
  specialties:
    "https://images.unsplash.com/photo-1579684385127-1ef15f5a338f?w=1400&q=90&auto=format&fit=crop",
  states:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=90&auto=format&fit=crop",
  whoWeServe:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1400&q=90&auto=format&fit=crop",
  contact:
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=90&auto=format&fit=crop",
  assessment:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=90&auto=format&fit=crop",
  scheduling:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=85&auto=format&fit=crop",
  authorization:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85&auto=format&fit=crop",
  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&auto=format&fit=crop",
};

export const videos = {
  /** Local file — most reliable (place MP4 in public/videos/) */
  heroBillingLocal: "/videos/hero-billing.mp4",
  /** Healthcare + data / billing analytics (Pexels, free license) */
  heroBillingPexelsDoctor:
    "https://videos.pexels.com/video-files/8320747/8320747-hd_1280_720_25fps.mp4",
  heroBillingPexelsAnalytics:
    "https://videos.pexels.com/video-files/7578612/7578612-hd_1280_720_30fps.mp4",
  heroBillingPexelsMedical:
    "https://videos.pexels.com/video-files/3194287/3194287-hd_1280_720_25fps.mp4",
};

/** Tried in order until one loads and plays */
export const videoSources = [
  videos.heroBillingPexelsAnalytics,
  videos.heroBillingPexelsDoctor,
  videos.heroBillingPexelsMedical,
  videos.heroBillingLocal,
];

/** Service card header images */
export const serviceImages: Record<string, string> = {
  "patient-appointment-scheduling": images.scheduling,
  "prior-authorizations": images.authorization,
  "verification-of-benefits": images.medicalRecords,
  "charge-entry": images.medicalRecords,
  "payment-posting": images.analytics,
  "ar-denial-management": images.billingDashboard,
};

/** Specialty card images (Unsplash — healthcare) */
export const specialtyImages: Record<string, string> = {
  "mental-behavioral-health": "/specialties/mental-behavioral-health.jpg",
  "physical-occupational-therapy":
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=85&auto=format&fit=crop",
  "speech-therapy":
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=85&auto=format&fit=crop",
  "primary-care":
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=85&auto=format&fit=crop",
  "internal-medicine":
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=85&auto=format&fit=crop",
  orthopedics:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=85&auto=format&fit=crop",
  "pain-management":
    "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=85&auto=format&fit=crop",
  pediatrics: "/specialties/pediatrics.jpg",
  chiropractic:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=85&auto=format&fit=crop",
  dermatology:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85&auto=format&fit=crop",
};

/** Fallback when a specialty image fails to load */
export const specialtyImageFallback = images.specialties;
