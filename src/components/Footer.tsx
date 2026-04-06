import { Link } from "react-router-dom";
import saarLogo from "@/assets/saar-logo.svg";

const Footer = () => {
  const linksCol1 = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/#features" },
    { label: "About", to: "/#about" },
  ];

  const linksCol2 = [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms-and-conditions" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <footer className="relative bg-secondary/50 border-t border-border overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 py-12 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo & tagline */}
          <div className="flex flex-col gap-3">
            <img src={saarLogo} alt="Saar" className="h-10 w-fit" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Your daily dose of divine — Hindu spiritual reels & photos.
            </p>
          </div>

          {/* Quick Links Col 1 */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold font-body text-foreground mb-1">Quick Links</h4>
            {linksCol1.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Quick Links Col 2 */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold font-body text-foreground mb-1">Legal</h4>
            {linksCol2.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Saar App. All rights reserved. A product of Random Hit LLP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
