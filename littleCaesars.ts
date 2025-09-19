import { FastFoodItem } from '../types';

const LITTLE_CAESARS_CATEGORIES = {
  "Pizza Slices": [
    { id: "lc-slice-pepperoni", name: "Pepperoni Pizza Slice", calories: 280 },
    { id: "lc-slice-cheese", name: "Cheese Pizza Slice", calories: 250 },
    { id: "lc-slice-supreme", name: "Supreme Pizza Slice", calories: 320 },
    { id: "lc-slice-3meat", name: "3 Meat Treat Slice", calories: 360 },
    { id: "lc-slice-veggie", name: "Garden Veggie Slice", calories: 270 },
    { id: "lc-slice-hawaiian", name: "Hawaiian Slice", calories: 300 }
  ],
  "Whole Pizzas": [
    { id: "lc-cheese", name: "Classic Cheese Pizza", calories: 2000 },
    { id: "lc-pepperoni", name: "Pepperoni Pizza", calories: 2240 },
    { id: "lc-supreme", name: "Supreme Pizza", calories: 2560 },
    { id: "lc-3meat", name: "3 Meat Treat Pizza", calories: 2880 },
    { id: "lc-veggie", name: "Garden Veggie Pizza", calories: 2160 },
    { id: "lc-hawaiian", name: "Hawaiian Pizza", calories: 2400 }
  ],
  "Deep! Deep! Dish": [
    { id: "lc-deep-pepperoni", name: "Deep! Deep! Dish Pepperoni", calories: 2880 },
    { id: "lc-deep-cheese", name: "Deep! Deep! Dish Cheese", calories: 2640 },
    { id: "lc-deep-supreme", name: "Deep! Deep! Dish Supreme", calories: 3120 },
    { id: "lc-deep-3meat", name: "Deep! Deep! Dish 3 Meat Treat", calories: 3280 },
    { id: "lc-deep-veggie", name: "Deep! Deep! Dish Veggie", calories: 2520 },
    { id: "lc-deep-hawaiian", name: "Deep! Deep! Dish Hawaiian", calories: 2760 }
  ],
  "ExtraMostBestest®": [
    { id: "lc-emb-pepperoni", name: "ExtraMostBestest Pepperoni", calories: 2720 },
    { id: "lc-emb-cheese", name: "ExtraMostBestest Cheese", calories: 2480 },
    { id: "lc-emb-sausage", name: "ExtraMostBestest Sausage", calories: 2800 },
    { id: "lc-emb-supreme", name: "ExtraMostBestest Supreme", calories: 3040 },
    { id: "lc-emb-3meat", name: "ExtraMostBestest 3 Meat Treat", calories: 3120 }
  ],
  "Crazy Bread® & More": [
    { id: "lc-crazy-bread", name: "Crazy Bread", calories: 100 },
    { id: "lc-crazy-sauce", name: "Crazy Sauce", calories: 70 },
    { id: "lc-caesar-wings", name: "Caesar Wings", calories: 380 },
    { id: "lc-italian-cheese", name: "Italian Cheese Bread", calories: 150 },
    { id: "lc-pepperoni-cheese", name: "Pepperoni Cheese Bread", calories: 180 },
    { id: "lc-jalapeno-bread", name: "Jalapeño Cheese Bread", calories: 160 }
  ]
};

export const littleCaesarsItems: FastFoodItem[] = Object.values(LITTLE_CAESARS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Little Caesars",
      item: item.name,
      calories: item.calories,
      category: Object.entries(LITTLE_CAESARS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );