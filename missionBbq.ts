import { FastFoodItem } from '../types';

const MISSION_BBQ_CATEGORIES = {
  "Smokehouse Signatures": [
    { id: "mb-brisket", name: "Texas-Inspired Beef Brisket", calories: 660 },
    { id: "mb-pulled-pork", name: "Pulled Pork", calories: 520 },
    { id: "mb-sausage", name: "Smoked Sausage", calories: 290 },
    { id: "mb-chicken", name: "Pulled Chicken", calories: 480 },
    { id: "mb-ribs", name: "St. Louis Style Ribs (Half Rack)", calories: 720 }
  ],
  "Sandwiches": [
    { id: "mb-brisket-sandwich", name: "Chopped Brisket Sandwich", calories: 540 },
    { id: "mb-pulled-pork-sandwich", name: "Pulled Pork Sandwich", calories: 520 },
    { id: "mb-sausage-sandwich", name: "Smoked Sausage Sandwich", calories: 500 },
    { id: "mb-chicken-sandwich", name: "Pulled Chicken Sandwich", calories: 480 }
  ],
  "Sides": [
    { id: "mb-mac-cheese", name: "Maggie's Mac-N-Cheese", calories: 304 },
    { id: "mb-baked-beans", name: "Baked Beans with Brisket", calories: 199 },
    { id: "mb-potato-salad", name: "Potato Salad", calories: 200 },
    { id: "mb-cold-slaw", name: "Cold Slaw", calories: 156 },
    { id: "mb-green-beans", name: "Green Beans & Bacon", calories: 132 },
    { id: "mb-fries", name: "Fresh Cut Fries", calories: 320 },
    { id: "mb-cornbread", name: "Cornbread", calories: 210 }
  ],
  "Seasonal Specials": [
    { id: "mb-bbq-shrimp", name: "BBQ Glazed Shrimp", calories: 450 },
    { id: "mb-broccoli-salad", name: "Broccoli Salad", calories: 180 },
    { id: "mb-red-velvet-cake", name: "Red Velvet Cake", calories: 580 }
  ]
};

export const missionBbqItems: FastFoodItem[] = Object.entries(MISSION_BBQ_CATEGORIES)
  .flatMap(([menuCategory, items]) =>
    items.map(item => ({
      id: item.id,
      restaurant: "Mission BBQ",
      item: item.name,
      calories: item.calories,
      category: "bbq" // <-- force this to match display filter
    }))
  );