import { Product, BlogPost, UseCase, Review, ProductComparison, Currency, Reward, Challenge, User } from './types';

// --- CURRENCY HELPERS ---
export const currencyRates: Record<Currency, number> = {
    AUD: 1,
    USD: 0.66,
    GBP: 0.52,
    NZD: 1.10
};

export const currencySymbols: Record<Currency, string> = {
    AUD: '$',
    USD: '$',
    GBP: '£',
    NZD: '$'
};

export const formatPrice = (priceInAud: number, currency: Currency): string => {
    const rate = currencyRates[currency];
    const converted = priceInAud * rate;
    return `${currencySymbols[currency]}${converted.toFixed(2)}`;
};

// --- IMAGE HELPERS ---
// CORRECTED: Uses lowercase 'products' to match your GitHub folder exactly.
const localProduct = (filename: string) => `/images/products/${filename}`;
const localLogo = (filename: string) => `/images/logos/${filename}`;
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800`;

// --- LOGO EXPORT ---
// Use this in your Navbar or Footer components
export const BRAND_LOGO = localLogo('Logooutlinered.png');

// --- FLAVOR CONSTANTS ---
const RECOVERY_FLAVORS = ['Watermelon Smash', 'Blue Raspberry', 'Strawberry Kiwi', 'Lush Lemonade'];
const ENERGIZE_FLAVORS = ['Sour Watermelon', 'Mango Charge', 'Pine Volt', 'Lychee Burst'];
const DRIP_FLAVORS = ['Lychee Burst', 'Kakadu C Fizz', 'Passionfruit Pulp', 'Guava Sunrise'];
const FUEL_FLAVORS = ['Peanut Butter Crunch', 'Choc Chip Cookie Dough', 'Salted Caramel', 'Double Choc Mint'];

// --- MERCH OPTIONS ---
const HOODIE_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
const HOODIE_COLORS = ['Black', 'White']; 
const HAT_VARIANTS = ['Pink Camo', 'Green Camo', 'White Camo', 'Black Punk'];

// --- ADMIN CREDENTIALS ---
export const ADMIN_CREDENTIALS = {
    email: 'admin@admin.com',
    password: 'YarndiAdmin01'
};

export const products: Product[] = [
  // --- RECOVERY+ ---
  {
    id: 'recovery-plus-watermelon',
    range: 'Recovery+',
    title: 'Recovery+',
    subtitle: 'Post-Session Reset',
    description: 'Powered by Hemp. Magnesium + Electrolytes. The ultimate cool down.',
    longDescription: "**Stop the soreness before it starts.** Recovery+ isn't just hydration; it's a **biological reset button** for your post-game physiology.\n\nWe’ve fused **cold-pressed Australian Hemp Seed Oil** (nature’s most potent anti-inflammatory) with highly bioavailable **Magnesium Citrate** to flush out lactate and calm your nervous system immediately.\n\n**Pricing:**\n- 10 Pack: $25.00",
    price: 25.00,
    wholesalePrice: 12.50,
    wholesaleMoq: 10,
    caseLabel: 'Carton of 10 Boxes (100 sachets)',
    compareAtPrice: 35.00,
    format: '10 Pack',
    comingSoon: true,
    // UPDATED: Set to 'Recovery-Blue-Raspberry.png' as seen in your upload
    image: localProduct(`Recovery-Blue-Raspberry.png`), 
    variants: [ 
        { name: 'Blue Raspberry', image: localProduct(`Recovery-Blue-Raspberry.png`) }, // Confirmed file
        { name: 'Strawberry Kiwi', image: localProduct(`Recovery-Strawberry-Kiwi.png`) }, // Confirmed file
        { name: 'Watermelon Smash', image: localProduct(`Recovery-Watermelon-Smash.png`) },
        { name: 'Lush Lemonade', image: localProduct(`Recovery-Lush-Lemonade.png`) }
    ],
    images: [
        localProduct(`Recovery-Blue-Raspberry.png`),
        localProduct(`Recovery-Strawberry-Kiwi.png`)
    ],
    tag: 'Best Seller',
    goals: ['Recovery', 'Hydration'],
    flavorProfile: 'Fruity',
    usage: {
        when: 'Immediately after training.',
        how: 'Mix 1 sachet with 400ml cold water.',
        proTip: 'Add ice for a slushie texture.'
    },
    bundles: [
      { quantity: 1, label: '10 Pack', discount: 0 },
      { quantity: 2, label: '20 Pack', discount: 10, saveText: 'Save 10%' },
    ],
    benefitDetails: [
        { title: "Muscle Repair", description: "Hemp amino acids support rapid fiber repair.", icon: "muscle" },
        { title: "Inflammation", description: "Omegas 3 & 6 help cool down systemic inflammation.", icon: "shield" },
        { title: "Rehydration", description: "Clinical electrolyte profile matches sweat loss.", icon: "droplet" }
    ],
    ingredientsList: 'Amino acid mixture (sourced from hemp seed), bulk sweetener (xylitol), sweetener (sucralose), flaxseed powder, acai berry powder, flavouring (natural essence), docosahexaenoic acid (DHA), green tea extract, magnesium chloride, Celtic sea salt, potassium chloride, vitamin C, sodium citrate, magnesium citrate, potassium citrate, nicotinic acid, vitamin B6, vitamin B12.',
    nutrition: [
        { nutrient: "Energy", perServe: "580kJ", per100: "1450kJ" },
        { nutrient: "Protein", perServe: "12.5g", per100: "31.2g" },
        { nutrient: "Carbohydrate", perServe: "37.5g", per100: "93.7g" },
        { nutrient: "- Sugars", perServe: "2.1g", per100: "5.2g" },
        { nutrient: "Fat, Total", perServe: "1.2g", per100: "3.0g" },
        { nutrient: "Magnesium", perServe: "300mg", per100: "750mg" },
        { nutrient: "Sodium", perServe: "320mg", per100: "800mg" },
    ]
  },
  
  // --- ENERGIZE^ ---
  {
    id: 'energize-cair',
    range: 'Energize^',
    title: 'Energize^',
    subtitle: 'Tri-Action Energy Jelly',
    description: 'Powered By Hemp. The only pre-workout that ignites, sustains, and repairs.',
    longDescription: "**Ignite. Sustain. Repair.**\n\nStandard pre-workouts are a debt you pay back later. Energize^ is built on our proprietary **Tri-Action Energy System**.\n\n**Pricing:**\n- Single Pouch: $4.95\n- 3 Pack: $14.95",
    price: 4.95,
    wholesalePrice: 2.50,
    wholesaleMoq: 20,
    caseLabel: 'Box of 20 Pouches',
    format: '90g Pouch',
    comingSoon: true,
    // UPDATED: Set to 'Energize-Sour-Watermelon.png' as seen in your upload
    image: localProduct(`Energize-Sour-Watermelon.png`),
    variants: [
        { name: 'Sour Watermelon', image: localProduct(`Energize-Sour-Watermelon.png`) }, // Confirmed file
        { name: 'Mango Charge', image: localProduct(`Energize-Mango-Charge.png`) }, // Confirmed file
        { name: 'Lychee Burst', image: localProduct(`Energize-Lychee-Burst.png`) }, 
        { name: 'Pine Volt', image: localProduct(`Energize-Pine-Volt.png`) }
    ],
    images: [
        localProduct(`Energize-Sour-Watermelon.png`)
    ],
    tag: 'New Tech',
    goals: ['Energy', 'Focus'],
    flavorProfile: 'Tropical',
    usage: {
        when: '20-30 minutes before your session.',
        how: 'Squeeze pouch directly. No water needed.',
    },
    bundles: [
      { quantity: 1, label: 'Single Pouch', discount: 0 },
      { quantity: 3, label: '3 Pack', fixedPrice: 14.95, saveText: 'Value' },
    ],
    benefitDetails: [
        { title: "Tri-Action System", description: "Ignite, Sustain, Repair.", icon: "zap" },
        { title: "Laser Focus", description: "L-Theanine prevents the jitters.", icon: "brain" },
        { title: "Stomach Friendly", description: "Konjac jelly base digests easily.", icon: "shield" }
    ],
    ingredientsList: 'Water, Konjac (Glucomannan) Jelly Base, Fruit Juice Concentrate, Cane Sugar, Hemp Protein Peptides (3%), Caffeine (from Green Tea and Guarana), Taurine, Citrulline Malate, L-Theanine, Rhodiola Extract, Black Pepper Extract, Electrolytes, Citric Acid, Sodium Citrate, Natural Flavours, Potassium Sorbate.',
    nutrition: [
        { nutrient: "Energy", perServe: "280kJ", per100: "311kJ" },
        { nutrient: "Caffeine", perServe: "200mg", per100: "222mg" },
        { nutrient: "L-Tyrosine", perServe: "500mg", per100: "555mg" },
        { nutrient: "Citrulline Malate", perServe: "2000mg", per100: "2222mg" },
        { nutrient: "Carbohydrate", perServe: "16g", per100: "17.7g" },
        { nutrient: "- Sugars", perServe: "8g", per100: "8.8g" },
    ]
  },

  // --- DRIP° ---
  {
    id: 'drip-daily',
    range: 'Drip°',
    title: 'Drip°',
    subtitle: 'Hemp Probiotic Soda',
    description: 'Powered by Hemp. Low sugar, high performance daily hydration.',
    longDescription: "**Hydration that actually absorbs.**\n\nInfused with **native Kakadu Plum** and **Bacillus Coagulans probiotics**.\n\n**Pricing:**\n- Single Can: $4.50\n- 4 Pack: $14.95",
    price: 4.50,
    wholesalePrice: 2.20,
    wholesaleMoq: 24,
    caseLabel: 'Slab of 24 Cans',
    format: '355ml Can',
    comingSoon: true,
    // UPDATED: Set to 'Drip-Lychee-Burst.png' as seen in your upload
    image: localProduct(`Drip-Lychee-Burst.png`),
    variants: [
        { name: 'Lychee Burst', image: localProduct(`Drip-Lychee-Burst.png`) }, // Confirmed file
        { name: 'Passionfruit Pulp', image: localProduct(`Drip-Passionfruit-Pulp.png`) }, // Confirmed file
        { name: 'Guava Sunrise', image: localProduct(`Drip-Guava-Sunrise.png`) },
        { name: 'Kakadu C Fizz', image: localProduct(`Drip-Kakadu-C-Fizz.png`) }
    ],
    images: [
        localProduct(`Drip-Lychee-Burst.png`)
    ],
    goals: ['Hydration'],
    flavorProfile: 'Citrus',
    usage: {
        when: 'Anytime.',
        how: 'Serve ice cold.',
    },
    bundles: [
      { quantity: 1, label: 'Single Can', discount: 0 },
      { quantity: 4, label: '4 Pack', fixedPrice: 14.95, saveText: 'Value' },
    ],
    benefitDetails: [
        { title: "Rapid Absorption", description: "Hypotonic formula.", icon: "droplet" },
        { title: "Native Botanicals", description: "Kakadu Plum for Vitamin C.", icon: "leaf" },
        { title: "Gut Health", description: "Bacillus coagulans probiotic support.", icon: "shield" }
    ],
    ingredientsList: 'Carbonated Water, Inulin, Acacia Fibre, Cane Sugar, Hemp Seed Extract (0.08%), Citric Acid, Botanical Blend (Kudzu, Calendula, Rosemary), Vitamin C, Bacillus coagulans GBI-30 6086, Potassium Sorbate.',
    nutrition: [
        { nutrient: "Energy", perServe: "45kJ", per100: "12.7kJ" },
        { nutrient: "Protein", perServe: "0.2g", per100: "0.1g" },
        { nutrient: "Fat, Total", perServe: "0g", per100: "0g" },
        { nutrient: "Carbohydrate", perServe: "2.5g", per100: "0.7g" },
        { nutrient: "- Sugars", perServe: "1.8g", per100: "0.5g" },
        { nutrient: "Dietary Fibre", perServe: "5.2g", per100: "1.5g" },
        { nutrient: "Probiotics", perServe: "1 Billion CFU", per100: "281 Million CFU" },
    ]
  },

  // --- FUEL* ---
  {
    id: 'fuel-bar',
    range: 'Fuel*',
    title: 'Fuel*',
    subtitle: 'Hemp Protein Bites',
    description: 'Powered By Hemp. Whole food recovery snack. 10g Protein.',
    longDescription: "**Eat like you train.**\n\nFuel* is a dense, chewy **whole-food matrix** packing **10g of complete Hemp & Pea protein**.\n\n**Pricing:**\n- Single Bite: $4.50\n- 5 Pack: $19.95",
    price: 4.50,
    wholesalePrice: 2.25,
    wholesaleMoq: 12,
    caseLabel: 'Box of 12 Bites',
    format: '60g Bite',
    comingSoon: true,
    image: localProduct(`Fuel-Peanut-Butter.png`), 
    variants: [
        { name: 'Peanut Butter Crunch', image: localProduct(`Fuel-Peanut-Butter.png`) },
        { name: 'Choc Chip Cookie Dough', image: localProduct(`Fuel-Peanut-Butter.png`) },
        { name: 'Salted Caramel', image: localProduct(`Fuel-Peanut-Butter.png`) },
        { name: 'Double Choc Mint', image: localProduct(`Fuel-Peanut-Butter.png`) }
    ],
    images: [
        localProduct(`Fuel-Peanut-Butter.png`)
    ],
    goals: ['Recovery', 'Energy'],
    flavorProfile: 'Rich',
    usage: {
        when: 'Between meals or post-workout.',
        how: 'Unwrap and eat.',
    },
    bundles: [
        { quantity: 1, label: 'Single Bite', discount: 0 },
        { quantity: 5, label: '5 Pack', fixedPrice: 19.95, saveText: 'Value' },
    ],
    benefitDetails: [
        { title: "Complete Protein", description: "Hemp + Pea blend.", icon: "muscle" },
        { title: "Healthy Fats", description: "Macadamia oil.", icon: "shield" },
        { title: "Gut Friendly", description: "Prebiotic fibre.", icon: "leaf" }
    ],
    ingredientsList: 'Pea Protein Isolate, Hemp Protein Powder (20%), Rice Syrup, Chicory Root Fibre, Coconut Sugar, Macadamia Oil, Cocoa Powder, Sea Salt, Vitamin E Blend.',
    nutrition: [
        { nutrient: "Energy", perServe: "980kJ", per100: "1633kJ" },
        { nutrient: "Protein", perServe: "10.2g", per100: "17g" },
        { nutrient: "Fat, Total", perServe: "12g", per100: "20g" },
        { nutrient: "- Saturated", perServe: "2g", per100: "3.3g" },
        { nutrient: "Carbohydrate", perServe: "22g", per100: "36.6g" },
        { nutrient: "- Sugars", perServe: "9g", per100: "15g" },
        { nutrient: "Dietary Fibre", perServe: "6g", per100: "10g" },
    ]
  },

  // --- NEW BUNDLES (Performance) ---
  {
      id: 'bundle-starter',
      range: 'Bundles',
      title: 'Starter Pack',
      subtitle: 'The Essentials',
      description: 'The perfect entry point. Try the range.',
      longDescription: "Includes:\n- Recovery+ (10 Pack)\n- Energize^ (Single Pouch)\n- Drip° (Single Can)\n\n**Value: $34.45 | Price: $29.95**",
      price: 29.95,
      compareAtPrice: 34.45,
      comingSoon: true,
      image: localProduct(`Recovery-Blue-Raspberry.png`), // Switched to confirmed file
      goals: ['Recovery', 'Energy', 'Hydration'],
      benefits: ['Complete sampling of the range', 'Perfect for first time users'],
      usage: { when: 'All day', how: 'Use as directed per product' },
      bundleComponents: [
          { name: "Recovery+ Flavor", options: RECOVERY_FLAVORS },
          { name: "Energize^ Flavor", options: ENERGIZE_FLAVORS },
          { name: "Drip° Flavor", options: DRIP_FLAVORS }
      ]
  },
  {
      id: 'bundle-performance',
      range: 'Bundles',
      title: 'Performance Pack',
      subtitle: 'Train Harder',
      description: 'For the serious athlete. Energy + Recovery.',
      longDescription: "Includes:\n- Energize^ (3 Pack)\n- Recovery+ (10 Pack)\n\n**Value: $39.95 | Price: $34.95**",
      price: 34.95,
      compareAtPrice: 39.95,
      comingSoon: true,
      image: localProduct(`Energize-Sour-Watermelon.png`), // Switched to confirmed file
      goals: ['Energy', 'Recovery'],
      benefits: ['Pre & Post workout covered', 'Save on essentials'],
      usage: { when: 'Pre & Post Workout', how: 'Energize^ before, Recovery+ after.' },
      bundleComponents: [
          { name: "Energize^ Flavor", options: ENERGIZE_FLAVORS },
          { name: "Recovery+ Flavor", options: RECOVERY_FLAVORS }
      ]
  },
  {
      id: 'bundle-recovery-sampler',
      range: 'Bundles',
      title: 'Recovery Kit (Sampler)',
      subtitle: 'Taste The Difference',
      description: '4 random Recovery+ sachets to find your flavour.',
      longDescription: "Includes:\n- 4x Mixed Recovery+ Sachets\n\n**Price: $9.95**",
      price: 9.95,
      comingSoon: true,
      image: localProduct(`Recovery-Strawberry-Kiwi.png`), // Switched to confirmed file
      goals: ['Recovery'],
      benefits: ['Try all flavours', 'Travel friendly'],
      usage: { when: 'Post Workout', how: 'Mix with water' },
      bundleComponents: [
          { name: "Preference", options: ["Mixed Flavors", "Watermelon Only", "Blue Raspberry Only"] }
      ]
  },
  {
      id: 'bundle-ultimate',
      range: 'Bundles',
      title: 'Ultimate Hi Yarndi Kit',
      subtitle: 'Total Domination',
      description: 'The full stack for elite performance.',
      longDescription: "Includes:\n- Recovery+ (10 Pack)\n- Energize^ (3 Pack)\n- Drip° (4 Pack)\n\n**Value: $69.85 | Price: $59.95**", 
      price: 59.95,
      compareAtPrice: 65.00, 
      comingSoon: true,
      image: localProduct(`Drip-Lychee-Burst.png`), // Switched to confirmed file
      goals: ['Performance'],
      benefits: ['Complete stack', 'Maximum results'],
      usage: { when: 'Daily', how: 'Follow individual protocols' },
      bundleComponents: [
          { name: "Recovery+ Flavor", options: RECOVERY_FLAVORS },
          { name: "Energize^ Flavor", options: ENERGIZE_FLAVORS },
          { name: "Drip° Flavor", options: DRIP_FLAVORS }
      ]
  },
  {
      id: 'bundle-drip-party',
      range: 'Bundles',
      title: 'Drip° Party Pack',
      subtitle: 'Fridge Filler',
      description: '12 mixed cans of Drip° Probiotic Soda.',
      longDescription: "Includes:\n- 12x Mixed Drip° Cans\n\n**Value: $54.00 | Price: $38.95**", // 12 * 4.50 = 54.
      price: 38.95,
      compareAtPrice: 54.00,
      comingSoon: true,
      image: localProduct(`Drip-Passionfruit-Pulp.png`), // Switched to confirmed file
      goals: ['Hydration', 'Gut Health'],
      benefits: ['Stock up the fridge', 'Great for sharing'],
      usage: { when: 'Anytime', how: 'Serve cold' },
      bundleComponents: [
          { name: "Pack Selection", options: ["Mixed Variety", "Guava Only", "Passionfruit Only", "Lychee Only"] }
      ]
  },
  {
      id: 'bundle-fuel-box',
      range: 'Bundles',
      title: 'Fuel Snack Box',
      subtitle: 'Weekly Prep',
      description: '5 Fuel* bites to get you through the work week.',
      longDescription: "Includes:\n- 5x Fuel* Bites\n\n**Value: $22.50 | Price: $17.95**", // 5 * 4.50 = 22.50
      price: 17.95,
      compareAtPrice: 22.50,
      comingSoon: true,
      image: localProduct(`Fuel-Peanut-Butter.png`),
      goals: ['Snack', 'Protein'],
      benefits: ['Healthy snacking', 'Meal prep ready'],
      usage: { when: 'Snack time', how: 'Eat' },
      bundleComponents: [
          { name: "Flavor Selection", options: ["Mixed Flavors", ...FUEL_FLAVORS] }
      ]
  },

  // --- PRODUCT + MERCH BUNDLES (Retail) ---
  {
      id: 'merch-bundle-energize',
      range: 'Bundles',
      title: 'Energize^ + Hoodie',
      subtitle: 'Look Good, Feel Good',
      description: 'Energize^ 3 Pack + Premium Hoodie.',
      longDescription: "Includes:\n- Energize^ (3 Pack)\n- Heavyweight Hoodie (Value $79.95)\n\n**Total Price: $84.95**",
      price: 84.95,
      compareAtPrice: 94.90, // 14.95 + 79.95
      comingSoon: true,
      image: unsplash('1515886657613-9f3515b0c78f'),
      goals: ['Style', 'Energy'],
      usage: { when: 'Pre-workout', how: 'Wear hoodie, take jelly' },
      bundleComponents: [
          { name: "Hoodie Size", options: HOODIE_SIZES },
          { name: "Hoodie Color", options: HOODIE_COLORS },
          { name: "Energize^ Flavor", options: ENERGIZE_FLAVORS }
      ]
  },
  {
      id: 'merch-bundle-recovery',
      range: 'Bundles',
      title: 'Recovery+ + Hoodie',
      subtitle: 'Cozy Recovery',
      description: 'Recovery+ 10 Pack + Premium Hoodie.',
      longDescription: "Includes:\n- Recovery+ (10 Pack)\n- Heavyweight Hoodie (Value $79.95)\n\n**Total Price: $89.95**",
      price: 89.95,
      compareAtPrice: 104.95, // 25 + 79.95
      comingSoon: true,
      image: unsplash('1556906781-9a412961d289'),
      goals: ['Style', 'Recovery'],
      usage: { when: 'Post-workout', how: 'Wear hoodie, drink recovery' },
      bundleComponents: [
          { name: "Hoodie Size", options: HOODIE_SIZES },
          { name: "Hoodie Color", options: HOODIE_COLORS },
          { name: "Recovery+ Flavor", options: RECOVERY_FLAVORS }
      ]
  },
  {
      id: 'merch-bundle-drip',
      range: 'Bundles',
      title: 'Drip° + Hoodie',
      subtitle: 'Daily Essentials',
      description: 'Drip° 4 Pack + Premium Hoodie.',
      longDescription: "Includes:\n- Drip° (4 Pack)\n- Heavyweight Hoodie (Value $79.95)\n\n**Total Price: $89.95**",
      price: 89.95,
      compareAtPrice: 94.90, // 14.95 + 79.95
      comingSoon: true,
      image: unsplash('1503342217505-b0215e948416'),
      goals: ['Style', 'Hydration'],
      usage: { when: 'Anytime', how: 'Wear hoodie, sip drip' },
      bundleComponents: [
          { name: "Hoodie Size", options: HOODIE_SIZES },
          { name: "Hoodie Color", options: HOODIE_COLORS },
          { name: "Drip° Flavor", options: DRIP_FLAVORS }
      ]
  },
  {
      id: 'merch-bundle-fuel',
      range: 'Bundles',
      title: 'Fuel + Hoodie*',
      subtitle: 'Snack in Style',
      description: 'Fuel* 5 Pack + Premium Hoodie.',
      longDescription: "Includes:\n- Fuel* (5 Pack)\n- Heavyweight Hoodie (Value $79.95)\n\n**Total Price: $89.95**",
      price: 89.95,
      compareAtPrice: 99.90, // 19.95 + 79.95
      comingSoon: true,
      image: unsplash('1516280440614-6697288d5d38'),
      goals: ['Style', 'Nutrition'],
      usage: { when: 'Anytime', how: 'Wear hoodie, eat snack' },
      bundleComponents: [
          { name: "Hoodie Size", options: HOODIE_SIZES },
          { name: "Hoodie Color", options: HOODIE_COLORS },
          { name: "Fuel* Flavor", options: FUEL_FLAVORS }
      ]
  },
  {
      id: 'merch-bundle-full-kit',
      range: 'Bundles',
      title: 'Full Performance Kit',
      subtitle: 'The Upgrade',
      description: 'Hoodie + Recovery+ (10pk) + Energize^ (3pk).',
      longDescription: "Includes:\n- Heavyweight Hoodie\n- Recovery+ (10 Pack)\n- Energize^ (3 Pack)\n\n**Total Price: $109.95**",
      price: 109.95,
      compareAtPrice: 119.90, // 79.95 + 25 + 14.95
      comingSoon: true,
      image: unsplash('1517836357463-d25dfeac3438'),
      goals: ['Style', 'Performance'],
      usage: { when: 'Training Day', how: 'Full protocol' },
      bundleComponents: [
          { name: "Hoodie Size", options: HOODIE_SIZES },
          { name: "Hoodie Color", options: HOODIE_COLORS },
          { name: "Recovery+ Flavor", options: RECOVERY_FLAVORS },
          { name: "Energize^ Flavor", options: ENERGIZE_FLAVORS }
      ]
  },
  {
      id: 'merch-bundle-superstack',
      range: 'Bundles',
      title: 'Hi Yarndi Superstack',
      subtitle: 'All In',
      description: 'Hoodie + Recovery+ + Energize^ + Drip° + Fuel*.',
      longDescription: "Includes:\n- Heavyweight Hoodie\n- Recovery+ (10 Pack)\n- Energize^ (Single)\n- Drip° (Single)\n- Fuel* (Single)\n\n**Total Price: $139.95**",
      price: 139.95,
      compareAtPrice: 155.00,
      comingSoon: true,
      image: unsplash('1550989460-0adf9ea622e2'),
      goals: ['Lifestyle'],
      usage: { when: 'Life', how: 'Live it' },
      bundleComponents: [
          { name: "Hoodie Size", options: HOODIE_SIZES },
          { name: "Hoodie Color", options: HOODIE_COLORS },
          { name: "Recovery+ Flavor", options: RECOVERY_FLAVORS },
          { name: "Energize^ Flavor", options: ENERGIZE_FLAVORS },
          { name: "Drip° Flavor", options: DRIP_FLAVORS },
          { name: "Fuel* Flavor", options: FUEL_FLAVORS }
      ]
  },

  // --- MERCH: LIFESTYLE (Everyday) ---
  {
      id: 'hoodie-founders',
      range: 'Merch',
      merchCategory: 'Lifestyle',
      title: 'Founders Edition Hoodie',
      description: 'Heavyweight 500gsm Hemp/Organic Cotton blend. The original.',
      price: 79.95,
      image: localProduct(`merch-hoodie-black.png`), 
      variants: [
          { name: 'Black', image: localProduct(`merch-hoodie-black.png`) },
          { name: 'White', image: localProduct(`merch-hoodie-black.png`) },
      ],
      bundleComponents: [
          { name: "Size", options: HOODIE_SIZES },
          { name: "Color", options: ['Black', 'White'] }
      ],
      tag: 'Everyday',
      usage: { when: 'Rest Day', how: 'Wash cold', proTip: 'Line dry only' },
      ingredientsList: '55% Hemp, 45% Organic Cotton. 500gsm French Terry.',
      comingSoon: true
  },
  {
      id: 'tee-founders',
      range: 'Merch',
      merchCategory: 'Lifestyle',
      title: 'Founders Edition Tee',
      description: 'Boxy fit. 280gsm Hemp blend. Minimalist branding.',
      price: 49.95,
      image: localProduct(`merch-hoodie-black.png`),
      variants: [
          { name: 'Black', image: localProduct(`merch-hoodie-black.png`) },
          { name: 'White', image: localProduct(`merch-hoodie-black.png`) }
      ],
      bundleComponents: [
          { name: "Size", options: ['S', 'M', 'L', 'XL', 'XXL'] },
          { name: "Color", options: ['Black', 'White'] }
      ],
      usage: { when: 'Daily', how: 'Wear it out', proTip: 'Size up for pump cover' },
      ingredientsList: '55% Hemp, 45% Organic Cotton.',
      comingSoon: true
  },
  {
      id: 'cap-dad',
      range: 'Merch',
      merchCategory: 'Lifestyle',
      title: 'Dad Hat',
      description: 'Unstructured 6-panel. For the street, not the gym.',
      price: 34.95,
      image: localProduct(`merch-hoodie-black.png`),
      variants: [
          { name: 'Pink Camo', image: localProduct(`merch-hoodie-black.png`) },
          { name: 'Green Camo', image: localProduct(`merch-hoodie-black.png`) },
          { name: 'White Camo', image: localProduct(`merch-hoodie-black.png`) },
          { name: 'Black Punk', image: localProduct(`merch-hoodie-black.png`) }
      ],
      usage: { when: 'Sunny days', how: 'On head', proTip: 'Curve the brim' },
      ingredientsList: '100% Cotton Twill.',
      comingSoon: true
  },
  {
      id: 'shorts-hemp',
      range: 'Merch',
      merchCategory: 'Lifestyle',
      title: 'Hemp Jogger Shorts',
      description: 'Lounge in style. Breathable hemp blend.',
      price: 59.95,
      image: unsplash('1591195853828-11db59a44f6b'),
      bundleComponents: [
          { name: "Size", options: ['S', 'M', 'L', 'XL'] },
          { name: "Color", options: ['Black', 'Grey', 'Cream'] }
      ],
      usage: { when: 'Rest day', how: 'Relax', proTip: 'Pair with Founders Tee' },
      comingSoon: true
  },
  {
      id: 'joggers-hemp',
      range: 'Merch',
      merchCategory: 'Lifestyle',
      title: 'Hemp Full Length Joggers',
      description: 'Tapered fit. Cuffed ankles. Maximum comfort.',
      price: 89.95,
      image: unsplash('1552902865-b72c031ac5ea'),
      bundleComponents: [
          { name: "Size", options: ['S', 'M', 'L', 'XL'] },
          { name: "Color", options: ['Black', 'Grey', 'Cream'] }
      ],
      usage: { when: 'Rest day', how: 'Relax', proTip: 'Pair with Founders Hoodie' },
      comingSoon: true
  },

  // --- MERCH: PERFORMANCE (Sportswear) ---
  {
      id: 'cap-performance',
      range: 'Merch',
      merchCategory: 'Performance',
      title: 'Velocity Dryfit Hat',
      description: 'Laser perforated. Sweat wicking. Lightweight.',
      price: 39.95,
      image: unsplash('1576871337622-98d48d1cf531'),
      variants: [
          { name: 'Black', image: unsplash('1576871337622-98d48d1cf531') },
          { name: 'White', image: unsplash('1588850561407-ed78c282e89b') },
          { name: 'Navy', image: unsplash('1534215754734-18e55d13e346') }
      ],
      usage: { when: 'Running', how: 'Wear it', proTip: 'Machine washable' },
      comingSoon: true
  },
  {
      id: 'headband-tempo',
      range: 'Merch',
      merchCategory: 'Performance',
      title: 'Tempo Headband',
      description: 'Keeps sweat out of your eyes during high intensity sets.',
      price: 19.95,
      image: unsplash('1556817411-31ae72fa3ea0'),
      variants: [
          { name: 'Black', image: unsplash('1556817411-31ae72fa3ea0') },
          { name: 'White', image: unsplash('1517836357463-d25dfeac3438') },
          { name: 'Neon', image: unsplash('1598971861713-54bc16a8a64d') }
      ],
      usage: { when: 'Training', how: 'Wear it', proTip: 'Rinse after use' },
      comingSoon: true
  },
  {
      id: 'shorts-run',
      range: 'Merch',
      merchCategory: 'Performance',
      title: 'Sprint Split Shorts',
      description: 'Ultra-lightweight dryfit fabric. Liner included.',
      price: 54.95,
      image: unsplash('1565299585323-38d6b0865b47'),
      bundleComponents: [
          { name: "Size", options: ['S', 'M', 'L', 'XL'] },
          { name: "Color", options: ['Black', 'Grey', 'Retro Print'] }
      ],
      usage: { when: 'Running / HIIT', how: 'Move fast', proTip: 'Internal key pocket' },
      comingSoon: true
  },

  // --- MERCH: GEAR (Accessories) ---
  {
      id: 'socks-crew',
      range: 'Merch',
      merchCategory: 'Gear',
      title: 'Performance Crew Socks',
      description: 'Cushioned sole. Arch support. Breathable mesh.',
      price: 19.95,
      image: unsplash('1586350977771-b3b0abd50c82'),
      variants: [{name: 'One Size', image: ''}],
      usage: { when: 'Training', how: 'Wear pairs', proTip: 'Wash inside out' },
      comingSoon: true
  },
  {
      id: 'towel-gym',
      range: 'Merch',
      merchCategory: 'Gear',
      title: 'Microfiber Gym Towel',
      description: 'Quick dry. Zip pocket for phone/keys.',
      price: 24.95,
      image: unsplash('1592399032928-677b274947c2'),
      variants: [{name: 'Black', image: ''}],
      usage: { when: 'Gym', how: 'Wipe down', proTip: 'Magnetic clip included' },
      comingSoon: true
  },
  {
      id: 'bottle-glass',
      range: 'Merch',
      merchCategory: 'Gear',
      title: 'Glass Infuser Bottle',
      description: 'Double walled. Tea/Fruit infuser included.',
      price: 29.95,
      image: 'https://images.unsplash.com/photo-1602143407151-11115cd4e69b?q=80&w=800&auto=format&fit=crop',
      variants: [{name: '500ml', image: ''}],
      usage: { when: 'Hydration', how: 'Fill with water', proTip: 'Add lemon slices' },
      ingredientsList: 'Borosilicate Glass, Bamboo Lid.',
      comingSoon: true
  },
  {
      id: 'mat-yoga',
      range: 'Merch',
      merchCategory: 'Gear',
      title: 'Cork Yoga Mat',
      description: 'Natural anti-microbial surface. Non-slip rubber base.',
      price: 89.95,
      image: unsplash('1592432678016-e910b452f9a2'),
      variants: [{name: 'Standard', image: ''}],
      usage: { when: 'Flow', how: 'Unroll', proTip: 'Grip increases with sweat' },
      comingSoon: true
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'neuro-metabolic-energize',
    title: 'Neuro-Metabolic Potentiation: The Science of Energize^',
    category: 'Performance',
    excerpt: 'Why caffeine alone isn’t enough. Exploring the synergy between L-Tyrosine and Citrulline Malate for sustained cognitive drive.',
    readTime: '8 min read',
    image: localProduct(`Energize-Sour-Watermelon.png`), // Switched to confirmed file
    date: 'Oct 12, 2023',
    author: 'Dr. Liam H.',
    content: `
