import { FastFoodItem } from '../types';

const CARLS_JR_CATEGORIES = {
  "Famous Star® Burgers": [
    { id: "cj-famous", name: "Famous Star", calories: 670, description: "Charbroiled beef patty, lettuce, tomato, onion, mayo, special sauce" },
    { id: "cj-super", name: "Super Star", calories: 920, description: "Double patty with cheese, lettuce, tomato, onion, mayo, special sauce" },
    { id: "cj-western", name: "Western Bacon Cheeseburger", calories: 850, description: "Charbroiled beef, bacon, onion rings, BBQ sauce" }
  ],
  "Charbroiled Classics": [
    { id: "cj-big-burger", name: "Big Hamburger", calories: 560, description: "Quarter-pound patty with classic toppings" },
    { id: "cj-big-hot-ham", name: "Big Hot Ham 'n' Cheese", calories: 680, description: "Sliced ham and melted cheese" }
  ],
  "Hand-Breaded Chicken": [
    { id: "cj-chicken", name: "Hand-Breaded Chicken Sandwich", calories: 690, description: "Crispy chicken breast with lettuce and mayo" },
    { id: "cj-spicy-chicken", name: "Spicy Chicken Sandwich", calories: 660, description: "Spicy crispy chicken with lettuce and mayo" }
  ],
  "Fresh-Cut Sides": [
    { id: "cj-fries-small", name: "French Fries (Small)", calories: 410, description: "Natural-cut french fries" },
    { id: "cj-fries-medium", name: "French Fries (Medium)", calories: 550, description: "Natural-cut french fries" }
  ]
};

export const carlsJrItems: FastFoodItem[] = Object.values(CARLS_JR_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Carl's Jr.",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CARLS_JR_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );