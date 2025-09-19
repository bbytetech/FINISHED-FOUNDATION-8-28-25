import { FastFoodItem } from '../types';

// Export categories for menu organization
const GENOS_STEAKS_CATEGORIES = {
  "Geno's Famous Steaks": [
    { id: "genos-signature", name: "Geno's Signature Cheesesteak", calories: 890, description: "Steak, onions, and cheese Whiz on a toasted roll" },
    { id: "genos-chipotle", name: "Chipotle Cheesesteak", calories: 920, description: "Smoky chipotle sauce with provolone and steak" },
    { id: "genos-egg-rolls", name: "Cheesesteak Egg Rolls (3)", calories: 680, description: "Crispy egg rolls filled with steak, cheese, and onions" },
    { id: "genos-loaded-fries", name: "Cheesesteak Fries", calories: 780, description: "Crispy fries loaded with cheesesteak toppings" }
  ],
  "Philly Style Classics": [
    { id: "genos-whiz", name: "Cheesesteak with Whiz", calories: 850, description: "Classic with Cheese Whiz" },
    { id: "genos-american", name: "Cheesesteak with American", calories: 830, description: "Classic with American cheese" },
    { id: "genos-provolone", name: "Cheesesteak with Provolone", calories: 820, description: "Classic with sharp provolone" }
  ],
  "Geno's Specialties": [
    { id: "genos-pizza", name: "Pizza Steak", calories: 910, description: "With marinara and melted mozzarella" },
    { id: "genos-pepper", name: "Pepper Cheesesteak", calories: 860, description: "Loaded with sweet and hot peppers" },
    { id: "genos-hoagie", name: "Italian Hoagie", calories: 780, description: "Italian meats, sharp provolone, lettuce, tomato, onion" }
  ],
  "Ridge Ave Sides": [
    { id: "genos-fries", name: "Fresh-Cut Fries", calories: 380, description: "Hand-cut daily" },
    { id: "genos-onion-rings", name: "Crispy Onion Rings", calories: 420, description: "Beer-battered and golden fried" },
    { id: "genos-cheese-fries", name: "Cheese Fries", calories: 520, description: "Topped with melted Whiz" },
    { id: "genos-peppers", name: "Hot Cherry Peppers", calories: 45, description: "Spicy pickled peppers" }
  ]
};

export const genosSteaksItems: FastFoodItem[] = Object.values(GENOS_STEAKS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Geno's Steaks",
      item: item.name,
      calories: item.calories,
      category: Object.entries(GENOS_STEAKS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );