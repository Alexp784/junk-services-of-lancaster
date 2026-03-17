import { MapPin } from "lucide-react";

const ServiceAreas = () => (
  <section className="section-padding bg-background">
    <div className="container-epic text-center">
      <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
        Proudly Serving Lancaster County & Surrounding Areas
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto font-body">
        We're based right here in Lancaster County and proudly serve nearby communities. Not sure if you're in our service area? Just give us a call at{" "}
        <a href="tel:7175725363" className="text-accent font-semibold hover:underline">(717) 572-5363</a>.
      </p>
    </div>
  </section>
);

export default ServiceAreas;
