import { Link } from "react-router-dom";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import saarLogo from "@/assets/saar-logo.svg";

const Footer = () => {
  return (
    <footer className="relative bg-secondary/50 border-t border-border overflow-hidden">
      {/* Mandala decorative bg */}
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

          {/* Nav links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold font-body text-foreground mb-1">Quick Links</h4>
            {[
              { label: "Home", to: "/" },
              { label: "Features", to: "/#features" },
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Terms & Conditions", to: "/terms-and-conditions" },
              { label: "Contact Us", to: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold font-body text-foreground mb-1">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Saar App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
