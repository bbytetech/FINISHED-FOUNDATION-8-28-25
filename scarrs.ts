import { FastFoodItem } from '../types';

// Export categories for menu organization
const SCARRS_CATEGORIES = {
  "Signature NY Style Slices": [
    { id: "scarrs-slice-plain", name: "Classic Cheese Slice", calories: 270 },
    { id: "scarrs-slice-pepperoni", name: "Pepperoni Slice", calories: 320 },
    { id: "scarrs-slice-sicilian", name: "Sicilian Slice", calories: 390 },
    { id: "scarrs-slice-vodka", name: "Vodka Sauce Slice", calories: 310 },
    { id: "scarrs-slice-vegan", name: "Vegan Slice", calories: 260 },
    { id: "scarrs-slice-white", name: "White Slice", calories: 290 },
    { id: "scarrs-slice-buffalo", name: "Buffalo Chicken Slice", calories: 340 },
    { id: "scarrs-slice-mushroom", name: "Wild Mushroom Slice", calories: 280 },
    { id: "scarrs-slice-margherita", name: "Margherita Slice", calories: 250 },
    { id: "scarrs-slice-supreme", name: "Supreme Slice", calories: 360 },
    { id: "scarrs-slice-pesto", name: "Pesto Slice", calories: 300 },
    { id: "scarrs-slice-grandma", name: "Grandma Slice", calories: 330 }
  ],
  "Whole NY Style Pizzas": [
    { id: "scarrs-pie-plain", name: "Classic Cheese Pizza", calories: 2160 },
    { id: "scarrs-pie-pep", name: "Pepperoni Pizza", calories: 2560 },
    { id: "scarrs-pie-sicilian", name: "Sicilian Pizza", calories: 3120 },
    { id: "scarrs-pie-vodka", name: "Vodka Sauce Pizza", calories: 2480 },
    { id: "scarrs-pie-vegan", name: "Vegan Pizza", calories: 2080 },
    { id: "scarrs-pie-white", name: "White Pizza", calories: 2320 },
    { id: "scarrs-pie-buffalo", name: "Buffalo Chicken Pizza", calories: 2720 },
    { id: "scarrs-pie-mushroom", name: "Wild Mushroom Pizza", calories: 2240 },
    { id: "scarrs-pie-margherita", name: "Margherita Pizza", calories: 2000 },
    { id: "scarrs-pie-supreme", name: "Supreme Pizza", calories: 2880 },
    { id: "scarrs-pie-pesto", name: "Pesto Pizza", calories: 2400 },
    { id: "scarrs-pie-grandma", name: "Grandma Pizza", calories: 2640 }
  ],
  "Appetizers & Sides": [
    { id: "scarrs-wings", name: "Wings (6)", calories: 520 },
    { id: "scarrs-salad", name: "House Salad", calories: 150 },
    { id: "scarrs-garlic-knots", name: "Garlic Knots (6)", calories: 220 },
    { id: "scarrs-meatballs", name: "Homemade Meatballs", calories: 380 },
    { id: "scarrs-garlic-bread", name: "Garlic Bread", calories: 240 },
    { id: "scarrs-caesar", name: "Caesar Salad", calories: 280 }
  ],
  "Beverages": [
    { id: "scarrs-soda", name: "Fountain Soda", calories: 150 },
    { id: "scarrs-iced-tea", name: "Fresh Brewed Iced Tea", calories: 5 }
  ]
};

// Transform categories into a flat array for the menu
export const scarrsItems: FastFoodItem[] = Object.values(SCARRS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Scarr's Pizza",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SCARRS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );