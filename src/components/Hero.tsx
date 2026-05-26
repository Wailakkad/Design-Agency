import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const skills = ['Next.js', 'AI Chatbots', 'Figma', 'n8n'];
  const featured = [
    { num: '01', type: 'AI BOT', title: 'Brand AI Chatbot' },
    { num: '02', type: 'E-COM', title: 'Platform Design' },
    { num: '03', type: 'MOBILE', title: 'SaaS Dashboard' },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col pt-[72px]">
      <main className="flex-1 flex flex-col md:flex-row relative">
        {/* Left Sidebar - About Summary */}
        <div className="hidden lg:flex w-[320px] p-10 flex-col justify-center border-r-[0.5px] border-border z-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-green text-[10px] font-bold tracking-[0.2em] mb-4 block"
          >
            ABOUT ME
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl leading-[1.1] font-bold mb-6"
          >
            I design & build products that convert.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[13px] text-gray leading-relaxed mb-8"
          >
            Based in Morocco, specializing in AI-driven web apps and high-end digital design.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1.5 border border-green rounded-full text-[10px] font-semibold">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Center - Giant Text & Photo */}
        <div className="flex-1 relative flex flex-col items-center justify-center overflow-hidden min-h-[60vh] md:min-h-0">
          {/* Giant Text Layer 1 */}
          <motion.h1 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 0.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-10 text-[24vw] lg:text-[240px] leading-[0.8] text-black z-0 pointer-events-none whitespace-nowrap font-display tracking-[-10px]"
          >
            OUAIL
          </motion.h1>

          {/* Photo Container */}
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[280px] md:w-[340px] aspect-[3/4.2] bg-green z-10 overflow-hidden shadow-2xl flex items-end justify-center"
          >
            <div className="absolute inset-0 hero-photo bg-[url('/my-hero-image.png')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* Giant Text Layer 2 */}
          <motion.h1 
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 0.05 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-10 text-[24vw] lg:text-[240px] leading-[0.8] text-black z-0 pointer-events-none whitespace-nowrap font-display tracking-[-10px]"
          >
            AKKAD
          </motion.h1>

          {/* CTAs */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-16 flex flex-col items-center space-y-6 z-30"
          >
            <div className="bg-green text-black px-4 py-1 font-extrabold uppercase text-[11px] tracking-wider">
              AI Developer & Builder
            </div>
            <div className="flex space-x-3">
              <Link to="/works" className="bg-black text-white px-8 py-3.5 rounded-full text-[12px] font-bold uppercase transition-transform hover:scale-105 active:scale-95 interactive">
                View Works
              </Link>
              <a href="#contact" className="bg-white text-black border border-black px-8 py-3.5 rounded-full text-[12px] font-bold uppercase hover:bg-black hover:text-white transition-all interactive">
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Sidebar - Works Summary */}
        <div className="hidden lg:flex w-[320px] p-10 flex-col justify-center border-l-[0.5px] border-border z-20">
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gray text-[10px] font-bold tracking-[0.2em] mb-8 block"
          >
            FEATURED WORKS
          </motion.span>
          <div className="flex flex-col gap-8">
            {featured.map((work, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="border-b border-border pb-4 group"
              >
                <div className="text-[10px] text-gray mb-1">{work.num} — {work.type}</div>
                <div className="font-bold text-lg group-hover:text-green transition-colors">{work.title}</div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-[12px] font-bold cursor-none group interactive"
          >
            <a href="#works" className="flex items-center">
              VIEW ALL PROJECTS <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </main>

      {/* Marquee Ticker */}
      <div className="w-full bg-black py-4 marquee-container overflow-hidden shrink-0">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-10 px-5">
              <span className="text-green font-display text-lg uppercase font-black tracking-widest leading-none">Website Development</span>
              <span className="text-green text-xl opacity-50">•</span>
              <span className="text-green font-display text-lg uppercase font-black tracking-widest leading-none">Mobile App Design</span>
              <span className="text-green text-xl opacity-50">•</span>
              <span className="text-green font-display text-lg uppercase font-black tracking-widest leading-none">AI Chatbot Integration</span>
              <span className="text-green text-xl opacity-50">•</span>
              <span className="text-green font-display text-lg uppercase font-black tracking-widest leading-none">Web App Development</span>
              <span className="text-green text-xl opacity-50">•</span>
              <span className="text-green font-display text-lg uppercase font-black tracking-widest leading-none">Brand Strategy</span>
              <span className="text-green text-xl opacity-50">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
