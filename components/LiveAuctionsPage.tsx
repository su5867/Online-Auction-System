
import React, { useState, useEffect } from 'react';
import { 
  Gavel, 
  Clock, 
  Users, 
  Filter, 
  ChevronDown, 
  Grid, 
  List, 
  Search, 
  Heart, 
  Share2, 
  MapPin, 
  ArrowLeft,
  Maximize2,
  Scan,
  MessageSquare,
  ShieldCheck,
  Zap,
  ChevronRight,
  Plus
} from 'lucide-react';
import { LIVE_AUCTIONS } from '../constants';

interface LiveAuctionsPageProps {
  onBack: () => void;
  onLoginClick: () => void;
  onItemClick?: (id: string) => void;
}

const LiveAuctionsPage: React.FC<LiveAuctionsPageProps> = ({ onBack, onLoginClick, onItemClick }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState('All');
  const [bids, setBids] = useState<Record<string, number>>({});
  const [notification, setNotification] = useState<string | null>(null);

  // Initialize bids from mock data
  useEffect(() => {
    const initialBids: Record<string, number> = {};
    LIVE_AUCTIONS.forEach(item => {
      initialBids[item.id] = item.currentBid;
    });
    setBids(initialBids);
  }, []);

  const categories = [
    'All', 'Art', 'Jewelry', 'Watches', 'Vehicles', 'Antiques', 'Real Estate'
  ];

  const handleQuickBid = (id: string, increment: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setBids(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + increment
    }));
    setNotification(`You just bid रु ${(increment).toLocaleString()} on item #${id.slice(0, 4)}!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-brand-navy nepal-pattern">
      <div className="mandala-overlay opacity-20"></div>

      {/* Hero Header */}
      <header className="relative py-20 bg-brand-navy/60 backdrop-blur-lg border-b border-brand-gold/20">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <button 
            onClick={onBack}
            className="absolute top-0 left-0 flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          
          <div className="inline-flex items-center gap-3 bg-red-600/10 border border-red-600/30 px-4 py-1.5 rounded-full text-red-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            Live Auctions
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            Elite <span className="luxury-text-gradient italic">Showroom</span>
          </h1>
          <p className="text-brand-slate max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Bid in real-time on exclusive items from across Nepal. Join the most prestigious collection of collectors and connoisseurs.
          </p>
          <div className="flex justify-center gap-8 border-t border-white/5 pt-8 max-w-xl mx-auto">
             <div>
                <p className="text-2xl font-serif font-bold text-white">12</p>
                <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">Auctions Live</p>
             </div>
             <div className="w-px h-10 bg-white/10"></div>
             <div>
                <p className="text-2xl font-serif font-bold text-white">458</p>
                <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">Active Bidders</p>
             </div>
             <div className="w-px h-10 bg-white/10"></div>
             <div>
                <p className="text-2xl font-serif font-bold text-white">00:45:12</p>
                <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">Next Close</p>
             </div>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="bg-brand-navy/90 sticky top-0 z-40 border-b border-brand-gold/10">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeTab === cat ? 'luxury-gradient text-brand-navy shadow-lg' : 'bg-white/5 text-brand-slate hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-slate" />
              <input 
                type="text" 
                placeholder="Search live lots..." 
                className="bg-white/5 border border-white/10 py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-brand-gold transition-all w-64 rounded-sm"
              />
            </div>
            <div className="flex border border-white/10 rounded-sm">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-brand-gold text-brand-navy' : 'text-brand-slate hover:text-white'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-brand-gold text-brand-navy' : 'text-brand-slate hover:text-white'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-brand-slate hover:text-white transition-all rounded-sm">
              <Filter className="w-3 h-3" /> Filters
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        {/* Main Feed */}
        <div className="flex-grow">
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-8' : 'flex flex-col gap-8'}>
            {LIVE_AUCTIONS.map((item) => (
              <div 
                key={item.id} 
                onClick={() => onItemClick?.(item.id)}
                className={`bg-brand-navy/40 border border-white/10 rounded-sm overflow-hidden group hover:border-brand-gold/30 transition-all cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
              >
                {/* Media Container */}
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-1/3' : 'aspect-[4/3]'}`}>
                  <img src={item.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-red-600 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest animate-pulse rounded-sm">Live</span>
                    <span className="bg-brand-navy/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-brand-gold uppercase tracking-widest rounded-sm flex items-center gap-1.5">
                      <Zap className="w-3 h-3" /> Trending
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className={`p-6 flex flex-col flex-grow ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mb-1">{item.category}</p>
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-brand-gold transition-colors">{item.title}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1 text-[10px] text-brand-slate font-medium uppercase tracking-widest">
                      <MapPin className="w-3 h-3" /> Bhairahawa, Nepal
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-brand-gold font-bold uppercase tracking-widest">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified Seller
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8 bg-white/5 p-4 border border-white/5 rounded-sm">
                    <div>
                      <p className="text-[10px] text-brand-slate uppercase tracking-widest mb-1">Current Bid (NPR)</p>
                      <p className="text-2xl font-serif font-bold text-white">रु {bids[item.id]?.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-brand-slate uppercase tracking-widest mb-1">Ends In</p>
                      <div className="flex items-center justify-end gap-1.5 text-brand-gold font-bold">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">00:15:21</span>
                      </div>
                    </div>
                  </div>

                  {/* Bidding Area */}
                  <div className="mt-auto space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={(e) => handleQuickBid(item.id, 10000, e)}
                        className="bg-white/5 border border-brand-gold/30 text-brand-gold py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold/10 transition-all"
                      >
                        + रु 10,000
                      </button>
                      <button 
                        onClick={(e) => handleQuickBid(item.id, 50000, e)}
                        className="bg-white/5 border border-brand-gold/30 text-brand-gold py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold/10 transition-all"
                      >
                        + रु 50,000
                      </button>
                    </div>
                    <button className="w-full luxury-gradient py-3 rounded-sm text-brand-navy font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-80 flex-shrink-0 space-y-8">
          <div className="bg-brand-navy/60 border border-white/10 p-6 rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold" /> Closing Timers
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Rolex Heritage', time: '00:02:14', color: 'text-red-500' },
                { label: 'Ferrari 250 GTO', time: '00:15:45', color: 'text-brand-gold' },
                { label: 'Thangka Painting', time: '01:22:10', color: 'text-brand-gold' }
              ].map((timer, idx) => (
                <div key={idx} className="flex justify-between items-center bg-white/5 p-3 rounded-sm">
                  <span className="text-xs text-brand-slate font-medium">{timer.label}</span>
                  <span className={`text-xs font-bold font-mono ${timer.color}`}>{timer.time}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Floating Notification */}
      {notification && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-8">
           <div className="bg-brand-gold text-brand-navy px-8 py-3 rounded-full shadow-2xl flex items-center gap-3">
              <Zap className="w-5 h-5 fill-brand-navy" />
              <span className="text-xs font-bold uppercase tracking-widest">{notification}</span>
           </div>
        </div>
      )}
    </div>
  );
};

export default LiveAuctionsPage;
