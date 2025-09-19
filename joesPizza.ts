import { FastFoodItem } from '../types';

const JOES_PIZZA_CATEGORIES = {
  "New York Style Slices": [
    { id: "joes-slice-plain", name: "Classic NY Cheese Slice", calories: 240 },
    { id: "joes-slice-pep", name: "Pepperoni Slice", calories: 290 },
    { id: "joes-slice-mushroom", name: "Mushroom Slice", calories: 250 },
    { id: "joes-slice-sausage", name: "Italian Sausage Slice", calories: 310 }
  ],
  "Specialty Slices": [
    { id: "joes-slice-supreme", name: "Supreme Slice", calories: 340 },
    { id: "joes-slice-white", name: "White Slice", calories: 280 },
    { id: "joes-slice-fresh-mozz", name: "Fresh Mozzarella Slice", calories: 260 }
  ],
  "Whole NY Style Pies": [
    { id: "joes-pie-plain", name: "Classic NY Cheese Pizza", calories: 1920 },
    { id: "joes-pie-pep", name: "Pepperoni Pizza", calories: 2320 },
    { id: "joes-pie-supreme", name: "Supreme Pizza", calories: 2720 },
    { id: "joes-pie-white", name: "White Pizza", calories: 2240 },
    { id: "joes-pie-fresh-mozz", name: "Fresh Mozzarella Pizza", calories: 2080 }
  ],
  "Joe's Starters": [
    { id: "joes-wings", name: "Wings (6)", calories: 520 },
    { id: "joes-salad", name: "House Salad", calories: 150 },
    { id: "joes-garlic-knots", name: "Garlic Knots (6)", calories: 220 },
    { id: "joes-meatballs", name: "Homemade Meatballs", calories: 380 }
  ]
};

export const joesPizzaItems: FastFoodItem[] = Object.values(JOES_PIZZA_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Joe's Pizza",
      item: item.name,
      calories: item.calories,
      category: Object.entries(JOES_PIZZA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );