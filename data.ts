import { Product, BlogPost, UseCase, Review, ProductComparison, Currency, Reward, Challenge } from './types';

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
// Generates a clean, branded placeholder with specific text and background color
const ph = (text: string, bg: string, color: string = 'ffffff') => 
  `https://placehold.co/800x800/${bg}/${color}.png?text=${encodeURIComponent(text)}`;

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800`;

export const products: Product[] = [
  // --- RECOVERY+ ---
  {
    id: 'recovery-plus-watermelon',
    range: 'Recovery+',
    title: 'Recovery+',
    subtitle: 'Post-Session Reset',
    description: 'Powered by Hemp. Magnesium + Electroyltes. The ultimate cool down.',
    longDescription: "**Stop the soreness before it starts.** Recovery+ isn't just hydration; it's a **biological reset button** for your post-game physiology.\n\nWe’ve fused **cold-pressed Australian Hemp Seed Oil** (nature’s most potent anti-inflammatory) with highly bioavailable **Magnesium Citrate** to flush out lactate and calm your nervous system immediately.\n\nForget the sugar crash of standard sports drinks. This is clinical-grade recovery masked as a refreshing watermelon crush.",
    price: 45.00,
    compareAtPrice: 65.00,
    image: '/recovery-watermelon.png',
    // FLAVOUR NAMES UPDATED TO FILENAMES
    flavours: ['recovery-watermelon.png', 'recovery-blue-raspberry.png', 'recovery-strawberry-kiwi.png', 'recovery-lemonade.png'], 
    flavourImages: {
        'recovery-watermelon.png': '/recovery-watermelon.png',
        'recovery-blue-raspberry.png': '/recovery-blue-raspberry.png',
        'recovery-strawberry-kiwi.png': '/recovery-strawberry-kiwi.png',
        'recovery-lemonade.png': '/recovery-lemonade.png'
    },
    images: [
        '/recovery-watermelon.png',
        ph('Recovery+\nPack Back', '111827'),
        ph('Recovery+\nPowder Texture', '2dd4bf'),
        unsplash('1599493347474-7345f652bc2d') // Lifestyle
    ],
    format: '30 Sachets',
    tag: 'Best Seller',
    goals: ['Recovery', 'Hydration'],
    flavorProfile: 'Fruity',
    usage: {
        when: 'Immediately after training (within 30 mins).',
        how: 'Mix 1 sachet with 400-600ml cold water.',
        proTip: 'Add ice for a slushie texture on hot days.'
    },
    bundles: [
      { quantity: 1, label: 'Single', discount: 0 },
      { quantity: 2, label: 'Double Up', discount: 10, saveText: 'Save 10%' },
      { quantity: 3, label: 'Training Block', discount: 15, saveText: 'Save 15%' },
    ],
    benefitDetails: [
        { title: "Muscle Repair", description: "Hemp amino acids support rapid fiber repair.", icon: "muscle" },
        { title: "Inflammation", description: "Omegas 3 & 6 help cool down systemic inflammation.", icon: "shield" },
        { title: "Rehydration", description: "Clinical electrolyte profile matches sweat loss.", icon: "droplet" }
    ],
    scienceBacked: [
        { title: "Gamma-Linolenic Acid (GLA)", description: "Sourced from Hemp Seed Oil, GLA is a potent omega-6 fatty acid shown to inhibit the production of pro-inflammatory leukotrienes, effectively accelerating soft tissue repair post-trauma.", icon: "leaf" },
        { title: "Magnesium Citrate Bioavailability", description: "Unlike oxide forms, Magnesium Citrate has high solubility, allowing for rapid absorption into the bloodstream to regulate neuromuscular signals and prevent exercise-induced cramping.", icon: "muscle" },
        { title: "Electrolytic Osmolarity", description: "Formulated with sodium and potassium ratios that mimic human sweat, ensuring hypotonic absorption that rehydrates cells faster than water alone.", icon: "droplet" }
    ],
    nutrition: [
      { nutrient: 'Energy', perServe: '335kJ / 80kcal', per100: '1675kJ' },
      { nutrient: 'Protein', perServe: '6.5 g', per100: '32.5 g' },
      { nutrient: 'Fat, Total', perServe: '1.5 g', per100: '7.5 g' },
      { nutrient: 'Sodium', perServe: '300 mg', per100: '1500 mg' },
      { nutrient: 'Magnesium', perServe: '300 mg', per100: '1500 mg' }
    ],
    ingredientsList: 'Amino acid mixture (sourced from hemp seed), bulk sweetener (xylitol), sweetener (sucralose), flaxseed powder, acai berry powder, flavouring (natural essence), docosahexaenoic acid (DHA), green tea extract, magnesium chloride, Celtic sea salt, potassium chloride, vitamin C, sodium citrate, magnesium citrate, potassium citrate, nicotinic acid, vitamin B6, vitamin B12.'
  },
  
  // --- ENERGIZE^ ---
  {
    id: 'energize-cair',
    range: 'Energize^',
    title: 'Energize^',
    subtitle: 'Tri-Action Energy System',
    description: 'Powered By Hemp. The only pre-workout that ignites, sustains, and repairs.',
    longDescription: "**Ignite. Sustain. Repair.**\n\nStandard pre-workouts are a debt you pay back later with a crash. Energize^ is built on our proprietary **Tri-Action Energy System**:\n\n1. **Ignite**: 200mg of natural Caffeine from Green Tea kicks you into gear immediately.\n2. **Sustain**: L-Theanine smoothes out the curve, keeping you dialed in without the jitters.\n3. **Repair**: Edestin protein from **Australian Hemp** starts the recovery process before you even finish your set.\n\nNo water needed. No mess. Just pure Australian power.",
    price: 40.00,
    format: '8 Pack (90g Pouches)',
    image: '/energize-lychee.png',
    // FLAVOUR NAMES UPDATED TO FILENAMES
    flavours: ['energize-lychee.png', 'energize-pineapple.png', 'energize-watermelon.png', 'energize-mango.png'],
    flavourImages: {
        'energize-lychee.png': '/energize-lychee.png',
        'energize-pineapple.png': '/energize-pineapple.png',
        'energize-watermelon.png': '/energize-watermelon.png',
        'energize-mango.png': '/energize-mango.png'
    },
    images: [
        '/energize-lychee.png',
        ph('Energize^\nBox Detail', '000000'),
        ph('Energize^\nGel Texture', 'fbbf24', '000000'),
        unsplash('1550989460-0adf9ea622e2') // Gym/Active
    ],
    tag: 'New Technology',
    goals: ['Energy', 'Focus'],
    flavorProfile: 'Tropical',
    usage: {
        when: '20-30 minutes before your session.',
        how: 'Squeeze pouch directly. No water needed.',
        proTip: 'Keep chilled for a refreshing kick.'
    },
    bundles: [
      { quantity: 1, label: 'Single Box', discount: 0 },
      { quantity: 2, label: 'Power Stack', discount: 10, saveText: 'Save 10%' },
    ],
    benefitDetails: [
        { title: "Tri-Action System", description: "Ignite, Sustain, Repair. The complete cycle.", icon: "zap" },
        { title: "Laser Focus", description: "L-Theanine prevents the jitters and locks you in.", icon: "brain" },
        { title: "Stomach Friendly", description: "Konjac jelly base digests easily during activity.", icon: "shield" },
        { title: "Muscle Support", description: "2.5g Hemp Protein Peptides + 1g Taurine.", icon: "muscle" }
    ],
    scienceBacked: [
        { title: "Tri-Action Energy Architecture", description: "Our proprietary blend sequences the release of active ingredients. Fast-acting Green Tea caffeine provides immediate torque, while L-Theanine buffers adenosine receptors to prevent the crash, all whilst Hemp Peptides trickle-feed amino acids.", icon: "zap" },
        { title: "Hemp Edestin Protein", description: "Sourced from Australian Hemp, Edestin is a globular protein highly compatible with the human body, providing immediate precursors for antibody production and tissue maintenance during stress.", icon: "leaf" },
        { title: "Vasodilation Matrix", description: "Citrulline Malate increases plasma arginine levels, boosting Nitric Oxide (NO) production for improved blood flow, oxygen delivery, and the signature 'pump'.", icon: "muscle" }
    ],
    nutrition: [
        { nutrient: 'Energy', perServe: '620kJ / 148kcal', per100: '690kJ' },
        { nutrient: 'Protein', perServe: '2.5 g', per100: '2.8 g' },
        { nutrient: 'Fat, Total', perServe: '0.3 g', per100: '0.3 g' },
        { nutrient: 'Carbohydrate', perServe: '31 g', per100: '34 g' },
        { nutrient: '– Sugars', perServe: '15 g', per100: '17 g' },
        { nutrient: 'Sodium', perServe: '150 mg', per100: '165 mg' },
        { nutrient: 'Caffeine', perServe: '200 mg', per100: '222 mg' }
    ],
    ingredientsList: 'Water, Konjac (Glucomannan) Jelly Base, Fruit Juice Concentrate, Cane Sugar, Hemp Protein Peptides (3%), Caffeine (from Green Tea and Guarana), Taurine, Citrulline Malate, L-Theanine, Rhodiola Extract, Black Pepper Extract, Electrolytes, Citric Acid, Sodium Citrate, Natural Flavours, Potassium Sorbate.'
  },

  // --- DRIP° ---
  {
    id: 'drip-daily',
    range: 'Drip°',
    title: 'Drip°',
    subtitle: 'Hemp Probiotic Soda',
    description: 'Powered by Hemp. Low sugar, high performance daily hydration.',
    longDescription: "**Hydration that actually absorbs.** Most sports drinks are just coloured sugar water that sits in your stomach. Drip° is a **precision-engineered hypotonic soda** that utilizes osmotic gradients to pull fluid into your bloodstream faster than water alone.\n\nInfused with **native Kakadu Plum** for oxidative support and **Bacillus Coagulans probiotics** to armor your gut against stress, it’s the daily hydration tool for the serious operator.",
    price: 35.00,
    format: '355ml Can x 12',
    image: '/drip-guava.png',
    // FLAVOUR NAMES UPDATED TO FILENAMES
    flavours: ['drip-guava.png', 'drip-passionfruit.png', 'drip-kakadu-plum.png', 'drip-lychee.png'],
    flavourImages: {
        'drip-guava.png': '/drip-guava.png',
        'drip-passionfruit.png': '/drip-passionfruit.png',
        'drip-kakadu-plum.png': '/drip-kakadu-plum.png',
        'drip-lychee.png': '/drip-lychee.png'
    },
    images: [
        '/drip-guava.png',
        ph('Drip°\nCan Detail', '38bdf8'),
        ph('Drip°\nPouring Shot', 'ffffff', '000000'),
        unsplash('1622483767028-3f66f32aef97') // Soda lifestyle
    ],
    goals: ['Hydration'],
    flavorProfile: 'Citrus',
    usage: {
        when: 'Anytime during the day.',
        how: 'Serve ice cold.',
        proTip: 'Great mid-afternoon pick-me-up.'
    },
    bundles: [
      { quantity: 1, label: '12 Pack', discount: 0 },
      { quantity: 2, label: '24 Pack', discount: 15, saveText: 'Save 15%' },
    ],
    benefitDetails: [
        { title: "Rapid Absorption", description: "Hypotonic formula for fast gastric emptying.", icon: "droplet" },
        { title: "Native Botanicals", description: "Kakadu Plum for Vitamin C.", icon: "leaf" },
        { title: "Gut Health", description: "Bacillus coagulans probiotic support.", icon: "shield" }
    ],
    scienceBacked: [
        { title: "Bacillus Coagulans GBI-30", description: "A spore-forming probiotic that survives gastric acid to colonize the gut, shown to increase protein absorption and reduce exercise-induced muscle damage.", icon: "shield" },
        { title: "Hypotonic Suspension", description: "Designed with a lower particle concentration than blood, utilizing the osmotic gradient to pull fluid rapidly across the intestinal wall for immediate systemic hydration.", icon: "droplet" },
        { title: "Kakadu Plum Antioxidants", description: "The world's highest natural source of Vitamin C, neutralizing free radicals generated during oxidative stress from high-intensity endurance efforts.", icon: "leaf" }
    ],
    nutrition: [
        { nutrient: 'Energy', perServe: '120kJ / 29cal', per100: '34kJ' },
        { nutrient: 'Carbohydrate', perServe: '5.0 g', per100: '1.4 g' },
        { nutrient: '– Sugars', perServe: '1.2 g', per100: '0.3 g' },
        { nutrient: 'Sodium', perServe: '15 mg', per100: '4 mg' },
        { nutrient: 'Vitamin C', perServe: '30 mg', per100: '8 mg' }
    ],
    ingredientsList: 'Carbonated Water, Inulin, Acacia Fibre, Cane Sugar, Natural Fruit Flavour, Hemp Seed Extract (0.08%), Citric Acid, Botanical Blend (Kudzu, Calendula, Rosemary), Vitamin C, Bacillus coagulans GBI-30 6086, Potassium Sorbate.'
  },

  // --- FUEL* ---
  {
    id: 'fuel-bar',
    range: 'Fuel*',
    title: 'Fuel*',
    subtitle: 'Hemp Protein Bar',
    description: 'Powered By Hemp. Whole food recovery snack. 10g Protein.',
    longDescription: "**Eat like you train.** When you’re deep in a training block, empty calories won't cut it. Fuel* is a dense, chewy **whole-food matrix** packing **10g of complete Hemp & Pea protein**.\n\nWe use **Macadamia Oil** for sustained satiety and **Chicory Root fiber** to keep your gut happy. It’s not a treat; it’s a tool to bridge the gap between sessions without the bloating.",
    price: 45.00,
    format: '12 Bars',
    image: ph('Fuel*\nPeanut Butter', 'a16207'),
    flavours: ['Peanut Butter Crunch', 'Choc Chip Cookie Dough', 'Salted Caramel', 'Coconut Macadamia'],
    flavourImages: {
        'Peanut Butter Crunch': ph('Fuel*\nPeanut Butter', 'd97706'),
        'Choc Chip Cookie Dough': ph('Fuel*\nCookie Dough', 'fcd34d', '000000'),
        'Salted Caramel': ph('Fuel*\nSalted Caramel', 'b45309'),
        'Coconut Macadamia': ph('Fuel*\nCoconut Mac', 'f1f5f9', '000000')
    },
    images: [
        ph('Fuel*\nPeanut Butter', 'd97706'),
        ph('Fuel*\nWrapper Detail', '3f2e18'),
        ph('Fuel*\nCross Section', 'a16207'),
        unsplash('1629008877496-8a7130b0d446') // Bar lifestyle
    ],
    goals: ['Recovery', 'Energy'],
    flavorProfile: 'Rich',
    usage: {
        when: 'Between meals or post-workout.',
        how: 'Unwrap and eat.',
        proTip: 'Keep in gym bag for emergencies.'
    },
    bundles: [
        { quantity: 1, label: 'Box', discount: 0 },
        { quantity: 3, label: 'Pantry Stash', discount: 20, saveText: 'Save 20%' }
    ],
    benefitDetails: [
        { title: "Complete Protein", description: "Hemp + Pea blend.", icon: "muscle" },
        { title: "Healthy Fats", description: "Macadamia oil for sustained satiety.", icon: "shield" },
        { title: "Gut Friendly", description: "Chicory root fibre for prebiotic support.", icon: "leaf" }
    ],
    scienceBacked: [
        { title: "Complete Amino Profile", description: "By combining Hemp (rich in Edestin) and Pea protein, we achieve a PDCAAS (Protein Digestibility Corrected Amino Acid Score) comparable to whey, delivering all 9 essential amino acids for muscle protein synthesis.", icon: "muscle" },
        { title: "Macadamia Monounsaturates", description: "Rich in palmitoleic acid (Omega-7), known to support insulin sensitivity and lipid metabolism, providing sustained fuel oxidation for long-duration efforts.", icon: "droplet" },
        { title: "Prebiotic Chicory Root", description: "Contains Inulin, a soluble fiber that ferments in the colon to produce Short Chain Fatty Acids (SCFAs), supporting gut mucosal integrity and immune function.", icon: "shield" }
    ],
    nutrition: [
        { nutrient: 'Energy', perServe: '760kJ / 182kcal', per100: '1900kJ' },
        { nutrient: 'Protein', perServe: '10.5 g', per100: '26 g' },
        { nutrient: 'Fat, Total', perServe: '7.0 g', per100: '17.5 g' },
        { nutrient: 'Carbohydrate', perServe: '13 g', per100: '32 g' },
        { nutrient: '– Sugars', perServe: '6.0 g', per100: '15 g' },
        { nutrient: 'Sodium', perServe: '120 mg', per100: '300 mg' }
    ],
    ingredientsList: 'Pea Protein Isolate, Hemp Protein Powder (20%), Rice Syrup, Chicory Root Fibre, Coconut Sugar, Macadamia Oil, Cocoa Powder, Sea Salt, Vitamin E Blend.'
  },

  // --- MERCH ---
  {
    id: 'merch-hoodie',
    range: 'Merch',
    title: 'Oversized Hemp Hoodie',
    subtitle: 'Limited Edition Drop',
    description: 'Heavyweight hemp blend. Boxy fit. Built for comfort.',
    longDescription: "**Wear the plant.**\n\nThis isn't your standard cheap promo gear. This is a heavyweight, 450gsm hoodie cut from a sustainable blend of **55% Industrial Hemp and 45% Organic Cotton**.\n\nFeaturing a dropped shoulder, boxy fit, and our signature puff-print logo on the back. It breathes better than cotton and gets softer with every wash.",
    price: 95.00,
    image: ph('Hoodie\nOff Black', '1d1d1f'),
    flavours: ['S', 'M', 'L', 'XL', 'XXL'], // Using flavours array for Sizes
    flavourImages: {
        'S': ph('Hoodie\nOff Black', '1d1d1f'),
        'M': ph('Hoodie\nOff Black', '1d1d1f'),
        'L': ph('Hoodie\nOff Black', '1d1d1f'),
        'XL': ph('Hoodie\nOff Black', '1d1d1f'),
        'XXL': ph('Hoodie\nOff Black', '1d1d1f')
    },
    images: [
        ph('Hoodie\nFront View', '1d1d1f'),
        ph('Hoodie\nBack Detail', '1d1d1f'),
        ph('Hoodie\nFabric Zoom', '2a2a2c')
    ],
    goals: ['Lifestyle'],
    usage: {
        when: 'Rest days.',
        how: 'Wash cold, hang dry.',
        proTip: 'Size up for extra baggy fit.'
    },
    benefitDetails: [
        { title: "Sustainable", description: "Hemp requires 50% less water than cotton.", icon: "leaf" },
        { title: "Durable", description: "450gsm heavyweight weave.", icon: "shield" },
        { title: "Breathable", description: "Natural thermoregulation.", icon: "shirt" as any }
    ],
    ingredientsList: '55% Industrial Hemp, 45% Organic Cotton. 450gsm French Terry.'
  },
  {
    id: 'merch-tee',
    range: 'Merch',
    title: 'Club Tee',
    subtitle: 'Everyday Essentials',
    description: 'Vintage wash. Puff print logo. 100% Cotton.',
    longDescription: "The new daily driver. A vintage-washed, slightly oversized tee featuring the Hi Yarndi 'Club' logo in raised puff print.\n\nPre-shrunk to minimize shrinkage and designed with a high neck rib for that premium streetwear silhouette.",
    price: 55.00,
    image: ph('Club Tee\nCream', 'f3f4f6', '000000'),
    flavours: ['S', 'M', 'L', 'XL'],
    images: [
        ph('Club Tee\nCream', 'f3f4f6', '000000'),
        ph('Club Tee\nBack Print', 'f3f4f6', '000000'),
        ph('Club Tee\nDetail', 'e5e7eb', '000000')
    ],
    goals: ['Lifestyle'],
    benefitDetails: [
        { title: "Boxy Fit", description: "Relaxed streetwear cut.", icon: "shirt" as any },
        { title: "Pre-Shrunk", description: "Maintains shape after washing.", icon: "shield" },
        { title: "Soft Touch", description: "Enzyme washed for softness.", icon: "leaf" }
    ],
    ingredientsList: '100% Cotton. 240gsm Single Jersey.'
  },
  {
    id: 'merch-cap',
    range: 'Merch',
    title: 'Corduroy Dad Cap',
    subtitle: 'Headwear',
    description: 'Unstructured 6-panel. Forest Green corduroy.',
    longDescription: "Low profile, unstructured 6-panel cap made from premium 8-wale corduroy. Features an embroidered 'H' logo on the front and adjustable brass slider at the back.\n\nOne size fits most.",
    price: 40.00,
    image: ph('Cap\nForest Green', '1d4f36'),
    flavours: ['One Size'],
    goals: ['Lifestyle'],
    benefitDetails: [
        { title: "Premium Fabric", description: "8-wale cotton corduroy.", icon: "leaf" },
        { title: "Adjustable", description: "Brass slider buckle.", icon: "scissors" as any },
        { title: "Sun Smart", description: "Curved peak for shade.", icon: "sun" as any }
    ],
    ingredientsList: '100% Cotton Corduroy.'
  },
  {
    id: 'merch-towel',
    range: 'Merch',
    title: 'Hemp Beach Towel',
    subtitle: 'Accessories',
    description: 'Quick dry. Sand free. Yarndi Camo print.',
    longDescription: "The ultimate beach companion. Made from a microfiber blend that repels sand and dries 3x faster than standard cotton towels.\n\nFeaturing our custom 'Yarndi Camo' print in greens and creams.",
    price: 60.00,
    image: ph('Towel\nCamo Print', 'a3e635', '000000'),
    flavours: ['One Size'],
    goals: ['Lifestyle'],
    benefitDetails: [
        { title: "Sand Free", description: "Shake it off instantly.", icon: "shield" },
        { title: "Quick Dry", description: "Dries 3x faster than cotton.", icon: "zap" },
        { title: "Large Size", description: "160cm x 80cm.", icon: "leaf" }
    ],
    ingredientsList: '80% Polyester, 20% Polyamide (Microfiber).'
  }
];

// --- COMPARISONS DATA ---
export const comparisons: ProductComparison[] = [
    {
        id: 'recovery',
        title: 'Recovery+',
        competitorLabel: 'Generic Electrolyte Powder',
        points: [
            { feature: 'Base Ingredient', us: 'Hemp Seed Oil (Omega 3&6)', them: 'Sugar / Dextrose', icon: 'leaf' },
            { feature: 'Magnesium Source', us: 'Magnesium Citrate (Bioavailable)', them: 'Magnesium Oxide (Cheap)', icon: 'zap' },
            { feature: 'Anti-Inflammatory', us: 'Yes (Natural Omegas)', them: 'No', icon: 'shield' },
            { feature: 'Sweetener', us: 'Xylitol & Stevia', them: 'Sucralose / Aspartame', icon: 'droplet' }
        ]
    },
    {
        id: 'energize',
        title: 'Energize^',
        competitorLabel: 'High-Stim Pre-Workout',
        points: [
            { feature: 'Energy System', us: 'Tri-Action (Ignite/Sustain/Repair)', them: 'Single Spike Caffeine', icon: 'zap' },
            { feature: 'Jitter Control', us: 'L-Theanine Added', them: 'None', icon: 'brain' },
            { feature: 'Gut Feel', us: 'Konjac Jelly (Soothing)', them: 'Acidic Liquid', icon: 'shield' },
            { feature: 'Crash', us: 'Minimal (Sustained Release)', them: 'High (Sugar Crash)', icon: 'zap' }
        ]
    },
    {
        id: 'drip',
        title: 'Drip°',
        competitorLabel: 'Commercial Sports Drink',
        points: [
            { feature: 'Sugar Per Serve', us: '1.2g', them: '20g+', icon: 'shield' },
            { feature: 'Functional Actives', us: 'Native Botanicals & Probiotics', them: 'None', icon: 'leaf' },
            { feature: 'Flavor Source', us: 'Real Fruit Extracts', them: 'Artificial Flavor #4', icon: 'droplet' },
            { feature: 'Electrolytes', us: 'Balanced Profile', them: 'Sodium Heavy', icon: 'zap' }
        ]
    },
    {
        id: 'fuel',
        title: 'Fuel*',
        competitorLabel: 'Average Protein Bar',
        points: [
            { feature: 'Texture', us: 'Chewy & Natural', them: 'Chalky / Dry', icon: 'shield' },
            { feature: 'Protein Source', us: 'Hemp + Pea', them: 'Cheap Whey Concentrate', icon: 'muscle' },
            { feature: 'Gut Health', us: 'Prebiotic Fibre Added', them: 'Sugar Alcohols (Bloating)', icon: 'leaf' },
            { feature: 'Ingredients', us: 'Whole Food', them: 'Chemical Binders', icon: 'leaf' }
        ]
    }
];

// --- REVIEWS DATA ---
export const reviews: Review[] = [
    { id: '1', user: 'Sarah M.', sport: 'CrossFit', rating: 5, comment: 'Finally a pre-workout that doesn’t make me itch. Energize^ is clean energy.', avatar: '' },
    { id: '2', user: 'Tom H.', sport: 'Rugby Union', rating: 5, comment: 'Recovery+ is a non-negotiable in my kit bag now. Taste is unreal.', avatar: '' },
    { id: '3', user: 'Jessica L.', sport: 'Marathon', rating: 4, comment: 'Love Drip for the long Sunday runs. No sugar crash.', avatar: '' }
];

export const productReviewsData: Review[] = [
    // Hoodie Reviews
    { id: 'h1', productId: 'merch-hoodie', user: 'Mike T.', rating: 5, date: '2 days ago', comment: 'Quality is insane. Heavyweight but breathes. Buying another color.', avatar: '', sport: 'Verified Buyer' },
    { id: 'h2', productId: 'merch-hoodie', user: 'Jenny L.', rating: 5, date: '1 week ago', comment: 'Super boxy fit which I love. Size down if you want it closer fitting though.', avatar: '', sport: 'Verified Buyer' },
    { id: 'h3', productId: 'merch-hoodie', user: 'Davey', rating: 4, date: '3 weeks ago', comment: 'Premium feel. Took a bit long to ship but worth the wait.', avatar: '', sport: 'Verified Buyer' },

    // Tee Reviews
    { id: 't1', productId: 'merch-tee', user: 'Sam K.', rating: 5, date: 'Yesterday', comment: 'Best fitting tee I own. The neck rib is tight and doesnt sag.', avatar: '', sport: 'Verified Buyer' },
    { id: 't2', productId: 'merch-tee', user: 'Alex R.', rating: 5, date: '4 days ago', comment: 'Vintage wash is perfect. Soft straight out of the bag.', avatar: '', sport: 'Verified Buyer' },

    // Cap Reviews
    { id: 'c1', productId: 'merch-cap', user: 'Chris P.', rating: 5, date: '2 weeks ago', comment: 'Corduroy feels lush. Nice deep green color.', avatar: '', sport: 'Verified Buyer' },

    // Towel Reviews
    { id: 'to1', productId: 'merch-towel', user: 'Lara B.', rating: 5, date: '1 month ago', comment: 'Actually repels sand like it says. Game changer for beach days.', avatar: '', sport: 'Verified Buyer' }
];


export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Plant-Based Performance: What Athletes Need to Know',
    category: 'Nutrition',
    excerpt: 'Why more pro athletes are ditching whey for hemp, and how it affects recovery times.',
    readTime: '4 min read',
    date: 'Oct 12, 2023',
    image: unsplash('1517836357463-d25dfeac3438')
  },
  {
    id: '2',
    title: 'Pre & Post-Workout Timing with Energize^',
    category: 'Performance',
    excerpt: 'Timing is everything. Here is how to structure your intake for a 6am session vs a 6pm session.',
    readTime: '3 min read',
    date: 'Nov 01, 2023',
    image: unsplash('1571019614242-c5c5dee9f50b')
  },
  {
    id: '3',
    title: 'Hydration Beyond Water: Why Drip° Matters',
    category: 'Science',
    excerpt: 'Water isnt enough when you are sweating heavy. Understanding osmolarity and absorption.',
    readTime: '5 min read',
    date: 'Nov 15, 2023',
    image: unsplash('1541534741688-6078c6bfb5c5')
  },
  {
    id: '4',
    title: 'Magnesium: The Missing Link in Your Recovery?',
    category: 'Nutrition',
    excerpt: 'Why 70% of athletes are deficient and how it impacts sleep and muscle function.',
    readTime: '6 min read',
    date: 'Dec 02, 2023',
    image: unsplash('1550989460-0adf9ea622e2')
  },
  {
    id: '5',
    title: 'The Science of "The Pump": Nitric Oxide Explained',
    category: 'Science',
    excerpt: 'How Citrulline Malate actually works to improve blood flow and nutrient delivery.',
    readTime: '4 min read',
    date: 'Dec 10, 2023',
    image: unsplash('1517836357463-d25dfeac3438')
  },
  {
    id: '6',
    title: 'Mental Resilience: Training the Mind for Ultra Endurance',
    category: 'Mindset',
    excerpt: 'Strategies from elite ultra-runners on breaking through the pain barrier.',
    readTime: '8 min read',
    date: 'Jan 05, 2024',
    image: unsplash('1486218119243-13e580fae731')
  }
];

export const athleteUseCases: UseCase[] = [
    {
        id: 'strength',
        title: 'Strength & Hypertrophy',
        description: 'For the gym-goers focused on building tissue and hitting PBs.',
        schedule: [
            { time: 'Pre-Workout', product: 'Energize^', note: 'Tri-Action system ignites focus 20 mins pre-lift.' },
            { time: 'Intra', product: 'Drip°', note: 'Sip throughout to maintain pump.' },
            { time: 'Post-Workout', product: 'Recovery+', note: 'Immediately after to spike repair.' }
        ]
    },
    {
        id: 'endurance',
        title: 'Endurance & Cardio',
        description: 'For runners, cyclists, and weekend long-haulers.',
        schedule: [
            { time: 'Pre-Run', product: 'Energize^', note: 'Sustained energy without stomach upset.' },
            { time: 'During', product: 'Drip°', note: 'Electrolyte replacement every 45 mins.' },
            { time: 'Recovery', product: 'Fuel*', note: 'Replenish glycogen and protein stores.' }
        ]
    },
    {
        id: 'team',
        title: 'Team Sports',
        description: 'Footy, Soccer, Netball. Stop-start intensity.',
        schedule: [
            { time: 'Warm Up', product: 'Energize^', note: 'Get the mind right before kickoff.' },
            { time: 'Halftime', product: 'Drip°', note: 'Rehydrate rapidly.' },
            { time: 'Post Game', product: 'Recovery+', note: 'Reduce next-day soreness.' }
        ]
    }
];

// --- REWARDS DATA ---
export const rewardsData: Reward[] = [
    { id: 'r1', title: '$10 Off Your Next Order', cost: 500, description: 'Get a $10 discount code for your next purchase over $50.', type: 'discount', code: 'YARNDI10-X8J2' },
    { id: 'r2', title: 'Free Shipping', cost: 300, description: 'Waive shipping fees on your next order.', type: 'shipping', code: 'FREESHIP-99' },
    { id: 'r3', title: 'Exclusive Crew Socks', cost: 1000, description: 'Limited edition Hi Yarndi crew socks (White/Green).', type: 'product', code: 'SOCKS-VIP' },
    { id: 'r4', title: '$25 Off Your Next Order', cost: 1200, description: 'Get a $25 discount code for your next purchase over $100.', type: 'discount', code: 'YARNDI25-K9L1' },
    { id: 'r5', title: 'Mystery Merch Item', cost: 2000, description: 'We will send you a random piece of unreleased gear.', type: 'product', code: 'MYSTERY-DROP' }
];

// --- CHALLENGES DATA ---
export const challengesData: Challenge[] = [
    { id: 'c1', title: 'Follow us on Instagram', description: 'Join the community @hi.yarndi', points: 50, icon: 'instagram', actionLabel: 'Follow' },
    { id: 'c2', title: 'Run 5km', description: 'Log a 5km run on Strava and tag us.', points: 100, icon: 'run', actionLabel: 'Connect Strava' },
    { id: 'c3', title: 'Leave a Review', description: 'Review a product you have purchased.', points: 150, icon: 'review', actionLabel: 'Write Review' },
    { id: 'c4', title: 'Refer a Friend', description: 'Give $10, Get $10 (and 200 points).', points: 200, icon: 'referral', actionLabel: 'Share Link' }
];