### Executive Summary: Defining the Functional Neuro-Metabolic Category

The landscape of sports nutrition has historically been bifurcated into two distinct taxonomies: the "fueling" sector, dominated by isotonic carbohydrate solutions designed to replenish glycogen stores; and the "pre-workout" sector, characterized by high-stimulant powders aimed at maximizing acute force production. However, the emergence of the "hybrid athlete"—individuals participating in high-intensity functional training (HIFT) modalities such as Hyrox and CrossFit—has exposed a critical gap in this binary market structure. These athletes require the portability of an endurance gel but demand the neuro-cognitive support of a pre-workout formulation.

The **Energize^** formulation, with its defining matrix of **200mg Caffeine, 500mg L-Tyrosine, and 2g Citrulline Malate**, represents a strategic intervention designed to occupy this "functional neuro-metabolic" middle ground.

### The Physiology of Hybrid Fatigue: Central vs. Peripheral Limiters

To understand the rationale behind Energize^, one must first dissect the physiological phenomenon it aims to mitigate: fatigue.

#### 1. Central Fatigue and the Dopaminergic Hypothesis
Central Fatigue (CF) is defined as a progressive reduction in the voluntary activation of muscle during exercise, originating proximal to the neuromuscular junction. The "Central Fatigue Hypothesis" posits that prolonged exercise leads to an alteration in the synthesis and metabolism of monoamines in the brain, specifically an increase in serotonin (5-HT) and a concomitant decrease in **dopamine (DA)**.

