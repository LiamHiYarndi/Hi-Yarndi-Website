
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
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
  }

  // State for Cart & Currency
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>('AUD');

  // Auth State
  const [user, setUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Calculate Total AUD for Announcement Bar
  const cartTotalAUD = cartItems.reduce((acc, item) => acc + item.price, 0);
  const freeShippingThreshold = 100;
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
    // Add item to cart
    const newItem: CartItem = {
        id: `${product.id}-${flavor}-${bundleSize}-${Date.now()}`,
        productId: product.id,
        title: product.title,
        image: product.image,
        flavor: flavor,
        quantity: quantity,
        bundleSize: bundleSize,
        price: price // This price is the total for this line item (unit price * qty)
    };

    setCartItems(prev => [...prev, newItem]);
    setIsCartOpen(true); // Open drawer
  };

  const handleCheckoutSimulation = () => {
      if (user) {
          const pointsEarned = Math.floor(cartTotalAUD);
          setUser({
              ...user,
              points: user.points + pointsEarned
          });
          setCartItems([]);
          setIsCartOpen(false);
          alert(`Order placed! You earned ${pointsEarned} points.`);
      } else {
          setIsCartOpen(false);
          setIsAuthOpen(true); // Prompt login
      }
  };

  const handleRemoveItem = (id: string) => {
      setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // --- ACCOUNT ACTIONS ---
  const handleLogin = (newUser: User) => {
      setUser(newUser);
      navigate('account');
  };

  const handleLogout = () => {
      setUser(null);
      navigate('home');
  };

  const handleRedeemReward = (reward: Reward) => {
      if (!user) return;
      if (user.points >= reward.cost) {
          setUser({
              ...user,
              points: user.points - reward.cost,
              redeemedRewards: [...user.redeemedRewards, reward.id]
          });
      }
  };

  const handleCompleteChallenge = (challenge: Challenge) => {
      if (!user) return;
      if (!user.completedChallenges.includes(challenge.id)) {
          setUser({
              ...user,
              points: user.points + challenge.points,
              completedChallenges: [...user.completedChallenges, challenge.id]
          });
      }
  };

  // Announcement Messages
  const shippingMessage = remainingForFreeShip === 0 
      ? "You've unlocked Free AU Metro Shipping! 🚚" 
      : cartTotalAUD > 0 
          ? `Free AU Metro Shipping over ${formatPrice(100, currency)} - You are ${formatPrice(remainingForFreeShip, currency)} away!`
          : `Free AU Metro Shipping on orders over ${formatPrice(100, currency)} (Excl. Rural/Intl)`;

  return (
    <div className="font-sans antialiased text-off-black selection:bg-accent selection:text-off-black">
      {/* Dynamic Announcement Bar - Colors adapted for Light/Dark Mode visibility */}
      <div className={`text-center py-2.5 text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-500 ${remainingForFreeShip === 0 ? 'bg-yarndi-green text-black' : 'bg-off-black text-theme-bg'}`}>
         <div className="container mx-auto px-4">
             <span>{shippingMessage}</span>
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
        user={user}
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
        {currentView === 'account' && user && (
            <PageAccount 
                user={user} 
                onLogout={handleLogout} 
                onRedeem={handleRedeemReward}
                onCompleteChallenge={handleCompleteChallenge}
            />
        )}
        {currentView === 'account' && !user && (
            <div className="h-screen flex items-center justify-center">
                 <button onClick={() => setIsAuthOpen(true)} className="text-xl font-bold underline">Please Sign In</button>
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
                currency={currency}
            />
        )}

        {/* These pages are mostly "Performance" context, but we keep them accessible */}
        {currentView === 'ranges' && <PageRanges onNavigate={navigate} />}
        
        {currentView === 'science' && <PageScience />}
        
        {currentView === 'athletes' && <PageAthletes />}
        
        {currentView === 'about' && <PageAbout />}
        
        {currentView === 'contact' && <PageContact />}
        
        {currentView === 'blog' && <PageBlog />}
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
        onCheckout={handleCheckoutSimulation}
        user={user}
      />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={handleLogin}
      />
    </div>
  );
};

export default App;
