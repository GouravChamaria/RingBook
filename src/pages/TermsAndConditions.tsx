import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const TermsAndConditions = () => {
  return (
    <Layout>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground font-body">Last Updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <div className="prose prose-neutral max-w-none font-body space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Acceptance of Terms</h2>
                <p>
                  By downloading, installing, or using the Saar mobile application ("App"), you agree to be bound
                  by these Terms & Conditions ("Terms"). If you do not agree to these Terms, please do not use the
                  App. We reserve the right to update these Terms at any time, and your continued use of the App
                  constitutes acceptance of any changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Description of Service</h2>
                <p>
                  Saar is a Hindu spiritual short-content platform available exclusively on Android devices. The App
                  provides devotional reels, photos, background music, and inspirational imagery for personal,
                  non-commercial use. Content is curated with reverence for Hindu spiritual traditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Eligibility</h2>
                <p>
                  You must be at least 13 years of age to use Saar. Users under 18 may use the App only with the
                  involvement and consent of a parent or guardian. You must be at least 18 years of age to purchase
                  a subscription or make any in-app purchases.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">User Accounts</h2>
                <p>
                  Saar uses Google Sign-In for account creation and authentication. You are responsible for
                  maintaining the confidentiality of your account credentials and for all activities that occur
                  under your account. You agree to notify us immediately of any unauthorised use of your account.
                </p>
                <p><strong className="text-foreground">Prohibited conduct includes:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Using the App for any unlawful purpose.</li>
                  <li>Sharing your account credentials with others.</li>
                  <li>Attempting to gain unauthorised access to other users' accounts or our systems.</li>
                  <li>Uploading or distributing harmful, offensive, or inappropriate content.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Subscriptions & Payments</h2>
                <p>
                  Saar offers a trial period starting from a nominal fee, followed by a monthly subscription for
                  premium access. Subscription pricing is disclosed within the App. Key terms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period.</li>
                  <li>You may cancel your subscription at any time through the Google Play Store.</li>
                  <li>No refunds are provided for consumed trial periods.</li>
                  <li>Refunds on active subscriptions are at Saar's sole discretion, subject to Google Play's refund policies.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Content & Intellectual Property</h2>
                <p>
                  All content available on Saar — including but not limited to videos, images, music, text, graphics,
                  and the App's design — is owned by Saar or its licensors and is protected by applicable intellectual
                  property laws.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Content is provided for personal, non-commercial use only.</li>
                  <li>You may not redistribute, re-upload, sell, or commercialise any downloaded content.</li>
                  <li>Sharing content via the App's built-in sharing features (e.g., WhatsApp Status) is permitted for personal use.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Prohibited Uses</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Scrape, crawl, or extract data from the App by automated means.</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the App.</li>
                  <li>Distribute content from the App commercially or claim it as your own.</li>
                  <li>Use the App to distribute spam, malware, or other harmful content.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
                <p>
                  The App and all content are provided "as is" and "as available" without warranties of any kind,
                  whether express or implied. Saar does not warrant that the App will be uninterrupted, error-free,
                  or free of viruses or other harmful components.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by applicable law, Saar and its affiliates shall not be liable for
                  any indirect, incidental, special, consequential, or punitive damages arising out of or related to
                  your use of the App, even if advised of the possibility of such damages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Saar, its officers, directors, employees, and
                  agents from any claims, liabilities, damages, losses, or expenses arising from your use of the
                  App, your violation of these Terms, or your infringement of any third-party rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                  arising from these Terms or the use of the App shall be subject to the exclusive jurisdiction of
                  the courts in India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Termination</h2>
                <p>
                  Saar reserves the right to suspend or terminate your account and access to the App at any time,
                  with or without notice, for conduct that we believe violates these Terms or is harmful to other
                  users, Saar, or third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Changes to Terms</h2>
                <p>
                  We may modify these Terms at any time. Significant changes will be communicated through the App
                  or via email. Continued use of the App after changes are posted constitutes acceptance of the
                  revised Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Contact Information</h2>
                <p>
                  If you have any questions about these Terms & Conditions, please contact us at:
                </p>
                <p className="text-foreground font-semibold">Email: support@saarapp.com</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default TermsAndConditions;
