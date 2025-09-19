import { FastFoodItem } from '../types';

const FAMOUS_DAVES_CATEGORIES = {
  "Award-Winning BBQ": [
    { id: "fd-st-louis-ribs", name: "St. Louis-Style Spareribs (Full Slab)", calories: 1240 },
    { id: "fd-brisket", name: "Texas Beef Brisket (1/2 lb)", calories: 680 },
    { id: "fd-pulled-pork", name: "Georgia Chopped Pork (1/2 lb)", calories: 460 },
    { id: "fd-chicken", name: "Country-Roasted Chicken (Half)", calories: 520 },
    { id: "fd-hot-link", name: "Hot Link Sausage", calories: 380 }
  ],
  "Famous Sandwiches": [
    { id: "fd-brisket-burger", name: "Brisket Burger", calories: 890 },
    { id: "fd-pulled-pork-sandwich", name: "Pulled Pork Sandwich", calories: 640 },
    { id: "fd-brisket-sandwich", name: "Brisket Sandwich", calories: 720 },
    { id: "fd-chicken-sandwich", name: "BBQ Chicken Sandwich", calories: 580 }
  ],
  "Feast Platters": [
    { id: "fd-all-american", name: "All-American BBQ Feast", calories: 2480 },
    { id: "fd-feast-two", name: "Feast for Two", calories: 1840 },
    { id: "fd-pitmaster", name: "Pitmaster Picks", calories: 1640 }
  ],
  "Famous Sides": [
    { id: "fd-mac-cheese", name: "Dave's Cheesy Mac & Cheese", calories: 460 },
    { id: "fd-corn-muffin", name: "Sweet Corn Muffin", calories: 240 },
    { id: "fd-fries", name: "French Fries", calories: 380 },
    { id: "fd-potato-salad", name: "Wilbur Beans", calories: 260 },
    { id: "fd-coleslaw", name: "Creamy Coleslaw", calories: 180 }
  ],
  "Sweet Endings": [
    { id: "fd-bread-pudding", name: "Bread Pudding", calories: 580 },
    { id: "fd-pie", name: "Homemade Pie", calories: 380 }
  ]
};

export const famousDavesItems: FastFoodItem[] = Object.values(FAMOUS_DAVES_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Famous Dave's BBQ",
      item: item.name,
      calories: item.calories,
      category: Object.entries(FAMOUS_DAVES_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );