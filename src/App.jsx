import React, { useState } from 'react';
import Container from './components/Container';
import { Menu, X, MapPin, TreePine, Shield, Wind, Droplets, Car, Lightbulb, Zap, Layers, EyeOff, Facebook, Mail, Phone } from 'lucide-react';

// --- IMPORTACIÓN DE IMÁGENES ---
import heroImage from '/images/hero.webp'; 
import aerialImage from '/images/aerial.webp';
import mapImage from '/images/map.webp';
import logoImage from '/icons/logo-tzintzuni.svg'; // Asegúrate que este logo tenga colores oscuros

// Imágenes Específicas
import arq1 from '/images/arquitectura-1.webp';
import arq2 from '/images/arquitectura-2.webp';
import amenidad1 from '/images/amenidades-1.webp';
import amenidad2 from '/images/amenidades-2.webp';

// Galería
import gal1 from '/images/galeria-1.webp';
import gal2 from '/images/galeria-2.webp';
import gal3 from '/images/galeria-3.webp';
import gal4 from '/images/galeria-4.webp';
import gal5 from '/images/galeria-5.webp';
import gal6 from '/images/galeria-6.webp';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. CAMBIO DE ORDEN: Arquitectura antes de Amenidades
  const NAV_LINKS = [
    { label: "Concepto", href: "#concepto" },
    { label: "Arquitectura", href: "#arquitectura" },
    { label: "Amenidades", href: "#amenidades" },
    { label: "Galería", href: "#galeria" },
    { label: "Ubicación", href: "#ubicacion" },
  ];

  const galleryImages = [gal1, gal2, gal3, gal4, gal5, gal6];

  return (
    <div className="font-sans text-cs-dark bg-cs-beige antialiased selection:bg-cs-accent selection:text-white">
      
      {/* --- NAVBAR (CAMBIO: Fondo Beige para que resalte el logo oscuro) --- */}
      <nav className="fixed w-full z-50 bg-cs-beige/80 backdrop-blur-md border-b border-cs-dark/5 text-cs-dark transition-all duration-300 shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-24">
            {/* LOGO */}
            <a href="#" className="h-12 flex items-center group">
              <img 
                src={logoImage} 
                alt="Tzintzuni Logo" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col ml-2">
                <span className="text-2xl font-serif font-bold tracking-widest text-cs-dark group-hover:text-cs-accent transition-colors">TZINTZUNI</span>
                <span className="text-[10px] text-cs-accent font-sans tracking-[0.4em] uppercase text-right mt-1 opacity-80">Arboledas</span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="text-xs font-bold uppercase tracking-[0.2em] text-cs-dark hover:text-cs-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Botón Agendar Visita (Estilo Dark para contrastar con el beige) */}
            <a href="#contacto" className="hidden md:block bg-cs-dark text-white border border-transparent px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-cs-accent transition-all shadow-lg">
              Solicitar Información
            </a>

            {/* Mobile Toggle */}
            <button className="md:hidden text-cs-dark hover:text-cs-accent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-cs-beige border-t border-cs-dark/10 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="flex flex-col p-8 space-y-6 text-center">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-cs-dark text-xl font-serif tracking-wider hover:text-cs-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Bosque Tzintzuni" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-cs-dark/70 via-cs-dark/20 to-cs-dark" />
        </div>
        
        <Container className="relative z-10 text-center text-white pt-20">
          <div className="inline-block border-y border-cs-accent/50 py-2 mb-8 backdrop-blur-sm px-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/80 font-bold">Terrenos Residenciales</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-2xl">
            Tu refugio en el <br/>
            <span className="text-white">corazón de Pátzcuaro</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-200 mb-12 font-light leading-relaxed drop-shadow-lg">
            Diseñado para vivir o invertir en un entorno natural único.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#concepto" className="bg-cs-accent text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-cs-dark transition-all shadow-lg hover:shadow-cs-accent/50">
              Ver Proyecto
            </a>
          </div>
        </Container>
      </header>

      {/* --- STATS STRIP --- */}
      <div className="bg-cs-primary py-12 border-b border-cs-secondary/20 relative z-20 -mt-20 mx-4 md:mx-12 lg:mx-24 shadow-2xl rounded-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-cs-secondary/30">
          <div className="p-12">
            <span className="block text-4xl md:text-5xl font-serif text-white mb-2">118</span>
            <span className="text-xs uppercase tracking-widest text-cs-accent font-bold">Lotes Exclusivos</span>
          </div>
          <div className="p-16">
            <span className="block text-3xl md:text-4xl font-serif text-white mb-2">Áreas Verdes</span>
          </div>
          <div className="p-12">
            <span className="block text-4xl md:text-5xl font-serif text-white mb-2">100%</span>
            <span className="text-xs uppercase tracking-widest text-cs-accent font-bold">Urbanizado</span>
          </div>
          <div className="p-2">
            <span className="text-xs uppercase tracking-widest text-cs-accent font-bold">Desde</span>
            <span className="block text-4xl md:text-5xl font-serif text-white mb-2">126 m²</span>
            <span className="text-xs uppercase tracking-widest text-cs-accent font-bold">hasta </span>
            <span className="block text-4xl md:text-5xl font-serif text-white mb-2">400 m²</span>
          </div>
        </div>
      </div>

      {/* --- CONCEPTO --- */}
      <section id="concepto" className="py-32 bg-cs-beige">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-cs-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">La escencia del proyecto</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-cs-dark mb-8 leading-tight">
                Zona con proyección <br/>de plusvalía
              </h2>
              <div className="space-y-6 text-cs-dark/80 leading-relaxed text-lg">
                <p>
                  <strong className="text-cs-primary">Tzintzuni Arboledas</strong> nace de su ubicación privilegiada dentro de Pátzcuaro. Cada lote ha sido cuidadosamente planificado para ofrecer espacios amplios, privacidad y un entorno residencial bien integrado.
                </p>
                <p>
                  Espacios diseñados para construir con libertad, combinando tranquilidad y cercanía con el centro de Pátzcuaro.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="bg-white p-6 shadow-sm border-l-4 border-cs-accent">
                  <Shield className="text-cs-secondary mb-4" size={24} />
                  <h4 className="font-bold text-cs-primary uppercase tracking-wider text-sm mb-2">Privacidad</h4>
                  <p className="text-sm text-gray-500">Diseño de baja densidad para garantizar tu espacio.</p>
                </div>
                <div className="bg-white p-6 shadow-sm border-l-4 border-cs-accent">
                  <TreePine className="text-cs-secondary mb-4" size={24} />
                  <p className="text-sm text-gray-500">Un entorno residencial dentro de Pátzcuaro que combina tranquilidad, tradición y cercanía con la vida cultural de la ciudad.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-cs-secondary/10 overflow-hidden rounded-sm p-2">
                <img src={aerialImage} alt="Vista aérea" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale-[20%]" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cs-dark p-8 hidden md:flex flex-col justify-center text-white z-10 shadow-xl border border-white/5">
                 <span className="text-2xl font-serif text-white">Espacios para construir con libertad</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- ARQUITECTURA --- */}
      <section id="arquitectura" className="py-32 bg-cs-dark text-cs-beige overflow-hidden relative">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-cs-accent font-bold tracking-[0.2em] uppercase text-xs">Detalles Técnicos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-8 text-white">Arquitectura Sensitiva</h2>
            <p className="text-cs-beige/70 text-lg">
              Lineamientos arquitectónicos que garantizan una estética ordenada y una integración respetuosa con la arquitectura tradicional de Pátzcuaro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch mb-20">
             <div className="relative h-[400px] md:h-auto overflow-hidden rounded-sm border border-white/10 group">
                <img src={arq1} alt="Detalle Arquitectónico" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"/>
                <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                  <span className="text-white font-serif text-xl">Materialidad Regional</span>
                </div>
             </div>
             <div className="relative h-[400px] md:h-auto overflow-hidden rounded-sm border border-white/10 group">
                <img src={arq2} alt="Interiores" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"/>
                <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                  <span className="text-white font-serif text-xl">Calidez Interior</span>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 hover:border-cs-accent/50 transition-colors">
              <Layers className="text-cs-accent mb-4" size={32} />
              <h3 className="text-xl font-serif mb-2 text-white">Integración Arquitectónica</h3>
              <p className="text-white/60 text-sm mb-4">Materiales como piedra volcánica, madera y teja que evocan la arquitectura tradicional de Pátzcuaro.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 hover:border-cs-accent/50 transition-colors">
              <EyeOff className="text-cs-accent mb-4" size={32} />
              <h3 className="text-xl font-serif mb-2 text-white">Infraestructura Oculta</h3>
              <p className="text-white/60 text-sm mb-4">Instalaciones subterráneas y equipos discretamente integrados para mantener una imagen urbana limpia.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 hover:border-cs-accent/50 transition-colors">
              <Lightbulb className="text-cs-accent mb-4" size={32} />
              <h3 className="text-xl font-serif mb-2 text-white">Iluminación Responsable</h3>
              <p className="text-white/60 text-sm mb-4">Iluminación cálida dirigida al suelo que reduce la contaminaci</p>
            </div>
          </div>
        </Container>
      </section>

      {/* --- AMENIDADES --- */}
      <section id="amenidades" className="py-32 bg-cs-beige">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-cs-accent font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Estilo de Vida</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-cs-dark">Bienestar en el Bosque</h2>
            </div>
            <p className="md:w-1/3 text-cs-dark/60 mt-6 md:mt-0 text-right border-t border-cs-accent/30 pt-6">
              Amenidades que extienden tu hogar hacia la naturaleza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 md:h-80 rounded-sm overflow-hidden group">
              <img src={amenidad1} alt="Amenidad Bosque" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-4 left-4 text-white font-serif text-2xl font-bold">Parque Central</div>
            </div>
            <div className="relative h-64 md:h-80 rounded-sm overflow-hidden group">
              <img src={amenidad2} alt="Amenidad Terraza" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-4 left-4 text-white font-serif text-2xl font-bold">Terraza Social</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Car, title: "Senderos 2km" },
              { icon: Shield, title: "Acceso Seguro" },
              { icon: Droplets, title: "Fuente Ornamental" },
              { icon: Zap, title: "Servicios Ocultos" },
              { icon: Lightbulb, title: "Iluminación LED" },
              { icon: Menu, title: "Casa Club" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 flex items-center gap-4 border border-transparent hover:border-cs-accent transition-all shadow-sm">
                <item.icon className="w-6 h-6 text-cs-secondary" />
                <span className="font-bold text-cs-dark text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- GALERÍA --- */}
      <section id="galeria" className="py-24 bg-white border-t border-cs-dark/5">
        <Container>
          <div className="text-center mb-12">
            <span className="text-cs-accent font-bold tracking-[0.2em] uppercase text-xs">Galería</span>
            <h2 className="text-3xl font-serif font-bold text-cs-dark mt-2">Vistas del Desarrollo</h2>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((imgSrc, idx) => (
              <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-sm cursor-zoom-in">
                <img 
                  src={imgSrc} 
                  alt={`Galería ${idx + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- UBICACIÓN --- */}
      <section id="ubicacion" className="flex flex-col lg:flex-row bg-cs-primary text-white min-h-[600px]">
        <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden bg-cs-beige">
          <img 
            src={mapImage} 
            alt="Mapa Pátzcuaro" 
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000 opacity-90" 
          />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 px-4">
            <div className="inline-block border-y border-white/40 backdrop-blur-sm bg-cs-dark/20 px-5 py-2">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/90 font-bold text-center">
                Ubicado dentro de Pátzcuaro,<br></br> con acceso inmediato a servicios,<br></br> cultura y naturaleza.
              </p>
            </div>
          </div>
          <div className="absolute bottom-10 left-10 bg-white text-cs-dark p-8 shadow-2xl max-w-xs border-l-4 border-cs-accent">
            <h4 className="font-bold font-serif text-xl mb-1">Zona de Alta Plusvalía</h4>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-bold">Inversión Pública 191 MDP</p>
            <div className="flex items-center gap-2 text-sm font-bold text-cs-primary">
              <span className="w-2 h-2 rounded-full bg-cs-accent animate-pulse"></span>
              Zona Ecológica Protegida
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 p-16 lg:p-32 flex flex-col justify-center bg-cs-dark">
          <span className="text-cs-accent font-bold tracking-[0.2em] uppercase text-xs mb-4">Ubicación Estratégica</span>
          <h2 className="text-4xl font-serif font-bold mb-12">La Magia de Pátzcuaro <br/>a tus pies</h2>
          
          <div className="space-y-8">
            <div className="group">
              <div className="flex justify-between items-baseline mb-2 border-b border-white/20 pb-2">
                <h3 className="text-xl font-bold group-hover:text-cs-accent transition-colors">Centro de Pátzcuaro</h3>
                <span className="text-cs-accent font-mono font-bold">8 MIN</span>
              </div>
              <p className="text-sm text-white/50">Vida cultural, gastronomía y comercio.</p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline mb-2 border-b border-white/20 pb-2">
                <h3 className="text-xl font-bold group-hover:text-cs-accent transition-colors">Tzurumutaro</h3>
                <span className="text-cs-accent font-mono font-bold">15 MIN</span>
              </div>
              <p className="text-sm text-white/50">Conexión rápida a servicios.</p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline mb-2 border-b border-white/20 pb-2">
                <h3 className="text-xl font-bold group-hover:text-cs-accent transition-colors">Isla Janitzio</h3>
                <span className="text-cs-accent font-mono font-bold">18 MIN</span>
              </div>
              <p className="text-sm text-white/50">Destino turístico internacional.</p>
            </div>
            
            <div className="group">
              <div className="flex justify-between items-baseline mb-2 border-b border-white/20 pb-2">
                <h3 className="text-xl font-bold group-hover:text-cs-accent transition-colors">Morelia</h3>
                <span className="text-cs-accent font-mono font-bold">45 MIN</span>
              </div>
              <p className="text-sm text-white/50">Capital del estado y aeropuerto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACTO / FOOTER --- */}
      <footer id="contacto" className="bg-cs-dark text-white pt-32 pb-12 border-t border-white/5">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-none">
                Empieza tu nueva vida <br/> <span className="text-cs-accent">en el corazón de Pátzcuaro</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Agenda una visita hoy mismo y descubre por qué Tzintzuni Arboledas es el legado que tu familia merece.
              </p>

              {/* DATOS DE CONTACTO NUEVOS */}
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-4">
                  <Mail className="text-cs-accent" />
                  <a href="mailto:arboledas@hogaresdeesa.com" className="hover:text-cs-accent transition-colors">arboledas@hogaresdeesa.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-cs-accent" />
                  <a href="tel:4433187373" className="hover:text-cs-accent transition-colors">443 318 7373</a>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Botón WhatsApp */}
                <a 
                  href="https://wa.me/5214433187373?text=Hola,%20me%20interesa%20información%20sobre%20Tzintzuni"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-cs-accent text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-cs-dark transition-all shadow-lg hover:shadow-cs-accent/50 text-center flex items-center justify-center gap-2"
                >
                  Whatsapp
                </a>
                
                {/* Botón Descargar Brochure (Requiere archivo 'brochure.pdf' en carpeta public) */}
                <a 
                  href="/brochure.pdf" 
                  download="Brochure-Tzintzuni-Arboledas.pdf"
                  className="border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-cs-dark transition-all text-center flex items-center justify-center"
                >
                  Descargar Brochure
                </a>
              </div>
            </div>

            {/* FORMULARIO CONECTADO A FORMSPREE */}
            <div className="bg-white/5 p-10 border border-white/10 backdrop-blur-sm rounded-sm">
              <form action="https://formspree.io/f/xaqqyjjp" method="POST" className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-2 text-cs-accent">Nombre</label>
                    <input name="nombre" type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:border-cs-accent outline-none transition-colors" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-2 text-cs-accent">Apellido</label>
                    <input name="apellido" type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:border-cs-accent outline-none transition-colors" placeholder="Tu apellido" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2 text-cs-accent">Contacto</label>
                  <input name="email" type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:border-cs-accent outline-none transition-colors" placeholder="Correo electrónico" required />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2 text-cs-accent">Mensaje</label>
                  <textarea name="mensaje" rows="3" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:border-cs-accent outline-none transition-colors" placeholder="Me interesa conocer más sobre..."></textarea>
                </div>
                <button type="submit" className="w-full bg-cs-primary text-white font-bold uppercase tracking-[0.2em] py-4 hover:bg-white hover:text-cs-dark transition-all mt-4 border border-transparent hover:border-cs-primary">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
            <p>&copy; 2024 Tzintzuni Arboledas. Pátzcuaro, Michoacán.</p>
            <div className="flex gap-8 mt-4 md:mt-0 items-center">
              <a href="https://www.facebook.com/tzintzuniarboledas" target="_blank" rel="noopener noreferrer" className="hover:text-cs-accent transition-colors flex items-center gap-2">
                <Facebook size={16} /> Facebook
              </a>
              <a href="#" className="hover:text-cs-accent transition-colors">Aviso de Privacidad</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
