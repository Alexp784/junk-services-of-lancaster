import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const PHONE = "7175725363";

const AboutSection = () => {
  const scrollToEstimate = () => {
    document.querySelector("#estimate")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-epic">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed mb-8">
            <p>
              We are a family-owned and operated residential cleanout, junk removal, and handyman business based in Lancaster County. My wife and I started this company to provide a valuable service to our community while also giving back to the people around us.
            </p>
            <p>
              Since 2023, we've helped families through all kinds of situations — downsizing, clearing out homes for sale, making space for new projects, or handling unexpected life events. We take pride in building real relationships with our customers and making a difference wherever we can.
            </p>
            <p>
              Life can be overwhelming — our goal is to make it easier by taking the burden off your shoulders.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <a href={`tel:${PHONE}`}><Phone className="w-4 h-4" /> Call Now</a>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToEstimate}>
              Get Free Estimate <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
