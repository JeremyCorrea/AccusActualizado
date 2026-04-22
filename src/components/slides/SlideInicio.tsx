import Image from 'next/image';
import { Button } from "@/components/ui/button"
import imageData from '@/app/lib/placeholder-images.json';

interface SlideInicioProps {
  setCurrentSlide: (index: number) => void;
}

export default function SlideInicio({ setCurrentSlide }: SlideInicioProps) {
  const { inicio } = imageData;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center p-4">
      <Image
        src={inicio.src}
        alt="Power station background"
        fill
        className="object-cover"
        data-ai-hint={inicio['data-ai-hint']}
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-fade-in-down">
          Impulsamos Futuro
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Expertos en Ingeniería Eléctrica, Construcción, Ensayos eléctricos en la Minería y Fibra Óptica.
        </p>
        <Button 
          size="lg" 
          onClick={() => setCurrentSlide(4)} 
          className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          CONTACTO
        </Button>
      </div>
    </section>
  )
}
