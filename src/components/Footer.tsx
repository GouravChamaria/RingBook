import { Link } from "react-router-dom";
import chandanLogo from "@/assets/chandan-logo.png";

const Footer = () => {
  const linksCol2 = [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms-and-conditions" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <footer className="relative bg-secondary/50 border-t border-border overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 py-12 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div className="flex flex-col gap-3">
            <img src={chandanLogo} alt="Chandan" className="h-10 w-fit object-contain" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Your daily dose of divine — Hindu spiritual ringtones, wallpapers, alarms & mantras.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:justify-self-end">
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
            © 2026 Chandan App. All rights reserved. A product of Random Hit LLP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
