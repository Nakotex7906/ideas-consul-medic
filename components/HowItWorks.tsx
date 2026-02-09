import React from 'react';
import { ArrowRight, Mic, FileText, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">
        
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="relative rounded-[4rem] overflow-hidden border-[12px] border-white shadow-xl group">
            <img 
              alt="Doctor reviewing digital history" 
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moss/40 to-transparent"></div>
          </div>
        </motion.div>

        <motion.div 
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 50 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="w-full lg:w-1/2 space-y-10"
        >
          <h2 className="text-5xl font-serif text-moss">
            Tu asistente clínico <br/>
            <span className="italic text-terracotta">invisible y eficiente.</span>
          </h2>

          <div className="space-y-8 border-l-2 border-clay/30 pl-8">
            <div className="relative group">
                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-stone border-4 border-clay group-hover:border-terracotta transition-colors"></span>
                <div className="flex items-center gap-2 mb-2">
                    <Mic className="w-5 h-5 text-terracotta" />
                    <h4 className="text-xl font-serif italic text-moss">Paso 1: Graba la Consulta</h4>
                </div>
                <p className="text-moss/60 text-sm leading-relaxed">Simplemente presiona grabar al inicio de la cita. Concéntrate en el paciente mientras la app captura el audio de manera segura.</p>
            </div>
            
            <div className="relative group">
                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-stone border-4 border-clay group-hover:border-terracotta transition-colors"></span>
                <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-terracotta" />
                    <h4 className="text-xl font-serif italic text-moss">Paso 2: Transcripción y Anamnesis</h4>
                </div>
                <p className="text-moss/60 text-sm leading-relaxed">Al finalizar, nuestra IA procesa el audio. En segundos, tienes una transcripción fiel y una Anamnesis estructurada lista para revisión.</p>
            </div>
            
            <div className="relative group">
                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-stone border-4 border-clay group-hover:border-terracotta transition-colors"></span>
                <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-terracotta" />
                    <h4 className="text-xl font-serif italic text-moss">Paso 3: Archivo en Historial</h4>
                </div>
                <p className="text-moss/60 text-sm leading-relaxed">Todo se vincula al perfil del paciente. Tendrás una línea de tiempo con los audios y resúmenes de cada visita anterior.</p>
            </div>
          </div>

          <button className="px-10 py-5 bg-moss text-stone rounded-full font-medium text-lg hover:shadow-xl hover:bg-sage transition-all inline-flex items-center gap-3 group">
            Ver el Historial en Acción
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;