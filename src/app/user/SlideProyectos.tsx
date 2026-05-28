
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import imageData from '@/app/lib/placeholder-images.json';

const proyectosData = [
  {
    id: 'norte',
    region: 'Zona Norte',
    title: 'Transformadores de corriente',
    description: 'En ACCUS tenemos trayectorias en proyecto relacionados a Ensayos Eléctricos HIPOT a Bobinados, Medida de humedad del aceite, Resistencia de enrollados en frío y Factor de potencia del aislamiento. Nuestra experiencia garantiza resultados precisos y confiables, cumpliendo con los más altos estándares de la industria.',
    image: 'https://picsum.photos/seed/norte/800/600',
    hint: 'mining electrical project',
    yPos: '15%'
  },
  {
    id: 'centro',
    region: 'Zona Central',
    title: 'Subestaciones de Alta Tensión',
    description: 'Ejecución y mantenimiento de subestaciones en la región central, optimizando la distribución de energía para complejos industriales y mineros con tecnología de punta.',
    image: 'https://picsum.photos/seed/centro/800/600',
    hint: 'power substation',
    yPos: '40%'
  },
  {
    id: 'sur',
    region: 'Zona Sur',
    title: 'Redes de Fibra Óptica Industrial',
    description: 'Implementación de infraestructuras de comunicación robustas en entornos desafiantes, conectando operaciones remotas con centros de control de alta eficiencia.',
    image: 'https://picsum.photos/seed/sur/800/600',
    hint: 'fiber optics installation',
    yPos: '70%'
  }
];

export default function SlideProyectos() {
  const [selectedProject, setSelectedProject] = useState(proyectosData[0]);
  const { proyectos, mapa } = imageData;

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden font-body bg-black">
      {/* Background Image with Dark Overlay */}
      <Image
        src={proyectos.src}
        alt="Power lines background"
        fill
        className="object-cover"
        priority
        data-ai-hint={proyectos['data-ai-hint']}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full max-w-6xl px-8 flex flex-col justify-between pt-28 pb-10">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-24 flex-grow overflow-hidden">
          
          {/* Left Side: Interactive Map of Chile */}
          <div className="relative w-20 md:w-28 h-[400px] md:h-[450px] flex items-center justify-center shrink-0">
            {/* Base Image Map */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={mapa.src}
                alt="Mapa de Chile"
                fill
                className="object-contain opacity-90 drop-shadow-[0_0_15px_rgba(174,30,36,0.3)]"
                priority
              />
            </div>

            {/* SVG Overlay for points */}
            <svg 
              viewBox="0 0 100 800" 
              className="relative z-10 w-full h-full"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {proyectosData.map((proj) => {
                const isSelected = selectedProject.id === proj.id;
                // Coordinates relative to the 100x800 grid
                let cx = 55;
                let cy = 100;

                if (proj.id === 'norte') {
                  cx = 56;
                  cy = 80;
                } else if (proj.id === 'centro') {
                  cx = 52;
                  cy = 340;
                } else if (proj.id === 'sur') {
                  cx = 44;
                  cy = 600;
                }
                
                return (
                  <g key={proj.id} onClick={() => setSelectedProject(proj)} className="cursor-pointer group">
                    <circle
                      cx={cx}
                      cy={cy}
                      r="30"
                      className="fill-transparent group-hover:fill-white/5 transition-colors duration-300"
                    />
                    <circle
                      cx={cx}
                      cy={cy}
                      r="6"
                      className={cn(
                        "transition-all duration-500 ease-in-out shadow-lg",
                        isSelected ? "fill-white" : "fill-white/20"
                      )}
                    />
                    {isSelected && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r="14"
                        stroke="white"
                        strokeWidth="2"
                        className="pointer-events-none animate-pulse fill-none"
                      />
                    )}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="12"
                      className={cn(
                        "fill-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                        isSelected && "opacity-0"
                      )}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right Side: Project Detail Window */}
          <div className="relative flex flex-col items-center md:items-end">
            <div className="absolute -top-12 md:-top-16 right-0 text-center md:text-right z-20 flex flex-col items-center md:items-end w-full max-w-[400px]">
              <span className="text-white/60 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase mb-1">
                PROYECTO DESTACADO
              </span>
              <h2 className="text-white text-base md:text-lg font-bold tracking-[0.1em] uppercase leading-tight">
                {selectedProject.title}
              </h2>
            </div>

            <div className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] overflow-hidden rounded-[60px_15px_60px_15px] border-2 border-white/20 shadow-2xl transition-all duration-700 mt-10 md:mt-6">
              <Image
                key={selectedProject.id}
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover animate-in fade-in zoom-in-95 duration-1000"
                data-ai-hint={selectedProject.hint}
              />
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div key={selectedProject.id} className="w-full max-w-3xl mx-auto text-center mt-6 md:mt-4 min-h-[60px] flex items-center">
          <p className="text-white/80 text-xs md:text-sm leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {selectedProject.description}
          </p>
        </div>

      </div>
    </section>
  );
}
