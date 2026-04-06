import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const DownloadCTASection = () => {
  return (
    <section id="download" className="py-20 lg:py-28 gradient-saffron relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            Begin Your Spiritual Journey Today.
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl mx-auto">
            Download Saar free on Android.
          </p>
          <a href="#play-store" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-card text-primary hover:scale-[1.04] transition-transform shadow-xl px-10 py-6 text-base font-semibold">
              <Download className="w-5 h-5 mr-2" />
              Google Play Store
            </Button>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DownloadCTASection;
