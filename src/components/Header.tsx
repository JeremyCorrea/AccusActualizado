"use client";

import { Menu } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-4 md:px-8 bg-transparent text-white">
      <div className="text-3xl font-bold tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        Accus
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-primary text-primary-foreground border-primary-foreground/20 mr-4">
          {navItems.map((item) => (
            <DropdownMenuItem
              key={item.slideIndex}
              onClick={() => handleNavClick(item.slideIndex)}
              disabled={currentSlide === item.slideIndex}
              className="cursor-pointer focus:bg-white/10"
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
