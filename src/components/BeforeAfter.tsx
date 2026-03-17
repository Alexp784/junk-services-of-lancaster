import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const pairs = [
  { before: before1, after: after1, label: "Garage Cleanout" },
  { before: before2, after: after2, label: "Basement Cleanout" },
];

const BeforeAfter = () => (
  <section className="section-padding bg-background">
    <div className="container-epic">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Before & After</h2>
        <p className="text-muted-foreground max-w-xl mx-auto font-body">See the transformation for yourself.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {pairs.map((pair) => (
          <div key={pair.label}>
            <h3 className="font-bold text-foreground mb-4 text-center">{pair.label}</h3>
            <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
              <div className="relative">
                <img src={pair.before} alt={`Before ${pair.label}`} className="w-full h-56 object-cover" />
                <span className="absolute bottom-2 left-2 bg-primary/80 text-primary-foreground text-xs font-bold px-2 py-1 rounded">Before</span>
              </div>
              <div className="relative">
                <img src={pair.after} alt={`After ${pair.label}`} className="w-full h-56 object-cover" />
                <span className="absolute bottom-2 left-2 bg-accent/90 text-accent-foreground text-xs font-bold px-2 py-1 rounded">After</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfter;
