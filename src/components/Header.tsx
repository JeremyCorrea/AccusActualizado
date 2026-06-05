"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // Importación para redirecciones inteligentes
import Image from 'next/image';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

// Opción 1: Hacemos que las props orientadas a sliders sean opcionales usando "?"
interface HeaderProps {
  currentSlide?: number;
  setCurrentSlide?: (index: number) => void;
}

const navItems = [
  { label: 'INICIO', slideIndex: 0, route: '/' },
  { label: 'SERVICIOS', slideIndex: 1, route: '/servicios' },
  { label: 'PROYECTOS', slideIndex: 2, route: '/proyectos' },
  { label: 'NOSOTROS', slideIndex: 3, route: '/nosotros' }, // Cambia a la ruta correspondiente si es otra página
  { label: 'CONTACTO', slideIndex: 4, route: '/contacto' },  // Cambia a la ruta correspondiente si es otra página
];

export default function Header({ currentSlide, setCurrentSlide }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  const logoSrc = "/logo.png";
  const logoPequenoSrc = "/logoPequeño.png"; 
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navegación adaptativa inteligente
  const handleNavClick = (index: number, route: string) => {
    if (setCurrentSlide) {
      // Si el componente recibe la función (Landing principal), ejecuta el cambio de slide
      setCurrentSlide(index);
    } else {
      // Si estamos en otra página (/servicios, /proyectos), redirige de forma nativa
      // Pasamos un query parameter (?slide=X) por si tu Home necesita saber a qué slide inicial dirigirse
      if (route === '/' && index !== 0) {
        router.push(`/?slide=${index}`);
      } else {
        router.push(route);
      }
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // Evaluamos de forma segura si el botón debe figurar como activo/deshabilitado
  const checkIsSelected = (item: typeof navItems[0]) => {
    if (setCurrentSlide && currentSlide !== undefined) {
      return currentSlide === item.slideIndex;
    }
    return pathname === item.route;
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 flex flex-col h-auto py-2 px-3 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-transparent text-white transition-transform duration-500 ease-in-out",
      !isVisible && "-translate-y-full"
    )}>
      {/* Fila superior: texto de contacto */}
      <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 md:gap-4 text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold tracking-[0.05em] sm:tracking-[0.15em] uppercase text-white w-full pb-1 border-b border-white/20 mb-1">
        <div className="flex items-center gap-1">
          <Phone className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
          <span>+56 992595761</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
          <span>accus@accusingenieria.cl</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
          <span className="whitespace-nowrap">Pasaje Murano 3770, Coquimbo</span>
        </div>
      </div>

      {/* Fila inferior: Logo + Botones */}
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center gap-1 md:gap-2">
          <div
            className="relative h-12 w-28 sm:h-20 sm:w-56 md:h-24 md:w-64 lg:h-28 lg:w-72 cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleNavClick(0, '/')}
          >
            {/* Logo para móviles */}
            <img
              src={logoPequenoSrc}
              alt="Accus Logo Corto"
              className="h-full w-full object-contain object-left block sm:hidden"
            />
            
            {/* Logo original */}
            <img
              src={logoSrc}
              alt="Accus Logo"
              className="h-full w-full object-contain object-left hidden sm:block"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0 text-white h-8 w-8 sm:h-10 sm:w-10">
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#AE1E24] text-white border-none w-44 rounded-none mt-4 p-0 pb-4 shadow-2xl overflow-hidden"
            >
              {navItems.map((item) => {
                const isSelected = checkIsSelected(item);
                
                return (
                  <DropdownMenuItem
                    key={item.slideIndex}
                    onClick={() => handleNavClick(item.slideIndex, item.route)}
                    disabled={isSelected}
                    className={cn(
                      "cursor-pointer py-4 pr-3 pl-8 rounded-none text-right justify-end font-bold text-[10px] tracking-[0.05em] border-none uppercase outline-none ring-0 transition-all duration-300 ease-in-out relative group",
                      "mx-2 mt-2",
                      "focus:bg-gradient-to-l focus:from-black/40 focus:via-black/20 focus:to-transparent focus:text-white",
                      "data-[highlighted]:bg-gradient-to-l data-[highlighted]:from-black/40 data-[highlighted]:via-black/20 data-[highlighted]:to-transparent data-[highlighted]:text-white",
                      isSelected && "bg-gradient-to-l from-black/40 via-black/20 to-transparent text-white opacity-100 pointer-events-none"
                    )}
                  >
                    {item.label}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}