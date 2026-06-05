"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, MapPin, Smartphone, Mail } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import imageData from '@/app/lib/placeholder-images.json';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  lastName: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  phone: z.string().min(8, { message: "El teléfono debe tener al menos 8 dígitos." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }).max(500),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar las políticas de privacidad.",
  }),
  recaptcha: z.string().min(1, { message: "Por favor, completa el captcha de seguridad." }),
})

const logos = [
    { src: '/clientes/logo_1.webp', alt: 'Fundación Minera Los Pelamidos' },
    { src: '/clientes/logo_2.webp', alt: 'Antimásiva Mineral' },
    { src: '/clientes/logo_3.webp', alt: 'AngloAmerican' },
    { src: '/clientes/logo_4.webp', alt: 'Cbb' },
    { src: '/clientes/logo_5.webp', alt: 'Arauco Celulosa' },
    { src: '/clientes/logo_6.webp', alt: 'San José' },
    { src: '/clientes/logo_7.webp', alt: 'Cap Huachipato' },
    { src: '/clientes/logo_8.webp', alt: 'Universidad de Chile' },
    { src: '/clientes/logo_9.webp', alt: 'Agrosonda' },
    { src: '/clientes/logo_10.webp', alt: 'Abengoa' },
    { src: '/clientes/logo_11.webp', alt: 'Elecnor' },
    { src: '/clientes/logo_12.webp', alt: 'El Golfo' },
    { src: '/clientes/logo_13.webp', alt: 'Salmones Camanchaca' },
    { src: '/clientes/logo_14.webp', alt: 'Northstar Energy' },
    { src: '/clientes/logo_15.webp', alt: 'Parque Eolico Punta Palmeras' },
    { src: '/clientes/logo_16.webp', alt: 'Parque Eolico San Pedro' },
];

export default function ContactoPage() {
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

  // Evita que el servidor intente procesar componentes dinámicos de terceros como el captcha
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      privacyPolicy: false,
      recaptcha: "",
    },
  });

  const { contacto, logo } = imageData;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Te responderemos a la brevedad.",
    })
    form.reset()
  }

  const inputStyles = "bg-transparent border-0 border-b border-white/70 rounded-none px-0 text-base text-white focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary transition";

  // Retornamos un esqueleto de carga oscuro idéntico para que visualmente no haya "parpadeo"
  if (!isMounted) {
    return <div className="min-h-screen w-full bg-black" />;
  }

  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden py-24 pb-32 md:pb-24">
        <Image
          src={contacto.src}
          alt="Fiber optics background"
          fill
          className="object-cover"
          priority
          data-ai-hint={contacto['data-ai-hint']}
        />
        <div className="absolute inset-0 bg-black/75" />
        
        <div className="relative z-10 w-full max-w-7xl px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Information Card */}
          <div className="bg-black/30 backdrop-blur-md p-8 md:p-12 border border-white/10 rounded-sm shadow-2xl flex flex-col items-center text-center">
            <div className="relative h-16 w-48 mb-6">
              <Image
                src={logo.src}
                alt="Accus Logo"
                fill
                className="object-contain"
                data-ai-hint={logo['data-ai-hint']}
              />
            </div>
            
            <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4">
              ¿POR QUÉ ELEGIRNOS?
            </span>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight uppercase text-white">
              ¡DEDICADOS A PRESTAR SERVICIOS DE CALIDAD & EFICIENCIA!
            </h2>
            
            <p className="text-sm text-white/80 font-light mb-10 max-w-md leading-relaxed">
              Nuestro deseo es prestar un servicio eficiente y apropiado a las necesidades y requerimientos en diversas áreas de la ingeniería, recorriendo Chile con personal altamente calificado y capacitado, especializado en el desarrollo de los distintos tipos de proyectos.
            </p>
            
            <div className="w-full space-y-5 text-left max-w-sm mx-auto mb-12">
              <div className="flex items-center gap-4">
                <MapPin className="text-primary h-5 w-5 shrink-0" />
                <span className="text-sm font-light">Pasaje Murano 3770, Coquimbo</span>
              </div>
              <div className="flex items-center gap-4">
                <Smartphone className="text-primary h-5 w-5 shrink-0" />
                <span className="text-sm font-light">+56 992595761</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-primary h-5 w-5 shrink-0" />
                <span className="text-sm font-light">accus@accusingenieria.cl</span>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 w-full">
              <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">
                COTIZA CON NOSOTROS
              </span>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                ¿NECESITAS AYUDA CON TU PROYECTO?
              </h3>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full max-w-lg lg:ml-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-8">
              Póngase en contacto con nosotros
            </h1>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90 font-semibold text-xs">Nombre*</FormLabel>
                        <FormControl>
                          <Input {...field} className={inputStyles} />
                        </FormControl>
                        <FormMessage className="text-red-400 text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90 font-semibold text-xs">Apellido*</FormLabel>
                        <FormControl>
                          <Input {...field} className={inputStyles} />
                        </FormControl>
                        <FormMessage className="text-red-400 text-[10px]" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90 font-semibold text-xs">Correo Electrónico*</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} className={inputStyles} />
                      </FormControl>
                      <FormMessage className="text-red-400 text-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90 font-semibold text-xs">Número de Teléfono*</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} className={inputStyles} />
                      </FormControl>
                      <FormMessage className="text-red-400 text-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90 font-semibold text-xs">Mensaje*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Escriba su mensaje"
                          className={`${inputStyles} h-20 resize-none placeholder:text-white/60 text-sm`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-[10px]" />
                    </FormItem>
                  )}
                />
                
                <div className="space-y-4 pt-4">
                  <FormField
                    control={form.control}
                    name="privacyPolicy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="h-4 w-4 rounded-none border-white/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                        </FormControl>
                        <FormLabel className="font-light text-[10px] text-white/60 leading-tight">
                          Al seleccionar esta casilla, confirmo que he leído y acepto las políticas de privacidad.
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>

                {/* reCAPTCHA Section with Dark Theme */}
                <div className="pt-2">
                  <FormField
                    control={form.control}
                    name="recaptcha"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            theme="dark"
                            onChange={(value) => field.onChange(value || "")}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-[10px]" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full md:w-auto px-10 bg-primary hover:bg-primary/90 rounded-none text-[10px] md:text-xs font-bold tracking-widest uppercase h-auto py-4">
                  Enviar Mensaje <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Carrusel infinito de marcas al pie de página */}
        <div className="absolute bottom-6 w-full z-10 overflow-hidden">
          <div className="flex w-max animate-infinite-scroll">
            {logos.map((logo, idx) => (
              <div
                key={`original-${idx}`}
                className="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center"
                style={{ minWidth: '90px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-7 md:max-h-8 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
            {logos.map((logo, idx) => (
              <div
                key={`clone-${idx}`}
                className="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center"
                style={{ minWidth: '90px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-7 md:max-h-8 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 25s linear infinite;
        }
      `}</style>
    </>
  );
}