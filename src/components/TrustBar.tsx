import { Users, MapPin, Shield, BadgeCheck } from "lucide-react";

const items = [
  { icon: Users, text: "Family Owned & Operated" },
  { icon: MapPin, text: "Serving Lancaster County" },
  { icon: Shield, text: "Reliable & Professional" },
  { icon: BadgeCheck, text: "Free Estimates" },
];

const TrustBar = () => (
  <section className="bg-primary py-5">
    <div className="container-epic">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2 text-primary-foreground">
            <item.icon className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold font-display tracking-wide">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
