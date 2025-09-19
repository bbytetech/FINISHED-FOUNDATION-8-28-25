import { FastFoodItem } from '../types';

const SHIPLEY_CATEGORIES = {
  "Classic Doughnuts": [
    { id: "shipley-glazed", name: "Glazed Donut", calories: 210 },
    { id: "shipley-chocolate", name: "Chocolate Iced Donut", calories: 250 },
    { id: "shipley-plain", name: "Plain Cake Donut", calories: 220 },
    { id: "shipley-chocolate-cake", name: "Chocolate Cake Donut", calories: 260 },
    { id: "shipley-powdered", name: "Powdered Sugar Donut", calories: 230 },
    { id: "shipley-cinnamon", name: "Cinnamon Sugar Donut", calories: 240 }
  ],
  "Filled Doughnuts": [
    { id: "shipley-bavarian", name: "Bavarian Cream Filled", calories: 280 },
    { id: "shipley-jelly", name: "Raspberry Filled", calories: 270 },
    { id: "shipley-apple", name: "Apple Filled", calories: 260 },
    { id: "shipley-lemon", name: "Lemon Filled", calories: 270 },
    { id: "shipley-blueberry", name: "Blueberry Filled", calories: 270 }
  ],
  "Specialty Doughnuts": [
    { id: "shipley-cinnamon-roll", name: "Cinnamon Roll", calories: 430 },
    { id: "shipley-bear-claw", name: "Bear Claw", calories: 390 },
    { id: "shipley-eclair", name: "Chocolate Eclair", calories: 320 },
    { id: "shipley-apple-fritter", name: "Apple Fritter", calories: 380 },
    { id: "shipley-donut-holes", name: "Donut Holes (6)", calories: 240 }
  ],
  "Kolaches": [
    { id: "shipley-sausage", name: "Sausage & Cheese Kolache", calories: 380 },
    { id: "shipley-ham", name: "Ham & Cheese Kolache", calories: 350 },
    { id: "shipley-jalapeno", name: "Jalapeño Sausage Kolache", calories: 390 },
    { id: "shipley-boudin", name: "Boudin Kolache", calories: 360 }
  ],
  "Beverages": [
    { id: "shipley-coffee", name: "Coffee", calories: 5 },
    { id: "shipley-cappuccino", name: "Cappuccino", calories: 120 },
    { id: "shipley-hot-chocolate", name: "Hot Chocolate", calories: 180 },
    { id: "shipley-milk", name: "Milk", calories: 120 },
    { id: "shipley-juice", name: "Orange Juice", calories: 110 }
  ]
};

export const shipleyItems: FastFoodItem[] = Object.values(SHIPLEY_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Shipley Do-Nuts",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SHIPLEY_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );