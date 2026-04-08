import AnimatedSection from "@/components/AnimatedSection";
import PhoneMockup from "@/components/PhoneMockup";
import splashLogoScreenshot from "@/assets/screenshots/splash-logo.jpeg";
import welcomeLoginScreenshot from "@/assets/screenshots/welcome-login.jpeg";
import exploreGridScreenshot from "@/assets/screenshots/explore-grid.jpeg";
import profileAccountScreenshot from "@/assets/screenshots/profile-account.jpeg";

const screenshots = [
  {
    src: splashLogoScreenshot,
    alt: "Saar splash screen",
    title: "Elegant splash screen",
  },
  {
    src: welcomeLoginScreenshot,
    alt: "Saar welcome and sign in screen",
    title: "Warm onboarding flow",
  },
  {
    src: exploreGridScreenshot,
    alt: "Saar explore page",
    title: "Explore sacred categories",
  },
  {
    src: profileAccountScreenshot,
    alt: "Saar profile and settings page",
    title: "Profile, plans, and support",
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
