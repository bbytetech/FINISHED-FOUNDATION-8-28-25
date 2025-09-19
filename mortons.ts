import { FastFoodItem } from '../types';

const MORTONS_CATEGORIES = {
  "USDA Prime Steaks": [
    { id: "mortons-filet", name: "Center-Cut Filet Mignon (8 oz)", calories: 460, description: "Most tender cut" },
    { id: "mortons-ribeye", name: "Bone-In Ribeye (22 oz)", calories: 1370, description: "Well-marbled" },
    { id: "mortons-ny-strip", name: "NY Strip (16 oz)", calories: 1010, description: "Center cut" },
    { id: "mortons-porterhouse", name: "Porterhouse for Two", calories: 1620, description: "Best of both worlds" },
    { id: "mortons-prime-rib", name: "Prime Rib (12 oz)", calories: 930, description: "Slow-roasted" }
  ],
  "Fresh Seafood": [
    { id: "mortons-lobster", name: "Live Maine Lobster", calories: 440, description: "Market fresh" },
    { id: "mortons-sea-bass", name: "Chilean Sea Bass", calories: 620, description: "Miso marinade" },
    { id: "mortons-salmon", name: "Honey-Glazed Salmon", calories: 580, description: "Atlantic salmon" }
  ],
  "Morton's Classics": [
    { id: "mortons-lamb-chops", name: "Double Cut Lamb Chops", calories: 860, description: "New Zealand lamb" },
    { id: "mortons-veal-chop", name: "Veal Chop", calories: 780, description: "Center cut" },
    { id: "mortons-chicken", name: "Double Breast of Chicken", calories: 520, description: "Free range" }
  ],
  "Starters & Soups": [
    { id: "mortons-shrimp", name: "Jumbo Shrimp Cocktail", calories: 220, description: "Signature cocktail sauce" },
    { id: "mortons-crab-cake", name: "Jumbo Lump Crab Cake", calories: 460, description: "Pan seared" },
    { id: "mortons-lobster-bisque", name: "Lobster Bisque", calories: 320, description: "Brandy cream" }
  ],
  "Fresh Salads": [
    { id: "mortons-caesar", name: "Morton's Caesar", calories: 280, description: "Classic preparation" },
    { id: "mortons-wedge", name: "Center-Cut Iceberg", calories: 260, description: "Blue cheese dressing" },
    { id: "mortons-chopped", name: "Chopped Spinach", calories: 240, description: "Warm bacon dressing" }
  ],
  "Signature Sides": [
    { id: "mortons-potatoes", name: "Sour Cream Mashed Potatoes", calories: 440, description: "Garlic infused" },
    { id: "mortons-asparagus", name: "Grilled Asparagus", calories: 110, description: "Jumbo spears" },
    { id: "mortons-mushrooms", name: "Sautéed Wild Mushrooms", calories: 220, description: "Seasonal selection" },
    { id: "mortons-spinach", name: "Creamed Spinach", calories: 440, description: "Morton's classic" },
    { id: "mortons-brussels", name: "Brussels Sprouts", calories: 240, description: "Bacon & shallots" }
  ],
  "Decadent Desserts": [
    { id: "mortons-souffle", name: "Grand Marnier Soufflé", calories: 820, description: "Made to order" },
    { id: "mortons-chocolate-cake", name: "Chocolate Layer Cake", calories: 780, description: "Seven layers" },
    { id: "mortons-key-lime", name: "Key Lime Pie", calories: 580, description: "Florida style" }
  ]
};

export const mortonsItems: FastFoodItem[] = Object.values(MORTONS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Morton's Steakhouse",
      item: item.name,
      calories: item.calories,
      category: Object.entries(MORTONS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );