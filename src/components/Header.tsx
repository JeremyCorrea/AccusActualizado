
"use client";

import Image from 'next/image';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import imageData from '@/app/lib/placeholder-images.json';

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
  const { logo } = imageData;
  
  const handleNavClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-24 px-6 md:px-16 bg-transparent text-white">
      <div className="flex items-center gap-4">
        <div 
          className="relative h-12 w-32 md:h-16 md:w-40 cursor-pointer"
          onClick={() => handleNavClick(0)}
        >
          <Image
            src={logo.src}
            alt="Accus Logo"
            fill
            className="object-contain object-left"
            priority
            data-ai-hint={logo['data-ai-hint']}
          />
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
          <DropdownMenuContent 
            align="end" 
            className="bg-[#AE1E24] text-white border-none w-44 rounded-none mt-4 p-0 pb-4 shadow-2xl overflow-hidden"
          >
            {navItems.map((item) => (
              <DropdownMenuItem
                key={item.slideIndex}
                onClick={() => handleNavClick(item.slideIndex)}
                disabled={currentSlide === item.slideIndex}
                className={cn(
                  "cursor-pointer py-4 pr-3 pl-8 rounded-none text-right justify-end font-bold text-[10px] tracking-[0.2em] border-none uppercase outline-none ring-0 transition-all duration-300 ease-in-out relative group",
                  "mx-2 mt-2",
                  "focus:bg-gradient-to-l focus:from-black/40 focus:via-black/20 focus:to-transparent focus:text-white",
                  "data-[highlighted]:bg-gradient-to-l data-[highlighted]:from-black/40 data-[highlighted]:via-black/20 data-[highlighted]:to-transparent data-[highlighted]:text-white"
                )}
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
