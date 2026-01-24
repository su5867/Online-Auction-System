
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveAuctions from './components/LiveAuctions';
import UpcomingAuctions from './components/UpcomingAuctions';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import TrustSignals from './components/TrustSignals';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import UserDashboard from './components/UserDashboard';
import LiveAuctionsPage from './components/LiveAuctionsPage';
import UpcomingAuctionsPage from './components/UpcomingAuctionsPage';
import AuctionDetailPage from './components/AuctionDetailPage';
import SellWithUsPage from './components/SellWithUsPage';
import CreateAuctionPage from './components/CreateAuctionPage';
import NepaliArtPage from './components/NepaliArtPage';
import MobileBottomNav from './components/MobileBottomNav';
import HowItWorksPage from './components/HowItWorksPage';

type View = 'home' | 'login' | 'register' | 'dashboard' | 'live-auctions' | 'upcoming-auctions' | 'auction-detail' | 'sell-with-us' | 'create-auction' | 'nepali-art' | 'search' | 'notifications' | 'how-it-works';

function App() {
  const [view, setView] = useState<View>('home');
  const [lowBandwidth, setLowBandwidth] = useState(false);

  // Persistence of bandwidth preference
  useEffect(() => {
    const saved = localStorage.getItem('elite-low-bandwidth');
    if (saved === 'true') setLowBandwidth(true);
  }, []);

  const toggleBandwidth = () => {
    const newVal = !lowBandwidth;
    setLowBandwidth(newVal);
    localStorage.setItem('elite-low-bandwidth', String(newVal));
  };

  const handleCategoryNavigation = (cat: string) => {
    if (cat === 'Art') {
      setView('nepali-art');
    } else {
      setView('upcoming-auctions'); // Fallback to general gallery for other categories
    }
  };

  const renderView = () => {
    switch (view) {
      case 'login':
        return <LoginPage onBack={() => setView('home')} onRegister={() => setView('register')} />;
      case 'register':
        return <RegistrationPage onBack={() => setView('home')} onLogin={() => setView('login')} />;
      case 'dashboard':
        return <UserDashboard onBack={() => setView('home')} onCreateAuction={() => setView('create-auction')} />;
      case 'live-auctions':
        return <LiveAuctionsPage onBack={() => setView('home')} onLoginClick={() => setView('login')} onItemClick={() => setView('auction-detail')} />;
      case 'upcoming-auctions':
        return <UpcomingAuctionsPage onBack={() => setView('home')} />;
      case 'how-it-works':
        return <HowItWorksPage onBack={() => setView('home')} />;
      case 'auction-detail':
        return <AuctionDetailPage onBack={() => setView('live-auctions')} onLoginClick={() => setView('login')} />;
      case 'sell-with-us':
        return <SellWithUsPage onBack={() => setView('home')} onLoginClick={() => setView('login')} />;
      case 'create-auction':
        return <CreateAuctionPage onBack={() => setView('dashboard')} />;
      case 'nepali-art':
        return <NepaliArtPage onBack={() => setView('home')} onAuctionClick={(id) => setView('auction-detail')} />;
      default:
        return (
          <>
            <Hero 
              onLiveClick={() => setView('live-auctions')} 
              onUpcomingClick={() => setView('upcoming-auctions')}
              onRegisterClick={() => setView('register')}
            />
            <LiveAuctions 
              onSeeAll={() => setView('live-auctions')} 
              onItemClick={() => setView('auction-detail')}
            />
            <Categories 
              onViewAllClick={() => setView('upcoming-auctions')}
              onCategoryClick={handleCategoryNavigation}
            />
            <UpcomingAuctions 
              onExploreClick={() => setView('upcoming-auctions')}
            />
            <HowItWorks />
            <TrustSignals />
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen bg-brand-navy selection:bg-brand-gold selection:text-brand-navy ${lowBandwidth ? 'low-bandwidth' : ''}`}>
      <Navbar 
        onLoginClick={() => setView('login')} 
        onDashboardClick={() => setView('dashboard')}
        onLiveAuctionsClick={() => setView('live-auctions')}
        onUpcomingAuctionsClick={() => setView('upcoming-auctions')}
        onHowItWorksClick={() => setView('how-it-works')}
        onSellClick={() => setView('sell-with-us')}
        onCategoryClick={handleCategoryNavigation}
      />
      
      <main className="pb-16 lg:pb-0">
        {renderView()}
      </main>

      <Footer 
        onNavClick={(viewName) => setView(viewName as any)}
      />
      
      {/* Low Bandwidth Toggle */}
      <button 
        onClick={toggleBandwidth}
        className="fixed bottom-24 right-6 z-40 px-3 py-1.5 bg-brand-navy/80 border border-brand-gold/30 rounded-full text-[9px] font-bold uppercase tracking-widest text-brand-gold backdrop-blur-md lg:bottom-6"
      >
        {lowBandwidth ? 'Standard Mode' : 'Low Bandwidth Mode'}
      </button>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeView={view} onViewChange={setView} />
      
      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="hidden lg:flex fixed bottom-20 right-6 z-40 p-4 luxury-gradient rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}

export default App;
