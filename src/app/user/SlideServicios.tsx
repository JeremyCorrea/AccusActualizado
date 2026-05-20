
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import imageData from '@/app/lib/placeholder-images.json';

const services = [
  { 
    id: 0, 
    label: "Ingeniería Eléctrica", 
    shortLabel: "Ing. Eléctrica",
    description: "En ACCUS ofrecemos un servicio integral de ingeniería eléctrica, diseñado para garantizar seguridad, calidad, eficiencia y cumplimiento normativo en cada proyecto.",
    seed: "101"
  },
  { 
    id: 1, 
    label: "Construcción", 
    shortLabel: "Construcción",
    description: "Ejecución de proyectos de infraestructura eléctrica con los más altos estándares de calidad y seguridad industrial, adaptados a las necesidades de cada cliente.",
    seed: "102"
  },
  { 
    id: 2, 
    label: "Ensayos Eléctricos Mina", 
    shortLabel: "Ensayos Mina",
    description: "Pruebas y diagnósticos especializados para el sector minero, asegurando la continuidad operacional y la integridad de los equipos críticos en terreno.",
    seed: "103"
  },
  { 
    id: 3, 
    label: "Fibra Óptica", 
    shortLabel: "Fibra Óptica",
    description: "Instalación y mantenimiento de redes de comunicación de alta velocidad para entornos industriales exigentes, garantizando una conectividad robusta.",
    seed: "104"
  },
];

export default function SlideServicios() {
  const [activeTab, setActiveTab] = useState(0);
  const { servicios } = imageData;

  // Helpers to get neighbor indices for the gallery
  const getPrevIndex = (current: number) => (current === 0 ? services.length - 1 : current - 1);
  const getNextIndex = (current: number) => (current === services.length - 1 ? 0 : current + 1);

  const prevIdx = getPrevIndex(activeTab);
  const nextIdx = getNextIndex(activeTab);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden font-body">
      {/* Background with Overlay */}
      <Image
        src={servicios.src}
        alt="Background"
        fill
        className="object-cover"
        data-ai-hint={servicios['data-ai-hint']}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center h-full pt-32 pb-16">
        
        {/* Navigation Tabs - Estilizados para ser más delgados y elegantes */}
        <nav className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {services.map((service, index) => (
            <div key={service.id} className="flex items-center">
              <button
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-6 py-1.5 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 rounded-full border border-transparent whitespace-nowrap",
                  activeTab === index 
                    ? "bg-[#AE1E24] text-white shadow-lg scale-105" 
                    : "text-white/50 hover:text-white hover:bg-white/5"
                )}
              >
                {service.label}
              </button>
              {index < services.length - 1 && (
                <span className="mx-2 text-white/10 hidden md:inline">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Gallery Section */}
        <div className="flex-grow w-full flex items-center justify-center gap-6 md:gap-16 mb-10">
          
          {/* Previous Service (Small) */}
          <div className="hidden lg:flex flex-col items-center opacity-40 scale-75 transition-all duration-700 ease-in-out blur-[1px]">
             <div className="relative w-48 h-48 bg-[#AE1E24]/60 p-3 flex items-center justify-center">
                <div className="absolute top-2 left-2 w-3 h-3 bg-white/80" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#AE1E24]">
                  <Image 
                    src={`https://picsum.photos/seed/${services[prevIdx].seed}/400/400`}
                    alt={services[prevIdx].shortLabel}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
             </div>
          </div>

          {/* Active Service (Escala Armoniosa) */}
          <div className="flex flex-col items-center transition-all duration-700 ease-in-out transform scale-100">
             <div className="relative w-64 h-64 md:w-[380px] md:h-[380px] bg-[#AE1E24]/90 p-5 md:p-6 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute top-4 left-4 w-4 h-4 bg-white" />
                <span className="absolute top-4 right-8 text-white/90 font-bold text-[10px] tracking-[0.2em] hidden md:block uppercase">
                  {services[activeTab].shortLabel}
                </span>
                <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-[#AE1E24]">
                  <Image 
                    src={`https://picsum.photos/seed/${services[activeTab].seed}/600/600`}
                    alt={services[activeTab].shortLabel}
                    fill
                    className="object-cover"
                  />
                </div>
             </div>
          </div>

          {/* Next Service (Small) */}
          <div className="hidden lg:flex flex-col items-center opacity-40 scale-75 transition-all duration-700 ease-in-out blur-[1px]">
             <div className="relative w-48 h-48 bg-[#AE1E24]/60 p-3 flex items-center justify-center">
                <div className="absolute top-2 left-2 w-3 h-3 bg-white/80" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#AE1E24]">
                  <Image 
                    src={`https://picsum.photos/seed/${services[nextIdx].seed}/400/400`}
                    alt={services[nextIdx].shortLabel}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
             </div>
          </div>

        </div>

        {/* Bottom Description with Animation */}
        <div key={activeTab} className="max-w-2xl text-center min-h-[100px] flex items-center">
          <p className="text-white text-base md:text-lg leading-relaxed font-normal opacity-90 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {services[activeTab].description}
          </p>
        </div>

      </div>
    </section>
  );
}
