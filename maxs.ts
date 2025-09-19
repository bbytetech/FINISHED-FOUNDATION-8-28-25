import { FastFoodItem } from '../types';

// Export categories for menu organization
const MAXS_STEAKS_CATEGORIES = {
  "Max's Famous Footlongs": [
    { id: "maxs-footlong", name: "Max's Foot-Long Cheesesteak", calories: 1240, description: "Massive steak sandwich with American cheese and onions" },
    { id: "maxs-double-meat", name: "Double Meat Cheesesteak", calories: 1380, description: "Extra portion of steak and melted provolone" },
    { id: "maxs-pepper-deluxe", name: "Pepper Steak Deluxe", calories: 980, description: "Cheesesteak packed with extra grilled peppers" },
    { id: "maxs-honey-bbq", name: "Honey BBQ Chicken Cheesesteak", calories: 920, description: "Chicken, BBQ sauce, and melted cheddar" }
  ],
  "North Philly Style": [
    { id: "maxs-whiz", name: "Cheesesteak with Whiz", calories: 910, description: "Classic with Cheese Whiz" },
    { id: "maxs-american", name: "Cheesesteak with American", calories: 890, description: "Classic with American cheese" },
    { id: "maxs-provolone", name: "Cheesesteak with Provolone", calories: 880, description: "Classic with sharp provolone" }
  ],
  "Max's Specialties": [
    { id: "maxs-chicken", name: "Chicken Cheesesteak", calories: 820, description: "Made with seasoned chicken breast" },
    { id: "maxs-chicken-italian", name: "Chicken Italian", calories: 780, description: "Chicken with broccoli rabe and provolone" },
    { id: "maxs-veggie", name: "Veggie Special", calories: 680, description: "Grilled vegetables with provolone" }
  ],
  "North Philly Sides": [
    { id: "maxs-fries", name: "Fresh-Cut Fries", calories: 380, description: "Hand-cut daily" },
    { id: "maxs-cheese-fries", name: "Cheese Fries", calories: 520, description: "Topped with melted Whiz" },
    { id: "maxs-onion-rings", name: "Onion Rings", calories: 420, description: "Golden fried onion rings" },
    { id: "maxs-broccoli-rabe", name: "Sautéed Broccoli Rabe", calories: 120, description: "Classic Italian style" },
    { id: "maxs-long-hots", name: "Long Hot Peppers", calories: 45, description: "Spicy Italian long hot peppers" }
  ]
};

export const maxsSteaksItems: FastFoodItem[] = Object.values(MAXS_STEAKS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Max's Steaks",
      item: item.name,
      calories: item.calories,
      category: Object.entries(MAXS_STEAKS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );