import { FastFoodItem } from '../types';

const HOOTERS_CATEGORIES = {
  "World Famous Wings": [
    { id: "hooters-original-wings-6", name: "Original Wings (6 pc)", calories: 480 },
    { id: "hooters-original-wings-10", name: "Original Wings (10 pc)", calories: 800 },
    { id: "hooters-original-wings-20", name: "Original Wings (20 pc)", calories: 1600 },
    { id: "hooters-naked-wings-6", name: "Naked Wings (6 pc)", calories: 420 },
    { id: "hooters-naked-wings-10", name: "Naked Wings (10 pc)", calories: 700 },
    { id: "hooters-boneless-6", name: "Boneless Wings (6 pc)", calories: 540 },
    { id: "hooters-boneless-10", name: "Boneless Wings (10 pc)", calories: 900 }
  ],
  "Signature Sandwiches": [
    { id: "hooters-burger", name: "Hooters Burger", calories: 780 },
    { id: "hooters-buffalo-chicken", name: "Buffalo Chicken Sandwich", calories: 720 },
    { id: "hooters-philly", name: "Philly Cheesesteak", calories: 840 },
    { id: "hooters-chicken-strip", name: "Chicken Strip Sandwich", calories: 760 }
  ],
  "Fresh Catch": [
    { id: "hooters-fish-chips", name: "Fish & Chips", calories: 960 },
    { id: "hooters-shrimp", name: "Lots-A-Tots Shrimp", calories: 680 },
    { id: "hooters-crab-legs", name: "Snow Crab Legs", calories: 440 }
  ],
  "Hooterstizers": [
    { id: "hooters-curly-fries", name: "Curly Fries", calories: 420 },
    { id: "hooters-tots", name: "Tater Tots", calories: 380 },
    { id: "hooters-cheese-sticks", name: "Mozzarella Sticks", calories: 560 },
    { id: "hooters-nachos", name: "Buffalo Chicken Nachos", calories: 1240 },
    { id: "hooters-quesadilla", name: "Chicken Quesadilla", calories: 820 }
  ],
  "Garden Fresh Salads": [
    { id: "hooters-chicken-salad", name: "Buffalo Chicken Salad", calories: 620 },
    { id: "hooters-garden-salad", name: "Garden Salad", calories: 240 },
    { id: "hooters-caesar", name: "Caesar Salad", calories: 380 }
  ],
  "Signature Sides": [
    { id: "hooters-coleslaw", name: "Coleslaw", calories: 240 },
    { id: "hooters-baked-beans", name: "Baked Beans", calories: 280 },
    { id: "hooters-mac-cheese", name: "Mac & Cheese", calories: 440 }
  ],
  "Sweet Treats": [
    { id: "hooters-dessert-shot", name: "Dessert Shot", calories: 320 },
    { id: "hooters-key-lime", name: "Key Lime Pie", calories: 420 },
    { id: "hooters-chocolate-mousse", name: "Chocolate Mousse Cake", calories: 580 }
  ],
  "Thirst Quenchers": [
    { id: "hooters-soda", name: "Fountain Drink", calories: 180 },
    { id: "hooters-tea", name: "Fresh-Brewed Iced Tea", calories: 0 },
    { id: "hooters-lemonade", name: "Lemonade", calories: 160 }
  ]
};

export const hootersItems: FastFoodItem[] = Object.values(HOOTERS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Hooters",
      item: item.name,
      calories: item.calories,
      category: Object.entries(HOOTERS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );