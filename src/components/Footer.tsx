
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const officeAddress = "Pje. Murano 3770, Coquimbo, Chile";
  const googleMapsUrl = "https://maps.google.com/?cid=5642741475145394220";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.712602766347!2d-71.3284643!3d-29.9876527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x963e095d2a86bee9%3A0x4e4f0b79a167a82c!2sPje.%20Murano%203770%2C%201803038%20Coquimbo!5e0!3m2!1ses!2scl!4v1717371682000!5m2!1ses!2scl";

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPrivacyModalOpen(false);
        setIsMapModalOpen(false);
      }
    };

    if (isPrivacyModalOpen || isMapModalOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isPrivacyModalOpen, isMapModalOpen]);

  return (
    <>
      <footer className="bg-zinc-900 text-zinc-400 py-10 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Lado Izquierdo: Identidad y Datos */}
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="block">
              <img src="/LogoAccus.png" className="h-8 w-auto brightness-0 invert" alt="Accus Solutions" />
            </Link>
            <div className="text-[11px] leading-relaxed tracking-wider font-medium space-y-1">
              <p className="text-zinc-300">Pje. Murano 3770</p>
              <p>Coquimbo, Chile</p>
              <p>+56 992595761</p>
              <p className="hover:text-white transition-colors cursor-pointer" onClick={() => setIsMapModalOpen(true)}>
                Ver ubicación en mapa
              </p>
            </div>
          </div>

          {/* Lado Derecho: Navegación y Legal */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <nav className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
              <Link href="/proyectos" className="hover:text-white transition-colors">Proyectos</Link>
              <Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link>
              <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
              <button onClick={() => setIsPrivacyModalOpen(true)} className="hover:text-white transition-colors uppercase">Privacidad</button>
            </nav>

            <div className="flex items-center gap-5">
              <Link href="#" className="hover:text-white transition-colors"><Instagram size={16} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Linkedin size={16} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Facebook size={16} /></Link>
            </div>

            <p className="text-[9px] uppercase tracking-widest text-zinc-600 mt-2">
              © {new Date().getFullYear()} Accus Ingeniería Ltda. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal Mapa */}
      {isMapModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMapModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-3xl h-[70vh] flex flex-col rounded-none shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Ubicación Corporativa</h2>
              <button onClick={() => setIsMapModalOpen(false)} className="text-zinc-500 hover:text-black text-xl">&times;</button>
            </div>
            <div className="flex-1">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Modal Privacidad */}
      {isPrivacyModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsPrivacyModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto p-10 rounded-none shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-6 text-zinc-900">Política de Privacidad</h2>
            <div className="space-y-6 text-sm text-zinc-600 leading-relaxed">
              <p>En Accus Ingeniería Ltda., la confidencialidad de los datos de nuestros clientes es una prioridad estratégica. La información recopilada mediante nuestros canales oficiales se utiliza exclusivamente para fines de contacto técnico y comercial.</p>
              <p>No compartimos información con terceros sin autorización previa y mantenemos estándares de seguridad alineados con la industria minera y energética nacional.</p>
            </div>
            <button
              onClick={() => setIsPrivacyModalOpen(false)}
              className="mt-8 px-6 py-3 bg-[#AE1E24] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#AE1E24]/90 transition-colors w-full"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
