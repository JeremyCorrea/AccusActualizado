'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  // Office location details
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

  const footerNavs = [
    {
      label: 'Explorar',
      items: [
        { href: '/', label: 'Inicio' },
        { href: '/servicios', label: 'Servicios' },
        { href: '/proyectos', label: 'Proyectos' },
        { href: '/nosotros', label: 'Nosotros' },
        { href: '/contacto', label: 'Contacto' },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-primary text-white pt-16 pb-12 px-4">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Link href="/" className="flex items-center space-x-3 justify-center md:justify-start">
                <img src="/logo.png" className="h-10 w-auto" alt="Accus Solutions Logo" />
              </Link>
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left">
              Expertos en Ingeniería Eléctrica, Construcción, Ensayos eléctricos en la Minería y Fibra Óptica.
            </p>
          </div>

          {footerNavs.map((section, index) => (
            <div key={index} className="col-span-1 md:col-span-1">
              <h3 className="text-lg font-black text-white mb-4 !font-black">{section.label}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className="hover:text-gray-300 transition-colors duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-black text-white mb-4 !font-black">Oficina</h3>
            <p className="text-sm text-gray-300">
              Puedes encontrar nuestra oficina y conocernos mejor.
            </p>
            <button
              onClick={() => setIsMapModalOpen(true)}
              className="mt-4 inline-block px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-primary transition-colors duration-200 focus:outline-none"
            >
              Conoce nuestra oficina
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col items-center justify-center space-y-3 sm:space-y-0 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} Accus Ingeniería Eléctrica, Construcción, Ensayos eléctricos en la Minería y Fibra Óptica. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none"
            >
              Política de Privacidad
            </button>
          </div>
        </div>
      </footer>

      {/* Map Modal - Adaptado para móvil y PC */}
      {isMapModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMapModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-xl md:max-w-2xl lg:max-w-3xl max-h-[90vh] flex flex-col overflow-hidden rounded-none shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-xl font-bold text-primary">Nuestra Ubicación</h2>
              <button
                onClick={() => setIsMapModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none focus:outline-none"
                aria-label="Cerrar"
              >
                &times;
              </button>
            </div>
            <div className="flex-1 min-h-0">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50 text-center flex-shrink-0">
              <p className="text-gray-800 font-semibold">Dirección:</p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {officeAddress}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsPrivacyModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-primary">Política de Privacidad</h2>
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none focus:outline-none"
                aria-label="Cerrar"
              >
                &times;
              </button>
            </div>
            <div className="px-6 py-6 space-y-6 text-gray-700">
              <section>
                <h3 className="text-lg font-semibold text-primary mb-2">1. Información que Recopilamos</h3>
                <p className="text-sm leading-relaxed">
                  Recogemos únicamente la información que nos proporcionas voluntariamente a través de nuestro formulario de contacto, como tu nombre, correo electrónico y el mensaje que nos envíes.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-primary mb-2">2. Uso de la Información</h3>
                <p className="text-sm leading-relaxed">
                  Utilizamos tus datos exclusivamente para responder a tus consultas, proporcionar los servicios solicitados y mejorar tu experiencia con nosotros.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-primary mb-2">3. Protección de Datos</h3>
                <p className="text-sm leading-relaxed">
                  Implementamos medidas de seguridad técnicas para proteger tu información personal contra accesos no autorizados o alteraciones. No compartimos tus datos con terceros sin tu consentimiento explícito.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-primary mb-2">4. Tus Derechos</h3>
                <p className="text-sm leading-relaxed">
                  Tienes derecho a acceder, rectificar o solicitar la eliminación de tus datos personales en cualquier momento enviándonos un correo a jmsolutions@gmail.com.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-primary mb-2">5. Cookies</h3>
                <p className="text-sm leading-relaxed">
                  Nuestro sitio puede utilizar cookies esenciales para mejorar la navegación técnica y el rendimiento de la página.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-primary mb-2">6. Cambios en la Política</h3>
                <p className="text-sm leading-relaxed">
                  Nos reservamos el derecho de actualizar esta política. Te recomendamos revisarla periódicamente para estar informado sobre cómo protegemos tus datos.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-primary mb-2">7. Compromiso de Seguridad</h3>
                <p className="text-sm leading-relaxed">
                  Mantenemos un compromiso firme con la integridad de la información. Nuestros sistemas son auditados periódicamente para garantizar que se sigan los mejores estándares de la industria en cuanto a ciberseguridad.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-primary mb-2">8. Jurisdicción</h3>
                <p className="text-sm leading-relaxed">
                  Cualquier disputa relacionada con la privacidad de los datos se resolverá bajo las leyes vigentes y ante los tribunales competentes establecidos en nuestros términos de servicio generales.
                </p>
              </section>
            </div>
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="px-5 py-2 bg-primary text-white rounded-none hover:bg-primary/90 transition-colors font-medium"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;