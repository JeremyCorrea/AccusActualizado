"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import SlideInicio from '@/components/slides/SlideInicio';
import SlideServicios from '@/components/slides/SlideServicios';
import SlideProyectos from '@/components/slides/SlideProyectos';
import SlideNosotros from '@/components/slides/SlideNosotros';
import SlideContacto from '@/components/slides/SlideContacto';
import FloatingIcons from '@/components/FloatingIcons';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <SlideInicio setCurrentSlide={setCurrentSlide} />;
      case 1:
        return <SlideServicios />;
      case 2:
        return <SlideProyectos />;
      case 3:
        return <SlideNosotros />;
      case 4:
        return <SlideContacto />;
      default:
        return <SlideInicio setCurrentSlide={setCurrentSlide} />;
    }
  };

  return (
    <div className="relative">
      <Header currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <main>
        {renderSlide()}
      </main>
      {currentSlide !== 4 && <FloatingIcons setCurrentSlide={setCurrentSlide} />}
    </div>
  );
}
