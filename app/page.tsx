import ScrollProgressBar from "@/components/ScrollProgressBar";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import TechMarquee from "@/components/home/TechMarquee";
import HackathonShowcase from "@/components/home/HackathonShowcase";
import ServicesSection from "@/components/home/ServicesSection";
import PricingSection from "@/components/home/PricingSection";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutTeaser from "@/components/home/AboutTeaser";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: 'Shivansh Mehra | Web & Mobile Developer | Freelancer',
  description: 'I build production-grade web apps, mobile apps, and AI systems.',
};

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ScrollProgressBar />

      <div className="heroLightSweep" />

      <HeroSection />
      <TrustSection />
      <TechMarquee />
      <HackathonShowcase />
      <ServicesSection />
      <PricingSection />
      <ProjectShowcase />
      <WhyChooseUs />
      <AboutTeaser />
      <ProcessSection />
      <Testimonials />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
