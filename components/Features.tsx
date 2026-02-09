import React from 'react';
import { Mic, FileText, Library, BrainCircuit } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-stone/50 border-y border-sage/10 relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <BrainCircuit className="w-16 h-16 text-clay mx-auto mb-8 stroke-1" />
        <h2 className="text-4xl lg:text-5xl mb-12 font-serif italic text-moss">
          Un flujo de trabajo diseñado <br />para tu tranquilidad.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div className="space-y-4 group p-6 rounded-2xl hover:bg-white/50 transition-colors duration-500">
            <div className="w-14 h-14 rounded-full bg-clay/20 flex items-center justify-center text-clay group-hover:bg-clay/30 transition-colors">
              <Mic className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif italic">1. Grabación y Transcripción</h3>
            <p className="text-moss/70 leading-relaxed font-sans text-sm">
              Captura cada detalle de la consulta con audio de alta fidelidad. Nuestra IA transcribe en tiempo real, diferenciando entre la voz del médico y la del paciente.
            </p>
          </div>

          <div className="space-y-4 group p-6 rounded-2xl hover:bg-white/50 transition-colors duration-500">
            <div className="w-14 h-14 rounded-full bg-sage/20 flex items-center justify-center text-sage group-hover:bg-sage/30 transition-colors">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif italic">2. Resumen y Anamnesis</h3>
            <p className="text-moss/70 leading-relaxed font-sans text-sm">
              Transforma la transcripción en documentos clínicos estructurados. Obtén una Anamnesis completa, resumen de síntomas y plan de tratamiento en segundos.
            </p>
          </div>

          <div className="space-y-4 group p-6 rounded-2xl hover:bg-white/50 transition-colors duration-500">
            <div className="w-14 h-14 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta group-hover:bg-terracotta/30 transition-colors">
              <Library className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif italic">3. Historial del Paciente</h3>
            <p className="text-moss/70 leading-relaxed font-sans text-sm">
              Cada paciente tiene su perfil digital. Accede fácilmente al audio original, la transcripción completa y los resúmenes generados de todas sus consultas pasadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;