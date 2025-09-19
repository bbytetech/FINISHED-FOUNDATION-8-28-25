import { FastFoodItem } from '../types';

const QDOBA_CATEGORIES = {
  "Signature Entrees & Bowls": [
    { id: "qdoba-chicken-bowl", name: "Grilled Chicken Bowl", calories: 640, description: "Grilled adobo chicken with rice and beans" },
    { id: "qdoba-steak-bowl", name: "Grilled Steak Bowl", calories: 890, description: "Grilled steak with rice and beans" },
    { id: "qdoba-impossible-bowl", name: "Impossible Bowl", calories: 720, description: "Plant-based protein bowl" },
    { id: "qdoba-mexican-cauliflower", name: "Mexican Cauliflower Mash Bowl", calories: 580, description: "Low-carb cauliflower bowl" }
  ],
  "Burritos & Wraps": [
    { id: "qdoba-chicken-burrito", name: "Grilled Chicken Burrito", calories: 1050, description: "Grilled chicken burrito" },
    { id: "qdoba-steak-burrito", name: "Grilled Steak Burrito", calories: 1120, description: "Grilled steak burrito" },
    { id: "qdoba-impossible-burrito", name: "Impossible Burrito", calories: 980, description: "Plant-based burrito" },
    { id: "qdoba-fajita-burrito", name: "Fajita Veggie Burrito", calories: 890, description: "Veggie burrito" }
  ],
  "Street Tacos": [
    { id: "qdoba-chicken-tacos", name: "Grilled Chicken Tacos (3)", calories: 450, description: "Street-style chicken tacos" },
    { id: "qdoba-steak-tacos", name: "Grilled Steak Tacos (3)", calories: 480, description: "Street-style steak tacos" },
    { id: "qdoba-impossible-tacos", name: "Impossible Tacos (3)", calories: 420, description: "Plant-based street tacos" }
  ],
  "Loaded Nachos": [
    { id: "qdoba-chicken-nachos", name: "Chicken Nachos", calories: 1180, description: "Loaded chicken nachos" },
    { id: "qdoba-steak-nachos", name: "Steak Nachos", calories: 1240, description: "Loaded steak nachos" },
    { id: "qdoba-impossible-nachos", name: "Impossible Nachos", calories: 1140, description: "Plant-based loaded nachos" }
  ],
  "Sides & Add-ons": [
    { id: "qdoba-chips-queso", name: "Chips & 3-Cheese Queso", calories: 840, description: "Fresh chips with queso" },
    { id: "qdoba-chips-guac", name: "Chips & Guacamole", calories: 800, description: "Fresh chips with guacamole" },
    { id: "qdoba-rice-brown", name: "Brown Rice", calories: 210, description: "Cilantro-lime brown rice" },
    { id: "qdoba-rice-white", name: "White Rice", calories: 210, description: "Cilantro-lime white rice" },
    { id: "qdoba-beans-black", name: "Black Beans", calories: 130, description: "Seasoned black beans" },
    { id: "qdoba-beans-pinto", name: "Pinto Beans", calories: 130, description: "Seasoned pinto beans" }
  ]
};

export const qdobaItems: FastFoodItem[] = Object.values(QDOBA_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Qdoba",
      item: item.name,
      calories: item.calories,
      category: Object.entries(QDOBA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );