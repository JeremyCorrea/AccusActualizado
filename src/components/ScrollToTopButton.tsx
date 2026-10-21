
"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Detección de scroll para mostrar el botón
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detección de proximidad al footer
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const totalHeight = document.documentElement.scrollHeight;
      
      // Si estamos a menos de 120px del fondo, lo marcamos para ocultar
      setIsNearBottom(scrollPosition >= totalHeight - 120);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div 
      className={cn(
        "fixed bottom-4 left-4 z-50 flex flex-col items-center transition-all duration-500 ease-in-out",
        (isVisible && !isNearBottom) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <button
        onClick={scrollToTop}
        className="group flex flex-col items-center justify-center focus:outline-none"
        aria-label="Scroll to top"
      >
        {/* Texto superior */}
        <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] mb-2 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Subir
        </span>

        {/* Círculo del botón */}
        <div className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200 text-zinc-900 shadow-xl transition-all duration-300 group-hover:border-[#AE1E24] group-hover:bg-white group-hover:text-[#AE1E24] active:scale-90">
          <ArrowUp 
            size={20} 
            strokeWidth={2} 
            className="transition-colors duration-300"
          />
        </div>
      </button>
    </div>
  );
}
