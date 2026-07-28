import AnimatedSection from "@/components/AnimatedSection";
import logo from "@/assets/ringbook/Logo.png";
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
                <strong className="text-foreground">{APP_NAME}</strong> is your ultimate digital catalog and customization platform for smartphones. We created RingBook to make audio and visual customization effortless, stylish, and fun.
              </p>
              <p>
                Browse through thousands of crystal-clear ringtones, trending notification sounds, custom morning alarms, and stunning 4K & HD wallpapers — categorized for quick browsing and instant downloads.
              </p>
              <p>
                Whether you want a relaxing nature sound for your wake-up alarm, a viral melody for incoming calls, or a crisp aesthetic wallpaper for your lock screen, RingBook has you covered.
              </p>
              <p className="font-semibold text-violet-700">Available exclusively on Android.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {/* Logo showcase */}
            <div className="relative flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-violet-100 to-secondary flex items-center justify-center shadow-inner">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-violet-500/10 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-white p-4 shadow-xl border border-violet-500/10 flex items-center justify-center overflow-hidden">
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


