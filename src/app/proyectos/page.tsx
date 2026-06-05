"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import imageData from '@/app/lib/placeholder-images.json';

// Datos de los proyectos vinculados a las imágenes locales del proyecto
const proyectosData = [
  {
    id: 'norte',
    region: 'Zona Norte',
    title: 'Transformadores de corriente',
    description: 'En ACCUS tenemos trayectoria en proyectos relacionados a Ensayos Eléctricos HIPOT a Bobinados, Medida de humedad del aceite, Resistencia de enrollados en frío y Factor de potencia del aislamiento. Nuestra experiencia garantiza resultados precisos y confiables, cumpliendo con los más altos estándares de la industria.',
    image: '/pictures/1.webp',
    hint: 'mining electrical project',
  },
  {
    id: 'centro',
    region: 'Zona Central',
    title: 'Subestaciones de Alta Tensión',
    description: 'Ejecución y mantenimiento de subestaciones en la región central, optimizando la distribución de energía para complejos industriales y mineros con tecnología de punta.',
    image: '/pictures/2.webp',
    hint: 'power substation',
  },
  {
    id: 'sur',
    region: 'Zona Sur',
    title: 'Redes de Fibra Óptica Industrial',
    description: 'Implementación de infraestructuras de comunicación robustas en entornos desafiantes, conectando operaciones remotas con centros de control de alta eficiencia.',
    image: '/pictures/3.webp',
    hint: 'fiber optics installation',
  }
];

export default function ProyectosPage() {
  const [selectedProject, setSelectedProject] = useState(proyectosData[0]);
  const [lineCoordinates, setLineCoordinates] = useState({ startX: 0, startY: 0, endX: 0, endY: 0 });

  const sectionRef = useRef<HTMLElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const updateOrthogonalPath = useCallback(() => {
    if (!mapContainerRef.current || !titleRef.current || !sectionRef.current) return;

    const activeCircle = mapContainerRef.current.querySelector('circle[data-selected="true"]');
    if (!activeCircle) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const circleRect = activeCircle.getBoundingClientRect();
    const titleRect = titleRef.current.getBoundingClientRect();

    const startX = circleRect.left + circleRect.width / 2 - sectionRect.left;
    const startY = circleRect.top + circleRect.height / 2 - sectionRect.top;
    const endX = titleRect.left - sectionRect.left - 8;
    const endY = titleRect.top + titleRect.height / 2 - sectionRect.top;

    setLineCoordinates({ startX, startY, endX, endY });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => updateOrthogonalPath(), 50);
    window.addEventListener('resize', updateOrthogonalPath);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateOrthogonalPath);
    };
  }, [selectedProject, updateOrthogonalPath]);

  useEffect(() => {
    const observer = new ResizeObserver(() => updateOrthogonalPath());
    if (mapContainerRef.current) observer.observe(mapContainerRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, [updateOrthogonalPath]);

  // Construcción del path de forma segura basada en el estado de coordenadas numéricas
  const linePath = `M ${lineCoordinates.startX} ${lineCoordinates.startY} L ${lineCoordinates.endX} ${lineCoordinates.startY} L ${lineCoordinates.endX} ${lineCoordinates.endY}`;

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex flex-col items-center justify-center font-body bg-black pb-20 md:pb-0">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageData.proyectos.src}
          alt="Power lines background"
          fill
          className="object-cover"
          priority
          data-ai-hint={imageData.proyectos['data-ai-hint']}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-8 py-8 md:py-12 pt-20 md:pt-24 lg:pt-28 flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 relative">
          <div ref={mapContainerRef} className="relative w-28 md:w-32 lg:w-36 h-auto">
            <div className="relative aspect-[2/5]">
              <Image
                src={imageData.mapa.src}
                alt="Mapa de Chile"
                fill
                className="object-contain opacity-90 drop-shadow-[0_0_15px_rgba(174,30,36,0.3)]"
                priority
                sizes="(max-width: 768px) 112px, 128px"
              />
            </div>
            <svg
              viewBox="0 0 100 800"
              className="absolute inset-0 w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {proyectosData.map((proj) => {
                const isSelected = selectedProject.id === proj.id;
                let cx = 55, cy = 100;
                if (proj.id === 'norte') { cx = 56; cy = 80; }
                else if (proj.id === 'centro') { cx = 52; cy = 340; }
                else if (proj.id === 'sur') { cx = 44; cy = 600; }

                return (
                  <g key={proj.id} onClick={() => setSelectedProject(proj)} className="cursor-pointer group">
                    <circle cx={cx} cy={cy} r="30" className="fill-transparent group-hover:fill-white/5 transition-colors" />
                    <circle
                      cx={cx}
                      cy={cy}
                      r="6"
                      data-selected={isSelected ? "true" : "false"}
                      className={cn(
                        "transition-all duration-500",
                        isSelected ? "fill-white" : "fill-white/20"
                      )}
                    />
                    {isSelected && (
                      <circle cx={cx} cy={cy} r="14" stroke="white" strokeWidth="2" className="animate-pulse fill-none" />
                    )}
                    <circle cx={cx} cy={cy} r="12" className={cn(
                      "fill-white/10 opacity-0 group-hover:opacity-100 transition-opacity",
                      isSelected && "opacity-0"
                    )} />
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-[280px] md:max-w-md">
            <span className="text-white/60 text-[11px] font-bold tracking-[0.3em] uppercase mb-2">
              PROYECTO DESTACADO
            </span>
            <h2 ref={titleRef} className="text-white text-base md:text-xl lg:text-2xl font-bold tracking-[0.1em] uppercase leading-tight mb-4 md:mb-6">
              {selectedProject.title}
            </h2>
            
            {/* Contenedor de la Imagen Asimétrica */}
            <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] overflow-hidden rounded-tl-[999px] rounded-bl-[999px] rounded-tr-[40px] rounded-br-[40px] border-2 border-white/80 shadow-2xl">
              <Image
                key={selectedProject.id}
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover transition-all duration-700 animate-fade-in"
                data-ai-hint={selectedProject.hint}
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 280px, 320px"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto text-center mt-2 md:mt-4">
          <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
            {selectedProject.description}
          </p>
        </div>
      </div>

      {/* Línea SVG de interconexión dinámica */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 hidden md:block"
        style={{ position: 'absolute' }}
      >
        <path
          d={linePath}
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.5"
          fill="none"
          className="transition-all duration-500 ease-out"
        />
        {lineCoordinates.endX > 0 && (
          <circle
            cx={lineCoordinates.endX}
            cy={lineCoordinates.endY}
            r="3"
            fill="rgba(255,255,255,0.5)"
            className="transition-all duration-500"
          />
        )}
      </svg>
    </section>
  );
}