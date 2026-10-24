
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      title: "Nuestra Historia",
      paragraphs: [
        "ACCUS INGENIERIA LTDA. nació hace más de 15 años por iniciativa de su fundador, Luis Acuña López, quien inició prestando servicios eléctricos especializados en la región de Coquimbo. Gracias a un compromiso inquebrantable con la calidad y la seguridad, lo que comenzó como un esfuerzo personal se transformó en una organización sólida y confiable.",
        "A lo largo de su trayectoria, la empresa ha evolucionado integrando tecnología de vanguardia y formando un equipo de profesionales altamente calificados. Hoy, ACCUS se posiciona como un socio estratégico en la gran minería y el sector energético chileno, destacando por su capacidad técnica, eficiencia operativa y una visión moderna que combina experiencia con innovación constante."
      ],
      trajectory: [
        { year: "2008", title: "Fundación", desc: "Inicios de servicios eléctricos en la IV Región.", img: "/pictures/1.webp" },
        { year: "2012", title: "Crecimiento", desc: "Consolidación en proyectos de mediana minería.", img: "/pictures/2.webp" },
        { year: "2015", title: "Gran Minería", desc: "Adjudicación de contratos críticos en faenas líderes.", img: "/pictures/4.webp" },
        { year: "2018", title: "Tecnología", desc: "Incorporación de equipos de ensayo de última generación.", img: "/pictures/3.webp" },
        { year: "2020", title: "Certificación ISO", desc: "Obtención de certificación ISO 9001:2015.", img: "/pictures/1.webp" },
        { year: "2024", title: "Innovación", desc: "Liderazgo en fibra óptica y proyectos llave en mano.", img: "/pictures/2.webp" }
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
    ),
    missionVision: {
      title: "Misión y Visión",
      summary: "Nuestros pilares estratégicos definen el rumbo de ACCUS hacia la excelencia y la sostenibilidad en cada proyecto que emprendemos.",
      cards: [
        {
          tag: "Propósito",
          title: "Nuestra Misión",
          description: "Proveer soluciones integrales de ingeniería eléctrica, construcción y mantenimiento con los más altos estándares de seguridad y calidad, contribuyendo al desarrollo sostenible de la industria minera y energética nacional.",
          image: "/pictures/4.webp"
        },
        {
          tag: "Futuro",
          title: "Nuestra Visión",
          description: "Ser el referente líder en servicios de ingeniería eléctrica y fibra óptica en Chile, reconocidos por nuestra innovación tecnológica, excelencia operativa y compromiso inquebrantable con la seguridad.",
          image: "/pictures/1.webp"
        }
      ]
    }
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
    ),
    orgStructure: {
      title: "Estructura Organizacional",
      levels: [
        {
          role: "Gerente General",
          name: "Luis Acuña Lopez",
          color: "bg-[#AE1E24] text-white",
        },
        {
          role: "Sub Gerente",
          name: "Héctor Tapia Quilodrán",
          color: "bg-zinc-900 text-white",
        }
      ],
      branches: [
        {
          title: "Gerencia de Operaciones",
          leader: "Rodrigo Vergara Venegas",
          subRoles: ["Jefe de Operaciones", "Ingeniero Proyectista", "Encargado de Logística", "Jefe de Maquinaria", "Operadores / Rigger"]
        },
        {
          title: "Gerencia de Minería",
          leader: "Robert Marín Pérez",
          subRoles: ["Administrador de Contrato", "Encargado de Licitaciones", "Jefe SSOMA", "Ingeniero de Oficina Técnica"]
        },
        {
          title: "Gerencia Comercial / RRHH",
          leader: "Carla Tapia Quilodrán",
          subRoles: ["Administrativa Comercial", "Jefe de Relaciones Laborales", "Control de Costos", "Asistente Finanzas"]
        }
      ]
    },
    executiveProfiles: {
      title: "Liderazgo Estratégico",
      subtitle: "Compromiso y Visión Directiva",
      description: "Nuestro equipo directivo combina décadas de experiencia técnica en terreno con una gestión empresarial moderna y enfocada en resultados para la gran minería.",
      members: [
        {
          name: "Luis Acuña López",
          role: "Gerente General",
          experience: "Fundador de ACCUS con más de 25 años de trayectoria en ingeniería eléctrica aplicada. Experto en normativas SEC y liderando proyectos críticos para compañías como Antofagasta Minerals y AngloAmerican.",
          image: "https://picsum.photos/seed/executive1/400/400",
          initials: "LA"
        },
        {
          name: "Héctor Tapia Quilodrán",
          role: "Sub Gerente",
          experience: "Especialista en gestión de contratos y optimización de procesos industriales. Responsable de la excelencia operativa y la implementación de sistemas de gestión de calidad bajo normas internacionales.",
          image: "https://picsum.photos/seed/executive2/400/400",
          initials: "HT"
        },
        {
          name: "Rodrigo Vergara Venegas",
          role: "Gerente de Operaciones",
          experience: "Líder en ejecución de proyectos de alta tensión y fibra óptica industrial. Coordina equipos multidisciplinarios en terreno asegurando el cumplimiento de plazos y estándares de seguridad.",
          image: "https://picsum.photos/seed/executive3/400/400",
          initials: "RV"
        }
      ]
    },
    teamMosaic: {
      title: "Nuestro Equipo",
      subtitle: "Capital Humano en Terreno",
      description: "Nuestro activo más importante son los profesionales y técnicos que día a día despliegan su experiencia en las faenas más exigentes del país.",
      images: [
        { src: "/pictures/1.webp", alt: "Ingenieros en terreno", caption: "Equipo de Ingeniería" },
        { src: "/pictures/2.webp", alt: "Personal técnico", caption: "Especialistas Eléctricos" },
        { src: "/pictures/3.webp", alt: "Operaciones mineras", caption: "Faenas Mineras" },
        { src: "/pictures/4.webp", alt: "Montaje industrial", caption: "Equipo de Montaje" },
        { src: "https://picsum.photos/seed/team1/600/800", alt: "Equipo técnico", caption: "Personal Calificado" },
        { src: "https://picsum.photos/seed/team2/800/600", alt: "Supervisión", caption: "Oficina Técnica" }
      ]
    }
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
    ),
    certifications: {
      title: "Premios y certificaciones",
      text: "En búsqueda de la mejora en nuestros procesos con el objeto de brindar un servicio de excelencia y calidad a nuestros clientes, el pasado 2020 ACCUS Ingeniería Ltda. llevó a cabo un exigente, pero enriquecedor proceso de implementación de normas internacionales y tras 7 meses de arduo trabajo finalmente este culminó logrando la Certificación de Calidad ISO 9001:2015 para nuestra empresa otorgada por la prestigiosa certificadora SGS Chile Ltda.",
      logos: [
        { src: "/certificados/logo_ias.webp", alt: "ISO 9001:2015" },
        { src: "/certificados/logo_pelambres.webp", alt: "Los Pelambres Antofagasta Minerals" },
        { src: "/certificados/logo_vial.webp", alt: "Sello Excelencia Carlos Vial" }
      ]
    }
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
    <div className="relative min-h-screen w-full bg-white font-body">
      {/* Hero / Header Section */}
      <section className="pt-32 md:pt-44 pb-20">
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
        </div>
      </section>

      {/* Misión y Visión (Fondo Gris Sutil) */}
      {activeTab.missionVision && (
        <section className="w-full bg-zinc-50 py-24 border-y border-zinc-100 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16 relative">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 tracking-tight pb-6">
                {activeTab.missionVision.title}
              </h3>
              <div className="w-20 h-1 bg-[#AE1E24] mx-auto" />
              <p className="mt-8 text-zinc-600 text-lg font-light leading-relaxed max-w-3xl mx-auto">
                {activeTab.missionVision.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {activeTab.missionVision.cards.map((card, i) => (
                <div key={i} className="bg-white border border-zinc-200 group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-80 w-full overflow-hidden">
                    <img src={card.image} alt={card.title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#AE1E24]/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-6 left-6 z-20 bg-[#AE1E24] text-white px-4 py-1 text-[9px] font-bold tracking-widest uppercase">
                      {card.tag}
                    </div>
                  </div>
                  <div className="p-10 flex flex-col items-start">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4 uppercase tracking-tighter">{card.title}</h3>
                    <p className="text-zinc-500 text-base leading-relaxed font-light">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Información Extendida / Historia (Fondo Gris Sutil) */}
      {activeTab.extendedInfo && (
        <section className="w-full bg-zinc-50 py-24 border-y border-zinc-100 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center relative mb-16">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 tracking-tight pb-6">
                {activeTab.extendedInfo.title}
              </h3>
              <div className="w-20 h-1 bg-[#AE1E24] mx-auto" />
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8 text-zinc-600 text-base md:text-lg font-light leading-relaxed text-left md:text-justify mb-20">
              {activeTab.extendedInfo.paragraphs.map((p, index) => (
                <p key={index} className="opacity-90 hover:opacity-100 transition-opacity">
                  {p}
                </p>
              ))}
            </div>

            {activeTab.extendedInfo.trajectory && (
              <div className="w-full max-w-6xl mx-auto">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {activeTab.extendedInfo.trajectory.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="break-inside-avoid relative group overflow-hidden bg-white border border-zinc-200"
                    >
                      <div className="relative aspect-[4/5] w-full">
                        <Image 
                          src={item.img} 
                          alt={item.title} 
                          fill 
                          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                          <span className="text-white text-4xl font-black mb-2 tracking-tighter">{item.year}</span>
                          <h4 className="text-[#AE1E24] text-xs font-bold uppercase tracking-widest mb-3">{item.title}</h4>
                          <p className="text-white/90 text-xs leading-relaxed font-light">{item.desc}</p>
                        </div>
                        <div className="absolute top-4 left-4 bg-[#AE1E24] text-white px-3 py-1 text-[10px] font-bold tracking-widest group-hover:opacity-0 transition-opacity">
                          {item.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Estructura Organizacional (Fondo Gris Sutil) */}
      {activeTab.orgStructure && (
        <section className="w-full bg-zinc-50 py-24 border-y border-zinc-100 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16 relative">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 tracking-tight pb-6">
                {activeTab.orgStructure.title}
              </h3>
              <div className="w-20 h-1 bg-[#AE1E24] mx-auto" />
            </div>

            <div className="flex flex-col items-center space-y-10 w-full overflow-x-auto pb-10">
              <div className="flex flex-col items-center gap-8 min-w-[320px]">
                {activeTab.orgStructure.levels.map((node, i) => (
                  <div key={i} className={cn("px-8 py-5 border shadow-sm text-center min-w-[280px] group transition-all hover:scale-105", node.color)}>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-1">{node.role}</p>
                    <p className="text-sm md:text-base font-black tracking-tight">{node.name}</p>
                  </div>
                ))}
              </div>

              <div className="hidden md:block w-px h-10 bg-zinc-200" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {activeTab.orgStructure.branches.map((branch, idx) => (
                  <div key={idx} className="flex flex-col space-y-6">
                    <div className="bg-white border border-zinc-200 p-6 text-center shadow-sm group hover:border-[#AE1E24] transition-colors">
                      <p className="text-[9px] uppercase tracking-widest font-bold text-zinc-400 mb-2">{branch.title}</p>
                      <p className="text-sm font-bold text-zinc-900">{branch.leader}</p>
                    </div>
                    
                    <div className="space-y-3">
                      {branch.subRoles.map((role, rIdx) => (
                        <div key={rIdx} className="bg-white border-l-2 border-zinc-100 p-3 text-left group hover:border-[#AE1E24] transition-all shadow-sm">
                          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Liderazgo Estratégico (Fondo Blanco) */}
      {activeTab.executiveProfiles && (
        <section className="w-full bg-white py-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center space-y-4 mb-20">
              <span className="text-[#AE1E24] text-xs font-bold tracking-[0.4em] uppercase block">
                {activeTab.executiveProfiles.subtitle}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                {activeTab.executiveProfiles.title}
              </h3>
              <div className="w-20 h-1 bg-[#AE1E24] mx-auto mt-4" />
              <p className="max-w-3xl mx-auto text-zinc-500 text-lg font-light leading-relaxed mt-6">
                {activeTab.executiveProfiles.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-16 max-w-5xl mx-auto">
              {activeTab.executiveProfiles.members.map((member, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 group"
                >
                  <div className="shrink-0 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-[#AE1E24] scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      <AvatarFallback className="bg-zinc-100 text-[#AE1E24] text-4xl font-black">{member.initials}</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex-1 text-center md:text-left space-y-4 py-4">
                    <div className="space-y-1">
                      <h4 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tighter uppercase">
                        {member.name}
                      </h4>
                      <p className="text-[#AE1E24] text-xs font-bold uppercase tracking-[0.3em]">
                        {member.role}
                      </p>
                    </div>
                    <div className="w-12 h-0.5 bg-zinc-200 group-hover:w-24 group-hover:bg-[#AE1E24] transition-all duration-500" />
                    <p className="text-zinc-600 text-base md:text-lg font-light leading-relaxed">
                      {member.experience}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nuestro Equipo (Fondo Gris Sutil) */}
      {activeTab.teamMosaic && (
        <section className="w-full bg-zinc-50 py-24 border-t border-zinc-100 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center space-y-4 mb-20">
              <span className="text-[#AE1E24] text-xs font-bold tracking-[0.4em] uppercase block">
                {activeTab.teamMosaic.subtitle}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                {activeTab.teamMosaic.title}
              </h3>
              <div className="w-20 h-1 bg-[#AE1E24] mx-auto mt-4" />
              <p className="max-w-3xl mx-auto text-zinc-500 text-lg font-light leading-relaxed mt-6">
                {activeTab.teamMosaic.description}
              </p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {activeTab.teamMosaic.images.map((item, idx) => (
                <div 
                  key={idx} 
                  className="break-inside-avoid relative group overflow-hidden bg-white border border-zinc-200 shadow-sm"
                >
                  <div className="relative aspect-[4/5] w-full">
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <h4 className="text-[#AE1E24] text-[10px] font-bold uppercase tracking-widest mb-1">ACCUS TEAM</h4>
                      <p className="text-white text-xs font-light tracking-wide uppercase">{item.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Premios y Certificaciones (Fondo Gris Sutil) */}
      {activeTab.certifications && (
        <section className="w-full bg-zinc-50 py-24 border-t border-zinc-100 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center relative mb-16">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 tracking-tight pb-6">
                {activeTab.certifications.title}
              </h3>
              <div className="w-20 h-1 bg-[#AE1E24] mx-auto" />
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-zinc-600 text-base md:text-lg font-light leading-relaxed mb-16">
                {activeTab.certifications.text}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
                {activeTab.certifications.logos.map((logo, idx) => (
                  <div key={idx} className="relative h-24 w-full max-w-[240px] group transition-all">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
    </div>
  );
}
