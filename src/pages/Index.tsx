import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ScreenshotsSection from "@/components/sections/ScreenshotsSection";
import AboutSection from "@/components/sections/AboutSection";
import SubscriptionSection from "@/components/sections/SubscriptionSection";
import DownloadCTASection from "@/components/sections/DownloadCTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <AboutSection />
      <SubscriptionSection />
      <DownloadCTASection />
    </Layout>
  );
};

export default Index;
