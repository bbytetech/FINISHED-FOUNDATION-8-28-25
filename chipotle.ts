import { FastFoodItem } from '../types';

const CHIPOTLE_CATEGORIES = {
  "Signature Bowls": [
    { id: "chipotle-chicken-bowl", name: "Chicken Bowl", calories: 630, description: "Grilled chicken with rice and beans" },
    { id: "chipotle-steak-bowl", name: "Grilled Steak Bowl", calories: 890, description: "Grilled steak with rice and beans" },
    { id: "chipotle-impossible-bowl", name: "Impossible Bowl", calories: 720, description: "Plant-based protein bowl" },
    { id: "chipotle-mexican-cauliflower", name: "Mexican Cauliflower Mash Bowl", calories: 580, description: "Low-carb cauliflower bowl" },
    { id: "chipotle-fajita-bowl", name: "Fajita Veggie Bowl", calories: 600, description: "Grilled peppers and onions" }
  ],
  "Burritos": [
    { id: "chipotle-chicken-burrito", name: "Chicken Burrito", calories: 1050, description: "Grilled chicken burrito" },
    { id: "chipotle-steak-burrito", name: "Grilled Steak Burrito", calories: 1120, description: "Grilled steak burrito" },
    { id: "chipotle-impossible-burrito", name: "Impossible Burrito", calories: 980, description: "Plant-based burrito" },
    { id: "chipotle-fajita-burrito", name: "Fajita Veggie Burrito", calories: 890, description: "Veggie burrito" }
  ],
  "Tacos": [
    { id: "chipotle-chicken-tacos", name: "Chicken Tacos (3)", calories: 450, description: "Grilled chicken tacos" },
    { id: "chipotle-steak-tacos", name: "Grilled Steak Tacos (3)", calories: 480, description: "Grilled steak tacos" },
    { id: "chipotle-impossible-tacos", name: "Impossible Tacos (3)", calories: 420, description: "Plant-based tacos" }
  ],
  "Quesadillas": [
    { id: "chipotle-chicken-quesadilla", name: "Chicken Quesadilla", calories: 1060, description: "Grilled chicken quesadilla" },
    { id: "chipotle-steak-quesadilla", name: "Steak Quesadilla", calories: 1090, description: "Grilled steak quesadilla" },
    { id: "chipotle-cheese-quesadilla", name: "3-Cheese Quesadilla", calories: 910, description: "Cheese blend quesadilla" }
  ],
  "Sides & Add-ons": [
    { id: "chipotle-chips-queso", name: "Chips & 3-Cheese Queso", calories: 840, description: "Fresh chips with queso" },
    { id: "chipotle-chips-guac", name: "Chips & Guacamole", calories: 800, description: "Fresh chips with guacamole" },
    { id: "chipotle-rice-brown", name: "Brown Rice", calories: 210, description: "Cilantro-lime brown rice" },
    { id: "chipotle-rice-white", name: "White Rice", calories: 210, description: "Cilantro-lime white rice" },
    { id: "chipotle-beans-black", name: "Black Beans", calories: 130, description: "Seasoned black beans" },
    { id: "chipotle-beans-pinto", name: "Pinto Beans", calories: 130, description: "Seasoned pinto beans" }
  ]
};

export const chipotleItems: FastFoodItem[] = Object.values(CHIPOTLE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Chipotle",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CHIPOTLE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );