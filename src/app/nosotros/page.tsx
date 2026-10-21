
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const nosotrosData = [
  {
    id: 'quienes',
    label: 'Quienes Somos',
    subtitle: 'ACCUS',
    title: 'Liderazgo y Experiencia',
    description: 'ACCUS INGENIERIA LTDA., cuenta con más de 15 años de servicios, realizando Ensayos Eléctricos, Instalaciones Industriales y Mineras, Normalizaciones y Regularizaciones de Instalaciones Eléctricas de la pequeña y gran Industria Minera.',
    image: '/pictures/1.webp',      
    hint: 'professional engineer manager',
    modalContent: (
      <>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Nuestra Acreditación y Alcance</h3>
        <p className="text-sm leading-relaxed mb-4">
          Nuestra vasta trayectoria nos permite abordar proyectos de alta complejidad técnica bajo normativas vigentes. El proceso de obtención del Certificado TE-1 ante la SEC garantiza que cada instalación cumple de forma rigurosa con los estándares de seguridad exigidos por la ley chilena.
        </p>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Servicios Especializados</h3>
        <p className="text-sm leading-relaxed">
          Realizamos diagnósticos de mallas a tierra, análisis de calidad de energía, termografías infrarrojas y mantenimiento predictivo en subestaciones eléctricas.
        </p>
      </>
    ),
    extendedInfo: {
      title: "Historia",
      paragraphs: [
        "Nuestros inicios se remontan a hace más de 15 años, cuando nuestro fundador, Luis Acuña Lopez, comenzó a realizar trabajos eléctricos de forma particular, atendiendo a los clientes de la región de Coquimbo.",
        "Con responsabilidad y compromiso se logró ganar la confianza de los clientes. El esfuerzo y la dedicación permitieron alcanzar el logro de consolidar ACCUS INGENIERIA LTDA., brindando servicios a la pequeña y gran industria minera.",
        "A lo largo de los años, la empresa demostró sus capacidades y compromiso con la industria. La creación de ACCUS fue fruto de la unión de esfuerzos y visión técnica. Comenzamos esta aventura empresarial con un equipo altamente calificado, equipamiento de última tecnología y una flota preparada para los desafíos del terreno minero.",
        "Sin duda, la trayectoria marcó un punto de inflexión importante para la empresa. Nos adjudicamos trabajos críticos en importantes faenas mineras, lo que nos abrió las puertas al mundo de la gran minería y energía en Chile.",
        "Con la incorporación de jóvenes profesionales, llenos de entusiasmo y con un fuerte deseo de aprender, ACCUS logra posicionarse en la minería, logrando formar un equipo humano de alta calidad, quienes hoy en día son los pilares de nuestra organización, demostrando a diario su compromiso con la seguridad, tanto propia como la de sus compañeros.",
        "Es un orgullo ver cómo estos talentos contribuyen al crecimiento de ACCUS y al desarrollo de la minería en nuestro país. Contamos con una visión moderna al negocio, combinando la vasta experiencia de los fundadores con las últimas tendencias y avances de la industria.",
        "Actualmente contamos con la infraestructura, los recursos humanos y financieros necesarios para afrontar nuevos desafíos en la industria minera, tanto a nivel nacional como internacional.",
        "Nuestra política corporativa, centrada en la calidad, la prevención de riesgos y el respeto al medio ambiente, nos permite garantizar un servicio profesional, confiable y de excelencia."
      ]
    }
  },
  {
    id: 'valores',
    label: 'Nuestros Valores',
    subtitle: 'ACCUS',
    title: 'Compromiso e Integridad',
    description: 'La seguridad es nuestra prioridad intransable. Trabajamos bajo los más estrictos estándares de calidad, integridad y compromiso con el medio ambiente.',
    image: '/pictures/2.webp',      
    hint: 'electrical industrial safety',
    modalContent: (
      <>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Pilares Fundamentales</h3>
        <p className="text-sm leading-relaxed mb-4">
          <strong>Seguridad Primero:</strong> Cero incidentes es nuestra meta constante. Capacitamos continuamente a nuestro personal en riesgos eléctricos.
        </p>
        <p className="text-sm leading-relaxed mb-4">
          <strong>Sustentabilidad:</strong> Diseñamos soluciones eficientes que reducen la huella de carbono.
        </p>
      </>
    )
  },
  {
    id: 'gente',
    label: 'Nuestra Gente',
    subtitle: 'ACCUS',
    title: 'El Corazón de la Empresa',
    description: 'Bajo la dirección de Luis Acuña Lopez, un profesional con amplia trayectoria, ACCUS se ha consolidado como un referente de excelencia.',
    image: '/pictures/3.webp',        
    hint: 'engineers team collaboration',
    modalContent: (
      <>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Liderazgo de Excelencia</h3>
        <p className="text-sm leading-relaxed mb-4">
          Fomentamos una cultura corporativa de mejora continua y aprendizaje técnico. Nuestro capital humano es el activo más valioso.
        </p>
      </>
    )
  },
  {
    id: 'evolucion',
    label: 'Nuestra Evolución',
    subtitle: 'ACCUS',
    title: 'Trayectoria e Innovación',
    description: 'Desde nuestros inicios, hemos evolucionado para enfrentar los desafíos técnicos más complejos de la infraestructura eléctrica en Chile.',
    image: '/pictures/4.webp',    
    hint: 'industrial power progress',
    modalContent: (
      <>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Hitos de Innovación</h3>
        <p className="text-sm leading-relaxed mb-4">
          A lo largo de estos 15 años, hemos incorporado equipamiento de última tecnología para ensayos dieléctricos.
        </p>
      </>
    )
  }
];

