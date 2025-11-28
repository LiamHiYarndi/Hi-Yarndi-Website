
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageHome } from './components/PageHome';
import { PageShop } from './components/PageShop';
import { PageProduct } from './components/PageProduct';
import { PageRanges } from './components/PageRanges';
import { PageScience } from './components/PageScience';
import { PageAthletes } from './components/PageAthletes';
import { PageAbout } from './components/PageAbout';
import { PageBlog } from './components/PageBlog';
import { PageContact } from './components/PageContact';
import { ChatWidget } from './components/ChatWidget';
import { CartDrawer } from './components/CartDrawer';
// Import new merch pages
import { PageHoodies } from './components/PageHoodies';
import { PageTees } from './components/PageTees';
import { PageHeadwear } from './components/PageHeadwear';
import { PageAccessories } from './components/PageAccessories';
// Import Account & Auth
import { PageAccount } from './components/PageAccount';
import { AuthModal } from './components/AuthModal';
import { PreLaunchModal } from './components/PreLaunchModal';
// Import Admin & Wholesale
import { PageAdmin } from './components/PageAdmin';
import { PageWholesale } from './components/PageWholesale';
import { PageLegal } from './components/PageLegal';

import { PageView, Product, CartItem, Currency, SiteMode, User, Reward, Challenge } from './types';
import { formatPrice } from './data';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [siteMode, setSiteMode] = useState<SiteMode>('performance');
  
  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode Class on Body
  useEffect(() => {
    if (isDarkMode) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
  }

  // State for Cart & Currency
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>('AUD');

  // Auth State & "Mock Database"
  const [user, setUser] = useState<User | null>(null); // The currently logged-in user (or admin)
  const [impersonatingUser, setImpersonatingUser] = useState<User | null>(null); // If Admin is "viewing as" someone
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  
  // Database of users (kept in state for this frontend demo)
  const [allUsers, setAllUsers] = useState<User[]>([]);

  // Pre-Launch State
  const [isPreLaunchOpen, setIsPreLaunchOpen] = useState(false);

  // Announcement Bar Rotation
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setAnnouncementIndex(prev => (prev + 1) % 2);
    }, 4000); // Rotate every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Calculate Total AUD for Announcement Bar
  const cartTotalAUD = cartItems.reduce((acc, item) => acc + item.price, 0);
  
  // Dynamic Shipping Threshold based on user role
  const activeUser = impersonatingUser || user;
  const isWholesale = activeUser?.role === 'wholesale' && activeUser?.status === 'approved';
  const freeShippingThreshold = isWholesale ? 1000 : 100; // $1000 for wholesale, $100 for retail
  
  const remainingForFreeShip = Math.max(freeShippingThreshold - cartTotalAUD, 0);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedProduct, siteMode]);

  const navigate = (view: PageView) => {
    setCurrentView(view);
    if (view !== 'product') setSelectedProduct(null);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const handleAddToCart = (product: Product, quantity: number, bundleSize: number, flavor: string, price: number) => {
    // Check for wholesale override in cart item creation
    const isWholesaleOrder = activeUser?.role === 'wholesale' && activeUser?.status === 'approved';
    
    // Add item to cart
    const newItem: CartItem = {
        id: `${product.id}-${flavor}-${bundleSize}-${Date.now()}`,
        productId: product.id,
        title: product.title,
        image: product.image,
        flavor: flavor,
        quantity: quantity,
        bundleSize: bundleSize,
        price: price, // Total price for line item
        isWholesale: isWholesaleOrder
    };

    setCartItems(prev => [...prev, newItem]);
    setIsCartOpen(true); // Open drawer
  };

  const handlePreLaunchRegistration = () => {
      setIsCartOpen(false);
      setIsPreLaunchOpen(true);
  };

  const handleRemoveItem = (id: string) => {
      setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // --- ACCOUNT ACTIONS ---
  const handleLogin = (newUser: User) => {
      setUser(newUser);
      // Add to our "database" if not exists
      setAllUsers(prev => {
          if (prev.find(u => u.id === newUser.id)) return prev;
          return [...prev, newUser];
      });
      
      // Redirect based on role
      if (newUser.role === 'admin') {
          navigate('admin');
      } else if (newUser.role === 'wholesale') {
          navigate('wholesale');
      } else {
          navigate('account');
      }
  };

  const handleLogout = () => {
      setUser(null);
      setImpersonatingUser(null);
      navigate('home');
  };
  
  const handleStopImpersonating = () => {
      setImpersonatingUser(null);
      navigate('admin');
  };

  const handleRedeemReward = (reward: Reward) => {
      if (!activeUser) return;
      if (activeUser.points >= reward.cost) {
          const updatedUser = {
              ...activeUser,
              points: activeUser.points - reward.cost,
              redeemedRewards: [...activeUser.redeemedRewards, reward.id]
          };
          // Update both state tracks
          if (impersonatingUser) setImpersonatingUser(updatedUser);
          else setUser(updatedUser);
          
          // Update DB
          setAllUsers(prev => prev.map(u => u.id === activeUser.id ? updatedUser : u));
      }
  };

  const handleCompleteChallenge = (challenge: Challenge) => {
      if (!activeUser) return;
      if (!activeUser.completedChallenges.includes(challenge.id)) {
          const updatedUser = {
              ...activeUser,
              points: activeUser.points + challenge.points,
              completedChallenges: [...activeUser.completedChallenges, challenge.id]
          };
           // Update both state tracks
          if (impersonatingUser) setImpersonatingUser(updatedUser);
          else setUser(updatedUser);
          
          // Update DB
          setAllUsers(prev => prev.map(u => u.id === activeUser.id ? updatedUser : u));
      }
  };

  // Admin Actions
  const handleUpdateUserStatus = (userId: string, status: 'approved' | 'rejected') => {
      setAllUsers(prev => prev.map(u => u.id === userId ? { ...u, status } : u));
  };

  const handleImpersonate = (targetUser: User) => {
      setImpersonatingUser(targetUser);
      if (targetUser.role === 'wholesale') navigate('wholesale');
      else navigate('account');
  };

  // Announcement Messages Logic
  let shippingMessage = "";
  if (isWholesale) {
      shippingMessage = remainingForFreeShip === 0 
        ? "Wholesale Freight Covered! 🚚" 
        : `Free Wholesale Freight over $1000 - You are ${formatPrice(remainingForFreeShip, currency)} away!`;
  } else {
      shippingMessage = remainingForFreeShip === 0 
      ? "Free Shipping Unlocked! 🚚" 
      : cartTotalAUD > 0 
          ? `Free AU Shipping over $100 - You are ${formatPrice(remainingForFreeShip, currency)} away!`
          : `$4.95 Shipping Australia Wide • Free Over $100`;
  }

  const announcements = [
      shippingMessage,
      "Proudly Aussie Owned & Operated 🇦🇺"
  ];

  // Determine which user object to pass to components (Real or Impersonated)
  const displayUser = impersonatingUser || user;

  return (
    <div className="font-sans antialiased text-off-black selection:bg-accent selection:text-off-black">
      {/* Impersonation Banner */}
      {impersonatingUser && (
          <div className="bg-red-600 text-white text-center py-2 text-xs font-bold uppercase tracking-widest sticky top-0 z-[100] flex justify-center items-center gap-4">
              <span>Viewing Site as: {impersonatingUser.name} ({impersonatingUser.role})</span>
              <button onClick={handleStopImpersonating} className="bg-white text-red-600 px-3 py-1 rounded-full text-[10px] hover:bg-gray-100">
                  Stop Impersonating
              </button>
          </div>
      )}

      {/* Dynamic Announcement Bar */}
      <div className={`relative z-50 text-center py-2.5 text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-500 ${
          remainingForFreeShip === 0 && announcementIndex === 0 
            ? 'bg-yarndi-green text-white' 
            : 'bg-theme-text text-theme-bg'
      }`}>
         <div className="container mx-auto px-4 animate-fade-in">
             <span key={announcementIndex} className="animate-fade-in">
                 {announcements[announcementIndex]}
             </span>
         </div>
      </div>

      <Header 
        cartCount={cartItems.length} 
        currentPage={currentView}
        onNavigate={navigate}
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        onCurrencyChange={setCurrency}
        siteMode={siteMode}
        onSiteModeChange={setSiteMode}
        user={displayUser}
        onLoginClick={() => setIsAuthOpen(true)}
        onProductSelect={handleProductClick}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main className="flex-grow">
        {currentView === 'home' && (
            <PageHome 
                onNavigate={navigate} 
                currency={currency} 
                siteMode={siteMode}
            />
        )}
        
        {currentView === 'shop' && (
            <PageShop 
                onProductClick={handleProductClick} 
                currency={currency}
                siteMode={siteMode}
            />
        )}

        {/* Account Page */}
        {currentView === 'account' && displayUser && (
            <PageAccount 
                user={displayUser} 
                onLogout={handleLogout} 
                onRedeem={handleRedeemReward}
                onCompleteChallenge={handleCompleteChallenge}
            />
        )}
        
        {/* Admin Dashboard */}
        {currentView === 'admin' && user?.role === 'admin' && !impersonatingUser && (
            <PageAdmin 
                allUsers={allUsers}
                onUpdateUserStatus={handleUpdateUserStatus}
                onImpersonate={handleImpersonate}
            />
        )}

        {/* Wholesale Portal */}
        {currentView === 'wholesale' && displayUser && displayUser.role === 'wholesale' && (
            <PageWholesale 
                user={displayUser}
                currency={currency}
                onAddToCart={handleAddToCart}
            />
        )}

        {/* Login Prompt for Account/Wholesale if logged out */}
        {(currentView === 'account' || currentView === 'wholesale' || currentView === 'admin') && !displayUser && (
            <div className="h-screen flex items-center justify-center bg-theme-bg">
                 <div className="text-center">
                    <p className="text-theme-sub mb-4">Please sign in to access this area.</p>
                    <button onClick={() => setIsAuthOpen(true)} className="text-xl font-bold underline text-theme-text hover:text-accent">Sign In</button>
                 </div>
            </div>
        )}

        {/* New Merch Routes */}
        {currentView === 'hoodies' && <PageHoodies onProductClick={handleProductClick} currency={currency} />}
        {currentView === 'tees' && <PageTees onProductClick={handleProductClick} currency={currency} />}
        {currentView === 'headwear' && <PageHeadwear onProductClick={handleProductClick} currency={currency} />}
        {currentView === 'accessories' && <PageAccessories onProductClick={handleProductClick} currency={currency} />}
        
        {currentView === 'product' && selectedProduct && (
            <PageProduct 
                product={selectedProduct} 
                onBack={() => navigate('shop')} 
                onAddToCart={handleAddToCart}
                onProductSelect={handleProductClick}
                onNavigate={navigate}
                currency={currency}
            />
        )}

        {currentView === 'ranges' && <PageRanges onNavigate={navigate} />}
        
        {currentView === 'science' && <PageScience siteMode={siteMode} />}
        
        {currentView === 'athletes' && <PageAthletes />}
        
        {currentView === 'about' && <PageAbout />}
        
        {currentView === 'contact' && <PageContact />}
        
        {currentView === 'blog' && <PageBlog />}

        {currentView === 'legal' && <PageLegal />}
      </main>

      <Footer onNavigate={navigate} />
      
      <ChatWidget productContext={currentView === 'product' ? selectedProduct : null} />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onRemoveItem={handleRemoveItem}
        currency={currency}
        onAddToCart={handleAddToCart}
        onCheckout={handlePreLaunchRegistration}
        user={displayUser}
      />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={handleLogin}
      />

      <PreLaunchModal 
        isOpen={isPreLaunchOpen}
        onClose={() => setIsPreLaunchOpen(false)}
        cartTotal={cartTotalAUD}
      />
    </div>
  );
};

export default App;
