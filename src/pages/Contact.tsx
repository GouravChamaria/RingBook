import { useState } from "react";
import { Mail, Clock, MessageSquare, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const faqs = [
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel your subscription anytime through the Google Play Store. Go to Play Store → Subscriptions → Saar → Cancel. Your access continues until the end of the current billing period.",
  },
  {
    q: "Is the app available on iPhone?",
    a: "Currently, Saar is available exclusively on Android devices. We are exploring iOS availability for the future.",
  },
  {
    q: "How do I download content?",
    a: "Premium subscribers can download reels and photos directly from the app. Simply tap the download icon on any piece of content you wish to save for offline viewing.",
  },
  {
    q: "How do I update my account details?",
    a: "Your account details are managed through your Google account. To update your profile photo or name, update your Google account settings, and the changes will reflect in Saar.",
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent. We'll respond within 24–48 hours.");
    setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
  };

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
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get in Touch</h2>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-xl bg-saffron-light flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground font-body text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">support@saarapp.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-xl bg-saffron-light flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground font-body text-sm">Support Hours</p>
                    <p className="text-muted-foreground text-sm">Mon – Sat, 10:00 AM – 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-xl bg-saffron-light flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground font-body text-sm">Response Time</p>
                    <p className="text-muted-foreground text-sm">We respond within 24–48 hours</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact form */}
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send a Message</h2>

                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                />
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                >
                  <option>General Inquiry</option>
                  <option>Subscription Help</option>
                  <option>Technical Issue</option>
                  <option>Content Report</option>
                  <option>Other</option>
                </select>
                <Textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                />
                <Button
                  type="submit"
                  className="rounded-full bg-primary text-primary-foreground hover:scale-[1.04] transition-transform shadow-md px-8"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </AnimatedSection>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mt-20">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-10">
                Frequently Asked Questions
              </h2>
            </AnimatedSection>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="font-semibold text-foreground font-body text-sm pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground font-body leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
