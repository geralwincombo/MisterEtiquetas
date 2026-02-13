import React, { useState } from 'react';
import { Mail, Phone, Calendar, Send, Sparkles, Copy, Check } from 'lucide-react';
import { draftMeetingEmail } from '../services/geminiService';

const Contact: React.FC = () => {
  const [userContext, setUserContext] = useState('');
  const [generatedDraft, setGeneratedDraft] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerateDraft = async () => {
    if (!userContext.trim()) return;
    setIsLoading(true);
    setGeneratedDraft('');
    const draft = await draftMeetingEmail(userContext);
    setGeneratedDraft(draft);
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMailTo = () => {
      window.location.href = `mailto:Geral@misteretiquetas.pt?subject=Marcação de Reunião - MisterEtiquetas&body=${encodeURIComponent(generatedDraft || '')}`;
  }

  return (
    <section id="contact" className="py-20 bg-mister-navy text-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mister-gold to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Direct Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Vamos conversar?
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Estamos prontos para elevar a qualidade dos seus produtos. Agende uma reunião com a nossa equipa especializada ou visite-nos no Marco de Canaveses.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-mister-gold/20 p-4 rounded-full mr-6 group-hover:bg-mister-gold/30 transition-colors">
                  <Mail className="w-8 h-8 text-mister-gold" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-1">Email para Marcações</h3>
                  <a href="mailto:Geral@misteretiquetas.pt" className="text-2xl md:text-3xl font-bold hover:text-mister-gold transition-colors break-all">
                    Geral@misteretiquetas.pt
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-white/10 p-4 rounded-full mr-6 group-hover:bg-white/20 transition-colors">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-1">Telemóvel</h3>
                  <a href="tel:962748465" className="text-2xl md:text-3xl font-bold hover:text-mister-gold transition-colors">
                    962 748 465
                  </a>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-lg border border-white/10 mt-8">
                <h4 className="text-xl font-bold mb-4 text-mister-gold">Horário de Funcionamento</h4>
                <p className="text-gray-300">Segunda a Sexta: 09:00 - 18:00</p>
                <p className="text-gray-400 text-sm mt-2">Sediada no Marco de Canaveses</p>
              </div>
            </div>
          </div>

          {/* AI Email Assistant */}
          <div className="bg-white text-gray-800 rounded-lg p-8 shadow-2xl">
            <div className="flex items-center mb-6">
               <Calendar className="w-6 h-6 text-mister-navy mr-2" />
               <h3 className="text-2xl font-bold text-mister-navy">Marque já uma reunião</h3>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm">
              Descreva brevemente o que precisa (ex: "Preciso de 2000 etiquetas de cetim para almofadas"). 
              A nossa IA irá escrever um email profissional para si.
            </p>

            <div className="space-y-4">
              <textarea
                value={userContext}
                onChange={(e) => setUserContext(e.target.value)}
                placeholder="Descreva aqui o seu pedido..."
                className="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-mister-navy focus:border-transparent min-h-[100px] outline-none resize-none"
              />
              
              <button
                onClick={handleGenerateDraft}
                disabled={isLoading || !userContext}
                className={`w-full flex items-center justify-center py-3 px-4 rounded font-bold transition-all ${
                  isLoading || !userContext 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-mister-navy text-white hover:bg-slate-800'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    A gerar rascunho...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Gerar Email de Pedido
                  </span>
                )}
              </button>

              {generatedDraft && (
                <div className="mt-6 animate-fade-in">
                  <div className="bg-gray-100 p-4 rounded border border-gray-200 relative">
                    <button 
                      onClick={copyToClipboard}
                      className="absolute top-2 right-2 p-2 text-gray-500 hover:text-mister-navy transition-colors"
                      title="Copiar texto"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <pre className="whitespace-pre-wrap text-sm font-sans text-gray-700 leading-relaxed">
                      {generatedDraft}
                    </pre>
                  </div>
                  
                  <button
                    onClick={handleMailTo}
                    className="w-full mt-4 bg-mister-gold hover:bg-yellow-600 text-mister-navy font-bold py-3 rounded flex items-center justify-center transition-colors shadow-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Abrir no Email e Enviar
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;