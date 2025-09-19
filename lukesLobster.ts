import { FastFoodItem } from '../types';

const LUKES_LOBSTER_CATEGORIES = {
  "Signature Rolls": [
    { id: "lukes-lobster-roll", name: "Lobster Roll", calories: 320, description: "Maine lobster, lemon butter, seasoning" },
    { id: "lukes-crab-roll", name: "Crab Roll", calories: 290, description: "Jonah crab, lemon butter, seasoning" },
    { id: "lukes-shrimp-roll", name: "Shrimp Roll", calories: 280, description: "North Atlantic shrimp, lemon butter, seasoning" },
    { id: "lukes-combo-duo", name: "Luke's Duo", calories: 410, description: "Half lobster roll, half crab roll" },
    { id: "lukes-combo-trio", name: "Luke's Trio", calories: 520, description: "Half lobster, half crab, half shrimp rolls" }
  ],
  "Seasonal Specials": [
    { id: "lukes-lobster-grilled-cheese", name: "Lobster Grilled Cheese", calories: 580, description: "Lobster, gruyere cheese" },
    { id: "lukes-lobster-bisque", name: "Lobster Bisque", calories: 320, description: "Creamy lobster soup" },
    { id: "lukes-crab-grilled-cheese", name: "Crab Grilled Cheese", calories: 540, description: "Crab, gruyere cheese" }
  ],
  "Soups & Sides": [
    { id: "lukes-clam-chowder", name: "New England Clam Chowder", calories: 280, description: "Traditional creamy chowder" },
    { id: "lukes-lobster-mac", name: "Lobster Mac & Cheese", calories: 580, description: "Creamy mac with lobster chunks" },
    { id: "lukes-cape-cod-chips", name: "Cape Cod Chips", calories: 150, description: "Kettle-cooked potato chips" },
    { id: "lukes-coleslaw", name: "Coleslaw", calories: 120, description: "House-made slaw" },
    { id: "lukes-pickle", name: "Pickle", calories: 15, description: "Dill pickle spear" }
  ],
  "Salads": [
    { id: "lukes-lobster-salad", name: "Lobster Salad", calories: 280, description: "Mixed greens, lobster meat" },
    { id: "lukes-crab-salad", name: "Crab Salad", calories: 260, description: "Mixed greens, crab meat" },
    { id: "lukes-shrimp-salad", name: "Shrimp Salad", calories: 240, description: "Mixed greens, shrimp" }
  ],
  "Beverages": [
    { id: "lukes-maine-root-soda", name: "Maine Root Soda", calories: 140, description: "Organic soda" },
    { id: "lukes-iced-tea", name: "Iced Tea", calories: 0, description: "Unsweetened" },
    { id: "lukes-lemonade", name: "Lemonade", calories: 120, description: "Fresh-squeezed" }
  ]
};

export const lukesLobsterItems: FastFoodItem[] = Object.values(LUKES_LOBSTER_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Luke's Lobster",
      item: item.name,
      calories: item.calories,
      category: Object.entries(LUKES_LOBSTER_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );