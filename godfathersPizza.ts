import { FastFoodItem } from '../types';
const GODFATHERS_PIZZA_CATEGORIES = {
  "Classic Pizzas": [
    { id: "godfathers-cheese", name: "Classic Cheese Pizza", calories: 2080 },
    { id: "godfathers-pepperoni", name: "Pepperoni Pizza", calories: 2240 },
    { id: "godfathers-combo", name: "Combo Pizza", calories: 2560 },
    { id: "godfathers-taco", name: "Taco Pizza", calories: 2720 },
    { id: "godfathers-bacon", name: "Bacon Cheeseburger Pizza", calories: 2800 },
    { id: "godfathers-veggie", name: "Garden Veggie Pizza", calories: 2160 },
    { id: "godfathers-meat", name: "All Meat Combo Pizza", calories: 2960 },
    { id: "godfathers-supreme", name: "Super Supreme Pizza", calories: 2880 },
    { id: "godfathers-hawaiian", name: "Hawaiian Pizza", calories: 2400 }
  ],
  "Specialty Pizzas": [
    { id: "godfathers-bbq", name: "BBQ Chicken Pizza", calories: 2480 },
    { id: "godfathers-buffalo", name: "Buffalo Chicken Pizza", calories: 2400 },
    { id: "godfathers-alfredo", name: "Chicken Alfredo Pizza", calories: 2640 },
    { id: "godfathers-philly", name: "Philly Cheesesteak Pizza", calories: 2720 },
    { id: "godfathers-spicy", name: "Spicy Italian Pizza", calories: 2560 }
  ],
  "Sides": [
    { id: "godfathers-breadsticks", name: "Breadsticks (2)", calories: 220 },
    { id: "godfathers-wings", name: "Hot Wings (6 pc)", calories: 520 },
    { id: "godfathers-salad", name: "Garden Salad", calories: 120 },
    { id: "godfathers-cheese-sticks", name: "Cheese Sticks", calories: 440 },
    { id: "godfathers-potato-wedges", name: "Potato Wedges", calories: 320 },
    { id: "godfathers-cinnamon", name: "Cinnamon Streusel Dessert Pizza", calories: 380 },
    { id: "godfathers-monkey-bread", name: "Monkey Bread", calories: 420 }
  ]
};

export const godfathersPizzaItems: FastFoodItem[] = Object.values(GODFATHERS_PIZZA_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Godfather's Pizza",
      item: item.name,
      calories: item.calories,
      category: Object.entries(GODFATHERS_PIZZA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );