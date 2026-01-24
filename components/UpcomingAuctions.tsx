
import React from 'react';
import { Calendar, Eye } from 'lucide-react';
import { UPCOMING_AUCTIONS } from '../constants';

interface UpcomingAuctionsProps {
  onExploreClick?: () => void;
}

const UpcomingAuctions: React.FC<UpcomingAuctionsProps> = ({ onExploreClick }) => {
  return (
    <section id="upcoming" className="py-24 bg-brand-charcoal">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-4 text-center">Exclusive <span className="luxury-text-gradient italic">Previews</span></h2>
          <p className="text-brand-slate text-center max-w-2xl mx-auto font-light leading-relaxed">
            Reserve your place for our most anticipated events. Browse upcoming highlights from our global curation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPCOMING_AUCTIONS.map((item) => (
            <div key={item.id} className="bg-brand-navy border border-white/5 group hover:border-brand-gold/30 transition-all">
              <div className="relative aspect-square overflow-hidden">
                <img src={item.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} />
                <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button 
                    onClick={onExploreClick}
                    className="w-10 h-10 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-3 h-3 text-brand-gold" />
                  <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">
                    {item.endTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-medium text-white mb-4 line-clamp-1">{item.title}</h3>
                <div className="flex items-end justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-[10px] text-brand-slate uppercase block mb-1">Estimate Starts</span>
                    <span className="text-lg font-serif text-white">${item.startingPrice?.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={onExploreClick}
                    className="text-xs font-bold text-brand-gold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingAuctions;