Dopamine is the primary neurotransmitter governing motivation and motor control. During high-intensity exertion, the turnover rate of dopamine accelerates. Once dopamine levels fall below a critical threshold, the ratio of Serotonin to Dopamine shifts, triggering lethargy and loss of focus. Energize^ targets this failure point.

#### 2. Peripheral Fatigue: The Ammonia Trap
Simultaneously, peripheral fatigue occurs within the muscle fiber. The rapid deamination of AMP releases ammonia (NH3) into the bloodstream. Hyperammonemia is toxic to the central nervous system and is a potent signal for fatigue.

### The Catecholamine Axis: Caffeine and L-Tyrosine Synergy

The most significant feature of the Energize^ formulation is the integration of **500mg of L-Tyrosine** alongside the standard **200mg of Caffeine**.

**Caffeine (200mg): The Neural Driver** Caffeine acts primarily as a non-selective antagonist of adenosine receptors. By blocking these receptors, caffeine prevents the onset of sedation and increases the binding potential of dopamine.

**L-Tyrosine (500mg): The Cognitive Safety Valve** While caffeine increases the utilization of dopamine, it does not increase the supply. L-Tyrosine serves as the precursor to refill this pool. Under acute stress—defined as high-intensity anaerobic exercise—the synthesis of dopamine becomes dependent on the availability of Tyrosine. Research from military trials demonstrates that Tyrosine supplementation specifically protects against the cognitive decline that occurs during these high-stress windows.

