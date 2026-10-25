
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, MapPin, Smartphone, Mail } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";
import imageData from '@/app/lib/placeholder-images.json';

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

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Mínimo 2 caracteres." }),
  lastName: z.string().min(2, { message: "Mínimo 2 caracteres." }),
  email: z.string().email({ message: "Correo no válido." }),
  phone: z.string().min(8, { message: "Teléfono no válido." }),
  message: z.string().min(10, { message: "Mensaje muy corto." }),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar las políticas.",
  }),
  recaptcha: z.string().min(1, { message: "Completa el captcha." }),
})

export default function ContactoPage() {
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Mensaje Enviado",
      description: "Nos pondremos en contacto pronto.",
    })
    form.reset()
  }

  const inputStyles = "bg-white/60 border border-zinc-200 rounded-none px-4 py-4 text-sm text-zinc-900 focus:border-[#AE1E24] focus:ring-0 transition-all backdrop-blur-md";

  if (!isMounted) return null;

  return (
    <section className="relative min-h-screen w-full bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Lado Izquierdo: Información Corporativa */}
        <div className="space-y-8 lg:space-y-12 lg:pt-10">
          <div>
            <span className="text-[#AE1E24] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Hablemos</span>
            <h1 className="text-4xl md:text-7xl font-bold text-zinc-900 leading-[1.1] tracking-tighter">
              Conectemos con <br /> su proyecto.
            </h1>
          </div>

          <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-lg">
            Estamos preparados para abordar desafíos técnicos complejos en cualquier punto del territorio nacional. Nuestro equipo técnico responderá su solicitud a la brevedad.
          </p>

          <div className="space-y-6 lg:space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-zinc-50 flex items-center justify-center group-hover:bg-[#AE1E24] transition-colors">
                <MapPin className="text-[#AE1E24] group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Ubicación</p>
                <p className="text-zinc-900 font-bold">Pasaje Murano 3770, Coquimbo</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-zinc-50 flex items-center justify-center group-hover:bg-[#AE1E24] transition-colors">
                <Smartphone className="text-[#AE1E24] group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Teléfono</p>
                <p className="text-zinc-900 font-bold">+56 992595761</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-zinc-50 flex items-center justify-center group-hover:bg-[#AE1E24] transition-colors">
                <Mail className="text-[#AE1E24] group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Correo</p>
                <p className="text-zinc-900 font-bold">accus@accusingenieria.cl</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Formulario con Fondo de Imagen y Efecto Oscuro */}
        <div className="relative p-6 md:p-10 border border-zinc-100 shadow-2xl overflow-hidden group min-h-[650px] flex flex-col justify-center bg-zinc-900">
          
          {/* Capa de Imagen de Fondo */}
          <div className="absolute inset-0 z-0">
            <Image 
              src={imageData.contacto.src}
              alt="Industrial Background"
              fill
              className="object-cover opacity-60 transition-all duration-1000"
            />
            {/* Efecto de Oscuridad y Gradiente para Contraste */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10">
            <div className="mb-6 lg:mb-10">
              <h2 className="text-2xl font-bold text-white tracking-tight">Solicitud de contacto</h2>
              <div className="w-12 h-1 bg-[#AE1E24] mt-3" />
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-bold text-[10px] uppercase tracking-widest">Nombre</FormLabel>
                        <FormControl><Input {...field} className={inputStyles} /></FormControl>
                        <FormMessage className="text-red-400 text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-bold text-[10px] uppercase tracking-widest">Apellido</FormLabel>
                        <FormControl><Input {...field} className={inputStyles} /></FormControl>
                        <FormMessage className="text-red-400 text-[10px]" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-bold text-[10px] uppercase tracking-widest">Email Corporativo</FormLabel>
                        <FormControl><Input type="email" {...field} className={inputStyles} /></FormControl>
                        <FormMessage className="text-red-400 text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-bold text-[10px] uppercase tracking-widest">Teléfono</FormLabel>
                        <FormControl><Input {...field} className={inputStyles} /></FormControl>
                        <FormMessage className="text-red-400 text-[10px]" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-bold text-[10px] uppercase tracking-widest">Mensaje / Consulta</FormLabel>
                      <FormControl><Textarea {...field} className={`${inputStyles} h-28 lg:h-32 resize-none`} /></FormControl>
                      <FormMessage className="text-red-400 text-[10px]" />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="privacyPolicy"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} className="rounded-none border-zinc-500 data-[state=checked]:bg-[#AE1E24] data-[state=checked]:border-[#AE1E24]" />
                        </FormControl>
                        <FormLabel className="text-[10px] text-zinc-300 font-medium leading-tight">
                          Acepto el procesamiento de mis datos según la política de privacidad corporativa.
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <div className="overflow-hidden bg-white/10 p-1 border border-white/20 backdrop-blur-md scale-90 origin-left">
                    <ReCAPTCHA 
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
                      theme="dark"
                      onChange={(val) => form.setValue("recaptcha", val || "")} 
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-[#AE1E24] hover:bg-[#AE1E24]/90 text-white rounded-none py-6 lg:py-7 text-xs font-bold tracking-[0.3em] uppercase transition-all shadow-lg hover:shadow-[#AE1E24]/20 active:scale-[0.98]">
                  Enviar Solicitud <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
