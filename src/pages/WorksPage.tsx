import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  img: string;
  description: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'E-Commerce Platform',
    category: 'WEB DEV',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    img: '/ecomerceplatfromebeackround 2.jpeg',
    description: 'Full-featured e-commerce platform built with modern web technologies.'
  },
  {
    id: '02',
    title: 'Natural Baby',
    category: 'AI / CHATBOT',
    tags: ['Next.js 16', 'Supabase', 'Groq Llama 3.3', 'LangChain'],
    img: '/Natural Baby - thumbnail image.jpeg',
    description: 'AI-powered e-commerce chatbot built with LangChain and Groq Llama.'
  },
  {
    id: '03',
    title: 'Luma Finance Mobile App',
    category: 'MOBILE',
    tags: ['AI Tools', 'Stitch', 'Figma'],
    img: '/LUMA FINANCE THUMBNAIL.png',
    description: 'Mobile app design for a fintech platform with AI-powered tools.'
  },
  {
    id: '04',
    title: 'Bold Orange',
    category: 'WEB DEV',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    img: '/orange web agency project thumbnail.png',
    description: 'This landing page presents a modern and futuristic design agency concept focused on building bold brands. The hero section immediately grabs attention with a strong visual, warm orange lighting, and a powerful headline. The layout is clean and structured, with clear call-to-action buttons that guide users smoothly.'
  },
  {
    id: '05',
    title: 'Roofing Business Landing Page',
    category: 'LANDING PAGE',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    img: '/roofing business landing page - thumbnail image.png',
    description: 'Modern, conversion-focused landing page for a roofing business — designed and developed to showcase services, build trust, and drive leads through a clean storytelling layout.'
  },
  {
    id: '06',
    title: 'CozyNest',
    category: 'LANDING PAGE',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    img: '/CozyNest-landing-page -thubnail-image.png',
    description: 'CozyNest is a high-end luxury resort landing page designed to capture emotion and drive bookings. The project focuses on immersive visuals, refined typography, and a conversion-optimized structure that reflects the calm elegance of a boutique forest retreat.'
  },
  {
    id: '07',
    title: 'NATUROMA',
    category: 'AI BRANDING',
    tags: ['Branding', 'Packaging', 'AI Photography'],
    img: '/ai-barnding-naturoma-thumbnail-mage.png',
    description: 'Natural supplement brand identity rooted in purity, wellness, and modern minimalism. NATUROMA is a natural supplement brand built around the belief that wellness should feel as clean and pure as the ingredients inside the bottle.'
  },
  {
    id: '08',
    title: 'Soda Brand Store',
    category: 'WEB DEV',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    img: '/thumbnail-image-soda-brand.png',
    description: 'Full-featured e-commerce platform built with modern web technologies.'
  },
  {
    id: '09',
    title: 'Plumbing Services',
    category: 'WEB DEV',
    tags: ['NEXT.JS', 'TAILWIND CSS'],
    img: '/thumbnail-plumber-image.png',
    description: 'Professional plumbing services landing page built with Next.js.'
  },
  {
    id: '10',
    title: 'Next-Gen Agency',
    category: 'WEB DEV',
    tags: ['NEXT.JS', 'TAILWIND', 'AI CHATBOT'],
    img: '/NEURO-NEXA AI THUMBNAIL IMAGE.jpeg',
    description: 'Next-generation agency website with integrated AI chatbot capabilities.'
  },
  {
    id: '11',
    title: 'OPTIC STUDIO',
    category: 'WEB DEV',
    tags: ['REACT'],
    img: '/optical thumbnail image.png',
    description: 'Optical studio website built with React for a modern browsing experience.'
  },
  {
    id: '12',
    title: 'Roofing Co. Redesign',
    category: 'UX/UI MODERNIZATION',
    tags: ['REDESIGN', 'UX/UI', 'MODERNIZATION'],
    img: '/first-redesign-project-thumbnail-image.jpeg',
    description: 'Complete UX/UI modernization of a German roofing company\'s website — transforming a dated 2000s-era interface into a clean, modern, conversion-focused experience.'
  },
  {
    id: '13',
    title: 'ShopMind AI',
    category: 'AI / CHATBOT',
    tags: ['React', 'Express', 'MongoDB', 'Pinecone', 'NVIDIA NIM'],
    img: '/shopemind-ai-thumbnail-image.png',
    description: 'AI-powered RAG e-commerce chatbot demo. Users describe products in natural language; the system embeds queries via NVIDIA NIM, retrieves matches from Pinecone vector DB, and generates tailored responses via LLM. Built with React + Express + MongoDB + Pinecone.'
  },
  {
    id: '14',
    title: 'HMT Oria — Motorcycle Helmet Interactive Showcase',
    category: 'WEB DEV',
    tags: ['React', 'TypeScript', 'GSAP', 'Tailwind CSS'],
    img: '/HMT Oria — Motorcycle Helmet Interactive Showcase thumbnail.jpeg',
    description: 'An immersive, cinematic single-page product landing page for a premium motorcycle helmet brand. Built with React, TypeScript, GSAP, and Tailwind CSS, it features a hero showroom, interactive tech hotspots, an exploded view with layered animations, a real-time color/visor configurator, and a comparative safety specs table — all designed to deliver a high-end brand experience.'
  },
  {
    id: '15',
    title: 'ShopWave',
    category: 'WEB DEV',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion'],
    img: '/shopwave-thumbnail.png',
    description: 'ShopWave fashion e-commerce frontend built with React + Vite + Tailwind CSS v4 + Redux Toolkit + framer-motion. Features: scroll-aware navbar, product grids with filtering/pagination, cart with persist, recommendations carousels, responsive design, and cohesive dark-themed CTA sections across all pages.'
  }
];

const filters = ['ALL', 'WEB DEV', 'MOBILE', 'AI / CHATBOT', 'UX/UI MODERNIZATION', 'LANDING PAGE', 'AI BRANDING'];

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-[72px]">
        {/* Hero Section */}
        <section className="w-full bg-black py-20 md:py-32 px-6 md:px-10">
          <Reveal>
            <div className="max-w-7xl mx-auto">
              <span className="text-gray text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">
                — Portfolio
              </span>
              <h1 className="text-7xl md:text-[140px] font-black tracking-tighter leading-none mb-6">
                ALL WORKS
              </h1>
              <p className="text-gray text-lg md:text-xl max-w-2xl">
                Every project built with purpose. Click to explore.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Filter Bar */}
        <section className="w-full px-6 md:px-10 pb-12">
          <Reveal>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all rounded-full interactive ${
                      activeFilter === filter
                        ? 'bg-green text-black'
                        : 'border border-[#333] text-gray hover:border-green hover:text-green'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Projects List */}
        <section className="w-full px-6 md:px-10 pb-20">
          <Reveal>
            <div className="max-w-7xl mx-auto border-t border-[#222]">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setHoveredProject(idx)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => setSelectedProject(project)}
                    className="group relative flex flex-col md:flex-row items-start md:items-center py-8 border-b border-[#222] transition-colors hover:bg-[#111]/50 cursor-pointer px-4 -mx-4"
                  >
                    <span className="font-display text-3xl font-black text-gray opacity-30 mr-0 md:mr-10 mb-3 md:mb-0 group-hover:opacity-100 group-hover:text-green transition-all">
                      {project.id}
                    </span>

                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl md:text-4xl font-black tracking-tighter group-hover:translate-x-2 transition-transform duration-300 group-hover:text-green">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[8px] px-2 py-1 border border-green/30 text-green/80 font-bold uppercase rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-8">
                        <span className="hidden lg:block text-[10px] font-black uppercase tracking-widest text-gray/40 group-hover:text-green transition-colors">
                          {project.category}
                        </span>
                        <div className="p-3 border border-white/10 rounded-full group-hover:border-green group-hover:bg-green group-hover:text-black transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Image Preview */}
                    {hoveredProject === idx && (
                      <motion.div
                        initial={{ opacity: 0, x: -20, rotate: -5 }}
                        animate={{ opacity: 1, x: 0, rotate: 5 }}
                        className="absolute right-20 top-1/2 -translate-y-1/2 w-64 aspect-[16/10] z-50 pointer-events-none hidden lg:block"
                      >
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-lg"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </Reveal>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-black py-20 px-6 md:px-10 border-t border-[#222]">
          <Reveal>
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                Have a project in mind?
              </h2>
              <p className="text-gray text-lg mb-10">
                Let's build something great together.
              </p>
              <button
                onClick={() => navigate('/#contact')}
                className="inline-flex items-center gap-2 bg-green text-black px-8 py-4 font-display text-lg uppercase tracking-widest hover:scale-105 active:scale-95 transition-all interactive"
              >
                Start a Project <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </Reveal>
        </section>
      </main>

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
                {selectedProject.title === 'E-Commerce Platform' && (
                  <img
                    src="/ecommerce-platfrom-projectdetails-long-image.jpg"
                    alt="E-Commerce Platform Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'Soda Brand Store' && (
                  <img
                    src="/soda-brand-projact-details-image.jpg"
                    alt="Soda Brand Store Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'OPTIC STUDIO' && (
                  <img
                    src="/optical project details long image.jpg"
                    alt="OPTIC STUDIO Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'Plumbing Services' && (
                  <img
                    src="/plumber-Long-project-details-image.jpg"
                    alt="Plumbing Services Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'Next-Gen Agency' && (
                  <img
                    src="/NEURO-NEXA-LONG-PROJECT-DETAILS.jpg"
                    alt="Next-Gen Agency Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'Bold Orange' && (
                  <img
                    src="/orange web agency project long image details.jpg"
                    alt="Orange Web Agency Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'Roofing Business Landing Page' && (
                  <img
                    src="/roofing business landing page - storytelling long image details.jpg"
                    alt="Roofing Business Landing Page Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'Natural Baby' && (
                  <img
                    src="/Natural Baby - long project details image.jpg"
                    alt="Natural Baby Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'Luma Finance Mobile App' && (
                  <img
                    src="/Luma Finance MOBILE APP DESIGN PROJECT DETAILS.jpg"
                    alt="Luma Finance Mobile App Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'CozyNest' && (
                  <img
                    src="/CozyNest - detailsUsecaselongimage.jpg"
                    alt="CozyNest Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'NATUROMA' && (
                  <img
                    src="/ai-branding-behince-long-image-presentation.jpg"
                    alt="NATUROMA Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'Roofing Co. Redesign' && (
                  <img
                    src="/first-redesign-project-long-studycase-image.jpg"
                    alt="Roofing Co. Redesign Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'ShopMind AI' && (
                  <img
                    src="/new-shopemind-ai-behance-presentation-image.jpg"
                    alt="ShopMind AI Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'HMT Oria — Motorcycle Helmet Interactive Showcase' && (
                  <img
                    src="/HMT Oria — Motorcycle Helmet Interactive Showcase presentation.jpg"
                    alt="HMT Oria — Motorcycle Helmet Interactive Showcase Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
                {selectedProject.title === 'ShopWave' && (
                  <img
                    src="/shopwave-behince-presentations.jpg"
                    alt="ShopWave Project Details"
                    className="w-full h-auto object-contain"
                  />
                )}
              </div>

              <div className="p-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight">{selectedProject.title}</h3>
                    <p className="text-gray text-sm mt-2 max-w-lg">
                      {selectedProject.description}
                    </p>
                  </div>
                    {selectedProject.title !== 'Luma Finance Mobile App' && selectedProject.title !== 'NATUROMA' && selectedProject.title !== 'ShopMind AI' && (
                    <a
                      href={selectedProject.title === 'Natural Baby' ? 'https://rag-chatbot-pied-seven.vercel.app/' : selectedProject.title === 'OPTIC STUDIO' ? 'https://opticien-website-ai-agent-for-custo.vercel.app/' : selectedProject.title === 'Plumbing Services' ? 'https://plumber-jade.vercel.app/' : selectedProject.title === 'Next-Gen Agency' ? 'https://neuro-nexa.vercel.app/' : selectedProject.title === 'Bold Orange' ? 'https://web-agency-landing-page-flame.vercel.app/' : selectedProject.title === 'Soda Brand Store' ? 'https://xoxo-bice.vercel.app/' : selectedProject.title === 'Roofing Business Landing Page' ? 'https://roofguard-pro.vercel.app/' : selectedProject.title === 'Roofing Co. Redesign' ? 'https://erich-ide-co-dachdeckermeister-gmb.vercel.app/' : selectedProject.title === 'CozyNest' ? 'https://cozynest-landing.vercel.app/' : selectedProject.title === 'HMT Oria — Motorcycle Helmet Interactive Showcase' ? 'https://hmt-oria-gt.vercel.app/' : selectedProject.title === 'ShopWave' ? 'https://shop-wave-fashion-e-commerce-fronte.vercel.app/' : 'https://nextjs-ai-fullstack-store.vercel.app/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:flex items-center gap-2 bg-green text-black px-6 py-3 font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform interactive"
                    >
                      Preview Online <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}