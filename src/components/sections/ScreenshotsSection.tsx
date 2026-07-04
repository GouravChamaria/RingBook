import AnimatedSection from "@/components/AnimatedSection";
import PhoneMockup from "@/components/PhoneMockup";
import screen0 from "@/assets/screenshots/screen-0.png";
import screen1 from "@/assets/screenshots/screen-1.png";
import screen2 from "@/assets/screenshots/screen-2.png";
import screen2_1 from "@/assets/screenshots/screen-2.1.png";

const screenshots = [
  {
    src: screen0,
    alt: "Chandan splash screen",
    title: "Elegant splash screen",
  },
  {
    src: screen1,
    alt: "Chandan language selection screen",
    title: "Choose language step",
  },
  {
    src: screen2,
    alt: "Chandan welcome and sign in screen",
    title: "Warm onboarding flow",
  },
  {
    src: screen2_1,
    alt: "Chandan premium subscription screen",
    title: "Premium subscription plan",
  },
];

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
          {screenshots.map((screenshot, i) => (
            <AnimatedSection key={screenshot.title} delay={i * 0.15} className="text-center">
              <PhoneMockup
                src={screenshot.src}
                alt={screenshot.alt}
                label={screenshot.title}
                imageClassName="object-top"
              />
              <p className="mt-4 text-sm font-body text-muted-foreground">{screenshot.title}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
