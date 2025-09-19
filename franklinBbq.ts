import { FastFoodItem } from '../types';

// Export categories for menu organization
const FRANKLIN_BBQ_CATEGORIES = {
  "Franklin's Famous Meats": [
    { id: "fb-brisket", name: "Brisket (1/2 lb)", calories: 640, description: "Award-winning slow-smoked brisket" },
    { id: "fb-ribs", name: "Pork Ribs (1/2 lb)", calories: 580, description: "Tender, perfectly smoked ribs" },
    { id: "fb-turkey", name: "Turkey (1/2 lb)", calories: 280, description: "Juicy smoked turkey breast" },
    { id: "fb-sausage", name: "Sausage Link", calories: 420, description: "House-made smoked sausage" },
    { id: "fb-pulled-pork", name: "Pulled Pork (1/2 lb)", calories: 460, description: "Hand-pulled smoked pork" }
  ],
  "Franklin's Sandwiches": [
    { id: "fb-brisket-sandwich", name: "Brisket Sandwich", calories: 780, description: "Sliced brisket on a fresh roll" },
    { id: "fb-pulled-sandwich", name: "Pulled Pork Sandwich", calories: 680, description: "Pulled pork piled high" },
    { id: "fb-turkey-sandwich", name: "Turkey Sandwich", calories: 520, description: "Sliced smoked turkey breast" }
  ],
  "Texas Style Sides": [
    { id: "fb-potato-salad", name: "Potato Salad", calories: 280, description: "Classic German-style potato salad" },
    { id: "fb-slaw", name: "Sweet & Tangy Slaw", calories: 180, description: "Fresh-made coleslaw" },
    { id: "fb-beans", name: "Pinto Beans", calories: 260, description: "Slow-cooked pinto beans" },
    { id: "fb-mac", name: "Mac & Cheese", calories: 440, description: "Creamy three-cheese mac" }
  ],
  "Family Style Feasts": [
    { id: "fb-family-brisket", name: "Family Brisket Pack", calories: 2400, description: "Feeds 4-6 people" },
    { id: "fb-family-mix", name: "Family Mixed Pack", calories: 2800, description: "Variety of meats" },
    { id: "fb-family-ribs", name: "Family Rib Pack", calories: 3200, description: "Full rack plus sides" }
  ],
  "House-Made Sauces": [
    { id: "fb-espresso", name: "Espresso BBQ Sauce", calories: 45, description: "Coffee-infused sauce" },
    { id: "fb-vinegar", name: "Vinegar Sauce", calories: 30, description: "Tangy vinegar-based" },
    { id: "fb-spicy", name: "Spicy BBQ Sauce", calories: 40, description: "Hot pepper blend" }
  ]
};

export const franklinBbqItems: FastFoodItem[] = Object.values(FRANKLIN_BBQ_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Franklin Barbecue",
      item: item.name,
      calories: item.calories,
      category: Object.entries(FRANKLIN_BBQ_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );