

export type PageView = 'home' | 'shop' | 'product' | 'ranges' | 'about' | 'science' | 'athletes' | 'blog' | 'contact' | 'cart' | 'comparison' | 'hoodies' | 'tees' | 'headwear' | 'accessories' | 'account' | 'admin' | 'wholesale' | 'legal';

export type RangeType = 'Recovery+' | 'Energize^' | 'Drip°' | 'Fuel*' | 'Merch' | 'Bundles';

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
    isWholesale?: boolean;
}

export interface NutritionItem {
  nutrient: string;
  perServe: string;
  per100: string;
}

export interface BundleOption {
  quantity: number;
  label: string;
  discount?: number; // percentage
  fixedPrice?: number; // Override calculated price
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

export interface Variant {
    name: string;
    image: string;
}

export interface BundleComponent {
    name: string; // e.g. "Select Hoodie Size" or "Recovery+ Flavor"
    options: string[]; // e.g. ["S", "M", "L"] or ["Watermelon", "Berry"]
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
  comingSoon?: boolean; // New flag for pre-launch
  
  // Wholesale Specifics
  wholesalePrice?: number;
  wholesaleMoq?: number; // Minimum units (e.g. case size)
  caseLabel?: string; // e.g. "Case of 12"

  // New Variant System
  variants?: Variant[];
  
  // Multi-select for Bundles
  bundleComponents?: BundleComponent[];

  // Legacy fields (kept for compatibility if needed, but variants preferred)
  flavourImages?: Record<string, string>;
  flavours?: string[]; 
  
  tag?: string;
  tagColor?: string;
  format?: string; 
  
  // Merch Categorization
  merchCategory?: 'Lifestyle' | 'Performance' | 'Gear';

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
  author?: string;
  content?: string;
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
    role: 'retail' | 'wholesale' | 'admin'; // Added admin
    status?: 'pending' | 'approved' | 'rejected'; // For wholesale
    
    // Business Details
    companyName?: string;
    abn?: string;
    website?: string;

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