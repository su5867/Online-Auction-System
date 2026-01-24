
import React from 'react';
import { Home, Search, Gavel, Bell, User } from 'lucide-react';

interface MobileBottomNavProps {
  activeView: string;
  onViewChange: (view: any) => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeView, onViewChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'live-auctions', icon: Gavel, label: 'Live', badge: 'LIVE' },
    { id: 'notifications', icon: Bell, label: 'Alerts' },
    { id: 'dashboard', icon: User, label: 'Profile' },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] bg-brand-navy/95 backdrop-blur-xl border-t border-brand-gold/20 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className="relative flex flex-col items-center justify-center w-full py-1 transition-all"
            >
              <div className={`p-1.5 rounded-full transition-all ${isActive ? 'bg-brand-gold/10 scale-110' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'text-brand-gold' : 'text-brand-slate'}`} />
              </div>
              <span className={`text-[9px] mt-1 font-bold uppercase tracking-widest ${isActive ? 'text-brand-gold' : 'text-brand-slate'}`}>
                {item.label}
              </span>
              {item.badge && (
                <span className="absolute top-1 right-1/2 translate-x-4 bg-red-600 text-[7px] text-white px-1 rounded-full font-bold animate-pulse">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
