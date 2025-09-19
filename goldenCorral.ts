import { FastFoodItem } from '../types';

const GOLDEN_CORRAL_CATEGORIES = {
  "Breakfast Favorites": [
    { id: "gc-pancakes", name: "Buttermilk Pancakes (2)", calories: 380 },
    { id: "gc-french-toast", name: "French Toast (2 pieces)", calories: 420 },
    { id: "gc-waffles", name: "Belgian Waffle", calories: 340 },
    { id: "gc-scrambled-eggs", name: "Scrambled Eggs", calories: 180 },
    { id: "gc-bacon", name: "Bacon (3 strips)", calories: 120 },
    { id: "gc-sausage", name: "Sausage Links (2)", calories: 160 },
    { id: "gc-hashbrowns", name: "Hash Browns", calories: 290 },
    { id: "gc-biscuits-gravy", name: "Biscuits & Gravy", calories: 480 }
  ],
  "Carved Meats": [
    { id: "gc-roast-beef", name: "Carved Roast Beef (4 oz)", calories: 280 },
    { id: "gc-ham", name: "Carved Ham (4 oz)", calories: 220 },
    { id: "gc-turkey", name: "Carved Turkey (4 oz)", calories: 190 },
    { id: "gc-prime-rib", name: "Prime Rib (4 oz)", calories: 340 },
    { id: "gc-pot-roast", name: "Pot Roast (4 oz)", calories: 310 }
  ],
  "Chicken & Fish": [
    { id: "gc-fried-chicken", name: "Fried Chicken (2 pc)", calories: 480 },
    { id: "gc-grilled-chicken", name: "Grilled Chicken Breast", calories: 220 },
    { id: "gc-chicken-wings", name: "Chicken Wings (3 pc)", calories: 360 },
    { id: "gc-fish-fry", name: "Fried Fish Fillet", calories: 390 },
    { id: "gc-salmon", name: "Grilled Salmon", calories: 280 },
    { id: "gc-popcorn-shrimp", name: "Popcorn Shrimp", calories: 340 }
  ],
  "Hot Sides": [
    { id: "gc-mac-cheese", name: "Mac & Cheese", calories: 320 },
    { id: "gc-mashed-potatoes", name: "Mashed Potatoes", calories: 180 },
    { id: "gc-green-beans", name: "Green Beans", calories: 90 },
    { id: "gc-corn", name: "Buttered Corn", calories: 160 },
    { id: "gc-carrots", name: "Glazed Carrots", calories: 120 },
    { id: "gc-rice", name: "Rice Pilaf", calories: 170 },
    { id: "gc-sweet-potato", name: "Sweet Potato Casserole", calories: 260 },
    { id: "gc-stuffing", name: "Homestyle Stuffing", calories: 180 }
  ],
  "Fresh Salad Bar": [
    { id: "gc-garden-salad", name: "Garden Salad", calories: 120 },
    { id: "gc-caesar-salad", name: "Caesar Salad", calories: 280 },
    { id: "gc-potato-salad", name: "Potato Salad", calories: 240 },
    { id: "gc-macaroni-salad", name: "Macaroni Salad", calories: 220 },
    { id: "gc-coleslaw", name: "Coleslaw", calories: 170 }
  ],
  "Homestyle Soups": [
    { id: "gc-vegetable-soup", name: "Vegetable Soup", calories: 120 },
    { id: "gc-chicken-noodle", name: "Chicken Noodle Soup", calories: 160 },
    { id: "gc-potato-soup", name: "Potato Soup", calories: 220 },
    { id: "gc-chili", name: "Homestyle Chili", calories: 280 }
  ],
  "Fresh Baked Goods": [
    { id: "gc-dinner-roll", name: "Dinner Roll", calories: 120 },
    { id: "gc-cornbread", name: "Cornbread", calories: 180 },
    { id: "gc-garlic-bread", name: "Garlic Bread", calories: 160 }
  ],
  "Desserts & Sweets": [
    { id: "gc-chocolate-cake", name: "Chocolate Cake", calories: 380 },
    { id: "gc-carrot-cake", name: "Carrot Cake", calories: 420 },
    { id: "gc-apple-pie", name: "Apple Pie", calories: 340 },
    { id: "gc-bread-pudding", name: "Bread Pudding", calories: 360 },
    { id: "gc-ice-cream", name: "Soft Serve Ice Cream", calories: 220 },
    { id: "gc-brownie", name: "Chocolate Brownie", calories: 290 },
    { id: "gc-cotton-candy", name: "Cotton Candy", calories: 110 }
  ],
  "Beverages": [
    { id: "gc-fountain-drink", name: "Fountain Drink", calories: 180 },
    { id: "gc-coffee", name: "Coffee", calories: 0 },
    { id: "gc-tea", name: "Fresh-Brewed Iced Tea", calories: 0 },
    { id: "gc-lemonade", name: "Lemonade", calories: 160 }
  ]
};

export const goldenCorralItems: FastFoodItem[] = Object.values(GOLDEN_CORRAL_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Golden Corral",
      item: item.name,
      calories: item.calories,
      category: Object.entries(GOLDEN_CORRAL_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );