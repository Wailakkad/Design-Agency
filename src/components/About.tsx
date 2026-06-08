import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

export default function About() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  const skills = [
    'React', 'Next.js', 'Node.js', 'Figma', 'Flutter', 'Python', 
    'n8n', 'Voiceflow', 'Chatbase', 'Framer', 'Webflow', 'Supabase'
  ];

  const projects = [
    { title: 'Natural Baby', type: 'AI Bot', subtitle: 'RAG Chatbot for E-Commerce', img: '/Natural Baby - thumbnail image.jpeg', detailImg: '/Natural Baby - long project details image.jpg', description: 'AI-powered RAG chatbot for a premium baby-care e-commerce brand using vector search, Gemini embeddings, and Groq Llama 3.3 for factual product answers.' },
    { title: 'NexPay', type: 'Web App', subtitle: 'Smart Finance Dashboard', img: '/nexpay.jpeg', detailImg: '/nexpay-project-details.jpg', description: 'A B2C fintech web app for personal finance management. Inspired by the bold, data-forward aesthetic with card-driven UX for tracking expenses, budgets, and financial goals.' },
    { title: 'ATELIOR™', type: 'Mobile App', subtitle: 'Home Decor App Design & Branding Identity', img: '/ATELIOR™-cardbackground image.png', detailImg: '/ATELIOR™-prjectdetails image.jpg' },
    { title: 'LUME', type: 'Brand Design', subtitle: 'Cosmetic Brand Identity', img: '/LUME-BACKGROUND-IMAGE.png', detailImg: '/LUME-PROJECT-DETAILS-IMAGE.jpg' },
    { title: 'Soda Brand', type: 'Web Dev', subtitle: 'Website Store', img: '/thumbnail-image-soda-brand.png', detailImg: '/soda-brand-projact-details-image.jpg', description: 'A fully branded e-commerce website for a premium soda brand, featuring a vibrant design and seamless shopping experience.' },
  ];

  return (
    <section id="about" className="w-full bg-black text-white py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-green text-[10px] uppercase font-bold tracking-[0.2em] block">ABOUT ME</span>
            <h2 className="text-5xl md:text-6xl leading-[0.9]">
              I design & build digital products that convert
            </h2>
          </div>
          
          <p className="text-gray text-lg leading-relaxed max-w-xl">
            I'm Ouail Akkad, an AI Developer and digital builder based in Morocco. 
            I specialize in creating websites, web apps, mobile app designs, and AI-powered 
            chatbots that help businesses grow smarter. I combine clean design with 
            technical precision to build products people love.
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 border border-green/30 text-green/80 text-[10px] font-bold uppercase rounded-full hover:border-green hover:text-green transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              onClick={() => project.detailImg && setSelectedProject(project.title)}
              className={`group relative aspect-square bg-dark border-t border-transparent hover:border-green transition-all overflow-hidden ${project.detailImg ? 'cursor-pointer' : ''}`}
            >
              {project.img && (
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{ backgroundImage: `url('${project.img}')` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-dark to-[#1A1A1A] opacity-50 group-hover:opacity-0 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="font-display text-xl">{project.title}</span>
                <span className="text-[8px] uppercase tracking-wider text-gray">{project.type}</span>
              </div>
            </motion.div>
          ))}
          <div className="col-span-1 md:col-span-2 mt-4 flex flex-wrap gap-x-4 gap-y-1 justify-start md:justify-between text-[9px] md:text-[10px] text-gray uppercase font-bold tracking-widest border-t border-white/10 pt-4">
            <span>Brand Identity</span>
            <span>Web Development</span>
            <span>AI Integration</span>
            <span>Mobile Design</span>
          </div>
        </div>
      </div>

      {/* Project Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-dark border border-green/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-green rounded-full flex items-center justify-center transition-colors interactive"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <div className="overflow-y-auto max-h-[70vh]">
                {selectedProject === 'Natural Baby' && (
                  <img
                    src="/Natural Baby - long project details image.jpg"
                    alt="Natural Baby Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject === 'NexPay' && (
                  <img
                    src="/nexpay-project-details.jpg"
                    alt="NexPay Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject === 'ATELIOR™' && (
                  <img
                    src="/ATELIOR™-prjectdetails image.jpg"
                    alt="ATELIOR™ Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject === 'LUME' && (
                  <img
                    src="/LUME-PROJECT-DETAILS-IMAGE.jpg"
                    alt="LUME Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject === 'Soda Brand' && (
                  <img
                    src="/soda-brand-projact-details-image.jpg"
                    alt="Soda Brand Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
              </div>

              <div className="p-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight">{selectedProject}</h3>
                    <p className="text-gray text-sm mt-2 max-w-lg">
                      {projects.find(p => p.title === selectedProject)?.description}
                    </p>
                  </div>
                  <a 
                    href="#contact" 
                    className="hidden md:flex items-center gap-2 bg-green text-black px-6 py-3 font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform interactive"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
