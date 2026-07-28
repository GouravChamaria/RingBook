import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { PLAY_STORE_URL, APP_NAME } from "@/lib/constants";

const benefits = [
  "Unlimited high-quality ringtones & alarm sound downloads",
  "Full access to the 4K & HD wallpaper collection",
  "Premium, crystal-clear sound quality for all tracks",
  "New trending ringtones & wallpapers added daily",
  "Ad-free & distraction-free app experience",
  "Share directly to WhatsApp Status and social chats",
];

const SubscriptionSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
              Unlock the Full {APP_NAME} Experience
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Start with a trial for just a few rupees — then continue customizing your phone with a simple monthly plan.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-3xl border border-violet-500/10 p-8 md:p-12 shadow-xl">
              <ul className="space-y-4 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5 text-violet-700" />
                    </div>
                    <span className="text-foreground font-body font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full bg-violet-600 hover:bg-violet-700 text-white hover:scale-[1.04] transition-transform shadow-lg px-10 py-6 text-base font-semibold">
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


