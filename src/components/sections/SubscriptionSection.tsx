import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const benefits = [
  "Unlimited HD reel downloads — no watermark",
  "Access to the full photo & video library",
  "New spiritual content added daily",
  "Ad-free, distraction-free experience",
  "Background devotional music on all content",
  "Share directly to WhatsApp Status",
];

const SubscriptionSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Unlock the Full Divine Experience
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Start with a trial for just a few rupees — then continue your spiritual journey with a
              simple monthly subscription.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-sm">
              <ul className="space-y-4 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground font-body">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <a href="#play-store" target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full bg-primary text-primary-foreground hover:scale-[1.04] transition-transform shadow-lg px-10 py-6 text-base">
                    <Download className="w-5 h-5 mr-2" />
                    Start Your Trial Today
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground mt-4 font-body">
                  Subscription details available on the app. Cancel anytime.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
