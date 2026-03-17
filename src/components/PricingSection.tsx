import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PricingSection = () => {
  const scrollToEstimate = () => {
    document.querySelector("#estimate")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-surface">
      <div className="container-epic text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Transparent, Volume-Based Pricing
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-body mb-8">
          Every job is different. Pricing depends on the amount and type of items. We provide free, no-obligation estimates — no surprises, no hidden fees.
        </p>
        <Button variant="cta" size="xl" onClick={scrollToEstimate}>
          Get Free Estimate <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default PricingSection;
