"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link'; 
import { Button } from "@/components/ui/button";
import imageData from '@/app/lib/placeholder-images.json';
import { ArrowRight } from 'lucide-react';

const logos = [
  { src: '/clientes/logo_1.webp', alt: 'Fundación Minera Los Pelamidos' },
  { src: '/clientes/logo_2.webp', alt: 'Antimásiva Mineral' },
  { src: '/clientes/logo_3.webp', alt: 'AngloAmerican' },
  { src: '/clientes/logo_4.webp', alt: 'Cbb' },
  { src: '/clientes/logo_5.webp', alt: 'Arauco Celulosa' },
  { src: '/clientes/logo_6.webp', alt: 'San José' },
  { src: '/clientes/logo_7.webp', alt: 'Cap Huachipato' },
  { src: '/clientes/logo_8.webp', alt: 'Universidad de Chile' },
  { src: '/clientes/logo_9.webp', alt: 'Agrosonda' },
  { src: '/clientes/logo_10.webp', alt: 'Abengoa' },
  { src: '/clientes/logo_11.webp', alt: 'Elecnor' },
  { src: '/clientes/logo_12.webp', alt: 'El Golfo' },
  { src: '/clientes/logo_13.webp', alt: 'Salmones Camanchaca' },
  { src: '/clientes/logo_14.webp', alt: 'Northstar Energy' },
  { src: '/clientes/logo_15.webp', alt: 'Parque Eolico Punta Palmeras' },
  { src: '/clientes/logo_16.webp', alt: 'Parque Eolico San Pedro' },
];

