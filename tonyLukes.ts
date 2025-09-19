import { FastFoodItem } from '../types';

// Export categories for menu organization
const TONY_LUKES_CATEGORIES = {
  "Tony Luke's Originals": [
    { id: "tl-classic", name: "Tony Luke's Classic Cheesesteak", calories: 880, description: "Steak with provolone and sautéed onions" },
    { id: "tl-roast-pork", name: "Roast Pork & Provolone", calories: 820, description: "A Philly favorite with slow-roasted pork and sharp provolone" },
    { id: "tl-italian", name: "Italian Cheesesteak", calories: 940, description: "Steak with sautéed onions, peppers, and marinara sauce" },
    { id: "tl-buffalo-ranch", name: "Buffalo Ranch Chicken Cheesesteak", calories: 890, description: "Chicken, buffalo sauce, ranch, and crispy onions" }
  ],
  "Old School Philly": [
    { id: "tl-whiz", name: "Cheesesteak with Whiz", calories: 910, description: "Classic with Cheese Whiz" },
    { id: "tl-american", name: "Cheesesteak with American", calories: 890, description: "Classic with American cheese" },
    { id: "tl-provolone", name: "Cheesesteak with Provolone", calories: 880, description: "Classic with sharp provolone" }
  ],
  "Tony's Specialties": [
    { id: "tl-chicken", name: "Chicken Cheesesteak", calories: 820, description: "Made with seasoned chicken breast" },
    { id: "tl-chicken-italian", name: "Chicken Italian", calories: 780, description: "Chicken with broccoli rabe and provolone" },
    { id: "tl-veggie", name: "Veggie Special", calories: 680, description: "Grilled vegetables with provolone" }
  ],
  "South Philly Favorites": [
    { id: "tl-fries", name: "Fresh-Cut Fries", calories: 380, description: "Hand-cut daily" },
    { id: "tl-cheese-fries", name: "Cheese Fries", calories: 520, description: "Topped with melted Whiz" },
    { id: "tl-onion-rings", name: "Onion Rings", calories: 420, description: "Golden fried onion rings" },
    { id: "tl-broccoli-rabe", name: "Sautéed Broccoli Rabe", calories: 120, description: "Classic Italian style" },
    { id: "tl-long-hots", name: "Long Hot Peppers", calories: 45, description: "Spicy Italian long hot peppers" }
  ]
};

export const tonyLukesItems: FastFoodItem[] = Object.values(TONY_LUKES_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Tony Luke's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(TONY_LUKES_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );