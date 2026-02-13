import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        
        {/* Visual Break / Quote Section */}
        <section className="py-24 bg-mister-light">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-4xl font-serif italic text-gray-500 max-w-4xl mx-auto leading-relaxed">
              "Há quase três décadas que vestimos os seus produtos com a identidade que eles merecem."
            </h3>
            <div className="mt-8 flex justify-center">
               <div className="h-1 w-20 bg-mister-navy opacity-20"></div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;