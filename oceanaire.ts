import { FastFoodItem } from '../types';

const OCEANAIRE_CATEGORIES = {
  "Fresh Catch": [
    { id: "oceanaire-chilean-sea-bass", name: "Chilean Sea Bass", calories: 480, description: "Miso glazed, bok choy" },
    { id: "oceanaire-halibut", name: "Alaskan Halibut", calories: 420, description: "Pan-seared, lemon butter" },
    { id: "oceanaire-swordfish", name: "Grilled Swordfish", calories: 460, description: "Pineapple salsa" },
    { id: "oceanaire-salmon", name: "Atlantic Salmon", calories: 540, description: "Mustard crusted" },
    { id: "oceanaire-tuna", name: "Yellowfin Tuna", calories: 380, description: "Sesame seared, ginger soy" }
  ],
  "Shellfish & Lobster": [
    { id: "oceanaire-lobster-tail", name: "Maine Lobster Tail", calories: 340, description: "Broiled, drawn butter" },
    { id: "oceanaire-king-crab", name: "Alaskan King Crab Legs", calories: 320, description: "Steamed, drawn butter" },
    { id: "oceanaire-scallops", name: "Jumbo Sea Scallops", calories: 420, description: "Pan-seared, bacon vinaigrette" },
    { id: "oceanaire-shrimp-scampi", name: "Shrimp Scampi", calories: 480, description: "Garlic, white wine, butter" }
  ],
  "Starters": [
    { id: "oceanaire-crab-cakes", name: "Jumbo Lump Crab Cakes", calories: 460, description: "Mustard sauce" },
    { id: "oceanaire-calamari", name: "Salt & Pepper Calamari", calories: 420, description: "Sweet chili sauce" },
    { id: "oceanaire-shrimp-cocktail", name: "Colossal Shrimp Cocktail", calories: 180, description: "Atomic horseradish" },
    { id: "oceanaire-oysters", name: "Oysters on the Half Shell (6)", calories: 120, description: "Seasonal selection" },
    { id: "oceanaire-tuna-tartare", name: "Tuna Tartare", calories: 320, description: "Avocado, soy, ginger" }
  ],
  "Soups & Salads": [
    { id: "oceanaire-clam-chowder", name: "New England Clam Chowder", calories: 380, description: "Bacon, potatoes, cream" },
    { id: "oceanaire-lobster-bisque", name: "Lobster Bisque", calories: 420, description: "Brandy cream" },
    { id: "oceanaire-caesar", name: "Caesar Salad", calories: 340, description: "Romaine, parmesan, croutons" },
    { id: "oceanaire-wedge", name: "Iceberg Wedge", calories: 380, description: "Blue cheese, bacon, tomato" }
  ],
  "Sides": [
    { id: "oceanaire-truffle-fries", name: "Truffle Fries", calories: 420, description: "Parmesan, herbs" },
    { id: "oceanaire-asparagus", name: "Grilled Asparagus", calories: 140, description: "Hollandaise sauce" },
    { id: "oceanaire-potatoes", name: "Smashed Potatoes", calories: 320, description: "Roasted garlic" },
    { id: "oceanaire-spinach", name: "Creamed Spinach", calories: 380, description: "Parmesan cream" },
    { id: "oceanaire-mushrooms", name: "Sautéed Mushrooms", calories: 240, description: "Garlic butter" }
  ],
  "Desserts": [
    { id: "oceanaire-cheesecake", name: "Baked Alaska", calories: 580, description: "Chocolate, vanilla, meringue" },
    { id: "oceanaire-key-lime", name: "Key Lime Pie", calories: 480, description: "Graham cracker crust" },
    { id: "oceanaire-chocolate-cake", name: "Chocolate Layer Cake", calories: 620, description: "Ganache frosting" }
  ]
};

export const oceanaireItems: FastFoodItem[] = Object.values(OCEANAIRE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Oceanaire Seafood Room",
      item: item.name,
      calories: item.calories,
      category: Object.entries(OCEANAIRE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );