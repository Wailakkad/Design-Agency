import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-10 border-t border-green pt-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center h-20 border-b border-white/5">
          <div className="font-display font-black text-lg tracking-tight">OUAIL AKKAD</div>
          
          <div className="hidden md:flex gap-10">
            {[
              { label: 'About', href: '#about' },
              { label: 'Works', href: '/works', isRoute: true },
              { label: 'Services', href: '#services' },
              { label: 'Contact', href: '#contact' }
            ].map((item) => (
              item.isRoute ? (
                <Link key={item.label} to={item.href} className="text-[11px] uppercase font-bold tracking-[0.2em] hover:text-green transition-colors interactive">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="text-[11px] uppercase font-bold tracking-[0.2em] hover:text-green transition-colors interactive">
                  {item.label}
                </a>
              )
            ))}
          </div>

          <div className="flex gap-6">
            {['Instagram', 'Linkedin', 'Github'].map((social) => (
              <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray hover:text-white transition-colors interactive">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center h-16 text-[10px] text-gray uppercase tracking-[0.2em] font-bold">
          <p>© 2025 OUAIL AKKAD — Helping brands grow smarter with AI</p>
          <p>@O_AKKAD.AI • MOROCCO</p>
        </div>
      </div>
    </footer>
  );
}
