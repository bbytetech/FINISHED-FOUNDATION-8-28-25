import { FastFoodItem } from '../types';

const KRISPY_KREME_CATEGORIES = {
  "Original Glazed": [
    { id: "kk-original", name: "Original Glazed Doughnut", calories: 190 },
    { id: "kk-chocolate-glazed", name: "Chocolate Glazed Doughnut", calories: 240 }
  ],
  "Filled Doughnuts": [
    { id: "kk-powdered-filled", name: "Powdered Strawberry Filled", calories: 270 },
    { id: "kk-original-kreme", name: "Original Kreme Filled", calories: 300 },
    { id: "kk-chocolate-kreme", name: "Chocolate Kreme Filled", calories: 350 },
    { id: "kk-custard", name: "Custard Filled", calories: 310 },
    { id: "kk-raspberry", name: "Raspberry Filled", calories: 290 },
    { id: "kk-glazed-lemon", name: "Glazed Lemon Filled", calories: 280 }
  ],
  "Cake Doughnuts": [
    { id: "kk-chocolate-cake", name: "Chocolate Cake Doughnut", calories: 280 },
    { id: "kk-glazed-cake", name: "Glazed Cake Doughnut", calories: 260 },
    { id: "kk-blueberry-cake", name: "Blueberry Cake Doughnut", calories: 270 },
    { id: "kk-cinnamon-cake", name: "Cinnamon Sugar Cake", calories: 250 }
  ],
  "Specialty Doughnuts": [
    { id: "kk-cruller", name: "Glazed Cruller", calories: 240 },
    { id: "kk-powdered", name: "Powdered Original Filled", calories: 260 },
    { id: "kk-chocolate-sprinkle", name: "Chocolate Sprinkle", calories: 250 },
    { id: "kk-maple-bar", name: "Maple Iced Glazed", calories: 260 },
    { id: "kk-apple-fritter", name: "Apple Fritter", calories: 350 }
  ],
  "Limited Time Offerings": [
    { id: "kk-pumpkin-spice", name: "Pumpkin Spice Original Glazed", calories: 200 },
    { id: "kk-gingerbread", name: "Gingerbread Glazed", calories: 210 },
    { id: "kk-valentine", name: "Valentine Heart Doughnut", calories: 270 }
  ],
  "Beverages": [
    { id: "kk-coffee", name: "Original Coffee", calories: 5 },
    { id: "kk-latte", name: "Cafe Latte", calories: 190 },
    { id: "kk-cappuccino", name: "Cappuccino", calories: 110 },
    { id: "kk-frozen-latte", name: "Frozen Latte", calories: 430 },
    { id: "kk-frozen-mocha", name: "Frozen Mocha", calories: 500 },
    { id: "kk-hot-chocolate", name: "Hot Chocolate", calories: 360 },
    { id: "kk-smoothie", name: "Fruit Smoothie", calories: 300 }
  ]
};

export const krispyKremeItems: FastFoodItem[] = Object.values(KRISPY_KREME_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Krispy Kreme",
      item: item.name,
      calories: item.calories,
      category: Object.entries(KRISPY_KREME_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );