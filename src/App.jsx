import React from "react";
import Container from "./components/Container";
import FeatureIcon from "./components/FeatureIcon";

const NAV = [
  { label: "Terrenos disponibles", href: "#terrenos" },
  { label: "Información", href: "#contacto" },
];

function Logo() {
  return (
    <img
      src="/icons/logo-white.svg"
      alt="Cantosanto Residenciales"
      className="h-28 w-auto shrink-0 sm:h-24 md:h-28 lg:h-32 xl:h-36 max-w-[60vw]"
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


function ContactSection() {
  return (
    <section id="contacto" className="bg-cs-beige py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-5xl rounded-3xl border border-cs-brown/15 bg-white/25 p-6 backdrop-blur md:p-10">
          <h2 className="text-center font-cinzel text-3xl font-semibold uppercase tracking-caps text-cs-accent sm:text-4xl md:text-4xl lg:text-5xl">
            Agenda una llamada
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center font-raleway text-lg leading-relaxed text-cs-brown/80 md:text-xl">
            Déjanos tus datos y un asesor se pondrá en contacto contigo.
          </p>

          {/* 
            CONFIGURA TU ENDPOINT:
            - Recomendado (sin backend): Formspree / Getform / Basin.
            - Reemplaza el action por el URL que te den.
          */}
          <form
            className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2"
            action="https://formspree.io/f/xaqqyjjp"
            method="POST"
          >
            <div>
              <label className="mb-1 block font-inter text-sm font-semibold text-cs-brown">
                Nombre
              </label>
              <input
                name="nombre"
                required
                className="w-full rounded-xl border border-cs-brown/20 bg-white/70 px-4 py-3 font-inter text-cs-dark outline-none focus:border-cs-accent"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="mb-1 block font-inter text-sm font-semibold text-cs-brown">
                Teléfono
              </label>
              <input
                name="telefono"
                className="w-full rounded-xl border border-cs-brown/20 bg-white/70 px-4 py-3 font-inter text-cs-dark outline-none focus:border-cs-accent"
                placeholder="Ej. 55 1234 5678"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block font-inter text-sm font-semibold text-cs-brown">
                Correo
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-cs-brown/20 bg-white/70 px-4 py-3 font-inter text-cs-dark outline-none focus:border-cs-accent"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block font-inter text-sm font-semibold text-cs-brown">
                Mensaje (opcional)
              </label>
              <textarea
                name="mensaje"
                rows={4}
                className="w-full resize-none rounded-xl border border-cs-brown/20 bg-white/70 px-4 py-3 font-inter text-cs-dark outline-none focus:border-cs-accent"
                placeholder="Cuéntanos qué estás buscando…"
              />
            </div>

            {/* Honeypot anti-spam */}
            <input type="text" name="_gotcha" className="hidden" />

            <div className="md:col-span-2 mt-2 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <label className="flex items-center gap-2 font-inter text-sm text-cs-brown">
                <input
                  required
                  type="checkbox"
                  className="h-4 w-4 accent-cs-accent"
                />
                Acepto el aviso de privacidad
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-cs-accent px-7 py-3 font-inter text-base font-semibold text-white transition hover:opacity-95 md:w-auto"
              >
                Enviar datos
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cs-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-cs-dark via-black/60 to-cs-dark" />

      <Container className="relative z-10 py-12">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <img
              src="/icons/logo-white.svg"
              alt="Cantosanto"
              className="h-14 w-auto"
              draggable="false"
            />
            <div className="text-sm text-cs-beige/80">
              <div className="font-inter text-base font-semibold text-cs-beige">
                Cantosanto
              </div>
              <div className="font-raleway">Terrenos en el bosque de Pátzcuaro</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Reemplaza los href por tus URLs reales */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-cs-beige/90 backdrop-blur transition hover:bg-white/10"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <path d="M16 11.37a4 4 0 1 1-7.87 1.26 4 4 0 0 1 7.87-1.26Z" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-cs-beige/90 backdrop-blur transition hover:bg-white/10"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.2c-1.2 0-1.6.7-1.6 1.5v1.8H16l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/>
              </svg>
            </a>
            <a
              href="https://tiktok.com/@cantosantomx"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-cs-beige/90 backdrop-blur transition hover:bg-white/10"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M16.7 5.2c.8 1.1 1.9 1.9 3.3 2.1v3.1c-1.4-.1-2.7-.5-3.9-1.3v6.5c0 3.2-2.6 5.8-5.8 5.8S4.5 18.8 4.5 15.6s2.6-5.8 5.8-5.8c.3 0 .6 0 .9.1v3.3c-.3-.1-.6-.2-.9-.2-1.4 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6 2.6-1.2 2.6-2.6V2.9h3.4c.1.8.3 1.6.8 2.3Z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="max-w-5xl font-raleway text-xs leading-relaxed text-cs-beige/70">
            La información mostrada es de carácter informativo y puede cambiar sin previo
            aviso. Imágenes ilustrativas. Consulta términos, condiciones y documentación
            legal con un asesor.
          </p>

          <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <a
              href="/aviso-de-privacidad"
              className="font-inter text-xs text-cs-beige/70 underline decoration-white/30 underline-offset-4 hover:text-cs-beige"
            >
              Aviso de privacidad
            </a>

            <div className="font-inter text-xs text-cs-beige/70">
              © {new Date().getFullYear()} Cantosanto. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </Container>
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
      <ContactSection />
      <Footer />
    </div>
  );
}