### Nitric Oxide and Ammonia Scavenging: The Citrulline Malate Paradigm

The inclusion of **2g of Citrulline Malate** is often misunderstood as merely a "pump" ingredient. In the context of functional endurance, this specific dosage serves a critical metabolic role: **ammonia scavenging**.

L-Citrulline is a key intermediate in the Urea Cycle. By supplementing with L-Citrulline, the rate of the urea cycle is upregulated, increasing the body's capacity to "clear" ammonia accumulating from the working muscles. This delays the onset of peripheral acidosis without inducing the gastrointestinal distress associated with massive solute loads.

### Conclusion

Energize^ is not a compromise between endurance and power, but a specialized solution for "fatigue management." It targets the distinct physiological limiters of high-intensity endurance: neurotransmitter depletion (via Tyrosine) and ammonia accumulation (via Citrulline).
    `
  },
  {
    id: 'synbiotic-drip',
    title: 'Synbiotics & Mucosal Defense: Inside Drip°',
    category: 'Gut Health',
    excerpt: 'Moving beyond basic kombucha. How spore-based probiotics and dual-fiber matrices solve the survivability crisis.',
    readTime: '6 min read',
    image: localProduct(`Drip-Passionfruit-Pulp.png`), // Switched to confirmed file
    date: 'Sep 28, 2023',
    author: 'Sarah J., Nutritionist',
    content: `
