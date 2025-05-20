
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import UseCaseSection from "@/components/UseCaseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <HeroSection />
        <FeatureSection />
        <HowItWorks />
        <UseCaseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
