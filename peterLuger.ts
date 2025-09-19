import { FastFoodItem } from '../types';

const PETER_LUGER_CATEGORIES = {
  "USDA Prime Steaks": [
    { id: "pl-porterhouse-2", name: "Porterhouse for Two", calories: 1840, description: "Dry-aged USDA Prime" },
    { id: "pl-porterhouse-3", name: "Porterhouse for Three", calories: 2760, description: "Dry-aged USDA Prime" },
    { id: "pl-porterhouse-4", name: "Porterhouse for Four", calories: 3680, description: "Dry-aged USDA Prime" },
    { id: "pl-ribeye", name: "Ribeye Steak", calories: 1240, description: "Dry-aged USDA Prime" },
    { id: "pl-lamb-chops", name: "Lamb Chops", calories: 960, description: "Premium lamb" }
  ],
  "Appetizers & Starters": [
    { id: "pl-bacon", name: "Sizzling Bacon", calories: 320, description: "Extra thick-cut bacon" },
    { id: "pl-tomatoes", name: "Sliced Tomatoes & Onions", calories: 120, description: "Fresh beefsteak tomatoes" },
    { id: "pl-shrimp", name: "Jumbo Shrimp Cocktail", calories: 240, description: "With cocktail sauce" }
  ],
  "Sides & Accompaniments": [
    { id: "pl-potatoes", name: "German Fried Potatoes", calories: 460, description: "Crispy potatoes" },
    { id: "pl-spinach", name: "Creamed Spinach", calories: 380, description: "House specialty" },
    { id: "pl-asparagus", name: "Grilled Asparagus", calories: 140, description: "Seasonal asparagus" }
  ],
  "House Desserts": [
    { id: "pl-sundae", name: "Holy Cow Hot Fudge Sundae", calories: 890, description: "With homemade schlag" },
    { id: "pl-cheesecake", name: "New York Cheesecake", calories: 680, description: "Classic NY style" }
  ]
};

export const peterLugerItems: FastFoodItem[] = Object.values(PETER_LUGER_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Peter Luger Steakhouse",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PETER_LUGER_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );