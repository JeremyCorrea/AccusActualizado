
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
              className="w-full h-full drop-shadow-[0_0_10px_rgba(174,30,36,0.5)]"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simplified stylized path of Chile */}
              <path 
                d="M45,20 L55,40 L48,80 L52,150 L45,220 L55,300 L48,380 L53,450 L42,550 L58,650 L45,720 L55,780 L40,795" 
                stroke="#AE1E24" 
                strokeWidth="12" 
                strokeLinecap="round" 
                className="cursor-pointer"
              />
              
              {/* Interaction Hotspots */}
              {proyectosData.map((proj) => (
                <circle
                  key={proj.id}
                  cx={proj.id === 'norte' ? 50 : proj.id === 'centro' ? 52 : 50}
                  cy={proj.id === 'norte' ? 100 : proj.id === 'centro' ? 350 : 650}
                  r="15"
                  className={cn(
                    "cursor-pointer transition-all duration-300 fill-transparent hover:fill-white/20",
                    selectedProject.id === proj.id && "fill-white/40"
                  )}
                  onClick={() => setSelectedProject(proj)}
                />
              ))}

              {/* Selected Point Indicator */}
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

            {/* Connection Line (Visual only for desktop) */}
            <div 
              className="hidden lg:block absolute left-full h-px bg-white/40 origin-left transition-all duration-500"
              style={{ 
                width: '150px', 
                top: selectedProject.id === 'norte' ? '12.5%' : selectedProject.id === 'centro' ? '43.7%' : '81.2%',
                transform: 'rotate(-15deg)'
              }}
            />
          </div>

          {/* Right Side: Project Detail Window */}
          <div className="relative flex flex-col items-end">
            {/* Project Title (Top Right of Frame) */}
            <div className="absolute -top-8 right-0 text-right z-20">
              <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">
                {selectedProject.title}
              </h2>
            </div>

            {/* Project Image Frame (Oval/Rounded) */}
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-[80px_20px_80px_20px] border-2 border-white/20 shadow-2xl transition-all duration-700 ease-in-out transform">
              <Image
                key={selectedProject.image}
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
        <div className="w-full max-w-4xl mx-auto text-center mt-12 md:mt-0">
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {selectedProject.description}
          </p>
        </div>

      </div>
    </section>
  );
}
