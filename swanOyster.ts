import { FastFoodItem } from '../types';

const SWAN_OYSTER_CATEGORIES = {
  "Raw Bar Classics": [
    { id: "swan-oysters", name: "Oysters on the Half Shell (6)", calories: 120, description: "Daily selection, mignonette" },
    { id: "swan-clams", name: "Clams on the Half Shell (6)", calories: 100, description: "Littleneck clams" },
    { id: "swan-combo", name: "Combination Plate", calories: 280, description: "Oysters, clams, shrimp" },
    { id: "swan-shrimp-cocktail", name: "Shrimp Cocktail", calories: 180, description: "Poached shrimp, cocktail sauce" }
  ],
  "Dungeness Crab Specialties": [
    { id: "swan-crab-whole", name: "Whole Dungeness Crab", calories: 420, description: "Cracked, cocktail sauce, mayo" },
    { id: "swan-crab-cocktail", name: "Crab Cocktail", calories: 240, description: "Dungeness crab meat, cocktail sauce" },
    { id: "swan-crab-louis", name: "Crab Louis", calories: 380, description: "Dungeness crab, louis dressing, lettuce" },
    { id: "swan-crab-salad", name: "Crab Salad", calories: 320, description: "Dungeness crab meat, mayo" }
  ],
  "Seafood Specialties": [
    { id: "swan-smoked-salmon", name: "Smoked Salmon", calories: 280, description: "House-smoked, capers, onions" },
    { id: "swan-salmon-plate", name: "Salmon Plate", calories: 320, description: "Smoked salmon, capers, onions, toast" },
    { id: "swan-combo-salad", name: "Combination Seafood Salad", calories: 340, description: "Shrimp, crab, louis dressing" },
    { id: "swan-prawn-salad", name: "Bay Shrimp Salad", calories: 260, description: "Bay shrimp, louis dressing" }
  ],
  "Soups & Sides": [
    { id: "swan-clam-chowder", name: "Clam Chowder", calories: 320, description: "New England style" },
    { id: "swan-crab-chowder", name: "Crab Chowder", calories: 340, description: "Creamy with Dungeness crab" },
    { id: "swan-sourdough", name: "Sourdough Bread", calories: 180, description: "San Francisco sourdough" },
    { id: "swan-coleslaw", name: "Coleslaw", calories: 160, description: "House-made" }
  ],
  "Beverages": [
    { id: "swan-beer", name: "Anchor Steam Beer", calories: 180, description: "San Francisco classic" },
    { id: "swan-wine", name: "House White Wine", calories: 120, description: "By the glass" }
  ]
};

export const swanOysterItems: FastFoodItem[] = Object.values(SWAN_OYSTER_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Swan Oyster Depot",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SWAN_OYSTER_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );