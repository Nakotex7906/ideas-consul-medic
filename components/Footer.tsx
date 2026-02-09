import React from 'react';
import { Leaf, Globe, Sprout } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-moss text-stone/80 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-sage w-6 h-6" />
              <span className="text-xl font-serif italic text-stone">MedScribe AI</span>
            </div>
            <p className="text-sm leading-relaxed opacity-60 max-w-xs">
              Nutriendo el lado humano de la medicina a través de tecnología empática.
            </p>
          </div>
          
          <div>
            <h5 className="text-stone font-medium mb-6">Caminos</h5>
            <ul className="space-y-3 text-sm opacity-60">
              <li><a href="#" className="hover:text-sage transition-colors hover:opacity-100">La Tecnología</a></li>
              <li><a href="#" className="hover:text-sage transition-colors hover:opacity-100">Bienestar Médico</a></li>
              <li><a href="#" className="hover:text-sage transition-colors hover:opacity-100">Seguridad y Confianza</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-stone font-medium mb-6">Empresa</h5>
            <ul className="space-y-3 text-sm opacity-60">
              <li><a href="#" className="hover:text-sage transition-colors hover:opacity-100">Nuestra Historia</a></li>
              <li><a href="#" className="hover:text-sage transition-colors hover:opacity-100">Contáctanos</a></li>
              <li><a href="#" className="hover:text-sage transition-colors hover:opacity-100">Ética</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-stone font-medium mb-6">Síguenos</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone/20 flex items-center justify-center hover:bg-stone/10 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone/20 flex items-center justify-center hover:bg-stone/10 transition-all">
                <Sprout className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-stone/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-40">
          <p>© 2024 MedScribe AI. Creado para los que cuidan.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone transition-colors">Privacidad Mental</a>
            <a href="#" className="hover:text-stone transition-colors">Términos de Cuidado</a>
            <a href="#" className="hover:text-stone transition-colors">Cumplimiento</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;