
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  User, 
  Bell, 
  ChevronDown, 
  Menu, 
  X, 
  Gavel,
  Settings,
  LayoutDashboard,
  Heart
} from 'lucide-react';

interface NavbarProps {
  onLoginClick?: () => void;
  onDashboardClick?: () => void;
  onLiveAuctionsClick?: () => void;
  onUpcomingAuctionsClick?: () => void;
  onHowItWorksClick?: () => void;
  onSellClick?: () => void;
  onCategoryClick?: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onLoginClick, 
  onDashboardClick, 
  onLiveAuctionsClick, 
  onUpcomingAuctionsClick, 
  onHowItWorksClick,
  onSellClick, 
  onCategoryClick 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    'Art', 'Jewelry', 'Watches', 'Cars', 'Real Estate', 'Collectibles'
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-brand-navy/95 backdrop-blur-md py-3 shadow-2xl border-b border-brand-gold/20' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center rounded-sm luxury-gradient shadow-lg group-hover:scale-110 transition-transform">
            <Gavel className="text-brand-navy w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-widest luxury-text-gradient uppercase">Elite</span>
            <span className="text-[10px] tracking-[0.3em] font-light text-brand-gold uppercase -mt-1">Auctions</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-sm font-medium hover:text-brand-gold transition-colors">Home</button>
          
          <button 
            onClick={onLiveAuctionsClick} 
            className="text-sm font-medium hover:text-brand-gold transition-colors flex items-center gap-1.5 group relative"
          >
            Live Auctions
            <span className="bg-red-600 text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold animate-pulse">LIVE</span>
          </button>

          <button 
            onClick={onUpcomingAuctionsClick} 
            className="text-sm font-medium hover:text-brand-gold transition-colors"
          >
            Upcoming Auctions
          </button>
          
          <button 
            onClick={onHowItWorksClick} 
            className="text-sm font-medium hover:text-brand-gold transition-colors"
          >
            How It Works
          </button>

          {/* Categories Dropdown */}
          <div className="relative">
            <button 
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
              className="text-sm font-medium flex items-center gap-1 hover:text-brand-gold transition-colors"
            >
              Categories <ChevronDown className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isCategoriesOpen && (
              <div 
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
                className="absolute top-full left-0 mt-2 w-48 bg-brand-navy border border-brand-gold/20 shadow-2xl rounded-sm py-2 animate-in fade-in slide-in-from-top-2"
              >
                {categories.map((cat) => (
                  <button 
                    key={cat} 
                    onClick={() => {
                      setIsCategoriesOpen(false);
                      onCategoryClick?.(cat);
                    }}
                    className="w-full text-left block px-4 py-2 text-sm hover:bg-brand-gold hover:text-brand-navy transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={onSellClick}
            className="bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy px-5 py-2 rounded-sm text-sm font-bold tracking-wide transition-all uppercase"
          >
            Sell With Us
          </button>
        </div>

        {/* Right Section Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center relative group">
            <Search className="w-5 h-5 text-brand-slate group-hover:text-brand-gold transition-colors cursor-pointer" />
          </div>
          
          <div className="relative cursor-pointer">
            <Bell className="w-5 h-5 text-brand-slate hover:text-brand-gold transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-gold rounded-full"></span>
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2 border border-brand-gold/30 rounded-full pl-1 pr-3 py-1 hover:border-brand-gold transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                <User className="w-4 h-4 text-brand-gold" />
              </div>
              <ChevronDown className={`w-3 h-3 text-brand-gold transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isUserMenuOpen && (
              <div className="absolute top-full right-0 mt-3 w-56 bg-brand-navy border border-brand-gold/20 shadow-2xl rounded-sm p-4 animate-in fade-in slide-in-from-top-2">
                <div className="pb-3 border-b border-white/10 mb-3">
                  <p className="text-xs text-brand-slate uppercase tracking-wider mb-1">Elite Collector</p>
                  <p className="text-sm font-bold text-white">Sudip Thapa</p>
                </div>
                <div className="space-y-2">
                  <button onClick={() => { setIsUserMenuOpen(false); onDashboardClick?.(); }} className="flex w-full items-center gap-3 text-sm text-brand-slate hover:text-brand-gold transition-colors py-1.5 text-left">
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </button>
                  <button className="flex w-full items-center gap-3 text-sm text-brand-slate hover:text-brand-gold transition-colors py-1.5 text-left">
                    <Gavel className="w-4 h-4" /> My Bids
                  </button>
                  <button className="flex w-full items-center gap-3 text-sm text-brand-slate hover:text-brand-gold transition-colors py-1.5 text-left">
                    <Heart className="w-4 h-4" /> Watchlist
                  </button>
                  <button className="flex w-full items-center gap-3 text-sm text-brand-slate hover:text-brand-gold transition-colors py-1.5 text-left">
                    <Settings className="w-4 h-4" /> Settings
                  </button>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <button 
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      onLoginClick?.();
                    }}
                    className="w-full luxury-gradient text-brand-navy font-bold py-2 rounded-sm text-xs uppercase tracking-widest hover:brightness-110 transition-all"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

          <button 
            className="lg:hidden text-brand-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-brand-navy z-40 p-6 flex flex-col gap-6 animate-in slide-in-from-right">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white border-b border-white/5 pb-2 text-left">Home</button>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onLiveAuctionsClick?.();
            }} 
            className="text-xl font-medium text-white border-b border-white/5 pb-2 text-left flex items-center justify-between"
          >
            Live Auctions
            <span className="bg-red-600 text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold animate-pulse">LIVE</span>
          </button>

          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onUpcomingAuctionsClick?.();
            }} 
            className="text-xl font-medium text-white border-b border-white/5 pb-2 text-left"
          >
            Upcoming Auctions
          </button>
          
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onHowItWorksClick?.();
            }} 
            className="text-xl font-medium text-white border-b border-white/5 pb-2 text-left"
          >
            How It Works
          </button>
          
          <div className="flex flex-col gap-4">
            <p className="text-brand-gold text-sm font-bold uppercase tracking-widest">Categories</p>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <button key={cat} onClick={() => onCategoryClick?.(cat)} className="text-left text-brand-slate hover:text-brand-gold text-sm">
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onDashboardClick?.();
            }}
            className="w-full bg-white/5 border border-brand-gold text-brand-gold font-bold py-4 rounded-sm text-sm uppercase tracking-widest"
          >
            Dashboard
          </button>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onSellClick?.();
            }}
            className="w-full bg-transparent border border-brand-gold text-brand-gold font-bold py-4 rounded-sm text-sm uppercase tracking-widest"
          >
            Sell With Us
          </button>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onLoginClick?.();
            }}
            className="w-full luxury-gradient text-brand-navy font-bold py-4 rounded-sm text-sm uppercase tracking-widest mt-auto"
          >
            Sign In / Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
