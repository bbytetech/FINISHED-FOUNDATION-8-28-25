import { FastFoodItem } from '../types';

const CAPITAL_GRILLE_CATEGORIES = {
  "Grand Plateau Appetizers": [
    { id: "cg-shrimp-cocktail", name: "Colossal Shrimp Cocktail", calories: 220, description: "Jumbo shrimp with house-made cocktail sauce" },
    { id: "cg-crab-cake", name: "Jumbo Lump Crab Cakes", calories: 460, description: "Pan-seared with corn relish" },
    { id: "cg-calamari", name: "Pan-Fried Calamari", calories: 460, description: "With hot cherry peppers" },
    { id: "cg-oysters", name: "Fresh Oysters (6)", calories: 180, description: "East coast selection with mignonette" }
  ],
  "Dry Aged & Hand-Carved Steaks": [
    { id: "cg-filet", name: "Center-Cut Filet Mignon (10 oz)", calories: 460, description: "Most tender center-cut, dry aged 21 days" },
    { id: "cg-ribeye", name: "Bone-In Ribeye (22 oz)", calories: 1440, description: "40-day dry aged, well-marbled" },
    { id: "cg-ny-strip", name: "NY Strip (14 oz)", calories: 890, description: "Dry aged 21 days, center cut" },
    { id: "cg-porterhouse", name: "Porterhouse Steak", calories: 1580, description: "24 oz king cut, dry aged 21 days" },
    { id: "cg-wagyu", name: "Wagyu Strip", calories: 920, description: "Japanese A5 wagyu, limited availability" }
  ],
  "Fresh Caught Seafood": [
    { id: "cg-salmon", name: "Seared Salmon", calories: 540, description: "Citrus-glazed Atlantic salmon" },
    { id: "cg-sea-bass", name: "Pan-Seared Sea Bass", calories: 620, description: "Champagne truffle sauce" },
    { id: "cg-lobster", name: "Live Maine Lobster", calories: 420, description: "2-5 lb selection, steamed or butter-poached" },
    { id: "cg-tuna", name: "Seared Tuna", calories: 480, description: "Sesame seared, ginger rice" }
  ],
  "Artisanal Soups & Salads": [
    { id: "cg-caesar", name: "Morton's Caesar", calories: 280, description: "Classic tableside preparation" },
    { id: "cg-wedge", name: "Center Cut Iceberg", calories: 260, description: "Smoked bacon, blue cheese dressing" },
    { id: "cg-spinach", name: "Chopped Spinach", calories: 240, description: "Warm bacon vinaigrette" }
  ],
  "Signature Accompaniments": [
    { id: "cg-potatoes", name: "Au Gratin Potatoes", calories: 480, description: "Six cheese blend, crispy crust" },
    { id: "cg-mushrooms", name: "Roasted Wild Mushrooms", calories: 220, description: "Seasonal selection, herbs" },
    { id: "cg-brussels", name: "Brussels Sprouts", calories: 260, description: "Bacon, aged balsamic" },
    { id: "cg-asparagus", name: "Grilled Jumbo Asparagus", calories: 110, description: "Hollandaise sauce" },
    { id: "cg-spinach", name: "Creamed Spinach", calories: 440, description: "Bechamel, nutmeg" }
  ],
  "Grand Finale Desserts": [
    { id: "cg-souffle", name: "Grand Marnier Soufflé", calories: 820, description: "Made to order, crème anglaise" },
    { id: "cg-chocolate-cake", name: "Flourless Chocolate Cake", calories: 780, description: "Raspberry sauce" },
    { id: "cg-creme-brulee", name: "Crème Brûlée", calories: 580, description: "Madagascar vanilla bean" }
  ]
};

export const capitalGrilleItems: FastFoodItem[] = Object.values(CAPITAL_GRILLE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "The Capital Grille",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CAPITAL_GRILLE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );