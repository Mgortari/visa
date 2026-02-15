import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Plane, Briefcase, CheckCircle } from 'lucide-react';
import { servicesData } from '../mock/visaData';

const Services = () => {
  const iconMap = {
    plane: Plane,
    briefcase: Briefcase
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluciones profesionales para cada tipo de visa que necesites
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 bg-white"
              >
                <CardHeader>
                  <div className="mb-4">
                    <div className="bg-blue-100 p-4 rounded-xl group-hover:bg-blue-600 transition-colors duration-300 inline-block">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Solicitar Información
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
