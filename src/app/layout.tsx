import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Footer from '@/components/Footer'; 
import Header from '@/components/Header'; 
import FloatingIcons from '@/components/FloatingIcons'; // ◄ 1. Importamos tus botones flotantes

export const metadata: Metadata = {
  title: 'Accus Solutions',
  description: 'Expertos en Ingeniería Eléctrica, Construcción, Ensayos eléctricos en la Minería y Fibra Óptica.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head />
      <body className="font-body antialiased">
        <Header /> 

        {children}
        
        {/* ◄ 2. Añadimos el componente aquí para que sea visible globalmente */}
        <FloatingIcons /> 
        
        <ScrollToTopButton />
        <Toaster />
        <Footer /> 
      </body>
    </html>
  );
}