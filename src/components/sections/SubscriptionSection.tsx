import { Check, Download, ShieldCheck, Sparkles, Sliders, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { PLAY_STORE_URL, APP_NAME } from "@/lib/constants";

const benefits = [
  "Unlimited sacred mantras & audio stotram chanting",
  "Built-in Jaap counter with custom chanting sessions",
  "Full access to high-definition divine wallpaper gallery",
  "Soothing daily spiritual & morning alarm chimes",
  "Sacred caller tunes & devotional ringtone collection",
  "Completely ad-free, distraction-free prayer experience",
];

const planHighlights = [
  {
    title: "Starter Packs",
    price: "From ₹99",
    desc: "Essential mantra packs and divine wallpaper bundles",
  },
  {
    title: "Devotional Pass",
    price: "₹99 – ₹499",
    desc: "Popular monthly & multi-month chanting subscriptions",
  },
  {
    title: "Ultimate Seva",
    price: "Up to ₹999",
    desc: "Unrestricted annual & all-inclusive spiritual access",
  },
];

const SubscriptionSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/50 text-amber-900 font-semibold text-xs tracking-wide uppercase font-body mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Flexible & Transparent Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
              Unlock the Full {APP_NAME} Experience
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
              Choose the plan that suits your spiritual journey. Transparent pricing options range from ₹99 to ₹999 inside the app.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-3xl border-2 border-amber-500/20 p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Highlight Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-600 to-amber-600 text-white text-xs font-extrabold uppercase px-6 py-1.5 rounded-bl-2xl tracking-wider shadow-md">
                Variable Pricing Range
              </div>

              {/* Pricing Hero Box */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 mb-8 border-b border-border/80">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-body block mb-1">
                    Flexible Plans Available
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-display font-black text-foreground">₹99 – ₹999</span>
                  </div>
                  <p className="text-sm font-medium text-amber-800 mt-2 font-body flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-primary shrink-0" />
                    Pricing varies based on your chosen tier, pack, or subscription period.
                  </p>
                </div>

                <div className="w-full md:w-auto text-center md:text-right shrink-0">
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full md:w-auto">
                    <Button className="w-full md:w-auto rounded-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-[1.03] transition-all shadow-lg px-8 py-6 text-base font-bold">
                      <Download className="w-5 h-5 mr-2" />
                      Explore Plans in App
                    </Button>
                  </a>
                  <span className="text-[11px] text-muted-foreground mt-2 block font-body">
                    Manage & cancel anytime via Google Play
                  </span>
                </div>
              </div>

              {/* Plan Options Breakdown */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3 font-display flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  Available Price Ranges:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {planHighlights.map((plan) => (
                    <div key={plan.title} className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 rounded-2xl p-4 text-left">
                      <span className="text-xs font-semibold text-primary dark:text-amber-400 block">{plan.title}</span>
                      <span className="text-lg font-bold text-foreground font-display block my-1">{plan.price}</span>
                      <p className="text-xs text-muted-foreground font-body">{plan.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plan Benefits */}
              <h3 className="text-base font-bold text-foreground mb-4 font-display">
                Everything Included in Your Access:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary dark:text-amber-300" />
                    </div>
                    <span className="text-foreground font-body text-sm font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Guarantee */}
              <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-body">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Secure Billing via Google Play</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>No Hidden Charges</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;




