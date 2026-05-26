
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
    yPos: '25%'
  },
  {
    id: 'centro',
    region: 'Zona Central',
    title: 'Subestaciones de Alta Tensión',
    description: 'Ejecución y mantenimiento de subestaciones en la región central, optimizando la distribución de energía para complejos industriales y mineros con tecnología de punta.',
    image: 'https://picsum.photos/seed/centro/800/600',
    hint: 'power substation',
    yPos: '45%'
  },
  {
    id: 'sur',
    region: 'Zona Sur',
    title: 'Redes de Fibra Óptica Industrial',
    description: 'Implementación de infraestructuras de comunicación robustas en entornos desafiantes, conectando operaciones remotas con centros de control de alta eficiencia.',
    image: 'https://picsum.photos/seed/sur/800/600',
    hint: 'fiber optics installation',
    yPos: '75%'
  }
];

export default function SlideProyectos() {
  const [selectedProject, setSelectedProject] = useState(proyectosData[0]);
  const { proyectos } = imageData;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-body">
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
      <div className="relative z-10 w-full h-full max-w-7xl px-8 md:px-16 flex flex-col justify-between py-24">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 flex-grow">
          
          {/* Left Side: Interactive Map of Chile */}
          <div className="relative w-24 md:w-32 h-[500px] flex items-center justify-center">
            {/* Stylized SVG Map of Chile */}
            <svg 
              viewBox="0 0 100 800" 
              className="w-full h-full drop-shadow-[0_0_15px_rgba(174,30,36,0.6)]"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M45,20 L55,40 L48,80 L52,150 L45,220 L55,300 L48,380 L53,450 L42,550 L58,650 L45,720 L55,780 L40,795" 
                stroke="#AE1E24" 
                strokeWidth="14" 
                strokeLinecap="round" 
                className="cursor-pointer"
              />
              
              {proyectosData.map((proj) => (
                <circle
                  key={proj.id}
                  cx={proj.id === 'norte' ? 50 : proj.id === 'centro' ? 52 : 50}
                  cy={proj.id === 'norte' ? 100 : proj.id === 'centro' ? 350 : 650}
                  r="20"
                  className={cn(
                    "cursor-pointer transition-all duration-300 fill-transparent hover:fill-white/10",
                    selectedProject.id === proj.id && "fill-white/30"
                  )}
                  onClick={() => setSelectedProject(proj)}
                />
              ))}

              <circle 
                cx={selectedProject.id === 'norte' ? 50 : selectedProject.id === 'centro' ? 52 : 50} 
                cy={selectedProject.id === 'norte' ? 100 : selectedProject.id === 'centro' ? 350 : 650} 
                r="6" 
                fill="white" 
                className="pointer-events-none"
              />
              <circle 
                cx={selectedProject.id === 'norte' ? 50 : selectedProject.id === 'centro' ? 52 : 50} 
                cy={selectedProject.id === 'norte' ? 100 : selectedProject.id === 'centro' ? 350 : 650} 
                r="12" 
                stroke="white" 
                strokeWidth="2" 
                className="pointer-events-none animate-pulse"
              />
            </svg>
          </div>

          {/* Right Side: Project Detail Window */}
          <div className="relative flex flex-col items-end">
            {/* Project Header Style (Consistent with Services) - Aumentado espaciado superior */}
            <div className="absolute -top-20 right-0 text-right z-20 flex flex-col items-end w-full max-w-[400px]">
              <span className="text-white/60 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase mb-2">
                PROYECTO DESTACADO
              </span>
              <h2 className="text-white text-lg md:text-xl font-bold tracking-[0.1em] uppercase leading-tight">
                {selectedProject.title}
              </h2>
            </div>

            {/* Project Image Frame (Oval/Rounded) - Tamaño reducido para armonía */}
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] overflow-hidden rounded-[80px_20px_80px_20px] border-2 border-white/20 shadow-2xl transition-all duration-700 mt-8">
              <Image
                key={selectedProject.id}
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover animate-in fade-in zoom-in-95 duration-1000"
                data-ai-hint={selectedProject.hint}
              />
              {/* Corner accent to match Services aesthetics */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-white" />
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div key={selectedProject.id} className="w-full max-w-4xl mx-auto text-center mt-12 md:mt-8 min-h-[80px] flex items-center">
          <p className="text-white/80 text-sm md:text-base leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {selectedProject.description}
          </p>
        </div>

      </div>
    </section>
  );
}
