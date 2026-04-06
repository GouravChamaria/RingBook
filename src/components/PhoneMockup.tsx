import { Camera } from "lucide-react";

interface PhoneMockupProps {
  label?: string;
  className?: string;
}

const PhoneMockup = ({ label = "App Screenshot", className = "" }: PhoneMockupProps) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Phone frame */}
      <div className="relative w-[220px] md:w-[260px] rounded-[2.5rem] border-[6px] border-foreground/10 bg-card shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/10 rounded-b-xl z-10" />
        {/* Screen */}
        <div className="aspect-[9/19.5] bg-gradient-to-br from-saffron-light to-secondary flex flex-col items-center justify-center gap-3 p-6">
          <Camera className="w-10 h-10 text-muted-foreground/40" />
          <p className="text-xs text-muted-foreground/60 text-center font-body">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
