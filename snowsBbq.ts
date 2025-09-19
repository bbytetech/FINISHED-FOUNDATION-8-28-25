import { FastFoodItem } from '../types';

const SNOWS_BBQ_CATEGORIES = {
  "Pit-Smoked Meats": [
    { id: "snows-brisket", name: "Brisket", calories: 660 },
    { id: "snows-pork-ribs", name: "Pork Ribs", calories: 710 },
    { id: "snows-sausage", name: "Sausage", calories: 420 },
    { id: "snows-chicken", name: "BBQ Chicken", calories: 490 }
  ],
  "Sides": [
    { id: "snows-potato-salad", name: "Potato Salad", calories: 220 },
    { id: "snows-coleslaw", name: "Coleslaw", calories: 180 },
    { id: "snows-beans", name: "BBQ Beans", calories: 200 }
  ]
};

export const snowsBbqItems: FastFoodItem[] = Object.entries(SNOWS_BBQ_CATEGORIES)
  .flatMap(([category, items]) =>
    items.map(item => ({
      id: item.id,
      restaurant: "Snow's BBQ",
      item: item.name,
      calories: item.calories,
      category
    }))
  );