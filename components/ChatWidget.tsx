
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { Product } from '../types';
import { SmileyIcon } from './SmileyIcon';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatWidgetProps {
  productContext?: Product | null;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ productContext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "G'day! I'm your Hi Yarndi recovery coach. How can I help you power up with hemp today?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    if (!process.env.API_KEY) {
        setMessages(prev => [...prev, {role: 'user', text: input}, {role: 'model', text: "Error: API Key not configured."}]);
        setInput('');
        return;
    }

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const history = messages.map(m => `${m.role === 'user' ? 'User' : 'Model'}: ${m.text}`).join('\n');
      
      let systemInstruction = `You are the 'Hi Yarndi Recovery Coach', a friendly, Australian hemp recovery expert.
            Tone: Friendly, Australian (use occasional mate, g'day), professional, knowledgeable about sports science.
            Key Brand Pillars: "Powered By Hemp", "Australian Owned", "Tri-Action Energy System" (for Energize^).
            Focus on the science of hemp and the premium quality of the product.`;

      if (productContext) {
          systemInstruction += `
          
          CONTEXT: The user is currently viewing the product page for "${productContext.title}".
          
          PRODUCT DETAILS:
          - Name: ${productContext.title}
          - Price: $${productContext.price}
          - Description: ${productContext.longDescription || productContext.description}
          - Ingredients: ${productContext.ingredientsList || 'See label'}
          - Usage: ${productContext.usage?.when} - ${productContext.usage?.how}
          - Benefits: ${productContext.benefitDetails?.map(b => b.title).join(', ') || 'N/A'}
          
          INSTRUCTION: Answer the user's question. If they ask about "this product", "ingredients", "how to use", etc., refer to the Product Details above. If the question is unrelated to the specific product, answer generally about the brand Hi Yarndi.
          `;
      } else {
          systemInstruction += `
          
          Products Overview:
          - 'Recovery+' (Watermelon, Hemp Oil + Magnesium)
          - 'Energize^' (Citrus, Caffeine + Hemp, Tri-Action Energy System)
          - 'Drip°' (Hydration)
          - 'Fuel*' (Protein Bars)
          `;
      }
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `
          Current conversation:
          ${history}
          User: ${userMessage}
        `,
        config: {
            systemInstruction: systemInstruction,
        }
      });

      const text = response.text;
      if (text) {
          setMessages(prev => [...prev, { role: 'model', text }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, I am currently unable to process your request. Please try again momentarily." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-white shadow-2xl w-[90vw] md:w-[340px] h-[500px] max-h-[80vh] rounded-2xl mb-4 flex flex-col overflow-hidden animate-fade-in-up border border-gray-100">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur border-b border-gray-100 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center p-0.5">
                  <SmileyIcon className="w-full h-full" />
               </div>
               <div>
                 <h3 className="font-medium text-sm text-premium-black">Recovery Coach</h3>
                 {productContext ? (
                    <span className="text-[10px] text-accent font-bold flex items-center gap-1 animate-pulse">
                        <Sparkles className="w-3 h-3" /> Viewing {productContext.title}
                    </span>
                 ) : (
                    <span className="text-[10px] text-green-500 font-medium flex items-center gap-1">● Online</span>
                 )}
               </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-premium-black text-white rounded-tr-none' 
                    : 'bg-premium-gray text-premium-black rounded-tl-none'
                }`}>
                   <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-premium-gray px-4 py-3 rounded-2xl rounded-tl-none">
                  <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={productContext ? `Ask about ${productContext.title}...` : "Type a message..."}
              className="flex-1 bg-premium-gray focus:bg-white focus:ring-1 focus:ring-gray-200 outline-none px-4 py-2 rounded-full text-sm transition-all text-premium-black"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-premium-black text-white w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-premium-black text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group relative"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {/* Mascot peek */}
        {!isOpen && (
             <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-gray-100 shadow-sm flex items-center justify-center">
                 <SmileyIcon className="w-6 h-6" />
             </div>
        )}
      </button>
    </div>
  );
};
