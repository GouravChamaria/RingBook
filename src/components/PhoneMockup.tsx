import { Camera } from "lucide-react";

interface PhoneMockupProps {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

const PhoneMockup = ({
  src,
  alt,
  label = "App Screenshot",
  className = "",
  imageClassName = "",
  priority = false,
}: PhoneMockupProps) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      <div className="relative w-[220px] md:w-[260px] rounded-[2.5rem] border-[6px] border-foreground/10 bg-card shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/10 rounded-b-xl z-10" />
        <div className="aspect-[9/19.5] bg-gradient-to-br from-saffron-light to-secondary">
          {src ? (
            <img
              src={src}
              alt={alt ?? label}
              className={`h-full w-full object-cover ${imageClassName}`}
              loading={priority ? "eager" : "lazy"}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6">
              <Camera className="w-10 h-10 text-muted-foreground/40" />
              <p className="text-xs text-muted-foreground/60 text-center font-body">{label}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
