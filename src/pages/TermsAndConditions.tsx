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
    heading: "ACCEPTANCE OF TERMS",
    body: `These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User") and ${APP_NAME} ("we," "us," or "our"), operated by ${COMPANY_DETAILS.legalName}, governing your access to and use of the ${APP_NAME} Android application and associated services. By installing or using ${APP_NAME}, you agree to these Terms.`,
  },
  {
    heading: "DESCRIPTION OF SERVICE",
    body: `${APP_NAME} is a devotional and spiritual companion application available on Android devices. The app offers a curated collection of sacred mantras, stotrams, Jaap chanting counters, morning spiritual alarms, HD divine wallpapers, and devotional ringtones. Users can preview, listen, download, and set these assets on their devices.`,
  },
  {
    heading: "USER ACCOUNTS",
    body: `To access premium features, users sign in via Google authentication. ${APP_NAME} offers flexible in-app packs and subscription tiers ranging from ₹99 to ₹999. Subscriptions renew automatically through Google Play until cancelled by the user.`,
  },
  {
    heading: "SUBSCRIPTIONS AND PAYMENTS",
    body: `${APP_NAME} offers in-app purchase options and subscription tiers ranging from ₹99 to ₹999, the details and pricing of which are clearly displayed within the app at the time of purchase. All transactions are processed securely through Google Play In-App Billing in Indian Rupees (INR) and are inclusive of applicable taxes.

Pricing and duration vary based on the tier chosen (e.g. Starter Packs from ₹99, Devotional Passes from ₹99 to ₹499, and Ultimate Seva all-access up to ₹999).

By subscribing, your payment method on Google Play will be charged on a recurring basis until you cancel. Your subscription renews automatically at the end of each billing cycle unless you cancel via Google Play Subscriptions before the renewal date.

You can manage or cancel your subscription at any time directly through Google Play Store > Payments & Subscriptions. If you cancel a paid subscription, you retain access to premium features until the end of your current billing cycle.`,
  },
  {
    heading: "REFUND POLICY",
    body: `All services and subscriptions offered on ${APP_NAME} are non-refundable under any circumstances. Once a payment is made, it cannot be reversed, refunded, or cancelled, regardless of usage or dissatisfaction.

If you do not wish to be charged after a trial period, you must cancel your subscription before the trial period ends. Once the trial period converts into a paid subscription, no refunds — partial or full — will be issued, even if you are unable to use the app for any reason.

In the event of termination of your account for violations of these Terms, no refund will be issued for any remaining subscription period.

If you are experiencing technical difficulties, we encourage you to contact our support team at <a href="mailto:${COMPANY_DETAILS.email}" class="text-primary underline underline-offset-2">${COMPANY_DETAILS.email}</a>, but contacting support does not make you eligible for a refund.`,
  },
  {
    heading: "PERMITTED USE OF CONTENT",
    body: `All visual and audio assets available on ${APP_NAME} are provided for personal, non-commercial use only. Content may not be re-sold, redistributed, or commercialised. Sharing to personal WhatsApp status or family chats is encouraged.`,
  },
  {
    heading: "GOVERNING LAW AND JURISDICTION",
    body: `These Terms are governed by and construed in accordance with the laws of India, under the jurisdiction of courts applicable to ${COMPANY_DETAILS.legalName}.`,
  },
  {
    heading: "CONTACT US",
    body: `If you have questions regarding these Terms & Conditions, please contact:

<strong>${COMPANY_DETAILS.legalName}</strong>
${COMPANY_DETAILS.addressLine1}
${COMPANY_DETAILS.addressLine2}
${COMPANY_DETAILS.cityStatePincode}
Phone: ${COMPANY_DETAILS.phone}
GSTIN: ${COMPANY_DETAILS.gstin}
Email: <a href="mailto:${COMPANY_DETAILS.email}" class="text-primary underline underline-offset-2">${COMPANY_DETAILS.email}</a>`,
  },
];

const TermsAndConditions = () => {
  return (
    <Layout>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
            Terms and Conditions
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

export default TermsAndConditions;

