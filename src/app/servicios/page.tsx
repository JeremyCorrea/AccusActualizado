
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const services = [
  { 
    id: 0, 
    label: "Ingeniería Eléctrica", 
    shortLabel: "Ing. Eléctrica",
    description: "Servicios integrales de ingeniería eléctrica diseñados bajo estándares internacionales para garantizar la máxima seguridad y eficiencia operacional.",
    imageFile: "acc02.webp",
    extendedInfo: {
      mainTitle: "Ingeniería eléctrica y servicios mineros",
      subtitle: "Desde hace más de 15 años",
      description: "Con amplia experiencia en diferentes regiones de Chile, entregando soluciones integrales al sector minero, industrial y público. Nuestro compromiso es con la calidad, seguridad y excelencia a nuestros clientes.",
      stats: [
        {
          value: "+1.000 Km",
          label: "Líneas eléctricas construídas",
          gradient: "from-zinc-900 to-[#AE1E24]"
        }
      ],
      footerTitle: "Centrados en la excelencia operativa y la innovación"
    }
  },
  { 
    id: 1, 
    label: "Construcción", 
    shortLabel: "Construcción",
    description: "Ejecución técnica de infraestructura crítica con personal certificado y equipamiento de última generación para la industria minera.",
    imageFile: "pararrayos.webp"
  },
  { 
    id: 2, 
    label: "Ensayos Eléctricos", 
    shortLabel: "Ensayos",
    description: "Diagnósticos preventivos y correctivos en terreno, asegurando la continuidad operacional mediante pruebas de aislamiento y potencia.",
    imageFile: "fibra-optica.webp"   
  },
  { 
    id: 3, 
    label: "Fibra Óptica", 
    shortLabel: "Fibra Óptica",
    description: "Implementación de redes de comunicación robustas y de alta velocidad para entornos industriales desafiantes y complejos.",
    imageFile: "cableado-estructurado.webp"
  },
];

const getImagePath = (imageFile: string) => `/pictures/${imageFile}`;

export default function ServiciosPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative min-h-screen w-full bg-white font-body pt-32 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <span className="text-[#AE1E24] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Especialidades</span>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight">Nuestros Servicios</h1>
        </div>

        {/* Navegación Estilo Pestañas Corporativas */}
        <nav className="flex items-center justify-center gap-2 mb-16 flex-wrap border-b border-zinc-100 w-full pb-4">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-8 py-3 text-[11px] font-black tracking-widest uppercase transition-all relative",
                activeTab === index 
                  ? "text-[#AE1E24]" 
                  : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              {service.label}
              {activeTab === index && (
                <div className="absolute bottom-[-17px] left-0 w-full h-1 bg-[#AE1E24]" />
              )}
            </button>
          ))}
        </nav>

        {/* Visualización del Servicio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full mb-20">
          <div className="relative aspect-square w-full bg-zinc-50 overflow-hidden group border border-zinc-100">
            <div className="absolute inset-0 border-[20px] border-white z-10" />
            <Image 
              src={getImagePath(services[activeTab].imageFile)}
              alt={services[activeTab].label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-10 right-10 z-20 bg-[#AE1E24] text-white px-6 py-2 text-[10px] font-bold tracking-widest uppercase">
              {services[activeTab].shortLabel}
            </div>
          </div>

          <div className="flex flex-col items-start animate-in fade-in slide-in-from-right-8 duration-700">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-8 leading-tight">
              {services[activeTab].label}
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              {services[activeTab].description}
            </p>
            <div className="space-y-4 w-full">
              {["Cumplimiento Normativo SEC", "Personal Altamente Calificado", "Equipamiento Certificado"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-zinc-100 text-zinc-900 font-bold text-sm tracking-wide">
                  <div className="w-2 h-2 bg-[#AE1E24]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Información Extendida (Estilo Codelco) */}
        {services[activeTab].extendedInfo && (
          <div className="w-full mt-24 space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header de Información Extendida */}
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">
                {services[activeTab].extendedInfo.mainTitle}
              </h3>
              <p className="text-[#AE1E24] text-xs font-bold uppercase tracking-[0.3em] mb-6">
                {services[activeTab].extendedInfo.subtitle}
              </p>
              <p className="text-zinc-600 text-base md:text-lg font-light leading-relaxed">
                {services[activeTab].extendedInfo.description}
              </p>
            </div>

            {/* Grid de Estadísticas y Frase Final */}
            <div className="bg-zinc-50 w-full py-16 px-8 border border-zinc-100 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              {services[activeTab].extendedInfo.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-12 group">
                  <div className={cn(
                    "w-64 h-64 bg-gradient-to-br flex flex-col items-center justify-center p-8 shadow-2xl transition-transform group-hover:scale-105",
                    stat.gradient
                  )}>
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">{stat.value}</span>
                    <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest text-center">{stat.label}</span>
                  </div>
                  
                  <div className="max-w-xs">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-[2px] bg-[#AE1E24]" />
                      <span className="text-[#AE1E24] text-[10px] font-bold uppercase tracking-widest">Excelencia Operativa</span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-zinc-900 leading-tight">
                      {services[activeTab].extendedInfo.footerTitle}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
