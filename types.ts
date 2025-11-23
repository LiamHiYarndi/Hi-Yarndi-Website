

export type PageView = 'home' | 'shop' | 'product' | 'ranges' | 'about' | 'science' | 'athletes' | 'blog' | 'contact' | 'cart' | 'comparison' | 'hoodies' | 'tees' | 'headwear' | 'accessories' | 'account';

export type RangeType = 'Recovery+' | 'Energize^' | 'Drip°' | 'Fuel*' | 'Merch';

export type SiteMode = 'performance' | 'merch';

export type Currency = 'AUD' | 'USD' | 'GBP' | 'NZD';

export interface CartItem {
    id: string; // unique id (product id + flavor + bundle)
    productId: string;
    title: string;
    image: string;
    flavor: string;
    quantity: number; // number of units (e.g. 1 bundle)
    bundleSize: number; // items per bundle
    price: number; // price per unit in base currency (AUD)
}

export interface NutritionItem {
  nutrient: string;
  perServe: string;
  per100: string;
}

export interface BundleOption {
  quantity: number;
  label: string;
  discount: number; // percentage
  saveText?: string;
}

export interface BenefitDetail {
  title: string;
  description: string;
  icon: 'leaf' | 'zap' | 'shield' | 'droplet' | 'brain' | 'muscle' | 'moon' | 'clock' | 'heart' | 'flask' | 'microscope' | 'shirt' | 'scissors' | 'sun'; 
}

export interface ScienceDetail {
    title: string; // e.g., "Natural Caffeine"
    description: string; // e.g., "Green Tea + Guarana for sustained release..."
    icon?: string;
}

export interface Product {
  id: string;
  range: RangeType;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  price: number;
  compareAtPrice?: number; 
  pricePerUnit?: string; 
  image: string;
  images?: string[];
  flavourImages?: Record<string, string>;
  tag?: string;
  tagColor?: string;
  format?: string; 
  flavours?: string[]; // Used for Sizes in Merch
  
  // Details
  ingredientsList?: string; // Used for Materials in Merch
  keyIngredients?: string[];
  benefits?: string[]; 
  benefitDetails?: BenefitDetail[];
  
  // Science & Function
  scienceBacked?: ScienceDetail[];

  // New Usage Field
  usage?: {
      when: string;
      how: string;
      proTip?: string;
  };

  specs?: { label: string; value: string }[];
  nutrition?: NutritionItem[];
  bundles?: BundleOption[];
  
  // Filtering
  goals?: string[]; // e.g., 'Energy', 'Recovery', 'Hydration'
  flavorProfile?: 'Fruity' | 'Citrus' | 'Tropical' | 'Rich' | 'Sweet';
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  date: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  schedule: { time: string; product: string; note: string }[];
}

export interface Review {
  id: string;
  productId?: string; // Optional for global reviews, required for product-specific
  user: string;
  avatar: string;
  comment: string;
  rating: number;
  sport?: string;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// New Comparison Data Type
export interface ComparisonPoint {
    feature: string;
    us: string;
    them: string;
    icon: string;
}

export interface ProductComparison {
    id: string;
    title: string;
    competitorLabel: string; // e.g. "Standard Sports Drink"
    points: ComparisonPoint[];
}

// --- LOYALTY & ACCOUNT TYPES ---

export interface User {
    id: string;
    name: string;
    email: string;
    points: number;
    tier: 'Rookie' | 'Pro' | 'Elite';
    joinedDate: string;
    completedChallenges: string[]; // IDs of completed challenges
    redeemedRewards: string[]; // IDs of rewards claimed
}

export interface Reward {
    id: string;
    title: string;
    cost: number;
    description: string;
    type: 'discount' | 'product' | 'shipping';
    code?: string; // The discount code revealed upon redemption
}

export interface Challenge {
    id: string;
    title: string;
    description: string;
    points: number;
    icon: 'instagram' | 'run' | 'referral' | 'review';
    actionLabel: string;
}
