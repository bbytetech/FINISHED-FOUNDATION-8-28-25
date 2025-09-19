import { FastFoodItem } from '../types';

// Export categories for menu organization
const HOMETOWN_BBQ_CATEGORIES = {
  "Hometown Specialties": [
    { id: "hometown-brisket", name: "Beef Brisket (1/2 lb)", calories: 680, description: "USDA Prime smoked brisket" },
    { id: "hometown-pork", name: "Pulled Pork (1/2 lb)", calories: 490, description: "Hand-pulled smoked pork" },
    { id: "hometown-ribs", name: "Beef Ribs (1/2 lb)", calories: 820, description: "Massive smoked beef ribs" },
    { id: "hometown-turkey", name: "Smoked Turkey (1/2 lb)", calories: 290, description: "House-smoked turkey breast" },
    { id: "hometown-lamb", name: "Lamb Belly (1/2 lb)", calories: 740, description: "Signature smoked lamb" }
  ],
  "Brooklyn Sandwiches": [
    { id: "hometown-brisket-sandwich", name: "Brisket Sandwich", calories: 780, description: "Sliced brisket on brioche" },
    { id: "hometown-pork-sandwich", name: "Pulled Pork Sandwich", calories: 620, description: "Pulled pork on brioche" },
    { id: "hometown-chicken-sandwich", name: "Jerk Chicken Sandwich", calories: 580, description: "Caribbean style" }
  ],
  "Hometown Sides": [
    { id: "hometown-mac", name: "Queso Mac & Cheese", calories: 460, description: "Creamy queso mac" },
    { id: "hometown-beans", name: "Bourbon Baked Beans", calories: 310, description: "Bourbon-infused" },
    { id: "hometown-slaw", name: "Brooklyn Slaw", calories: 180, description: "House-made slaw" },
    { id: "hometown-cornbread", name: "Jalapeno Cornbread", calories: 260, description: "Sweet & spicy" },
    { id: "hometown-potato-salad", name: "Potato Salad", calories: 240, description: "Classic style" }
  ],
  "Family Style Feasts": [
    { id: "hometown-feast-4", name: "Family Feast (Feeds 4)", calories: 2400, description: "Family-sized portions" },
    { id: "hometown-feast-6", name: "Family Feast (Feeds 6)", calories: 3600, description: "Family-sized portions" },
    { id: "hometown-feast-8", name: "Family Feast (Feeds 8)", calories: 4800, description: "Family-sized portions" }
  ],
  "Brooklyn Sauces": [
    { id: "hometown-sticky", name: "Sticky Sweet Sauce", calories: 70, description: "House specialty" },
    { id: "hometown-spicy", name: "Spicy Red Sauce", calories: 45, description: "Hot pepper blend" },
    { id: "hometown-mustard", name: "Mustard BBQ Sauce", calories: 50, description: "Carolina style" }
  ]
};

export const hometownBbqItems: FastFoodItem[] = Object.values(HOMETOWN_BBQ_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Hometown BBQ Brooklyn",
      item: item.name,
      calories: item.calories,
      category: Object.entries(HOMETOWN_BBQ_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );