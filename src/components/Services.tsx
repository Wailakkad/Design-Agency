import { Globe, Layout, Bot, Code } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      id: '01',
      title: 'Website Development',
      icon: <Globe className="w-8 h-8 text-green" />,
      desc: 'Fast, responsive, SEO-optimized websites built to convert visitors into customers.'
    },
    {
      id: '02',
      title: 'Web & Mobile App Design',
      icon: <Layout className="w-8 h-8 text-green" />,
      desc: 'Clean UI/UX for web platforms and mobile apps — designed in Figma, built to pixel perfection.'
    },
    {
      id: '03',
      title: 'AI Chatbot Integration',
      icon: <Bot className="w-8 h-8 text-green" />,
      desc: 'Custom AI chatbots for customer support and lead generation — trained on your business data.'
    },
    {
      id: '04',
      title: 'Full-Stack Development',
      icon: <Code className="w-8 h-8 text-green" />,
      desc: 'End-to-end development from database to deployment using modern stacks.'
    }
  ];

  return (
    <section id="services" className="w-full bg-white py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <h2 className="text-[clamp(2.5rem,15vw,120px)] leading-none text-muted-bg select-none font-black tracking-[-2px] md:tracking-[-8px]">SERVICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white border-r border-b border-border p-6 md:p-10 relative flex flex-col space-y-6 md:space-y-12 transition-all group hover:bg-muted-bg/30"
            >
              <div className="absolute top-6 right-8 font-display text-4xl text-gray/10 group-hover:text-gray/20 transition-colors">
                {service.id}
              </div>
              
              <div className="pt-4 filter grayscale group-hover:grayscale-0 transition-all">
                {service.icon}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="text-[13px] text-gray leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
