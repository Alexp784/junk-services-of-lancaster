import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfter from "@/components/BeforeAfter";
import AboutSection from "@/components/AboutSection";
import ServiceAreas from "@/components/ServiceAreas";
import PricingSection from "@/components/PricingSection";
import EstimateForm from "@/components/EstimateForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      <BeforeAfter />
      <AboutSection />
      <ServiceAreas />
      <PricingSection />
      <EstimateForm />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
