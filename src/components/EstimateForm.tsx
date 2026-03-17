import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";

const EstimateForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to a backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="estimate" className="section-padding bg-surface">
        <div className="container-epic text-center">
          <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-foreground mb-4">Thank You!</h2>
          <p className="text-muted-foreground font-body">We've received your request and will get back to you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="estimate" className="section-padding bg-surface">
      <div className="container-epic">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Get Your Free Estimate</h2>
            <p className="text-muted-foreground font-body">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Name *</label>
                <Input
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Phone *</label>
                <Input
                  required
                  type="tel"
                  placeholder="(717) 000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-12"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Address</label>
                <Input
                  placeholder="Property address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="h-12"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Description of Job *</label>
              <Textarea
                required
                placeholder="Tell us about your project — what needs to be removed, size of the area, any special instructions..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={5}
              />
            </div>
            <Button variant="cta" size="xl" type="submit" className="w-full">
              Get My Free Estimate <ArrowRight className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EstimateForm;
