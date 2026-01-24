
import React from 'react';
import { Gavel, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { LIVE_AUCTIONS } from '../constants';

interface LiveAuctionsProps {
  onSeeAll?: () => void;
  onItemClick?: (id: string) => void;
}

const LiveAuctions: React.FC<LiveAuctionsProps> = ({ onSeeAll, onItemClick }) => {
  return (
    <section id="live" className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
              Happening Now
            </div>
            <h2 className="text-4xl font-serif font-bold text-white">Live <span className="luxury-text-gradient italic">Showcase</span></h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="p-3 border border-brand-gold/30 rounded-full hover:border-brand-gold text-brand-gold transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-3 bg-brand-gold text-brand-navy rounded-full hover:brightness-110 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LIVE_AUCTIONS.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onItemClick?.(item.id)}
              className="group relative bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-brand-gold/50 transition-all duration-500 flex flex-col h-full cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-sm text-[10px] font-bold text-white uppercase tracking-widest animate-pulse">
                  Live
                </div>
                <div className="absolute top-4 right-4 bg-brand-navy/80 backdrop-blur-md px-3 py-1 rounded-sm border border-brand-gold/30 text-[10px] font-bold text-brand-gold uppercase tracking-widest flex items-center gap-1.5">
                  <Users className="w-3 h-3" />
                  {item.bidCount} Bids
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="text-xl font-serif font-semibold text-white mb-4 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-brand-slate uppercase tracking-wider mb-1">Current Bid</p>
                      <p className="text-2xl font-serif font-bold text-white">
                        ${item.currentBid.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-brand-slate uppercase tracking-wider mb-1">Ends In</p>
                      <p className="text-sm font-bold text-brand-gold flex items-center justify-end gap-1">
                        <Clock className="w-3 h-3" /> 02:41:15
                      </p>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
                    <Gavel className="w-4 h-4" /> Place Bid
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={onSeeAll}
            className="inline-flex items-center gap-3 text-brand-gold hover:text-white transition-colors group"
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em]">Discover all live lots</span>
            <div className="w-12 h-px bg-brand-gold group-hover:w-20 transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveAuctions;
