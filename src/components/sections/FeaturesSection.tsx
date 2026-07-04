import { Music, Image, Bell, BookOpen, Download, Share2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    icon: Music,
    title: "Devotional Ringtones",
    description: "Set beautiful bhaktis, spiritual melodies, and chants as your ringtone.",
  },
  {
    icon: Image,
    title: "Divine Wallpapers",
    description: "Vibrant, high-definition sacred wallpapers of deities and temples for your phone.",
  },
  {
    icon: Bell,
    title: "Spiritual Alarms",
    description: "Wake up with peace — set devotional alarms, mantras, and morning prayers.",
  },
  {
    icon: BookOpen,
    title: "Sacred Mantras",
    description: "Read, listen, and recite powerful Vedic mantras and chants for daily devotion.",
  },
  {
    icon: Download,
    title: "Download & Save",
    description: "Download your favorite ringtones, alarms, and wallpapers directly to your storage.",
  },
  {
    icon: Share2,
    title: "Share to WhatsApp",
    description: "Spread the positive vibes — share spiritual assets directly to WhatsApp with one click.",
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
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Chandan brings together the best of Hindu spiritual content in a beautiful, easy-to-use experience.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-saffron-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
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
