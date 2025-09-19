import { FastFoodItem } from '../types';

const HOG_ISLAND_CATEGORIES = {
  "Fresh Oysters": [
    { id: "hog-sweetwater", name: "Sweetwater Oysters (6)", calories: 120, description: "Hog Island's own farm-raised oysters" },
    { id: "hog-kumamoto", name: "Kumamoto Oysters (6)", calories: 120, description: "Small, sweet Pacific oysters" },
    { id: "hog-atlantic", name: "Atlantic Oysters (6)", calories: 120, description: "East coast selection" },
    { id: "hog-mixed-dozen", name: "Mixed Dozen Oysters", calories: 240, description: "Chef's selection of 12 oysters" }
  ],
  "Hog Island Favorites": [
    { id: "hog-clam-chowder", name: "Clam Chowder", calories: 320, description: "Manila clams, bacon, potatoes, cream" },
    { id: "hog-grilled-cheese", name: "Hog Island Grilled Cheese", calories: 580, description: "Fromage blanc, Gruyère, Cowgirl Creamery cheese" },
    { id: "hog-steamers", name: "Steamers", calories: 340, description: "Manila clams, white wine, garlic butter" },
    { id: "hog-oyster-stew", name: "Oyster Stew", calories: 380, description: "Cream, leeks, potatoes, bacon" }
  ],
  "Seafood Entrees": [
    { id: "hog-fish-tacos", name: "Fish Tacos", calories: 480, description: "Daily catch, cabbage slaw, avocado" },
    { id: "hog-crab-roll", name: "Dungeness Crab Roll", calories: 520, description: "Lemon aioli, butter toasted roll" },
    { id: "hog-seafood-stew", name: "Seafood Stew", calories: 580, description: "Tomato broth, local catch, shellfish" },
    { id: "hog-fish-chips", name: "Fish & Chips", calories: 720, description: "Beer battered local fish, tartar sauce" }
  ],
  "Small Plates": [
    { id: "hog-ceviche", name: "Local Fish Ceviche", calories: 240, description: "Citrus, avocado, tortilla chips" },
    { id: "hog-shrimp-cocktail", name: "Shrimp Cocktail", calories: 180, description: "Poached gulf shrimp, cocktail sauce" },
    { id: "hog-mussels", name: "Steamed Mussels", calories: 320, description: "White wine, garlic, herbs" },
    { id: "hog-poke", name: "Tuna Poke", calories: 280, description: "Soy, sesame, avocado, seaweed" }
  ],
  "Salads": [
    { id: "hog-little-gem", name: "Little Gem Salad", calories: 240, description: "Radish, herbs, buttermilk dressing" },
    { id: "hog-beet-salad", name: "Beet & Citrus Salad", calories: 280, description: "Goat cheese, pistachios, citrus vinaigrette" }
  ],
  "Sides": [
    { id: "hog-fries", name: "French Fries", calories: 320, description: "House-made aioli" },
    { id: "hog-coleslaw", name: "Coleslaw", calories: 180, description: "Cabbage, carrots, apple cider vinaigrette" },
    { id: "hog-sourdough", name: "Sourdough Bread", calories: 220, description: "Acme Bread Company" }
  ]
};

export const hogIslandItems: FastFoodItem[] = Object.values(HOG_ISLAND_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Hog Island Oyster Co.",
      item: item.name,
      calories: item.calories,
      category: Object.entries(HOG_ISLAND_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );