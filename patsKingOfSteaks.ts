import { FastFoodItem } from '../types';

// Export categories for menu organization
const PATS_KING_OF_STEAKS_CATEGORIES = {
  "Pat's Famous Steaks": [
    { id: "pats-classic", name: "Pat's Original Cheesesteak", calories: 890, description: "The original Philly cheesesteak since 1930" },
    { id: "pats-pizza", name: "Pizza Steak", calories: 970, description: "Cheesesteak topped with marinara sauce and mozzarella" },
    { id: "pats-philly-taco", name: "Philly Taco", calories: 1240, description: "A cheesesteak wrapped inside a jumbo pizza slice" },
    { id: "pats-truffle", name: "Truffle Cheesesteak", calories: 980, description: "Premium rib-eye with Swiss cheese and truffle aioli" }
  ],
  "Classic Wit or Witout": [
    { id: "pats-whiz", name: "Cheesesteak with Whiz", calories: 920, description: "Classic with Cheese Whiz" },
    { id: "pats-american", name: "Cheesesteak with American", calories: 890, description: "Classic with American cheese" },
    { id: "pats-provolone", name: "Cheesesteak with Provolone", calories: 880, description: "Classic with sharp provolone" }
  ],
  "Pat's Specialties": [
    { id: "pats-mushroom", name: "Mushroom Cheesesteak", calories: 950, description: "With sautéed mushrooms" },
    { id: "pats-pepper", name: "Pepper Cheesesteak", calories: 910, description: "With grilled bell peppers" },
    { id: "pats-pizza-plain", name: "Pizza Plain", calories: 970, description: "Marinara and mozzarella" }
  ],
  "South Philly Sides": [
    { id: "pats-fries", name: "Fresh Cut Fries", calories: 370, description: "Hand-cut daily" },
    { id: "pats-onion-rings", name: "Onion Rings", calories: 410, description: "Crispy battered onion rings" },
    { id: "pats-cheese-fries", name: "Cheese Fries", calories: 520, description: "Topped with melted Whiz" }
  ]
};

export const patsKingOfSteaksItems: FastFoodItem[] = Object.values(PATS_KING_OF_STEAKS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Pat's King of Steaks",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PATS_KING_OF_STEAKS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );