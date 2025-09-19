import { FastFoodItem } from '../types';

// Export categories for menu organization
const JOES_KC_CATEGORIES = {
  "BBQ Plates": [
    { id: "joes-kc-z-man", name: "Z-Man Plate", calories: 950 },
    { id: "joes-kc-burnt-ends", name: "Burnt Ends Plate", calories: 890 },
    { id: "joes-kc-ribs-full", name: "Full Slab Ribs", calories: 1240 },
    { id: "joes-kc-ribs-half", name: "Half Slab Ribs", calories: 720 },
    { id: "joes-kc-brisket", name: "Sliced Brisket Plate", calories: 780 },
    { id: "joes-kc-pulled-pork", name: "Pulled Pork Plate", calories: 680 },
    { id: "joes-kc-chicken", name: "Smoked Chicken (Half)", calories: 540 }
  ],
  "Sandwiches": [
    { id: "joes-kc-z-man-sandwich", name: "Z-Man Sandwich", calories: 780 },
    { id: "joes-kc-brisket-sandwich", name: "Brisket Sandwich", calories: 620 },
    { id: "joes-kc-pulled-pork-sandwich", name: "Pulled Pork Sandwich", calories: 580 },
    { id: "joes-kc-turkey-sandwich", name: "Smoked Turkey Sandwich", calories: 420 },
    { id: "joes-kc-sausage-sandwich", name: "Smoked Sausage Sandwich", calories: 640 }
  ],
  "Sides": [
    { id: "joes-kc-fries", name: "French Fries", calories: 380 },
    { id: "joes-kc-beans", name: "BBQ Beans", calories: 260 },
    { id: "joes-kc-slaw", name: "Coleslaw", calories: 180 },
    { id: "joes-kc-potato-salad", name: "Potato Salad", calories: 240 },
    { id: "joes-kc-dirty-rice", name: "Dirty Rice", calories: 320 },
    { id: "joes-kc-cornbread", name: "Cornbread", calories: 220 }
  ],
  "Combo Platters": [
    { id: "joes-kc-combo-2meat", name: "Two Meat Combo", calories: 1180 },
    { id: "joes-kc-combo-3meat", name: "Three Meat Combo", calories: 1480 },
    { id: "joes-kc-combo-sampler", name: "Joe's KC Sampler", calories: 1680 }
  ]
};

export const joesKcItems: FastFoodItem[] = Object.values(JOES_KC_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Joe's Kansas City BBQ",
      item: item.name,
      calories: item.calories,
      category: Object.entries(JOES_KC_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );