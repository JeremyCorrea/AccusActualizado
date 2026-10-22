
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const featuredProjects = [
  {
    title: "SERVICIOS ELECTRICOS MINA",
    client: "MINERA LOS PELAMBRES",
    date: "OCTUBRE 2022 – OCTUBRE 2024",
    images: ["/pictures/1.webp", "/pictures/2.webp", "/pictures/3.webp", "/pictures/4.webp"]
  },
  {
    title: "LÍNEA MT 13,8 KV DERIVACIÓN 4440-US-003, PROYECTO MANTO VERDE",
    client: "AUSENCO",
    date: "MARZO 2024 – OCTUBRE 2024",
    images: ["/pictures/4.webp", "/pictures/1.webp", "/pictures/2.webp", "/pictures/3.webp"]
  }
];

export default function ProyectosPage() {
  const [selectedProject, setSelectedProject] = useState(proyectosData[0]);

  return (
    <section className="relative min-h-screen w-full bg-white font-body pt-24 md:pt-44 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Sección 1: Mapa Interactivo */}
        <div className="text-center mb-12">
          <span className="text-[#AE1E24] text-xs font-bold tracking-[0.4em] uppercase mb-2 block">Portafolio</span>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">Proyectos en Chile</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32 min-h-[60vh]">
          {/* Mapa Interactiva (Izquierda) */}
          <div className="lg:col-span-4 flex justify-center items-center relative h-[500px]">
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

        {/* Sección 2: Proyectos Destacados (Estructura Solicitada) */}
        <div className="mt-32 space-y-24">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">Proyectos destacados</h2>
          </div>

          {featuredProjects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Información del Proyecto (Izquierda) */}
              <div className="lg:col-span-4 space-y-8 pr-6">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 shrink-0">
                    <ChevronRight className="text-[#AE1E24] w-8 h-8" strokeWidth={4} />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900 leading-tight uppercase tracking-tight">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">CLIENTE:</p>
                        <p className="text-sm font-bold text-zinc-900 uppercase">{project.client}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">FECHA DE EJECUCIÓN:</p>
                        <p className="text-sm font-bold text-zinc-900 uppercase">{project.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carrusel de Imágenes (Derecha) */}
              <div className="lg:col-span-8 relative">
                <Carousel className="w-full">
                  <CarouselContent className="-ml-4">
                    {project.images.map((img, i) => (
                      <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/2">
                        <div className="relative aspect-[4/3] overflow-hidden group">
                          <Image
                            src={img}
                            alt={`${project.title} - ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-start gap-4 mt-6">
                    <CarouselPrevious className="static translate-y-0 rounded-full border-zinc-200 hover:border-[#AE1E24] hover:text-[#AE1E24]" />
                    <CarouselNext className="static translate-y-0 rounded-full border-zinc-200 hover:border-[#AE1E24] hover:text-[#AE1E24]" />
                  </div>
                </Carousel>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
