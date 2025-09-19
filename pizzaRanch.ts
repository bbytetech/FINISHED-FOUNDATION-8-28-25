import { FastFoodItem } from '../types';

const PIZZA_RANCH_CATEGORIES = {
  "Signature Pizza Slices": [
    { id: "ranch-cheese", name: "Classic Cheese Slice", calories: 270 },
    { id: "ranch-pepperoni", name: "Pepperoni Slice", calories: 290 },
    { id: "ranch-supreme", name: "Supreme Slice", calories: 340 },
    { id: "ranch-meat", name: "Meat Slice", calories: 450 },
    { id: "ranch-veggie", name: "Garden Veggie Slice", calories: 260 },
    { id: "ranch-bbq", name: "BBQ Chicken Slice", calories: 310 },
    { id: "ranch-buffalo", name: "Buffalo Chicken Slice", calories: 320 }
  ],
  "Whole Pizzas": [
    { id: "ranch-cheese-pie", name: "Classic Cheese Pizza", calories: 2160 },
    { id: "ranch-pepperoni-pie", name: "Pepperoni Pizza", calories: 2320 },
    { id: "ranch-supreme-pie", name: "Supreme Pizza", calories: 2720 },
    { id: "ranch-meat-pie", name: "Meat Lovers Pizza", calories: 3600 },
    { id: "ranch-veggie-pie", name: "Garden Veggie Pizza", calories: 2080 },
    { id: "ranch-bbq-pie", name: "BBQ Chicken Pizza", calories: 2480 },
    { id: "ranch-buffalo-pie", name: "Buffalo Chicken Pizza", calories: 2560 }
  ],
  "Chicken & Wings": [
    { id: "ranch-chicken-2pc", name: "Crispy Ranch Chicken (2 pc)", calories: 440 },
    { id: "ranch-chicken-4pc", name: "Crispy Ranch Chicken (4 pc)", calories: 880 },
    { id: "ranch-wings", name: "Wings (6 pc)", calories: 520 }
  ],
  "Sides & Extras": [
    { id: "ranch-mashed", name: "Mashed Potatoes & Gravy", calories: 180 },
    { id: "ranch-corn", name: "Sweet Corn", calories: 120 },
    { id: "ranch-green-beans", name: "Green Beans", calories: 90 },
    { id: "ranch-coleslaw", name: "Coleslaw", calories: 140 }
  ]
};

export const pizzaRanchItems: FastFoodItem[] = Object.values(PIZZA_RANCH_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Pizza Ranch",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PIZZA_RANCH_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );