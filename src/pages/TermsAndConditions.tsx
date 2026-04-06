import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Loader2 } from "lucide-react";

const TermsAndConditions = () => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data.content && data.content.terms) {
          setContent(data.content.terms);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch Terms:", err);
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
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <div className="prose prose-neutral max-w-none font-body space-y-8 text-muted-foreground leading-relaxed">
              {content.sections.map((section: any, index: number) => (
                <div key={index}>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">{section.heading}</h2>
                  <p className="whitespace-pre-wrap">{section.body}</p>
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
