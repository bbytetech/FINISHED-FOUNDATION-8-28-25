import { FastFoodItem } from '../types';

// Export categories for menu organization
const JIMS_STEAKS_CATEGORIES = {
  "Jim's Classics": [
    { id: "jims-classic", name: "Jim's Classic Cheesesteak", calories: 870, description: "Rib-eye steak, melted American cheese, and sautéed onions" },
    { id: "jims-loaded-mushroom", name: "Loaded Mushroom Cheesesteak", calories: 920, description: "Steak with extra mushrooms, provolone, and garlic butter" },
    { id: "jims-garlic-parm", name: "Garlic Parmesan Cheesesteak", calories: 890, description: "Cheesesteak drizzled with parmesan garlic aioli" },
    { id: "jims-buffalo-chicken", name: "Buffalo Chicken Cheesesteak", calories: 840, description: "Chicken cheesesteak with spicy buffalo sauce and blue cheese crumbles" }
  ],
  "Philly Style Classics": [
    { id: "jims-whiz", name: "Cheesesteak with Whiz", calories: 850, description: "Classic with Cheese Whiz" },
    { id: "jims-american", name: "Cheesesteak with American", calories: 830, description: "Classic with American cheese" },
    { id: "jims-provolone", name: "Cheesesteak with Provolone", calories: 820, description: "Classic with sharp provolone" }
  ],
  "Jim's Specialties": [
    { id: "jims-pizza", name: "Pizza Steak", calories: 910, description: "With marinara and melted mozzarella" },
    { id: "jims-mushroom", name: "Mushroom Steak", calories: 890, description: "With sautéed mushrooms" },
    { id: "jims-pepper", name: "Pepper Steak", calories: 870, description: "With grilled peppers" },
    { id: "jims-buffalo", name: "Buffalo Chicken Cheesesteak", calories: 920, description: "With buffalo sauce and blue cheese" }
  ],
  "South Street Sides": [
    { id: "jims-fries", name: "Fresh Cut Fries", calories: 380, description: "Hand-cut daily" },
    { id: "jims-onion-rings", name: "Onion Rings", calories: 420, description: "Golden fried onion rings" },
    { id: "jims-cheese-fries", name: "Cheese Fries", calories: 520, description: "Topped with melted Whiz" },
    { id: "jims-pierogies", name: "Pierogies", calories: 440, description: "Traditional potato pierogies" }
  ]
};

export const jimsSteaksItems: FastFoodItem[] = Object.values(JIMS_STEAKS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Jim's Steaks",
      item: item.name,
      calories: item.calories,
      category: Object.entries(JIMS_STEAKS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );