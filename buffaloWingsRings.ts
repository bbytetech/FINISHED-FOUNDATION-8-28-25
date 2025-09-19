import { FastFoodItem } from '../types';

const BUFFALO_WINGS_RINGS_CATEGORIES = {
  "Wings": [
    { id: "bwr-traditional-6", name: "Traditional Wings (6 pc)", calories: 510 },
    { id: "bwr-traditional-10", name: "Traditional Wings (10 pc)", calories: 850 },
    { id: "bwr-boneless-6", name: "Boneless Wings (6 pc)", calories: 480 },
    { id: "bwr-boneless-10", name: "Boneless Wings (10 pc)", calories: 800 }
  ],
  "Tenders": [
    { id: "bwr-tenders-3", name: "Chicken Tenders (3 pc)", calories: 550 },
    { id: "bwr-tenders-5", name: "Chicken Tenders (5 pc)", calories: 880 }
  ],
  "Burgers & Sandwiches": [
    { id: "bwr-buffalo-chicken", name: "Buffalo Chicken Sandwich", calories: 920 },
    { id: "bwr-bacon-cheddar", name: "Bacon Cheddar Burger", calories: 1050 },
    { id: "bwr-pub-burger", name: "BWR Pub Burger", calories: 980 }
  ],
  "Appetizers": [
    { id: "bwr-mozzarella", name: "Mozzarella Sticks", calories: 840 },
    { id: "bwr-fried-pickles", name: "Fried Pickles", calories: 680 },
    { id: "bwr-loaded-fries", name: "Loaded Fries", calories: 960 }
  ],
  "Salads": [
    { id: "bwr-chicken-caesar", name: "Chicken Caesar Salad", calories: 640 },
    { id: "bwr-garden-salad", name: "Garden Salad", calories: 370 }
  ],
  "Desserts": [
    { id: "bwr-brownie", name: "Triple Chocolate Brownie", calories: 590 },
    { id: "bwr-cheesecake", name: "New York Cheesecake", calories: 620 }
  ],
  "Beverages": [
    { id: "bwr-cola", name: "Coke", calories: 200 },
    { id: "bwr-lemonade", name: "Lemonade", calories: 180 }
  ]
};

export const buffaloWingsRingsItems: FastFoodItem[] = Object.entries(BUFFALO_WINGS_RINGS_CATEGORIES).flatMap(
  ([category, items]) =>
    items.map(item => ({
      ...item,
      restaurant: "Buffalo Wings & Rings",
      category
    }))
);