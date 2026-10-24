
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

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
          gradient: "from-zinc-950 via-zinc-900 to-[#AE1E24]",
          textColor: "text-white",
          hasArrow: false
        },
        {
          value: "+300",
          label: "Proyectos realizados y entregados",
          gradient: "from-white to-white",
          textColor: "text-zinc-900",
          border: "border-zinc-100",
          hasArrow: false
        },
        {
          value: "+300.000 Hrs",
          label: "Horas hombre trabajadas",
          gradient: "from-[#AE1E24] via-zinc-900 to-zinc-950",
          textColor: "text-white",
          hasArrow: false
        }
      ],
      descriptions: [
        {
          title: "Centrados en la excelencia operativa y la innovación",
          text: ""
        },
        {
          title: "",
          text: "Nos caracterizamos por entregar siempre un valor agregado en nuestros proyectos, con la finalidad de que el cliente quede con plena confianza que su servicio o proyecto es exitoso."
        }
      ]
    }
  },
  { 
    id: 1, 
    label: "Construcción", 
    shortLabel: "Construcción",
    description: "Ejecución técnica de infraestructura crítica con personal certificado y equipamiento de última generación para la industria minera.",
    imageFile: "pararrayos.webp",
    extendedInfo: {
      mainTitle: "Construcción y montaje industrial",
      subtitle: "Ejecución de precisión técnica",
      description: "Nuestra unidad de construcción está especializada en el montaje de infraestructuras críticas para la minería y la industria energética, garantizando plazos y seguridad absoluta en cada maniobra.",
      stats: [
        {
          value: "+80",
          label: "Subestaciones y salas eléctricas montadas",
          gradient: "from-zinc-950 via-zinc-900 to-[#AE1E24]",
          textColor: "text-white",
          hasArrow: false
        },
        {
          value: "100%",
          label: "Cumplimiento en estándares de seguridad",
          gradient: "from-white to-white",
          textColor: "text-zinc-900",
          border: "border-zinc-100",
          hasArrow: false
        },
        {
          value: "+150 Km",
          label: "Tendido de líneas y canalizaciones",
          gradient: "from-[#AE1E24] via-zinc-900 to-zinc-950",
          textColor: "text-white",
          hasArrow: false
        }
      ],
      descriptions: [
        {
          title: "Compromiso con la continuidad operativa",
          text: ""
        },
        {
          title: "",
          text: "Desarrollamos montajes eléctricos de alta complejidad, desde la cimentación hasta la puesta en marcha, asegurando la integración perfecta con los sistemas existentes del cliente."
        }
      ]
    }
  },
  { 
    id: 2, 
    label: "Ensayos Eléctricos", 
    shortLabel: "Ensayos",
    description: "Diagnósticos preventivos y correctivos en terreno, asegurando la continuidad operacional mediante pruebas de aislamiento y potencia.",
    imageFile: "fibra-optica.webp",
    extendedInfo: {
      mainTitle: "Diagnóstico y Ensayos Eléctricos de Potencia",
      subtitle: "Garantía de Continuidad Operacional",
      description: "Realizamos pruebas críticas de aislamiento, relación de transformación y diagnóstico de equipos eléctricos bajo los más altos estándares de precisión técnica.",
      stats: [
        {
          value: "+500",
          label: "Equipos de potencia diagnosticados",
          gradient: "from-zinc-950 via-zinc-900 to-[#AE1E24]",
          textColor: "text-white",
          hasArrow: false
        },
        {
          value: "24/7",
          label: "Disponibilidad para emergencias técnicas",
          gradient: "from-white to-white",
          textColor: "text-zinc-900",
          border: "border-zinc-100",
          hasArrow: false
        },
        {
          value: "100%",
          label: "Precisión en informes técnicos",
          gradient: "from-[#AE1E24] via-zinc-900 to-zinc-950",
          textColor: "text-white",
          hasArrow: false
        }
      ],
      descriptions: [
        {
          title: "Mantenimiento Predictivo de Clase Mundial",
          text: ""
        },
        {
          title: "",
          text: "Utilizamos equipamiento certificado de última generación para detectar anomalías antes de que ocurran, minimizando paradas no programadas y extendiendo la vida útil de sus activos."
        }
      ]
    }
  },
  { 
    id: 3, 
    label: "Fibra Óptica", 
    shortLabel: "Fibra Óptica",
    description: "Implementación de redes de comunicación robustas y de alta velocidad para entornos industriales desafiantes y complejos.",
    imageFile: "cableado-estructurado.webp",
    extendedInfo: {
      mainTitle: "Soluciones de Conectividad en Fibra Óptica",
      subtitle: "Infraestructura de Datos para la Minería 4.0",
      description: "Implementamos redes de comunicación de alta velocidad en los entornos más hostiles, asegurando la transmisión de datos crítica para la telemetría y control industrial.",
      stats: [
        {
          value: "+200 Km",
          label: "Fibra óptica tendida y fusionada",
          gradient: "from-zinc-950 via-zinc-900 to-[#AE1E24]",
          textColor: "text-white",
          hasArrow: false
        },
        {
          value: "< 0.1dB",
          label: "Pérdida por fusión garantizada",
          gradient: "from-white to-white",
          textColor: "text-zinc-900",
          border: "border-zinc-100",
          hasArrow: false
        },
        {
          value: "+100",
          label: "Nodos de comunicación operativos",
          gradient: "from-[#AE1E24] via-zinc-900 to-zinc-950",
          textColor: "text-white",
          hasArrow: false
        }
      ],
      descriptions: [
        {
          title: "Conectividad Robusta y de Alta Velocidad",
          text: ""
        },
        {
          title: "",
          text: "Desde el diseño de la red hasta la certificación de enlaces con OTDR, entregamos soluciones que soportan la digitalización total y el monitoreo remoto de la faena minera."
        }
      ]
    }
  },
];

