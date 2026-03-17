import { Phone, Truck, Sparkles } from "lucide-react";

const steps = [
  { icon: Phone, title: "Request a Free Estimate", desc: "Call us or fill out our form — we'll get back to you fast." },
  { icon: Truck, title: "We Show Up & Do the Work", desc: "Our crew arrives on time, handles everything, and cleans up." },
  { icon: Sparkles, title: "You Enjoy a Clean Space", desc: "Sit back and enjoy your clutter-free property." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-padding bg-background">
    <div className="container-epic">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-body">
          From single-item pickups to full property cleanouts, we handle everything so you don't have to.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={step.title} className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 relative">
              <step.icon className="w-7 h-7 text-accent" />
              <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground font-body text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
