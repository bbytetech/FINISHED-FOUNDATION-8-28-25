import { FastFoodItem } from '../types';

// Export categories for menu organization
const KONA_GRILL_CATEGORIES = {
  appetizers: [
    { id: "kona-potstickers", name: "Pork & Shrimp Potstickers", calories: 420 },
    { id: "kona-lettuce-wraps", name: "Chicken Lettuce Wraps", calories: 580 },
    { id: "kona-calamari", name: "Spicy Calamari", calories: 740 },
    { id: "kona-avocado-egg-rolls", name: "Avocado Egg Rolls", calories: 620 },
    { id: "kona-edamame", name: "Edamame", calories: 180 },
    { id: "kona-miso-soup", name: "Miso Soup", calories: 120 },
    { id: "kona-sashimi", name: "Yellowtail Sashimi", calories: 220 }
  ],
  sushi_nigiri: [
    { id: "kona-tuna-nigiri", name: "Tuna Nigiri (2 pc)", calories: 120 },
    { id: "kona-salmon-nigiri", name: "Salmon Nigiri (2 pc)", calories: 140 },
    { id: "kona-yellowtail-nigiri", name: "Yellowtail Nigiri (2 pc)", calories: 130 },
    { id: "kona-eel-nigiri", name: "Eel Nigiri (2 pc)", calories: 160 }
  ],
  traditional_rolls: [
    { id: "kona-california", name: "California Roll", calories: 320 },
    { id: "kona-spicy-tuna", name: "Spicy Tuna Roll", calories: 290 },
    { id: "kona-philadelphia", name: "Philadelphia Roll", calories: 380 },
    { id: "kona-yellowtail-roll", name: "Yellowtail Scallion Roll", calories: 260 }
  ],
  specialty_rolls: [
    { id: "kona-picasso", name: "Picasso Roll", calories: 580 },
    { id: "kona-vegas", name: "Las Vegas Roll", calories: 540 },
    { id: "kona-rainbow", name: "Rainbow Roll", calories: 470 },
    { id: "kona-dragon", name: "Dragon Roll", calories: 520 },
    { id: "kona-spider", name: "Spider Roll", calories: 480 },
    { id: "kona-emperor", name: "Emperor Roll", calories: 620 },
    { id: "kona-voodoo", name: "Voodoo Roll", calories: 580 }
  ],
  steaks_chops: [
    { id: "kona-ribeye", name: "Ribeye Steak", calories: 1140 },
    { id: "kona-filet", name: "Filet Mignon", calories: 840 },
    { id: "kona-ny-strip", name: "New York Strip", calories: 920 }
  ],
  seafood: [
    { id: "kona-miso-salmon", name: "Miso-Sake Sea Bass", calories: 780 },
    { id: "kona-seared-tuna", name: "Seared Tuna", calories: 480 },
    { id: "kona-macadamia-mahi", name: "Macadamia Nut Crusted Mahi", calories: 720 }
  ],
  signature_entrees: [
    { id: "kona-macadamia-chicken", name: "Macadamia Nut Chicken", calories: 890 },
    { id: "kona-pad-thai", name: "Pad Thai Noodles", calories: 840 },
    { id: "kona-korean-beef", name: "Korean Style Beef", calories: 890 }
  ],
  salads_soups: [
    { id: "kona-oriental", name: "Oriental Salad", calories: 440 },
    { id: "kona-caesar", name: "Kona Caesar", calories: 380 },
    { id: "kona-seared-tuna-salad", name: "Seared Tuna Salad", calories: 480 },
    { id: "kona-miso-soup", name: "Miso Soup", calories: 120 }
  ],
  sides: [
    { id: "kona-fried-rice", name: "Fried Rice", calories: 320 },
    { id: "kona-white-rice", name: "White Rice", calories: 180 },
    { id: "kona-asparagus", name: "Sautéed Asparagus", calories: 120 },
    { id: "kona-seasonal-veggies", name: "Seasonal Vegetables", calories: 110 },
    { id: "kona-brussels", name: "Crispy Brussels Sprouts", calories: 240 }
  ],
  desserts: [
    { id: "kona-butter-cake", name: "Butter Cake", calories: 1180 },
    { id: "kona-carrot", name: "Carrot Cake", calories: 940 },
    { id: "kona-creme-brulee", name: "Crème Brûlée", calories: 580 },
    { id: "kona-passion-creme", name: "Passion Fruit Crème Brûlée", calories: 620 }
  ]
};

// Transform categories into a flat array for the menu
export const konaGrillItems: FastFoodItem[] = Object.values(KONA_GRILL_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Kona Grill",
      item: item.name,
      calories: item.calories
    }))
  );