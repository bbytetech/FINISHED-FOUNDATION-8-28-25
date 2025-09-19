import { FastFoodItem } from '../types';

const ROCKY_ROCOCOS_CATEGORIES = {
  "Signature Pan Style Slices": [
    { id: "rocky-cheese", name: "Pan Style Cheese Slice", calories: 380 },
    { id: "rocky-pepperoni", name: "Pan Style Pepperoni Slice", calories: 420 },
    { id: "rocky-super", name: "Super Slice", calories: 460 },
    { id: "rocky-veggie", name: "Garden of Eatin' Slice", calories: 390 },
    { id: "rocky-meat", name: "Meat Slice", calories: 450 },
    { id: "rocky-bbq", name: "BBQ Chicken Slice", calories: 410 }
  ],
  "Thin Crust Slices": [
    { id: "rocky-thin-cheese", name: "Thin Crust Cheese Slice", calories: 290 },
    { id: "rocky-thin-pepperoni", name: "Thin Crust Pepperoni Slice", calories: 320 }
  ],
  "Full Size Pan Pizzas": [
    { id: "rocky-cheese-pan", name: "Pan Style Cheese Pizza", calories: 3040 },
    { id: "rocky-pepperoni-pan", name: "Pan Style Pepperoni Pizza", calories: 3360 },
    { id: "rocky-super-pan", name: "Super Pizza", calories: 3680 },
    { id: "rocky-veggie-pan", name: "Garden of Eatin' Pizza", calories: 3120 },
    { id: "rocky-meat-pan", name: "Meat Lovers Pizza", calories: 3600 },
    { id: "rocky-bbq-pan", name: "BBQ Chicken Pizza", calories: 3280 }
  ],
  "Appetizers & Sides": [
    { id: "rocky-breadsticks", name: "Breadsticks (2)", calories: 240 },
    { id: "rocky-wings", name: "Wings (6 pc)", calories: 520 },
    { id: "rocky-salad", name: "Garden Salad", calories: 140 }
  ],
  "Sweet Treats": [
    { id: "rocky-cinnamon", name: "Cinnamon Sticks", calories: 280 }
  ]
};

export const rockyRococosItems: FastFoodItem[] = Object.values(ROCKY_ROCOCOS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Rocky Rococo's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(ROCKY_ROCOCOS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );