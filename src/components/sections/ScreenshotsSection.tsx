import AnimatedSection from "@/components/AnimatedSection";
import PhoneMockup from "@/components/PhoneMockup";
import container1 from "@/assets/mera-noor/Container1.png";
import container2 from "@/assets/mera-noor/Container2.png";
import container3 from "@/assets/mera-noor/Container3.png";
import container4 from "@/assets/mera-noor/Container4.png";
import container5 from "@/assets/mera-noor/Container5.png";
import container7 from "@/assets/mera-noor/Container7.png";
import { APP_NAME } from "@/lib/constants";

const screenshots = [
  {
    src: container1,
    alt: `${APP_NAME} onboarding screen`,
    title: "Welcome & Onboarding",
  },
  {
    src: container2,
    alt: `${APP_NAME} language & preferences`,
    title: "Language Selection",
  },
  {
    src: container3,
    alt: `${APP_NAME} home feed`,
    title: "Curated Feed & Audio",
  },
  {
    src: container4,
    alt: `${APP_NAME} categories & wallpapers`,
    title: "Divine HD Wallpapers",
  },
  {
    src: container5,
    alt: `${APP_NAME} subscription plan`,
    title: "Premium Experience",
  },
  {
    src: container7,
    alt: `${APP_NAME} settings & profile`,
    title: "Simple Account Settings",
  },
];

const ScreenshotsSection = () => {
  return (
    <section className="py-20 lg:py-28 section-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            A Serene App for Daily Practice
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Designed with devotion — every screen crafted to inspire peace, clarity, and spiritual connection.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center">
          {screenshots.map((screenshot, i) => (
            <AnimatedSection key={screenshot.title} delay={i * 0.1} className="text-center">
              <PhoneMockup
                src={screenshot.src}
                alt={screenshot.alt}
                label={screenshot.title}
                imageClassName="object-top"
              />
              <p className="mt-4 text-sm font-semibold font-body text-foreground/80">{screenshot.title}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;

