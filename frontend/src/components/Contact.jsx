import React from 'react';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, Clock, Instagram } from 'lucide-react';
import { contactInfo } from '../mock/visaData';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Inicia tu proceso hoy. Responderemos tu consulta en menos de 24 horas.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <Card className="border-2 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600 text-sm">{contactInfo.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Teléfono */}
            <Card className="border-2 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Teléfono</h3>
                    <p className="text-slate-600 text-sm">{contactInfo.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Instagram */}
            <a 
              href="https://instagram.com/margortari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="border-2 hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer hover:border-pink-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                      <Instagram className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Instagram</h3>
                      <p className="text-slate-600 text-sm hover:text-pink-600 transition-colors">
                        {contactInfo.instagram}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
            
            {/* Horario */}
            <Card className="border-2 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Horario</h3>
                    <p className="text-slate-600 text-sm">{contactInfo.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
