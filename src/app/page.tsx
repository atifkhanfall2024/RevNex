import { HeroSection, ServicesSection } from "@/components/home/HeroSection";
import {
  WhoWeServeSection,
  SpecialtiesSection,
  StatesSection,
  CTASection,
  TrustSection,
  HomePreviewBanner,
} from "@/components/home/Sections";
import { RCMChartsSection } from "@/components/charts/RCMChartsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomePreviewBanner />
      <TrustSection />
      <RCMChartsSection />
      <ServicesSection />
      <WhoWeServeSection />
      <SpecialtiesSection />
      <StatesSection />
      <CTASection />
    </>
  );
}
