import React from 'react';
import { Sparkles, Mic, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-40 pb-20 px-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 text-terracotta font-medium tracking-wide text-xs uppercase">
            <span className="h-px w-8 bg-terracotta"></span> Escucha Inteligente
          </div>
          
          <h1 className="text-6xl lg:text-7xl leading-tight font-serif">
            De la conversación a la <br />
            <span className="text-sage italic">Anamnesis perfecta.</span>
          </h1>
          
          <p className="text-xl text-moss/80 font-serif leading-relaxed max-w-lg">
            Graba tu consulta, obtén una transcripción exacta y deja que la IA redacte el resumen y la anamnesis. Todo guardado automáticamente en el historial del paciente.
          </p>

          <div className="space-y-4 mt-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/60 backdrop-blur-md border border-sage/20 rounded-2xl rounded-tl-sm p-6 shadow-sm max-w-sm"
            >
              <div className="flex items-center gap-2 text-terracotta mb-2">
                <Mic className="w-4 h-4 animate-pulse" />
                <p className="text-xs font-bold uppercase tracking-wider">Grabando Consulta</p>
              </div>
              <p className="text-lg font-serif italic text-moss/80">"...el dolor comenzó hace dos días en la zona lumbar y aumenta al caminar."</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-sage/10 backdrop-blur-md border border-sage/30 rounded-2xl rounded-tr-sm p-6 shadow-sm max-w-md ml-auto"
            >
              <div className="flex items-center gap-2 text-sage mb-2">
                <FileText className="w-4 h-4" />
                <p className="text-xs font-bold uppercase tracking-wider">Anamnesis Generada</p>
              </div>
              <p className="text-sm font-sans text-moss leading-relaxed">
                <strong>Motivo de consulta:</strong> Lumbalgia aguda.<br/>
                <strong>Evolución:</strong> 48 horas de evolución.<br/>
                <strong>Agravantes:</strong> Deambulación.<br/>
                <span className="text-xs text-moss/50 mt-2 block">Guardado en Historial: Paciente #4092</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="organic-blob bg-sage/20 absolute inset-0 -z-10 blur-3xl scale-125"></div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50 transform rotate-2">
            <img 
              alt="Physician utilizing tablet for recording" 
              className="w-full h-[600px] object-cover grayscale-[0.2] sepia-[0.1] hover:grayscale-0 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1576091160550-2187d80aeff2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            />
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border-l-4 border-l-sage max-w-xs"
          >
            <Sparkles className="text-sage mb-2 w-6 h-6" />
            <p className="text-sm font-serif italic text-moss">"Tu voz es la única herramienta que necesitas. El historial se construye solo."</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;