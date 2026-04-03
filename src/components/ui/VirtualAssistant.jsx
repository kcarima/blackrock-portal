import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "¡Hola! Soy el asistente virtual. ¿En qué puedo ayudarte?", isBot: true }]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput("");

    setTimeout(() => {
      let botResponse = "Gracias. Un asesor se comunicará pronto.";
      if (userMsg.toLowerCase().includes("presupuesto")) {
        botResponse = "¡Claro! Te llevaré a la sección de presupuesto.";
        setTimeout(() => navigate('/quote'), 2000);
      }
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-4">
          <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <span className="font-bold">Asistente BlackRock</span>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5"/></button>
          </div>
          <div className="h-72 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.isBot ? 'bg-gray-200 text-gray-800 self-start' : 'bg-yellow-500 text-gray-900 self-end'}`}>{msg.text}</div>
            ))}
          </div>
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-2 border border-gray-300 rounded outline-none" placeholder="Escribe..." />
            <button type="submit" className="bg-gray-900 text-yellow-500 p-2 rounded"><Send className="w-5 h-5" /></button>
          </form>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-yellow-500 text-white p-4 rounded-full shadow-2xl"><MessageSquare className="w-7 h-7 text-gray-900" /></button>
    </div>
  );
};