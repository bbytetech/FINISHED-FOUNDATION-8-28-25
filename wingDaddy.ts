import { FastFoodItem } from '../types';

const WING_DADDY_CATEGORIES = {
  "Traditional Wings": [
    { id: "wingdaddy-traditional-6", name: "Traditional Wings (6 pc)", calories: 480 },
    { id: "wingdaddy-traditional-10", name: "Traditional Wings (10 pc)", calories: 800 },
    { id: "wingdaddy-traditional-20", name: "Traditional Wings (20 pc)", calories: 1600 }
  ],
  "Boneless Wings": [
    { id: "wingdaddy-boneless-6", name: "Boneless Wings (6 pc)", calories: 430 },
    { id: "wingdaddy-boneless-10", name: "Boneless Wings (10 pc)", calories: 710 },
    { id: "wingdaddy-boneless-20", name: "Boneless Wings (20 pc)", calories: 1380 }
  ],
  "Tenders & Sandwiches": [
    { id: "wingdaddy-tenders", name: "Chicken Tenders Basket", calories: 750 },
    { id: "wingdaddy-hot-chicken", name: "Nashville Hot Chicken Sandwich", calories: 980 }
  ],
  "Appetizers & Sides": [
    { id: "wingdaddy-fried-pickles", name: "Fried Pickles", calories: 670 },
    { id: "wingdaddy-cheese-fries", name: "Loaded Cheese Fries", calories: 980 },
    { id: "wingdaddy-mac-bites", name: "Mac & Cheese Bites", calories: 620 }
  ]
};

export const wingDaddyItems: FastFoodItem[] = Object.entries(WING_DADDY_CATEGORIES).flatMap(
  ([category, items]) =>
    items.map(item => ({
      ...item,
      restaurant: "Wing Daddy's Sauce House",
      category
    }))
);