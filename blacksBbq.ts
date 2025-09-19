import { FastFoodItem } from '../types';

const BLACKS_BBQ_CATEGORIES = {
  "Pit-Smoked Meats": [
    { id: "blacks-brisket", name: "Brisket", calories: 660 },
    { id: "blacks-beef-ribs", name: "Beef Ribs", calories: 800 },
    { id: "blacks-pork-ribs", name: "Pork Ribs", calories: 700 },
    { id: "blacks-sausage", name: "Sausage", calories: 420 },
    { id: "blacks-turkey", name: "Smoked Turkey", calories: 500 }
  ],
  "Sides": [
    { id: "blacks-potato-salad", name: "Potato Salad", calories: 220 },
    { id: "blacks-beans", name: "Pinto Beans", calories: 200 },
    { id: "blacks-coleslaw", name: "Coleslaw", calories: 180 },
    { id: "blacks-mac-n-cheese", name: "Mac 'n Cheese", calories: 300 }
  ]
};

export const blacksBbqItems: FastFoodItem[] = Object.entries(BLACKS_BBQ_CATEGORIES)
  .flatMap(([category, items]) =>
    items.map(item => ({
      id: item.id,
      restaurant: "Black's Barbecue",
      item: item.name,
      calories: item.calories,
      category
    }))
  );