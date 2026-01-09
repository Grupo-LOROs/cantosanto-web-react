import React from "react";
import Container from "./components/Container";
import FeatureIcon from "./components/FeatureIcon";

const NAV = [
  { label: "Terrenos disponibles", href: "#terrenos" },
  { label: "Información", href: "#informacion" },
];

function Logo() {
  return (
    <img
      src="/icons/logo-white.svg"
      alt="Cantosanto Residenciales"
      className="h-28 w-auto shrink-0 sm:h-32 md:h-40 lg:h-48 xl:h-56 max-w-[60vw]"
      draggable="false"
    />
  );
}


function Hero() {
  return (
    <header className="relative min-h-[92vh] w-full overflow-hidden">
      <img
        src="/images/hero.webp"
        alt="Bosque"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* overlay cálido */}
      <div className="absolute inset-0 bg-cs-dark/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-cs-dark/20 via-cs-dark/45 to-cs-dark/65" />

      <Container className="relative z-10 flex min-h-[92vh] flex-col">
        <div className="flex items-start justify-between gap-6 pt-8 md:pt-10">
          <Logo />

          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/15 bg-white/15 px-10 py-4 font-inter text-lg font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/25"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* mobile */}
          <div className="flex flex-col items-end gap-3 md:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl border border-white/15 bg-white/15 px-5 py-3 font-inter text-sm font-semibold text-white/90 backdrop-blur-md"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center pb-16 pt-10 md:pb-24">
          <h1 className="text-center font-cinzel text-4xl font-medium uppercase tracking-caps text-white md:text-6xl lg:text-7xl">
            <span className="font-medium text-white/90">UN LUGAR DONDE </span>
            <span className="font-bold">LA TRANQUILIDAD,</span>
            <br />
            <span className="font-bold">LA NATURALEZA Y EL DESCANSO</span>
            <br />
            <span className="font-medium text-white/90">SE ENCUENTRAN.</span>
          </h1>
        </div>
      </Container>
    </header>
  );
}

function Intro() {
  return (
    <section id="informacion" className="bg-cs-beige py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-cinzel text-3xl font-semibold uppercase leading-tight tracking-caps text-cs-accent sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            Terrenos en el Bosque de Pátzcuaro
          </h2>
          <p className="mx-auto mt-8 max-w-4xl font-raleway text-xl leading-relaxed text-cs-brown/80 md:text-2xl">
            <span className="font-semibold text-cs-brown">Cantosanto</span> es un
            desarrollo campestre planeado para quienes buscan invertir con visión
            y construir un refugio personal rodeado de bosque, a solo minutos del
            corazón de Pátzcuaro.
          </p>
        </div>
      </Container>
    </section>
  );
}

function SplitStory() {
  return (
    <section id="terrenos" className="bg-cs-beige">
      <div className="mx-auto w-full max-w-7xl px-0">
        <div className="grid overflow-hidden md:grid-cols-5">
          <div className="bg-cs-accent px-6 py-10 md:col-span-2 md:pl-12 md:pr-16 md:py-14 lg:px-12 lg:py-16">
            <h3 className="pr-2 font-cinzel text-3xl font-semibold uppercase leading-[1.05] tracking-caps text-cs-brown sm:text-4xl md:pr-6 md:text-4xl lg:pr-10 lg:text-5xl">
              Vive el entorno.
              <br />
              Protege tu inversión.
            </h3>
            <div className="mt-6 h-[2px] w-4/5 bg-cs-beige/80" />

            <p className="mt-8 font-raleway text-lg leading-relaxed text-cs-beige md:text-xl">
              Imagina despertar entre árboles, con aire limpio, silencio y
              privacidad, sin alejarte de la ciudad. <span className="font-semibold">Cantosanto</span> fue
              pensado para conservar el entorno natural y, al mismo tiempo,
              ofrecer condiciones claras y seguras para construir.
            </p>

            <ul className="mt-8 space-y-2 font-raleway text-lg text-cs-beige md:text-xl">
              <li>* Zona boscosa protegida</li>
              <li>* Comunidad residencial</li>
              <li>* Desarrollo ordenado y sustentable</li>
            </ul>
          </div>

          <div className="relative md:col-span-3">
            <img
              src="/images/house.webp"
              alt="Cabaña en el bosque"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: "area",
    title: "Superficies desde\n1,000 hasta 2,500 m²",
  },
  {
    icon: "zoning",
    title: "Uso de suelo\nhabitacional autorizado",
  },
  {
    icon: "legal",
    title: "Certeza legal total",
  },
  {
    icon: "bounds",
    title: "Delimitación física y\ncolindancias claras",
  },
];

