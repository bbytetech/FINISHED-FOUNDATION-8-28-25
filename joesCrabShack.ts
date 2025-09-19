import { FastFoodItem } from '../types';

// Define categories for Joe's Crab Shack
const JOES_CRAB_SHACK_CATEGORIES = {
  "Steampot Feasts": [
    { id: "jcs-alaskan", name: "Alaskan Steampot", calories: 1240, description: "Snow crab with shrimp and corn" },
    { id: "jcs-dungeness", name: "Dungeness Crab Feast", calories: 1180, description: "Whole Dungeness crab" },
    { id: "jcs-queen", name: "Queen Crab Steampot", calories: 1320, description: "Queen crab legs and shrimp" }
  ],
  "Crab Buckets": [
    { id: "jcs-snow-crab", name: "Snow Crab Bucket", calories: 890, description: "1 lb snow crab legs" },
    { id: "jcs-king-crab", name: "King Crab Bucket", calories: 920, description: "1 lb king crab legs" },
    { id: "jcs-blue-crab", name: "Blue Crab Bucket", calories: 780, description: "6 whole blue crabs" }
  ],
  "Seafood Classics": [
    { id: "jcs-shrimp-scampi", name: "Shrimp Scampi", calories: 720, description: "Garlic butter shrimp" },
    { id: "jcs-coconut-shrimp", name: "Coconut Shrimp", calories: 680, description: "Sweet chili sauce" },
    { id: "jcs-fried-shrimp", name: "Fried Shrimp", calories: 780, description: "Hand-breaded shrimp" }
  ],
  "KC Style Sides": [
    { id: "jcs-fries", name: "French Fries", calories: 380, description: "Hand-cut fries" },
    { id: "jcs-beans", name: "Baked Beans", calories: 240, description: "Slow-cooked beans" },
    { id: "jcs-slaw", name: "Coleslaw", calories: 160, description: "Fresh-made slaw" }
  ]
};

export const joesCrabShackItems: FastFoodItem[] = Object.values(JOES_CRAB_SHACK_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Joe's Crab Shack",
      item: item.name,
      calories: item.calories,
      category: Object.entries(JOES_CRAB_SHACK_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );