
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const proyectosData = [
  {
    id: 'norte',
    region: 'Zona Norte',
    title: 'Transformadores de corriente',
    description: 'Ensayos Eléctricos HIPOT a Bobinados y Medida de humedad del aceite en plantas mineras de gran escala.',
    image: '/pictures/1.webp',
    hint: 'mining electrical project',
    cx: 56, cy: 80
  },
  {
    id: 'centro',
    region: 'Zona Central',
    title: 'Subestaciones Alta Tensión',
    description: 'Ejecución y mantenimiento de subestaciones optimizando la distribución para complejos industriales.',
    image: '/pictures/2.webp',
    hint: 'power substation',
    cx: 52, cy: 340
  },
  {
    id: 'sur',
    region: 'Zona Sur',
    title: 'Fibra Óptica Industrial',
    description: 'Implementación de infraestructuras de comunicación robustas en entornos desafiantes del sur.',
    image: '/pictures/3.webp',
    hint: 'fiber optics installation',
    cx: 44, cy: 600
  }
];

export default function ProyectosPage() {
  const [selectedProject, setSelectedProject] = useState(proyectosData[0]);

  return (
    <section className="relative h-screen w-full bg-white font-body pt-24 md:pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col">
        
        <div className="text-center mb-8">
          <span className="text-[#AE1E24] text-xs font-bold tracking-[0.4em] uppercase mb-2 block">Portafolio</span>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">Proyectos en Chile</h1>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-10">
          
          {/* Mapa Interactiva (Izquierda) */}
          <div className="lg:col-span-4 flex justify-center items-center h-full max-h-[60vh] relative">
            <div className="relative w-32 md:w-40 h-full">
              <Image
                src="/mapachile2.webp"
                alt="Mapa de Chile"
                fill
                className="object-contain grayscale opacity-30"
                priority
              />
              <svg
                viewBox="0 0 100 800"
                className="absolute inset-0 w-full h-full z-10"
                fill="none"
              >
                {proyectosData.map((proj) => {
                  const isSelected = selectedProject.id === proj.id;
                  return (
                    <g key={proj.id} onClick={() => setSelectedProject(proj)} className="cursor-pointer group">
                      <circle cx={proj.cx} cy={proj.cy} r="30" className="fill-transparent group-hover:fill-[#AE1E24]/5 transition-colors" />
                      <circle
                        cx={proj.cx}
                        cy={proj.cy}
                        r="6"
                        className={cn(
                          "transition-all duration-500",
                          isSelected ? "fill-[#AE1E24]" : "fill-zinc-300"
                        )}
                      />
                      {isSelected && (
                        <circle cx={proj.cx} cy={proj.cy} r="14" stroke="#AE1E24" strokeWidth="2" className="animate-pulse fill-none" />
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Visualización Proyecto (Derecha) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-square w-full bg-zinc-50 overflow-hidden group border border-zinc-100 shadow-sm">
              <div className="absolute inset-0 border-[15px] border-white z-10" />
              <Image 
                key={selectedProject.id}
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 animate-in fade-in"
                data-ai-hint={selectedProject.hint}
              />
              <div className="absolute top-8 right-8 z-20 bg-[#AE1E24] text-white px-5 py-2 text-[9px] font-bold tracking-widest uppercase">
                {selectedProject.region}
              </div>
            </div>

            <div className="flex flex-col items-start animate-in fade-in slide-in-from-right-8 duration-700">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                {selectedProject.title}
              </h2>
              <p className="text-lg text-zinc-500 font-light leading-relaxed mb-8">
                {selectedProject.description}
              </p>
              <div className="flex flex-col gap-4 w-full border-t border-zinc-100 pt-6">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  <span>Estado: Ejecutado</span>
                  <span className="text-[#AE1E24]">Ver Detalle</span>
                </div>
                <Button className="bg-[#AE1E24] text-white rounded-none py-6 font-bold uppercase tracking-widest text-xs group">
                  EXPLORAR CASO <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
