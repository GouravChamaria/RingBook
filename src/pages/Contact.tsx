import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Building } from "lucide-react";
import { APP_NAME, COMPANY_DETAILS } from "@/lib/constants";

const sections = [
  {
    heading: "We’d Love to Hear from You",
    body: `Whether you have a question about your subscription, need help with the app, want to report an issue, or simply want to share your experience with ${APP_NAME}, our support team is here to help. We are dedicated to bringing divine audio and serene wallpapers to your screen every day, and we take every message seriously.`,
  },
  {
    heading: "How to Reach Us",
    body: `The fastest way to reach us is by email. You can write to us at <a href="mailto:${COMPANY_DETAILS.email}" class="text-primary underline underline-offset-2">${COMPANY_DETAILS.email}</a> for any enquiries — technical, billing-related, content-related, or general. Our support team monitors this inbox actively and aims to respond within 24 to 48 hours on business days (Monday through Saturday, 10:00 AM to 6:00 PM IST).`,
  },
  {
    heading: "Account and Subscription Support",
    body: `If you are experiencing issues with your subscription — such as a payment not reflecting, features not unlocking after a successful trial, or difficulty cancelling — please email us at <a href="mailto:${COMPANY_DETAILS.email}" class="text-primary underline underline-offset-2">${COMPANY_DETAILS.email}</a> with the subject line "Subscription Support" and include the email address registered to your ${APP_NAME} account.`,
  },
  {
    heading: "Account Deletion Requests",
    body: `If you wish to permanently delete your ${APP_NAME} account and all associated data, you can do so from within the app by going to Account → Settings → Delete Account. If you prefer to submit your request by email, write to us at <a href="mailto:${COMPANY_DETAILS.email}" class="text-primary underline underline-offset-2">${COMPANY_DETAILS.email}</a> with the subject line "Account Deletion Request" and include your registered email address.`,
  },
  {
    heading: "Content and Technical Issues",
    body: `If you encounter a bug, a crash, or content that is not loading correctly, please email <a href="mailto:${COMPANY_DETAILS.email}" class="text-primary underline underline-offset-2">${COMPANY_DETAILS.email}</a> with a brief description of the issue, your device model, and your Android version. Screenshots are always appreciated.`,
  },
  {
    heading: "General Feedback",
    body: `We genuinely value feedback from our community. If you have suggestions for new wallpaper collections, ringtones, or app features, please reach out to us.`,
  },
];

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    content: (
      <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors">
        {COMPANY_DETAILS.phone}
      </a>
    ),
  },
  {
    icon: Building,
    label: "GSTIN",
    content: (
      <p className="text-xl font-semibold text-foreground">{COMPANY_DETAILS.gstin}</p>
    ),
  },
  {
    icon: MapPin,
    label: "Registered Office",
    content: (
      <address className="not-italic space-y-1 text-foreground">
        <p className="text-xl md:text-2xl font-semibold">{COMPANY_DETAILS.legalName}</p>
        <p>{COMPANY_DETAILS.addressLine1}</p>
        <p>{COMPANY_DETAILS.addressLine2}</p>
        <p>{COMPANY_DETAILS.cityStatePincode}</p>
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
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            We'd Love to Hear from You — {APP_NAME} Support Team
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
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-base font-semibold text-primary hover:underline"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="space-y-5 mb-12">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-5 rounded-3xl border border-border bg-card/80 p-6 shadow-sm"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                    <detail.icon className="h-7 w-7" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
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

