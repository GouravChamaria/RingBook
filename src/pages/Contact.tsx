import { Mail, Clock, MapPin, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  return (
    <Layout>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
            Contact Us
          </h1>
          <p className="text-muted-foreground font-body">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <div className="prose prose-neutral max-w-none font-body space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Thank you for your interest in Saar — your daily dose of divine Hindu spiritual content. Whether you
                have questions about our app, need help with your subscription, want to report a technical issue, or
                simply want to share your feedback, we're here to help.
              </p>
              <p>
                Saar is a product of <strong className="text-foreground">Random Hit LLP</strong>, a technology company
                dedicated to building meaningful digital experiences. We take pride in creating content that inspires
                devotion and connects people with their spiritual roots.
              </p>
              <p>
                Our support team is available Monday through Saturday, from 10:00 AM to 6:00 PM IST. We strive to
                respond to all inquiries within 24–48 hours. For urgent matters related to subscriptions or account
                access, please include your registered email address and a brief description of the issue so we can
                assist you as quickly as possible.
              </p>
              <p>
                If you're experiencing a technical issue with the app, please provide details such as your device model,
                Android version, and a description of the problem. Screenshots are always helpful and allow us to
                diagnose issues more efficiently.
              </p>
              <p>
                For business inquiries, partnership opportunities, or media-related requests, please reach out to us
                via the email address provided below. We welcome collaborations that align with our mission of spreading
                spiritual awareness and devotion through digital content.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl bg-saffron-light flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground font-body text-sm">Email</p>
                  <p className="text-muted-foreground text-sm">support@saarapp.com</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl bg-saffron-light flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground font-body text-sm">Phone</p>
                  <p className="text-muted-foreground text-sm">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl bg-saffron-light flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground font-body text-sm">Support Hours</p>
                  <p className="text-muted-foreground text-sm">Mon – Sat, 10:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl bg-saffron-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground font-body text-sm">Address</p>
                  <p className="text-muted-foreground text-sm">Random Hit LLP, India</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
