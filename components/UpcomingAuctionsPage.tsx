
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Search, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Trophy, 
  ChevronRight, 
  ChevronLeft, 
  ArrowLeft, 
  Video, 
  Smartphone, 
  Info, 
  Globe, 
  Gavel, 
  Heart,
  Share2,
  Filter,
  Grid,
  List,
  Mail,
  Zap,
  CheckCircle2,
  Building2,
  History,
  Gem,
  ExternalLink,
  Plus
} from 'lucide-react';

interface UpcomingAuctionsPageProps {
  onBack: () => void;
}

const UpcomingAuctionsPage: React.FC<UpcomingAuctionsPageProps> = ({ onBack }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTheme, setActiveTheme] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ d: 3, h: 12, m: 45, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        if (prev.d > 0) return { ...prev, d: prev.d - 1, h: 23, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const themedAuctions = [
    { 
      id: 'heritage', 
      title: 'Nepali Heritage Week', 
      date: 'Jan 15 - 20', 
      icon: History, 
      img: 'https://images.unsplash.com/photo-1549490349-8643362247b5',
      desc: 'Malla Dynasty Antiquities and Archeology Department certified items.'
    },
    { 
      id: 'watches', 
      title: 'Luxury Watches & Jewels', 
      date: 'Feb 1 - 7', 
      icon: Gem, 
      img: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7',
      desc: 'Swiss timepieces and Himalayan gemstones with GIN authentication.'
    },
    { 
      id: 'himalayan', 
      title: 'Himalayan Art Special', 
      date: 'Feb 15 - 22', 
      icon: Globe, 
      img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9',
      desc: 'Sacred Thankas and Buddhist artifacts from Mustang and Dolpo.'
    },
    { 
      id: 'real-estate', 
      title: 'Spring Real Estate', 
      date: 'Mar 10', 
      icon: Building2, 
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      desc: 'Luxury properties in Pokhara and Kathmandu valley with virtual tours.'
    }
  ];

  const upcomingLots = [
    {
      id: 'UP-101',
      title: 'Bhairahawa Winter Fine Art Auction',
      date: 'Dec 28, 2024 • 2:00 PM NPT',
      location: 'Elite House, Bhairahawa-7',
      status: 'REGISTRATION OPEN',
      statusColor: 'text-green-500 bg-green-500/10',
      lots: 45,
      estimate: 'रु 1,85,00,000',
      bidders: 124,
      img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',
      featured: [
        { name: '19th C. Paubha', est: 'रु 12,00,000' },
        { name: 'Gilded Buddha', est: 'रु 4,50,000' }
      ]
    },
    {
      id: 'UP-102',
      title: 'Rare Himalayan Manuscript Collection',
      date: 'Jan 12, 2025 • 11:00 AM NPT',
      location: 'Online Exclusive',
      status: 'CATALOG AVAILABLE',
      statusColor: 'text-blue-400 bg-blue-400/10',
      lots: 18,
      estimate: 'रु 65,00,000',
      bidders: 42,
      img: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7',
      featured: [
        { name: 'Sanskrit Veda', est: 'रु 25,00,000' }
      ]
    },
    {
      id: 'UP-103',
      title: 'Lumbini Heritage Jewels',
      date: 'Jan 18, 2025 • 3:00 PM NPT',
      location: 'Bhairahawa Live Hall',
      status: 'PREVIEW WEEK',
      statusColor: 'text-yellow-500 bg-yellow-500/10',
      lots: 32,
      estimate: 'रु 95,00,000',
      bidders: 89,
      img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e',
      featured: [
        { name: 'Ruby Necklace', est: 'रु 15,00,000' }
      ]
    },
    {
      id: 'UP-104',
      title: 'Modern Nepali Masterpieces',
      date: 'Feb 5, 2025 • 2:00 PM NPT',
      location: 'Kathmandu Satellite Office',
      status: 'BIDDER APPROVAL REQUIRED',
      statusColor: 'text-red-500 bg-red-500/10',
      lots: 22,
      estimate: 'रु 4,20,00,000',
      bidders: 15,
      img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9',
      featured: [
        { name: 'S. Pradhan Oil', est: 'रु 85,00,000' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy text-white selection:bg-brand-gold selection:text-brand-navy">
      <div className="nepal-pattern opacity-10 fixed inset-0 pointer-events-none"></div>

      {/* Header Section */}
      <section className="relative pt-32 pb-20 border-b border-brand-gold/10">
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
             <div className="max-w-3xl text-left">
                <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight uppercase tracking-tight">
                  Upcoming <br />
                  <span className="luxury-text-gradient italic">Auctions</span>
                </h1>
                <p className="text-xl text-brand-slate font-light leading-relaxed">Plan your bids on Nepal's most exclusive collections. Curated heritage, luxury timepieces, and rare collectibles.</p>
             </div>
             
             <div className="w-full lg:w-auto">
                <div className="bg-brand-charcoal/80 border border-brand-gold/20 p-8 rounded-sm shadow-2xl relative overflow-hidden min-w-[320px]">
                   <div className="absolute top-0 left-0 w-full h-1 luxury-gradient"></div>
                   <p className="text-[10px] text-brand-gold uppercase font-bold tracking-[0.3em] mb-4">Next Auction Starts In</p>
                   <div className="flex gap-6 justify-center">
                      {[
                        { l: 'Days', v: timeLeft.d },
                        { l: 'Hours', v: timeLeft.h },
                        { l: 'Mins', v: timeLeft.m },
                        { l: 'Secs', v: timeLeft.s }
                      ].map(t => (
                        <div key={t.l} className="flex flex-col items-center">
                           <span className="text-3xl font-serif font-bold text-white">{t.v.toString().padStart(2, '0')}</span>
                           <span className="text-[8px] text-brand-slate uppercase font-bold tracking-widest mt-1">{t.l}</span>
                        </div>
                      ))}
                   </div>
                   <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                      <div className="text-center">
                         <p className="text-lg font-serif font-bold text-white">42</p>
                         <p className="text-[8px] text-brand-gold uppercase tracking-widest font-bold">Upcoming Auctions</p>
                      </div>
                      <div className="text-center">
                         <p className="text-lg font-serif font-bold text-white">रु 250M+</p>
                         <p className="text-[8px] text-brand-gold uppercase tracking-widest font-bold">Total Est. Value</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Spotlight Premier Banner */}
      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="relative h-[60vh] min-h-[500px] overflow-hidden rounded-sm group">
               <img 
                 src="https://images.unsplash.com/photo-1544933863-482c6ca021f2" 
                 className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" 
                 alt="Spotlight"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
               <div className="absolute inset-0 p-12 flex flex-col justify-center max-w-2xl">
                  <div className="flex items-center gap-2 mb-6">
                     <span className="bg-brand-gold text-brand-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest">January Premier Collection</span>
                     <span className="flex text-brand-gold"><Trophy className="w-4 h-4" /> <Trophy className="w-4 h-4" /> <Trophy className="w-4 h-4" /></span>
                  </div>
                  <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Malla Dynasty <br /><span className="luxury-text-gradient italic">Royal Archives</span></h2>
                  <p className="text-brand-slate text-lg font-light mb-8">Exclusive access to 50+ luxury lots from private Nepali collections. Featured artifacts certified by the Dept. of Archaeology.</p>
                  
                  <div className="flex flex-wrap gap-4 items-center">
                     <div className="flex items-center gap-3 text-brand-gold text-xs font-bold uppercase tracking-widest">
                        <Video className="w-4 h-4" /> Virtual Preview Available
                     </div>
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-gold opacity-30"></div>
                     <div className="flex items-center gap-3 text-brand-gold text-xs font-bold uppercase tracking-widest">
                        <Calendar className="w-4 h-4" /> Jan 25-30, 2024
                     </div>
                  </div>

                  <div className="flex gap-4 mt-12">
                     <button className="luxury-gradient px-8 py-4 rounded-sm text-brand-navy font-bold text-xs uppercase tracking-[0.2em] hover:shadow-2xl transition-all">View Full Catalog</button>
                     <button className="bg-white/5 border border-white/20 px-8 py-4 rounded-sm text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">Register to Bid</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Themed Categories */}
      <section className="py-24 border-y border-white/5 bg-brand-charcoal/20">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-white mb-16 text-center">Curated <span className="luxury-text-gradient italic">Themes</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {themedAuctions.map((theme, i) => (
                 <div key={i} onClick={() => setActiveTheme(i)} className={`relative p-8 border border-white/10 rounded-sm cursor-pointer transition-all group overflow-hidden ${activeTheme === i ? 'border-brand-gold ring-1 ring-brand-gold' : 'hover:border-brand-gold/30'}`}>
                    <img src={theme.img} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700" alt="" />
                    <div className="relative z-10">
                       <theme.icon className={`w-10 h-10 mb-6 transition-colors ${activeTheme === i ? 'text-brand-gold' : 'text-brand-slate'}`} />
                       <h3 className="text-xl font-serif font-bold text-white mb-2">{theme.title}</h3>
                       <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mb-4">{theme.date}</p>
                       <p className="text-xs text-brand-slate font-light leading-relaxed">{theme.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Main Filter & Grid View */}
      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
               {/* Sidebar Filter */}
               <div className="lg:w-80 shrink-0 space-y-10">
                  <div className="bg-brand-navy/60 border border-white/10 p-8 rounded-sm">
                     <h3 className="text-xs font-bold text-brand-gold uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                        <Filter className="w-3.5 h-3.5" /> Refining Filter
                     </h3>
                     
                     <div className="space-y-8">
                        <div>
                           <p className="text-[10px] text-white uppercase font-bold tracking-widest mb-4">Timeframe</p>
                           <div className="space-y-3">
                              {['Next 7 Days', 'Next 30 Days', 'Next 90 Days', 'All Events'].map(t => (
                                <label key={t} className="flex items-center gap-3 cursor-pointer group">
                                   <input type="radio" name="time" className="accent-brand-gold" />
                                   <span className="text-[10px] text-brand-slate uppercase font-bold group-hover:text-white transition-colors">{t}</span>
                                </label>
                              ))}
                           </div>
                        </div>

                        <div>
                           <p className="text-[10px] text-white uppercase font-bold tracking-widest mb-4">Location</p>
                           <div className="space-y-3">
                              {['Bhairahawa HQ', 'Kathmandu Satellite', 'Online Only', 'International'].map(l => (
                                <label key={l} className="flex items-center gap-3 cursor-pointer group">
                                   <input type="checkbox" className="accent-brand-gold" />
                                   <span className="text-[10px] text-brand-slate uppercase font-bold group-hover:text-white transition-colors">{l}</span>
                                </label>
                              ))}
                           </div>
                        </div>

                        <div>
                           <p className="text-[10px] text-white uppercase font-bold tracking-widest mb-4">Price Range (NPR)</p>
                           <div className="space-y-3">
                              {['Under 1,00,000', '1L - 10L', '10L - 50L', '50L+'].map(p => (
                                <label key={p} className="flex items-center gap-3 cursor-pointer group">
                                   <input type="checkbox" className="accent-brand-gold" />
                                   <span className="text-[10px] text-brand-slate uppercase font-bold group-hover:text-white transition-colors">रु {p}</span>
                                </label>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* SMS Alerts Form */}
                  <div className="bg-brand-gold/5 border border-brand-gold/20 p-8 rounded-sm">
                     <h4 className="text-sm font-serif font-bold text-white mb-4">Auction Alerts</h4>
                     <p className="text-[10px] text-brand-slate uppercase tracking-widest mb-6 leading-relaxed">Get 1-hour reminders for auctions you follow via SMS.</p>
                     <div className="space-y-4">
                        <input type="tel" placeholder="98XXXXXXXX" className="w-full bg-white/5 border border-white/10 p-3 text-xs focus:outline-none focus:border-brand-gold" />
                        <button className="w-full bg-brand-gold text-brand-navy font-bold py-3 rounded-sm text-[10px] uppercase tracking-widest">Enable Alerts</button>
                     </div>
                  </div>
               </div>

               {/* Grid View */}
               <div className="flex-grow">
                  <div className="flex items-center justify-between mb-12">
                     <div className="flex items-center gap-4">
                        <span className="text-[10px] text-brand-gold uppercase font-bold tracking-widest">Active Schedule</span>
                        <div className="h-4 w-px bg-white/10"></div>
                        <div className="flex gap-2">
                           <button onClick={() => setViewMode('grid')} className={`p-2 rounded-sm ${viewMode === 'grid' ? 'bg-brand-gold text-brand-navy' : 'bg-white/5 text-brand-slate'}`}><Grid className="w-4 h-4" /></button>
                           <button onClick={() => setViewMode('list')} className={`p-2 rounded-sm ${viewMode === 'list' ? 'bg-brand-gold text-brand-navy' : 'bg-white/5 text-brand-slate'}`}><List className="w-4 h-4" /></button>
                        </div>
                     </div>
                     <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-slate" />
                        <input type="text" placeholder="Search catalogs..." className="bg-white/5 border border-white/10 py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-brand-gold w-64 rounded-sm" />
                     </div>
                  </div>

                  <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                     {upcomingLots.map(lot => (
                       <div key={lot.id} className={`bg-brand-navy/60 border border-white/5 overflow-hidden group hover:border-brand-gold/30 transition-all ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}>
                          <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-1/3' : 'aspect-video'}`}>
                             <img src={lot.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" alt="" />
                             <div className="absolute top-4 left-4 px-3 py-1 rounded-sm text-[8px] font-bold uppercase tracking-widest bg-brand-navy/80 backdrop-blur-md text-brand-gold border border-brand-gold/20">#{lot.id}</div>
                          </div>
                          <div className={`p-8 flex flex-col flex-grow ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                             <div className="flex items-start justify-between mb-4">
                                <span className={`px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest rounded-sm ${lot.statusColor}`}>{lot.status}</span>
                                <div className="flex gap-2">
                                   <button className="text-brand-slate hover:text-brand-gold"><Heart className="w-4 h-4" /></button>
                                   <button className="text-brand-slate hover:text-brand-gold"><Share2 className="w-4 h-4" /></button>
                                </div>
                             </div>
                             <h4 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-brand-gold transition-colors leading-tight">{lot.title}</h4>
                             
                             <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-2 text-[10px] text-brand-slate font-medium uppercase tracking-widest">
                                   <Calendar className="w-3.5 h-3.5 text-brand-gold" /> {lot.date}
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-brand-slate font-medium uppercase tracking-widest">
                                   <MapPin className="w-3.5 h-3.5 text-brand-gold" /> {lot.location}
                                </div>
                             </div>

                             <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6 mb-8">
                                <div>
                                   <p className="text-[8px] text-brand-slate uppercase font-bold tracking-widest mb-1">Lots</p>
                                   <p className="text-xs font-bold text-white">{lot.lots}</p>
                                </div>
                                <div>
                                   <p className="text-[8px] text-brand-slate uppercase font-bold tracking-widest mb-1">Estimate</p>
                                   <p className="text-xs font-bold text-white">{lot.estimate}</p>
                                </div>
                                <div>
                                   <p className="text-[8px] text-brand-slate uppercase font-bold tracking-widest mb-1">Bidders</p>
                                   <p className="text-xs font-bold text-white">{lot.bidders}</p>
                                </div>
                             </div>

                             <div className="space-y-2 mb-8">
                                <p className="text-[8px] text-brand-gold uppercase font-bold tracking-widest">Featured Previews</p>
                                {lot.featured.map(f => (
                                  <div key={f.name} className="flex justify-between items-center text-[10px] text-brand-slate italic">
                                     <span>{f.name}</span>
                                     <span className="font-bold text-white/50">{f.est}</span>
                                  </div>
                                ))}
                             </div>

                             <div className="mt-auto grid grid-cols-2 gap-3">
                                <button className="luxury-gradient py-3 rounded-sm text-brand-navy font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all">View Catalog</button>
                                <button className="bg-white/5 border border-white/10 py-3 rounded-sm text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">Register</button>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>

                  <div className="mt-16 text-center">
                     <button className="bg-white/5 border border-brand-gold/20 px-12 py-5 rounded-sm text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl">Load Complete Calendar</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Guide Section */}
      <section className="py-24 bg-brand-charcoal/40 border-t border-white/5">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-12">
                  <div>
                     <h2 className="text-4xl font-serif font-bold text-white mb-6">New to <span className="luxury-text-gradient italic">Elite Auctions?</span></h2>
                     <p className="text-brand-slate font-light text-lg">Your step-by-step guide to acquiring world-class assets in Nepal.</p>
                  </div>
                  
                  <div className="space-y-8">
                     {[
                       { id: 1, t: 'Browse Catalog', d: 'View all high-res photos and expert condition reports for upcoming lots.' },
                       { id: 2, t: 'Complete Registration', d: 'Submit your citizenship/passport and bank references for approval.' },
                       { id: 3, t: 'Verified Approval', d: 'Our compliance team verifies bidders within 24 hours of submission.' },
                       { id: 4, t: 'Place Advance Bids', d: 'Set your maximum bid before the live auction begins.' }
                     ].map(step => (
                       <div key={step.id} className="flex gap-6 group">
                          <div className="w-12 h-12 bg-brand-navy border border-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold font-bold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">{step.id}</div>
                          <div>
                             <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">{step.t}</h4>
                             <p className="text-xs text-brand-slate font-light leading-relaxed">{step.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="bg-brand-navy/60 border border-brand-gold/10 p-10 rounded-sm space-y-8">
                  <h3 className="text-xl font-serif font-bold text-white flex items-center gap-3">
                     <ShieldCheck className="w-6 h-6 text-brand-gold" /> Compliance Standards
                  </h3>
                  <p className="text-xs text-brand-slate uppercase font-bold tracking-widest leading-relaxed">Elite AUCTIONS strictly adheres to Nepali cultural heritage laws and international financial regulations.</p>
                  
                  <div className="space-y-4">
                     <div className="flex items-center justify-between p-4 bg-white/5 rounded-sm">
                        <span className="text-[10px] text-white font-bold uppercase tracking-widest">Buyer's Premium</span>
                        <span className="text-[10px] text-brand-gold font-bold">15% (NST Applied)</span>
                     </div>
                     <div className="flex items-center justify-between p-4 bg-white/5 rounded-sm">
                        <span className="text-[10px] text-white font-bold uppercase tracking-widest">KYC Requirements</span>
                        <span className="text-[10px] text-brand-gold font-bold">National ID Required</span>
                     </div>
                  </div>

                  <div className="pt-8 border-t border-white/5 flex gap-6 grayscale opacity-40">
                     <Building2 className="w-8 h-8" />
                     <History className="w-8 h-8" />
                     <ShieldCheck className="w-8 h-8" />
                     <Trophy className="w-8 h-8" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-brand-navy border-t border-white/5">
        <div className="container mx-auto px-4">
          <p className="text-center text-[10px] text-brand-gold uppercase font-bold tracking-[0.4em] mb-12 opacity-50">Authorized Partners & Curation Bodies</p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="flex flex-col items-center gap-2">
                <Globe className="w-8 h-8" />
                <span className="text-[8px] font-bold uppercase tracking-widest">Global IME Bank</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8" />
                <span className="text-[8px] font-bold uppercase tracking-widest">Nepal Insurance Co.</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <History className="w-8 h-8" />
                <span className="text-[8px] font-bold uppercase tracking-widest">Dept. Archeology</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Zap className="w-8 h-8" />
                <span className="text-[8px] font-bold uppercase tracking-widest">GIN Nepal</span>
             </div>
          </div>
        </div>
      </section>

      {/* Bottom Sticky CTA */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4 lg:hidden">
         <button className="w-full luxury-gradient py-4 rounded-full text-brand-navy font-bold text-xs uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3">
            <Calendar className="w-4 h-4" /> View Full Calendar
         </button>
      </div>
    </div>
  );
};

export default UpcomingAuctionsPage;
