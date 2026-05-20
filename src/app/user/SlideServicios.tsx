
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
      <div className="absolute inset-0 bg-black/60" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center h-full pt-32 pb-16">
        
        {/* Navigation Tabs */}
        <nav className="flex items-center justify-center gap-4 mb-16 flex-wrap">
          {services.map((service, index) => (
            <div key={service.id} className="flex items-center">
              <button
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-6 py-2 text-sm md:text-base font-normal transition-all duration-300 rounded-full border border-transparent",
                  activeTab === index 
                    ? "bg-[#AE1E24] text-white" 
                    : "text-white hover:text-white/80"
                )}
              >
                {service.label}
              </button>
              {index < services.length - 1 && (
                <span className="mx-4 text-white/50 hidden md:inline">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Gallery Section */}
        <div className="flex-grow w-full flex items-center justify-center gap-4 md:gap-12 mb-12">
          
          {/* Previous Service (Small) */}
          <div className="hidden lg:flex flex-col items-center opacity-60 scale-75 transition-all duration-500">
             <div className="relative w-64 h-64 bg-[#AE1E24]/80 p-4 flex items-center justify-center">
                <div className="absolute top-3 left-3 w-4 h-4 bg-white" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#AE1E24]">
                  <Image 
                    src={`https://picsum.photos/seed/${services[prevIdx].seed}/400/400`}
                    alt={services[prevIdx].shortLabel}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
             </div>
          </div>

          {/* Active Service (Large) */}
          <div className="flex flex-col items-center transition-all duration-500 transform scale-100">
             <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] bg-[#AE1E24]/90 p-6 md:p-8 flex items-center justify-center shadow-2xl">
                <div className="absolute top-4 left-4 w-5 h-5 bg-white" />
                <span className="absolute top-4 right-8 text-white font-medium text-lg hidden md:block">
                  {services[activeTab].shortLabel}
                </span>
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-[#AE1E24]">
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
          <div className="hidden lg:flex flex-col items-center opacity-60 scale-75 transition-all duration-500">
             <div className="relative w-64 h-64 bg-[#AE1E24]/80 p-4 flex items-center justify-center">
                <div className="absolute top-3 left-3 w-4 h-4 bg-white" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#AE1E24]">
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

        {/* Bottom Description */}
        <div className="max-w-3xl text-center">
          <p className="text-white text-base md:text-lg leading-relaxed font-light opacity-90 animate-in fade-in slide-in-from-bottom-2 duration-700">
            {services[activeTab].description}
          </p>
        </div>

      </div>
    </section>
  );
}
