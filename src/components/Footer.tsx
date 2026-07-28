import { Link } from "react-router-dom";
import logo from "@/assets/mera-noor/App Icon 1024.png";
import { APP_NAME, COMPANY_DETAILS } from "@/lib/constants";

const Footer = () => {
  const linksCol2 = [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms-and-conditions" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <footer className="relative bg-secondary/60 border-t border-border/80 overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 py-12 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt={APP_NAME} className="h-10 w-10 rounded-xl object-cover shadow-sm border border-emerald-900/10" />
              <span className="font-display text-2xl font-bold text-emerald-950">{APP_NAME}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm font-body leading-relaxed mt-1">
              Embrace divine serenity — Islamic ringtones, wallpapers, alarms, naats & daily prayers.
            </p>
            <div className="mt-2 text-xs text-muted-foreground space-y-1 font-body">
              <p className="font-semibold text-foreground">{COMPANY_DETAILS.legalName}</p>
              <p>{COMPANY_DETAILS.addressLine1}, {COMPANY_DETAILS.addressLine2}, {COMPANY_DETAILS.cityStatePincode}</p>
              <p>GSTIN: {COMPANY_DETAILS.gstin} | Phone: {COMPANY_DETAILS.phone}</p>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col gap-2 md:items-end">
            <h4 className="text-sm font-semibold font-body text-foreground mb-1">Quick Links & Legal</h4>
            <div className="flex flex-col gap-2 md:items-end">
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
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 text-center">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 {APP_NAME}. All rights reserved. A product of {COMPANY_DETAILS.legalName}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

