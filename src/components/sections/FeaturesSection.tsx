import { Play, Image, Music, Download, Sparkles, Share2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    icon: Play,
    title: "Devotional Reels",
    description: "Short, inspiring spiritual videos featuring divine mantras, stories, and visual prayers.",
  },
  {
    icon: Image,
    title: "Sacred Photo Gallery",
    description: "High-quality devotional images of deities, temples, and spiritual scenes for daily inspiration.",
  },
  {
    icon: Music,
    title: "Background Devotional Music",
    description: "Immerse yourself in soothing bhajans and sacred chants as you browse divine content.",
  },
  {
    icon: Download,
    title: "Download & Save",
    description: "Save your favourite reels and photos to your device for offline viewing anytime.",
  },
  {
    icon: Sparkles,
    title: "Daily Fresh Content",
    description: "New spiritual content curated and added every single day to nourish your soul.",
  },
  {
    icon: Share2,
    title: "Share to WhatsApp",
    description: "Spread the divine energy — share reels and photos directly to your WhatsApp Status.",
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
            Saar brings together the best of Hindu spiritual content in a beautiful, easy-to-use experience.
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
