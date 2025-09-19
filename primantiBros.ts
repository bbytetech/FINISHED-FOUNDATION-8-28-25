import { FastFoodItem } from '../types';

// Export categories for menu organization
const PRIMANTI_BROS_CATEGORIES = {
  "Almost Famous Sandwiches": [
    { id: "primanti-cap-egg", name: "Capicola & Egg", calories: 880, description: "Capicola, egg, coleslaw, fries, tomato" },
    { id: "primanti-pastrami", name: "Pitts-burger & Cheese", calories: 960, description: "Beef patty, cheese, coleslaw, fries, tomato" },
    { id: "primanti-corned-beef", name: "Corned Beef & Cheese", calories: 840, description: "Corned beef, cheese, coleslaw, fries, tomato" },
    { id: "primanti-italian", name: "Italian", calories: 890, description: "Italian meats, cheese, coleslaw, fries, tomato" },
    { id: "primanti-roast-beef", name: "Roast Beef & Cheese", calories: 820, description: "Roast beef, cheese, coleslaw, fries, tomato" },
    { id: "primanti-turkey", name: "Turkey & Cheese", calories: 760, description: "Turkey, cheese, coleslaw, fries, tomato" },
    { id: "primanti-kielbasa", name: "Kielbasa & Cheese", calories: 920, description: "Kielbasa, cheese, coleslaw, fries, tomato" },
    { id: "primanti-fish", name: "Fish & Cheese", calories: 780, description: "Fish, cheese, coleslaw, fries, tomato" }
  ],
  "Specialty Sandwiches": [
    { id: "primanti-double-meat", name: "Double Meat & Cheese", calories: 1180, description: "Double portion of meat, cheese, coleslaw, fries, tomato" },
    { id: "primanti-bacon-egg", name: "Bacon & Egg", calories: 840, description: "Bacon, egg, coleslaw, fries, tomato" },
    { id: "primanti-knockwurst", name: "Knockwurst & Cheese", calories: 890, description: "Knockwurst, cheese, coleslaw, fries, tomato" }
  ],
  "Pittsburgh Sides": [
    { id: "primanti-fries", name: "Fresh Cut Fries", calories: 380, description: "Hand-cut daily" },
    { id: "primanti-onion-rings", name: "Onion Rings", calories: 420, description: "Beer-battered and golden fried" },
    { id: "primanti-cheese-fries", name: "Cheese Fries", calories: 520, description: "Topped with melted Whiz" },
    { id: "primanti-pierogies", name: "Pierogies", calories: 440, description: "Traditional potato pierogies" }
  ]
};

// Transform categories into a flat array for the menu
export const primantiBrosItems: FastFoodItem[] = Object.values(PRIMANTI_BROS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Primanti Brothers",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PRIMANTI_BROS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );