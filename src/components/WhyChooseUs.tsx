import { Users, MapPin, Heart, Zap, DollarSign, Dumbbell, HandHeart } from "lucide-react";

const reasons = [
  { icon: Users, title: "Family-Owned & Operated", desc: "We treat every job like it's for our own family." },
  { icon: MapPin, title: "Local Lancaster Business", desc: "Based right here in Lancaster County." },
  { icon: Heart, title: "Personalized Service", desc: "No corporate runarounds — just real people who care." },
  { icon: Zap, title: "Fast Response Times", desc: "Same-day and next-day appointments available." },
  { icon: DollarSign, title: "Honest, Upfront Pricing", desc: "No hidden fees or surprise charges." },
  { icon: Dumbbell, title: "We Do the Heavy Lifting", desc: "You don't have to lift a finger." },
  { icon: HandHeart, title: "Community Focused", desc: "Giving back to the community we serve." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-surface">
    <div className="container-epic">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Why Choose Us</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="flex items-start gap-4 p-4">
            <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
              <r.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-sm mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
