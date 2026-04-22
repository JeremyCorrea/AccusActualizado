import { Button } from "@/components/ui/button"

interface SlideInicioProps {
  setCurrentSlide: (index: number) => void;
}

export default function SlideInicio({ setCurrentSlide }: SlideInicioProps) {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center p-4 pt-20">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-4 animate-fade-in-down">
          Impulsamos Futuro
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Expertos en Ingeniería Eléctrica, Construcción, Ensayos eléctricos en la Minería y Fibra Óptica.
        </p>
        <Button 
          size="lg" 
          onClick={() => setCurrentSlide(4)} 
          className="text-lg px-8 py-6"
        >
          CONTACTO
        </Button>
      </div>
    </section>
  )
}
