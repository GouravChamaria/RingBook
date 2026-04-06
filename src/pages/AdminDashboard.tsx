import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, FileText, Shield, Phone, Save, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import saarLogo from "@/assets/saar-logo.svg";
import { toast } from "sonner";

type PageKey = "privacy" | "terms" | "contact";

const sidebarItems: { key: PageKey; label: string; icon: React.ElementType }[] = [
  { key: "privacy", label: "Privacy Policy", icon: Shield },
  { key: "terms", label: "Terms & Conditions", icon: FileText },
  { key: "contact", label: "Contact Us", icon: Phone },
];

const defaultContent: Record<PageKey, { title: string; sections: { heading: string; body: string }[] }> = {
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

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState<PageKey>("privacy");
  const [content, setContent] = useState(defaultContent);
  const [contactInfo, setContactInfo] = useState({
    email: "support@saarapp.com",
    phone: "+91 XXXXX XXXXX",
    address: "Random Hit LLP, India",
    supportHours: "Mon – Sat, 10:00 AM – 6:00 PM IST",
  });

  useEffect(() => {
    if (sessionStorage.getItem("saar_admin") !== "true") {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("saar_admin");
    navigate("/admin");
  };

  const updateSection = (pageKey: PageKey, idx: number, field: "heading" | "body", value: string) => {
    setContent((prev) => {
      const updated = { ...prev };
      updated[pageKey] = {
        ...updated[pageKey],
        sections: updated[pageKey].sections.map((s, i) =>
          i === idx ? { ...s, [field]: value } : s
        ),
      };
      return updated;
    });
  };

  const addSection = (pageKey: PageKey) => {
    setContent((prev) => ({
      ...prev,
      [pageKey]: {
        ...prev[pageKey],
        sections: [...prev[pageKey].sections, { heading: "New Section", body: "" }],
      },
    }));
  };

  const removeSection = (pageKey: PageKey, idx: number) => {
    setContent((prev) => ({
      ...prev,
      [pageKey]: {
        ...prev[pageKey],
        sections: prev[pageKey].sections.filter((_, i) => i !== idx),
      },
    }));
  };

  const handleSave = () => {
    toast.success(`${content[activePage].title} content saved successfully!`);
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col shrink-0">
        <div className="p-5 border-b border-border">
          <img src={saarLogo} alt="Saar" className="h-8" />
          <p className="text-xs text-muted-foreground mt-1 font-body">Content Management</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActivePage(item.key)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-body transition-colors ${
                activePage === item.key
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
              {activePage === item.key && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-border">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-muted-foreground hover:text-destructive"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 lg:p-8 max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-display font-bold text-foreground">
                {content[activePage].title}
              </h1>
              <p className="text-sm text-muted-foreground font-body mt-1">
                Edit content sections below
              </p>
            </div>
            <Button onClick={handleSave} className="rounded-xl bg-primary text-primary-foreground">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>

          {/* Page Title */}
          <Card className="mb-6 border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-body">Page Title</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                value={content[activePage].title}
                onChange={(e) =>
                  setContent((prev) => ({
                    ...prev,
                    [activePage]: { ...prev[activePage], title: e.target.value },
                  }))
                }
                className="rounded-xl"
              />
            </CardContent>
          </Card>

          {/* Contact Info (only for contact page) */}
          {activePage === "contact" && (
            <Card className="mb-6 border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-body">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs">Email</Label>
                    <Input
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs">Phone</Label>
                    <Input
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs">Address</Label>
                    <Input
                      value={contactInfo.address}
                      onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs">Support Hours</Label>
                    <Input
                      value={contactInfo.supportHours}
                      onChange={(e) => setContactInfo({ ...contactInfo, supportHours: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Content Sections */}
          <div className="space-y-4">
            {content[activePage].sections.map((section, idx) => (
              <Card key={idx} className="border-border">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs text-muted-foreground">Section {idx + 1}</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeSection(activePage, idx)}
                      className="text-xs text-destructive hover:text-destructive"
                    >
                      Remove
                    </Button>
                  </div>
                  <Input
                    value={section.heading}
                    onChange={(e) => updateSection(activePage, idx, "heading", e.target.value)}
                    placeholder="Section heading"
                    className="rounded-xl font-semibold"
                  />
                  <Textarea
                    value={section.body}
                    onChange={(e) => updateSection(activePage, idx, "body", e.target.value)}
                    placeholder="Section content..."
                    rows={4}
                    className="rounded-xl"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => addSection(activePage)}
            className="mt-4 rounded-xl w-full border-dashed"
          >
            + Add Section
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
