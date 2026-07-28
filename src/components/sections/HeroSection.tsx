import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneMockup from "@/components/PhoneMockup";
import heroMockup from "@/assets/mera-noor/Container6.png";
import { PLAY_STORE_URL, APP_NAME } from "@/lib/constants";

const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Decorative light motif bg */}
      <div className="absolute inset-0 mandala-bg pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300/40 w-fit text-emerald-900 font-medium text-xs tracking-wide uppercase font-body"
            >
              <span>✦</span> Daily Islamic Ringtones, Wallpapers & Naats
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight"
            >
              Embrace Divine Light,{" "}
              <span className="text-primary">Every Day.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg font-body leading-relaxed"
            >
              Stream and download premium Islamic ringtones, HD wallpapers, serene alarms, naats, and daily duas — all thoughtfully curated on your Android phone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-emerald-800 hover:bg-emerald-900 text-white hover:scale-[1.04] transition-transform shadow-xl px-8 py-6 text-base font-medium">
                  <Download className="w-5 h-5 mr-2" />
                  Download on Google Play
                </Button>
              </a>
              <Button
                variant="outline"
                className="rounded-full border-emerald-800/30 text-emerald-900 hover:bg-emerald-800/5 px-8 py-6 text-base font-medium"
                onClick={scrollToFeatures}
              >
                Explore Features
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="animate-float">
              <PhoneMockup
                src={heroMockup}
                alt={`${APP_NAME} home screen`}
                label={`${APP_NAME} home screen`}
                imageClassName="object-top"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button onClick={scrollToFeatures} className="text-muted-foreground/50 hover:text-primary transition-colors animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;

