import React from 'react';
import { processSteps } from '../mock/visaData';

const Process = () => {
  return (
    <section id="proceso" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Un proceso simple y transparente para obtener tu visa
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.id} className="relative">
                  <div className={`lg:grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Content */}
                    <div className={`${isEven ? 'lg:text-right' : 'lg:col-start-2'}`}>
                      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-4 lg:hidden">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                            {step.id}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            {step.title}
                          </h3>
                        </div>
                        
                        <h3 className="hidden lg:block text-2xl font-bold text-slate-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Number circle - desktop */}
                    <div className="hidden lg:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold shadow-lg z-10">
                      {step.id}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
