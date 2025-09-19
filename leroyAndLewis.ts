import { FastFoodItem } from '../types';

const LEROY_AND_LEWIS_CATEGORIES = {
  "Smoked Meats": [
    { id: "ll-brisket", name: "Brisket", calories: 640 },
    { id: "ll-beef-cheeks", name: "Beef Cheeks", calories: 600 },
    { id: "ll-pork-steak", name: "Pork Steak", calories: 550 },
    { id: "ll-sausage", name: "House Sausage", calories: 420 }
  ],
  "Creative Sides": [
    { id: "ll-mac", name: "Kimchi Mac & Cheese", calories: 310 },
    { id: "ll-coleslaw", name: "Cabbage Slaw", calories: 180 },
    { id: "ll-beans", name: "Smoked Beans", calories: 260 }
  ]
};

export const leroyAndLewisItems: FastFoodItem[] = Object.entries(LEROY_AND_LEWIS_CATEGORIES)
  .flatMap(([category, items]) =>
    items.map(item => ({
      id: item.id,
      restaurant: "LeRoy and Lewis BBQ",
      item: item.name,
      calories: item.calories,
      category
    }))
  );