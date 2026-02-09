import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-stone relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-moss mb-4">
          De Audio a Anamnesis en segundos
        </h2>
        <p className="text-moss/60 mb-12 max-w-2xl mx-auto">
          Mira cómo MedScribe graba la consulta y organiza automáticamente el historial del paciente con resúmenes clínicos precisos.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-moss/5 group cursor-pointer"
        >
          {/* Placeholder for video - in production replace with actual video or iframe */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all z-10">
             <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-moss ml-1" fill="currentColor" />
             </div>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Video de demostración generación de anamnesis" 
            className="w-full h-full object-cover opacity-90"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent text-left">
            <p className="text-white font-serif text-lg">Demo: Generación automática de historial clínico</p>
            <p className="text-white/80 text-sm">Duración: 1:30</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;