"use client";

import { useState, useEffect } from 'react';
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
    description: 'ACCUS INGENIERIA LTDA., cuenta con más de 15 años de servicios, realizando Ensayos Eléctricos, Instalaciones Industriales y Mineras, Normalizaciones y Regularizaciones de Instalaciones Eléctricas de la pequeña y gran Industria Minera. Asimismo nos constituimos con profesionales e ingenieros, técnicos y Maestros Capacitados y especializados, procedemos a realizar una inspección minuciosa de las instalaciones en servicio, procedemos a emitir informe técnico a nuestros clientes con el más estricto resguardo de la información regularizando las instalaciones eléctricas e escribiendo en la Superintendencia de Servicios Eléctricos (SEC) para la obtención del Certificado TE-1. ',
    image: '/pictures/1.webp',      
    hint: 'professional engineer manager',
    modalContent: (
      <>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Nuestra Acreditación y Alcance</h3>
        <p className="text-sm leading-relaxed mb-4">
          Nuestra vasta trayectoria nos permite abordar proyectos de alta complejidad técnica bajo normativas vigentes. El proceso de obtención del Certificado TE-1 ante la SEC garantiza que cada instalación cumple de forma rigurosa con los estándares de seguridad exigidos por la ley chilena, mitigando riesgos operativos y legales para su empresa.
        </p>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Servicios Especializados</h3>
        <p className="text-sm leading-relaxed">
          Realizamos diagnósticos de mallas a tierra, análisis de calidad de energía, termografías infrarrojas y mantenimiento predictivo en subestaciones eléctricas para la pequeña, mediana y gran minería.
        </p>
      </>
    )
  },
  {
    id: 'valores',
    label: 'Nuestros Valores',
    subtitle: 'ACCUS',
    title: 'Compromiso e Integridad',
    description: 'La seguridad es nuestra prioridad intransable. Trabajamos bajo los más estrictos estándares de calidad, integridad y compromiso con el medio ambiente, construyendo relaciones de confianza a largo plazo con nuestros socios estratégicos en la gran minería e industria nacional.',
    image: '/pictures/2.webp',      
    hint: 'electrical industrial safety',
    modalContent: (
      <>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Pilares Fundamentales</h3>
        <p className="text-sm leading-relaxed mb-4">
          <strong>Seguridad Primero:</strong> Cero incidentes es nuestra meta constante. Capacitamos continuamente a nuestro personal en riesgos eléctricos de alta tensión.
        </p>
        <p className="text-sm leading-relaxed mb-4">
          <strong>Sustentabilidad:</strong> Diseñamos soluciones eficientes que reducen la huella de carbono y optimizan el consumo energético de los sistemas industriales.
        </p>
        <p className="text-sm leading-relaxed">
          <strong>Transparencia:</strong> Cada ensayo e informe técnico se genera de manera objetiva, entregando datos reales y soluciones concretas.
        </p>
      </>
    )
  },
  {
    id: 'gente',
    label: 'Nuestra Gente',
    subtitle: 'ACCUS',
    title: 'El Corazón de la Empresa',
    description: 'Bajo la dirección de nuestro Gerente General Luis Acuña Lopez, un professional con amplia trayectoria en el sector minero e industrial, ACCUS se ha consolidado como un referente de excelencia. Nuestro equipo está compuesto por ingenieros y técnicos altamente cualificados que comparten una visión común: superar los límites de la ingeniería tradicional para ofrecer soluciones integrales y seguras.',
    image: '/pictures/3.webp',        
    hint: 'engineers team collaboration',
    modalContent: (
      <>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Liderazgo de Excelencia</h3>
        <p className="text-sm leading-relaxed mb-4">
          Liderados por Luis Acuña Lopez, fomentamos una cultura corporativa de mejora continua y aprendizaje técnico. Nuestro capital humano es el activo más valioso de ACCUS, marcando la diferencia en terrenos de difícil acceso y condiciones extremas propias de la minería.
        </p>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Especialización Técnica</h3>
        <p className="text-sm leading-relaxed">
          Contamos con ingenieros civiles, eléctricos y técnicos certificados SEC Clase A, preparados para responder de forma ágil y eficiente ante emergencias críticas de infraestructura.
        </p>
      </>
    )
  },
  {
    id: 'evolucion',
    label: 'Nuestra Evolución',
    subtitle: 'ACCUS',
    title: 'Trayectoria e Innovación',
    description: 'Desde nuestros inicios, hemos evolucionado para enfrentar los desafíos técnicos más complejos de la infraestructura eléctrica en Chile. Nuestra trayectoria está marcada por el éxito en proyectos críticos, adaptándonos constantemente a las nuevas tecnologías y exigencias del mercado global.',
    image: '/pictures/4.webp',    
    hint: 'industrial power progress',
    modalContent: (
      <>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Hitos de Innovación</h3>
        <p className="text-sm leading-relaxed mb-4">
          A lo largo de estos 15 años, hemos incorporado equipamiento de última tecnología para ensayos dieléctricos y diagnóstico de cables de media y alta tensión (VLF). 
        </p>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Visión de Futuro</h3>
        <p className="text-sm leading-relaxed">
          Nos proyectamos hacia la automatización y digitalización de sistemas eléctricos industriales, integrando soluciones inteligentes y monitoreo en tiempo real alineados con la minería 4.0.
        </p>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Conocimiento</h3>
        <p className="text-sm leading-relaxed mb-4">
          Contamos con experiencia Minera, realizando instalaciones en montaje, pruebas eléctricas, diseño y ejecución de Mallas Puesta a Tierra, Análisis de Calidad de Suministro y Registro de Armónicas., Pesquisas de fallas en Tableros Eléctricos, Termografias, y mucho mas . Realizamos Presupuestos según requerimiento de nuestros clientes, siendo competitivos en el mercado del rubro de la Ingeniería. Todos los equipos cuentan con Certificación Actualizada respaldado por el INN, y nuestros servicios son respaldados con procedimientos de seguridad y calidad en la ejecución de los trabajos.
        </p>
        <h3 className="text-lg font-semibold text-[#AE1E24] mb-2">Hitos de Experiencia</h3>
        <p className="text-sm leading-relaxed">
          Tenemos gran experiencia Minera e Industrial avalada por servicios realizados en Minera Codelco Chuquicamata, Minera Antucoya, Collahuasi, Angloamerican, Minera Pascua-Lama, Minera Spence, Lomas Bayas, El Abra, Gaby, Observatorio ALMA, Observatorio Campana, Minera Escondida, Minera Mantos de Oro, Minera San Gerónimo, Minera Soquimich SQM , entre otros sectores industriales y comerciales como ser Camanchaca Tome, Universidad Católica, Universidad San Sebastián, Universidad de Concepción , Hospital San José, Hospital Barros Luco, Fuerza Aérea de Chile, Planta de relaves Huechun (Til Til) Codelco, Planta de Gas Abastible.
        </p>
      </>
    )
  }
];

