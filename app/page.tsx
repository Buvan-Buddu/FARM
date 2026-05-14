import { Hero } from "@/components/Hero";
import { BrandTagline } from "@/components/BrandTagline";
import { OrganicShowcase } from "@/components/OrganicShowcase";
import { VarietiesSection } from "@/components/VarietiesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { FeedbackSection } from "@/components/FeedbackSection";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandTagline />
      <OrganicShowcase />
      <VarietiesSection />
      <WhyChooseUs />
      <Gallery />
      <FeedbackSection />
      <ContactCTA />
    </>
  );
}
