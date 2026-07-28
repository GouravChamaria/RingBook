import AnimatedSection from "@/components/AnimatedSection";
import PhoneMockup from "@/components/PhoneMockup";
import container0 from "@/assets/ringbook/Container.png";
import container1 from "@/assets/ringbook/Container-1.png";
import container2 from "@/assets/ringbook/Container-2.png";
import container3 from "@/assets/ringbook/Container-3.png";
import container4 from "@/assets/ringbook/Container-4.png";
import container5 from "@/assets/ringbook/Container-5.png";
import { APP_NAME } from "@/lib/constants";

const screenshots = [
  {
    src: container0,
    alt: `${APP_NAME} onboarding flow`,
    title: "Sleek Onboarding",
  },
  {
    src: container1,
    alt: `${APP_NAME} language & sound selection`,
    title: "Language Selection",
  },
  {
    src: container2,
    alt: `${APP_NAME} home feed`,
    title: "Trending Feed",
  },
  {
    src: container3,
    alt: `${APP_NAME} wallpapers gallery`,
    title: "HD Wallpaper Catalog",
  },
  {
    src: container4,
    alt: `${APP_NAME} ringtone audio player`,
    title: "Audio Player & Tones",
  },
  {
    src: container5,
    alt: `${APP_NAME} subscription plan`,
    title: "Premium Subscription",
  },
];

const ScreenshotsSection = () => {
  return (
    <section className="py-20 lg:py-28 section-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Designed for Instant Discovery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Clean, fast, and modern — explore how RingBook brings audio & visual customization to life.
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


