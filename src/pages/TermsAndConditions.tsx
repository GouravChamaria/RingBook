import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const sections = [
  {
    heading: "Acceptance of Terms",
    body: `These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User") and Saar ("we," "us," or "our") governing your access to and use of the Saar Android application and any associated services. By downloading, installing, or using the Saar app, you confirm that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree to these Terms, you must not use the app.`,
  },
  {
    heading: "Description of Service",
    body: `Saar is a Hindu spiritual short-content platform available exclusively on Android devices. The app allows users to stream devotional short videos (reels), browse and download spiritual photographs, listen to devotional background music, interact with content through likes and comments, and share content to third-party platforms including WhatsApp. Content on Saar includes images, videos, and audio featuring Hindu deities, temples, mantras, and other spiritual subject matter. All content is curated and uploaded by the Saar team. Users do not upload content to the platform.`,
  },
  {
    heading: "Eligibility",
    body: `You must be at least 13 years of age to create an account and use Saar. You must be at least 18 years of age, or have the consent of a parent or legal guardian, to purchase a subscription or trial. By using the app, you represent and warrant that you meet these age requirements. If you are under 18 and wish to subscribe, please ensure you have your parent or guardian's permission and that they are aware of and agree to these Terms on your behalf.`,
  },
  {
    heading: "User Accounts",
    body: `To access most features of Saar, you must sign in using a valid Google account. You are responsible for maintaining the security of your Google account and for all activity that occurs under your Saar account. You must not share your account with others or allow anyone else to access the app using your credentials. You must notify us immediately at support@randomhit.site if you believe your account has been compromised. We reserve the right to suspend or terminate your account if we have reason to believe it is being used in violation of these Terms.`,
  },
  {
    heading: "Subscriptions and Payments",
    body: `Saar offers a free trial period and a recurring monthly subscription, the details and pricing of which are displayed within the app at the time of purchase. All pricing is in Indian Rupees (INR) and is inclusive of applicable taxes. By subscribing, you authorise us (through our payment gateway partner) to charge your selected payment method on a recurring basis until you cancel. Your subscription renews automatically at the end of each billing cycle unless you cancel before the renewal date. We do not offer refunds for partially used subscription periods. If you cancel a paid subscription, you retain access to premium features until the end of the current paid billing cycle. If you cancel during a free trial, your access to premium features ends immediately upon cancellation. We reserve the right to modify subscription pricing with reasonable advance notice provided within the app.`,
  },
  {
    heading: "Refund Policy",
    body: `By subscribing to Saar, you agree to our billing and refund policy. We offer a trial period, after which your subscription may automatically convert into a paid plan with your prior consent and chosen payment method (auto-pay enabled). We do not provide refunds under any circumstances. If you do not wish to continue, you must cancel your subscription during the trial period to avoid being charged. Once the trial period ends and is converted into a full subscription, no refunds, partial or full, will be issued—even if you are unable to use the app for any reason. In case of any issues or technical problems, we encourage you to contact our support team, but this does not make you eligible for a refund.`,
  },
  {
    heading: "Permitted Use of Content",
    body: `All photos, videos, audio tracks, and other content available on Saar are owned by or licensed to Saar and are protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable licence to stream and, where the download feature is enabled on your account, download content from Saar for your own personal, non-commercial use only. You may not copy, reproduce, distribute, publicly display, publish, sell, license, sublicense, modify, or create derivative works from any content obtained through Saar. You may not re-upload Saar content to any other platform, social media account, or website for any purpose. Sharing content to your personal WhatsApp Status or privately with friends and family is permitted and encouraged.`,
  },
  {
    heading: "Content Information",
    body: `All content available on Saar, including visuals, videos, short-form videos (reels), short-form content, and music, is exclusively created, curated, and uploaded by our team. Some of this content may be AI-generated, including visuals, videos, and music; however, all material is carefully reviewed to ensure it is respectful, culturally appropriate, and aligned with the values, traditions, and sentiments of Hindu culture and its deities. We maintain strict quality and sensitivity standards, and every piece of content is reviewed and verified at least twice by experienced and knowledgeable individuals in this domain before being published on the platform.`,
  },
  {
    heading: "Prohibited Conduct",
    body: `You agree not to use Saar in any manner that violates applicable laws or regulations or these Terms. Specifically, you must not attempt to reverse-engineer, decompile, disassemble, or extract the source code of the Saar application; attempt to circumvent screenshot restrictions, download blocks, or any other technical protection measures; use automated tools, bots, scrapers, or scripts to access or interact with the app; impersonate any person or entity or misrepresent your affiliation with any person; use the app to transmit any harmful, offensive, or inappropriate content; attempt to gain unauthorised access to our servers, databases, or backend systems; or use the app in any way that could damage, overburden, or impair our infrastructure.`,
  },
  {
    heading: "Intellectual Property",
    body: `The Saar name, logo (सार), app design, user interface, all original content, and all associated trademarks are the exclusive property of Saar. Nothing in these Terms transfers any intellectual property rights to you. Your use of Saar does not grant you any right, title, or interest in our intellectual property beyond the limited licence described in these Terms.`,
  },
  {
    heading: "Disclaimer of Warranties",
    body: `Saar is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the app will be uninterrupted, error-free, or completely secure. We do not guarantee that the content available on Saar is accurate, complete, or up to date. Spiritual and religious content is provided for devotional and inspirational purposes only. To the fullest extent permitted by applicable law, we disclaim all implied warranties including merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    heading: "Account Deletion",
    body: `You may delete your Saar account at any time. To do so, navigate to Account → Settings → Delete Account within the app. Alternatively, you may send a deletion request to support@randomhit.site with the subject line "Account Deletion Request" and your registered email address. We will process your request within 30 days. Deleting your account will result in permanent loss of your subscription, download history, and profile data. This action cannot be undone. Any unused portion of a paid subscription period at the time of deletion will not be refunded.

User can also request their account deletion from here:
<a href="https://docs.google.com/forms/d/e/1FAIpQLSemYrlfaEcdLI6RDMO8eFnNxOsPzzFzkZ6Ygq71rREOdSSmYQ/viewform" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2">https://docs.google.com/forms/d/e/1FAIpQLSemYrlfaEcdLI6RDMO8eFnNxOsPzzFzkZ6Ygq71rREOdSSmYQ/viewform</a>`,
  },
  {
    heading: "Termination by Saar",
    body: `We reserve the right to suspend or permanently terminate your account and access to Saar at our sole discretion, with or without notice, if we believe you have violated these Terms, engaged in fraudulent activity, or behaved in a manner harmful to other users or to the platform. In the event of termination for cause, no refund will be issued for any remaining subscription period.`,
  },
  {
    heading: "Governing Law and Jurisdiction",
    body: `These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of Saar shall be subject to the exclusive jurisdiction of the courts located in India. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
  {
    heading: "Changes to These Terms",
    body: `We reserve the right to modify these Terms at any time. When we make material changes, we will notify you through a prominent in-app notice. Your continued use of Saar after such notification constitutes your acceptance of the revised Terms. If you do not agree to the updated Terms, you must stop using the app and may request account deletion as described above.`,
  },
  {
    heading: "Contact",
    body: `If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a>. We aim to respond to all enquiries within 48 business hours.`,
  },
];

const TermsAndConditions = () => {
  return (
    <Layout>
      {/* Hero banner */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground mt-4 text-sm">Last Updated: April 6, 2025</p>
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
