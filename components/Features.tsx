import React from 'react';
import { Tag, ShieldCheck, Feather } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-mister-navy mb-4">
            Especialistas em Têxteis-Lar
          </h2>
          <div className="w-24 h-1 bg-mister-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sabemos que a etiqueta é a assinatura do seu produto. Por isso, garantimos materiais que resistem ao uso e à lavagem, mantendo a elegância da sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
            <div className="h-64 bg-gray-200 relative">
               <img 
                src="https://picsum.photos/600/400?random=1" 
                alt="Etiquetas para Edredom" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <Tag className="w-8 h-8 mb-2 text-mister-gold" />
                <h3 className="text-2xl font-bold">Etiquetas para Edredom</h3>
              </div>
            </div>
            <div className="p-6 bg-white border-t-4 border-mister-gold">
              <p className="text-gray-600">
                Materiais de grandes dimensões, resistentes e com acabamentos premium para edredons de todas as gamas.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
            <div className="h-64 bg-gray-200 relative">
              <img 
                src="https://picsum.photos/600/400?random=2" 
                alt="Etiquetas para Almofadas" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <Feather className="w-8 h-8 mb-2 text-mister-gold" />
                <h3 className="text-2xl font-bold">Etiquetas para Almofadas</h3>
              </div>
            </div>
            <div className="p-6 bg-white border-t-4 border-mister-navy">
              <p className="text-gray-600">
                Toque suave e impressão de alta definição. Perfeitas para contacto próximo, sem irritar a pele.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
            <div className="h-64 bg-gray-200 relative">
               <img 
                src="https://picsum.photos/600/400?random=3" 
                alt="Qualidade Garantida" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <ShieldCheck className="w-8 h-8 mb-2 text-mister-gold" />
                <h3 className="text-2xl font-bold">Qualidade Certificada</h3>
              </div>
            </div>
            <div className="p-6 bg-white border-t-4 border-gray-300">
              <p className="text-gray-600">
                29 anos de experiência garantem que cada etiqueta sai da nossa fábrica no Marco de Canaveses com qualidade imaculada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;