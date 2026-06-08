import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Link as RouterLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      style={{ height, borderBottomWidth: '0.5px' }}
      className="fixed top-0 left-0 w-full bg-white z-50 flex items-center px-6 md:px-10 border-border text-black"
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <RouterLink to="/" className="font-display text-lg font-black tracking-tight shrink-0">OUAIL AKKAD</RouterLink>
        
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

        <div className="flex items-center gap-3">
          <a href="/#contact" className="hidden md:inline-block bg-black text-white px-5 py-2.5 rounded-[4px] text-[11px] font-semibold uppercase tracking-wider hover:scale-105 transition-transform interactive">
            Get in touch
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black interactive"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-t border-border md:hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <RouterLink
                    key={link.id}
                    to="/works"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[14px] uppercase font-semibold tracking-wider py-2 hover:text-green transition-colors"
                  >
                    {link.title}
                  </RouterLink>
                ) : (
                  <a
                    key={link.id}
                    href={`/#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[14px] uppercase font-semibold tracking-wider py-2 hover:text-green transition-colors"
                  >
                    {link.title}
                  </a>
                )
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-black text-white text-center px-5 py-3 rounded-[4px] text-[12px] font-semibold uppercase tracking-wider"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
