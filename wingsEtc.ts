import { FastFoodItem } from '../types';

const WINGS_ETC_CATEGORIES = {
  "Traditional Wings": [
    { id: "wingsetc-traditional-6", name: "Traditional Wings (6 pc)", calories: 480 },
    { id: "wingsetc-traditional-10", name: "Traditional Wings (10 pc)", calories: 800 },
    { id: "wingsetc-traditional-16", name: "Traditional Wings (16 pc)", calories: 1280 },
    { id: "wingsetc-traditional-24", name: "Traditional Wings (24 pc)", calories: 1920 }
  ],
  "Boneless Wings": [
    { id: "wingsetc-boneless-6", name: "Boneless Wings (6 pc)", calories: 420 },
    { id: "wingsetc-boneless-10", name: "Boneless Wings (10 pc)", calories: 700 },
    { id: "wingsetc-boneless-16", name: "Boneless Wings (16 pc)", calories: 1120 },
    { id: "wingsetc-boneless-24", name: "Boneless Wings (24 pc)", calories: 1680 }
  ],
  "Burgers & Sandwiches": [
    { id: "wingsetc-burger", name: "Classic Cheeseburger", calories: 850 },
    { id: "wingsetc-bacon-burger", name: "Bacon Cheeseburger", calories: 980 },
    { id: "wingsetc-tender-sandwich", name: "Chicken Tender Sandwich", calories: 760 }
  ],
  "Appetizers": [
    { id: "wingsetc-loaded-fries", name: "Loaded Fries", calories: 950 },
    { id: "wingsetc-mozzarella", name: "Mozzarella Sticks", calories: 800 },
    { id: "wingsetc-nachos", name: "Ultimate Nachos", calories: 1100 },
    { id: "wingsetc-pickles", name: "Fried Pickles", calories: 690 }
  ],
  "Sides": [
    { id: "wingsetc-fries", name: "Fries", calories: 400 },
    { id: "wingsetc-curly-fries", name: "Curly Fries", calories: 440 },
    { id: "wingsetc-onion-rings", name: "Onion Rings", calories: 460 }
  ],
  "Desserts": [
    { id: "wingsetc-brownie", name: "Chocolate Brownie", calories: 600 },
    { id: "wingsetc-cheesecake", name: "New York Cheesecake", calories: 550 }
  ]
};

export const wingsEtcItems: FastFoodItem[] = Object.entries(WINGS_ETC_CATEGORIES).flatMap(
  ([category, items]) =>
    items.map(item => ({
      ...item,
      restaurant: "Wings Etc.",
      category
    }))
);