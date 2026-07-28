import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { APP_NAME, COMPANY_DETAILS } from "@/lib/constants";

const sections = [
  {
    heading: "",
    body: `Operated by ${COMPANY_DETAILS.legalName}
Last Updated: July 2026

<strong>Contact Information:</strong>
Phone: ${COMPANY_DETAILS.phone}
GSTIN: ${COMPANY_DETAILS.gstin}
Email: <a href="mailto:${COMPANY_DETAILS.email}" class="text-primary underline underline-offset-2">${COMPANY_DETAILS.email}</a>
Address: ${COMPANY_DETAILS.fullAddress}`,
  },
  {
    heading: "INTRODUCTION",
    body: `Welcome to ${APP_NAME}. ${APP_NAME} is an Islamic spiritual and content platform available on Android devices. Through ${APP_NAME}, users can browse, set, download, and share devotional ringtones, wallpapers, alarms, naats, and duas for daily practice.

This Privacy Policy explains what information we collect, how we use it, and how we protect it. By downloading, installing, or using the ${APP_NAME} app, you agree to the practices described in this policy.`,
  },
  {
    heading: "INFORMATION WE COLLECT",
    body: `<strong>A. Information You Provide</strong>

When you sign in to ${APP_NAME}, we use Google Sign-In as an authentication method. Through this process, we receive your full name, email address, and profile photo. We do not collect or store passwords.

<strong>B. Usage Data</strong>

We automatically collect certain usage data when you interact with the app. This includes information about which ringtones, wallpapers, alarms, or naats you download or share, and interaction patterns within the app.

<strong>C. Device Information</strong>

We collect basic device information including device model, OS version, IP address, and unique identifiers to ensure app stability and support.`,
  },
  {
    heading: "WHAT WE DO NOT COLLECT",
    body: `We do not collect precise GPS location. We do not access contacts, call logs, camera, or microphone. We do not collect financial credentials directly; payment processing is handled securely by third-party payment gateways.`,
  },
  {
    heading: "HOW WE USE YOUR INFORMATION",
    body: `We use your account details to manage your ${APP_NAME} account, verify subscriptions, and respond to support queries. We do not sell or rent your personal data to third parties.`,
  },
  {
    heading: "CONTENT DOWNLOADS",
    body: `The ${APP_NAME} app allows users to download wallpapers and audio ringtones to their local storage. Content is provided for personal non-commercial use only.`,
  },
  {
    heading: "SUBSCRIPTIONS AND BILLING",
    body: `${APP_NAME} offers trial periods and subscription plans. Subscription status is managed securely. You can manage or cancel your subscription within the app.`,
  },
  {
    heading: "ACCOUNT DELETION",
    body: `You have the right to delete your ${APP_NAME} account at any time via Account → Settings → Delete Account, or by emailing <a href="mailto:${COMPANY_DETAILS.email}" class="text-primary underline underline-offset-2">${COMPANY_DETAILS.email}</a>. Requests are processed within 30 days.`,
  },
  {
    heading: "CONTACT US",
    body: `If you have any questions about this Privacy Policy, please contact:

<strong>${COMPANY_DETAILS.legalName}</strong>
${COMPANY_DETAILS.addressLine1}
${COMPANY_DETAILS.addressLine2}
${COMPANY_DETAILS.cityStatePincode}
Phone: ${COMPANY_DETAILS.phone}
GSTIN: ${COMPANY_DETAILS.gstin}
Email: <a href="mailto:${COMPANY_DETAILS.email}" class="text-primary underline underline-offset-2">${COMPANY_DETAILS.email}</a>`,
  },
];

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mt-4 text-sm font-body">Last Updated: July 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
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

export default PrivacyPolicy;

