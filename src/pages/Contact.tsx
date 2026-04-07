import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const [content, setContent] = useState<any>(null);
  const [contactInfo, setContactInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data.content && data.content.contact) {
          setContent(data.content.contact);
        }
        if (data.contactInfo) {
          setContactInfo(data.contactInfo);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch contact content:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!content) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center min-h-[50vh] flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-foreground">Content Not Found</h2>
          <p className="text-muted-foreground mt-2">We could not load the content at this time. Please try again later.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero banner */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
            {content.title}
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <AnimatedSection>
              <div className="prose prose-neutral max-w-none font-body space-y-8 text-muted-foreground leading-relaxed">
                {content.sections.map((section: any, index: number) => (
                  <div key={index}>
                    {section.heading && <h2 className="text-2xl font-display font-bold text-foreground mb-4">{section.heading}</h2>}
                    <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: section.body }} />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {contactInfo && (
              <AnimatedSection delay={0.2}>
                <Card className="border-border bg-card shadow-lg">
                  <CardContent className="p-8 space-y-8">
                    <h3 className="text-2xl font-display font-bold text-foreground">Get in Touch</h3>
                    
                    <div className="space-y-6">
                      {contactInfo.email && (
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Mail className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">Email</p>
                            <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                              {contactInfo.email}
                            </a>
                          </div>
                        </div>
                      )}
                      
                      {contactInfo.phone && (
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Phone className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">Phone</p>
                            <a href={`tel:${contactInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                              {contactInfo.phone}
                            </a>
                          </div>
                        </div>
                      )}
                      
                      {contactInfo.address && (
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">Address</p>
                            <p className="text-muted-foreground">{contactInfo.address}</p>
                          </div>
                        </div>
                      )}
                      
                      {contactInfo.supportHours && (
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Clock className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">Support Hours</p>
                            <p className="text-muted-foreground">{contactInfo.supportHours}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )}
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
