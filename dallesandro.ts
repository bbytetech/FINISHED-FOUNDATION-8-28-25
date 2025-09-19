import { FastFoodItem } from '../types';

// Export categories for menu organization
const DALLESANDRO_CATEGORIES = {
  "D'Alessandro's Classics": [
    { id: "dal-classic", name: "D'Alessandro's Classic Cheesesteak", calories: 870, description: "Rib-eye steak, melted American cheese, and sautéed onions" },
    { id: "dal-loaded-mushroom", name: "Loaded Mushroom Cheesesteak", calories: 920, description: "Steak with extra mushrooms, provolone, and garlic butter" },
    { id: "dal-garlic-parm", name: "Garlic Parmesan Cheesesteak", calories: 890, description: "Cheesesteak drizzled with parmesan garlic aioli" },
    { id: "dal-buffalo-chicken", name: "Buffalo Chicken Cheesesteak", calories: 840, description: "Chicken cheesesteak with spicy buffalo sauce and blue cheese crumbles" }
  ],
  "Philly Style Classics": [
    { id: "dal-whiz", name: "Cheesesteak with Whiz", calories: 850, description: "Classic with Cheese Whiz" },
    { id: "dal-american", name: "Cheesesteak with American", calories: 830, description: "Classic with American cheese" },
    { id: "dal-provolone", name: "Cheesesteak with Provolone", calories: 820, description: "Classic with sharp provolone" }
  ],
  "D'Alessandro's Specialties": [
    { id: "dal-pizza", name: "Pizza Steak", calories: 910, description: "With marinara and melted mozzarella" },
    { id: "dal-mushroom", name: "Mushroom Steak", calories: 890, description: "With sautéed mushrooms" },
    { id: "dal-pepper", name: "Pepper Steak", calories: 870, description: "With grilled peppers" },
    { id: "dal-buffalo", name: "Buffalo Chicken Cheesesteak", calories: 920, description: "With buffalo sauce and blue cheese" }
  ],
  "Ridge Ave Sides": [
    { id: "dal-fries", name: "Fresh Cut Fries", calories: 380, description: "Hand-cut daily" },
    { id: "dal-onion-rings", name: "Onion Rings", calories: 420, description: "Golden fried onion rings" },
    { id: "dal-cheese-fries", name: "Cheese Fries", calories: 520, description: "Topped with melted Whiz" },
    { id: "dal-pierogies", name: "Pierogies", calories: 440, description: "Traditional potato pierogies" }
  ]
};

export const dallesandroItems: FastFoodItem[] = Object.values(DALLESANDRO_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "D'Alessandro's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(DALLESANDRO_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );