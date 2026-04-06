import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero banner */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground font-body">Last Updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <div className="prose prose-neutral max-w-none font-body space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Introduction & Overview</h2>
                <p>
                  Saar ("we," "our," or "us") is a Hindu spiritual short-content platform available exclusively on
                  Android. We are committed to protecting the privacy of our users. This Privacy Policy explains how
                  we collect, use, share, and protect your personal information when you use the Saar mobile
                  application and associated services.
                </p>
                <p>
                  By using Saar, you agree to the collection and use of information in accordance with this policy.
                  We encourage you to read this document carefully and contact us if you have any questions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Information We Collect</h2>
                <p>We collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Account Data:</strong> When you sign in using Google Sign-In, we receive your name, email address, and profile photo.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> Information about content you view, download, like, and interact with within the app.</li>
                  <li><strong className="text-foreground">Device Information:</strong> Device model, operating system version, unique device identifiers, and app version.</li>
                  <li><strong className="text-foreground">Payment Information:</strong> Subscription and billing data is processed through third-party payment gateways. Saar does not store your credit/debit card details directly.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve the Saar service.</li>
                  <li>Personalise content recommendations based on your preferences.</li>
                  <li>Process subscriptions and manage your account.</li>
                  <li>Send important notifications about service updates, security alerts, and support messages.</li>
                  <li>Respond to your support queries and feedback.</li>
                  <li>Analyse usage patterns to improve app performance and user experience.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Data Sharing</h2>
                <p>
                  We do not sell your personal data to any third party. We may share limited information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Payment Processors:</strong> To process subscription payments securely.</li>
                  <li><strong className="text-foreground">Analytics Providers:</strong> To understand app usage and improve our services (anonymised and aggregated data where possible).</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> If required by law, regulation, or legal process, we may disclose your information to comply with applicable laws.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Data Retention</h2>
                <p>
                  We retain your account data for as long as your account remains active. If you request account
                  deletion, your personal data will be permanently removed from our systems within 30 days of the
                  request. Anonymised usage data may be retained for analytical purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal data we hold about you.</li>
                  <li>Request correction of inaccurate information.</li>
                  <li>Request deletion of your personal data and account.</li>
                  <li>Withdraw consent for data processing at any time.</li>
                </ul>
                <p>To exercise any of these rights, please contact us at the email address provided below.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Subscriptions & Billing</h2>
                <p>
                  Saar offers a trial period starting from a nominal fee, followed by a monthly subscription.
                  Subscription pricing is disclosed within the app. Subscriptions auto-renew unless cancelled at
                  least 24 hours before the end of the current billing period. You may cancel your subscription at
                  any time through the Google Play Store. Refunds are subject to our discretion and Google Play's
                  refund policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Children's Privacy</h2>
                <p>
                  Saar is not intended for use by children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If we become aware that a child under 13 has provided us with
                  personal data, we will take steps to delete such information promptly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Security</h2>
                <p>
                  We implement industry-standard security measures to protect your personal information. All data is
                  encrypted in transit using TLS/SSL protocols. We use secure storage practices and regularly review
                  our security infrastructure. However, no method of electronic transmission or storage is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Third-Party Services</h2>
                <p>Saar integrates with the following third-party services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Google Sign-In:</strong> For user authentication.</li>
                  <li><strong className="text-foreground">Payment Gateway:</strong> For processing subscription payments.</li>
                  <li><strong className="text-foreground">Analytics:</strong> For understanding app usage patterns.</li>
                </ul>
                <p>Each third-party service operates under its own privacy policy.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. When we make significant changes, we will
                  notify users through the app or via email. The "Last Updated" date at the top of this page
                  reflects the most recent revision. Continued use of the app after changes constitutes acceptance
                  of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Contact Information</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy or our data practices, please
                  contact us at:
                </p>
                <p className="text-foreground font-semibold">
                  Email: support@saarapp.com
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
