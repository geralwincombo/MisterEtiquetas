import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-500 py-12 border-t border-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="font-serif font-bold text-2xl text-white mb-4">
          Mister<span className="text-mister-gold">Etiquetas</span>
        </div>
        <p className="mb-6">
          Sediada no Marco de Canaveses | 29 Anos de História
        </p>
        <p className="text-sm">
          &copy; {currentYear} MisterEtiquetas. Todos os direitos reservados.
        </p>
        <div className="mt-4 text-xs text-gray-700">
          <p>Email: Geral@misteretiquetas.pt | Tel: 962 748 465</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;