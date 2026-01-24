
import React from 'react';
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Gavel, 
  Mail, 
  ShieldCheck, 
  ArrowRight,
  MapPin,
  Phone,
  MessageSquare,
  Globe,
  Download,
  Smartphone,
  ShieldAlert,
  HelpCircle,
  Video,
  ExternalLink,
  Shield,
  CreditCard,
  ChevronRight,
  Scan
} from 'lucide-react';

interface FooterProps {
  onNavClick?: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-brand-navy pt-20 pb-8 border-t border-brand-gold/20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="nepal-pattern opacity-5 absolute inset-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-brand-charcoal/50 border border-brand-gold/10 p-8 md:p-12 mb-20 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">Stay Updated on <span className="luxury-text-gradient italic">Nepali Auctions</span></h3>
            <p className="text-brand-slate text-sm font-light">Join our elite circle. Receive exclusive alerts for rare heritage items and luxury collections before they go live.</p>
            <p className="text-[9px] text-brand-slate/50 mt-3 uppercase tracking-widest">We respect your privacy per Nepal's data protection laws</p>
          </div>
          <div className="w-full lg:w-auto min-w-[320px] md:min-w-[450px]">
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/5 border border-white/10 px-6 py-5 pr-40 text-sm focus:outline-none focus:border-brand-gold transition-all rounded-sm text-white"
              />
              <button className="absolute right-2 top-2 bottom-2 luxury-gradient px-8 text-brand-navy font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Main 6-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-20">
          {/* Column 1: Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div 
              onClick={() => onNavClick?.('home')}
              className="flex items-center gap-3 mb-6 cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-sm luxury-gradient shadow-lg">
                <Gavel className="text-brand-navy w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-bold tracking-widest luxury-text-gradient uppercase">Elite</span>
            </div>
            <p className="text-brand-gold text-[11px] font-bold uppercase tracking-wider mb-2">Nepal's Luxury Marketplace</p>
            <p className="text-brand-slate text-xs font-light leading-relaxed mb-6">
              Premier online auction platform based in Bhairahawa, Nepal. Registered with Company Registrar Office, Nepal.
            </p>
            <div className="space-y-1.5 border-t border-white/5 pt-4">
              <p className="text-[10px] text-brand-slate font-medium uppercase tracking-widest">VAT No: 610234567</p>
              <p className="text-[10px] text-brand-slate font-medium uppercase tracking-widest">Reg No: 284561/078/079</p>
              <div className="flex items-center gap-2 mt-4 bg-white/5 px-3 py-2 border border-brand-gold/20 rounded-sm">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span className="text-[9px] text-white font-bold uppercase tracking-widest">NRB Verified</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">Exploration <ChevronRight className="w-3 h-3 opacity-30" /></h4>
            <ul className="space-y-4">
              {[
                { label: 'Buy on Elite', view: 'live-auctions' },
                { label: 'Sell on Elite', view: 'sell-with-us' },
                { label: 'All Categories', view: 'upcoming-auctions' },
                { label: 'Live Auctions', view: 'live-auctions' },
                { label: 'How It Works', view: 'how-it-works' },
                { label: 'Upcoming Lots', view: 'upcoming-auctions' },
                { label: 'Help Center', view: 'how-it-works' }
              ].map(link => (
                <li key={link.label}>
                  <button 
                    onClick={() => onNavClick?.(link.view)}
                    className="text-brand-slate hover:text-brand-gold transition-colors text-xs font-light uppercase tracking-wider text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Account */}
          <div>
            <h4 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">Account <ChevronRight className="w-3 h-3 opacity-30" /></h4>
            <ul className="space-y-4">
              {[
                { label: 'My Dashboard', view: 'dashboard' },
                { label: 'Sign In', view: 'login' },
                { label: 'Register', view: 'register' },
                { label: 'My Bids', view: 'dashboard' },
                { label: 'Watchlist', view: 'dashboard' },
                { label: 'Settings', view: 'dashboard' }
              ].map(link => (
                <li key={link.label}>
                  <button 
                    onClick={() => onNavClick?.(link.view)}
                    className="text-brand-slate hover:text-brand-gold transition-colors text-xs font-light uppercase tracking-wider text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div>
            <h4 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">Policies <ShieldAlert className="w-3 h-3 opacity-30" /></h4>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Returns & Refunds', 'Buyer Protection', 'Seller Agreement', 'Prohibited Items', 'Heritage Guidelines'].map(link => (
                <li key={link}>
                  <button className="text-brand-slate hover:text-brand-gold transition-colors text-xs font-light uppercase tracking-wider text-left">{link}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-8">Reach Us</h4>
            <div className="space-y-5 text-xs font-light text-brand-slate">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">Trade Tower, Bhairahawa-7, <br />Rupandehi, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>+977-71-456789</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-brand-gold shrink-0" />
                <span>+977-9801234567 (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>info@eliteauctions.np</span>
              </div>
              <div className="pt-4 border-t border-white/5 space-y-2">
                <p className="text-[10px] uppercase font-bold text-white tracking-widest">Office Hours</p>
                <p className="text-[10px]">Sun-Fri: 10:00 AM - 6:00 PM</p>
                <p className="text-[10px] text-red-500 font-bold">Closed on Saturdays</p>
              </div>
            </div>
          </div>

          {/* Column 6: Download App */}
          <div>
            <h4 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">Mobile Experience <Smartphone className="w-3.5 h-3.5" /></h4>
            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                <button className="bg-black border border-white/10 rounded-sm p-2 flex items-center gap-3 hover:border-brand-gold transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-6" alt="App Store" />
                </button>
                <button className="bg-black border border-white/10 rounded-sm p-2 flex items-center gap-3 hover:border-brand-gold transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-6" alt="Play Store" />
                </button>
              </div>
              <div className="pt-4">
                <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mb-3">Coming Soon: हाम्रो App</p>
                <div className="bg-white p-2 rounded-sm inline-block shadow-xl">
                   <div className="w-24 h-24 bg-brand-navy flex flex-col items-center justify-center border border-brand-gold/20 text-brand-gold">
                      <Scan className="w-8 h-8" />
                      <span className="text-[7px] text-white mt-2 uppercase font-bold">Scan to Pre-register</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Partnerships & Social */}
        <div className="py-12 border-y border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="flex flex-col items-center gap-2">
               <Building className="w-8 h-8 text-white" />
               <span className="text-[9px] font-bold text-white uppercase tracking-widest">FNCCI Member</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <Shield className="w-8 h-8 text-white" />
               <span className="text-[9px] font-bold text-white uppercase tracking-widest">NRB Verified</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <History className="w-8 h-8 text-white" />
               <span className="text-[9px] font-bold text-white uppercase tracking-widest">Dept. of Archaeology</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <Globe className="w-8 h-8 text-white" />
               <span className="text-[9px] font-bold text-white uppercase tracking-widest">Tourism Board</span>
             </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-6">
            <p className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.3em]">Join the Conversation</p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full text-brand-slate hover:text-brand-gold hover:bg-brand-gold/10 transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full text-brand-slate hover:text-brand-gold hover:bg-brand-gold/10 transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full text-brand-slate hover:text-brand-gold hover:bg-brand-gold/10 transition-all"><Video className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full text-brand-slate hover:text-brand-gold hover:bg-brand-gold/10 transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5">
           <div className="flex flex-wrap items-center justify-center gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-[9px] text-brand-gold font-bold uppercase tracking-widest mr-4">Trusted Payments</span>
              <img src="https://esewa.com.np/common/images/esewa_logo.png" className="h-6 object-contain" alt="eSewa" />
              <img src="https://khalti.com/static/khalti-logo.png" className="h-6 object-contain" alt="Khalti" />
              <div className="h-6 w-px bg-white/10 mx-2"></div>
              <span className="text-[10px] font-bold text-white">ConnectIPS</span>
              <span className="text-[10px] font-bold text-white">FonePay</span>
              <span className="text-[10px] font-bold text-white">IME Pay</span>
              <div className="h-6 w-px bg-white/10 mx-2"></div>
              <CreditCard className="w-6 h-6 text-white" />
           </div>
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-brand-gold" />
                 <span className="text-[9px] text-brand-slate uppercase font-bold tracking-widest">SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                 <Shield className="w-4 h-4 text-brand-gold" />
                 <span className="text-[9px] text-brand-slate uppercase font-bold tracking-widest">McAfee Secure</span>
              </div>
           </div>
        </div>

        {/* Bottom Bar & Language */}
        <div className="pt-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-[10px] text-brand-slate uppercase tracking-widest">
              © 2024 ELITE AUCTIONS PVT. LTD. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-4">
              <span className="text-[9px] text-brand-slate uppercase tracking-widest">Registration No: 284561/078</span>
              <span className="text-[9px] text-brand-slate uppercase tracking-widest">Bhairahawa-7, Rupandehi</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
             <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-1">
                <button className="px-4 py-1.5 rounded-full text-[9px] font-bold luxury-gradient text-brand-navy">ENGLISH</button>
                <button className="px-4 py-1.5 rounded-full text-[9px] font-bold text-brand-slate hover:text-white transition-all">नेपाली</button>
             </div>
             <div className="h-6 w-px bg-white/10"></div>
             <p className="text-[9px] text-brand-slate uppercase tracking-widest font-bold">विवरणहरू नेपालीमा पनि उपलब्ध छन्</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] text-brand-slate uppercase tracking-widest hover:text-brand-gold cursor-pointer transition-colors">Privacy</span>
            <span className="text-[10px] text-brand-slate uppercase tracking-widest hover:text-brand-gold cursor-pointer transition-colors">Terms</span>
            <span className="text-[10px] text-brand-slate uppercase tracking-widest hover:text-brand-gold cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Proxied icons for simpler maintenance
import * as Icons from 'lucide-react';
const Building = (props: any) => <Icons.Building2 {...props} />;
const History = (props: any) => <Icons.History {...props} />;

export default Footer;
