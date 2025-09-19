import { FastFoodItem } from '../types';

const LOUIE_MUELLER_CATEGORIES = {
  "Classic Cuts": [
    { id: "lm-beef-ribs", name: "Beef Ribs", calories: 800 },
    { id: "lm-brisket", name: "Brisket", calories: 650 },
    { id: "lm-sausage", name: "Sausage", calories: 400 },
    { id: "lm-pork-ribs", name: "Pork Ribs", calories: 700 }
  ],
  "Traditional Sides": [
    { id: "lm-potato-salad", name: "Potato Salad", calories: 220 },
    { id: "lm-beans", name: "Pinto Beans", calories: 200 },
    { id: "lm-coleslaw", name: "Coleslaw", calories: 180 }
  ]
};

export const louieMuellerItems: FastFoodItem[] = Object.entries(LOUIE_MUELLER_CATEGORIES)
  .flatMap(([category, items]) =>
    items.map(item => ({
      id: item.id,
      restaurant: "Louie Mueller Barbecue",
      item: item.name,
      calories: item.calories,
      category
    }))
  );