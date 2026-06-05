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
      {/* Sección principal con video de fondo */}
      <section className="relative min-h-screen w-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          poster={inicio.src}
        >
          <source src="https://www.pexels.com/download/video/2073129/" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-5" />

        <div className="relative z-10 w-full max-w-xl mt-20 md:mt-0">
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-normal text-white mb-4 leading-[1] tracking-tight">
            Impulsamos Futuro
          </h1>
          <p className="text-sm md:text-base text-white mb-10 max-w-md font-normal leading-tight opacity-95">
            Expertos en Ingeniería Eléctrica, Construcción, Ensayos eléctricos en la Minería y Fibra Óptica.
          </p>
          <Button
            size="lg"
            onClick={scrollToClientes}
            className="text-[10px] md:text-xs px-8 py-2.5 bg-[#AE1E24] text-white hover:bg-[#AE1E24]/90 rounded-none font-bold uppercase tracking-[0.2em] h-auto border-none shadow-none"
          >
            CONOCER MÁS <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Indicador de flecha animada al fondo central */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <button
            onClick={scrollToClientes}
            className="group flex flex-col items-center justify-center focus:outline-none"
            aria-label="Desplazarse hacia abajo"
          >
            <span className="text-[10px] text-white/60 uppercase tracking-[0.3em] mb-2 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Explorar
            </span>
            <div className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 group-hover:border-[#AE1E24]/50 group-hover:bg-[#AE1E24]/10 transition-all duration-300 animate-bounce style-pulse-glow">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-6 h-6 text-white group-hover:text-[#AE1E24] transition-colors duration-300"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Sección contenedora general en fondo negro */}
      <section className="bg-black w-full py-20 px-6 md:px-16 lg:px-24 pb-0">
        <div ref={clientesSectionRef} className="max-w-7xl mx-auto scroll-mt-20">
          
          {/* Carrusel de logos */}
          {hasLogos && (
            <div className="mb-16 overflow-hidden">
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-medium text-white text-center mb-14 tracking-tight">
                  Nuestros Clientes
                </h2>
                <div className="flex w-max animate-infinite-scroll">
                  {logos.map((logo, idx) => (
                    <div
                      key={`original-${idx}`}
                      className="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center"
                      style={{ minWidth: '120px' }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-12 md:max-h-16 w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  {logos.map((logo, idx) => (
                    <div
                      key={`clone-${idx}`}
                      className="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center"
                      style={{ minWidth: '120px' }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-12 md:max-h-16 w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* DISEÑO INSPIRADO EN BBA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-20 border-t border-white/10">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight mb-8">
                Más que consultores, <span className="font-semibold text-[#AE1E24]"> somos socios estratégicos.</span>
              </h2>
              
              <div className="space-y-6 text-gray-400 text-sm md:text-base max-w-2xl font-light leading-relaxed">
                <p>
                  Integramos ingeniería, experiencia técnica y conocimiento del entorno para desarrollar proyectos en minería, energía y recursos naturales con una visión integral.
                </p>
                <p>
                  Acompañamos cada etapa del proceso, aportando soluciones que generan impacto, eficiencia y crecimiento sostenible.
                </p>
                <p className="text-white/80 italic font-normal">
                  Experiencia que inspira confianza. Personas que marcan la diferencia.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center lg:items-end lg:text-right space-y-12 lg:border-l lg:border-white/10 lg:pl-12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">
                  Presencia Estratégica
                </p>
                <p className="text-2xl md:text-3xl font-light text-white">
                  Operando cerca de los desafíos más importantes
                </p>
              </div>

              <div>
                <p className="text-4xl md:text-6xl font-bold text-[#AE1E24] tracking-tight mb-1">
                  +15 años
                </p>
                <p className="text-lg md:text-xl font-light text-gray-300">
                  de experiencia en el rubro
                </p>
              </div>

              <div>
                <p className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-1">
                  +20
                </p>
                <p className="text-lg md:text-xl font-light text-gray-300">
                  socios con nosotros
                </p>
              </div>
            </div>
          </div>

          {/* Contenedor de tarjetas de Servicios, Proyectos, Nosotros */}
          <div
            ref={cardsContainerRef}
            className="flex md:grid flex-nowrap overflow-x-auto snap-x snap-mandatory gap-6 md:gap-12 md:grid-cols-3 scrollbar-hide pb-4 pt-16 border-t border-white/5"
          >
            {/* Tarjeta Servicios */}
            <div className="snap-start shrink-0 w-[85%] md:w-auto bg-black border border-zinc-700 flex flex-col h-full rounded-none relative pt-20">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-[#AE1E24] overflow-hidden bg-gray-700 flex items-center justify-center shadow-lg z-10">
                <img 
                  src="/pictures/1.webp" 
                  alt="Servicios de ingeniería" 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow text-center items-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Servicios</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  Soluciones integrales en ingeniería eléctrica, construcción y ensayos para la minería, garantizando eficiencia y seguridad.
                </p>
                <Button 
                  asChild
                  className="w-fit bg-[#AE1E24] text-white hover:bg-[#AE1E24]/90 rounded-none font-bold uppercase tracking-[0.15em] text-[11px] px-8 py-3 h-auto border-none shadow-none"
                >
                  <Link href="/servicios">Saber más <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  
                </Button>
              </div>
            </div>

            {/* Tarjeta Proyectos */}
            <div className="snap-start shrink-0 w-[85%] md:w-auto bg-black border border-zinc-700 flex flex-col h-full rounded-none relative pt-20">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-[#AE1E24] overflow-hidden bg-gray-700 flex items-center justify-center shadow-lg z-10">
                <img 
                  src="/pictures/2.webp" 
                  alt="Proyectos eléctricos en minería" 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow text-center items-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Proyectos</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  Gestión y ejecución de proyectos eléctricos llave en mano, desde el diseño hasta la puesta en servicio, con altos estándares de calidad.
                </p>
                <Button 
                  asChild
                  className="w-fit bg-[#AE1E24] text-white hover:bg-[#AE1E24]/90 rounded-none font-bold uppercase tracking-[0.15em] text-[11px] px-8 py-3 h-auto border-none shadow-none"
                >
                  <Link href="/proyectos">Saber más <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>

            {/* Tarjeta Nosotros */}
            <div className="snap-start shrink-0 w-[85%] md:w-auto bg-black border border-zinc-700 flex flex-col h-full rounded-none relative pt-20">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-[#AE1E24] overflow-hidden bg-gray-700 flex items-center justify-center shadow-lg z-10">
                <img 
                  src="/pictures/3.webp" 
                  alt="Nuestro equipo de trabajo" 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow text-center items-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Nosotros</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  Equipo multidisciplinario comprometido con la innovación, la calidad y el desarrollo sostenible del sector minero.
                </p>
                <Button 
                  asChild
                  className="w-fit bg-[#AE1E24] text-white hover:bg-[#AE1E24]/90 rounded-none font-bold uppercase tracking-[0.15em] text-[11px] px-8 py-3 h-auto border-none shadow-none"
                >
                  <Link href="/nosotros">Saber más <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Indicadores móviles */}
          <div className="flex justify-center gap-3 mt-6 md:hidden">
            {Array.from({ length: totalCards }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`h-2 rounded-full transition-all duration-300 ease-out ${activeCardIndex === idx
                    ? 'w-6 bg-[#AE1E24]'
                    : 'w-2 bg-gray-500 hover:bg-gray-400'
                  }`}
                aria-label={`Ir a tarjeta ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL CON ARCO DE CÚPULA PERFECTA */}
      <div className="w-full bg-black pt-12 md:pt-16 left-0 right-0 overflow-hidden">
        <div 
          className="relative w-full min-h-[500px] md:min-h-[650px] flex flex-col justify-between overflow-hidden bg-black"
          style={{
            borderTopLeftRadius: '50% 100px',
            borderTopRightRadius: '50% 100px',
          }}
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/pictures/Engineering-woman-on-site_2.webp"
              alt="Fondo de colaboración"
              className="object-cover w-full h-full opacity-80 object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 w-full max-w-[290px] sm:max-w-xl md:max-w-2xl lg:max-w-[730px] mx-auto text-center px-4 pt-32 sm:pt-36 md:pt-44 flex-grow">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold text-white leading-[1.15] tracking-tight">
              Construyamos algo extraordinario juntos.
            </h2>
          </div>

          <div className="relative z-10 w-full text-center pb-14 md:pb-20 px-4 flex justify-center">
            <Button
              asChild
              className="bg-[#AE1E24] text-white hover:bg-[#AE1E24]/90 rounded-none font-bold uppercase tracking-[0.2em] text-[9px] sm:text-xs px-4 sm:px-8 py-3.5 h-auto border-none shadow-none transition-all duration-300 whitespace-normal max-w-full sm:max-w-md leading-relaxed text-center"
            >
              <Link href="/contacto">
                Conectemos y hagamos realidad tus ideas
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 20s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        .style-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}