### The Functional Beverage Paradigm Shift

The functional beverage landscape is transitioning from "better-for-you" reduced-calorie options to "good-for-you" bioactive delivery systems. Consumers are migrating from passive health avoidance to active health seeking.

**Drip°** represents a significant advancement over first-generation prebiotic sodas. By integrating a synbiotic core (**Bacillus coagulans GBI-30, 6086** alongside **Inulin and Acacia fibre**), Drip° addresses the efficacy and tolerability gaps that plague market leaders.

### The Synbiotic Core: Microbiology and Prebiotics

The foundation of the Drip° formulation is its gut-health complex.

#### 1. Bacillus coagulans GBI-30: The Survivability Specialist
Traditional vegetative strains used in dairy (Lactobacillus) are fragile; they die in stomach acid. **Bacillus coagulans GBI-30** is a spore-forming organism. This proteinaceous shell encases the genetic material of the bacterium, rendering it dormant and highly resistant to acid. Research indicates that GBI-30 maintains a high survival rate (approx. 70%) even after exposure to gastric pH 2.0, germinating only once it reaches the favorable conditions of the intestine.

#### 2. The Dual-Fiber Matrix: Inulin and Acacia
The efficacy and tolerability of a prebiotic beverage are dictated by fermentation kinetics. Drip° employs a blend of Inulin and Acacia Fibre to solve the "bloat" issue.

