import AnimatedSection from "@/components/AnimatedSection";
import PhoneMockup from "@/components/PhoneMockup";

const ScreenshotsSection = () => {
  return (
    <section className="py-20 lg:py-28 section-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            A Beautiful App for a Beautiful Practice
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Designed with devotion — every screen crafted to inspire peace and spiritual connection.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {[1, 2, 3, 4].map((n, i) => (
            <AnimatedSection key={n} delay={i * 0.15}>
              <PhoneMockup label={`App Screenshot ${n} — Replace via Admin`} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
