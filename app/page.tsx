import ScrollProgressBar from "@/components/ScrollProgressBar";
import HeroSection from "@/components/home/HeroSection";
import HackathonShowcase from "@/components/home/HackathonShowcase";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
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
      <ProjectShowcase />
      <HackathonShowcase />
      <WhyChooseUs />
      <CtaSection />
    </div>
  );
}
