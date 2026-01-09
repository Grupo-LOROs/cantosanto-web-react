import React from "react";

function Stroke({ children }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}

export function IconArea() {
  return (
    <Stroke>
      <rect x="10" y="14" width="44" height="36" rx="3" />
      <path d="M18 42 L46 22" />
      <path d="M18 30 L18 42 L30 42" />
      <path d="M46 22 L46 34 L34 34" />
    </Stroke>
  );
}

export function IconHouseDoc() {
  return (
    <Stroke>
      <path d="M12 30 L32 14 L52 30" />
      <path d="M18 28 V50 H46 V28" />
      <path d="M26 50 V38 H38 V50" />
      <path d="M12 52 H52" />
      <path d="M8 18 V10 H16" />
      <path d="M8 10 L18 20" />
    </Stroke>
  );
}

export function IconLegal() {
  return (
    <Stroke>
      <path d="M22 22 H42" />
      <path d="M26 22 C26 30 20 34 14 36" />
      <path d="M38 22 C38 30 44 34 50 36" />
      <path d="M14 36 H26" />
      <path d="M38 36 H50" />
      <path d="M32 20 V46" />
      <path d="M18 50 H46" />
    </Stroke>
  );
}

export function IconBoundary() {
  return (
    <Stroke>
      <path d="M12 44 C18 36 22 24 32 24 C42 24 46 36 52 44" />
      <path d="M12 44 H52" />
      <path d="M44 44 V30" />
      <path d="M44 30 L52 24 V44" />
      <path d="M10 18 L14 14" />
      <path d="M18 12 L18 8" />
      <path d="M26 10 L30 6" />
    </Stroke>
  );
}

export default function FeatureIcon({ title, subtitle, Icon }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="text-cs-brown">
        <Icon />
      </div>
      <p className="max-w-[16ch] text-xs leading-snug text-cs-brown">
        <span className="font-medium">{title}</span>
        {subtitle ? <><br /><span className="opacity-80">{subtitle}</span></> : null}
      </p>
    </div>
  );
}