* **Inulin (Rapid Fermenter):** Fermented quickly in the proximal colon. While effective, high doses cause sudden gas production.
* **Acacia Fibre (Sustained Fermenter):** A complex structure that ferments gradually across the entire length of the colon.

By combining them, Drip° achieves "Full-Colon Coverage" while mitigating the peak gas velocity associated with single-source inulin products.

### The Nutritional Scaffold: Hemp and Protein Synergy

Drip° incorporates **Hemp Seed Extract**, introducing a functional amino acid profile. Hemp protein is exceptionally rich in Edestin and Albumin. Interestingly, Bacillus coagulans GBI-30 produces proteases that facilitate protein absorption. This creates an "internal synergy" where the probiotic acts as a bio-enhancer for the hemp extract.

### Mucosal Defense: The Botanical Complex

Drip° incorporates a botanical triad—**Kudzu, Calendula, and Rosemary**—for active mucosal healing.

* **Kudzu Root:** Rich in Puerarin, which has been shown to upregulate Tight Junction proteins (Zonula Occludens-1), strengthening the gut barrier against "leaky gut."
* **Calendula:** A vulnerary (wound-healing) agent that soothes the mucous membranes.
* **Rosemary:** Rich in carnosic acid, a potent antioxidant that prevents lipid peroxidation and extends shelf life naturally.

