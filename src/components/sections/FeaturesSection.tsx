import { Flame, Bell, Image, Music, Sparkles, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { APP_NAME } from "@/lib/constants";

const features = [
  {
    icon: Flame,
    title: "Sacred Mantras & Chanting (Jaap)",
    description: "Listen to high-quality mantras, stotrams, and devotional audio tracks with a built-in player and chanting counter.",
  },
  {
    icon: Bell,
    title: "Daily Spiritual & Morning Alarms",
    description: "Wake up peacefully to soothing spiritual alarms and sacred chanting that fill your mornings with divine energy.",
  },
  {
    icon: Image,
    title: "HD Spiritual & Divine Wallpapers",
    description: "Explore a curated collection of beautiful high-definition spiritual wallpapers for your home and lock screens.",
  },
  {
    icon: Music,
    title: "Devotional Ringtones & Tunes",
    description: "Personalize your smartphone with sacred melodies and notification tones to keep divine vibrations active.",
  },
  {
    icon: Sparkles,
    title: "Daily Mantra & Thought of the Day",
    description: "Receive inspirational spiritual quotes and daily mantras on your home screen for daily wisdom and mindfulness.",
  },
  {
    icon: Globe,
    title: "Multilingual & Lightweight",
    description: "Fast, battery-optimized app with seamless multilingual support in English, Hindi, and Urdu.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Key Features of {APP_NAME}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-base">
            Designed to bring harmony, positivity, and mindfulness into your busy routine with comprehensive spiritual utilities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="group p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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


