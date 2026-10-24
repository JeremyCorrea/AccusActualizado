
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronRight, MousePointer2 } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section className="relative min-h-screen w-full bg-white font-body pt-24 md:pt-44 pb-0">
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
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 animate-in fade-in"
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
              
              {/* Bloque Informativo de Mapa Interactivo */}
              <div className="w-full bg-zinc-900 text-white p-8 relative overflow-hidden group transition-all hover:bg-zinc-800 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 border-l-4 border-[#AE1E24] shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#AE1E24]/10 rounded-full -translate-y-16 translate-x-16 blur-3xl group-hover:bg-[#AE1E24]/20 transition-all" />
                
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#AE1E24] flex items-center justify-center shrink-0 shadow-lg">
                    <MousePointer2 className="w-6 h-6 text-white animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#AE1E24] mb-3">
                      Experiencia Interactiva
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-zinc-300">
                      Nuestra presencia abarca todo el territorio nacional. <strong className="text-white font-bold">Interactúe con el mapa de Chile</strong> a su izquierda: haga clic en los puntos geográficos para explorar detalles de cada proyecto estratégico ejecutado por nuestro equipo a lo largo del país.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 2: Proyectos Destacados (Con Fondo Gris Claro) */}
      <div className="bg-zinc-50 py-32 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-left mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">Proyectos destacados</h2>
            <div className="w-20 h-1 bg-[#AE1E24] mt-6" />
          </div>

          <div className="space-y-32">
            {featuredProjects.map((project, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
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
                          <div className="relative aspect-[4/3] overflow-hidden group bg-white shadow-sm border border-zinc-100">
                            <Image
                              src={img}
                              alt={`${project.title} - ${i + 1}`}
                              fill
                              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-start gap-4 mt-8">
                      <CarouselPrevious className="static translate-y-0 rounded-none w-12 h-12 border-zinc-200 hover:border-[#AE1E24] hover:bg-[#AE1E24] hover:text-white transition-all" />
                      <CarouselNext className="static translate-y-0 rounded-none w-12 h-12 border-zinc-200 hover:border-[#AE1E24] hover:bg-[#AE1E24] hover:text-white transition-all" />
                    </div>
                  </Carousel>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección 3: Nuestros Clientes (Carrusel Infinito Centrado) */}
      <section className="bg-white py-32 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-[#AE1E24] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Alianzas</span>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">Nuestros Clientes</h2>
            <div className="w-20 h-1 bg-[#AE1E24] mx-auto mt-6" />
          </div>

          <div className="overflow-hidden">
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
      `}</style>
    </section>
  );
}
