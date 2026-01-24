
import React from 'react';
import { UserPlus, Gavel, Trophy, Truck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Register Profile',
      desc: 'Verify your credentials and gain access to our worldwide auction network.'
    },
    {
      icon: Gavel,
      title: 'Place Bids',
      desc: 'Engage in real-time or absentee bidding on our secure high-fidelity platform.'
    },
    {
      icon: Trophy,
      title: 'Winning Bid',
      desc: 'Our legal team handles all documentation and ownership transfers.'
    },
    {
      icon: Truck,
      title: 'Premium Delivery',
      desc: 'White-glove, insured international shipping directly to your doorstep.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-charcoal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/20 -skew-x-12"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">A Seamless <span className="luxury-text-gradient italic">Acquisition</span></h2>
          <div className="w-24 h-px bg-brand-gold mx-auto opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[1px] bg-gradient-to-r from-brand-gold/30 to-transparent"></div>
              )}
              <div className="w-24 h-24 rounded-full border border-brand-gold/20 flex items-center justify-center mb-8 relative bg-brand-navy shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <span className="absolute -top-2 -left-2 w-8 h-8 rounded-full luxury-gradient flex items-center justify-center text-brand-navy font-bold text-xs shadow-lg">
                  0{idx + 1}
                </span>
                <step.icon className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">{step.title}</h3>
              <p className="text-brand-slate text-sm font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
