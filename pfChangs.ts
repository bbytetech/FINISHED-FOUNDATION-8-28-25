import { FastFoodItem } from '../types';

// Export categories for menu organization
export const PF_CHANGS_CATEGORIES = {
  "Chang's Starters": [
    { id: "pf-lettuce-wraps", name: "Asian Chicken Lettuce Wraps", calories: 580 },
    { id: "pf-dynamite-shrimp", name: "Dynamite Shrimp", calories: 560 },
    { id: "pf-factory-nachos", name: "Factory Nachos", calories: 1840 },
    { id: "pf-fried-mac", name: "Fried Mac and Cheese", calories: 1060 }
  ],
  "Signature Noodles & Rice": [
    { id: "pf-pad-thai", name: "Pad Thai", calories: 940 },
    { id: "pf-lo-mein", name: "Lo Mein", calories: 880 },
    { id: "pf-dan-dan", name: "Dan Dan Noodles", calories: 920 },
    { id: "pf-korean-noodles", name: "Korean Glass Noodles", calories: 840 },
    { id: "pf-cauliflower-rice", name: "Cauliflower Rice Bowl", calories: 580 }
  ],
  "Asian-Inspired Salads": [
    { id: "pf-asian-chopped", name: "Asian Chopped Chicken Salad", calories: 520 },
    { id: "pf-mandarin-crunch", name: "Mandarin Crunch Salad", calories: 480 },
    { id: "pf-ginger-broccoli", name: "Ginger Broccoli Chicken Salad", calories: 440 }
  ],
  "Sushi Rolls": [
    { id: "pf-spicy-tuna", name: "Spicy Tuna Roll", calories: 460 },
    { id: "pf-california", name: "California Roll", calories: 380 },
    { id: "pf-tempura-roll", name: "Tempura Shrimp Roll", calories: 490 }
  ],
  "Sides & Add-Ons": [
    { id: "pf-white-rice", name: "Steamed White Rice", calories: 210 },
    { id: "pf-brown-rice", name: "Steamed Brown Rice", calories: 190 },
    { id: "pf-fried-rice", name: "Fried Rice", calories: 340 },
    { id: "pf-mixed-veggies", name: "Mixed Vegetables", calories: 120 }
  ]
};

// Transform categories into a flat array for the menu
export const pfChangsItems: FastFoodItem[] = Object.values(PF_CHANGS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "P.F. Chang's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PF_CHANGS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );