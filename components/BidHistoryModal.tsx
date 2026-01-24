
import React from 'react';
import { X, Gavel, Clock, Trophy, ShieldCheck } from 'lucide-react';
import { BidEntry } from '../types';

interface BidHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  bidCount: number;
  currentBid: number;
  history: BidEntry[];
}

const BidHistoryModal: React.FC<BidHistoryModalProps> = ({ isOpen, onClose, bidCount, currentBid, history }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-navy/90 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-brand-navy border border-brand-gold/30 rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="absolute top-0 left-0 w-full h-1 luxury-gradient"></div>
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
              <Gavel className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-white uppercase tracking-widest">Bid History</h2>
              <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{bidCount} Total Bids</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-brand-slate hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Current High Bid Sticky Header */}
        <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-brand-gold" />
            <span className="text-[10px] text-brand-slate uppercase font-bold tracking-widest">Leading Bid</span>
          </div>
          <span className="text-xl font-serif font-bold luxury-text-gradient">रु {currentBid.toLocaleString()}</span>
        </div>

        {/* History List */}
        <div className="max-h-[60vh] overflow-y-auto no-scrollbar p-6 space-y-4">
          {history.map((bid, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-between p-4 border rounded-sm transition-all ${
                idx === 0 
                ? 'bg-brand-gold/5 border-brand-gold/30' 
                : 'bg-white/5 border-white/10'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  idx === 0 ? 'bg-brand-gold text-brand-navy' : 'bg-white/10 text-brand-slate'
                }`}>
                  {idx === 0 ? 'H' : history.length - idx}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-white uppercase tracking-wider">
                      {idx === 0 ? bid.bidderId : bid.bidderId.replace(/(.{1}).*(.{1})/, '$1***$2')}
                    </p>
                    {idx === 0 && <ShieldCheck className="w-3 h-3 text-brand-gold" />}
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-slate text-[9px] uppercase tracking-widest mt-0.5">
                    <Clock className="w-2.5 h-2.5" />
                    {bid.time}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${idx === 0 ? 'text-brand-gold' : 'text-white'}`}>
                  रु {bid.amount.toLocaleString()}
                </p>
                <p className="text-[8px] text-brand-slate uppercase tracking-tighter">Verified Participant</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-6 bg-brand-charcoal/50 text-center">
          <p className="text-[9px] text-brand-slate/60 uppercase tracking-[0.2em] leading-relaxed">
            All bids are final and legally binding per Elite AUCTIONS terms. <br />
            Identity masked for privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BidHistoryModal;