export default function NosotrosPage() {
  const [activeTab, setActiveTab] = useState(nosotrosData[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { nosotros } = imageData;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <>
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
        {/* CAMBIO CLAVE: Se cambió el padding-top (pt-32 a pt-44 md:pt-48) para empujar el contenido abajo del Header */}
        <div className="relative z-10 w-full max-w-7xl px-8 md:px-16 flex flex-col h-full pt-44 md:pt-48 pb-16">

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
                  <span className="mx-1 md:mx-2 text-white/10 inline-block">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* Content Body */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 flex-grow">

            {/* Left Side: Image with inverted curvature */}
            <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] shrink-0 overflow-hidden rounded-tr-[999px] rounded-br-[999px] rounded-tl-[40px] rounded-bl-[40px] border-2 border-white/80 shadow-2xl">
              <Image
                key={activeTab.id}
                src={activeTab.image}
                alt={activeTab.label}
                fill
                className="object-cover animate-in fade-in zoom-in-95 duration-700"
                data-ai-hint={activeTab.hint}
              />
            </div>

            {/* Right Side: Text Content */}
            <div key={activeTab.id} className="flex flex-col items-start text-left max-w-xl animate-in fade-in slide-in-from-right-8 duration-700">
              <span className="text-white/60 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">
                {activeTab.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 leading-tight">
                {activeTab.title}
              </h2>
              <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed font-light mb-8">
                {activeTab.description}
              </p>

              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-[#AE1E24] hover:bg-[#AE1E24]/90 text-white rounded-none px-8 py-5 text-[10px] md:text-xs font-bold tracking-widest uppercase flex items-center gap-3 transition-transform hover:translate-x-1"
              >
                Leer más
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

          </div>

        </div>
      </section>

      {/* Modal Individual Dinámico */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#AE1E24] tracking-widest uppercase">{activeTab.subtitle}</span>
                <h2 className="text-xl font-bold text-gray-900">{activeTab.title}</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none focus:outline-none"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            {/* Contenido Dinámico */}
            <div className="px-6 py-6 space-y-6 text-gray-700">
              <section>
                <p className="text-sm leading-relaxed font-medium text-gray-900 mb-4">
                  {activeTab.description}
                </p>
                <hr className="border-gray-200 my-4" />
                {activeTab.modalContent}
              </section>
            </div>

            {/* Footer del Modal */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-[#AE1E24] text-white rounded-none hover:bg-[#AE1E24]/90 transition-colors font-medium text-xs uppercase tracking-wider"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}