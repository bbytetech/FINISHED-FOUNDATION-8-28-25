import { FastFoodItem } from '../types';

const EAST_COAST_WINGS_CATEGORIES = {
  "Traditional Wings": [
    { id: "ecw-traditional-6", name: "Traditional Wings (6 pc)", calories: 460 },
    { id: "ecw-traditional-10", name: "Traditional Wings (10 pc)", calories: 760 },
    { id: "ecw-traditional-15", name: "Traditional Wings (15 pc)", calories: 1150 }
  ],
  "Boneless Wings": [
    { id: "ecw-boneless-6", name: "Boneless Wings (6 pc)", calories: 420 },
    { id: "ecw-boneless-10", name: "Boneless Wings (10 pc)", calories: 700 },
    { id: "ecw-boneless-15", name: "Boneless Wings (15 pc)", calories: 1050 }
  ],
  "Chicken Tenders": [
    { id: "ecw-tenders-3", name: "Chicken Tenders (3 pc)", calories: 500 },
    { id: "ecw-tenders-5", name: "Chicken Tenders (5 pc)", calories: 830 }
  ],
  "Burgers & Sandwiches": [
    { id: "ecw-burger", name: "ECW+G Cheeseburger", calories: 880 },
    { id: "ecw-grilled-chicken", name: "Grilled Chicken Sandwich", calories: 690 },
    { id: "ecw-buffalo-wrap", name: "Buffalo Chicken Wrap", calories: 740 }
  ],
  "Starters": [
    { id: "ecw-fried-pickles", name: "Fried Pickles", calories: 690 },
    { id: "ecw-cheese-curds", name: "Cheddar Cheese Curds", calories: 880 },
    { id: "ecw-onion-rings", name: "Onion Rings", calories: 760 }
  ],
  "Greens & Salads": [
    { id: "ecw-house-salad", name: "House Salad", calories: 320 },
    { id: "ecw-buffalo-salad", name: "Buffalo Chicken Salad", calories: 670 }
  ],
  "Desserts": [
    { id: "ecw-brownie", name: "Chocolate Fudge Brownie", calories: 550 },
    { id: "ecw-cookie", name: "Chocolate Chip Cookie", calories: 460 }
  ],
  "Beverages": [
    { id: "ecw-coke", name: "Coca-Cola", calories: 210 },
    { id: "ecw-sweet-tea", name: "Sweet Tea", calories: 190 }
  ]
};

export const eastCoastWingsItems: FastFoodItem[] = Object.entries(EAST_COAST_WINGS_CATEGORIES).flatMap(
  ([category, items]) =>
    items.map(item => ({
      ...item,
      restaurant: "East Coast Wings + Grill",
      category
    }))
);