### Conclusion

Drip° is a scientifically robust evolution of the functional soda. It solves the survivability crisis of kombuchas via spore technology and utilizes a sophisticated dual-fiber matrix to deliver gut health without the distress.
    `
  },
  {
    id: 'fuel-architecture',
    title: 'Nutritional Architectures: Why Fuel* Works',
    category: 'Nutrition',
    excerpt: 'Solving the "incomplete protein" fallacy. How Hemp + Pea creates a complete amino acid profile for recovery.',
    readTime: '5 min read',
    image: localProduct(`Fuel-Peanut-Butter.png`),
    date: 'Sep 15, 2023',
    author: 'Dr. Liam H.',
    content: `
### Introduction: Bio-Efficacious Naturalism

The **Fuel*** formulation represents a third-generation approach to sports nutrition: "Bio-Efficacious Naturalism." It prioritizes ingredients that are chemically selected for their specific synergistic interactions within human metabolism.

### The Protein Matrix: Solving the Bioavailability Equation

The fundamental challenge in plant-based sports nutrition has been the "anabolic ceiling"—single-source plant proteins often lack sufficient Essential Amino Acids (EAAs). Fuel* circumvents this through a calculated binary protein matrix.

#### 1. Hemp Protein: The Edestin Reservoir
Hemp protein, derived from Cannabis sativa, anchors the formulation. Its primary protein fraction is **Edestin** (65-80%), a globular protein structurally similar to human blood plasma. This renders it highly soluble and digestible (PDCAAS > 90%). Furthermore, Hemp provides high levels of **Methionine and Cysteine**, sulfur-containing amino acids often deficient in pulses like peas and beans.

#### 2. Pea Protein: The Anabolic Trigger
**Pea Protein Isolate** is included to address the deficiencies of hemp. It is one of the richest plant sources of **Lysine** and **Branched-Chain Amino Acids (BCAAs)**, specifically Leucine. Leucine is the primary trigger for the mTOR pathway, which drives muscle protein synthesis.

**The Synergy:** By pairing Pea (High Lysine) with Hemp (High Methionine), Fuel* creates a "complementary protein" effect. This synchronicity elevates the biological value of the bar to be comparable to animal proteins like whey.

### The Carbohydrate Architecture: Glucose Kinetics

The choice of carbohydrate source is critical. Fuel* distinguishes itself by utilizing **Brown Rice Syrup**.

* **Brown Rice Syrup (Glucose Polymer):** Effectively 100% glucose equivalents. Glucose is absorbed via the SGLT1 transporter and can be used immediately by muscle cells for glycogen resynthesis.
* **The Competitor Flaw (Dates/Fructose):** Many "natural" bars rely on dates, which are high in fructose. Fructose must be metabolized by the liver and preferentially restores liver glycogen, not muscle glycogen.

For an athlete needing to perform again the next day, the glucose-based substrate of Fuel* is the superior ergogenic aid for muscle recovery.

### Functional Lipids: Macadamia Oil (Omega-7)

The inclusion of Macadamia Oil introduces **Palmitoleic Acid (Omega-7)**. Research demonstrates that Omega-7 acts as a "lipokine"—a signaling molecule that improves whole-body insulin sensitivity. This helps partition nutrients into muscle tissue rather than fat storage and reduces systemic inflammation (CRP).

### Conclusion

Fuel* moves away from the "single magic ingredient" model toward a synergistic systems approach. It respects human physiology, delivering bioavailability and digestibility in perfect synchronicity.
    `
  },
  {
    id: 'recovery-systemic',
    title: 'Systemic Repair: The Recovery+ Protocol',
    category: 'Recovery',
    excerpt: 'From mTOR activation to cortisol management. The stoichiometry of the 3:1 Carbohydrate-to-Protein ratio.',
    readTime: '7 min read',
    image: localProduct(`Recovery-Blue-Raspberry.png`), // Switched to confirmed file
    date: 'Aug 20, 2023',
    author: 'Dr. Liam H.',
    content: `
### Introduction: The Physiological Imperatives of Modern Recovery

High-intensity physical exertion induces a profound homeostatic disruption characterized by substrate depletion, myofibrillar disruption, and central nervous system (CNS) fatigue. **Recovery+** is an engineered intervention designed to reverse these processes by transitioning the body from a catabolic state to an anabolic state.

### Macronutrient Dynamics: The Carbohydrate-Protein Matrix

The foundational architecture of Recovery+ is the **3:1 Carbohydrate-to-Protein ratio**.

#### 1. Carbohydrates: The Kinetic Drivers
We utilize **Maltodextrin**, a high-glycemic polysaccharide. Upon ingestion, it triggers a sharp elevation in blood glucose and insulin. In the context of recovery, insulin is a potent anabolic signaling hormone. It activates the PI3K/Akt pathway, facilitating the translocation of GLUT4 transporters to the muscle cell membrane.

**The 3:1 Ratio:** Research indicates that co-ingesting carbohydrates with protein in this specific ratio maximizes glycogen resynthesis rates more effectively than carbohydrates alone.

#### 2. Hemp Protein: The Anti-Inflammatory Advantage
Unlike Whey isolates, Hemp protein retains its Essential Fatty Acid (EFA) profile. It provides Omega-3 (Alpha-Linolenic Acid) and Omega-6 in an optimal 3:1 ratio, along with **Gamma-Linolenic Acid (GLA)**. GLA is a precursor to anti-inflammatory eicosanoids (Prostaglandin E1). By including Hemp protein, Recovery+ actively resolves systemic inflammation, a dual-mechanism absent in standard protein powders.

