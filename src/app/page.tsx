import Footer from "@/components/navigation/Footer";
import NavBar from "@/components/navigation/navbar";
import AboutSection from "@/containers/AboutSection";
import ContactSection from "@/containers/ContactSection";
import HomeSection from "@/containers/HomeSection";
import ProjectsSection from "@/containers/ProjectsSection";
import SkillsSection from "@/containers/SkillsSection";

export default function Home() {
  return (
    <main className="pt-12">
      <NavBar />
      <div className="container space-y-16 py-28">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
