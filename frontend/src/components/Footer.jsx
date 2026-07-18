import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import { contactInfo } from '../mock/visaData';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Visas USA</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Expertos en asesoría de visas estadounidenses.
            </p>
            <p className="text-slate-400 text-sm">
              © 2024 Visas USA. Todos los derechos reservados.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-slate-400">{contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-slate-400">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <a 
                  href="https://instagram.com/margortari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {contactInfo.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-xs">
            Nota: La información proporcionada es solo para fines informativos. 
            La aprobación de visas está sujeta a la decisión del Consulado de Estados Unidos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
