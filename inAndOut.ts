import { FastFoodItem } from '../types';

const IN_AND_OUT_CATEGORIES = {
  "Signature Burgers": [
    { id: "ino-hamburger", name: "Hamburger", calories: 390 },
    { id: "ino-cheeseburger", name: "Cheeseburger", calories: 480 },
    { id: "ino-double-double", name: "Double-Double", calories: 670 }
  ],
  "Not-So-Secret Menu": [
    { id: "ino-3x3", name: "3x3 (Triple-Triple)", calories: 860 },
    { id: "ino-4x4", name: "4x4 (Quad-Quad)", calories: 1050 },
    { id: "ino-protein", name: "Protein Style (Lettuce Wrap)", calories: 240 },
    { id: "ino-animal", name: "Animal Style Burger", calories: 520 },
    { id: "ino-grilled-cheese", name: "Grilled Cheese", calories: 370 },
    { id: "ino-flying-dutchman", name: "Flying Dutchman", calories: 320 }
  ],
  "Fresh Cut Fries": [
    { id: "ino-fries", name: "French Fries", calories: 370 },
    { id: "ino-animal-fries", name: "Animal Style Fries", calories: 750 },
    { id: "ino-cheese-fries", name: "Cheese Fries", calories: 480 }
  ],
  "Hand-Spun Shakes": [
    { id: "ino-shake-chocolate", name: "Chocolate Shake", calories: 590 },
    { id: "ino-shake-vanilla", name: "Vanilla Shake", calories: 580 },
    { id: "ino-shake-strawberry", name: "Strawberry Shake", calories: 590 }
  ],
  "Beverages": [
    { id: "ino-soda", name: "Fountain Drink", calories: 150 },
    { id: "ino-coffee", name: "Coffee", calories: 0 },
    { id: "ino-milk", name: "Milk", calories: 120 },
    { id: "ino-pink-lemonade", name: "Pink Lemonade", calories: 160 }
  ]
};

// Transform categories into a flat array for the menu
export const inAndOutItems: FastFoodItem[] = Object.values(IN_AND_OUT_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "In-N-Out",
      item: item.name,
      calories: item.calories,
      category: Object.entries(IN_AND_OUT_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );