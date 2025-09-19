import { FastFoodItem } from '../types';

const WING_ZONE_CATEGORIES = {
  "Wings": [
    { id: "wingzone-6wings", name: "Original Wings (6 pc)", calories: 510 },
    { id: "wingzone-10wings", name: "Original Wings (10 pc)", calories: 850 },
    { id: "wingzone-20wings", name: "Original Wings (20 pc)", calories: 1700 }
  ],
  "Boneless Wings": [
    { id: "wingzone-6boneless", name: "Boneless Wings (6 pc)", calories: 420 },
    { id: "wingzone-10boneless", name: "Boneless Wings (10 pc)", calories: 700 },
    { id: "wingzone-20boneless", name: "Boneless Wings (20 pc)", calories: 1400 }
  ],
  "Tenders & Shrimp": [
    { id: "wingzone-tenders3", name: "Chicken Tenders (3 pc)", calories: 480 },
    { id: "wingzone-shrimp6", name: "Shrimp (6 pc)", calories: 440 }
  ],
  "Burgers & Sandwiches": [
    { id: "wingzone-buffchick", name: "Buffalo Chicken Sandwich", calories: 890 },
    { id: "wingzone-cheeseburger", name: "Cheeseburger", calories: 960 }
  ],
  "Sides": [
    { id: "wingzone-fries", name: "Wedge Fries", calories: 410 },
    { id: "wingzone-onionrings", name: "Onion Rings", calories: 660 }
  ],
  "Desserts": [
    { id: "wingzone-brownie", name: "Triple Chocolate Brownie", calories: 580 }
  ]
};

export const wingZoneItems: FastFoodItem[] = Object.entries(WING_ZONE_CATEGORIES).flatMap(
  ([category, items]) =>
    items.map(item => ({
      ...item,
      restaurant: "Wing Zone",
      category
    }))
);