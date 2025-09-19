import { FastFoodItem } from '../types';

const CICIS_CATEGORIES = {
  "Pan Style Pizza": [
    { id: "cicis-cheese", name: "Pan Style Cheese Slice", calories: 380 },
    { id: "cicis-pepperoni", name: "Pan Style Pepperoni Slice", calories: 420 },
    { id: "cicis-super", name: "Super Slice", calories: 460 },
    { id: "cicis-veggie", name: "Garden of Eatin' Slice", calories: 390 },
    { id: "cicis-meat", name: "Meat Slice", calories: 450 },
    { id: "cicis-bbq", name: "BBQ Chicken Slice", calories: 410 }
  ],
  "Thin Crust Pizza": [
    { id: "cicis-thin-cheese", name: "Thin Crust Cheese Slice", calories: 290 },
    { id: "cicis-thin-pepperoni", name: "Thin Crust Pepperoni Slice", calories: 320 }
  ],
  "Sides & Appetizers": [
    { id: "cicis-breadsticks", name: "Breadsticks (2)", calories: 240 },
    { id: "cicis-wings", name: "Wings (6 pc)", calories: 520 },
    { id: "cicis-salad", name: "Garden Salad", calories: 140 }
  ],
  "Desserts": [
    { id: "cicis-cinnamon", name: "Cinnamon Rolls (2)", calories: 440 },
    { id: "cicis-brownies", name: "Brownies (2)", calories: 480 },
    { id: "cicis-apple", name: "Apple Dessert Pizza (Slice)", calories: 380 },
    { id: "cicis-bavarian", name: "Bavarian Cream Dessert Pizza (Slice)", calories: 420 }
  ]
};

export const cicisItems: FastFoodItem[] = Object.values(CICIS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "CiCi's Pizza",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CICIS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );