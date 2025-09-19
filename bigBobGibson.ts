import { FastFoodItem } from '../types';

const BIG_BOB_GIBSON_CATEGORIES = {
  "Pit-Smoked Meats": [
    { id: "bbg-pulled-pork", name: "Pulled Pork", calories: 650 },
    { id: "bbg-beef-brisket", name: "Beef Brisket", calories: 700 },
    { id: "bbg-smoked-chicken", name: "Smoked Chicken with White Sauce", calories: 600 },
    { id: "bbg-turkey-breast", name: "Smoked Turkey Breast", calories: 550 },
    { id: "bbg-pork-ribs", name: "Pork Ribs", calories: 750 }
  ],
  "Sandwiches": [
    { id: "bbg-pulled-pork-sandwich", name: "Pulled Pork Sandwich", calories: 700 },
    { id: "bbg-brisket-sandwich", name: "Brisket Sandwich", calories: 750 },
    { id: "bbg-chicken-sandwich", name: "Smoked Chicken Sandwich", calories: 650 }
  ],
  "Sides": [
    { id: "bbg-baked-beans", name: "Baked Beans", calories: 200 },
    { id: "bbg-potato-salad", name: "Potato Salad", calories: 250 },
    { id: "bbg-coleslaw", name: "Coleslaw", calories: 180 },
    { id: "bbg-mac-n-cheese", name: "Mac & Cheese", calories: 300 }
  ],
  "Desserts": [
    { id: "bbg-banana-pudding", name: "Banana Pudding", calories: 400 },
    { id: "bbg-pecan-pie", name: "Pecan Pie", calories: 450 }
  ]
};

export const bigBobGibsonItems: FastFoodItem[] = Object.entries(BIG_BOB_GIBSON_CATEGORIES)
  .flatMap(([category, items]) =>
    items.map(item => ({
      id: item.id,
      restaurant: "Big Bob Gibson Bar-B-Q",
      item: item.name,
      calories: item.calories,
      category
    }))
  );