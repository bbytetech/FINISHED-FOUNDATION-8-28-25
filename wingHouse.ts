import { FastFoodItem } from '../types';

const WING_HOUSE_CATEGORIES = {
  "Classic Wings": [
    { id: "winghouse-classic-8", name: "Classic Wings (8 pc)", calories: 760 },
    { id: "winghouse-classic-16", name: "Classic Wings (16 pc)", calories: 1520 },
    { id: "winghouse-classic-24", name: "Classic Wings (24 pc)", calories: 2280 }
  ],
  "Boneless Wings": [
    { id: "winghouse-boneless-8", name: "Boneless Wings (8 pc)", calories: 680 },
    { id: "winghouse-boneless-16", name: "Boneless Wings (16 pc)", calories: 1360 }
  ],
  "Sliders & Sandwiches": [
    { id: "winghouse-buffalo-chicken-slider", name: "Buffalo Chicken Sliders", calories: 760 },
    { id: "winghouse-burger-slider", name: "Mini Burgers", calories: 820 },
    { id: "winghouse-chicken-sandwich", name: "Grilled Chicken Sandwich", calories: 700 }
  ],
  "Starters": [
    { id: "winghouse-fried-pickles", name: "Fried Pickles", calories: 690 },
    { id: "winghouse-loaded-fries", name: "Loaded Fries", calories: 880 },
    { id: "winghouse-onion-rings", name: "Crispy Onion Rings", calories: 750 }
  ],
  "Sides": [
    { id: "winghouse-fries", name: "Crinkle-Cut Fries", calories: 420 },
    { id: "winghouse-mac", name: "Mac & Cheese", calories: 510 },
    { id: "winghouse-coleslaw", name: "Coleslaw", calories: 180 }
  ]
};

export const wingHouseItems: FastFoodItem[] = Object.entries(WING_HOUSE_CATEGORIES).flatMap(
  ([category, items]) =>
    items.map(item => ({
      ...item,
      restaurant: "WingHouse Bar & Grill",
      category
    }))
);