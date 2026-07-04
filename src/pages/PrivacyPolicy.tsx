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
    heading: "INTRODUCTION",
    body: `Welcome to Chandan (चंदन). Chandan is a Hindu spiritual platform available on Android devices. Through Chandan, users can browse, set, download, and share devotional ringtones, wallpapers, alarms, and mantras for their daily spiritual practice.

This Privacy Policy explains what information we collect, how we use it, and how we protect it. By downloading, installing, or using the Chandan app, you agree to the practices described in this policy. If you do not agree, please do not use the app.`,
  },
  {
    heading: "INFORMATION WE COLLECT",
    body: `<strong>A. Information You Provide</strong>

When you sign in to Chandan, we use Google Sign-In as the sole authentication method. Through this process, we receive your full name, email address, and Google profile photo. We do not collect your Google password at any time.

<strong>B. Usage Data</strong>

We automatically collect certain usage data when you interact with the app. This includes information about which ringtones, wallpapers, alarms, or mantras you download or share, and general interaction patterns within the app. We collect this data to improve content delivery and manage platform features.

<strong>C. Device Information</strong>

We collect basic device information including your device model, operating system version, IP address, browser type, app usage behaviour, session duration, and a unique device identifier. This helps us ensure compatibility, troubleshoot technical issues, enhance user experience, and optimise platform performance.`,
  },
  {
    heading: "WHAT WE DO NOT COLLECT",
    body: `We do not collect your precise GPS location. We do not access your contacts, call logs, or SMS messages. We do not access your camera or microphone. We do not read any files on your device beyond the ones you explicitly choose to download through the app. We do not collect any financial information directly — all payment processing for subscriptions and trials is handled entirely by our third-party payment gateway, and we never see or store your card number, UPI ID, or banking credentials.`,
  },
  {
    heading: "HOW WE USE YOUR INFORMATION",
    body: `We use your name and email address to create and manage your Chandan account, authenticate you when you return to the app, and communicate with you regarding your subscription, account status, or support queries.

We use your usage data to track download quotas and feature access based on your subscription tier, and to generate anonymised, aggregated analytics that help us understand how the platform is being used overall.

We use your device information solely for technical compatibility and debugging purposes.

We do not use your personal information to serve third-party targeted advertisements. We do not sell, rent, or trade your personal data to any third party for commercial purposes.`,
  },
  {
    heading: "CONTENT DOWNLOADS",
    body: `The Chandan app allows subscribed users to download devotional ringtones, wallpapers, alarms, and mantras directly to their device. When you download content, the file is saved to your device's local storage. We do not monitor, scan, or access any other files on your device. Downloaded content is provided for personal, non-commercial use only. You may not redistribute, re-upload, or commercialise any content downloaded from Chandan.`,
  },
  {
    heading: "SUBSCRIPTIONS AND BILLING",
    body: `Chandan offers a trial period and recurring subscription plans. Subscription payments are processed by our third-party payment gateway partner. We receive confirmation of successful or failed transactions but do not store your payment credentials. Your subscription status — active, trial, or cancelled — is stored on our servers and linked to your account. If you cancel your subscription, you retain access until the end of your current billing period. If you cancel during a free trial, access is revoked immediately. You can manage or cancel your subscription from within the app.`,
  },
  {
    heading: "DATA SHARING",
    body: `We do not sell your personal data. We share your data only in the following limited circumstances:

- With our payment processing partner solely to complete your subscription transaction.
- With analytics service providers to help us understand app usage in aggregated, anonymised form.
- With trusted infrastructure and technology service providers that assist in operating the platform.
- With law enforcement or regulatory authorities if we are required to do so by applicable law, court order, or governmental authority.

Any third-party service providers we work with are contractually required to handle your data securely and only for the specific purpose for which it was shared. User data may be stored, processed, and transmitted through secure servers and third-party infrastructure providers. By using the app, you consent to such storage and processing, including cross-border data transfers where applicable.`,
  },
  {
    heading: "DATA RETENTION",
    body: `We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data from our systems within 30 days of receiving your account deletion request, except where we are required by law to retain certain records (such as transaction records for tax purposes, which may be retained for up to 7 years as required under Indian law).`,
  },
  {
    heading: "ACCOUNT DELETION",
    body: `You have the right to delete your Chandan account at any time. You can request account deletion using any of the following methods:

- <strong>Through the App:</strong> Navigate to Account → Settings → Delete Account.
- <strong>Via Web Form:</strong> Submit a deletion request through our form at: <a href="https://docs.google.com/forms/d/e/1FAIpQLSemYrlfaEcdLI6RDMO8eFnNxOsPzzFzkZ6Ygq71rREOdSSmYQ/viewform" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2">https://docs.google.com/forms/d/e/1FAIpQLSemYrlfaEcdLI6RDMO8eFnNxOsPzzFzkZ6Ygq71rREOdSSmYQ/viewform</a>
- <strong>Via Email:</strong> Send an email to <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a> with the subject line "Account Deletion Request" and include the email address associated with your Chandan account.

We will process your deletion request within 30 days. Upon deletion, your profile information, usage history, conversation history, and all associated personal data will be permanently removed from our servers. Note that downloaded content already saved to your device will not be remotely deleted, as it resides on your local storage.`,
  },
  {
    heading: "CHILDREN'S PRIVACY",
    body: `The Chandan app is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has created an account or provided us with personal information, we will delete that information immediately. If you are a parent or guardian and believe your child has used Chandan without your consent, please contact us at <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a>.`,
  },
  {
    heading: "SECURITY",
    body: `We take reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. All data transmitted between the app and our servers is encrypted using industry-standard TLS/SSL encryption. Your account is protected by Google's authentication infrastructure. We implement commercially reasonable safeguards to protect user information; however, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    heading: "YOUR RIGHTS",
    body: `You have the right to access the personal data we hold about you, to request correction of any inaccurate information, to request deletion of your account and associated data, and to withdraw your consent to data processing at any time (which will result in account termination). To exercise any of these rights, please contact us at <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a>.`,
  },
  {
    heading: "CHANGES TO THIS PRIVACY POLICY",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make significant changes, we will notify you through a prominent notice within the app. Your continued use of Chandan after such notice constitutes your acceptance of the updated policy. We encourage you to review this page periodically.`,
  },
  {
    heading: "CONTACT",
    body: `If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please contact us at <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a>. We will respond to all privacy-related enquiries within 48 hours on business days.

<strong>Random Hit LLP</strong>
Rd 4, Ridhi Sidhi Enclave 1st
Sri Ganganagar, Rajasthan 335001
Phone: +91 87697 63320
Email: <a href="mailto:support@randomhit.site" class="text-primary underline underline-offset-2">support@randomhit.site</a>`,
  },
];

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero banner */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
            Privacy Policy
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

export default PrivacyPolicy;
