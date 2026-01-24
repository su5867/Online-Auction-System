
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  Info, 
  Star, 
  ShieldCheck, 
  Award, 
  Clock, 
  Gavel, 
  Filter, 
  Search, 
  Palette, 
  Gem, 
  Hammer, 
  ScrollText, 
  Building,
  History,
  BookOpen,
  UserCheck,
  Globe
} from 'lucide-react';

interface NepaliArtPageProps {
  onBack: () => void;
  onAuctionClick?: (id: string) => void;
}

const NepaliArtPage: React.FC<NepaliArtPageProps> = ({ onBack, onAuctionClick }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const subcategories = [
    { name: 'Paubha Paintings', icon: Palette, count: 125, img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9' },
    { name: 'Stone & Wood Sculptures', icon: Hammer, count: 89, img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3' },
    { name: 'Metalwork & Statues', icon: Building, count: 67, img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e' },
    { name: 'Thankas & Mandalas', icon: ScrollText, count: 142, img: 'https://images.unsplash.com/photo-1549490349-8643362247b5' },
    { name: 'Contemporary Nepali Art', icon: Palette, count: 45, img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5' },
    { name: 'Rare Manuscripts', icon: History, count: 23, img: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7' }
  ];

  const collections = [
    { title: 'Malla Dynasty Collection', period: '1200 - 1768 AD', img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=400' },
    { title: 'Himalayan Heritage Pieces', period: 'Sacred Art', img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=400' },
    { title: 'Ex-Bhaktapur Palace Items', period: 'Royal Estate', img: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=400' },
    { title: 'Lumbini-Inspired Artworks', period: 'Spiritual Legacy', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=400' }
  ];

  const upcomingAuctions = [
    { date: 'Jan 30', title: 'Nepali Art Special Auction', items: '42 Lots', img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9' },
    { date: 'Feb 15', title: 'Heritage Items Auction', items: '18 Lots', img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3' },
    { date: 'Monthly', title: 'Contemporary Artists Showcase', items: 'Monthly', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5' }
  ];

  const educationalCards = [
    { title: 'What is a Paubha?', desc: 'A traditional religious painting of the Newar people, using mineral pigments and gold leaf.', icon: Palette },
    { title: 'Identifying Authentic Nepali Art', desc: 'Expert techniques for verifying pigment age, canvas weave, and iconographic accuracy.', icon: Search },
    { title: 'Cultural Export Regulations', desc: 'Navigating the legal frameworks for the international transit of Nepali heritage assets.', icon: Globe },
    { title: 'Preservation Tips', desc: 'How to maintain climate control and light levels for century-old thangkas and scrolls.', icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-brand-navy text-white">
      {/* Heritage Red Mandala Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10 nepal-pattern" style={{ backgroundColor: '#450a0a' }}></div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#450a0a]/40 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_infinite]" 
            alt="Nepali Artifact"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>

          <div className="max-w-3xl animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 bg-[#8B0000]/30 border border-brand-gold/30 px-3 py-1 rounded-full text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-6">
              <Star className="w-3 h-3" />
              Sacred Heritage
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Discover Nepal's <br />
              <span className="luxury-text-gradient italic">Artistic Heritage</span>
            </h1>
            <p className="text-xl text-brand-slate max-w-xl mb-10 font-light leading-relaxed">
              Explore our curated selection of Paubhas, Sculptures, Thankas, and more. Authentic pieces from the heart of the Himalayas.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="luxury-gradient px-8 py-4 rounded-sm text-brand-navy font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all">
                View Live Collection
              </button>
              <button className="bg-white/5 border border-white/20 px-8 py-4 rounded-sm text-white font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-all">
                Consign Heritage Art
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-24 relative z-10 bg-brand-charcoal/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Master <span className="luxury-text-gradient italic">Departments</span></h2>
            <div className="w-24 h-px bg-brand-gold mx-auto opacity-50"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategories.map((sub, i) => {
              const Icon = sub.icon;
              return (
                <div key={i} className="group relative aspect-[16/10] overflow-hidden rounded-sm border border-brand-gold/10 hover:border-brand-gold/40 transition-all cursor-pointer">
                  <img src={sub.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt={sub.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                     <div className="w-12 h-12 luxury-gradient rounded-sm flex items-center justify-center mb-4 text-brand-navy shadow-xl transform group-hover:-translate-y-2 transition-transform">
                        <Icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">{sub.name}</h3>
                     <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{sub.count} Verified Items</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authentication Badges Section */}
      <section className="py-16 border-y border-white/5 bg-brand-navy">
        <div className="container mx-auto px-4">
           <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
              {[
                { label: 'Dept. of Archaeology', sub: 'Officially Certified', icon: ShieldCheck },
                { label: 'Expert Verified', sub: 'In-house Appraisal', icon: UserCheck },
                { label: 'Provenance Documented', sub: 'Traced History', icon: History },
                { label: 'UNESCO Cultural Heritage', sub: 'International Standards', icon: Building }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-help">
                   <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                      <badge.icon className="w-7 h-7" />
                   </div>
                   <div>
                      <p className="text-[11px] font-bold text-white uppercase tracking-wider">{badge.label}</p>
                      <p className="text-[9px] text-brand-slate uppercase tracking-widest mt-1">{badge.sub}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-24 bg-brand-charcoal/20">
        <div className="container mx-auto px-4">
           <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl font-serif font-bold text-white">Featured <span className="luxury-text-gradient italic">Collections</span></h2>
              <button className="text-[10px] text-brand-gold font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-brand-gold/30 pb-0.5">Explore All Archives</button>
           </div>
           
           <div className="grid md:grid-cols-4 gap-8">
              {collections.map((col, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="aspect-[3/4] overflow-hidden rounded-sm border border-white/5 mb-6 relative">
                      <img src={col.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={col.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60"></div>
                   </div>
                   <h3 className="text-lg font-serif font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">{col.title}</h3>
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] text-brand-slate uppercase font-bold tracking-widest italic">{col.period}</span>
                      <ChevronRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Educational Content Grid */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {educationalCards.map((edu, i) => {
                const Icon = edu.icon;
                return (
                  <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-sm hover:border-brand-gold/30 transition-all group">
                     <div className="w-12 h-12 bg-brand-gold/10 rounded-sm flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                        <Icon className="w-6 h-6" />
                     </div>
                     <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 group-hover:text-brand-gold transition-colors">{edu.title}</h4>
                     <p className="text-xs text-brand-slate font-light leading-relaxed mb-6">{edu.desc}</p>
                     <button className="text-[9px] text-brand-gold font-bold uppercase tracking-widest flex items-center gap-2">Learn More <ChevronRight className="w-3 h-3" /></button>
                  </div>
                );
              })}
           </div>
        </div>
      </section>

      {/* Specialized Filters Section */}
      <section className="py-24 bg-brand-charcoal/40">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16">
               {/* Sidebar Filters */}
               <div className="lg:w-1/4 space-y-12">
                  <div className="space-y-6">
                     <h3 className="text-xs font-bold text-brand-gold uppercase tracking-[0.3em]">Regional Treasures</h3>
                     <div className="space-y-3">
                        {[
                          'Items from Bhairahawa Region',
                          'Kathmandu Valley Treasures',
                          'Mustang & Upper Himalayas',
                          'Terai Region Artifacts'
                        ].map(loc => (
                          <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                             <input type="checkbox" className="accent-brand-gold w-4 h-4 rounded-sm" />
                             <span className="text-[10px] text-brand-slate uppercase font-bold tracking-widest group-hover:text-white transition-colors">{loc}</span>
                          </label>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-6">
                     <h3 className="text-xs font-bold text-brand-gold uppercase tracking-[0.3em]">Value Thresholds</h3>
                     <div className="space-y-3">
                        {[
                          'Under NPR 50,000',
                          'NPR 50,000 - 500,000',
                          'NPR 500,000 - 5,00,000',
                          'Above NPR 5,000,000'
                        ].map(price => (
                          <label key={price} className="flex items-center gap-3 cursor-pointer group">
                             <input type="radio" name="price" className="accent-brand-gold w-4 h-4" />
                             <span className="text-[10px] text-brand-slate uppercase font-bold tracking-widest group-hover:text-white transition-colors">{price}</span>
                          </label>
                        ))}
                     </div>
                  </div>

                  <div className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-sm">
                     <h4 className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Info className="w-3.5 h-3.5" /> Buyer Notice
                     </h4>
                     <p className="text-[9px] text-brand-slate leading-relaxed italic">
                        All antiquities older than 100 years must be registered with the Department of Archaeology before export. Our concierge team manages all documentation for global buyers.
                     </p>
                  </div>
               </div>

               {/* Results Section */}
               <div className="lg:w-3/4">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                     <div className="flex items-center gap-4">
                        <span className="text-[10px] text-brand-slate uppercase font-bold tracking-widest border-r border-white/10 pr-4">Active Showroom</span>
                        <div className="flex items-center gap-2">
                           <button className="px-4 py-1.5 bg-brand-gold/10 text-brand-gold text-[9px] font-bold uppercase tracking-widest rounded-full border border-brand-gold/20">All Lots</button>
                           <button className="px-4 py-1.5 text-brand-slate text-[9px] font-bold uppercase tracking-widest rounded-full hover:bg-white/5 transition-all">Investment Grade</button>
                        </div>
                     </div>
                     <div className="relative w-full md:w-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-slate" />
                        <input type="text" placeholder="Search by dynasty, material or origin..." className="bg-white/5 border border-white/10 py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-brand-gold w-full md:w-80 rounded-sm" />
                     </div>
                  </div>

                  {/* Lot Grid */}
                  <div className="grid md:grid-cols-2 gap-10">
                     {[
                       { id: 'NP-ART-881', title: '18th Century Gilded Bronze Tara', price: 'रु 12,50,000', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e' },
                       { id: 'NP-ART-892', title: 'Rare Malla Period Wood Carving', price: 'रु 4,20,000', img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3' },
                       { id: 'NP-ART-910', title: 'Archival Paubha Scroll of Vajrayogini', price: 'रु 8,50,000', img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9' },
                       { id: 'NP-ART-922', title: 'Tibetan Mineral Pigment Mandala', price: 'रु 2,15,000', img: 'https://images.unsplash.com/photo-1549490349-8643362247b5' }
                     ].map(item => (
                       <div key={item.id} onClick={() => onAuctionClick?.(item.id)} className="bg-white/5 border border-white/5 rounded-sm overflow-hidden group hover:border-brand-gold/30 cursor-pointer transition-all flex flex-col h-full">
                          <div className="aspect-[16/10] overflow-hidden relative">
                             <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                             <div className="absolute top-4 right-4 bg-brand-navy/80 backdrop-blur-md px-2 py-1 rounded-sm text-[8px] font-bold text-brand-gold uppercase tracking-widest">Lot #{item.id}</div>
                          </div>
                          <div className="p-8 flex flex-col flex-grow">
                             <h4 className="text-xl font-serif font-bold text-white mb-6 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                             <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                                <div>
                                   <p className="text-[9px] text-brand-slate uppercase tracking-widest mb-1">Current Bid</p>
                                   <p className="text-xl font-serif font-bold luxury-text-gradient">{item.price}</p>
                                </div>
                                <button className="bg-brand-gold text-brand-navy px-6 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-lg">
                                   View Lot
                                </button>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>

                  {/* Pagination/Load More */}
                  <div className="mt-16 text-center">
                     <button className="bg-white/5 border border-white/10 px-10 py-4 rounded-sm text-brand-slate text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white hover:border-brand-gold transition-all">
                        Load More Heritage Assets
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Upcoming Themed Auctions Section */}
      <section className="py-24 bg-[#450a0a]/20 border-t border-brand-gold/20">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
               <div>
                  <h2 className="text-4xl font-serif font-bold text-white mb-4">Themed <span className="luxury-text-gradient italic">Auction Calendar</span></h2>
                  <p className="text-brand-slate font-light text-lg">Reserve your place at Nepal's most anticipated cultural events.</p>
               </div>
               <button className="text-brand-gold font-bold text-xs uppercase tracking-widest border-b border-brand-gold/30 pb-1 hover:text-white hover:border-white transition-all flex items-center gap-2">
                  View Full Schedule <ChevronRight className="w-4 h-4" />
               </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {upcomingAuctions.map((auc, i) => (
                 <div key={i} className="bg-brand-navy/80 border border-brand-gold/10 overflow-hidden group hover:border-brand-gold/40 transition-all">
                    <div className="aspect-video overflow-hidden relative">
                       <img src={auc.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" alt="" />
                       <div className="absolute inset-0 bg-brand-navy/40"></div>
                       <div className="absolute top-4 left-4 bg-brand-gold text-brand-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                          {auc.date}
                       </div>
                    </div>
                    <div className="p-8">
                       <h3 className="text-xl font-serif font-bold text-white mb-4">{auc.title}</h3>
                       <div className="flex items-center justify-between text-brand-slate">
                          <span className="text-[10px] uppercase font-bold tracking-widest">{auc.items} registered</span>
                          <button className="text-[10px] text-brand-gold font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                             Lot Preview <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Seller Spotlight & Partner Logos */}
      <section className="py-24 border-t border-white/5 bg-brand-navy">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-xs font-bold text-brand-gold uppercase tracking-[0.4em]">Distinguished Partner Galleries</h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 text-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all items-center">
              {['Patan Art House', 'Newa Heritage Gallery', 'Himalayan Arts', 'Ancient Spirits', 'Lumbini Curations'].map(gal => (
                <div key={gal} className="space-y-4">
                   <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto">
                      <Building className="w-8 h-8 text-white" />
                   </div>
                   <p className="text-xs font-serif italic text-white tracking-wide">{gal}</p>
                </div>
              ))}
           </div>

           <div className="mt-20 p-12 bg-white/5 border border-white/10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                 <h3 className="text-2xl font-serif font-bold text-white mb-4">Meet the <span className="luxury-text-gradient italic">Senior Curator</span></h3>
                 <p className="text-brand-slate text-sm font-light leading-relaxed">Join our lead curator, Dr. S. Pradhan, for an exclusive walkthrough of the Malla Dynasty collection this Friday at our Kathmandu lounge.</p>
              </div>
              <button className="luxury-gradient px-8 py-4 rounded-sm text-brand-navy font-bold text-xs uppercase tracking-widest shadow-xl whitespace-nowrap">
                 Book Private Viewing
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default NepaliArtPage;
