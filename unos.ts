import { FastFoodItem } from '../types';

const UNOS_CATEGORIES = {
  "Signature Chicago Deep Dish": [
    { id: "unos-cheese-deep", name: "Deep Dish Cheese Pizza", calories: 4160 },
    { id: "unos-pepperoni-deep", name: "Deep Dish Pepperoni Pizza", calories: 4480 },
    { id: "unos-supreme-deep", name: "Deep Dish Supreme Pizza", calories: 4640 },
    { id: "unos-meat-deep", name: "Deep Dish Meat Market Pizza", calories: 4880 },
    { id: "unos-veggie-deep", name: "Deep Dish Veggie Pizza", calories: 3920 },
    { id: "unos-bbq-chicken-deep", name: "Deep Dish BBQ Chicken Pizza", calories: 4320 },
    { id: "unos-spinach-deep", name: "Deep Dish Spinach & Feta Pizza", calories: 4080 },
    { id: "unos-buffalo-deep", name: "Deep Dish Buffalo Chicken Pizza", calories: 4400 }
  ],
  "Chicago Thin Crust Pizzas": [
    { id: "unos-cheese-thin", name: "Thin Crust Cheese Pizza", calories: 1840 },
    { id: "unos-pepperoni-thin", name: "Thin Crust Pepperoni Pizza", calories: 2000 },
    { id: "unos-veggie-thin", name: "Thin Crust Veggie Pizza", calories: 1760 },
    { id: "unos-hawaiian-thin", name: "Thin Crust Hawaiian Pizza", calories: 1920 },
    { id: "unos-supreme-thin", name: "Thin Crust Supreme Pizza", calories: 2080 },
    { id: "unos-buffalo-thin", name: "Thin Crust Buffalo Chicken Pizza", calories: 1960 }
  ],
  "Appetizers & Sides": [
    { id: "unos-wings", name: "Buffalo Wings (8 pc)", calories: 760 },
    { id: "unos-spinach-dip", name: "Spinach & Artichoke Dip", calories: 980 },
    { id: "unos-mozzarella", name: "Mozzarella Sticks", calories: 740 },
    { id: "unos-garlic-bread", name: "Garlic Bread with Cheese", calories: 580 },
    { id: "unos-calamari", name: "Crispy Calamari", calories: 620 }
  ],
  "Fresh Salads": [
    { id: "unos-house", name: "House Salad", calories: 240 },
    { id: "unos-caesar", name: "Caesar Salad", calories: 360 },
    { id: "unos-chopped", name: "Chopped Power Salad", calories: 280 },
    { id: "unos-wedge", name: "Wedge Salad", calories: 420 }
  ],
  "Desserts": [
    { id: "unos-chocolate-cake", name: "Deep Dish Chocolate Cake", calories: 890 },
    { id: "unos-apple-pie", name: "Deep Dish Apple Pie", calories: 780 },
    { id: "unos-brownie-sundae", name: "Brownie Sundae", calories: 920 }
  ]
};

export const unosItems: FastFoodItem[] = Object.values(UNOS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Uno's Pizzeria",
      item: item.name,
      calories: item.calories,
      category: Object.entries(UNOS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );