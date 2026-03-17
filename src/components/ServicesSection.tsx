import { Trash2, Home, Wrench, HardHat } from "lucide-react";

const scrollToEstimate = () => {
  document.querySelector("#estimate")?.scrollIntoView({ behavior: "smooth" });
};

const categories = [
  {
    title: "Cleanouts",
    icon: Home,
    services: [
      { name: "Residential Cleanouts", desc: "Complete home cleanout services for any situation." },
      { name: "Estate Cleanouts", desc: "Compassionate estate clearing with care and respect." },
      { name: "Foreclosure Cleanouts", desc: "Fast turnaround for banks and property managers." },
      { name: "Attic, Basement & Garage", desc: "Reclaim your space from years of accumulated items." },
      { name: "Storage Unit Cleanouts", desc: "We empty and clean out storage units of all sizes." },
    ],
  },
  {
    title: "Junk Removal",
    icon: Trash2,
    services: [
      { name: "General Junk Removal", desc: "We haul away anything you don't need anymore." },
      { name: "Non-Reusable Items", desc: "Safe disposal of items that can't be donated or recycled." },
      { name: "Furniture & Bulk Items", desc: "Heavy furniture? No problem. We do the lifting." },
    ],
  },
  {
    title: "Handyman Services",
    icon: Wrench,
    services: [
      { name: "General Repairs", desc: "Small fixes and repairs around the home." },
      { name: "Updating & Remodeling", desc: "Refresh your space with updates and improvements." },
    ],
  },
  {
    title: "Demo Services",
    icon: HardHat,
    services: [
      { name: "Shed Removal", desc: "Complete teardown and haul-away of old sheds." },
      { name: "Deck Removal", desc: "Safe demolition and removal of decks." },
      { name: "Hot Tub Removal", desc: "We disconnect, demo, and remove hot tubs." },
      { name: "Fence Removal", desc: "Full fence tear-down and disposal." },
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-surface">
    <div className="container-epic">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-body">
          From single-item pickups to full property cleanouts — we handle it all.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-background rounded-lg border border-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                <cat.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{cat.title}</h3>
            </div>
            <div className="space-y-4">
              {cat.services.map((s) => (
                <div key={s.name} className="pb-4 border-b border-border last:border-0 last:pb-0">
                     <h4 className="font-semibold text-foreground text-sm">{s.name}</h4>
                     <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
                 </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
