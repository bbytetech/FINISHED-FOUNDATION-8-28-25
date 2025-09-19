import { FastFoodItem } from '../types';

const GINOS_EAST_CATEGORIES = {
  "World Famous Deep Dish": [
    { id: "ginos-cheese-deep", name: "Deep Dish Cheese Pizza", calories: 4160 },
    { id: "ginos-pepperoni-deep", name: "Deep Dish Pepperoni Pizza", calories: 4480 },
    { id: "ginos-supreme-deep", name: "Deep Dish Supreme Pizza", calories: 4640 },
    { id: "ginos-meat-deep", name: "Deep Dish Meat Market Pizza", calories: 4880 },
    { id: "ginos-veggie-deep", name: "Deep Dish Veggie Pizza", calories: 3920 },
    { id: "ginos-bbq-chicken-deep", name: "Deep Dish BBQ Chicken Pizza", calories: 4320 },
    { id: "ginos-spinach-deep", name: "Deep Dish Spinach & Feta Pizza", calories: 4080 },
    { id: "ginos-buffalo-deep", name: "Deep Dish Buffalo Chicken Pizza", calories: 4400 }
  ],
  "Chicago Thin Crust": [
    { id: "ginos-cheese-thin", name: "Thin Crust Cheese Pizza", calories: 1840 },
    { id: "ginos-pepperoni-thin", name: "Thin Crust Pepperoni Pizza", calories: 2000 },
    { id: "ginos-veggie-thin", name: "Thin Crust Veggie Pizza", calories: 1760 },
    { id: "ginos-hawaiian-thin", name: "Thin Crust Hawaiian Pizza", calories: 1920 },
    { id: "ginos-supreme-thin", name: "Thin Crust Supreme Pizza", calories: 2080 },
    { id: "ginos-buffalo-thin", name: "Thin Crust Buffalo Chicken Pizza", calories: 1960 }
  ],
  "Gino's Starters": [
    { id: "ginos-wings", name: "Buffalo Wings (8 pc)", calories: 760 },
    { id: "ginos-spinach-dip", name: "Spinach & Artichoke Dip", calories: 980 },
    { id: "ginos-mozzarella", name: "Mozzarella Sticks", calories: 740 },
    { id: "ginos-garlic-bread", name: "Garlic Bread with Cheese", calories: 580 },
    { id: "ginos-calamari", name: "Crispy Calamari", calories: 620 }
  ],
  "Garden Fresh Salads": [
    { id: "ginos-house", name: "House Salad", calories: 240 },
    { id: "ginos-caesar", name: "Caesar Salad", calories: 360 },
    { id: "ginos-chopped", name: "Chopped Power Salad", calories: 280 },
    { id: "ginos-wedge", name: "Wedge Salad", calories: 420 }
  ],
  "Sweet Endings": [
    { id: "ginos-chocolate-cake", name: "Deep Dish Chocolate Cake", calories: 890 },
    { id: "ginos-apple-pie", name: "Deep Dish Apple Pie", calories: 780 },
    { id: "ginos-brownie-sundae", name: "Brownie Sundae", calories: 920 }
  ]
};

export const ginosEastItems: FastFoodItem[] = Object.values(GINOS_EAST_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Gino's East",
      item: item.name,
      calories: item.calories,
      category: Object.entries(GINOS_EAST_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );