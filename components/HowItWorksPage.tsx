
import React, { useState } from 'react';
import { 
  UserPlus, 
  Search, 
  Gavel, 
  Wallet, 
  Truck, 
  Camera, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  CreditCard,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Smartphone,
  Info,
  Building2,
  FileText,
  Lock,
  Globe,
  MessageSquare,
  Facebook,
  Instagram,
  Youtube,
  Zap,
  // Added missing Clock icon import
  Clock
} from 'lucide-react';

interface HowItWorksPageProps {
  onBack: () => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const buyerSteps = [
    {
      id: 1,
      title: "Join Elite Community",
      icon: UserPlus,
      time: "5 Minutes",
      points: [
        "Sign Up with Email or Nepal Mobile (+977)",
        "Verify Your Identity (Citizenship/Passport)",
        "Complete Your Profile & Preferences"
      ],
      local: "SMS OTP verification for Nepali numbers included."
    },
    {
      id: 2,
      title: "Discover & Explore",
      icon: Search,
      time: "Continuous",
      points: [
        "Search in English or नेपाली",
        "Filter by location: Bhairahawa, Kathmandu, etc.",
        "360° Item View & Condition Reports"
      ],
      local: "Explore 'Nepali Art & Heritage' specialty categories."
    },
    {
      id: 3,
      title: "Bid with Confidence",
      icon: Gavel,
      time: "Live or Timed",
      points: [
        "Join real-time auctions from hall or online",
        "Set automatic proxy bids for busy schedules",
        "Extended bidding (+2m) if last-minute activity"
      ],
      local: "All times in Nepal Time (UTC+5:45)."
    },
    {
      id: 4,
      title: "Win & Pay Securely",
      icon: Wallet,
      time: "48h Deadline",
      points: [
        "Instant SMS/Email winning notification",
        "Pay via eSewa, Khalti, ConnectIPS, or Bank",
        "Escrow protection: Funds held until delivery"
      ],
      local: "14-day inspection period with full refund guarantee."
    },
    {
      id: 5,
      title: "Receive & Enjoy",
      icon: Truck,
      time: "Fast Shipping",
      points: [
        "Local pickup at our Bhairahawa-7 office",
        "Insured door-to-door delivery via DHL Nepal",
        "Installation & Authentication certificates included"
      ],
      local: "1-month warranty on mechanical luxury items."
    }
  ];

  const sellerSteps = [
    {
      id: 1,
      title: "List Your Luxury Item",
      icon: Camera,
      time: "10 Minutes",
      points: [
        "Upload high-res photos (max 20)",
        "Detailed description & reserve price setting",
        "WhatsApp submission for quick valuation"
      ],
      local: "Free professional photography at our office."
    },
    {
      id: 2,
      title: "Expert Evaluation",
      icon: ShieldCheck,
      time: "24-48 Hours",
      points: [
        "Authentication by heritage-certified pros",
        "Market analysis & strategic pricing",
        "Legal compliance (Dept. of Archaeology)"
      ],
      local: "Expert curators for Nepali Art & Jewelry."
    },
    {
      id: 3,
      title: "Premium Marketing",
      icon: Zap,
      time: "Auction Lead-up",
      points: [
        "Targeted ads to 50k+ verified collectors",
        "Press coverage in major Nepali dailies",
        "In-person previews in Bhairahawa & KTM"
      ],
      local: "Reach global buyers via partner networks."
    },
    {
      id: 4,
      title: "Competitive Auction",
      icon: Gavel,
      time: "7-10 Days",
      points: [
        "Real-time bid tracking via dashboard",
        "International phone bidding management",
        "High-energy live hall environment"
      ],
      local: "Professional certified auctioneers."
    },
    {
      id: 5,
      title: "Get Paid Quickly",
      icon: CreditCard,
      time: "3-5 Business Days",
      points: [
        "Automatic invoicing & buyer management",
        "Funds released after buyer approval",
        "Secure payout to bank, eSewa, or Khalti"
      ],
      local: "TDS deduction & tax invoicing as per Nepal law."
    }
  ];

  const faqs = [
    {
      q: "How do I register as a buyer in Nepal?",
      a: "Simply sign up with your email or mobile number. To bid on items over NPR 50,000, you must upload a clear copy of your Nepali Citizenship or Passport for KYC verification."
    },
    {
      q: "What are the payment methods accepted?",
      a: "We accept all major Nepali digital wallets (eSewa, Khalti, IME Pay), ConnectIPS, Bank Transfers (Global IME, Nabil, Everest), and cash deposits at our Bhairahawa-7 head office."
    },
    {
      q: "Is there a buyer's premium?",
      a: "Yes, Elite AUCTIONS charges a 15% Buyer's Premium on the hammer price. As per Nepal tax laws, 13% VAT is applied to this service fee."
    },
    {
      q: "How is delivery handled within Nepal?",
      a: "We offer local pickup in Bhairahawa. For other regions, we use insured logistics partners like DHL Nepal and SpeedAF to ensure your high-value items reach you safely."
    },
    {
      q: "How does the escrow service work?",
      a: "When you pay for an item, the funds are held by Global IME Bank (our escrow partner). The seller only receives the payment once you confirm receipt and the 14-day inspection period passes."
    },
    {
      q: "What items are prohibited from sale?",
      a: "We do not auction restricted heritage items older than 100 years without Department of Archaeology clearance, protected wildlife products, or items with unclear provenance."
    }
  ];

