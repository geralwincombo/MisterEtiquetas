import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-mister-navy shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center">
          <div className="text-white font-serif font-bold text-2xl md:text-3xl tracking-wide">
            Mister<span className="text-mister-gold">Etiquetas</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="tel:962748465" className="flex items-center text-gray-300 hover:text-white transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">962 748 465</span>
          </a>
          
          <button 
            onClick={scrollToContact}
            className="bg-mister-gold hover:bg-yellow-600 text-mister-navy font-bold py-3 px-6 rounded-sm uppercase tracking-wider text-sm transition-all transform hover:scale-105 shadow-md"
          >
            Marque já uma reunião
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-mister-navy shadow-xl border-t border-gray-800 p-6 flex flex-col gap-4 md:hidden">
          <a href="tel:962748465" className="flex items-center justify-center text-white py-2 border border-gray-700 rounded">
            <Phone className="w-5 h-5 mr-2" />
            Ligar: 962 748 465
          </a>
          <button 
            onClick={scrollToContact}
            className="bg-mister-gold text-mister-navy font-bold py-4 rounded uppercase text-center"
          >
            Marque já uma reunião
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;