export default function NosotrosPage() {
  const [activeTab, setActiveTab] = useState(nosotrosData[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isModalOpen]);

  return (
    <section className="relative min-h-screen w-full bg-white font-body pt-32 md:pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <span className="text-[#AE1E24] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Identidad Corporativa</span>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight">Nosotros</h1>
        </div>

        {/* Navegación Estilo Pestañas */}
        <nav className="flex items-center justify-center gap-2 mb-16 flex-wrap border-b border-zinc-100 w-full pb-4">
          {nosotrosData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item)}
              className={cn(
                "px-8 py-3 text-[11px] font-black tracking-widest uppercase transition-all relative",
                activeTab.id === item.id 
                  ? "text-[#AE1E24]" 
                  : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              {item.label}
              {activeTab.id === item.id && (
                <div className="absolute bottom-[-17px] left-0 w-full h-1 bg-[#AE1E24]" />
              )}
            </button>
          ))}
        </nav>

        {/* Contenido Central */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full mb-20">
          <div className="relative aspect-square w-full bg-zinc-50 overflow-hidden group border border-zinc-100">
            <div className="absolute inset-0 border-[20px] border-white z-10" />
            <Image 
              src={activeTab.image}
              alt={activeTab.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              data-ai-hint={activeTab.hint}
            />
            <div className="absolute top-10 right-10 z-20 bg-[#AE1E24] text-white px-6 py-2 text-[10px] font-bold tracking-widest uppercase">
              {activeTab.subtitle}
            </div>
          </div>

          <div className="flex flex-col items-start animate-in fade-in slide-in-from-right-8 duration-700">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-8 leading-tight">
              {activeTab.title}
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              {activeTab.description}
            </p>
            
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#AE1E24] hover:bg-[#AE1E24]/90 text-white rounded-none px-10 py-7 text-xs font-bold tracking-widest uppercase flex items-center gap-3"
            >
              CONOCER MÁS <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Información Extendida (Historia, etc.) */}
        {activeTab.extendedInfo && (
          <div className="w-full max-w-4xl mx-auto mt-24 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="text-center relative">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 tracking-tight pb-6">
                {activeTab.extendedInfo.title}
              </h3>
              <div className="w-20 h-1 bg-[#AE1E24] mx-auto" />
            </div>
            
            <div className="space-y-8 text-zinc-600 text-base md:text-lg font-light leading-relaxed text-left md:text-justify">
              {activeTab.extendedInfo.paragraphs.map((p, index) => (
                <p key={index} className="opacity-90 hover:opacity-100 transition-opacity">
                  {p}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white w-full max-w-2xl p-10 rounded-none shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-zinc-400 hover:text-black text-2xl">&times;</button>
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">{activeTab.title}</h2>
            <div className="text-zinc-600 leading-relaxed">
              {activeTab.modalContent}
            </div>
            <Button onClick={() => setIsModalOpen(false)} className="mt-10 w-full bg-[#AE1E24] text-white rounded-none py-6 font-bold uppercase tracking-widest">Cerrar</Button>
          </div>
        </div>
      )}
    </section>
  );
}
