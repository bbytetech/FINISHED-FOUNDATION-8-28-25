import { FastFoodItem } from '../types';

// Export categories for menu organization
const RAISING_CANES_CATEGORIES = {
  "The Box Combos": [
    { id: "canes-3finger", name: "3 Finger Combo", calories: 980 },
    { id: "canes-4finger", name: "4 Finger Combo", calories: 1120 },
    { id: "canes-caniac", name: "Caniac Combo (6 Fingers)", calories: 1440 },
    { id: "canes-kids", name: "Kids Combo (2 Fingers)", calories: 840 },
    { id: "canes-sandwich", name: "Sandwich Combo", calories: 980 },
    { id: "canes-box", name: "Box Combo (4 Fingers)", calories: 1120 }
  ],
  "Individual Items": [
    { id: "canes-finger", name: "Chicken Finger", calories: 120 },
    { id: "canes-sandwich-only", name: "Chicken Sandwich", calories: 710 },
    { id: "canes-sauce", name: "Cane's Sauce", calories: 140 }
  ],
  "Sides": [
    { id: "canes-fries-regular", name: "Crinkle-Cut Fries (Regular)", calories: 420 },
    { id: "canes-fries-large", name: "Crinkle-Cut Fries (Large)", calories: 580 },
    { id: "canes-toast", name: "Texas Toast", calories: 160 },
    { id: "canes-slaw", name: "Coleslaw", calories: 140 },
    { id: "canes-sauce-extra", name: "Extra Cane's Sauce", calories: 140 }
  ],
  "Beverages": [
    { id: "canes-lemonade", name: "Fresh Squeezed Lemonade (Regular)", calories: 220 },
    { id: "canes-lemonade-large", name: "Fresh Squeezed Lemonade (Large)", calories: 280 },
    { id: "canes-tea-sweet", name: "Sweet Tea (Regular)", calories: 110 },
    { id: "canes-tea-sweet-large", name: "Sweet Tea (Large)", calories: 140 },
    { id: "canes-tea-unsweet", name: "Unsweetened Tea (Regular)", calories: 0 },
    { id: "canes-tea-unsweet-large", name: "Unsweetened Tea (Large)", calories: 0 },
    { id: "canes-coke", name: "Coca-Cola (Regular)", calories: 180 },
    { id: "canes-coke-large", name: "Coca-Cola (Large)", calories: 240 },
    { id: "canes-sprite", name: "Sprite (Regular)", calories: 170 },
    { id: "canes-sprite-large", name: "Sprite (Large)", calories: 230 },
    { id: "canes-dr-pepper", name: "Dr Pepper (Regular)", calories: 180 },
    { id: "canes-dr-pepper-large", name: "Dr Pepper (Large)", calories: 240 }
  ],
  "Tailgates & Family Meals": [
    { id: "canes-20pc-fingerz", name: "20 Chicken Fingerz Family Pack", calories: 2200 },
    { id: "canes-30pc-fingerz", name: "30 Chicken Fingerz Family Pack", calories: 3300 },
    { id: "canes-40pc-fingerz", name: "40 Chicken Fingerz Family Pack", calories: 4400 },
    { id: "canes-25pc-wings", name: "25 Traditional Wings Family Pack", calories: 2350 },
    { id: "canes-50pc-wings", name: "50 Traditional Wings Family Pack", calories: 4700 }
  ]
};

// Transform categories into a flat array for the menu
export const raisingCanesItems: FastFoodItem[] = Object.values(RAISING_CANES_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Raising Cane's",
      item: item.name,
      calories: item.calories
    }))
  );