
"use client";

import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

const navItems = [
  { label: 'INICIO', slideIndex: 0 },
  { label: 'SERVICIOS', slideIndex: 1 },
  { label: 'PROYECTOS', slideIndex: 2 },
  { label: 'NOSOTROS', slideIndex: 3 },
  { label: 'CONTACTO', slideIndex: 4 },
];

export default function Header({ currentSlide, setCurrentSlide }: HeaderProps) {
  const handleNavClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-24 px-6 md:px-16 bg-transparent text-white">
      <div className="flex items-center gap-4">
        <div className="text-4xl font-bold tracking-tighter">
          Accus
        </div>
        <div className="hidden md:flex flex-col text-[10px] leading-tight font-medium border-l border-white/30 pl-4 py-1 uppercase opacity-80">
          <span>Ingeniería Eléctrica y Construcción</span>
          <span>Ensayos Eléctricos en Minería y</span>
          <span>Fibra Óptica</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
          <Search className="h-6 w-6" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0 text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#AE1E24] text-white border-none w-56 rounded-none mt-4 p-0 shadow-2xl overflow-hidden">
            {navItems.map((item) => (
              <DropdownMenuItem
                key={item.slideIndex}
                onClick={() => handleNavClick(item.slideIndex)}
                disabled={currentSlide === item.slideIndex}
                className="cursor-pointer py-6 px-8 rounded-none text-right justify-end font-bold text-[10px] tracking-[0.2em] border-b border-white/10 last:border-0 uppercase transition-all duration-300 ease-in-out focus:bg-gradient-to-l focus:from-black/40 focus:via-black/20 focus:to-transparent outline-none ring-0 data-[highlighted]:bg-gradient-to-l data-[highlighted]:from-black/40 data-[highlighted]:via-black/20 data-[highlighted]:to-transparent"
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
