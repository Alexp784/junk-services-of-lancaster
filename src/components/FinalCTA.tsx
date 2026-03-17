import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const PHONE = "7175725363";

const FinalCTA = () => {
  const scrollToEstimate = () => {
    document.querySelector("#estimate")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-epic text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
          Need Junk Gone Fast? We're Ready to Help.
        </h2>
        <p className="text-primary-foreground/70 font-body mb-8 max-w-xl mx-auto">
          Call us today or request a free estimate — we'll take care of the rest.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl" asChild>
            <a href={`tel:${PHONE}`}><Phone className="w-5 h-5" /> Call Now</a>
          </Button>
          <Button variant="heroOutline" size="xl" onClick={scrollToEstimate}>
            Get Free Estimate <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
