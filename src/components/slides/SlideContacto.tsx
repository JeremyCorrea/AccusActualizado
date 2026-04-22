"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

const formSchema = z.object({
  topic: z.string().min(2, { message: "El tema debe tener al menos 2 caracteres." }),
  firstName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  lastName: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  phone: z.string().min(8, { message: "El teléfono debe tener al menos 8 dígitos." }).optional().or(z.literal('')),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }).max(500),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar las políticas de privacidad.",
  }),
  notARobot: z.boolean().refine((val) => val === true, {
    message: "Debes confirmar que no eres un robot.",
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
      notARobot: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Te responderemos a la brevedad.",
    })
    form.reset()
  }

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 pt-24 md:pt-8 overflow-y-auto">
      <Card className="w-full max-w-4xl shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold">Póngase en contacto con nosotros</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tema</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Consulta de servicio" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu apellido" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@correo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono (Opcional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Tu número de teléfono" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Escribe tu mensaje aquí..."
                            className="resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <FormField
                    control={form.control}
                    name="privacyPolicy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Acepto las políticas de privacidad
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="notARobot"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            No soy un robot
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg">Enviar</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex-col items-center justify-center pt-6">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-widest">Nuestros Clientes</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-muted-foreground font-medium">
                <span>FUNDACIÓN AMERICAN FOR INTERNATIONAL DEVELOPMENT</span>
                <span>AngloAmerican</span>
                <span>Cbb</span>
                <span>arauco CELULOSA</span>
            </div>
        </CardFooter>
      </Card>
    </section>
  )
}
