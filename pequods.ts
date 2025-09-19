import { FastFoodItem } from '../types';

const PEQUODS_CATEGORIES = {
  "Famous Pan Pizza": [
    { id: "pequods-cheese", name: "Pan Style Cheese Slice", calories: 380 },
    { id: "pequods-pepperoni", name: "Pan Style Pepperoni Slice", calories: 420 },
    { id: "pequods-super", name: "Super Slice", calories: 460 },
    { id: "pequods-veggie", name: "Garden of Eatin' Slice", calories: 390 },
    { id: "pequods-meat", name: "Meat Slice", calories: 450 },
    { id: "pequods-bbq", name: "BBQ Chicken Slice", calories: 410 }
  ],
  "Chicago Thin Crust": [
    { id: "pequods-thin-cheese", name: "Thin Crust Cheese Slice", calories: 290 },
    { id: "pequods-thin-pepperoni", name: "Thin Crust Pepperoni Slice", calories: 320 }
  ],
  "Full Size Pan Pizzas": [
    { id: "pequods-cheese-pan", name: "Pan Style Cheese Pizza", calories: 3040 },
    { id: "pequods-pepperoni-pan", name: "Pan Style Pepperoni Pizza", calories: 3360 },
    { id: "pequods-super-pan", name: "Super Pizza", calories: 3680 },
    { id: "pequods-veggie-pan", name: "Garden of Eatin' Pizza", calories: 3120 },
    { id: "pequods-meat-pan", name: "Meat Lovers Pizza", calories: 3600 },
    { id: "pequods-bbq-pan", name: "BBQ Chicken Pizza", calories: 3280 }
  ],
  "Appetizers & Sides": [
    { id: "pequods-breadsticks", name: "Breadsticks (2)", calories: 240 },
    { id: "pequods-wings", name: "Wings (6 pc)", calories: 520 },
    { id: "pequods-salad", name: "Garden Salad", calories: 140 }
  ]
};

export const pequodsItems: FastFoodItem[] = Object.values(PEQUODS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Pequod's Pizza",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PEQUODS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );