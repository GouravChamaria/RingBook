import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin } from "lucide-react";

const sections = [
  {
    heading: "We’d Love to Hear from You",
    body: `Whether you have a question about your subscription, need help with the app, want to report an issue, or simply want to share your experience with Chandan, our support team is here to help. We are a small, passionate team dedicated to bringing the beauty of Hindu spirituality to your screen every day, and we take every message seriously.`,
  },
  {
    heading: "How to Reach Us",
    body: `The fastest way to reach us is by email. You can write to us at <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a> for any and all enquiries — whether technical, billing-related, content-related, or general. Our support team monitors this inbox actively and aims to respond to every message within 24 to 48 hours on business days (Monday through Saturday, 10:00 AM to 6:00 PM IST). We are closed on Sundays and major Indian public holidays, but we will get back to you on the next available business day.`,
  },
  {
    heading: "Account and Subscription Support",
    body: `If you are experiencing issues with your subscription — such as a payment not reflecting, features not unlocking after a successful trial, or difficulty cancelling — please email us at <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a> with the subject line "Subscription Support" and include the email address registered to your Chandan account. This helps us locate your account quickly and resolve your issue without unnecessary back-and-forth. For cancellation requests that you are unable to complete within the app, you can email us directly and we will process it on your behalf.`,
  },
  {
    heading: "Account Deletion Requests",
    body: `If you wish to permanently delete your Chandan account and all associated data, you can do so from within the app by going to Account → Settings → Delete Account. If you prefer to submit your request by email, write to us at <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a> with the subject line "Account Deletion Request" and include your registered email address. We will process all deletion requests within 30 days and send you a confirmation once your data has been removed from our systems.

User can also request their account deletion from here:
<a href="https://docs.google.com/forms/d/e/1FAIpQLSemYrlfaEcdLI6RDMO8eFnNxOsPzzFzkZ6Ygq71rREOdSSmYQ/viewform" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2">https://docs.google.com/forms/d/e/1FAIpQLSemYrlfaEcdLI6RDMO8eFnNxOsPzzFzkZ6Ygq71rREOdSSmYQ/viewform</a>`,
  },
  {
    heading: "Content and Technical Issues",
    body: `If you encounter a bug, a crash, content that is not loading correctly, or any other technical problem, please email <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a> with a brief description of the issue, your device model, and your Android version. Screenshots or screen recordings are always helpful and appreciated. If you wish to report a specific piece of content as inappropriate or incorrectly categorised, please include the name or description of the content in your message.`,
  },
  {
    heading: "General and Feedback",
    body: `We genuinely value feedback from our community. If you have a suggestion for a new category of spiritual content, a feature you'd like to see, or simply want to share how Chandan has added value to your daily spiritual practice, please write to us. Every piece of feedback is read by the team and taken into consideration as we continue to grow and improve the platform.`,
  },
];

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    content: (
      <a href="tel:+918769763320" className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
        +91 87697 63320
      </a>
    ),
  },
  {
    icon: MapPin,
    label: "Registered Office",
    content: (
      <address className="not-italic space-y-1 text-foreground">
        <p className="text-2xl font-semibold">Random Hit LLP</p>
        <p>RD 4 Floor No: First, Ridhi Sidhi Enclave 1st</p>
        <p>Sri Ganganagar, Rajasthan</p>
        <p>India - 335001</p>
      </address>
    ),
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero banner */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We'd Love to Hear from You
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/10 border border-primary/20 mb-10">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email us at</p>
                <a
                  href="mailto:support@randomhit.site"
                  className="text-base font-semibold text-primary hover:underline"
                >
                  support@randomhit.site
                </a>
              </div>
            </div>

            <div className="space-y-5 mb-12">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-5 rounded-3xl border border-border bg-card/80 p-6 shadow-sm"
                >
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <detail.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg text-muted-foreground">{detail.label}</p>
                    {detail.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-neutral max-w-none font-body space-y-8 text-muted-foreground leading-relaxed">
              {sections.map((section, index) => (
                <div key={index}>
                  {section.heading && (
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      {section.heading}
                    </h2>
                  )}
                  <div
                    className="whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
