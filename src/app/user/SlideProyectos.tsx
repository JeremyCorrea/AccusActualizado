import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import imageData from '@/app/lib/placeholder-images.json';

export default function SlideProyectos() {
    const { proyectos } = imageData;
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center p-4 pt-20">
      <Image
        src={proyectos.src}
        alt="Power lines background"
        fill
        className="object-cover"
        data-ai-hint={proyectos['data-ai-hint']}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Proyectos</h1>
        
        <Card className="shadow-2xl bg-background/80 backdrop-blur-sm text-left">
          <CardHeader>
            <CardTitle className="text-3xl text-primary">Transformadores de corriente</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/80 leading-relaxed">
              En ACCUS tenemos trayectorias en proyecto relacionados a Ensayos Eléctricos HIPOT a Bobinados, Medida de humedad del aceite, Resistencia de enrollados en frío y Factor de potencia del aislamiento. Nuestra experiencia garantiza resultados precisos y confiables, cumpliendo con los más altos estándares de la industria.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
