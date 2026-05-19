import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import imageData from '@/app/lib/placeholder-images.json';

const aboutItems = [
  {
    title: "Quienes Somos",
    description: "Somos un equipo de profesionales apasionados por la innovación y la excelencia en ingeniería.",
  },
  {
    title: "Nuestros Valores",
    description: "Compromiso, calidad, seguridad e integridad son los pilares que guían cada uno de nuestros proyectos.",
  },
  {
    title: "Nuestra Gente",
    description: "Fomentamos un ambiente de colaboración y crecimiento continuo para nuestro talentoso equipo.",
  },
  {
    title: "Nuestra Evolución",
    description: "Desde nuestros inicios, hemos crecido y evolucionado para enfrentar los desafíos del futuro.",
  },
]

export default function SlideNosotros() {
    const { nosotros } = imageData;
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 pt-24 md:pt-8 overflow-y-auto">
        <Image
            src={nosotros.src}
            alt="Team of engineers background"
            fill
            className="object-cover"
            data-ai-hint={nosotros['data-ai-hint']}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white">Nosotros</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {aboutItems.map((item, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
            
            <blockquote className="max-w-4xl mx-auto text-lg md:text-xl italic text-white/80 my-12 border-l-4 border-primary pl-6 text-left bg-black/30 p-4 rounded-r-lg">
              “ACCUS. Cada día, vamos más allá de la ingeniería y animamos a nuestro equipo a hacer lo mismo, con la meta de construir juntos un mundo sostenible.”
            </blockquote>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">CONOZCA A NUESTRO EQUIPO</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Nuestro Equipo</AlertDialogTitle>
                  <AlertDialogDescription>
                    Nuestro equipo está formado por profesionales apasionados y altamente cualificados, dedicados a ofrecer soluciones de ingeniería de vanguardia. Creemos en el poder de la colaboración y la diversidad para impulsar la innovación y alcanzar la excelencia en cada proyecto.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Cerrar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        </div>
    </section>
  )
}
