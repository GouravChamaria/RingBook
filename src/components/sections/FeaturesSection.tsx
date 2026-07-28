import { Music, Image, Bell, Sparkles, Download, Share2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { APP_NAME } from "@/lib/constants";

const features = [
  {
    icon: Music,
    title: "HD Ringtones & Caller Tones",
    description: "Set high-fidelity melodies, trending tracks, and instrumental tones as your ringtone.",
  },
  {
    icon: Image,
    title: "Vibrant HD & 4K Wallpapers",
    description: "Explore thousands of stunning high-resolution wallpapers tailored for every lock screen.",
  },
  {
    icon: Bell,
    title: "Custom Alarms & Chimes",
    description: "Wake up energized — set peaceful morning chimes, alarms, and notification sounds.",
  },
  {
    icon: Sparkles,
    title: "Curated Playlists & Categories",
    description: "Quickly browse by mood, genre, or popular themes with easy-to-use search and filters.",
  },
  {
    icon: Download,
    title: "Fast Download & Save",
    description: "Save your favorite audio clips and wallpapers directly to your phone storage in one click.",
  },
  {
    icon: Share2,
    title: "Share with Friends",
    description: "Share top ringtones and wallpapers instantly to WhatsApp Status, stories, and social apps.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Everything You Need to Customise Your Phone
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-base">
            {APP_NAME} brings together premium audio tones and visual wallpapers in one smooth, intuitive experience.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="group p-6 rounded-2xl bg-card border border-border/80 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold font-body text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


