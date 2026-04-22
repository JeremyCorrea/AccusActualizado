"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (index: number) => {
    setCurrentSlide(index);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-4 md:px-8 bg-primary text-primary-foreground shadow-md">
      <div className="text-3xl font-bold tracking-wider">
        Accus
      </div>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/90">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </SheetTrigger>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Button
              key={item.slideIndex}
              variant="ghost"
              onClick={() => handleNavClick(item.slideIndex)}
              className={`text-lg hover:bg-primary/90 ${currentSlide === item.slideIndex ? 'underline' : ''}`}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <SheetContent side="right" className="bg-primary text-primary-foreground border-l-0">
          <SheetHeader>
            <SheetTitle className="text-primary-foreground text-2xl">Menú</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col items-start space-y-4 mt-8">
            {navItems.map((item) => (
              <Button
                key={item.slideIndex}
                variant="ghost"
                onClick={() => handleNavClick(item.slideIndex)}
                className={`text-xl w-full justify-start hover:bg-primary/90 ${currentSlide === item.slideIndex ? 'underline' : ''}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
