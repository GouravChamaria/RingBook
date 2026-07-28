import { Music, Image, Bell, BookOpen, Download, Share2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { APP_NAME } from "@/lib/constants";

const features = [
  {
    icon: Music,
    title: "Islamic Devotional Ringtones",
    description: "Set serene Naats, peaceful recitations, and spiritual melodies as your phone ringtone.",
  },
  {
    icon: Image,
    title: "Divine HD Wallpapers",
    description: "Vibrant, high-resolution sacred wallpapers of holy places, mosques, and Islamic art.",
  },
  {
    icon: Bell,
    title: "Spiritual Alarms & Reminders",
    description: "Wake up with serenity — set morning prayer alarms, gentle recitations, and peaceful tones.",
  },
  {
    icon: BookOpen,
    title: "Sacred Naats & Duas",
    description: "Listen to and read uplifting Naats, daily supplications, and Quranic verses for daily reflection.",
  },
  {
    icon: Download,
    title: "Fast Download & Save",
    description: "Download your favorite audio clips, ringtones, and wallpapers directly to your phone storage.",
  },
  {
    icon: Share2,
    title: "Share to WhatsApp",
    description: "Spread peace and light — share spiritual media directly to WhatsApp Status and chats with one click.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Everything Sacred, In One App
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-base">
            {APP_NAME} brings together serene Islamic content, audio recitations, and visual art in a beautiful, simple experience.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="group p-6 rounded-2xl bg-card border border-border/80 hover:border-emerald-800/30 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-emerald-800" />
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

