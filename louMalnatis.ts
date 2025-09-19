import { FastFoodItem } from '../types';

const LOU_MALNATIS_CATEGORIES = {
  "World Famous Deep Dish": [
    { id: "lm-cheese-deep", name: "Deep Dish Cheese Pizza", calories: 4160 },
    { id: "lm-sausage-deep", name: "Deep Dish Sausage Pizza", calories: 4480 },
    { id: "lm-pepperoni-deep", name: "Deep Dish Pepperoni Pizza", calories: 4320 },
    { id: "lm-spinach-deep", name: "Deep Dish Spinach Pizza", calories: 4080 },
    { id: "lm-mushroom-deep", name: "Deep Dish Mushroom Pizza", calories: 4240 },
    { id: "lm-veggie-deep", name: "Deep Dish Veggie Pizza", calories: 3920 },
    { id: "lm-lou-deep", name: "The Lou Deep Dish Pizza", calories: 4400 },
    { id: "lm-crustless-deep", name: "Crustless Deep Dish Pizza", calories: 3200 }
  ],
  "Thin Crust Pizza": [
    { id: "lm-cheese-thin", name: "Thin Crust Cheese Pizza", calories: 1840 },
    { id: "lm-sausage-thin", name: "Thin Crust Sausage Pizza", calories: 2160 },
    { id: "lm-pepperoni-thin", name: "Thin Crust Pepperoni Pizza", calories: 2080 },
    { id: "lm-spinach-thin", name: "Thin Crust Spinach Pizza", calories: 1920 },
    { id: "lm-mushroom-thin", name: "Thin Crust Mushroom Pizza", calories: 1960 },
    { id: "lm-veggie-thin", name: "Thin Crust Veggie Pizza", calories: 1760 }
  ],
  "Lou's Starters": [
    { id: "lm-wings", name: "Wings (6)", calories: 530 },
    { id: "lm-bread", name: "Garlic Bread", calories: 210 },
    { id: "lm-salad", name: "House Salad", calories: 240 },
    { id: "lm-mozzarella", name: "Mozzarella Sticks", calories: 420 }
  ]
};

export const louMalnatisItems: FastFoodItem[] = Object.values(LOU_MALNATIS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Lou Malnati's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(LOU_MALNATIS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );