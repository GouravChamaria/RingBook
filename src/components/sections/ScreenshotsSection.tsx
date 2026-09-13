import AnimatedSection from "@/components/AnimatedSection";
import PhoneMockup from "@/components/PhoneMockup";
import screen1 from "@/assets/bhaktidham/screenshot-1.png";
import screen2 from "@/assets/bhaktidham/screenshot-2.png";
import screen3 from "@/assets/bhaktidham/screenshot-3.png";
import screen4 from "@/assets/bhaktidham/screenshot-4.png";
import { APP_NAME } from "@/lib/constants";

const screenshots = [
  {
    src: screen1,
    alt: `${APP_NAME} mantra player and jaap counter`,
    title: "Mantra Jaap & Counter",
  },
  {
    src: screen2,
    alt: `${APP_NAME} spiritual morning alarms`,
    title: "Spiritual Alarms",
  },
  {
    src: screen3,
    alt: `${APP_NAME} HD divine wallpapers`,
    title: "HD Divine Wallpapers",
  },
  {
    src: screen4,
    alt: `${APP_NAME} devotional ringtones and audio sounds`,
    title: "Devotional Ringtones",
  },
];

const ScreenshotsSection = () => {
  return (
    <section className="py-20 lg:py-28 section-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Designed for Serene Devotion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Clean, serene, and intuitive — experience how {APP_NAME} brings daily devotion and mindfulness to your fingertips.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
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


