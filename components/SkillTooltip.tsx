"use client";

interface Logo {
  name: string;
  src: string;
}

interface SkillTooltipProps {
  logos: Logo[];
}

export default function SkillTooltip({ logos }: SkillTooltipProps) {
  return (
    <div className="flex flex-row gap-4 items-center">
      {logos.map((logo) => (
        <div key={logo.name} className="w-6 h-6 flex items-center justify-center shrink-0">
          <img src={logo.src} alt={logo.name} title={logo.name} className="w-full h-full object-contain opacity-67" />
        </div>
      ))}
    </div>
  );
}
