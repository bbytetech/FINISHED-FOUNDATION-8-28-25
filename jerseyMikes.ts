import { FastFoodItem } from '../types';

// Export categories for menu organization
const JERSEY_MIKES_CATEGORIES = {
  "Cold Subs": [
    { id: "jm-original-giant", name: "Original Italian (Giant)", calories: 1670 },
    { id: "jm-jersey-shore", name: "Jersey Shore's Favorite (Regular)", calories: 850 },
    { id: "jm-club-supreme", name: "Club Supreme (Regular)", calories: 760 },
    { id: "jm-turkey", name: "Turkey & Provolone (Regular)", calories: 670 },
    { id: "jm-roast-beef", name: "Roast Beef & Provolone (Regular)", calories: 690 },
    { id: "jm-tuna", name: "Tuna Fish (Regular)", calories: 840 },
    { id: "jm-blt", name: "BLT (Regular)", calories: 700 }
  ],
  "Hot Subs": [
    { id: "jm-philly-cheese", name: "Philly Cheesesteak (Regular)", calories: 890 },
    { id: "jm-chipotle-cheese", name: "Chipotle Cheesesteak (Regular)", calories: 920 },
    { id: "jm-buffalo-chicken", name: "Buffalo Chicken Cheese (Regular)", calories: 840 },
    { id: "jm-chicken-parm", name: "Chicken Parm (Regular)", calories: 860 },
    { id: "jm-grilled-pastrami", name: "Grilled Pastrami Reuben (Regular)", calories: 890 }
  ],
  "Fresh Wraps": [
    { id: "jm-turkey-wrap", name: "Turkey Breast Wrap", calories: 430 },
    { id: "jm-tuna-wrap", name: "Tuna Fish Wrap", calories: 510 },
    { id: "jm-grilled-veggie", name: "Grilled Veggie Wrap", calories: 330 },
    { id: "jm-club-wrap", name: "Club Supreme Wrap", calories: 440 }
  ],
  "Garden Fresh Salads": [
    { id: "jm-chicken-caesar", name: "Chicken Caesar Salad", calories: 410 },
    { id: "jm-chef-salad", name: "Chef Salad", calories: 380 },
    { id: "jm-garden-salad", name: "Garden Salad", calories: 140 }
  ],
  "Sides & Extras": [
    { id: "jm-chips", name: "Regular Chips", calories: 150 },
    { id: "jm-cookie", name: "Chocolate Chip Cookie", calories: 210 },
    { id: "jm-brownie", name: "Brownie", calories: 350 }
  ]
};

// Transform categories into a flat array for the menu
export const jerseyMikesItems: FastFoodItem[] = Object.values(JERSEY_MIKES_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Jersey Mike's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(JERSEY_MIKES_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );