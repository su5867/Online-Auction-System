
import React, { useState } from 'react';
import { 
  Gavel, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  ArrowLeft, 
  Phone,
  Globe,
  Facebook,
  Wallet
} from 'lucide-react';

interface LoginPageProps {
  onBack: () => void;
  onRegister?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onRegister }) => {
  const [lang, setLang] = useState<'EN' | 'NE'>('EN');
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState<'email' | 'phone'>('email');

  const content = {
    EN: {
      tagline: "Nepal's Premier Luxury Auction House",
      emailPhone: "Email or Nepal Phone Number",
      password: "Password",
      remember: "Remember Me",
      forgot: "Forgot Password?",
      signIn: "Sign In to Your Account",
      or: "OR CONTINUE WITH",
      newTo: "New to Elite AUCTIONS?",
      create: "Create your account",
      joinCount: "Join 10,000+ Nepali collectors and buyers",
      khalti: "Continue with Khalti",
      google: "Continue with Google",
      facebook: "Continue with Facebook",
      nrb: "Verified by Nepal Rastra Bank",
      fncci: "Member of FNCCI",
      address: "Trade Tower, Bhairahawa-7, Rupandehi, Nepal",
      hours: "Sun-Fri, 10 AM - 6 PM (NST)",
      contact: "+977-71-456789"
    },
    NE: {
      tagline: "नेपालको प्रमुख लक्जरी अक्सन हाउस",
      emailPhone: "इमेल वा नेपाल फोन नम्बर",
      password: "पासवर्ड",
      remember: "मलाई सम्झनुहोस्",
      forgot: "पासवर्ड बिर्सनुभयो?",
      signIn: "आफ्नो खातामा साइन इन गर्नुहोस्",
      or: "वा यसबाट जारी राख्नुहोस्",
      newTo: "Elite AUCTIONS मा नयाँ हुनुहुन्छ?",
      create: "आफ्नो खाता बनाउनुहोस्",
      joinCount: "१०,०००+ नेपाली संकलक र खरीददारहरूमा सामेल हुनुहोस्",
      khalti: "Khalti बाट जारी राख्नुहोस्",
      google: "Google बाट जारी राख्नुहोस्",
      facebook: "Facebook बाट जारी राख्नुहोस्",
      nrb: "नेपाल राष्ट्र बैंक द्वारा प्रमाणित",
      fncci: "FNCCI को सदस्य",
      address: "ट्रेड टावर, भैरहवा-७, रुपन्देही, नेपाल",
      hours: "आइतबार-शुक्रबार, बिहान १० - बेलुका ६ (नेपाल समय)",
      contact: "+९७७-७१-४५६७८९"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen nepal-pattern flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="mandala-overlay"></div>
      
      {/* Back to Home */}
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center gap-2 text-brand-gold hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-bold uppercase tracking-widest">Back to Gallery</span>
      </button>

      {/* Language Toggle */}
      <div className="absolute top-8 right-8 flex items-center bg-white/5 border border-white/10 rounded-full p-1">
        <button 
          onClick={() => setLang('EN')}
          className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${lang === 'EN' ? 'luxury-gradient text-brand-navy' : 'text-brand-slate'}`}
        >
          ENGLISH
        </button>
        <button 
          onClick={() => setLang('NE')}
          className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${lang === 'NE' ? 'luxury-gradient text-brand-navy' : 'text-brand-slate'}`}
        >
          नेपाली
        </button>
      </div>

      <div className="w-full max-w-[480px] z-10 animate-in fade-in zoom-in duration-500">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 luxury-gradient rounded-xl shadow-2xl mb-6">
            <Gavel className="w-8 h-8 text-brand-navy" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold luxury-text-gradient uppercase tracking-[0.2em] mb-2">Elite AUCTIONS</h1>
          <p className="text-brand-gold text-xs font-medium uppercase tracking-[0.15em] opacity-80">{t.tagline}</p>
        </div>

        {/* Form Container */}
        <div className="bg-brand-navy/60 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-sm shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email/Phone */}
            <div className="space-y-2">
              <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest block">{t.emailPhone}</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-white/10 pr-3">
                  {inputType === 'phone' ? (
                    <span className="text-sm font-bold text-white">+977</span>
                  ) : (
                    <Mail className="w-4 h-4 text-brand-slate" />
                  )}
                </div>
                <input 
                  type={inputType === 'phone' ? 'tel' : 'email'}
                  placeholder={inputType === 'phone' ? '98XXXXXXXX' : 'name@luxury.com'}
                  onChange={(e) => setInputType(e.target.value.match(/^[0-9]+$/) ? 'phone' : 'email')}
                  className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-20 pr-4 text-sm focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all placeholder:text-brand-slate/50"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{t.password}</label>
                <a href="#" className="text-[10px] text-brand-slate hover:text-brand-gold transition-colors uppercase tracking-widest">{t.forgot}</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-slate" />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-12 text-sm focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all placeholder:text-brand-slate/50"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-slate hover:text-brand-gold transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative w-5 h-5">
                <input type="checkbox" className="peer hidden" />
                <div className="w-5 h-5 border border-white/20 rounded-sm group-hover:border-brand-gold transition-colors peer-checked:bg-brand-gold peer-checked:border-brand-gold"></div>
                <ShieldCheck className="absolute top-0.5 left-0.5 w-4 h-4 text-brand-navy opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className="text-xs text-brand-slate font-medium group-hover:text-white transition-colors">{t.remember}</span>
            </label>

            {/* Sign In Button */}
            <button className="w-full luxury-gradient py-4 rounded-sm text-brand-navy font-bold text-sm uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all">
              {t.signIn}
            </button>

            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-brand-navy px-4 text-[10px] text-brand-slate font-bold tracking-widest uppercase">{t.or}</span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-1 gap-3">
              <button className="flex items-center justify-center gap-3 bg-brand-khalti hover:brightness-110 text-white py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all">
                <Wallet className="w-4 h-4" />
                {t.khalti}
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-3 bg-white hover:bg-white/90 text-gray-900 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all">
                  <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-3 bg-[#1877F2] hover:brightness-110 text-white py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all">
                  <Facebook className="w-4 h-4" />
                  Facebook
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Register Prompt */}
        <div className="mt-8 text-center space-y-4">
          <div className="flex flex-col gap-2">
            <span className="text-brand-slate text-sm font-light">{t.newTo}</span>
            <button onClick={onRegister} className="text-brand-gold font-bold text-xs uppercase tracking-widest border-b border-brand-gold/30 pb-0.5 inline-block mx-auto hover:text-white hover:border-white transition-all">
              {t.create}
            </button>
          </div>
          <p className="text-[10px] text-brand-slate font-medium uppercase tracking-[0.1em]">{t.joinCount}</p>
        </div>

        {/* Trust & Location */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-white uppercase tracking-wider">{t.nrb}</p>
              <p className="text-[9px] text-brand-slate leading-relaxed">{t.fncci}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-brand-gold flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-white uppercase tracking-wider">{t.contact}</p>
              <p className="text-[9px] text-brand-slate leading-relaxed">{t.hours}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 opacity-50">
           <span className="text-[9px] text-brand-slate uppercase tracking-widest">{t.address}</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
