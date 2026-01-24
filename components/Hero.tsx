
import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, ShieldCheck, Trophy } from 'lucide-react';

interface HeroProps {
  onLiveClick?: () => void;
  onUpcomingClick?: () => void;
  onRegisterClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLiveClick, onUpcomingClick, onRegisterClick }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // 3 days from now
    targetDate.setHours(20, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / 1000 / 60) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-brand-navy z-0">
        <img 
          src="https://images.unsplash.com/photo-1544933863-482c6ca021f2?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_8s_infinite]" 
          alt="Luxury background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full text-brand-gold text-xs font-bold tracking-widest uppercase mb-6">
            <Trophy className="w-3 h-3" />
            Curated Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Where Rare Finds <br />
            <span className="luxury-text-gradient">Meet Discerning Buyers</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-slate max-w-xl mb-10 font-light leading-relaxed">
            The world's most prestigious online marketplace for rare artifacts, luxury timepieces, and blue-chip collectibles.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onLiveClick}
              className="luxury-gradient px-8 py-4 rounded-sm text-brand-navy font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
            >
              View Live Auctions <ChevronRight className="w-4 h-4" />
            </button>
            <button 
              onClick={onUpcomingClick}
              className="bg-white/5 border border-white/20 px-8 py-4 rounded-sm text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Explore Upcoming
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
              <span className="text-sm font-medium text-brand-slate italic">Secured & Authenticated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/50?u=${i}`} className="w-8 h-8 rounded-full border-2 border-brand-navy" alt="User" />
                ))}
              </div>
              <span className="text-sm font-medium text-brand-slate">Joined by 12k+ Collectors</span>
            </div>
          </div>
        </div>

        {/* Countdown Box */}
        <div className="hidden lg:flex flex-col items-center justify-center animate-in fade-in zoom-in duration-1000">
          <div className="bg-white/5 backdrop-blur-xl border border-brand-gold/20 p-10 rounded-lg shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-brand-gold animate-pulse" />
              </div>
            </div>
            
            <h3 className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-2">Grand Auction Begins</h3>
            <h4 className="text-2xl font-serif text-white mb-8">The "Platinum Era" Collection</h4>
            
            <div className="flex gap-6 mb-10">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="flex flex-col items-center min-w-[70px]">
                  <span className="text-4xl font-serif font-bold text-white mb-1">{value.toString().padStart(2, '0')}</span>
                  <span className="text-[10px] text-brand-gold uppercase tracking-widest opacity-70">{label}</span>
                </div>
              ))}
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent mb-8"></div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-brand-slate font-light italic">Featured Item</span>
                <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">Heritage Rolex Daytona</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-brand-slate font-light italic">Valuation</span>
                <span className="text-white font-serif font-bold">$250,000 - $450,000</span>
              </div>
            </div>

            <button 
              onClick={onRegisterClick}
              className="w-full mt-8 bg-brand-gold/10 border border-brand-gold text-brand-gold py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all"
            >
              Register to Bid
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
