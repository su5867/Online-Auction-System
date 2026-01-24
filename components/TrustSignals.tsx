
import React from 'react';
import { Quote } from 'lucide-react';
import { PARTNERS, TESTIMONIALS } from '../constants';

const TrustSignals: React.FC = () => {
  return (
    <section className="py-24 bg-brand-navy border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Partner Logos */}
        <div className="mb-24">
          <p className="text-center text-[10px] text-brand-gold uppercase font-bold tracking-[0.4em] mb-12 opacity-70">As Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {PARTNERS.map(partner => (
              <span key={partner} className="text-2xl font-serif text-white font-bold tracking-tight italic">{partner}</span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-brand-charcoal/50 p-12 rounded-lg border border-white/5">
          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-8">Voices of <br /><span className="luxury-text-gradient">The Elite Community</span></h2>
            <p className="text-brand-slate max-w-md font-light leading-relaxed mb-8">
              Discover why the world's most prestigious collectors choose Elite Auctions for their acquisitions and consignments.
            </p>
            <div className="flex gap-4">
              <button className="w-12 h-12 border border-brand-gold/30 rounded-full flex items-center justify-center text-brand-gold hover:border-brand-gold transition-colors">←</button>
              <button className="w-12 h-12 border border-brand-gold/30 rounded-full flex items-center justify-center text-brand-gold hover:border-brand-gold transition-colors">→</button>
            </div>
          </div>

          <div className="space-y-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-brand-navy p-8 border border-white/5 relative">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-brand-gold/10" />
                <p className="text-lg text-white font-serif italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} className="w-12 h-12 rounded-full border-2 border-brand-gold/30" alt={t.name} />
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                    <p className="text-brand-gold text-[10px] uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