### Micronutrient Matrix: Catalytic Facilitators

Recovery+ extends beyond macronutrients to include a comprehensive matrix of micronutrients.

#### 1. Magnesium Bisglycinate: The Nervous System Reset
Magnesium is a cofactor for over 300 enzymatic reactions. We utilize the **Bisglycinate** form, where magnesium is chelated to glycine. This ensures high bioavailability and gastrointestinal tolerability. Crucially, Glycine acts as an inhibitory neurotransmitter, lowering core body temperature and promoting the onset of sleep—the ultimate recovery tool.

#### 2. Zinc Picolinate: Hormonal Support
Zinc is a structural component of "Zinc Finger" proteins, which regulate gene expression involved in tissue repair. Intense sweating leads to zinc loss, which correlates with reduced testosterone and IGF-1 levels. Supplementation maintains the hormonal environment necessary for anabolism.

### Conclusion

Recovery+ is a Systemic Repair Matrix. It utilizes the 3:1 Carbohydrate:Protein ratio to drive glycogen repair, while leveraging Hemp Protein and Magnesium Bisglycinate to address inflammation and sleep—the "silent" pillars of recovery.
    `
  }
];

export const athleteUseCases: UseCase[] = [
  {
    id: 'mma',
    title: 'Combat Sports',
    description: 'For fighters cutting weight and training 2x a day. Focus on inflammation reduction and electrolyte retention.',
    schedule: [
      { time: '06:00 AM', product: 'Energize^', note: 'Pre-run energy without the stomach heaviness.' },
      { time: '12:00 PM', product: 'Drip°', note: 'Rehydration after sparring session.' },
      { time: '08:00 PM', product: 'Recovery+', note: 'Magnesium load to calm nervous system post-grappling.' }
    ]
  },
  {
    id: 'surf',
    title: 'Surfing',
    description: 'Long exposure to sun and salt water drains hydration. Endurance and rapid recovery are key.',
    schedule: [
      { time: '05:30 AM', product: 'Fuel*', note: 'Light protein bite before paddling out.' },
      { time: '09:00 AM', product: 'Recovery+', note: 'Immediate salt flush and muscle repair.' },
      { time: '02:00 PM', product: 'Drip°', note: 'Afternoon hydration maintenance.' }
    ]
  },
  {
    id: 'crossfit',
    title: 'Functional Fitness',
    description: 'High intensity interval output requiring fast-twitch muscle support and lactate clearing.',
    schedule: [
      { time: '04:00 PM', product: 'Energize^', note: '20 mins before WOD for focus.' },
      { time: '05:30 PM', product: 'Recovery+', note: 'Immediately post-WOD to flush lactate.' },
      { time: '09:00 PM', product: 'Fuel*', note: 'Casein-like slow release protein before bed.' }
    ]
  }
];

export const productReviewsData: Review[] = [
    { id: 'r1', productId: 'recovery-plus-watermelon', user: 'Alex H.', avatar: '', comment: 'Actually helps with DOMS. Tastes real, not synthetic.', rating: 5, date: '2 days ago', sport: 'CrossFit' },
    { id: 'r2', productId: 'recovery-plus-watermelon', user: 'Sarah J.', avatar: '', comment: 'Love the ingredients list. No nasties.', rating: 5, date: '1 week ago', sport: 'Runner' },
    { id: 'r3', productId: 'energize-cair', user: 'Mike T.', avatar: '', comment: 'Good focus, no crash. The jelly texture is unique.', rating: 4, date: '3 days ago', sport: 'MMA' },
];

export const comparisons: ProductComparison[] = [
    {
        id: 'recovery',
        title: 'Recovery+',
        competitorLabel: 'Standard Sports Drink',
        points: [
            { feature: 'Sugar Content', us: '0g Added Sugar', them: '20g+ Sugar', icon: 'shield' },
            { feature: 'Anti-Inflammatory', us: 'Hemp Seed Oil (GLA)', them: 'None', icon: 'leaf' },
            { feature: 'Magnesium', us: '300mg Citrate', them: 'Trace / Oxide', icon: 'muscle' },
        ]
    },
    {
        id: 'energize',
        title: 'Energize^',
        competitorLabel: 'Powder Pre-Workout',
        points: [
            { feature: 'Delivery', us: 'Hydrogel (Fast)', them: 'Powder (Slow)', icon: 'zap' },
            { feature: 'Crash Control', us: 'L-Theanine Added', them: 'High Crash Risk', icon: 'brain' },
            { feature: 'Gut Health', us: 'Easy Digest', them: 'Bloating Common', icon: 'shield' },
        ]
    },
    {
        id: 'drip',
        title: 'Drip°',
        competitorLabel: 'Canned Soda',
        points: [
            { feature: 'Probiotics', us: '1 Billion CFU', them: 'None', icon: 'shield' },
            { feature: 'Hydration', us: 'Electrolytes', them: 'Diuretic', icon: 'droplet' },
            { feature: 'Ingredients', us: 'Native Botanicals', them: 'Artificial Flavours', icon: 'leaf' },
        ]
    },
    {
        id: 'fuel',
        title: 'Fuel*',
        competitorLabel: 'Protein Bar',
        points: [
            { feature: 'Texture', us: 'Whole Food Chew', them: 'Chalky Paste', icon: 'muscle' },
            { feature: 'Protein Source', us: 'Hemp + Pea', them: 'Whey / Soy', icon: 'leaf' },
            { feature: 'Fats', us: 'Macadamia Oil', them: 'Palm Oil', icon: 'shield' },
        ]
    }
];

export const rewardsData: Reward[] = [
    { id: 'rew1', title: '$10 Off Coupon', cost: 500, description: 'Get $10 off your next order over $50.', type: 'discount', code: 'YARNDI10' },
    { id: 'rew2', title: 'Free Shaker Bottle', cost: 1000, description: 'Add a premium shaker to your next order.', type: 'product', code: 'FREESHAKE' },
    { id: 'rew3', title: 'Free Shipping', cost: 1500, description: 'Free express shipping on your next order.', type: 'shipping', code: 'SHIPFREE' },
];

export const challengesData: Challenge[] = [
    { id: 'ch1', title: 'The Weekly Grind', description: 'Log 3 workouts this week.', points: 100, icon: 'run', actionLabel: 'Log Workout' },
    { id: 'ch2', title: 'Social Sharer', description: 'Tag us in your story.', points: 50, icon: 'instagram', actionLabel: 'Connect IG' },
    { id: 'ch3', title: 'Refer a Mate', description: 'Give $10, Get $10.', points: 500, icon: 'referral', actionLabel: 'Copy Link' },
];
