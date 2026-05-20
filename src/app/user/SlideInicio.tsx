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
        <source src="https://videos.pexels.com/video-files/3254008/3254008-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      {/* Overlay oscuro translúcido solicitado rgba(0,0,0,0.45) */}
      <div className="absolute inset-0 bg-black/45" />
      
      <div className="relative z-10 w-full max-w-4xl mt-20 md:mt-0">
        <h1 className="text-5xl md:text-7xl lg:text-[110px] font-normal text-white mb-4 leading-[1] tracking-tight">
          Impulsamos Futuro
        </h1>
        <p className="text-base md:text-xl text-white mb-10 max-w-xl font-normal leading-tight opacity-95">
          Expertos en Ingeniería Eléctrica, Construcción, Ensayos eléctricos en la Minería y Fibra Óptica.
        </p>
        <Button 
          size="lg" 
          onClick={() => setCurrentSlide(4)} 
          className="text-sm md:text-base px-10 py-4 bg-[#AE1E24] text-white hover:bg-[#AE1E24]/90 rounded-none font-bold uppercase tracking-widest h-auto border-none shadow-none"
        >
          CONTACTO
        </Button>
      </div>
    </section>
  )
}
