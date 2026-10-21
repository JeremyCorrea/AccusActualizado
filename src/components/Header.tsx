
"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface HeaderProps {
  currentSlide?: number;
  setCurrentSlide?: (index: number) => void;
}

const navItems = [
  { label: 'INICIO', route: '/' },
  { label: 'SERVICIOS', route: '/servicios' },
  { label: 'PROYECTOS', route: '/proyectos' },
  { label: 'NOSOTROS', route: '/nosotros' },
  { label: 'CONTACTO', route: '/contacto' },
];

export default function Header({ currentSlide, setCurrentSlide }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  const logoSrc = "/logo.png";
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Páginas que tienen fondo blanco y requieren header oscuro por defecto
  const isLightBgPage = ['/servicios', '/contacto', '/proyectos', '/nosotros'].includes(pathname);
  const useDarkTheme = isScrolled || isLightBgPage;

  const handleNavClick = (route: string) => {
    router.push(route);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        setIsScrolled(currentScrollY > 50);

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out h-auto",
      !isVisible && "-translate-y-full",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : (isLightBgPage ? "bg-white/80 py-3" : "bg-transparent py-4")
    )}>
      {/* Barra superior técnica: Mail y Ubicación */}
      <div className={cn(
        "hidden md:flex items-center justify-between px-8 lg:px-24 py-1 border-b text-[10px] font-bold tracking-[0.1em] uppercase transition-colors",
        useDarkTheme ? "border-zinc-100 text-zinc-500" : "border-white/20 text-white"
      )}>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Mail size={12} className="text-[#AE1E24]" /> 
            accus@accusingenieria.cl
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={12} className="text-[#AE1E24]" /> 
          Coquimbo, Chile
        </div>
      </div>

      <div className="flex flex-col px-6 lg:px-[75px] mt-2 mb-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="relative h-12 w-36 cursor-pointer" onClick={() => handleNavClick('/')}>
              <img 
                src={logoSrc} 
                alt="Accus Logo" 
                className={cn("h-full w-full object-contain object-left transition-all", useDarkTheme ? "brightness-100" : "brightness-0 invert")} 
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={cn(
                  "text-[11px] font-black tracking-[0.2em] transition-all hover:text-[#AE1E24] uppercase",
                  pathname === item.route ? "text-[#AE1E24]" : (useDarkTheme ? "text-zinc-900" : "text-white")
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("rounded-none", useDarkTheme ? "text-zinc-900" : "text-white")}>
                  <Menu size={24} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white border-none shadow-2xl p-0 rounded-none overflow-hidden">
                {navItems.map((item) => (
                  <DropdownMenuItem
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={cn(
                      "py-5 px-8 font-black text-[11px] tracking-widest uppercase rounded-none focus:bg-zinc-50 focus:text-[#AE1E24]",
                      pathname === item.route ? "text-[#AE1E24] bg-zinc-50" : "text-zinc-900"
                    )}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
