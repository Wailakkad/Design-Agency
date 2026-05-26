import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Mail, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: string;
  chips?: string[];
  hasMailto?: boolean;
}

const RESPONSES_MAP = {
  services: {
    keywords: ["services", "what do you do", "offer", "help"],
    text: "Ouail offers 4 core services:\n🌐 Website Development — fast, SEO-optimized sites\n📱 Web & Mobile App Design — UI/UX in Figma + development\n🤖 AI Chatbot Integration — customer support & lead generation bots\n⚙️ Full-Stack Development — end-to-end apps with React, Next.js & more\nWhich one interests you most?",
    chips: ["Website", "Mobile App", "AI Chatbot", "Full-Stack"]
  },
  website: {
    keywords: ["website", "web development", "build website"],
    text: "Ouail builds modern, fast, responsive websites using React, Next.js, and Webflow. Every site is SEO-optimized and designed to convert visitors into customers. Want to discuss your project?"
  },
  mobile: {
    keywords: ["mobile", "app", "flutter", "design"],
    text: "He designs clean mobile app UIs using Figma and can develop them with Flutter or React Native. From wireframes to pixel-perfect screens — ready for handoff or full build."
  },
  chatbot: {
    keywords: ["chatbot", "ai bot", "ai", "artificial intelligence", "automation"],
    text: "This is one of Ouail's specialties! He builds AI chatbots using tools like Chatbase, Voiceflow, and n8n — trained on your business data to handle customer support and capture leads 24/7. Just like me! 😄"
  },
  pricing: {
    keywords: ["price", "pricing", "cost", "how much", "budget"],
    text: "Pricing depends on the project scope. Generally:\n🌐 Landing page: from €300\n💻 Web App: from €800\n📱 Mobile UI Design: from €500\n🤖 AI Chatbot: from €400\nFor a custom quote, reach out at akkadouail8@gmail.com",
    hasMailto: true
  },
  projects: {
    keywords: ["projects", "work", "portfolio", "examples"],
    text: "Ouail has worked on e-commerce platforms, SaaS dashboards, branded chatbots, and mobile app designs across various industries. You can see featured works in the Works section above. Want details on a specific type of project?"
  },
  contact: {
    keywords: ["contact", "email", "reach", "talk", "hire", "get in touch"],
    text: "You can reach Ouail directly at:\n📧 akkadouail8@gmail.com\n📱 Instagram: @o_akkad.ai\nOr scroll down to the contact form and he'll get back to you within 24h!",
    hasMailto: true
  },
  about: {
    keywords: ["about", "who", "ouail", "background"],
    text: "Ouail Akkad is an AI Developer and digital builder based in Morocco. He helps brands grow smarter with AI — combining design, development, and automation to build digital products that perform."
  },
  tech: {
    keywords: ["tech", "stack", "tools", "technologies"],
    text: "Ouail's tech stack includes:\nFrontend: React, Next.js, Framer, Webflow\nBackend: Node.js, Supabase, Firebase\nMobile: Flutter, Figma\nAI/Automation: Chatbase, Voiceflow, n8n, Python\nDesign: Figma, Framer"
  },
  timeline: {
    keywords: ["timeline", "how long", "deadline", "fast"],
    text: "Typical timelines:\n🌐 Landing page: 3–5 days\n💻 Web App: 2–4 weeks\n📱 Mobile UI: 1–2 weeks\n🤖 AI Chatbot: 3–7 days\nRush delivery available — just mention your deadline!"
  },
  thanks: {
    keywords: ["thanks", "thank you", "great", "awesome", "nice", "cool", "perfect"],
    text: "Happy to help! 😊 Is there anything else you'd like to know about Ouail's work or services?"
  }
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showStartingChips, setShowStartingChips] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem('chat_history');
    if (saved) {
      setMessages(JSON.parse(saved));
      setShowStartingChips(false);
    }
  }, []);

  // Sync to sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('chat_history', JSON.stringify(messages.slice(-50)));
    }
  }, [messages]);

  // Handle opening for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("👋 Hey! I'm Ouail's assistant. I can tell you about his services, projects, pricing, and how to get in touch. What would you like to know?", ["Services", "Projects", "Pricing", "Contact", "About Ouail"]);
      }, 600);
    }
  }, [isOpen]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addBotMessage = (text: string, chips?: string[], hasMailto?: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      chips,
      hasMailto
    };
    setMessages(prev => [...prev.slice(-49), newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev.slice(-49), newMessage]);
    setShowStartingChips(false);
    handleBotReply(text);
  };

  const handleBotReply = (userText: string) => {
    setIsTyping(true);
    const text = userText.toLowerCase();

    // Find best match
    let match = null;
    for (const key in RESPONSES_MAP) {
      const config = RESPONSES_MAP[key as keyof typeof RESPONSES_MAP];
      if (config.keywords.some(kw => text.includes(kw))) {
        match = config;
        break;
      }
    }

    setTimeout(() => {
      setIsTyping(false);
      if (match) {
        // Correcting access to match property names
        addBotMessage(match.text, (match as any).chips, (match as any).hasMailto);
      } else {
        addBotMessage("I'm not sure I have that info, but Ouail would love to answer directly!\n📧 akkadouail8@gmail.com\nOr use the contact form below — he replies within 24h. 🚀", undefined, true);
      }
    }, Math.random() * 400 + 800);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    addUserMessage(inputValue.trim());
    setInputValue('');
  };

  const handleChipClick = (chip: string) => {
    addUserMessage(chip);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="fixed z-[9999] bottom-7 right-7 md:bottom-7 md:right-7">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat assistant"
        className="relative w-14 h-14 md:w-[58px] md:h-[58px] rounded-full bg-green flex items-center justify-center shadow-lg hover:scale(1.08) transition-transform interactive group"
      >
        <div className="absolute inset-0 rounded-full border-2 border-green animate-ping opacity-20" />
        {isOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <MessageSquare className="w-6 h-6 text-black" />
        )}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-[100px] right-7 w-[calc(100%-48px)] md:w-[360px] h-[70vh] md:h-[520px] bg-black border-[0.5px] border-green rounded-2xl flex flex-col overflow-hidden shadow-[0_8px_40px_rgba(170,255,0,0.15)] origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-dark p-4 border-b border-[#1f1f1f] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-2 h-2 bg-green rounded-full animate-pulse shadow-[0_0_8px_#AAFF00]" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold leading-tight">Ouail's Assistant</h3>
                  <p className="text-[#888] text-[11px]">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
              aria-live="polite"
            >
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col space-y-1">
                  <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] px-4 py-3 text-sm whitespace-pre-wrap ${
                        msg.sender === 'user'
                          ? 'bg-green text-black font-bold rounded-2xl rounded-br-none'
                          : 'bg-[#1A1A1A] text-white rounded-2xl rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  <span className={`text-[10px] text-[#555] ${msg.sender === 'user' ? 'text-right mr-1' : 'ml-1'}`}>
                    {msg.timestamp}
                  </span>
                  
                  {msg.sender === 'bot' && msg.hasMailto && (
                    <div className="flex justify-start pt-2">
                       <a 
                        href="mailto:akkadouail8@gmail.com"
                        className="flex items-center space-x-2 bg-[#1A1A1A] border border-green text-green px-4 py-2 rounded-full text-[11px] font-bold uppercase transition-all hover:bg-green hover:text-black interactive"
                       >
                         <Mail className="w-3 h-3" />
                         <span>Send Email</span>
                       </a>
                    </div>
                  )}

                  {msg.sender === 'bot' && msg.chips && msg.chips.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {msg.chips.map(chip => (
                        <button
                          key={chip}
                          onClick={() => handleChipClick(chip)}
                          className="px-3 py-1.5 bg-[#1A1A1A] border border-[#333] text-white text-[11px] rounded-full hover:border-green hover:text-green transition-all interactive"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex flex-col space-y-1">
                  <div className="flex justify-start">
                    <div className="bg-[#1A1A1A] px-4 py-3 rounded-2xl rounded-bl-none flex space-x-1">
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                        className="w-1.5 h-1.5 bg-green rounded-full" 
                      />
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }}
                        className="w-1.5 h-1.5 bg-green rounded-full" 
                      />
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }}
                        className="w-1.5 h-1.5 bg-green rounded-full" 
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="bg-dark p-4 border-t border-[#1f1f1f]">
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything..."
                    className="w-full bg-[#1A1A1A] text-white text-sm border border-[#333] rounded-full px-4 py-3 outline-none focus:border-green transition-colors"
                  />
                </div>
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-green rounded-full flex items-center justify-center disabled:opacity-50 disabled:grayscale transition-all interactive"
                >
                  <Send className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
