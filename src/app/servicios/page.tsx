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
    description: "Servicios integrales de ingeniería eléctrica diseñados bajo estándares internacionales para garantizar la máxima seguridad y eficiencia operacional.",
    imageFile: "acc02.webp"
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
    <section className="relative min-h-screen w-full bg-white font-body pt-32 md:pt-40">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="relative aspect-square w-full bg-zinc-50 overflow-hidden group">
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
      </div>
    </section>
  );
}