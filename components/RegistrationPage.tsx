
import React, { useState, useEffect } from 'react';
import { 
  Gavel, 
  User, 
  Mail, 
  Lock, 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  Camera, 
  Shield, 
  ChevronDown,
  Info,
  ArrowLeft,
  Smartphone
} from 'lucide-react';

interface RegistrationPageProps {
  onBack: () => void;
  onLogin: () => void;
}

type Step = 1 | 2 | 3 | 'success';

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onBack, onLogin }) => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [lang, setLang] = useState<'EN' | 'NE'>('EN');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(30);

  useEffect(() => {
    let interval: any;
    if (currentStep === 2 && resendTimer > 0) {
      interval = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [currentStep, resendTimer]);

  const passwordStrength = (pw: string) => {
    if (!pw) return 0;
    let strength = 0;
    if (pw.length > 8) strength += 25;
    if (/[A-Z]/.test(pw)) strength += 25;
    if (/[0-9]/.test(pw)) strength += 25;
    if (/[^A-Za-z0-9]/.test(pw)) strength += 25;
    return strength;
  };

  const nepaliCities = [
    'Bhairahawa', 'Kathmandu', 'Pokhara', 'Lalitpur', 'Bharatpur', 'Biratnagar', 'Butwal', 'Dharan', 'Nepalgunj', 'Itahari'
  ];

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const steps = [
    { id: 1, name: lang === 'EN' ? 'Basic Info' : 'आधारभूत जानकारी' },
    { id: 2, name: lang === 'EN' ? 'Verification' : 'प्रमाणीकरण' },
    { id: 3, name: lang === 'EN' ? 'Profile' : 'प्रोफाइल' }
  ];

  const content = {
    EN: {
      title: "Join Elite AUCTIONS",
      subtitle: "Join 10,000+ Nepali collectors and buyers",
      fullName: "Full Name",
      email: "Email Address",
      mobile: "Mobile Number",
      password: "Password",
      confirmPassword: "Confirm Password",
      referral: "Referral Code (Optional)",
      terms: "I agree to Terms & Conditions and Privacy Policy",
      proceed: "Proceed to Verification",
      otpSent: "OTP sent via SMS to +977-98XXXXXXXX",
      verify: "Verify & Complete Registration",
      resend: "Resend OTP in",
      resendBtn: "Resend Now",
      sec: "seconds",
      welcome: "स्वागतम्! Welcome to Elite AUCTIONS",
      successMsg: "Your account is being verified. You can now explore live auctions.",
      explore: "Explore Live Auctions",
      completeProfile: "Complete Your Profile",
      citizenship: "Citizenship / Passport Number",
      currency: "Preferred Currency",
      pan: "PAN / VAT Registration (Optional)",
      location: "Primary Location",
      interests: "Interests (Popular in Nepal)"
    },
    NE: {
      title: "Elite AUCTIONS मा सामेल हुनुहोस्",
      subtitle: "१०,०००+ नेपाली संकलक र खरीददारहरूमा सामेल हुनुहोस्",
      fullName: "पूरा नाम",
      email: "इमेल ठेगाना",
      mobile: "मोबाइल नम्बर",
      password: "पासवर्ड",
      confirmPassword: "पासवर्ड पुष्टि गर्नुहोस्",
      referral: "रेफरल कोड (वैकल्पिक)",
      terms: "म सर्तहरू र गोपनीयता नीतिमा सहमत छु",
      proceed: "प्रमाणीकरणमा जानुहोस्",
      otpSent: "OTP SMS मार्फत +९७७-९८XXXXXXXX मा पठाइएको छ",
      verify: "प्रमाणित गर्नुहोस् र दर्ता पूरा गर्नुहोस्",
      resend: "पुनः पठाउनुहोस्",
      resendBtn: "अहिले पुनः पठाउनुहोस्",
      sec: "सेकेन्ड",
      welcome: "स्वागतम्! Elite AUCTIONS मा स्वागत छ",
      successMsg: "तपाईको खाता प्रमाणित हुँदैछ। अब तपाई लाइभ लिलामीहरू हेर्न सक्नुहुन्छ।",
      explore: "लाइभ लिलामीहरू हेर्नुहोस्",
      completeProfile: "आफ्नो प्रोफाइल पूरा गर्नुहोस्",
      citizenship: "नागरिकता / राहदानी नम्बर",
      currency: "रुचाइएको मुद्रा",
      pan: "PAN / VAT दर्ता (वैकल्पिक)",
      location: "प्राथमिक स्थान",
      interests: "चासोका क्षेत्रहरू"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen nepal-pattern flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="mandala-overlay"></div>
      
      {/* Top Bar */}
      <div className="absolute top-8 left-0 right-0 px-8 flex justify-between items-center z-20">
        <button onClick={onBack} className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
          <button onClick={() => setLang('EN')} className={`px-4 py-1 text-[10px] font-bold rounded-full transition-all ${lang === 'EN' ? 'luxury-gradient text-brand-navy' : 'text-brand-slate'}`}>EN</button>
          <button onClick={() => setLang('NE')} className={`px-4 py-1 text-[10px] font-bold rounded-full transition-all ${lang === 'NE' ? 'luxury-gradient text-brand-navy' : 'text-brand-slate'}`}>नेपाली</button>
        </div>
      </div>

      <div className="w-full max-w-2xl z-10 my-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Step Indicator */}
        {currentStep !== 'success' && (
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
            {steps.map((s) => (
              <div key={s.id} className="relative z-10 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                  currentStep >= s.id ? 'luxury-gradient text-brand-navy scale-110 shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-brand-navy border border-white/20 text-brand-slate'
                }`}>
                  {currentStep > s.id ? <CheckCircle className="w-6 h-6" /> : s.id}
                </div>
                <span className={`text-[10px] mt-2 font-bold uppercase tracking-widest ${currentStep >= s.id ? 'text-brand-gold' : 'text-brand-slate'}`}>{s.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div className="bg-brand-navy/80 backdrop-blur-xl border border-white/10 p-10 rounded-sm shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold luxury-text-gradient mb-2">{t.title}</h2>
              <p className="text-brand-slate text-sm font-light italic">{t.subtitle}</p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); setCurrentStep(2); }}>
              <div className="space-y-1 col-span-2">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{t.fullName}</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-slate group-focus-within:text-brand-gold transition-colors" />
                  <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-gold transition-all" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{t.email}</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-slate" />
                  <input required type="email" placeholder="name@email.com" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-gold transition-all" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{t.mobile}</label>
                <div className="relative group flex">
                  <div className="bg-white/5 border border-white/10 border-r-0 rounded-l-sm py-4 px-4 text-sm font-bold text-brand-gold">+977</div>
                  <input required type="tel" pattern="[0-9]{10}" placeholder="98XXXXXXXX" className="w-full bg-white/5 border border-white/10 rounded-r-sm py-4 px-4 text-sm focus:outline-none focus:border-brand-gold transition-all" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{t.password}</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-slate" />
                  <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-gold transition-all" />
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
                  <div className={`h-full transition-all duration-500 ${
                    passwordStrength(password) < 50 ? 'bg-red-500' : passwordStrength(password) < 100 ? 'bg-yellow-500' : 'bg-green-500'
                  }`} style={{ width: `${passwordStrength(password)}%` }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{t.confirmPassword}</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-slate" />
                  <input required type="password" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-gold transition-all" />
                </div>
              </div>

              <div className="col-span-2 py-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input required type="checkbox" className="mt-1 accent-brand-gold" />
                  <span className="text-[11px] text-brand-slate leading-relaxed group-hover:text-white transition-colors">{t.terms}</span>
                </label>
              </div>

              <button type="submit" className="col-span-2 luxury-gradient py-4 rounded-sm text-brand-navy font-bold text-sm uppercase tracking-[0.2em] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 group">
                {t.proceed} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Verification */}
        {currentStep === 2 && (
          <div className="bg-brand-navy/80 backdrop-blur-xl border border-white/10 p-10 rounded-sm shadow-2xl text-center">
            <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-8">
              <Smartphone className="w-10 h-10 text-brand-gold animate-bounce" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mb-2">{t.verification}</h2>
            <p className="text-brand-slate text-sm mb-10">{t.otpSent}</p>

            <div className="flex justify-center gap-3 mb-10">
              {otp.map((digit, idx) => (
                <input 
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  className="w-12 h-16 bg-white/5 border border-white/10 text-center text-2xl font-bold text-brand-gold focus:outline-none focus:border-brand-gold transition-all rounded-sm"
                />
              ))}
            </div>

            <div className="mb-10">
              {resendTimer > 0 ? (
                <p className="text-xs text-brand-slate font-medium uppercase tracking-widest">{t.resend} <span className="text-brand-gold">{resendTimer}</span> {t.sec}</p>
              ) : (
                <button onClick={() => setResendTimer(30)} className="text-xs text-brand-gold font-bold uppercase tracking-widest border-b border-brand-gold/30 pb-0.5 hover:text-white hover:border-white transition-all">
                  {t.resendBtn}
                </button>
              )}
            </div>

            <button onClick={() => setCurrentStep(3)} className="w-full luxury-gradient py-4 rounded-sm text-brand-navy font-bold text-sm uppercase tracking-[0.2em] transition-all">
              {t.verify}
            </button>
          </div>
        )}

        {/* Step 3: Profile Completion */}
        {currentStep === 3 && (
          <div className="bg-brand-navy/80 backdrop-blur-xl border border-white/10 p-10 rounded-sm shadow-2xl">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-brand-gold/30 flex flex-col items-center justify-center relative group cursor-pointer hover:border-brand-gold transition-all">
                  <Camera className="w-8 h-8 text-brand-slate group-hover:text-brand-gold" />
                  <span className="text-[8px] text-brand-slate mt-2 uppercase font-bold tracking-widest">Upload Photo</span>
                  <div className="absolute inset-0 rounded-full bg-brand-gold/5 opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>
              
              <div className="flex-grow space-y-6">
                <div className="space-y-1">
                  <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest flex items-center gap-1.5">
                    {t.citizenship} <Info className="w-3 h-3 opacity-50" />
                  </label>
                  <input type="text" placeholder="ID Number" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-4 text-sm focus:outline-none focus:border-brand-gold" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{t.location}</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-4 pr-10 text-sm focus:outline-none appearance-none text-white">
                        <option className="bg-brand-navy">Bhairahawa (Auto)</option>
                        {nepaliCities.filter(c => c !== 'Bhairahawa').map(c => <option key={c} className="bg-brand-navy">{c}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{t.currency}</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-4 pr-10 text-sm focus:outline-none appearance-none text-white">
                        <option className="bg-brand-navy">NPR (रु)</option>
                        <option className="bg-brand-navy">USD ($)</option>
                        <option className="bg-brand-navy">EUR (€)</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest block">{t.interests}</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Nepali Art & Antiquities', 'Tibetan Thangkas', 'Handicrafts & Dhaka',
                      'Luxury Watches', 'Precious Stones', 'Classic Vehicles'
                    ].map(interest => (
                      <label key={interest} className="flex items-center gap-3 bg-white/5 p-3 rounded-sm border border-transparent hover:border-brand-gold/30 cursor-pointer transition-all">
                        <input type="checkbox" className="accent-brand-gold" />
                        <span className="text-[10px] text-white uppercase tracking-wider">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button onClick={() => setCurrentStep('success')} className="w-full luxury-gradient py-4 rounded-sm text-brand-navy font-bold text-sm uppercase tracking-[0.2em] transition-all">
                    Finalize Registration
                  </button>
                  <button onClick={() => setCurrentStep('success')} className="w-full py-4 text-brand-slate text-[10px] uppercase font-bold tracking-widest hover:text-white">Skip for now</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success State */}
        {currentStep === 'success' && (
          <div className="bg-brand-navy/80 backdrop-blur-xl border border-white/10 p-16 rounded-sm shadow-2xl text-center">
            <div className="w-24 h-24 rounded-full luxury-gradient flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              <CheckCircle className="w-12 h-12 text-brand-navy" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-white mb-4">{t.welcome}</h2>
            <p className="text-brand-slate text-sm font-light leading-relaxed max-w-sm mx-auto mb-12">
              {t.successMsg}
            </p>
            
            <div className="flex flex-col gap-4">
              <button onClick={onBack} className="luxury-gradient py-4 px-10 rounded-sm text-brand-navy font-bold text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all">
                {t.explore}
              </button>
              <div className="h-px bg-white/10 w-full my-4"></div>
              <div className="flex justify-center items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2">
                    <Shield className="w-5 h-5 text-brand-gold" />
                  </div>
                  <span className="text-[8px] text-brand-slate uppercase font-bold tracking-widest">ID Verified</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                  </div>
                  <span className="text-[8px] text-brand-slate uppercase font-bold tracking-widest">KYC Pending</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Back to Login Footer */}
        {currentStep !== 'success' && (
          <div className="mt-8 text-center">
            <p className="text-brand-slate text-sm font-light">
              Already have an account? {' '}
              <button onClick={onLogin} className="text-brand-gold font-bold uppercase tracking-widest text-[11px] hover:text-white transition-colors">Sign In here</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;
