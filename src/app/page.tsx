"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import SlideInicio from '@/app/user/SlideInicio';
import SlideServicios from '@/app/user/SlideServicios';
import SlideProyectos from '@/app/user/SlideProyectos';
import SlideNosotros from '@/app/user/SlideNosotros';
import SlideContacto from '@/app/user/SlideContacto';
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
