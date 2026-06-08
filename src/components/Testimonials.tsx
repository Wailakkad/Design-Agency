export default function Testimonials() {
  const items = [
    {
      name: 'Sarah Chen',
      role: 'Founder of TechFlow',
      quote: "Ouail's ability to integrate AI into our existing platform was a game changer. The chatbot he built for us reduced support tickets by 40% in just two months.",
      avatar: 'SC'
    },
    {
      name: 'Marcus Thorne',
      role: 'Marketing Director',
      quote: "Working with Ouail was seamless. He took our rough ideas and turned them into a stunning, high-converting website that truly represents our brand identity.",
      avatar: 'MT'
    },
    {
      name: 'Elena Rodriguez',
      role: 'UX Architect',
      quote: "A true professional. Ouail's attention to detail in the mobile design phase was impressive. He perfectly balanced aesthetic beauty with functional precision.",
      avatar: 'ER'
    }
  ];

  return (
    <section className="w-full bg-white py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-4">
          <span className="text-green text-[10px] font-bold uppercase tracking-[0.3em]">TESTIMONIALS</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-[-2px] md:tracking-[-4px]">What clients say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-border">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-10 border-r border-b border-border flex flex-col justify-between space-y-12 group hover:bg-muted-bg/30 transition-colors">
              <p className="text-xl leading-relaxed font-medium">
                "{item.quote}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-sm bg-black text-white flex items-center justify-center font-display text-lg font-black bg-gradient-to-br from-black to-dark">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-extrabold text-[13px] uppercase tracking-wider">{item.name}</h4>
                  <p className="text-[10px] text-gray uppercase tracking-widest font-bold">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
