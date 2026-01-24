
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Upload, 
  Camera, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle2, 
  Award, 
  Building2, 
  Gem, 
  FileText, 
  Phone, 
  Mail, 
  MessageSquare,
  MapPin,
  ChevronDown,
  ChevronRight,
  Info,
  ExternalLink,
  Plus,
  // Added missing imports
  Gavel,
  CreditCard
} from 'lucide-react';

interface SellWithUsPageProps {
  onBack: () => void;
  onLoginClick: () => void;
}

const SellWithUsPage: React.FC<SellWithUsPageProps> = ({ onBack, onLoginClick }) => {
  const [formStep, setFormStep] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const categories = [
    'Nepali Art & Sculptures', 'Tibetan Antiques', 'Luxury Watches', 
    'Precious Jewelry', 'Vintage Vehicles', 'Real Estate', 'Collectibles'
  ];

  const faqs = [
    { q: "What items can I sell?", a: "Elite AUCTIONS specializes in high-value luxury items, including rare Nepali antiquities, luxury timepieces, precious jewelry, classic cars, and premium real estate. All items must pass our authenticity and legal verification process." },
    { q: "How is the price determined?", a: "Our team of in-house experts and independent consultants analyze market trends, provenance, condition, and rarity to provide a competitive valuation and recommended reserve price." },
    { q: "What about taxes in Nepal?", a: "We strictly follow Nepal's tax regulations. Seller commissions are subject to local TDS, and we provide all necessary documentation for your tax filings." },
    { q: "How are payments processed?", a: "Payments are managed through our secure escrow system. Once the buyer confirms delivery, funds are released to your preferred account via Bank Transfer, eSewa, or Khalti within 3-5 business days." },
    { q: "What if my item doesn't sell?", a: "If the reserve price isn't met, we can either re-list the item for a future auction, move it to our private sales gallery, or return it to you. We charge no fees if an item doesn't sell." }
  ];

  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-gold selection:text-brand-navy">
      <div className="nepal-pattern opacity-10 fixed inset-0 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy/60 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Luxury gallery"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-6">
                <TrendingUp className="w-3 h-3" />
                Seller Partnership
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Turn Your Valuables <br />
                <span className="luxury-text-gradient italic">into Competitive Bids</span>
              </h1>
              <p className="text-xl text-brand-slate max-w-xl mb-10 font-light leading-relaxed">
                Nepal's trusted platform for selling luxury items. Reach 50,000+ verified collectors across the country and the globe.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: '0% Listing Fees', icon: Clock, sub: 'For a limited time' },
                  { label: '50k+ Verified Buyers', icon: Users, sub: 'Across Nepal & Asia' },
                  { label: 'Escrow Protection', icon: ShieldCheck, sub: 'Secure payments guaranteed' },
                  { label: 'Expert Valuation', icon: Award, sub: 'Heritage certified pros' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white/5 border border-white/5 rounded-sm group hover:border-brand-gold/20 transition-all">
                    <item.icon className="w-6 h-6 text-brand-gold shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-white mb-0.5">{item.label}</p>
                      <p className="text-[10px] text-brand-slate uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Valuation Form */}
            <div className="bg-brand-charcoal/80 backdrop-blur-xl border border-brand-gold/20 p-8 rounded-sm shadow-2xl">
              <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center justify-between">
                Get Free Valuation
                <span className="text-[10px] text-brand-gold uppercase tracking-widest">Step {formStep} of 2</span>
              </h2>

              {formStep === 1 ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                  <div className="space-y-2">
                    <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Category</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 py-4 px-4 text-sm text-white focus:outline-none focus:border-brand-gold appearance-none">
                        <option className="bg-brand-navy">Select a Category</option>
                        {categories.map(c => <option key={c} className="bg-brand-navy">{c}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Upload Item Media</label>
                    <div className="border-2 border-dashed border-white/10 rounded-sm p-10 text-center hover:border-brand-gold/30 transition-all cursor-pointer group">
                      <Camera className="w-10 h-10 text-brand-slate mx-auto mb-4 group-hover:text-brand-gold transition-colors" />
                      <p className="text-xs text-brand-slate mb-2">Drag & drop or <span className="text-brand-gold underline">browse photos</span></p>
                      <p className="text-[9px] text-brand-slate uppercase font-bold tracking-widest">High-res JPEG/PNG (Max 20 images)</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setFormStep(2)}
                    className="w-full luxury-gradient py-4 rounded-sm text-brand-navy font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    Continue <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                  <div className="space-y-2">
                    <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Description & History</label>
                    <textarea 
                      placeholder="Tell us about the provenance, condition, and rarity..." 
                      className="w-full bg-white/5 border border-white/10 py-4 px-4 text-sm text-white focus:outline-none focus:border-brand-gold min-h-[120px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Expected Reserve (रु)</label>
                      <input type="text" placeholder="e.g. 5,00,000" className="w-full bg-white/5 border border-white/10 py-4 px-4 text-sm text-white focus:outline-none focus:border-brand-gold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Contact Number</label>
                      <input type="tel" placeholder="98XXXXXXXX" className="w-full bg-white/5 border border-white/10 py-4 px-4 text-sm text-white focus:outline-none focus:border-brand-gold" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setFormStep(1)}
                      className="flex-1 bg-white/5 border border-white/10 text-white py-4 rounded-sm text-sm font-bold uppercase tracking-widest"
                    >
                      Back
                    </button>
                    <button 
                      className="flex-[2] luxury-gradient py-4 rounded-sm text-brand-navy font-bold text-sm uppercase tracking-widest"
                    >
                      Submit for Valuation
                    </button>
                  </div>
                  <p className="text-[9px] text-brand-slate text-center italic">Experts will review and contact you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Seller Flow Steps */}
      <section className="py-24 bg-brand-navy/60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">A Transparent <span className="luxury-text-gradient italic">Seller Journey</span></h2>
            <div className="w-24 h-px bg-brand-gold mx-auto opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { title: 'Submit Your Item', icon: FileText, desc: 'Provide photos and details for an initial appraisal by our curation team.' },
              { title: 'Expert Evaluation', icon: Award, desc: 'We perform deep authentication, condition checks, and photography.' },
              // Fixed: Gavel is now correctly imported
              { title: 'Live Auction', icon: Gavel, desc: 'Your item is marketed to targeted buyers via a dedicated high-fidelity auction.' },
              // Fixed: CreditCard is now correctly imported
              { title: 'Receive Payment', icon: CreditCard, desc: 'Secure payout through escrow after buyer confirmation (10% commission).' }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-full luxury-gradient flex items-center justify-center mx-auto mb-8 relative shadow-xl group-hover:scale-110 transition-transform">
                   <step.icon className="w-8 h-8 text-brand-navy" />
                   <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-navy border border-brand-gold rounded-full flex items-center justify-center text-brand-gold text-xs font-bold">0{i+1}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{step.title}</h3>
                <p className="text-brand-slate text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">Seller <span className="luxury-text-gradient italic">Triumphs</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Sold my grandfather's vintage Patek Philippe for NPR 1.2M. The process was handled with such class and security.", author: "Rajesh K., Kathmandu" },
              { quote: "Our heritage Paubha painting fetched 3x the expected price. Elite AUCTIONS found the perfect connoisseur.", author: "Sunita M., Bhairahawa" },
              { quote: "International buyers for my antique collection were managed seamlessly. Escrow payments made it stress-free.", author: "Anish G., Pokhara" }
            ].map((s, i) => (
              <div key={i} className="bg-brand-charcoal/40 p-8 border border-white/5 rounded-sm relative">
                <MessageSquare className="absolute top-4 right-4 w-10 h-10 text-brand-gold/10" />
                <p className="text-white font-serif italic mb-6 leading-relaxed">"{s.quote}"</p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full luxury-gradient flex items-center justify-center font-bold text-brand-navy">
                      {s.author[0]}
                   </div>
                   <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">{s.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Programs */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-brand-navy border border-brand-gold/20 rounded-sm hover:border-brand-gold transition-all group">
              <Award className="w-12 h-12 text-brand-gold mb-6" />
              <h3 className="text-xl font-serif font-bold text-white mb-4">Heritage Items Program</h3>
              <p className="text-brand-slate text-sm font-light mb-6">Specialized reduced commissions for historically significant items in partnership with the Department of Archaeology.</p>
              <button className="text-brand-gold text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">Learn More <ChevronRight className="w-3 h-3" /></button>
            </div>
            <div className="p-8 bg-brand-navy border border-brand-gold/20 rounded-sm hover:border-brand-gold transition-all group">
              <Building2 className="w-12 h-12 text-brand-gold mb-6" />
              <h3 className="text-xl font-serif font-bold text-white mb-4">Gallery & Bulk Seller</h3>
              <p className="text-brand-slate text-sm font-light mb-6">Dedicated account managers and volume-based commission rates for galleries and serious dealers.</p>
              <button className="text-brand-gold text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">Apply Now <ChevronRight className="w-3 h-3" /></button>
            </div>
            <div className="p-8 bg-brand-navy border border-brand-gold/20 rounded-sm hover:border-brand-gold transition-all group">
              <Gem className="w-12 h-12 text-brand-gold mb-6" />
              <h3 className="text-xl font-serif font-bold text-white mb-4">Luxury Real Estate</h3>
              <p className="text-brand-slate text-sm font-light mb-6">Virtual tours, global marketing, and expert negotiation for Nepal's most prestigious properties.</p>
              <button className="text-brand-gold text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">Consult Expert <ChevronRight className="w-3 h-3" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Requirements */}
      <section className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <h3 className="text-2xl font-serif font-bold text-white mb-8 flex items-center justify-center gap-3">
             <ShieldCheck className="w-6 h-6 text-brand-gold" /> Seller Requirements
           </h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Must be 18+', icon: CheckCircle2 },
                { label: 'Valid Nepali ID', icon: CheckCircle2 },
                { label: 'Local Bank Account', icon: CheckCircle2 },
                { label: 'Verified Provenance', icon: CheckCircle2 }
              ].map((req, i) => (
                <div key={i} className="p-4 border border-white/5 bg-brand-navy flex flex-col items-center gap-3">
                   <req.icon className="w-5 h-5 text-brand-gold" />
                   <span className="text-[10px] text-brand-slate uppercase font-bold tracking-widest">{req.label}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">Seller <span className="luxury-text-gradient italic">FAQs</span></h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/5 overflow-hidden rounded-sm transition-all hover:border-brand-gold/30">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-sm font-bold text-white pr-8">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-gold transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-sm text-brand-slate font-light leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section className="py-24 bg-brand-navy border-t border-brand-gold/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-white">Schedule a Free <br /><span className="luxury-text-gradient italic">Consultation</span></h2>
              <p className="text-brand-slate font-light leading-relaxed">Prefer a private conversation? Our specialists are available for in-person consultations at our Bhairahawa office or via secure video call.</p>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-4 text-brand-slate hover:text-brand-gold transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full"><Phone className="w-5 h-5" /></div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest">Phone Support</p>
                      <p className="text-sm font-bold">+977-71-456789</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 text-brand-slate hover:text-brand-gold transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full"><Mail className="w-5 h-5" /></div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest">Email Concierge</p>
                      <p className="text-sm font-bold">sellers@eliteauctions.np</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 text-brand-slate hover:text-brand-gold transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full"><MapPin className="w-5 h-5" /></div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest">Bhairahawa Office</p>
                      <p className="text-sm font-bold">Trade Tower, Bhairahawa-7, Nepal</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 border border-white/10 rounded-sm">
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-1">
                        <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold" />
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Email</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold" />
                     </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Preferred Subject</label>
                    <select className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold appearance-none">
                       <option className="bg-brand-navy">Antiquities & Art</option>
                       <option className="bg-brand-navy">Jewelry & Watches</option>
                       <option className="bg-brand-navy">Luxury Real Estate</option>
                       <option className="bg-brand-navy">General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Message</label>
                    <textarea className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold min-h-[100px]" />
                  </div>
                  <button className="w-full luxury-gradient py-4 rounded-sm text-brand-navy font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all">
                    Send Message
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Call CTA */}
      <div className="fixed bottom-8 left-8 z-50 animate-in slide-in-from-left-8 duration-500">
         <button className="flex items-center gap-3 bg-brand-gold text-brand-navy px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-all">
            <Phone className="w-5 h-5 fill-brand-navy" />
            <span className="text-xs font-bold uppercase tracking-widest">+977-9801234567</span>
         </button>
      </div>
    </div>
  );
};

export default SellWithUsPage;
