import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{
        backgroundImage: 'url(https://customer-assets.emergentagent.com/job_visa-journey-21/artifacts/1cxp0rfn_d0b6cf3eda52c245c1aac220d546952d.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-slate-900/75"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Tu Visa a Estados Unidos
            <span className="text-blue-400"> Más Fácil</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
            Asesoría profesional para visas de turista y trabajo. 
            Te acompañamos en cada paso hasta que obtengas tu visa aprobada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Asesoría personalizada</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Alta tasa de aprobación</span>
            </div>
          </div>
          
          <div className="pt-8">
            <Button 
              onClick={scrollToContact}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Solicitar Consulta Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
