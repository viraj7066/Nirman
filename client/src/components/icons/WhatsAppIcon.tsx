import React from "react";

type WhatsAppIconProps = {
  className?: string;
};

// WhatsApp brand-like icon with white ring, green circle, and white handset
export default function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="WhatsApp"
      className={className}
    >
      <defs>
        <linearGradient id="waGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60d66a" />
          <stop offset="100%" stopColor="#20b038" />
        </linearGradient>
        <filter id="waGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* outer black background for glow space (kept transparent) */}
      <g filter="url(#waGlow)">
        {/* white ring */}
        <circle cx="128" cy="128" r="120" fill="#ffffff" />
        {/* green circle */}
        <circle cx="128" cy="128" r="100" fill="url(#waGrad)" />
        {/* handset */}
        <path
          fill="#ffffff"
          d="M171.4 144.4c-3.5-2-20.6-10.2-23.8-11.4-3.2-1.2-5.5-1.8-7.8 1.8-2.3 3.5-9 11.4-11 13.7-2 2.3-4.1 2.6-7.6.9-3.5-1.7-14.7-5.4-28-17.2-10.4-9.2-17.5-20.6-19.5-24.1-2-3.5-.2-5.4 1.5-7.1 1.6-1.6 3.5-4.1 5.2-6.1 1.7-2 2.3-3.5 3.5-5.8 1.2-2.3.6-4.4-.3-6.1-.9-1.8-7.8-18.8-10.7-25.7-2.8-6.9-5.6-5.9-7.8-6-2-.1-4.4-.1-6.7-.1s-6.1.9-9.3 4.4c-3.2 3.5-12.2 11.9-12.2 29.1s12.5 33.8 14.3 36.1c1.8 2.3 24.5 37.4 59.3 52.6 8.3 3.6 14.8 5.7 19.8 7.3 8.3 2.6 15.9 2.2 21.9 1.3 6.7-1 20.6-8.4 23.5-16.6 2.9-8.2 2.9-15.2 2-16.6-.9-1.4-3.2-2.3-6.7-4.3z"
        />
      </g>
    </svg>
  );
}


