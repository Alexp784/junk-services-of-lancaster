import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Clock, BadgeCheck, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const PHONE = "7175725363";

const HeroSection = () => {
  const scrollToEstimate = () => {
    document.querySelector("#estimate")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Professional junk removal crew at work" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative container-epic py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            Lancaster's Trusted Cleanout & Junk Removal Experts
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl font-body">
            Fast, Reliable, Family-Owned Service — We Handle Everything From Start to Finish
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: Clock, text: "Same-Day & Next-Day Service" },
              { icon: BadgeCheck, text: "Free Estimates" },
              { icon: MapPin, text: "Local & Trusted" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-primary-foreground/90">
                <item.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium font-body">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" onClick={scrollToEstimate}>
              Get Free Estimate <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href={`tel:${PHONE}`}><Phone className="w-5 h-5" /> Call Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
