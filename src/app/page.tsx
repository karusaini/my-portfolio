import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ProjectsSection from "@/components/ProjectSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactScetion";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
