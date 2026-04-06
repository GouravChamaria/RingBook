import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, FileText, Shield, Phone, Save, ChevronRight, Loader2 } from "lucide-react";
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

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState<PageKey>("privacy");
  const [content, setContent] = useState<Record<PageKey, { title: string; sections: { heading: string; body: string }[] }> | null>(null);
  const [contactInfo, setContactInfo] = useState({
    email: "", phone: "", address: "", supportHours: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const verifyAndFetch = async () => {
      try {
        const authRes = await fetch("/api/auth/verify");
        const authData = await authRes.json();
        
        if (!authData.success) {
          sessionStorage.removeItem("saar_admin");
          navigate("/admin");
          return;
        }

        const contentRes = await fetch("/api/content");
        const contentData = await contentRes.json();
        
        if (contentData.content) {
          setContent(contentData.content);
        }
        if (contentData.contactInfo) {
          setContactInfo(contentData.contactInfo);
        }
      } catch (err) {
        toast.error("Failed to load dashboard data");
        navigate("/admin");
      } finally {
        setIsLoading(false);
      }
    };
    verifyAndFetch();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (e) {}
    sessionStorage.removeItem("saar_admin");
    navigate("/admin");
  };

  const updateSection = (pageKey: PageKey, idx: number, field: "heading" | "body", value: string) => {
    setContent((prev) => {
      if (!prev) return prev;
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
    setContent((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [pageKey]: {
          ...prev[pageKey],
          sections: [...prev[pageKey].sections, { heading: "New Section", body: "" }],
        },
      };
    });
  };

  const removeSection = (pageKey: PageKey, idx: number) => {
    setContent((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [pageKey]: {
          ...prev[pageKey],
          sections: prev[pageKey].sections.filter((_, i) => i !== idx),
        },
      };
    });
  };

  const handleSave = async () => {
    if (!content) return;
    setIsSaving(true);
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, contactInfo }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`${content[activePage].title} content saved successfully!`);
      } else {
        toast.error("Failed to save changes.");
      }
    } catch (err) {
      toast.error("Network error while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

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
            <Button onClick={handleSave} disabled={isSaving} className="rounded-xl bg-primary text-primary-foreground">
              {isSaving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
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
                  setContent((prev) => {
                    if (!prev) return prev;
                    return {
                      ...prev,
                      [activePage]: { ...prev[activePage], title: e.target.value },
                    };
                  })
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
