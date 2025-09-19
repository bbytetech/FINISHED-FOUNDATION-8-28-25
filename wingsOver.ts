import { FastFoodItem } from '../types';

const WINGS_OVER_CATEGORIES = {
  "Bone-In Wings": [
    { id: "wingsover-bonein-6", name: "Bone-In Wings (6 pc)", calories: 510 },
    { id: "wingsover-bonein-10", name: "Bone-In Wings (10 pc)", calories: 850 },
    { id: "wingsover-bonein-15", name: "Bone-In Wings (15 pc)", calories: 1280 }
  ],
  "Boneless Wings": [
    { id: "wingsover-boneless-6", name: "Boneless Wings (6 pc)", calories: 450 },
    { id: "wingsover-boneless-10", name: "Boneless Wings (10 pc)", calories: 740 },
    { id: "wingsover-boneless-15", name: "Boneless Wings (15 pc)", calories: 1110 }
  ],
  "Chicken Tenders": [
    { id: "wingsover-tenders-3", name: "Chicken Tenders (3 pc)", calories: 510 },
    { id: "wingsover-tenders-5", name: "Chicken Tenders (5 pc)", calories: 830 }
  ],
  "Handhelds": [
    { id: "wingsover-wrap", name: "Buffalo Chicken Wrap", calories: 770 },
    { id: "wingsover-sandwich", name: "Crispy Chicken Sandwich", calories: 800 }
  ],
  "Fries & Sides": [
    { id: "wingsover-fries", name: "Waffle Fries", calories: 520 },
    { id: "wingsover-tots", name: "Tater Tots", calories: 560 },
    { id: "wingsover-macbites", name: "Mac & Cheese Bites", calories: 610 }
  ],
  "Desserts": [
    { id: "wingsover-brownie", name: "Double Fudge Brownie", calories: 540 },
    { id: "wingsover-cookie", name: "Chocolate Chip Cookie", calories: 480 }
  ],
  "Drinks": [
    { id: "wingsover-coke", name: "Coca-Cola", calories: 200 },
    { id: "wingsover-diet-coke", name: "Diet Coke", calories: 0 },
    { id: "wingsover-lemonade", name: "Lemonade", calories: 180 }
  ]
};

export const wingsOverItems: FastFoodItem[] = Object.entries(WINGS_OVER_CATEGORIES).flatMap(
  ([category, items]) =>
    items.map(item => ({
      ...item,
      restaurant: "Wings Over",
      category
    }))
);