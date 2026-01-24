
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Star, 
  ChevronRight, 
  Plus, 
  Minus, 
  Maximize2, 
  Video, 
  RotateCw, 
  Award, 
  Truck, 
  CreditCard, 
  MessageCircle,
  Gavel,
  CheckCircle2,
  Info,
  Palette,
  Sparkles,
  Smartphone,
  MessageSquare,
  Zap,
  // Added Users icon for the bid count trigger
  Users 
} from 'lucide-react';
import { DETAILED_ITEM } from '../constants';
import { BidEntry, QuestionEntry } from '../types';
import BidHistoryModal from './BidHistoryModal';

interface AuctionDetailPageProps {
  onBack: () => void;
  onLoginClick: () => void;
}

const AuctionDetailPage: React.FC<AuctionDetailPageProps> = ({ onBack, onLoginClick }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [bidAmount, setBidAmount] = useState(DETAILED_ITEM.currentBid + (DETAILED_ITEM.bidIncrement || 10000));
  const [isWatching, setIsWatching] = useState(false);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ d: 2, h: 3, m: 45, s: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const bidHistory: BidEntry[] = [
    { bidderId: 'Buyer_882', amount: 850000, time: 'Dec 23, 10:42 AM' },
    { bidderId: 'S. Thapa', amount: 840000, time: 'Dec 23, 09:15 AM' },
    { bidderId: 'ArtLover_NP', amount: 820000, time: 'Dec 22, 11:30 PM' },
    { bidderId: 'GlobalCollector', amount: 800000, time: 'Dec 22, 06:10 PM' }
  ];

  const handleIncrement = (val: number) => setBidAmount(prev => prev + val);

  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-gold selection:text-brand-navy pb-32 lg:pb-0">
      <div className="nepal-pattern opacity-10 fixed inset-0 pointer-events-none"></div>
      
      {/* Bid History Modal Integration */}
      <BidHistoryModal 
        isOpen={isHistoryOpen} 
        onClose={() => setIsHistoryOpen(false)}
        bidCount={24}
        currentBid={DETAILED_ITEM.currentBid}
        history={bidHistory}
      />

      {/* Top Header / Nav */}
      <div className="sticky top-0 z-50 bg-brand-navy/90 backdrop-blur-md border-b border-brand-gold/10 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Auctions
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 text-brand-slate hover:text-brand-gold transition-colors"><Share2 className="w-4 h-4" /></button>
            <button 
              onClick={() => setIsWatching(!isWatching)}
              className={`p-2 transition-colors ${isWatching ? 'text-red-500' : 'text-brand-slate hover:text-red-500'}`}
            >
              <Heart className={`w-4 h-4 ${isWatching ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Media Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/3] bg-brand-charcoal overflow-hidden group border border-white/5 rounded-sm">
              <img 
                src={DETAILED_ITEM.thumbnails?.[selectedImg] || DETAILED_ITEM.imageUrl} 
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" 
                alt={DETAILED_ITEM.title} 
              />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <button className="bg-brand-navy/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-brand-gold hover:text-brand-navy transition-all">
                  <Maximize2 className="w-3.5 h-3.5" /> Zoom
                </button>
                <button className="bg-brand-navy/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-brand-gold hover:text-brand-navy transition-all">
                  <Video className="w-3.5 h-3.5" /> Tour
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {DETAILED_ITEM.thumbnails?.map((thumb, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`w-20 h-20 flex-shrink-0 border transition-all ${selectedImg === i ? 'border-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]' : 'border-white/10 opacity-60 hover:opacity-100'}`}
                >
                  <img src={thumb} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>

            {/* Local Mobile Alerts Toggles */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-sm flex items-center justify-between group cursor-pointer" onClick={() => setSmsAlerts(!smsAlerts)}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${smsAlerts ? 'bg-brand-gold text-brand-navy' : 'bg-white/10 text-brand-slate'}`}>
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">SMS Bid Alerts</span>
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-all ${smsAlerts ? 'bg-brand-gold' : 'bg-white/20'}`}>
                  <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${smsAlerts ? 'left-6' : 'left-1'}`}></div>
                </div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-sm flex items-center justify-between opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 text-brand-slate">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">WhatsApp Updates</span>
                </div>
                <span className="text-[8px] font-bold text-brand-gold uppercase tracking-tighter">Verified Only</span>
              </div>
            </div>
          </div>

          {/* Right Column: Auction Info & Bidding */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest border-b border-brand-gold/30 pb-0.5">Lot {DETAILED_ITEM.id}</span>
                <div className="bg-red-600 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest animate-pulse rounded-sm">Live</div>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                {DETAILED_ITEM.title}
              </h1>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-[11px] text-brand-slate font-medium uppercase tracking-widest">
                  <Palette className="w-4 h-4 text-brand-gold" /> {DETAILED_ITEM.category}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-brand-slate font-medium uppercase tracking-widest">
                  <MapPin className="w-4 h-4 text-brand-gold" /> {DETAILED_ITEM.location}
                </div>
              </div>
            </div>

            {/* Bidding Card */}
            <div className="bg-brand-charcoal/50 border border-brand-gold/20 p-6 md:p-8 rounded-sm shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 luxury-gradient"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                  <p className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-bold mb-2">Time Remaining</p>
                  <div className="flex gap-4">
                    {Object.entries(timeLeft).map(([k, v]) => (
                      <div key={k} className="flex flex-col items-center">
                        <span className="text-2xl font-serif font-bold text-white">{v.toString().padStart(2, '0')}</span>
                        <span className="text-[8px] text-brand-slate uppercase font-bold tracking-widest">{k}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <p className="text-[10px] text-brand-slate uppercase tracking-widest">Current Bid</p>
                    {/* Trigger for the Bid History Modal */}
                    <button 
                      onClick={() => setIsHistoryOpen(true)}
                      className="flex items-center gap-1 bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 rounded-full text-[9px] text-brand-gold font-bold hover:bg-brand-gold hover:text-brand-navy transition-all"
                    >
                      <Users className="w-2.5 h-2.5" />
                      24 Bids
                    </button>
                  </div>
                  <p className="text-3xl font-serif font-bold luxury-text-gradient">रु {DETAILED_ITEM.currentBid.toLocaleString()}</p>
                  <p className="text-[10px] text-brand-slate font-bold uppercase tracking-widest mt-1">~ USD $6,375</p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/5">
                {/* Bid Input Area */}
                <div className="space-y-4">
                   <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold font-bold text-sm">रु</div>
                      <input 
                        type="text" 
                        value={bidAmount.toLocaleString()} 
                        readOnly
                        className="w-full bg-white/5 border border-white/10 rounded-sm py-5 pl-12 pr-4 text-xl font-bold text-white focus:outline-none focus:border-brand-gold transition-all"
                      />
                      <div className="absolute right-2 top-2 bottom-2 flex flex-col gap-1">
                         <button onClick={() => handleIncrement(10000)} className="flex-grow px-3 bg-brand-navy/60 hover:bg-brand-gold hover:text-brand-navy transition-all rounded-sm text-brand-gold"><Plus className="w-3.5 h-3.5" /></button>
                         <button onClick={() => setBidAmount(prev => Math.max(prev - 10000, DETAILED_ITEM.currentBid + (DETAILED_ITEM.bidIncrement || 10000)))} className="flex-grow px-3 bg-brand-navy/60 hover:bg-brand-gold hover:text-brand-navy transition-all rounded-sm text-brand-gold"><Minus className="w-3.5 h-3.5" /></button>
                      </div>
                   </div>

                   <div className="grid grid-cols-3 gap-2">
                      {[10000, 25000, 50000].map(val => (
                        <button 
                          key={val}
                          onClick={() => handleIncrement(val)}
                          className="py-3 bg-white/5 border border-white/10 rounded-sm text-[10px] font-bold text-brand-slate hover:border-brand-gold hover:text-brand-gold transition-all uppercase tracking-widest"
                        >
                          + रु {val.toLocaleString()}
                        </button>
                      ))}
                   </div>
                </div>

                <button className="hidden md:flex w-full luxury-gradient py-5 rounded-sm text-brand-navy font-bold text-sm uppercase tracking-[0.3em] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all items-center justify-center gap-3">
                  <Gavel className="w-5 h-5" /> Place Bid
                </button>
              </div>
            </div>

            {/* Specialized Mobile Payment Options */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-sm space-y-4">
              <h3 className="text-[10px] text-brand-gold font-bold uppercase tracking-widest flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5" /> Mobile Checkout Partners
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-white px-2 py-1 rounded shadow-sm opacity-80 hover:opacity-100 transition-opacity">
                  <img src="https://esewa.com.np/common/images/esewa_logo.png" className="h-4" alt="eSewa" />
                </div>
                <div className="flex items-center gap-2 bg-[#5C2D91] px-2 py-1 rounded shadow-sm opacity-80 hover:opacity-100 transition-opacity">
                  <img src="https://khalti.com/static/khalti-logo.png" className="h-4" alt="Khalti" />
                </div>
                <div className="text-[10px] font-bold text-white bg-white/10 px-3 py-1.5 rounded uppercase tracking-widest">ConnectIPS</div>
              </div>
              <p className="text-[9px] text-brand-slate italic uppercase tracking-widest">1-Tap Verification Enabled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Floating Bid Bar (High Mobile Optimization) */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-50 animate-in slide-in-from-bottom-12">
        <div className="bg-brand-navy/95 backdrop-blur-xl border-t border-brand-gold/30 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <p className="text-[8px] text-brand-slate uppercase tracking-widest font-bold">Current Bid</p>
            <p className="text-lg font-serif font-bold text-brand-gold">रु 8.5L</p>
          </div>
          <div className="flex-grow flex gap-2">
            <button className="flex-grow luxury-gradient py-3.5 rounded-sm text-brand-navy font-bold text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
               <Gavel className="w-4 h-4" /> Place Bid
            </button>
            <button className="p-3.5 bg-white/10 border border-white/20 rounded-sm text-brand-gold">
               <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetailPage;
