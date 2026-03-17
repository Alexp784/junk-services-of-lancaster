import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const PHONE = "7175725363";
const PHONE_DISPLAY = "(717) 572-5363";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container-epic flex items-center justify-between h-16 md:h-20">
        <a href="#home" onClick={() => scrollTo("#home")} className="font-display font-extrabold text-lg md:text-xl text-foreground tracking-tight">
          Epic Collectibles <span className="text-accent">&</span> Cleanouts
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="cta" size="lg" asChild>
            <a href={`tel:${PHONE}`}><Phone className="w-4 h-4" /> Call Now</a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollTo("#estimate")}>
            Free Estimate
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          <nav className="flex flex-col gap-2 py-4">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </button>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <Button variant="cta" size="lg" asChild>
              <a href={`tel:${PHONE}`}><Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}</a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollTo("#estimate")}>
              Free Estimate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
