import { FastFoodItem } from '../types';

const BURNT_BEAN_CO_CATEGORIES = {
  "Tejano BBQ": [
    { id: "bbc-brisket", name: "Brisket", calories: 650 },
    { id: "bbc-pork-ribs", name: "Pork Ribs", calories: 700 },
    { id: "bbc-sausage", name: "Sausage", calories: 420 },
    { id: "bbc-turkey", name: "Smoked Turkey", calories: 500 }
  ],
  "Sides": [
    { id: "bbc-mac-n-cheese", name: "Mac 'n Cheese", calories: 300 },
    { id: "bbc-elote", name: "Elote", calories: 250 },
    { id: "bbc-charro-beans", name: "Charro Beans", calories: 200 }
  ]
};

export const burntBeanCoItems: FastFoodItem[] = Object.entries(BURNT_BEAN_CO_CATEGORIES)
  .flatMap(([category, items]) =>
    items.map(item => ({
      id: item.id,
      restaurant: "Burnt Bean Co.",
      item: item.name,
      calories: item.calories,
      category
    }))
  );