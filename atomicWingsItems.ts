import { FastFoodItem } from '../types';

const ATOMIC_WINGS_CATEGORIES = {
  "Traditional Wings": [
    { id: "atomic-traditional-6", name: "Traditional Wings (6 pc)", calories: 480 },
    { id: "atomic-traditional-10", name: "Traditional Wings (10 pc)", calories: 780 },
    { id: "atomic-traditional-15", name: "Traditional Wings (15 pc)", calories: 1170 }
  ],
  "Boneless Wings": [
    { id: "atomic-boneless-6", name: "Boneless Wings (6 pc)", calories: 420 },
    { id: "atomic-boneless-10", name: "Boneless Wings (10 pc)", calories: 700 },
    { id: "atomic-boneless-15", name: "Boneless Wings (15 pc)", calories: 1050 }
  ],
  "Sandwiches & Wraps": [
    { id: "atomic-chicken-wrap", name: "Crispy Chicken Wrap", calories: 730 },
    { id: "atomic-buffalo-wrap", name: "Buffalo Chicken Wrap", calories: 760 },
    { id: "atomic-chicken-sandwich", name: "Classic Chicken Sandwich", calories: 790 }
  ],
  "Fries & Sides": [
    { id: "atomic-fries", name: "Seasoned Fries", calories: 460 },
    { id: "atomic-onion-rings", name: "Onion Rings", calories: 520 },
    { id: "atomic-mozzarella", name: "Mozzarella Sticks", calories: 640 }
  ],
  "Desserts": [
    { id: "atomic-brownie", name: "Chocolate Brownie", calories: 510 },
    { id: "atomic-cookie", name: "Jumbo Chocolate Chip Cookie", calories: 480 }
  ],
  "Drinks": [
    { id: "atomic-coke", name: "Coca-Cola", calories: 200 },
    { id: "atomic-sprite", name: "Sprite", calories: 200 },
    { id: "atomic-lemonade", name: "Lemonade", calories: 190 }
  ]
};

export const atomicWingsItems: FastFoodItem[] = Object.entries(ATOMIC_WINGS_CATEGORIES).flatMap(
  ([category, items]) =>
    items.map(item => ({
      ...item,
      restaurant: "Atomic Wings",
      category
    }))
);