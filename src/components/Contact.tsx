import { useState } from 'react';
import { Instagram, Linkedin, Github, X } from 'lucide-react';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [service, setService] = useState('Website Development');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !details) return;

    const message = `*New Project Inquiry*
*Name:* ${firstName} ${lastName}
*Service:* ${service}
*Email:* ${email}
*Details:* ${details}`;

    window.open(`https://wa.me/212717837586?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="w-full bg-black text-white py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        {/* Left */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl leading-tight">
              Let's build<br />the future<br />together
            </h2>
            <p className="text-gray text-xl max-w-sm">
              Have a project in mind? Let's talk about how AI can scale your brand.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:akkadouail8@gmail.com" className="text-xl sm:text-3xl md:text-4xl text-green hover:underline break-all interactive transition-all">
              akkadouail8@gmail.com
            </a>
            
            <div className="flex flex-wrap gap-4 md:gap-8 pt-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', handle: '@o_akkad.ai', url: 'https://www.instagram.com/o_akkad.ai/' },
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', handle: 'ouail-akkad', url: 'https://linkedin.com/in/akkad-ouail-91456a301' },
                { icon: <X className="w-5 h-5" />, label: 'X (Twitter)', handle: '@Ouail_akkad_Ai', url: 'https://x.com/Ouail_akkad_Ai' },
                { icon: <Github className="w-5 h-5" />, label: 'GitHub', handle: 'ouailakkad', url: 'https://github.com/Wailakkad' }
              ].map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray hover:text-green transition-colors interactive">
                  {social.icon}
                  <span className="text-[10px] font-bold uppercase tracking-widest">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-dark p-8 md:p-12 border border-white/5">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray">First Name</label>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-green outline-none text-sm transition-colors" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray">Last Name</label>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-green outline-none text-sm transition-colors" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray">Service</label>
              <select value={service} onChange={e => setService(e.target.value)} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-green outline-none text-sm transition-colors cursor-none appearance-none">
                <option className="bg-dark">Website Development</option>
                <option className="bg-dark">Web App Design</option>
                <option className="bg-dark">Mobile App Design</option>
                <option className="bg-dark">AI Chatbot Integration</option>
                <option className="bg-dark">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-green outline-none text-sm transition-colors" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray">Project Details</label>
              <textarea rows={4} value={details} onChange={e => setDetails(e.target.value)} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-green outline-none text-sm transition-colors resize-none" placeholder="Tell me about your project..." />
            </div>

            <button type="submit" className="w-full bg-green text-black py-4 font-display text-xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all interactive">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
