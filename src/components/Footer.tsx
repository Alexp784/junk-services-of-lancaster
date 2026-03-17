import { Phone, Mail, MapPin } from "lucide-react";

const PHONE = "7175725363";
const PHONE_DISPLAY = "(717) 572-5363";
const EMAIL = "epic_collectibles@yahoo.com";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container-epic section-padding">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display font-extrabold text-lg mb-4">
              Epic Collectibles <span className="text-accent">&</span> Cleanouts
            </h3>
            <p className="text-primary-foreground/60 text-sm font-body mb-4">
              Family-owned & operated since 2023. Proudly serving Lancaster County and surrounding areas.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-accent">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "About", href: "#about" },
                { label: "Free Estimate", href: "#estimate" },
              ].map((l) => (
                <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {l.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-accent">Contact Us</h4>
            <div className="space-y-3">
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 text-accent" /> {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 text-accent" /> {EMAIL}
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-accent" /> Lancaster County, PA
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container-epic text-center text-xs text-primary-foreground/40 font-body">
          © {new Date().getFullYear()} Epic Collectibles & Cleanouts. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
