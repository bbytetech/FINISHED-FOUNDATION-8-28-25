import { FastFoodItem } from '../types';

const LA_BARBECUE_CATEGORIES = {
  "Smoked Meats": [
    { id: "la-brisket", name: "Brisket", calories: 700 },
    { id: "la-pulled-pork", name: "Pulled Pork", calories: 650 },
    { id: "la-beef-ribs", name: "Beef Ribs", calories: 800 },
    { id: "la-sausage", name: "House Sausage", calories: 500 },
    { id: "la-turkey", name: "Smoked Turkey", calories: 550 }
  ],
  "Sandwiches": [
    { id: "la-brisket-sandwich", name: "Brisket Sandwich", calories: 750 },
    { id: "la-pulled-pork-sandwich", name: "Pulled Pork Sandwich", calories: 700 },
    { id: "la-sausage-sandwich", name: "Sausage Sandwich", calories: 650 }
  ],
  "Sides": [
    { id: "la-mac-n-cheese", name: "Mac & Cheese", calories: 300 },
    { id: "la-potato-salad", name: "Potato Salad", calories: 250 },
    { id: "la-coleslaw", name: "Coleslaw", calories: 200 },
    { id: "la-pinto-beans", name: "Pinto Beans", calories: 220 }
  ],
  "Desserts": [
    { id: "la-banana-pudding", name: "Banana Pudding", calories: 400 },
    { id: "la-pecan-pie", name: "Pecan Pie", calories: 450 }
  ]
};

export const laBarbecueItems: FastFoodItem[] = Object.entries(LA_BARBECUE_CATEGORIES)
  .flatMap(([category, items]) =>
    items.map(item => ({
      id: item.id,
      restaurant: "La Barbecue",
      item: item.name,
      calories: item.calories,
      category
    }))
  );