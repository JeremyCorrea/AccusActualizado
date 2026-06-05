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
    imageFile: "acc02.webp"
  },
  { 
    id: 1, 
    label: "Construcción", 
    shortLabel: "Construcción",
    description: "Ejecución de proyectos de infraestructura eléctrica con los más altos estándares de calidad y seguridad industrial, adaptados a las necesidades de cada cliente.",
    imageFile: "pararrayos.webp"
  },
  { 
    id: 2, 
    label: "Ensayos Eléctricos Mina", 
    shortLabel: "Ensayos Mina",
    description: "Pruebas y diagnósticos especializados para el sector minero, asegurando la continuidad operacional y la integridad de los equipos críticos en terreno.",
    imageFile: "fibra-optica.webp"   
  },
  { 
    id: 3, 
    label: "Fibra Óptica", 
    shortLabel: "Fibra Óptica",
    description: "Instalación y mantenimiento de redes de comunicación de alta velocidad para entornos industriales exigentes, garantizando una conectividad robustas.",
    imageFile: "cableado-estructurado.webp"
  },
];

const getImagePath = (imageFile: string) => `/pictures/${imageFile}`;

export default function ServiciosPage() {
  const [activeTab, setActiveTab] = useState(0);
  const { servicios } = imageData;

  const getPrevIndex = (current: number) => (current === 0 ? services.length - 1 : current - 1);
  const getNextIndex = (current: number) => (current === services.length - 1 ? 0 : current + 1);

  const prevIdx = getPrevIndex(activeTab);
  const nextIdx = getNextIndex(activeTab);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start font-body">
      {/* Background Image */}
      <Image
        src={servicios.src}
        alt="Background"
        fill
        className="object-cover"
        priority
        data-ai-hint={servicios['data-ai-hint']}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Main Content Container */}
      {/* CAMBIO CLAVE: Se aumentó el padding superior de pt-20 md:pt-24 a pt-44 md:pt-48 */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center min-h-screen pt-44 md:pt-48 pb-12">
        
        {/* Navigation Tabs */}
        <nav className="flex items-center justify-center gap-2 mb-6 md:mb-8 flex-wrap shrink-0">
          {services.map((service, index) => (
            <div key={service.id} className="flex items-center">
              <button
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 md:px-6 py-1.5 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 rounded-full border border-transparent whitespace-nowrap",
                  activeTab === index 
                    ? "bg-[#AE1E24] text-white shadow-lg" 
                    : "text-white/50 hover:text-white hover:bg-white/5"
                )}
              >
                {service.label}
              </button>
              
              {index < services.length - 1 && (
                <span className="mx-1 md:mx-2 text-white/10 inline-block">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Carousel Visual Display */}
        <div className="flex-grow w-full flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
          
          {/* Imagen previa (solo escritorio) */}
          <div className="hidden lg:flex flex-col items-center opacity-40 scale-90 transition-all duration-700">
            <div className="relative w-[min(140px,18vh)] h-[min(140px,18vh)] bg-[#AE1E24]/40 p-2 flex items-center justify-center">
              <div className="absolute top-2 left-2 w-2 h-2 bg-white/60" />
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src={getImagePath(services[prevIdx].imageFile)}
                  alt={services[prevIdx].shortLabel}
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>

          {/* Imagen principal activa */}
          <div className="flex flex-col items-center transition-all duration-700">
            <div className="relative w-[min(400px,40vh)] h-[min(400px,40vh)] md:w-[min(480px,45vh)] md:h-[min(480px,45vh)] bg-[#AE1E24]/90 p-6 md:p-8 flex items-center justify-center shadow-2xl">
              <div className="absolute top-4 left-4 w-4 h-4 bg-white" />
              <span className="absolute top-4 right-4 text-white/90 font-bold text-[9px] tracking-[0.2em] hidden md:block uppercase">
                {services[activeTab].shortLabel}
              </span>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src={getImagePath(services[activeTab].imageFile)}
                  alt={services[activeTab].shortLabel}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Imagen siguiente (solo escritorio) */}
          <div className="hidden lg:flex flex-col items-center opacity-40 scale-90 transition-all duration-700">
            <div className="relative w-[min(140px,18vh)] h-[min(140px,18vh)] bg-[#AE1E24]/40 p-2 flex items-center justify-center">
              <div className="absolute top-2 left-2 w-2 h-2 bg-white/60" />
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src={getImagePath(services[nextIdx].imageFile)}
                  alt={services[nextIdx].shortLabel}
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description Block */}
        <div key={activeTab} className="w-full max-w-2xl text-center mt-6 md:mt-8 shrink-0 min-h-[clamp(60px,12vh,90px)] flex items-center justify-center">
          <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed font-normal drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {services[activeTab].description}
          </p>
        </div>
      </div>
    </section>
  );
}