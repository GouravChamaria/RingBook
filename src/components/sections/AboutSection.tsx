import AnimatedSection from "@/components/AnimatedSection";
import logo from "@/assets/bhaktidham/icon-512.png";
import { APP_NAME } from "@/lib/constants";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              What is <span className="text-primary">{APP_NAME}</span>?
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                <strong className="text-foreground">{APP_NAME}</strong> is your complete daily spiritual companion on Android. Designed to bring harmony, positivity, and mindfulness into your routine, {APP_NAME} offers a comprehensive suite of devotional utilities right at your fingertips.
              </p>
              <p>
                Practice daily mantra jaap with our built-in audio player and counter, wake up peacefully to soothing spiritual alarms, customize your screen with high-definition divine wallpapers, and set devotional ringtones for incoming calls.
              </p>
              <p>
                Whether you begin your day with morning puja, meditation, or seek moments of divine tranquility throughout a busy day, {APP_NAME} elevates your spiritual journey.
              </p>
              <p className="font-semibold text-primary">Chant With Faith. Begin With Peace. Available exclusively on Android.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {/* Logo showcase */}
            <div className="relative flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-amber-100 to-secondary flex items-center justify-center shadow-inner">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-amber-500/10 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-white p-4 shadow-xl border border-amber-500/10 flex items-center justify-center overflow-hidden">
                    <img src={logo} alt={APP_NAME} className="w-full h-full object-cover rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