const getImagePath = (imageFile: string) => `/pictures/${imageFile}`;

export default function ServiciosPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative min-h-screen w-full bg-white font-body pt-32 md:pt-40 pb-0">
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
      </div>

      {/* Información Extendida con Fondo Gris Sutil (Ancho Completo) */}
      {services[activeTab].extendedInfo && (
        <div className="w-full bg-zinc-50 py-24 border-t border-zinc-100 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
            
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

            {/* Grid de Estadísticas Estilo Matriz */}
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              
              {/* Fila 1: Stats Card 1 + Texto 1 */}
              <div className={cn(
                "aspect-square bg-gradient-to-br flex flex-col justify-center p-10 shadow-2xl transition-transform hover:scale-[1.02]",
                services[activeTab].extendedInfo.stats[0].gradient,
                services[activeTab].extendedInfo.stats[0].textColor
              )}>
                <span className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                  {services[activeTab].extendedInfo.stats[0].value}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-80 leading-relaxed max-w-[140px]">
                  {services[activeTab].extendedInfo.stats[0].label}
                </span>
              </div>

              <div className="flex items-start gap-4 p-6 self-center lg:col-span-2">
                <ChevronRight className="text-[#AE1E24] shrink-0 mt-1" size={24} strokeWidth={3} />
                <h4 className="text-xl md:text-2xl font-bold text-zinc-900 leading-tight">
                  {services[activeTab].extendedInfo.descriptions[0].title}
                </h4>
              </div>

              {/* Fila 2: Stats Card 2 + Stats Card 3 + Texto 2 */}
              <div className={cn(
                "aspect-square flex flex-col justify-center p-10 shadow-xl transition-transform hover:scale-[1.02] border bg-white",
                services[activeTab].extendedInfo.stats[1].textColor,
                services[activeTab].extendedInfo.stats[1].border ? services[activeTab].extendedInfo.stats[1].border : "border-zinc-100"
              )}>
                <span className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                  {services[activeTab].extendedInfo.stats[1].value}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-80 leading-relaxed max-w-[140px]">
                  {services[activeTab].extendedInfo.stats[1].label}
                </span>
              </div>

              <div className={cn(
                "aspect-square bg-gradient-to-br flex flex-col justify-center p-10 shadow-2xl transition-transform hover:scale-[1.02]",
                services[activeTab].extendedInfo.stats[2].gradient,
                services[activeTab].extendedInfo.stats[2].textColor
              )}>
                <span className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                  {services[activeTab].extendedInfo.stats[2].value}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-80 leading-relaxed max-w-[140px]">
                  {services[activeTab].extendedInfo.stats[2].label}
                </span>
              </div>

              <div className="p-6 self-center">
                <p className="text-zinc-600 text-sm font-light leading-relaxed">
                  {services[activeTab].extendedInfo.descriptions[1].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
