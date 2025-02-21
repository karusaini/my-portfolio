import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import TechStackSection from "@/components/TechStackSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ProjectsSection from "@/components/ProjectSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactScetion";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <TechStackSection />

      <ExperiencesSection />

      <ProjectsSection />

      <CertificationsSection />

      <ContactSection />

      <FooterSection />
    </main>
  );
}
