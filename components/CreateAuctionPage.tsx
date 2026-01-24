
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  Camera, 
  Gavel, 
  Calendar, 
  MapPin, 
  Truck, 
  Info, 
  Plus, 
  Trash2, 
  ShieldCheck, 
  RotateCw, 
  Video, 
  Clock, 
  CheckCircle2,
  FileText,
  DollarSign
} from 'lucide-react';

interface CreateAuctionPageProps {
  onBack: () => void;
}

const CreateAuctionPage: React.FC<CreateAuctionPageProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    subCategory: '',
    title: '',
    brand: '',
    model: '',
    year: '',
    description: '',
    specs: [{ key: '', value: '' }],
    provenance: '',
    media: [] as File[],
    startingPrice: '',
    reservePrice: '',
    buyItNow: '',
    duration: '7',
    startDate: '',
    autoExtension: true,
    pickupOptions: 'Buyer pickup',
    shippingCost: '1000'
  });

  // Mock auto-save
  useEffect(() => {
    const timer = setInterval(() => {
      setIsSaving(true);
      setTimeout(() => setIsSaving(false), 800);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { id: 1, title: 'Basics', icon: Info },
    { id: 2, title: 'Details', icon: FileText },
    { id: 3, title: 'Media', icon: Camera },
    { id: 4, title: 'Pricing', icon: DollarSign },
    { id: 5, title: 'Shipping', icon: Truck },
    { id: 6, title: 'Review', icon: ShieldCheck }
  ];

  const handleNext = () => setStep(prev => Math.min(prev + 1, 6));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const addSpec = () => {
    setFormData(prev => ({
      ...prev,
      specs: [...prev.specs, { key: '', value: '' }]
    }));
  };

  const removeSpec = (index: number) => {
    setFormData(prev => ({
      ...prev,
      specs: prev.specs.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-gold text-white pb-20">
      <div className="nepal-pattern opacity-10 fixed inset-0 pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-brand-navy/90 backdrop-blur-md border-b border-brand-gold/10 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 text-brand-gold hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-serif font-bold luxury-text-gradient uppercase tracking-widest">List New Item</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className={`text-[10px] font-bold uppercase tracking-widest transition-opacity ${isSaving ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-brand-gold animate-pulse">Draft Auto-saving...</span>
            </div>
            <button className="text-[10px] text-brand-slate hover:text-white font-bold uppercase tracking-widest">Save as Draft</button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-brand-charcoal/50 border-b border-white/5 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 -z-0"></div>
            {steps.map(s => {
              const Icon = s.icon;
              return (
                <div key={s.id} className="relative z-10 flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    step >= s.id ? 'luxury-gradient text-brand-navy shadow-lg scale-110' : 'bg-brand-navy border border-white/10 text-brand-slate'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[9px] mt-2 font-bold uppercase tracking-[0.2em] ${step >= s.id ? 'text-brand-gold' : 'text-brand-slate'}`}>
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
        
        {/* Step 1: Basics */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-500">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Item Category</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold appearance-none">
                  <option className="bg-brand-navy">Select Main Category</option>
                  <option className="bg-brand-navy">Art</option>
                  <option className="bg-brand-navy">Jewelry</option>
                  <option className="bg-brand-navy">Watches</option>
                  <option className="bg-brand-navy">Vehicles</option>
                  <option className="bg-brand-navy">Collectibles</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Sub-category</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold appearance-none">
                  <option className="bg-brand-navy">Select Sub-category</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Item Title</label>
                <span className="text-[9px] text-brand-slate uppercase font-bold tracking-widest">0 / 80 Characters</span>
              </div>
              <input type="text" placeholder="e.g. 1963 Patek Philippe Perpetual Calendar" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Brand / Maker</label>
                <input type="text" placeholder="e.g. Rolex" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Model</label>
                <input type="text" placeholder="e.g. Daytona" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Year of Manufacture</label>
                <input type="text" placeholder="e.g. 1965" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold" />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Description */}
        {step === 2 && (
          <div className="space-y-10 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-4">
              <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Item Description</label>
              <div className="border border-white/10 bg-white/5 rounded-sm overflow-hidden">
                <div className="flex gap-2 p-2 border-b border-white/5 bg-white/5">
                   <button className="px-3 py-1 text-xs font-bold hover:bg-brand-gold/10 rounded">B</button>
                   <button className="px-3 py-1 text-xs italic hover:bg-brand-gold/10 rounded">I</button>
                   <button className="px-3 py-1 text-xs underline hover:bg-brand-gold/10 rounded">U</button>
                </div>
                <textarea 
                  placeholder="Describe the condition, features, and unique aspects..." 
                  className="w-full bg-transparent p-4 text-sm focus:outline-none min-h-[200px]"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Key Specifications</label>
                <button onClick={addSpec} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-brand-gold hover:text-white transition-colors">
                  <Plus className="w-3 h-3" /> Add Specification
                </button>
              </div>
              <div className="space-y-3">
                {formData.specs.map((spec, i) => (
                  <div key={i} className="flex gap-4 group">
                    <input type="text" placeholder="Label (e.g. Dimensions)" className="flex-1 bg-white/5 border border-white/10 p-3 text-xs focus:outline-none focus:border-brand-gold" />
                    <input type="text" placeholder="Value (e.g. 42mm)" className="flex-1 bg-white/5 border border-white/10 p-3 text-xs focus:outline-none focus:border-brand-gold" />
                    <button onClick={() => removeSpec(i)} className="p-3 text-brand-slate hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
               <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Provenance & Story</label>
               <textarea 
                  placeholder="Share the item's history, previous owners, or cultural significance..." 
                  className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold min-h-[120px]"
                />
            </div>
          </div>
        )}

        {/* Step 3: Media */}
        {step === 3 && (
          <div className="space-y-12 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-6">
               <div className="text-center p-12 border-2 border-dashed border-white/10 rounded-sm hover:border-brand-gold/40 transition-all cursor-pointer bg-white/5 group">
                  <Upload className="w-12 h-12 text-brand-slate mx-auto mb-4 group-hover:text-brand-gold transition-colors" />
                  <p className="text-sm font-bold text-white mb-2">Drag & Drop images or <span className="text-brand-gold underline">browse files</span></p>
                  <p className="text-[10px] text-brand-slate uppercase font-bold tracking-widest">Minimum 1200x800px | JPEG, PNG (Max 20 images)</p>
               </div>
               
               {/* Upsell */}
               <div className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-sm flex items-center justify-between gap-6">
                  <div className="flex gap-4">
                     <Camera className="w-8 h-8 text-brand-gold shrink-0" />
                     <div>
                        <p className="text-sm font-bold text-white uppercase tracking-wider">Professional Photography Upsell</p>
                        <p className="text-xs text-brand-slate font-light leading-relaxed">Our in-house experts can visit and take professional, high-fidelity studio shots for an additional fee of रु 25,000.</p>
                     </div>
                  </div>
                  <button className="whitespace-nowrap bg-brand-gold/10 border border-brand-gold text-brand-gold px-6 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all">Enable Service</button>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
               <div className="space-y-4">
                  <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest flex items-center gap-2"><Video className="w-4 h-4" /> Item Video</label>
                  <input type="text" placeholder="YouTube or Vimeo Link" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold" />
               </div>
               <div className="space-y-4">
                  <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest flex items-center gap-2"><RotateCw className="w-4 h-4" /> 360° Interaction</label>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-sm text-center text-[10px] font-bold uppercase tracking-widest text-brand-slate cursor-pointer hover:text-brand-gold transition-colors">
                     Upload 360 sequence
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* Step 4: Pricing */}
        {step === 4 && (
          <div className="space-y-12 animate-in fade-in slide-in-from-right duration-500">
             <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                   <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Starting Price (NPR)</label>
                   <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-brand-gold">रु</div>
                      <input type="number" placeholder="5,00,000" className="w-full bg-white/5 border border-white/10 py-4 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-gold" />
                   </div>
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Reserve Price (Opt)</label>
                   <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-brand-gold">रु</div>
                      <input type="number" placeholder="No Reserve" className="w-full bg-white/5 border border-white/10 py-4 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-gold" />
                   </div>
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Buy It Now (Opt)</label>
                   <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-brand-gold">रु</div>
                      <input type="number" placeholder="Disabled" className="w-full bg-white/5 border border-white/10 py-4 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-gold" />
                   </div>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
                <div className="space-y-6">
                   <div className="space-y-4">
                      <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Auction Duration</label>
                      <div className="grid grid-cols-4 gap-2">
                         {['3', '5', '7', '10'].map(d => (
                           <button 
                             key={d} 
                             className={`py-3 rounded-sm text-xs font-bold transition-all ${formData.duration === d ? 'luxury-gradient text-brand-navy shadow-lg' : 'bg-white/5 border border-white/10 text-brand-slate hover:text-white'}`}
                           >
                             {d} Days
                           </button>
                         ))}
                      </div>
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Start Time (NST)</label>
                      <input type="datetime-local" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-gold text-white" />
                   </div>
                </div>

                <div className="bg-white/5 border border-brand-gold/10 p-8 rounded-sm space-y-4">
                   <div className="flex items-center justify-between">
                      <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Listing Features</p>
                      <Clock className="w-4 h-4 text-brand-gold" />
                   </div>
                   <label className="flex items-center justify-between cursor-pointer group pt-4">
                      <div className="flex-grow">
                         <p className="text-sm font-bold text-white mb-1">Automatic Extension</p>
                         <p className="text-[9px] text-brand-slate uppercase font-bold tracking-widest">Extend by 2 mins if bid placed in last minute</p>
                      </div>
                      <div className="w-12 h-6 bg-brand-gold/20 rounded-full p-1 relative">
                         <div className="w-4 h-4 bg-brand-gold rounded-full transition-all translate-x-6"></div>
                      </div>
                   </label>
                   <div className="pt-4 border-t border-white/5">
                      <p className="text-[9px] text-brand-slate uppercase font-bold tracking-[0.2em] italic">Tip: 7-day auctions ending on Sunday evenings typically see 40% more activity.</p>
                   </div>
                </div>
             </div>
          </div>
        )}

        {/* Step 5: Shipping */}
        {step === 5 && (
          <div className="space-y-12 animate-in fade-in slide-in-from-right duration-500">
             <div className="space-y-4">
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Item Location</label>
                <div className="relative">
                   <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                   <input type="text" readOnly value="Bhairahawa, Nepal (Auto-detected)" className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-gold" />
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Fulfillment Options</label>
                   <div className="space-y-3">
                      {['In-person Pickup Only', 'Seller Managed Delivery', 'Elite Logistics Managed'].map(opt => (
                        <label key={opt} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm cursor-pointer hover:border-brand-gold/30 transition-all">
                           <input type="radio" name="pickup" className="accent-brand-gold" />
                           <span className="text-xs text-white uppercase tracking-wider">{opt}</span>
                        </label>
                      ))}
                   </div>
                </div>

                <div className="space-y-8">
                   <div className="space-y-4">
                      <label className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Shipping Cost (Local)</label>
                      <div className="relative">
                         <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-brand-gold">रु</div>
                         <input type="number" placeholder="Fixed Cost" className="w-full bg-white/5 border border-white/10 py-4 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-gold" />
                      </div>
                   </div>
                   <div className="p-6 bg-brand-charcoal/50 border border-white/5 rounded-sm flex items-center gap-4">
                      <ShieldCheck className="w-10 h-10 text-brand-gold opacity-50" />
                      <div>
                         <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Transit Insurance</p>
                         <p className="text-[9px] text-brand-slate leading-relaxed">Mandatory insurance of 0.5% applied to lots exceeding रु 10,00,000.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        )}

        {/* Step 6: Review */}
        {step === 6 && (
          <div className="space-y-12 animate-in fade-in slide-in-from-right duration-500">
             <div className="bg-brand-navy/60 border border-brand-gold/20 p-8 rounded-sm space-y-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                   <div>
                      <h3 className="text-2xl font-serif font-bold text-white">Preview Your Listing</h3>
                      <p className="text-[10px] text-brand-slate uppercase font-bold tracking-widest mt-1">Check all details before publishing to showroom</p>
                   </div>
                   <button onClick={() => setStep(1)} className="text-[10px] text-brand-gold border-b border-brand-gold/30 pb-0.5 font-bold uppercase tracking-widest">Edit Basics</button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                   <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center rounded-sm text-brand-slate">
                      <Camera className="w-12 h-12 opacity-20" />
                   </div>
                   <div className="col-span-2 space-y-4">
                      <h4 className="text-xl font-serif font-bold text-white">1963 Patek Philippe Perpetual Calendar</h4>
                      <p className="text-sm text-brand-slate leading-relaxed italic line-clamp-3">A masterpiece of horology in excellent antique condition. Passed through the hands of royalty and preserved in climate-controlled vaults.</p>
                      <div className="flex gap-4">
                         <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Starting: रु 5,00,000</span>
                         <span className="text-[10px] font-bold uppercase tracking-widest text-brand-slate">7 Days Duration</span>
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-6">Fee Structure (Projected)</h3>
                   <div className="space-y-3">
                      <div className="flex justify-between text-xs text-brand-slate uppercase tracking-widest">
                         <span>Listing Fee</span>
                         <span className="text-green-500 font-bold">रु 0 (Limited Promo)</span>
                      </div>
                      <div className="flex justify-between text-xs text-brand-slate uppercase tracking-widest">
                         <span>Seller Commission</span>
                         <span className="text-white">10% of Final Value</span>
                      </div>
                      <div className="flex justify-between text-xs text-brand-slate uppercase tracking-widest">
                         <span>Payment Processing</span>
                         <span className="text-white">2.5%</span>
                      </div>
                   </div>
                </div>

                <div className="p-4 bg-brand-gold/10 border border-brand-gold/30 rounded-sm">
                   <label className="flex gap-3 cursor-pointer group">
                      <input type="checkbox" className="mt-1 accent-brand-gold" />
                      <span className="text-[10px] text-brand-slate leading-relaxed uppercase font-bold tracking-wider group-hover:text-white transition-colors">I accept the Elite AUCTIONS Seller Terms & Conditions and represent that I am the legal owner of this asset.</span>
                   </label>
                </div>

                <button className="w-full luxury-gradient py-6 rounded-sm text-brand-navy font-bold text-sm uppercase tracking-[0.4em] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-3">
                  <Gavel className="w-6 h-6" /> Publish Auction
                </button>
             </div>
          </div>
        )}

        {/* Navigation Footer */}
        <div className="mt-16 flex items-center justify-between pt-12 border-t border-white/10">
          <button 
            onClick={handleBack}
            className={`flex items-center gap-2 text-brand-slate hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold ${step === 1 ? 'opacity-0' : ''}`}
          >
            <ChevronLeft className="w-4 h-4" /> Previous Step
          </button>
          
          <div className="flex items-center gap-2">
            {steps.map(s => (
              <div key={s.id} className={`w-1.5 h-1.5 rounded-full transition-all ${step === s.id ? 'bg-brand-gold w-6' : 'bg-white/10'}`} />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className={`flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold ${step === 6 ? 'opacity-0' : ''}`}
          >
            Next Step <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAuctionPage;
