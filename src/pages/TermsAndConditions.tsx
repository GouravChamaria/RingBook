import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const sections = [
  {
    heading: "",
    body: `Operated by Random Hit LLP
Last Updated: May 2025

<strong>Contact Information:</strong>
Phone: +91 87697 63320
Email: <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a>
Address: Rd 4, Ridhi Sidhi Enclave 1st, Sri Ganganagar, Rajasthan 335001`,
  },
  {
    heading: "ACCEPTANCE OF TERMS",
    body: `These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User") and Chandan ("we," "us," or "our"), operated by Random Hit LLP, governing your access to and use of the Chandan Android application and any associated services. By downloading, installing, or using the Chandan app, you confirm that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree to these Terms, you must not use the app.`,
  },
  {
    heading: "DESCRIPTION OF SERVICE",
    body: `Chandan is a Hindu spiritual platform available exclusively on Android devices. The app offers two core pillars of experience:

<strong>1. Devotional Content:</strong> Users can stream devotional short videos (reels), browse and download spiritual photographs, listen to devotional background music, interact with content through likes and comments, and share content to third-party platforms including WhatsApp. All photos, videos, audio, and other devotional content are curated and uploaded by the Chandan team. Users do not upload content to the platform.

<strong>2. AI Spiritual & Astrology Guidance:</strong> Users can interact with an AI Panditji for personalised spiritual and astrology-based insights, including Rashifal, Kundali readings, Bhavishyafal, and general spiritual guidance. All astrological and spiritual content, predictions, and guidance provided through the AI Panditji feature are strictly for informational and devotional purposes only. Chandan does not guarantee the accuracy, reliability, or outcomes of any predictions or guidance provided. Users acknowledge that all interpretations are subjective and should not be relied upon for making financial, legal, medical, or any other life-critical decisions. Chandan and Random Hit LLP shall not be held liable for any direct, indirect, incidental, or consequential losses arising from the use of these features.`,
  },
  {
    heading: "ELIGIBILITY",
    body: `You must be at least 13 years of age to create an account and use Chandan. You must be at least 18 years of age, or have the consent of a parent or legal guardian, to purchase a subscription or trial. By using the app, you represent and warrant that you meet these age requirements. If you are under 18 and wish to subscribe, please ensure you have your parent or guardian's permission and that they are aware of and agree to these Terms on your behalf.`,
  },
  {
    heading: "USER ACCOUNTS",
    body: `To access most features of Chandan, you must sign in using a valid Google account. You are responsible for maintaining the security of your Google account and for all activity that occurs under your Chandan account. You must not share your account with others or allow anyone else to access the app using your credentials. You must notify us immediately at <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a> if you believe your account has been compromised. We reserve the right to suspend or terminate your account if we have reason to believe it is being used in violation of these Terms.

You agree to provide accurate and complete information when using the app, particularly when engaging with the AI Panditji and astrology features, as the quality of personalised outputs depends on the accuracy of the information provided.`,
  },
  {
    heading: "SUBSCRIPTIONS AND PAYMENTS",
    body: `Chandan offers a free trial period and recurring subscription plans, the details and pricing of which are displayed within the app at the time of purchase. All pricing is in Indian Rupees (INR) and is inclusive of applicable taxes.

The trial period, trial features, duration, and limitations are variable and subject to change at any time without prior notice. Both trial and paid versions may include usage restrictions such as message limits, download quotas, feature caps, or access limitations, which may be modified at our sole discretion.

By subscribing, you authorise us (through our payment gateway partner) to charge your selected payment method on a recurring basis until you cancel. Your subscription renews automatically at the end of each billing cycle unless you cancel before the renewal date.

If you cancel a paid subscription, you retain access to premium features until the end of the current paid billing cycle. If you cancel during a free trial, your access to premium features ends immediately upon cancellation.

We reserve the right to modify subscription pricing and plans with reasonable advance notice provided within the app. Continued usage after such changes constitutes acceptance of the revised pricing and terms.`,
  },
  {
    heading: "REFUND POLICY",
    body: `All services and subscriptions offered on Chandan are non-refundable under any circumstances. Once a payment is made, it cannot be reversed, refunded, or cancelled, regardless of usage or dissatisfaction.

If you do not wish to be charged after a trial period, you must cancel your subscription before the trial period ends. Once the trial period converts into a paid subscription, no refunds — partial or full — will be issued, even if you are unable to use the app for any reason.

In the event of termination of your account for violations of these Terms, no refund will be issued for any remaining subscription period.

If you are experiencing technical difficulties, we encourage you to contact our support team at <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a>, but contacting support does not make you eligible for a refund.`,
  },
  {
    heading: "PERMITTED USE OF CONTENT",
    body: `All photos, videos, audio tracks, and other content available on Chandan are owned by or licensed to Chandan and are protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable licence to stream and, where the download feature is enabled on your account, download content from Chandan for your own personal, non-commercial use only.

You may not copy, reproduce, distribute, publicly display, publish, sell, license, sublicense, modify, or create derivative works from any content obtained through Chandan. You may not re-upload Chandan content to any other platform, social media account, or website for any purpose. Sharing content to your personal WhatsApp Status or privately with friends and family is permitted and encouraged.`,
  },
  {
    heading: "CONTENT INFORMATION",
    body: `All devotional content available on Chandan, including visuals, videos, short-form videos (reels), and music, is exclusively created, curated, and uploaded by our team. Some of this content may be AI-generated, including visuals, videos, and music; however, all material is carefully reviewed to ensure it is respectful, culturally appropriate, and aligned with the values, traditions, and sentiments of Hindu culture and its deities. We maintain strict quality and sensitivity standards, and every piece of content is reviewed and verified at least twice by experienced and knowledgeable individuals in this domain before being published on the platform.

Astrological and spiritual guidance provided through the AI Panditji feature is generated using automated computational systems, including third-party language processing technologies. All outputs are for informational and devotional purposes only.`,
  },
  {
    heading: "DISCLAIMER FOR SPIRITUAL AND ASTROLOGICAL CONTENT",
    body: `Chandan provides astrological insights, Rashifal, Kundali readings, and spiritual guidance for informational and devotional purposes only. We do not guarantee the accuracy, completeness, or reliability of any predictions or guidance provided. Users are solely responsible for any decisions or actions taken based on content or guidance received through the app. Chandan and Random Hit LLP expressly disclaim any liability for decisions made by users based on astrological or spiritual content provided through the platform.`,
  },
  {
    heading: "PROHIBITED CONDUCT",
    body: `You agree not to use Chandan in any manner that violates applicable laws or regulations or these Terms. Specifically, you must not:

- Attempt to reverse-engineer, decompile, disassemble, or extract the source code of the Chandan application.
- Attempt to circumvent screenshot restrictions, download blocks, or any other technical protection measures.
- Use automated tools, bots, scrapers, or scripts to access or interact with the app.
- Impersonate any person or entity or misrepresent your affiliation with any person.
- Use the app to transmit any harmful, offensive, or inappropriate content.
- Attempt to gain unauthorised access to our servers, databases, or backend systems.
- Provide false or misleading personal information, particularly for the purpose of manipulating astrological or spiritual outputs.
- Use the app in any way that could damage, overburden, or impair our infrastructure.
- Engage in any fraudulent activity or attempt to manipulate the platform in any way.`,
  },
  {
    heading: "INTELLECTUAL PROPERTY",
    body: `The Chandan name, logo (चंदन), app design, user interface, all original content, and all associated trademarks are the exclusive property of Chandan, operated by Random Hit LLP. Nothing in these Terms transfers any intellectual property rights to you. Your use of Chandan does not grant you any right, title, or interest in our intellectual property beyond the limited licence described in these Terms.`,
  },
  {
    heading: "DISCLAIMER OF WARRANTIES",
    body: `Chandan is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the app will be uninterrupted, error-free, or completely secure. We do not guarantee that the content available on Chandan is accurate, complete, or up to date. Devotional, spiritual, and astrological content is provided for inspirational and informational purposes only. To the fullest extent permitted by applicable law, we disclaim all implied warranties including merchantability, fitness for a particular purpose, and non-infringement. Chandan does not assume any liability for interruptions, errors, delays, or unavailability of the platform.`,
  },
  {
    heading: "ACCOUNT DELETION",
    body: `You may delete your Chandan account at any time using any of the following methods:

- <strong>Through the App:</strong> Navigate to Account → Settings → Delete Account.
- <strong>Via Web Form:</strong> Submit a deletion request through our form at: <a href="https://docs.google.com/forms/d/e/1FAIpQLSemYrlfaEcdLI6RDMO8eFnNxOsPzzFzkZ6Ygq71rREOdSSmYQ/viewform" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2">https://docs.google.com/forms/d/e/1FAIpQLSemYrlfaEcdLI6RDMO8eFnNxOsPzzFzkZ6Ygq71rREOdSSmYQ/viewform</a>
- <strong>Via Email:</strong> Send an email to <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a> with the subject line "Account Deletion Request" and include your registered email address.

We will process your request within 30 days. Deleting your account will result in permanent loss of your subscription, download history, conversation history, and all profile data. This action cannot be undone. Any unused portion of a paid subscription period at the time of deletion will not be refunded.`,
  },
  {
    heading: "TERMINATION BY CHANDAN",
    body: `We reserve the right to suspend or permanently terminate your account and access to Chandan at our sole discretion, with or without notice, if we believe you have violated these Terms, engaged in fraudulent activity, or behaved in a manner harmful to other users or to the platform. In the event of termination for cause, no refund will be issued for any remaining subscription period.`,
  },
  {
    heading: "GOVERNING LAW AND JURISDICTION",
    body: `These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of Chandan shall be subject to the jurisdiction determined by Random Hit LLP in accordance with applicable Indian law. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
  {
    heading: "CHANGES TO THESE TERMS",
    body: `We reserve the right to modify these Terms at any time. When we make material changes, we will notify you through a prominent in-app notice. Your continued use of Chandan after such notification constitutes your acceptance of the revised Terms. If you do not agree to the updated Terms, you must stop using the app and may request account deletion as described above.`,
  },
  {
    heading: "CONTACT",
    body: `If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a>. We aim to respond to all enquiries within 48 business hours.

<strong>Random Hit LLP</strong>
Rd 4, Ridhi Sidhi Enclave 1st
Sri Ganganagar, Rajasthan 335001
Phone: +91 87697 63320
Email: <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a>`,
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
          <p className="text-muted-foreground mt-4 text-sm">Last Updated: May 2025</p>
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
