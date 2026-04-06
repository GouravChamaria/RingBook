import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const defaultContent = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "Introduction & Overview",
        body: 'Saar ("we," "our," or "us") is a Hindu spiritual short-content platform available exclusively on Android. We are committed to protecting the privacy of our users.',
      },
      {
        heading: "Information We Collect",
        body: "We collect Account Data (name, email, profile photo via Google Sign-In), Usage Data (content interactions), Device Information, and Payment Information processed through third-party gateways.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use information to provide and improve the service, personalise recommendations, process subscriptions, send notifications, respond to queries, and analyse usage patterns.",
      },
      {
        heading: "Data Sharing",
        body: "We do not sell your personal data. We may share limited information with payment processors, analytics providers, and as required by law.",
      },
      {
        heading: "Your Rights",
        body: "You have the right to access, correct, and delete your personal data, and to withdraw consent for data processing at any time.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: 'By downloading, installing, or using the Saar mobile application ("App"), you agree to be bound by these Terms & Conditions.',
      },
      {
        heading: "Description of Service",
        body: "Saar is a Hindu spiritual short-content platform available exclusively on Android devices, providing devotional reels, photos, background music, and inspirational imagery.",
      },
      {
        heading: "Subscriptions & Payments",
        body: "Saar offers a trial period starting from a nominal fee, followed by a monthly subscription. Subscriptions auto-renew unless cancelled 24 hours before the end of the billing period.",
      },
      {
        heading: "Content & Intellectual Property",
        body: "All content on Saar is owned by Saar or its licensors and is protected by intellectual property laws. Content is for personal, non-commercial use only.",
      },
      {
        heading: "Governing Law",
        body: "These Terms shall be governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts in India.",
      },
    ],
  },
  contact: {
    title: "Contact Us",
    sections: [
      {
        heading: "About",
        body: "Thank you for your interest in Saar — your daily dose of divine Hindu spiritual content. Whether you have questions, need subscription help, or want to share feedback, we're here to help.",
      },
      {
        heading: "Support Details",
        body: "Our support team is available Monday through Saturday, 10:00 AM to 6:00 PM IST. We respond to all inquiries within 24–48 hours.",
      },
    ],
  },
};

const defaultContactInfo = {
  email: "support@saarapp.com",
  phone: "+91 XXXXX XXXXX",
  address: "Random Hit LLP, India",
  supportHours: "Mon – Sat, 10:00 AM – 6:00 PM IST",
};

async function main() {
  const hashedPassword = await bcrypt.hash('Randomhit@123', 10);
  
  await prisma.user.upsert({
    where: { email: 'randomhit.site@gmail.com' },
    update: { password: hashedPassword },
    create: {
      email: 'randomhit.site@gmail.com',
      password: hashedPassword,
    },
  });

  for (const [key, value] of Object.entries(defaultContent)) {
    await prisma.pageContent.upsert({
      where: { pageKey: key },
      update: {},
      create: {
        pageKey: key,
        title: value.title,
        sections: JSON.stringify(value.sections),
      },
    });
  }

  const existingContactInfo = await prisma.contactInfo.findFirst();
  if (!existingContactInfo) {
    await prisma.contactInfo.create({
      data: defaultContactInfo,
    });
  }

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
