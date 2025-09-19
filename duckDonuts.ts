import { FastFoodItem } from '../types';

const DUCK_DONUTS_CATEGORIES = {
  "Made-to-Order Classics": [
    { id: "duck-glazed", name: "Classic Glazed Donut", calories: 210 },
    { id: "duck-chocolate", name: "Chocolate Iced Donut", calories: 250 },
    { id: "duck-plain", name: "Plain Cake Donut", calories: 220 },
    { id: "duck-chocolate-cake", name: "Chocolate Cake Donut", calories: 260 },
    { id: "duck-powdered", name: "Powdered Sugar Donut", calories: 230 },
    { id: "duck-cinnamon", name: "Cinnamon Sugar Donut", calories: 240 }
  ],
  "Signature Creations": [
    { id: "duck-maple-bacon", name: "Maple Bacon Donut", calories: 390 },
    { id: "duck-peanut-butter", name: "Peanut Butter Paradise Donut", calories: 360 },
    { id: "duck-smores", name: "S'mores Donut", calories: 340 },
    { id: "duck-blueberry", name: "Blueberry Pancake Donut", calories: 320 }
  ],
  "Specialty Coatings": [
    { id: "duck-cinnamon-sugar", name: "Cinnamon Sugar Coating", calories: 270 },
    { id: "duck-powdered", name: "Powdered Sugar Coating", calories: 260 },
    { id: "duck-lemon", name: "Lemon Glaze Coating", calories: 280 }
  ],
  "Coffee & Espresso": [
    { id: "duck-coffee", name: "Coffee", calories: 5 },
    { id: "duck-mocha", name: "Mocha Latte", calories: 230 }
  ],
  "Beverages": [
    { id: "duck-iced-coffee", name: "Iced Coffee", calories: 5 },
    { id: "duck-frozen", name: "Frozen Hot Chocolate", calories: 410 },
    { id: "duck-hot-chocolate", name: "Hot Chocolate", calories: 240 }
  ]
};

export const duckDonutsItems: FastFoodItem[] = Object.values(DUCK_DONUTS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Duck Donuts",
      item: item.name,
      calories: item.calories,
      category: Object.entries(DUCK_DONUTS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );