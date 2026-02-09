import React from 'react';
import { Flower2, BadgeCheck, Lock, Cloud } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-10 text-sage flex justify-center">
            <Flower2 className="w-16 h-16 stroke-1" />
        </div>
        
        <h2 className="text-5xl lg:text-6xl mb-8 leading-tight font-serif italic text-moss">
          Tu bienestar también es <br/>cuidado del paciente.
        </h2>
        
        <p className="text-xl text-moss/70 font-serif mb-12 max-w-2xl mx-auto">
          Únete a miles de médicos que han cambiado el agotamiento por la documentación por una conexión significativa. Solicita una demostración hoy.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-12 py-5 bg-terracotta text-stone rounded-full font-medium text-lg hover:bg-terracotta/90 shadow-lg shadow-terracotta/20 transition-all hover:-translate-y-1">
            Agendar Demostración
          </button>
          <button className="px-12 py-5 bg-white border border-clay text-moss rounded-full font-medium text-lg hover:bg-stone transition-all hover:-translate-y-1">
            Contactar Ventas
          </button>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-6 lg:gap-10 text-xs text-moss/40 uppercase tracking-widest font-semibold">
          <span className="flex items-center gap-2">
            <BadgeCheck className="w-4 h-4" /> Seguridad HIPAA
          </span>
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4" /> Cumplimiento SOC2
          </span>
          <span className="flex items-center gap-2">
            <Cloud className="w-4 h-4" /> Listo para EHR
          </span>
        </div>
      </div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage/5 organic-blob blur-3xl -z-10 transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-clay/10 organic-blob blur-3xl -z-10 transform translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default CTA;