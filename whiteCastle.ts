import { FastFoodItem } from '../types';

// Export categories for menu organization
const WHITE_CASTLE_CATEGORIES = {
  sliders: [
    { id: "wc-original", name: "Original Slider", calories: 140 },
    { id: "wc-cheese", name: "Cheese Slider", calories: 170 },
    { id: "wc-bacon-cheese", name: "Bacon Cheese Slider", calories: 190 },
    { id: "wc-double-cheese", name: "Double Cheese Slider", calories: 240 },
    { id: "wc-jalapeno", name: "Jalapeño Cheese Slider", calories: 180 },
    { id: "wc-chicken-breast", name: "Chicken Breast Slider", calories: 160 },
    { id: "wc-chicken-ring", name: "Chicken Ring Slider", calories: 200 },
    { id: "wc-fish", name: "Fish Slider", calories: 210 },
    { id: "wc-impossible", name: "Impossible Slider", calories: 240 }
  ],
  sides: [
    { id: "wc-fries-small", name: "French Fries (Small)", calories: 290 },
    { id: "wc-fries-medium", name: "French Fries (Medium)", calories: 410 },
    { id: "wc-onion-rings", name: "Onion Rings", calories: 320 },
    { id: "wc-chicken-rings-6", name: "Chicken Rings (6 pc)", calories: 330 },
    { id: "wc-chicken-rings-12", name: "Chicken Rings (12 pc)", calories: 660 },
    { id: "wc-mozzarella", name: "Mozzarella Sticks (4 pc)", calories: 290 }
  ],
  breakfast: [
    { id: "wc-breakfast-original", name: "Original Breakfast Slider", calories: 180 },
    { id: "wc-breakfast-sausage", name: "Sausage, Egg & Cheese Slider", calories: 300 },
    { id: "wc-breakfast-bacon", name: "Bacon, Egg & Cheese Slider", calories: 240 },
    { id: "wc-belgian-waffle", name: "Belgian Waffle Slider", calories: 290 }
  ],
  desserts: [
    { id: "wc-brownie", name: "Fudge-Dipped Brownie", calories: 310 },
    { id: "wc-pie-apple", name: "Apple Pie", calories: 270 },
    { id: "wc-shake", name: "Vanilla Shake", calories: 610 }
  ]
};

// Transform categories into a flat array for the menu
export const whiteCastleItems: FastFoodItem[] = Object.values(WHITE_CASTLE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "White Castle",
      item: item.name,
      calories: item.calories
    }))
  );