"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
      className={`fixed bottom-4 left-4 z-50 flex flex-col items-center transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group flex flex-col items-center justify-center focus:outline-none"
        aria-label="Scroll to top"
      >
        {/* Texto superior: Ahora tiene un drop-shadow para que se lea sobre cualquier color */}
        <span className="text-[10px] text-white/70 uppercase tracking-[0.3em] mb-2 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Subir
        </span>

        {/* Círculo del botón: Al hacer hover se vuelve negro opaco con borde blanco más definido */}
        <div className="p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 group-hover:border-white/50 group-hover:bg-black/90">
          <ArrowUp 
            size={24} 
            strokeWidth={1.5} 
            className="group-hover:text-white transition-colors duration-300"
          />
        </div>
      </button>
    </div>
  );
}