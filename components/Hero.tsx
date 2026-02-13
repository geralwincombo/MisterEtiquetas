import React from 'react';
import { Award, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Fabric Texture Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mister-navy via-mister-navy/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-mister-gold/20 text-mister-gold px-4 py-2 rounded-full mb-6 border border-mister-gold/30">
            <Award className="w-5 h-5" />
            <span className="font-semibold uppercase tracking-widest text-xs md:text-sm">Excelência há 29 Anos</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-6">
            A Etiqueta Perfeita para <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mister-gold to-yellow-200">
              Edredons & Almofadas
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Fabricamos e vendemos todo o tipo de etiquetas com rigor e qualidade. 
            Sediada no <strong>Marco de Canaveses</strong>, somos o parceiro de confiança da indústria têxtil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-mister-gold hover:bg-yellow-600 text-mister-navy text-lg font-bold py-4 px-10 rounded-sm transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              MARQUE JÁ UMA REUNIÃO
            </button>
            <div className="flex items-center text-gray-400 px-6">
              <MapPin className="w-5 h-5 mr-2 text-mister-gold" />
              <span>Marco de Canaveses, Portugal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="hidden lg:flex absolute bottom-10 right-10 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 max-w-sm">
        <div className="mr-4 text-mister-gold">
          <Clock className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">Rapidez e Eficiência</h3>
          <p className="text-gray-400 text-sm">Resposta rápida para as suas necessidades de produção.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;