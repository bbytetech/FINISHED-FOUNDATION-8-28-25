import { FastFoodItem } from '../types';

// Export categories for menu organization
const ARTHUR_BRYANTS_CATEGORIES = {
  "Signature BBQ": [
    { id: "ab-beef", name: "Beef Sandwich", calories: 640, description: "Signature smoked beef" },
    { id: "ab-pork", name: "Pulled Pork Sandwich", calories: 580, description: "Hand-pulled smoked pork" },
    { id: "ab-turkey", name: "Smoked Turkey Sandwich", calories: 420, description: "House-smoked turkey breast" },
    { id: "ab-ham", name: "Ham Sandwich", calories: 480, description: "Smoked ham" }
  ],
  "BBQ Plates": [
    { id: "ab-ribs", name: "Short End Ribs", calories: 890, description: "Tender smoked ribs" },
    { id: "ab-long-ribs", name: "Long End Ribs", calories: 920, description: "Full rack of ribs" },
    { id: "ab-burnt-ends", name: "Burnt Ends", calories: 780, description: "Kansas City specialty" }
  ],
  "KC Style Sides": [
    { id: "ab-fries", name: "French Fries", calories: 360, description: "Hand-cut fries" },
    { id: "ab-beans", name: "Baked Beans", calories: 240, description: "Slow-cooked beans" },
    { id: "ab-slaw", name: "Coleslaw", calories: 160, description: "Fresh-made slaw" }
  ]
};

export const arthurBryantsItems: FastFoodItem[] = Object.values(ARTHUR_BRYANTS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Arthur Bryant's BBQ",
      item: item.name,
      calories: item.calories,
      category: Object.entries(ARTHUR_BRYANTS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );