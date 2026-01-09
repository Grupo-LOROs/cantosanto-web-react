import React from "react";
import Container from "./components/Container.jsx";
import FeatureIcon, {
  IconArea,
  IconBoundary,
  IconHouseDoc,
  IconLegal,
} from "./components/FeatureIcon.jsx";

const NAV = [
  { label: "Terrenos disponibles", href: "#terrenos" },
  { label: "Información", href: "#info" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-cs-beige text-cs-brown">
      <HeaderHero />

      {/* INTRO */}
      <section id="info" className="cs-section py-10 md:py-14">
        <Container className="text-center">
          <h2 className="cs-heading text-lg md:text-xl text-cs-terracotta">
            Terrenos en el bosque de Pátzcuaro
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-cs-brown/80">
            Cantosanto es un desarrollo campestre planeado para quienes buscan
            invertir con visión y construir un refugio personal rodeado de bosque,
            a solo minutos del corazón de Pátzcuaro.
          </p>
        </Container>
      </section>

      {/* SPLIT: VALUE + HOUSE IMAGE */}
      <section id="terrenos" className="cs-section pb-10 md:pb-14">
        <Container>
          <div className="grid overflow-hidden rounded-sm md:grid-cols-2">
            <div className="bg-cs-terracotta px-6 py-7 md:px-8 md:py-10">
              <h3 className="cs-heading text-base leading-tight text-cs-beige2 md:text-lg">
                Vive el entorno.
                <br />
                Protege tu inversión.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-cs-beige2/85">
                Invierte en un entorno natural con aire limpio, silencio y privacidad,
                sin alejarte de la ciudad. Un proyecto pensado para conservar el bosque
                y ofrecer condiciones claras y seguras para construir.
              </p>

              <ul className="mt-5 list-disc space-y-1 pl-5 text-sm text-cs-beige2/90">
                <li>Zona boscosa protegida</li>
                <li>Comunidad residencial</li>
                <li>Desarrollo ordenado y sustentable</li>
              </ul>
            </div>

            <div className="relative">
              <img
                src="/images/house.jpg"
                alt="Casa en el bosque"
                className="h-full min-h-[220px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="cs-section py-10 md:py-14">
        <Container>
          <div className="text-center">
            <h2 className="cs-heading text-lg md:text-xl text-cs-terracotta">
              Terrenos listos para construir
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-cs-brown/75">
              Nuestros terrenos están pensados para facilitar tu proyecto desde el primer día.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            <FeatureIcon
              Icon={IconArea}
              title="Superficies"
              subtitle="desde 1,000 hasta 2,500 m²"
            />
            <FeatureIcon
              Icon={IconHouseDoc}
              title="Uso de suelo"
              subtitle="habitacional autorizado"
            />
            <FeatureIcon Icon={IconLegal} title="Certeza legal" subtitle="total" />
            <FeatureIcon
              Icon={IconBoundary}
              title="Delimitación física"
              subtitle="y colindancias claras"
            />
          </div>
        </Container>
      </section>

      {/* INTERIOR IMAGE / CALL OUT */}
      <section className="cs-section pb-10 md:pb-14">
        <Container>
          <div className="relative overflow-hidden rounded-sm shadow-soft">
            <img
              src="/images/interior.jpg"
              alt="Interior con vista al bosque"
              className="h-[300px] w-full object-cover md:h-[420px]"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 max-w-[260px] border border-white/70 bg-cs-brown/70 px-4 py-3 backdrop-blur-sm">
              <p className="cs-heading text-[10px] leading-snug text-white/90 md:text-xs">
                Terrenos con
                <br />
                potencial personal o con
                <br />
                vocación turística.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* LIFESTYLE */}
      <section className="cs-section py-10 md:py-14">
        <Container>
          <h2 className="cs-heading text-center text-lg md:text-2xl text-cs-brown">
            Crea un lugar al que siempre quieras volver,
            <br className="hidden md:block" />
            y que otros también.
          </h2>

          <div className="mt-7 overflow-hidden rounded-sm shadow-soft">
            <img
              src="/images/aerial.jpg"
              alt="Vista aérea"
              className="h-[220px] w-full object-cover md:h-[360px]"
              loading="lazy"
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 md:gap-4">
            <img
              src="/images/small-1.jpg"
              alt="Lifestyle 1"
              className="h-24 w-full rounded-sm object-cover md:h-36"
              loading="lazy"
            />
            <img
              src="/images/small-2.jpg"
              alt="Lifestyle 2"
              className="h-24 w-full rounded-sm object-cover md:h-36"
              loading="lazy"
            />
            <img
              src="/images/small-3.jpg"
              alt="Lifestyle 3"
              className="h-24 w-full rounded-sm object-cover md:h-36"
              loading="lazy"
            />
          </div>
        </Container>
      </section>

      {/* MAP + LOCATION */}
      <section className="cs-section pb-10 md:pb-14">
        <Container>
          <div className="grid overflow-hidden rounded-sm md:grid-cols-2">
            <div className="relative">
              <img
                src="/images/map.jpg"
                alt="Mapa satelital"
                className="h-full min-h-[220px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="bg-cs-brown px-7 py-8 md:px-10 md:py-10">
              <h3 className="cs-heading text-lg text-white">Ubicación estratégica</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Cantosanto se encuentra a ~12 minutos del centro de Pátzcuaro, con acceso
                rápido desde la carretera principal. Camino pavimentado y tramo final de
                terracería compactada.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* LEGAL */}
      <section className="bg-cs-beige2 py-10 md:py-14">
        <Container>
          <div className="border-y border-cs-terracotta/70 py-8 md:py-10">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="cs-heading text-base md:text-lg text-cs-terracotta">
                  La legalidad no es una
                  <br />
                  promesa, es un hecho:
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-cs-brown/80">
                  <li>Propiedad privada.</li>
                  <li>Escrituras individuales.</li>
                  <li>Proceso de compraventa ante notario.</li>
                  <li>Acompañamiento legal antes, durante y después.</li>
                  <li>Servicios y soluciones sustentables.</li>
                </ul>
              </div>

              <div className="flex justify-center md:justify-end">
                <img
                  src="/images/gavel.jpg"
                  alt="Legalidad y certeza"
                  className="w-full max-w-md rounded-sm object-cover shadow-soft"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

function HeaderHero() {
  return (
    <header className="relative min-h-[62vh] md:min-h-[70vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Bosque"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <Container className="relative z-10">
        <nav className="flex items-center justify-between pt-6 md:pt-8">
          <Logo />

          <div className="flex items-center gap-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="cs-pill border-white/25 bg-white/15 text-white/90 backdrop-blur-md hover:bg-white/20"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex min-h-[52vh] items-center justify-center pb-10 md:min-h-[60vh]">
          <h1 className="cs-heading mx-auto max-w-4xl text-center text-3xl leading-tight text-white md:text-5xl">
            Un lugar donde la tranquilidad,
            <br />
            la naturaleza y el descanso
            <br />
            se encuentran.
          </h1>
        </div>
      </Container>
    </header>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3 text-white">
      <span className="grid h-9 w-9 place-items-center border border-white/60">
        <span className="block h-3 w-3 bg-white/80" />
      </span>
      <span className="leading-none">
        <span className="cs-heading block text-sm tracking-caps">Cantosanto</span>
        <span className="block text-[10px] text-white/70">Desarrollo campestre</span>
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cs-brown2 to-black py-14">
      <Container>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Cantosanto. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
