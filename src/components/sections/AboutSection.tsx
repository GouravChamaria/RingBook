import AnimatedSection from "@/components/AnimatedSection";
import logo from "@/assets/mera-noor/App Icon 1024.png";
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
                <strong className="text-foreground">{APP_NAME} (मेरा नूर)</strong> means 'My Light'. We created
                Mera Noor to bring the essence of Islamic spiritual serenity, peace, and reflection to your fingertips — every single day.
              </p>
              <p>
                Whether you seek heart-touching Naats, soothing Islamic ringtones, high-definition wallpapers of holy landmarks and art, daily Quranic duas, or gentle morning alarms, Mera Noor delivers it in the most accessible and beautiful format, curated with care and reverence.
              </p>
              <p>
                With our curated library of spiritual audio and visual assets, Mera Noor helps you stay connected to faith throughout your daily routine. Set serene tones for your calls, customize your phone with high-resolution wallpapers, and listen to soul-soothing audio clips anytime.
              </p>
              <p className="font-medium text-emerald-800">Available exclusively on Android.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {/* Elegant light halo / emblem */}
            <div className="relative flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-emerald-100 to-secondary flex items-center justify-center shadow-inner">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-emerald-800/10 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-white p-4 shadow-xl border border-emerald-950/10 flex items-center justify-center overflow-hidden">
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

