import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import imageData from '@/app/lib/placeholder-images.json';

const services = [
  { title: "Ingeniería Eléctrica", description: "Diseño y planificación de sistemas eléctricos eficientes y seguros." },
  { title: "Construcción", description: "Ejecución de proyectos de infraestructura eléctrica con los más altos estándares." },
  { title: "Ensayos Eléctricos Mina", description: "Pruebas y diagnósticos especializados para el sector minero." },
  { title: "Fibra Óptica", description: "Instalación y mantenimiento de redes de comunicación de alta velocidad." },
]

export default function SlideServicios() {
    const { servicios } = imageData;
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 pt-24 md:pt-8 overflow-y-auto">
        <Image
            src={servicios.src}
            alt="Electrical engineering background"
            fill
            className="object-cover"
            data-ai-hint={servicios['data-ai-hint']}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white">Servicios</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
                <Card key={index} className="bg-background/80 backdrop-blur-sm border-t-4 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col text-left">
                <CardHeader>
                    <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
            
            <p className="max-w-4xl mx-auto text-lg text-white/90">
            En ACCUS ofrecemos un servicio integral de ingeniería eléctrica, diseñado para garantizar seguridad, calidad, eficiencia y cumplimiento normativo en cada proyecto.
            </p>
      </div>
    </section>
  )
}
