import { FastFoodItem } from '../types';

const CORKSCREW_BBQ_CATEGORIES = {
  "Pit-Smoked Meats": [
    { id: "cs-brisket", name: "Brisket", calories: 650 },
    { id: "cs-pork-ribs", name: "Pork Ribs", calories: 700 },
    { id: "cs-pulled-pork", name: "Pulled Pork", calories: 600 },
    { id: "cs-sausage", name: "Sausage", calories: 500 },
    { id: "cs-turkey", name: "Smoked Turkey", calories: 550 }
  ],
  "Sandwiches": [
    { id: "cs-brisket-sandwich", name: "Brisket Sandwich", calories: 750 },
    { id: "cs-pulled-pork-sandwich", name: "Pulled Pork Sandwich", calories: 700 },
    { id: "cs-sausage-sandwich", name: "Sausage Sandwich", calories: 650 }
  ],
  "Sides": [
    { id: "cs-mac-n-cheese", name: "Mac & Cheese", calories: 300 },
    { id: "cs-potato-salad", name: "Potato Salad", calories: 250 },
    { id: "cs-coleslaw", name: "Coleslaw", calories: 200 },
    { id: "cs-pinto-beans", name: "Pinto Beans", calories: 220 }
  ],
  "Desserts": [
    { id: "cs-banana-pudding", name: "Banana Pudding", calories: 400 },
    { id: "cs-pecan-pie", name: "Pecan Pie", calories: 450 }
  ]
};

export const corkscrewBbqItems: FastFoodItem[] = Object.entries(CORKSCREW_BBQ_CATEGORIES)
  .flatMap(([category, items]) =>
    items.map(item => ({
      id: item.id,
      restaurant: "CorkScrew BBQ",
      item: item.name,
      calories: item.calories,
      category
    }))
  );