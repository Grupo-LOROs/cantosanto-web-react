import React from "react";

/**
 * Renderiza los SVGs reales exportados del diseño (en /public/icons).
 * Nota: algunos íconos estaban "agrupados"; se resolvió exportándolos como SVG único.
 */
const ICONS = {
  area: "/icons/icons1.svg",
  zoning: "/icons/icons2.svg",
  legal: "/icons/icons3.svg",
  bounds: "/icons/icons4.svg",
};

export default function FeatureIcon({ name, className = "", alt = "" }) {
  const src = ICONS[name] || ICONS.area;
  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      loading="lazy"
      draggable="false"
    />
  );
}
