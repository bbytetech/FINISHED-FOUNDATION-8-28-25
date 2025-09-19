import { FastFoodItem } from '../types';

// Export categories for menu organization
const FIREHOUSE_SUBS_CATEGORIES = {
  "Hot Specialty Subs": [
    { id: "fh-hook-ladder", name: "Hook & Ladder Sub (Medium)", calories: 850 },
    { id: "fh-italian", name: "Italian Sub (Medium)", calories: 880 },
    { id: "fh-meatball", name: "Meatball Sub (Medium)", calories: 910 },
    { id: "fh-club", name: "Club on a Sub (Medium)", calories: 840 },
    { id: "fh-engineers", name: "Engineer's Sub (Medium)", calories: 760 },
    { id: "fh-smokehouse", name: "Smokehouse Beef & Cheddar (Medium)", calories: 840 }
  ],
  "Cold Subs": [
    { id: "fh-tuna", name: "Tuna Sub (Medium)", calories: 720 },
    { id: "fh-turkey", name: "Turkey Sub (Medium)", calories: 560 },
    { id: "fh-turkey-bacon", name: "Turkey Bacon Ranch (Medium)", calories: 840 }
  ],
  "Under 500 Calories": [
    { id: "fh-turkey-small", name: "Turkey Sub (Small)", calories: 380 },
    { id: "fh-hook-ladder-small", name: "Hook & Ladder Sub (Small)", calories: 490 }
  ],
  "Sides & Extras": [
    { id: "fh-chips", name: "Lay's Classic Chips", calories: 150 },
    { id: "fh-chili", name: "Firehouse Chili", calories: 280 }
  ],
  "Sweet Treats": [
    { id: "fh-cookie", name: "Chocolate Chip Cookie", calories: 210 },
    { id: "fh-brownie", name: "Brownie", calories: 350 }
  ]
};

// Transform categories into a flat array for the menu
export const firehouseSubsItems: FastFoodItem[] = Object.values(FIREHOUSE_SUBS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Firehouse Subs",
      item: item.name,
      calories: item.calories,
      category: Object.entries(FIREHOUSE_SUBS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );