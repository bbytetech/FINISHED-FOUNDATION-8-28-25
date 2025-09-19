import { FastFoodItem } from '../types';

// Export categories for menu organization
const SALT_LICK_CATEGORIES = {
  "Salt Lick Specialties": [
    { id: "sl-brisket", name: "Brisket Plate", calories: 890, description: "Signature smoked brisket" },
    { id: "sl-ribs", name: "Pork Ribs Plate", calories: 920, description: "Famous Salt Lick ribs" },
    { id: "sl-turkey", name: "Turkey Plate", calories: 460, description: "Smoked turkey breast" },
    { id: "sl-sausage", name: "Sausage Plate", calories: 680, description: "House-made sausage" },
    { id: "sl-combo", name: "Family Style Combo", calories: 1240, description: "All-you-can-eat feast" }
  ],
  "Hill Country Sandwiches": [
    { id: "sl-brisket-sandwich", name: "Brisket Sandwich", calories: 720, description: "Sliced brisket on a bun" },
    { id: "sl-pulled-pork-sandwich", name: "Pulled Pork Sandwich", calories: 640, description: "Hand-pulled pork" },
    { id: "sl-turkey-sandwich", name: "Turkey Sandwich", calories: 480, description: "Smoked turkey breast" }
  ],
  "Texas Sides": [
    { id: "sl-potato-salad", name: "Potato Salad", calories: 240, description: "Mustard-based potato salad" },
    { id: "sl-coleslaw", name: "Coleslaw", calories: 180, description: "Creamy slaw" },
    { id: "sl-beans", name: "Baked Beans", calories: 260, description: "Pit-smoked beans" },
    { id: "sl-mac", name: "Mac & Cheese", calories: 420, description: "Creamy mac and cheese" }
  ],
  "Family Style Feasts": [
    { id: "sl-family-plate", name: "Family Style Plate", calories: 2400, description: "All-you-can-eat family style" },
    { id: "sl-family-platter", name: "Family Platter", calories: 3200, description: "Feeds 4-6 people" }
  ],
  "Salt Lick Sauces": [
    { id: "sl-original", name: "Original BBQ Sauce", calories: 60, description: "Classic sauce" },
    { id: "sl-spicy", name: "Spicy BBQ Sauce", calories: 60, description: "Spicy version" },
    { id: "sl-habanero", name: "Habanero Sauce", calories: 45, description: "Extra hot sauce" }
  ]
};

export const saltLickItems: FastFoodItem[] = Object.values(SALT_LICK_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "The Salt Lick BBQ",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SALT_LICK_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );