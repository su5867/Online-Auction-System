
import React, { useState, useEffect } from 'react';
import { 
  Gavel, 
  Heart, 
  Trophy, 
  Wallet, 
  Bell, 
  Plus, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  MoreVertical,
  ChevronRight,
  User,
  ArrowLeft,
  Settings,
  CreditCard,
  Users,
  X,
  Info,
  Smartphone,
  Hash,
  ShieldAlert
} from 'lucide-react';

interface DashboardProps {
  onBack: () => void;
  onCreateAuction?: () => void;
}

const UserDashboard: React.FC<DashboardProps> = ({ onBack, onCreateAuction }) => {
  const [currency, setCurrency] = useState<'NPR' | 'USD'>('NPR');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const nprRate = 133.50; // Mock conversion rate
  const formatPrice = (val: number) => {
    if (currency === 'NPR') {
      return `रु ${val.toLocaleString('en-NP')}`;
    }
    return `$${(val / nprRate).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const activeBids = [
    { id: 1, title: '1963 Ferrari 250 GTO', currentBid: 1668750000, timeLeft: '02:14:05', img: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae' },
    { id: 2, title: 'Patek Philippe Nautilus', currentBid: 24697500, timeLeft: '01:45:12', img: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7' }
  ];

  return (
    <div className="min-h-screen bg-brand-navy text-white nepal-pattern">
      <div className="mandala-overlay opacity-30"></div>
      
      {/* Dashboard Top Header */}
      <header className="bg-brand-navy/80 backdrop-blur-md border-b border-brand-gold/20 py-6 sticky top-0 z-40">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 border border-brand-gold/20 rounded-full hover:bg-brand-gold/10 transition-all text-brand-gold">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-serif font-bold text-white">नमस्ते, Sudip Thapa!</h1>
              <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mt-1">
                <Clock className="w-3 h-3" /> Nepal Time: {currentTime.toLocaleTimeString('en-NP', { hour12: true })}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="luxury-gradient px-6 py-2.5 rounded-sm text-brand-navy font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all">
              Top Up रु
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 p-5 rounded-sm border border-white/10">
                 <p className="text-[10px] text-brand-gold uppercase font-bold tracking-widest mb-1">Balance</p>
                 <p className="text-lg font-serif font-bold">{formatPrice(8500000)}</p>
              </div>
              <div className="bg-white/5 p-5 rounded-sm border border-white/10">
                 <p className="text-[10px] text-brand-gold uppercase font-bold tracking-widest mb-1">Total Bids</p>
                 <p className="text-lg font-serif font-bold">14</p>
              </div>
              <div className="bg-white/5 p-5 rounded-sm border border-white/10">
                 <p className="text-[10px] text-brand-gold uppercase font-bold tracking-widest mb-1">Wins</p>
                 <p className="text-lg font-serif font-bold">5</p>
              </div>
              <div className="bg-white/5 p-5 rounded-sm border border-white/10">
                 <p className="text-[10px] text-brand-gold uppercase font-bold tracking-widest mb-1">Points</p>
                 <p className="text-lg font-serif font-bold">1,240</p>
              </div>
            </div>

            {/* Active Bids */}
            <section className="bg-brand-navy/60 border border-white/10 p-6 rounded-sm">
              <h3 className="text-lg font-serif font-bold text-white mb-6 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-brand-gold" /> Active Bidding Room
              </h3>
              <div className="space-y-4">
                {activeBids.map(bid => (
                  <div key={bid.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-sm border border-white/5 hover:border-brand-gold/20 transition-all">
                    <img src={bid.img} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold">{bid.title}</h4>
                      <p className="text-[10px] text-brand-gold font-bold uppercase">{bid.timeLeft} left</p>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-bold">{formatPrice(bid.currentBid)}</p>
                       <button className="text-[9px] text-brand-gold font-bold uppercase border-b border-brand-gold/30">Quick Bid</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Specialized Mobile/Infrastructure Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-white/5 border border-white/10 p-6 rounded-sm">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
                   <Smartphone className="w-4 h-4 text-brand-gold" /> Offline Access Tools
                 </h3>
                 <div className="space-y-4">
                    <div className="p-4 bg-brand-navy/60 border border-brand-gold/10 rounded-sm">
                       <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
                             <Hash className="w-3 h-3 text-brand-gold" /> USSD Quick-Bidding
                          </span>
                          <span className="text-[9px] text-green-500 font-bold">Enabled</span>
                       </div>
                       <p className="text-[9px] text-brand-slate uppercase leading-relaxed">Dial <span className="text-brand-gold">*322#</span> from your registered Ncell/NTC number to bid without internet.</p>
                    </div>
                    <div className="p-4 bg-brand-navy/60 border border-brand-gold/10 rounded-sm">
                       <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
                             <ShieldAlert className="w-3 h-3 text-brand-gold" /> SMS Emergency Outbid
                          </span>
                          <span className="text-[9px] text-brand-slate font-bold">Disabled</span>
                       </div>
                       <p className="text-[9px] text-brand-slate uppercase leading-relaxed">Receive instant SMS if outbid. Reply with 'BID' to increment immediately.</p>
                    </div>
                 </div>
              </section>

              <section className="bg-white/5 border border-white/10 p-6 rounded-sm">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
                   <CreditCard className="w-4 h-4 text-brand-gold" /> Local Payouts
                 </h3>
                 <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                       <img src="https://esewa.com.np/common/images/esewa_logo.png" className="h-4" />
                       <span className="text-[10px] font-bold text-brand-slate">Verified</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                       <img src="https://khalti.com/static/khalti-logo.png" className="h-4" />
                       <span className="text-[10px] font-bold text-brand-slate">Link Wallet</span>
                    </div>
                    <button className="w-full bg-brand-gold/10 border border-brand-gold/30 py-3 rounded text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all">Add Bank Account</button>
                 </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <section className="bg-brand-navy border border-brand-gold/20 p-8 rounded-sm text-center">
              <div className="w-24 h-24 rounded-full border-2 border-brand-gold p-1 mx-auto mb-4">
                 <img src="https://i.pravatar.cc/150?u=thapa" className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-1">Sudip Thapa</h3>
              <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mb-6 italic">Platinum Collector #8821</p>
              
              <div className="space-y-2">
                 <button className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-widest">KYC Status</span>
                    <span className="text-[9px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded font-bold">Verified</span>
                 </button>
                 <button className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Voter Score</span>
                    <span className="text-[9px] text-brand-gold font-bold">1240 High</span>
                 </button>
              </div>
            </section>

            <section className="bg-white/5 border border-white/10 p-6 rounded-sm">
               <h3 className="text-[10px] text-brand-gold uppercase font-bold tracking-[0.2em] mb-4">Recent Notifications</h3>
               <div className="space-y-4">
                  <div className="p-3 border-l-2 border-brand-gold bg-white/5 text-[11px] font-light">
                     Outbid on "Ferrari 250 GTO". Increment by रु 50,000 to regain lead?
                  </div>
                  <div className="p-3 border-l-2 border-brand-slate bg-white/5 text-[11px] font-light opacity-60">
                     New item listed in "Nepali Art": 18th Century Thangka.
                  </div>
               </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
