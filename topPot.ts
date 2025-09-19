import { FastFoodItem } from '../types';

const TOP_POT_CATEGORIES = {
  "Classic Doughnuts": [
    { id: "tp-old-fashioned", name: "Old Fashioned", calories: 290 },
    { id: "tp-glazed-ring", name: "Glazed Ring", calories: 220 },
    { id: "tp-chocolate-ring", name: "Chocolate Ring", calories: 250 },
    { id: "tp-maple-ring", name: "Maple Ring", calories: 240 },
    { id: "tp-vanilla-ring", name: "Vanilla Ring", calories: 230 }
  ],
  "Cake Doughnuts": [
    { id: "tp-chocolate-cake", name: "Chocolate Cake", calories: 280 },
    { id: "tp-maple-cake", name: "Maple Cake", calories: 270 },
    { id: "tp-blueberry-cake", name: "Blueberry Cake", calories: 260 },
    { id: "tp-devils-food", name: "Devil's Food Cake", calories: 290 },
    { id: "tp-spice-cake", name: "Spice Cake", calories: 270 }
  ],
  "Specialty Doughnuts": [
    { id: "tp-maple-bar", name: "Maple Bar", calories: 310 },
    { id: "tp-chocolate-bar", name: "Chocolate Bar", calories: 320 },
    { id: "tp-apple-fritter", name: "Apple Fritter", calories: 380 }
  ],
  "Filled Doughnuts": [
    { id: "tp-bavarian", name: "Bavarian Cream", calories: 290 },
    { id: "tp-raspberry", name: "Raspberry Filled", calories: 280 },
    { id: "tp-lemon", name: "Lemon Filled", calories: 270 },
    { id: "tp-boston-cream", name: "Boston Cream", calories: 300 }
  ],
  "Premium Doughnuts": [
    { id: "tp-feather-boa", name: "Feather Boa", calories: 310 },
    { id: "tp-pink-ring", name: "Pink Ring", calories: 240 },
    { id: "tp-valley-girl", name: "Valley Girl Lemon", calories: 260 }
  ],
  "Beverages": [
    { id: "tp-coffee", name: "House Coffee", calories: 5 },
    { id: "tp-mocha", name: "Cafe Mocha", calories: 220 },
    { id: "tp-latte", name: "Cafe Latte", calories: 180 },
    { id: "tp-americano", name: "Americano", calories: 10 },
    { id: "tp-hot-chocolate", name: "Hot Chocolate", calories: 240 }
  ]
};

export const topPotItems: FastFoodItem[] = Object.values(TOP_POT_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Top Pot Doughnuts",
      item: item.name,
      calories: item.calories,
      category: Object.entries(TOP_POT_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );