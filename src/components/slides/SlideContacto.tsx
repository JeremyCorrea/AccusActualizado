"use client"

import Image from 'next/image';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowRight, Square } from 'lucide-react';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import imageData from '@/app/lib/placeholder-images.json';


const formSchema = z.object({
  topic: z.string().min(2, { message: "El tema debe tener al menos 2 caracteres." }),
  firstName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  lastName: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  phone: z.string().min(8, { message: "El teléfono debe tener al menos 8 dígitos." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }).max(500),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar las políticas de privacidad.",
  }),
})

export default function SlideContacto() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      privacyPolicy: false,
    },
  })
    const { contacto } = imageData;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Te responderemos a la brevedad.",
    })
    form.reset()
  }

  const inputStyles = "bg-transparent border-0 border-b border-white/70 rounded-none px-0 text-base text-white focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary transition";

  return (
    <section className="relative min-h-screen w-full flex items-center justify-start text-white overflow-hidden">
        <Image
            src={contacto.src}
            alt="Fiber optics background"
            fill
            className="object-cover"
            data-ai-hint={contacto['data-ai-hint']}
        />
        <div className="absolute inset-0 bg-black/70" />
      
        <div className="relative z-10 w-full max-w-lg px-8 md:px-16 pt-28 pb-12">
            <div className="flex items-center gap-3 mb-8">
                <Square fill="white" className="w-3 h-3 text-white" />
                <h1 className="text-3xl md:text-4xl font-bold">Póngase en contacto con nosotros</h1>
            </div>

            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-white/90 font-light">Tema*</FormLabel>
                        <FormControl>
                        <Input {...field} className={inputStyles} />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                    </FormItem>
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white/90 font-light">Nombre*</FormLabel>
                            <FormControl>
                                <Input {...field} className={inputStyles} />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white/90 font-light">Apellido*</FormLabel>
                            <FormControl>
                                <Input {...field} className={inputStyles} />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                        </FormItem>
                    )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white/90 font-light">Correo Electrónico*</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} className={inputStyles} />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white/90 font-light">Número de Teléfono*</FormLabel>
                            <FormControl>
                                <Input type="tel" {...field} className={inputStyles} />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white/90 font-light">Mensaje*</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Escriba su mensaje"
                                    className={`${inputStyles} h-20 resize-none placeholder:text-white/60`}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                        </FormItem>
                    )}
                />
                
                <div className="space-y-4 pt-4">
                    <FormField
                        control={form.control}
                        name="privacyPolicy"
                        render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="h-4 w-4 rounded-none border-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-primary"
                            />
                            </FormControl>
                            <FormLabel className="font-light text-sm text-white/80">
                            Al seleccionar esta casilla, confirmo que he leído y acepto las politicas de privacidad
                            </FormLabel>
                        </FormItem>
                        )}
                    />
                </div>
                
                <Button type="submit" size="lg" className="px-10 bg-primary hover:bg-primary/90">
                    Enviar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </form>
            </Form>
        </div>

        <div className="absolute bottom-6 w-full z-10">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-white/70 font-medium text-sm">
                <span>FUNDACIÓN AMERICAN FOR INTERNATIONAL DEVELOPMENT</span>
                <span>AngloAmerican</span>
                <span>Cbb</span>
                <span>arauco CELULOSA</span>
            </div>
        </div>
    </section>
  )
}
