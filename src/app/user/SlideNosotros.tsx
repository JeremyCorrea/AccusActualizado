
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import imageData from '@/app/lib/placeholder-images.json';

const nosotrosData = [
  {
    id: 'quienes',
    label: 'Quienes Somos',
    subtitle: 'ACCUS',
    title: 'Liderazgo y Experiencia',
    description: 'Bajo la dirección de nuestro Gerente General, un profesional con amplia trayectoria en el sector minero e industrial, ACCUS se ha consolidado como un referente de excelencia. Nuestro equipo está compuesto por ingenieros y técnicos altamente cualificados que comparten una visión común: superar los límites de la ingeniería tradicional para ofrecer soluciones integrales y seguras.',
    image: 'https://picsum.photos/seed/manager1/800/800',
    hint: 'professional engineer manager'
  },
  {
    id: 'valores',
    label: 'Nuestros Valores',
    subtitle: 'ACCUS',
    title: 'Compromiso e Integridad',
    description: 'La seguridad es nuestra prioridad intransable. Trabajamos bajo los más estrictos estándares de calidad, integridad y compromiso con el medio ambiente, construyendo relaciones de confianza a largo plazo con nuestros socios estratégicos en la gran minería e industria nacional.',
    image: 'https://picsum.photos/seed/values1/800/800',
    hint: 'electrical industrial safety'
  },
  {
    id: 'gente',
    label: 'Nuestra Gente',
    subtitle: 'ACCUS',
    title: 'El Corazón de la Empresa',
    description: 'Cada día, vamos más allá de la ingeniería y animamos a nuestro equipo a hacer lo mismo, con la meta de construir juntos un mundo sostenible. Creemos que el talento humano es nuestro activo más valioso y fomentamos un ambiente de colaboración y crecimiento continuo.',
    image: 'https://picsum.photos/seed/team1/800/800',
    hint: 'engineers team collaboration'
  },
  {
    id: 'evolucion',
    label: 'Nuestra Evolución',
    subtitle: 'ACCUS',
    title: 'Trayectoria e Innovación',
    description: 'Desde nuestros inicios, hemos evolucionado para enfrentar los desafíos técnicos más complejos de la infraestructura eléctrica en Chile. Nuestra trayectoria está marcada por el éxito en proyectos críticos, adaptándonos constantemente a las nuevas tecnologías y exigencias del mercado global.',
    image: 'https://picsum.photos/seed/evolution1/800/800',
    hint: 'industrial power progress'
  }
];

export default function SlideNosotros() {
  const [activeTab, setActiveTab] = useState(nosotrosData[0]);
  const { nosotros } = imageData;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden font-body">
      {/* Background Image with Dark Overlay */}
      <Image
        src={nosotros.src}
        alt="Team background"
        fill
        className="object-cover"
        priority
        data-ai-hint={nosotros['data-ai-hint']}
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-8 md:px-16 flex flex-col h-full pt-32 pb-16">
        
        {/* Navigation Tabs (Top Center) */}
        <nav className="flex items-center justify-center gap-1 md:gap-4 mb-16 flex-wrap">
          {nosotrosData.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <button
                onClick={() => setActiveTab(item)}
                className={cn(
                  "px-6 py-1.5 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 rounded-full border border-transparent whitespace-nowrap",
                  activeTab.id === item.id 
                    ? "bg-[#AE1E24] text-white shadow-lg" 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </button>
              {index < nosotrosData.length - 1 && (
                <span className="mx-2 text-white/10 hidden md:inline">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Content Body */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 flex-grow">
          
          {/* Left Side: Curved Image Frame */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] shrink-0">
             <div className="relative w-full h-full overflow-hidden rounded-[80px_20px_80px_20px] border-2 border-white/10 shadow-2xl">
                <Image 
                  key={activeTab.id}
                  src={activeTab.image}
                  alt={activeTab.label}
                  fill
                  className="object-cover animate-in fade-in zoom-in-95 duration-700"
                  data-ai-hint={activeTab.hint}
                />
             </div>
          </div>

          {/* Right Side: Text Content */}
          <div key={activeTab.id} className="flex flex-col items-start text-left max-w-2xl animate-in fade-in slide-in-from-right-8 duration-700">
            <span className="text-white/60 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">
              {activeTab.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-8 leading-tight">
              {activeTab.title}
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-light mb-10">
              {activeTab.description}
            </p>
            
            <Button 
              size="lg" 
              className="bg-[#AE1E24] hover:bg-[#AE1E24]/90 text-white rounded-none px-8 py-6 text-xs font-bold tracking-widest uppercase flex items-center gap-3 transition-transform hover:translate-x-1"
            >
              CONOZCA A NUESTRO EQUIPO
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
