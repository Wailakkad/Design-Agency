import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const { scrollY } = useScroll();
  
  const height = useTransform(scrollY, [0, 100], [72, 64]);
  const borderOpacity = useTransform(scrollY, [0, 20], [0, 1]);

  const navLinks = [
    { title: 'About', id: 'about' },
    { title: 'Works', id: 'works', isRoute: true },
    { title: 'Services', id: 'services' },
    { title: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navLinks.filter(l => !l.isRoute).forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      style={{ height, borderBottomWidth: '0.5px' }}
      className="fixed top-0 left-0 w-full bg-white z-50 flex items-center px-10 border-border text-black"
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <RouterLink to="/" className="font-display text-lg font-black tracking-tight">OUAIL AKKAD</RouterLink>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <RouterLink
                key={link.id}
                to="/works"
                className="relative text-[12px] uppercase font-semibold tracking-wider hover:text-green transition-colors"
              >
                {link.title}
              </RouterLink>
            ) : (
              <a
                key={link.id}
                href={`/#${link.id}`}
                className="relative text-[12px] uppercase font-semibold tracking-wider hover:text-green transition-colors"
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-green rounded-full shadow-[0_0_5px_rgba(170,255,0,0.5)]"
                  />
                )}
                {link.title}
              </a>
            )
          ))}
        </div>

        <a href="/#contact" className="bg-black text-white px-5 py-2.5 rounded-[4px] text-[11px] font-semibold uppercase tracking-wider hover:scale-105 transition-transform interactive">
          Get in touch
        </a>
      </div>
    </motion.nav>
  );
}