function Features() {
  return (
    <section className="bg-cs-beige py-16 md:py-24">
      <Container>
        <div className="text-center">
          <h2 className="font-cinzel text-3xl font-semibold uppercase leading-tight tracking-caps text-cs-accent sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            Terrenos listos para construir
          </h2>
          <p className="mx-auto mt-4 max-w-4xl font-raleway text-xl text-cs-brown/80 md:text-2xl">
            Nuestros terrenos están pensados para facilitar tu proyecto desde el
            primer día:
          </p>
        </div>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.icon} className="flex flex-col items-center text-center">
              <div className="text-cs-brown">
                <FeatureIcon
                  name={f.icon}
                  stroke={4}
                  className="h-32 w-32 md:h-40 md:w-40"
                />
              </div>
              <div className="mt-6 whitespace-pre-line font-raleway text-xl font-semibold leading-snug text-cs-brown md:text-2xl">
                {f.title}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ImageCallout() {
  return (
    <section className="bg-cs-beige">
      <div className="mx-auto w-full max-w-7xl px-0">
        <div className="relative">
          <img
            src="/images/interior.webp"
            alt="Interior con vista al bosque"
            className="h-[520px] w-full object-cover md:h-[680px]"
          />

          <div className="absolute bottom-8 left-8 max-w-[420px] border border-white/70 bg-cs-dark/35 p-6 backdrop-blur-sm md:bottom-10 md:left-10 md:p-7">
            <p className="font-cinzel text-sm uppercase tracking-caps leading-snug text-[#E4D7C6] sm:text-base md:text-lg">
              Terrenos con
              <br />
              potencial personal o con
              <br />
              vocación turística.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="bg-cs-beige py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-6xl text-center font-cinzel text-3xl font-semibold uppercase tracking-caps text-cs-brown sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
          Crea un lugar al que siempre quieras volver,
          <br />
          y que otros también.
        </h2>

        <div className="mt-10">
          <img
            src="/images/aerial.webp"
            alt="Vista aérea"
            className="h-[360px] w-full object-cover md:h-[520px]"
          />
        </div>

        <div className="mt-4 grid gap-4 md:mt-6 md:grid-cols-3">
          {["/images/small-1.webp", "/images/small-2.webp", "/images/small-3.webp"].map(
            (src) => (
              <img
                key={src}
                src={src}
                alt="Galería"
                className="h-44 w-full object-cover md:h-52"
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
}

function MapSection() {
  return (
    <section className="bg-cs-beige">
      <div className="mx-auto w-full max-w-7xl px-0">
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <img
              src="/images/map.webp"
              alt="Mapa"
              className="h-full min-h-[340px] w-full object-cover md:min-h-[520px]"
            />
          </div>

          <div className="bg-cs-brown px-8 py-12 md:px-14 md:py-16">
            <h3 className="text-center font-cinzel text-4xl font-semibold uppercase tracking-caps text-[#E4D7C6] md:text-5xl">
              Ubicación
              <br />
              estratégica
            </h3>
            <div className="mx-auto mt-6 h-[2px] w-4/5 bg-cs-beige/80" />

            <p className="mx-auto mt-8 max-w-lg font-raleway text-lg leading-relaxed text-cs-beige/90 md:text-xl">
              Cantosanto se encuentra a 12 minutos reales del centro de Pátzcuaro,
              con acceso cómodo durante todo el año. Camino pavimentado y tramo
              final de terracería compactada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalSection() {
  const items = [
    "Propiedad privada.",
    "Escrituras individuales.",
    "Proceso de compraventa ante notario.",
    "Acompañamiento legal antes, durante y después.",
    "Servicios y soluciones sustentables.",
  ];

  return (
    <section className="bg-cs-beige py-10 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="border-y-[6px] border-cs-accent py-10 md:py-14">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h3 className="font-cinzel text-3xl font-semibold uppercase leading-tight tracking-caps text-[#B54A17] sm:text-4xl mx-auto max-w-6xl text-center">
                La legalidad no es una
                <br />
                promesa, es un hecho:
              </h3>

              <ul className="mt-8 space-y-3 font-raleway text-lg text-cs-dark md:text-xl">
                {items.map((t) => (
                  <li key={t} className="flex gap-4">
                    <span className="mt-1">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="/images/gavel.webp"
                alt="Legalidad"
                className="h-[260px] w-full max-w-[520px] object-contain md:h-[360px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cs-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-cs-dark via-black/60 to-cs-dark" />
      <div className="relative h-48 md:h-64">
        <div className="absolute bottom-10 left-0 right-0 h-px bg-cs-beige/70" />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cs-beige text-cs-brown">
      <Hero />
      <Intro />
      <SplitStory />
      <Features />
      <ImageCallout />
      <Gallery />
      <MapSection />
      <LegalSection />
      <Footer />
    </div>
  );
}