  const currentSteps = activeTab === 'buy' ? buyerSteps : sellerSteps;

  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-gold selection:text-brand-navy pb-24">
      {/* Background patterns */}
      <div className="nepal-pattern opacity-10 fixed inset-0 pointer-events-none"></div>

      {/* Header section */}
      <section className="relative pt-32 pb-20 border-b border-brand-gold/10 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">
              How <span className="luxury-text-gradient italic">Elite Auctions</span> Works
            </h1>
            <p className="text-xl text-brand-slate font-light leading-relaxed mb-12">
              Nepal's most trusted luxury marketplace. We've simplified the process of acquiring and selling rare heritage, jewelry, and timepieces.
            </p>

            {/* Toggle Switch */}
            <div className="inline-flex items-center p-1.5 bg-brand-charcoal/50 border border-brand-gold/20 rounded-full mb-8">
              <button 
                onClick={() => setActiveTab('buy')}
                className={`px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === 'buy' ? 'luxury-gradient text-brand-navy shadow-xl scale-105' : 'text-brand-slate hover:text-white'
                }`}
              >
                I Want to BUY
              </button>
              <button 
                onClick={() => setActiveTab('sell')}
                className={`px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === 'sell' ? 'luxury-gradient text-brand-navy shadow-xl scale-105' : 'text-brand-slate hover:text-white'
                }`}
              >
                I Want to SELL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flowchart Visual */}
      <section className="py-20 bg-brand-charcoal/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent -translate-y-1/2 -z-0"></div>
            
            {currentSteps.map((s, i) => (
              <div key={s.id} className="relative z-10 flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full luxury-gradient flex items-center justify-center text-brand-navy shadow-2xl group-hover:scale-110 transition-transform duration-500 relative">
                  <s.icon className="w-8 h-8" />
                  <span className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-brand-navy border border-brand-gold flex items-center justify-center text-brand-gold text-[10px] font-bold">0{s.id}</span>
                </div>
                <div className="mt-6 text-center lg:max-w-[160px]">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-1">{s.title.split(' ')[0]}</h3>
                  <div className="w-4 h-0.5 luxury-gradient mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {currentSteps.map((step, idx) => (
              <div key={step.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-12 duration-700`}>
                <div className="lg:w-1/2 space-y-8">
                  <div className="inline-flex items-center gap-4 bg-brand-gold/10 border border-brand-gold/20 px-4 py-2 rounded-sm">
                    <step.icon className="w-6 h-6 text-brand-gold" />
                    <span className="text-[10px] text-brand-gold uppercase font-bold tracking-[0.3em]">Step 0{step.id}</span>
                    <div className="h-4 w-px bg-brand-gold/20"></div>
                    <span className="text-[10px] text-brand-slate uppercase font-bold tracking-widest flex items-center gap-2">
                      <Clock className="w-3 h-3" /> {step.time}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                    {step.title}
                  </h2>
                  <ul className="space-y-4">
                    {step.points.map((p, pi) => (
                      <li key={pi} className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold mt-1 shrink-0" />
                        <span className="text-lg text-brand-slate font-light leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 bg-brand-navy border-l-2 border-brand-gold text-brand-gold text-sm italic rounded-sm">
                    <Info className="inline-block w-4 h-4 mr-2 -mt-1" />
                    {step.local}
                  </div>
                </div>
                <div className="lg:w-1/2 relative">
                  <div className="aspect-video bg-brand-charcoal border border-brand-gold/10 rounded-sm overflow-hidden group">
                     {/* Placeholder for visual aid/image */}
                     <img 
                       src={activeTab === 'buy' 
                         ? `https://images.unsplash.com/photo-${[
                           '1554224155-16974a4275c1',
                           '1578301978693-85fa9c0320b9',
                           '1592198084033-aade902d1aae',
                           '1599643477877-530eb83abc8e',
                           '1512917774080-9991f1c4c750'
                         ][idx]}?auto=format&fit=crop&q=80&w=800`
                         : `https://images.unsplash.com/photo-${[
                           '1542744173-8e7e53415bb0',
                           '1581091226825-a6a2a5aee158',
                           '1460925895917-afdab827c52f',
                           '1572021335469-3171624c1c4d',
                           '1580519542036-c47de6196ba5'
                         ][idx]}?auto=format&fit=crop&q=80&w=800`
                       } 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
                       alt={step.title}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protections Section */}
      <section className="py-24 bg-brand-navy border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Elite <span className="luxury-text-gradient italic">Buyer Protections</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, t: "Authenticity Guarantee", d: "Full refund if item is proven non-authentic by our partner labs." },
              { icon: Lock, t: "Secure Payments", d: "SSL encrypted transactions and escrow fund protection via Global IME." },
              { icon: FileText, t: "Transparent Pricing", d: "All fees, premiums, and Nepal taxes are shown clearly before you bid." },
              { icon: MessageSquare, t: "Nepal-Based Support", d: "Dedicated local support team available in Bhairahawa and Kathmandu." }
            ].map((p, i) => (
              <div key={i} className="text-center p-8 bg-white/5 border border-white/10 rounded-sm hover:border-brand-gold transition-all group">
                <p.icon className="w-12 h-12 text-brand-gold mx-auto mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">{p.t}</h3>
                <p className="text-xs text-brand-slate leading-relaxed font-light">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">Platform <span className="luxury-text-gradient italic">At a Glance</span></h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-white/10 bg-brand-charcoal/30">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-6 text-[10px] text-brand-gold uppercase tracking-[0.2em] border-b border-white/10">Feature</th>
                  <th className="p-6 text-[10px] text-brand-gold uppercase tracking-[0.2em] border-b border-white/10">For Buyers</th>
                  <th className="p-6 text-[10px] text-brand-gold uppercase tracking-[0.2em] border-b border-white/10">For Sellers</th>
                </tr>
              </thead>
              <tbody className="text-sm text-brand-slate font-light">
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-6 uppercase tracking-widest text-[10px] font-bold text-white">Registration</td>
                  <td className="p-6">5 Minutes (ID Required)</td>
                  <td className="p-6">10 Minutes (Authentication)</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-6 uppercase tracking-widest text-[10px] font-bold text-white">Service Fees</td>
                  <td className="p-6">15% Buyer's Premium</td>
                  <td className="p-6">10% Success Fee</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-6 uppercase tracking-widest text-[10px] font-bold text-white">Verification</td>
                  <td className="p-6">KYC Identity Check</td>
                  <td className="p-6">Item Heritage Approval</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-6 uppercase tracking-widest text-[10px] font-bold text-white">Payments</td>
                  <td className="p-6">8+ Nepal Options</td>
                  <td className="p-6">Secure Escrow Payouts</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 uppercase tracking-widest text-[10px] font-bold text-white">Support</td>
                  <td className="p-6">Dedicated Buyer Rep</td>
                  <td className="p-6">Personal Account Manager</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-charcoal/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">Frequently Asked <span className="luxury-text-gradient italic">Questions</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brand-navy border border-white/5 rounded-sm overflow-hidden hover:border-brand-gold/30 transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-sm font-bold text-white pr-8">{faq.q}</span>
                  {activeFaq === i ? <ChevronUp className="w-4 h-4 text-brand-gold" /> : <ChevronDown className="w-4 h-4 text-brand-gold" />}
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-sm text-brand-slate font-light leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {[
              { t: "Company Registrar Office", icon: Building2 },
              { t: "Nepal Rastra Bank", icon: ShieldCheck },
              { t: "FNCCI Member", icon: Award },
              { t: "SSL Secure", icon: Lock },
              { t: "Nepal Insurance", icon: Globe },
              { t: "Global IME Escrow", icon: Wallet }
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <b.icon className="w-8 h-8 text-white" />
                <span className="text-[8px] font-bold uppercase tracking-widest text-center">{b.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-charcoal/50 border border-brand-gold/20 p-12 rounded-sm text-center group">
              <h3 className="text-3xl font-serif font-bold text-white mb-4">Ready to <span className="luxury-text-gradient italic">Bid?</span></h3>
              <p className="text-brand-slate mb-8 font-light italic text-sm">Create your buyer account in 5 minutes and join the elite community.</p>
              <button className="luxury-gradient w-full py-4 rounded-full text-brand-navy font-bold text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">
                Join as Buyer
              </button>
            </div>
            <div className="bg-brand-charcoal/50 border border-brand-gold/20 p-12 rounded-sm text-center group">
              <h3 className="text-3xl font-serif font-bold text-white mb-4">Have Something to <span className="luxury-text-gradient italic">Sell?</span></h3>
              <p className="text-brand-slate mb-8 font-light italic text-sm">Get a free professional valuation today from our heritage experts.</p>
              <button className="bg-white/5 border border-brand-gold text-brand-gold w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all">
                Start Selling
              </button>
            </div>
          </div>
          
          <div className="mt-16 text-center space-y-4">
            <p className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em]">Still Have Questions?</p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="tel:+97771456789" className="text-white hover:text-brand-gold transition-colors text-sm font-light">Call Us: +977-71-456789</a>
              <a href="https://wa.me/9779801234567" className="text-white hover:text-brand-gold transition-colors text-sm font-light">WhatsApp: +977-9801234567</a>
              <a href="mailto:help@eliteauctions.np" className="text-white hover:text-brand-gold transition-colors text-sm font-light">Email: help@eliteauctions.np</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
