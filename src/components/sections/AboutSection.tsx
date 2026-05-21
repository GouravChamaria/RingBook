import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              What is <span className="text-primary">Saar</span>?
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                <strong className="text-foreground">Saar (सार)</strong> means 'essence' in Sanskrit. We built
                Saar to bring the essence of Hindu spirituality to your fingertips — every single day.
              </p>
              <p>
                Whether you seek the blessings of Lord Ganesha, the strength of Lord Hanuman, the grace of
                Maa Durga, or the wisdom of the Bhagavad Gita, Saar delivers it in the most beautiful,
                accessible format: short devotional reels and sacred imagery, curated with love and reverence.
              </p>
              <p>
                With our newly introduced <strong className="text-foreground">Astrology & Panditji Guidance</strong>, Saar offers even more features. Along with watching devotional reels and bhakti content, you can now explore detailed astrology. Simply share your date of birth, place of birth, time, and name, and Panditji will guide you throughout your spiritual and astrological journey. Generate your personalized Kundali, ask your life questions, and get custom predictions to light up your path.
              </p>
              <p>Available exclusively on Android.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {/* Decorative mandala / illustration */}
            <div className="relative flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-saffron-light to-secondary flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-primary/10 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-primary/5 flex items-center justify-center">
                    <span className="text-6xl md:text-7xl font-display text-primary/30 select-none">ॐ</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
