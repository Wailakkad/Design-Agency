import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Works() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: '01',
      title: 'Natural Baby',
      subtitle: 'AI-Powered E-Commerce Chatbot',
      tags: ['Next.js 16', 'Supabase', 'Groq', 'LangChain'],
      type: 'AI Solution',
      img: '/Natural Baby - thumbnail image.jpeg'
    },
    {
      id: '02',
      title: 'E-Commerce Platform',
      subtitle: 'Web Development',
      tags: ['Next.js', 'Supabase'],
      type: 'E-Commerce',
      img: '/ecomerceplatfromebeackround 2.jpeg'
    },
    {
      id: '03',
      title: 'Mobile App Design',
      subtitle: 'UI/UX',
      tags: ['Figma', 'Flutter'],
      type: 'Mobile Design',
      img: '/mobile app design image.jpeg'
    },
    {
      id: '04',
      title: 'Soda Brand Store',
      subtitle: 'Web Development',
      tags: ['React', 'Tailwind', 'Stripe'],
      type: 'E-Commerce',
      img: '/thumbnail-image-soda-brand.png'
    }
  ];

  return (
    <section id="works" className="w-full bg-black text-white py-32 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="text-6xl md:text-[140px] font-black tracking-[-4px] md:tracking-[-8px]">Works</h2>
        
        <div className="border-t border-white/5">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative flex flex-col md:flex-row items-start md:items-center py-6 md:py-10 border-b border-white/5 transition-colors hover:bg-dark/50 px-4 -mx-4 cursor-none"
            >
              <span className="font-display text-4xl font-black text-gray opacity-20 mr-0 md:mr-16 mb-4 md:mb-0 group-hover:opacity-100 group-hover:text-green transition-all">
                {project.id}
              </span>
              
              <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between w-full space-y-8 md:space-y-0">
                <div className="space-y-2">
                  <div className="flex items-center space-x-6">
                    <h3 className="text-2xl md:text-5xl font-black tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[8px] px-2 py-1 border border-green text-green font-bold uppercase rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray text-[11px] uppercase tracking-widest font-bold">{project.subtitle}</p>
                </div>
                
                <div className="flex items-center space-x-12">
                  <span className="hidden lg:block text-[10px] font-black uppercase tracking-widest text-gray/40 group-hover:text-green transition-colors">
                    {project.type}
                  </span>
                  <div className="p-3 border border-white/10 rounded-full group-hover:border-green group-hover:bg-green group-hover:text-black transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Floating Image Preview */}
              {hoveredProject === idx && (
                <motion.div
                  initial={{ opacity: 0, x: -20, rotate: -5 }}
                  animate={{ opacity: 1, x: 0, rotate: 5 }}
                  className="absolute right-40 top-1/2 -translate-y-1/2 w-80 aspect-[16/10] z-50 pointer-events-none hidden lg:block"
                >
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-start">
          <Link
            to="/works"
            className="text-white text-[12px] font-black uppercase tracking-[0.2em] group flex items-center space-x-4 interactive"
          >
            <span className="group-hover:text-green transition-colors">
              VIEW ALL PROJECTS 
            </span>
            <span className="group-hover:translate-x-2 transition-transform text-green">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