export default function HomePage() {
  const { inicio } = imageData;
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const clientesSectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const totalCards = 3;

  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (error) {
          console.log("Auto-play prevented by browser.");
        }
      };
      playVideo();
    }
  }, []);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.children[0]?.clientWidth || 0;
      const newIndex = Math.round(scrollLeft / (cardWidth + 24));
      if (newIndex !== activeCardIndex && newIndex >= 0 && newIndex < totalCards) {
        setActiveCardIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeCardIndex]);

  const scrollToCard = (index: number) => {
    const container = cardsContainerRef.current;
    if (!container) return;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 24;
    const scrollPosition = index * (cardWidth + gap);
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    setActiveCardIndex(index);
  };

  const scrollToClientes = () => {
    clientesSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const hasLogos = logos.length > 0;

  return (
    <>
      {/* Hero Section con video, se mantiene con contraste para impacto visual */}
      <section className="relative min-h-screen w-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 overflow-hidden bg-zinc-100">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          poster={inicio.src}
        >
          <source src="https://www.pexels.com/download/video/2073129/" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-5" />

        <div className="relative z-10 w-full max-w-2xl mt-20 md:mt-0">
          <h1 className="text-5xl md:text-7xl lg:text-[85px] font-bold text-white drop-shadow-lg mb-6 leading-[1.1] tracking-tight">
            Impulsamos el futuro de la minería
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 max-w-lg font-medium drop-shadow-md">
            Expertos en Ingeniería Eléctrica, Construcción, Ensayos eléctricos y Fibra Óptica para proyectos de gran escala.
          </p>
          <Button
            size="lg"
            onClick={scrollToClientes}
            className="px-10 py-6 bg-[#AE1E24] text-white hover:bg-[#AE1E24]/90 rounded-none font-bold uppercase tracking-[0.2em] text-xs shadow-xl transition-all"
          >
            NUESTROS SERVICIOS <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contenido Principal con Fondo Claro */}
      <section className="bg-white w-full py-24 px-6 md:px-16 lg:px-24">
        <div ref={clientesSectionRef} className="max-w-7xl mx-auto scroll-mt-24">
          
          {/* Carrusel de logos con filtros para fondo claro */}
          {hasLogos && (
            <div className="mb-24 overflow-hidden">
              <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-400 text-center mb-16 font-bold">
                EMPRESAS QUE CONFÍAN EN NOSOTROS
              </h2>
              <div className="flex w-max animate-infinite-scroll grayscale hover:grayscale-0 transition-all duration-700">
                {logos.map((logo, idx) => (
                  <div key={`original-${idx}`} className="flex-shrink-0 mx-10 flex items-center justify-center" style={{ minWidth: '140px' }}>
                    <img src={logo.src} alt={logo.alt} className="max-h-12 md:max-h-14 w-auto object-contain" />
                  </div>
                ))}
                {logos.map((logo, idx) => (
                  <div key={`clone-${idx}`} className="flex-shrink-0 mx-10 flex items-center justify-center" style={{ minWidth: '140px' }}>
                    <img src={logo.src} alt={logo.alt} className="max-h-12 md:max-h-14 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Información Estratégica Estilo Codelco */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start py-20 border-t border-zinc-100">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-[1.1] tracking-tight mb-10">
                Liderando la innovación en <span className="text-[#AE1E24]">infraestructura crítica.</span>
              </h2>
              <div className="space-y-8 text-zinc-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                <p>
                  En Accus Solutions, integramos ingeniería de vanguardia con décadas de experiencia técnica en el terreno para desarrollar soluciones eléctricas que definen el estándar de la industria.
                </p>
                <p>
                  Nuestra visión se centra en la sostenibilidad y la eficiencia operativa, acompañando a los grandes actores de la minería y energía en sus desafíos más complejos.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-12 lg:pl-16 lg:border-l border-zinc-100">
              <div className="group">
                <p className="text-5xl md:text-7xl font-black text-[#AE1E24] tracking-tighter mb-2 transition-transform group-hover:scale-105">+15</p>
                <p className="text-sm uppercase tracking-widest text-zinc-500 font-bold">Años de Trayectoria</p>
              </div>
              <div className="group">
                <p className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter mb-2 transition-transform group-hover:scale-105">+500</p>
                <p className="text-sm uppercase tracking-widest text-zinc-500 font-bold">Proyectos Ejecutados</p>
              </div>
            </div>
          </div>

          {/* Tarjetas de Navegación con Diseño Limpio */}
          <div
            ref={cardsContainerRef}
            className="flex md:grid flex-nowrap overflow-x-auto snap-x snap-mandatory gap-8 md:grid-cols-3 scrollbar-hide py-20"
          >
            {[
              { title: "Servicios", img: "/pictures/1.webp", href: "/servicios", desc: "Ingeniería eléctrica, construcción y ensayos especializados." },
              { title: "Proyectos", img: "/pictures/2.webp", href: "/proyectos", desc: "Gestión integral de proyectos llave en mano en todo Chile." },
              { title: "Nosotros", img: "/pictures/3.webp", href: "/nosotros", desc: "Compromiso con la excelencia y la seguridad industrial." }
            ].map((card, i) => (
              <div key={i} className="snap-start shrink-0 w-[85%] md:w-auto bg-zinc-50 border border-zinc-200 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 w-full overflow-hidden">
                  <img src={card.img} alt={card.title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-10 flex flex-col items-start">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">{card.title}</h3>
                  <p className="text-zinc-500 text-base leading-relaxed mb-8">{card.desc}</p>
                  <Button asChild variant="link" className="p-0 text-[#AE1E24] font-bold uppercase tracking-widest text-xs group">
                    <Link href={card.href} className="flex items-center">
                      Explorar <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner Inspirador */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="/pictures/Engineering-woman-on-site_2.webp"
          alt="Ingeniería en terreno"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-900 mb-10 tracking-tight leading-tight">
            Construyamos el futuro <br /> <span className="text-[#AE1E24]">juntos.</span>
          </h2>
          <Button
            asChild
            className="bg-[#AE1E24] text-white hover:bg-[#AE1E24]/90 rounded-none px-12 py-7 text-sm font-bold uppercase tracking-[0.3em] shadow-2xl"
          >
            <Link href="/contacto">Hablemos de tu proyecto</Link>
          </Button>
        </div>
      </section>

      <style jsx>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 30s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}