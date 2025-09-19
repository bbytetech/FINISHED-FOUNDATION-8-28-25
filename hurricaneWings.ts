import { FastFoodItem } from '../types';

const HURRICANE_WINGS_CATEGORIES = {
  "Wings": [
    { id: "hurricane-6wings", name: "6 Wings", calories: 480 },
    { id: "hurricane-10wings", name: "10 Wings", calories: 800 },
    { id: "hurricane-15wings", name: "15 Wings", calories: 1200 },
    { id: "hurricane-20wings", name: "20 Wings", calories: 1600 }
  ],
  "Boneless Wings": [
    { id: "hurricane-6boneless", name: "6 Boneless Wings", calories: 420 },
    { id: "hurricane-10boneless", name: "10 Boneless Wings", calories: 700 },
    { id: "hurricane-15boneless", name: "15 Boneless Wings", calories: 1050 }
  ],
  "Starters": [
    { id: "hurricane-friedpickles", name: "Fried Pickles", calories: 780 },
    { id: "hurricane-mozzarella", name: "Mozzarella Sticks", calories: 880 }
  ],
  "Burgers & Sandwiches": [
    { id: "hurricane-classicburger", name: "Classic Cheeseburger", calories: 940 },
    { id: "hurricane-buffchick", name: "Buffalo Chicken Sandwich", calories: 960 }
  ],
  "Sides": [
    { id: "hurricane-fries", name: "French Fries", calories: 400 },
    { id: "hurricane-onionrings", name: "Onion Rings", calories: 650 }
  ]
};

export const hurricaneWingsItems: FastFoodItem[] = Object.entries(HURRICANE_WINGS_CATEGORIES).flatMap(
  ([category, items]) =>
    items.map(item => ({
      ...item,
      restaurant: "Hurricane Grill & Wings",
      category
    }))
);