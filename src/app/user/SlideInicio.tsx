"use client";

import { Button } from "@/components/ui/button"
import imageData from '@/app/lib/placeholder-images.json';

interface SlideInicioProps {
  setCurrentSlide: (index: number) => void;
}

export default function SlideInicio({ setCurrentSlide }: SlideInicioProps) {
  const { inicio } = imageData;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={inicio.src}
      >
        <source src="/videos/2073129-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      
      <div className="absolute inset-0 bg-black/45" />
      
      <div className="relative z-10 w-full max-w-xl mt-20 md:mt-0">
        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-normal text-white mb-4 leading-[1] tracking-tight">
          Impulsamos Futuro
        </h1>
        <p className="text-sm md:text-base text-white mb-10 max-w-md font-normal leading-tight opacity-95">
          Expertos en Ingeniería Eléctrica, Construcción, Ensayos eléctricos en la Minería y Fibra Óptica.
        </p>
        <Button 
          size="lg" 
          onClick={() => setCurrentSlide(4)} 
          className="text-[10px] md:text-xs px-8 py-2.5 bg-[#AE1E24] text-white hover:bg-[#AE1E24]/90 rounded-none font-bold uppercase tracking-[0.2em] h-auto border-none shadow-none"
        >
          CONTACTO
        </Button>
      </div>
    </section>
  )
}
