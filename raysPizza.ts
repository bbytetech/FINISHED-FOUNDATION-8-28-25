import { FastFoodItem } from '../types';

const RAYS_PIZZA_CATEGORIES = {
  "Ray's Famous Slices": [
    { id: "rays-slice-plain", name: "Classic NY Cheese Slice", calories: 285 },
    { id: "rays-slice-pepperoni", name: "Pepperoni Slice", calories: 330 },
    { id: "rays-slice-supreme", name: "Supreme Slice", calories: 375 },
    { id: "rays-slice-white", name: "White Pizza Slice", calories: 300 },
    { id: "rays-slice-sicilian", name: "Sicilian Slice", calories: 410 },
    { id: "rays-slice-veggie", name: "Vegetarian Slice", calories: 270 },
    { id: "rays-slice-meat", name: "Meat Lovers Slice", calories: 390 },
    { id: "rays-slice-margherita", name: "Margherita Slice", calories: 275 }
  ],
  "Ray's Original Pies": [
    { id: "rays-pie-plain", name: "Classic Cheese Pizza", calories: 2280 },
    { id: "rays-pie-pepperoni", name: "Pepperoni Pizza", calories: 2640 },
    { id: "rays-pie-supreme", name: "Supreme Pizza", calories: 3000 },
    { id: "rays-pie-white", name: "White Pizza", calories: 2400 },
    { id: "rays-pie-sicilian", name: "Sicilian Pizza", calories: 3280 },
    { id: "rays-pie-veggie", name: "Vegetarian Pizza", calories: 2160 },
    { id: "rays-pie-meat", name: "Meat Lovers Pizza", calories: 3120 },
    { id: "rays-pie-margherita", name: "Margherita Pizza", calories: 2200 }
  ],
  "Ray's Specialty Pies": [
    { id: "rays-pie-buffalo", name: "Buffalo Chicken Pizza", calories: 2480 },
    { id: "rays-pie-bbq", name: "BBQ Chicken Pizza", calories: 2440 },
    { id: "rays-pie-pesto", name: "Pesto Pizza", calories: 2320 },
    { id: "rays-pie-eggplant", name: "Eggplant Parmesan Pizza", calories: 2360 },
    { id: "rays-pie-grandma", name: "Grandma Pizza", calories: 2280 }
  ],
  "Ray's Calzones & Rolls": [
    { id: "rays-calzone", name: "Classic Calzone", calories: 580 },
    { id: "rays-stromboli", name: "Stromboli", calories: 620 },
    { id: "rays-pepperoni-roll", name: "Pepperoni Roll", calories: 480 },
    { id: "rays-garlic-knots", name: "Garlic Knots (6)", calories: 220 }
  ],
  "Garden Fresh Salads": [
    { id: "rays-house", name: "House Salad", calories: 180 },
    { id: "rays-caesar", name: "Caesar Salad", calories: 220 },
    { id: "rays-greek", name: "Greek Salad", calories: 260 },
    { id: "rays-antipasto", name: "Antipasto Salad", calories: 320 }
  ],
  "Ray's Famous Heroes": [
    { id: "rays-chicken-parm", name: "Chicken Parmigiana Hero", calories: 780 },
    { id: "rays-meatball", name: "Meatball Parmigiana Hero", calories: 820 },
    { id: "rays-eggplant-parm", name: "Eggplant Parmigiana Hero", calories: 680 },
    { id: "rays-sausage-pepper", name: "Sausage & Peppers Hero", calories: 740 }
  ],
  "Ray's Starters & Sides": [
    { id: "rays-wings", name: "Buffalo Wings (6)", calories: 520 },
    { id: "rays-mozzarella", name: "Mozzarella Sticks (6)", calories: 480 },
    { id: "rays-garlic-bread", name: "Garlic Bread", calories: 240 },
    { id: "rays-fries", name: "French Fries", calories: 320 }
  ],
  "Ray's Refreshments": [
    { id: "rays-soda", name: "Fountain Soda", calories: 150 },
    { id: "rays-bottled-water", name: "Bottled Water", calories: 0 },
    { id: "rays-san-pellegrino", name: "San Pellegrino", calories: 0 }
  ]
};

export const raysPizzaItems: FastFoodItem[] = Object.values(RAYS_PIZZA_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Rays Pizza",
      item: item.name,
      calories: item.calories,
      category: Object.entries(RAYS_PIZZA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );