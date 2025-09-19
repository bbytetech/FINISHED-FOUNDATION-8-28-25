import { FastFoodItem } from '../types';

const JETS_PIZZA_CATEGORIES = {
  "Pan Style Pizza": [
    { id: "jets-cheese-pan", name: "Pan Style Cheese Pizza", calories: 2160 },
    { id: "jets-pepperoni-pan", name: "Pan Style Pepperoni Pizza", calories: 2320 },
    { id: "jets-supreme-pan", name: "Pan Style Supreme Pizza", calories: 2720 },
    { id: "jets-meat-pan", name: "Pan Style Meat Lovers Pizza", calories: 3600 },
    { id: "jets-veggie-pan", name: "Pan Style Garden Veggie Pizza", calories: 2080 },
    { id: "jets-bbq-pan", name: "Pan Style BBQ Chicken Pizza", calories: 2480 },
    { id: "jets-buffalo-pan", name: "Pan Style Buffalo Chicken Pizza", calories: 2560 }
  ],
  "Thin Crust Pizza": [
    { id: "jets-cheese-thin", name: "Thin Crust Cheese Pizza", calories: 1840 },
    { id: "jets-pepperoni-thin", name: "Thin Crust Pepperoni Pizza", calories: 2000 },
    { id: "jets-supreme-thin", name: "Thin Crust Supreme Pizza", calories: 2240 },
    { id: "jets-meat-thin", name: "Thin Crust Meat Lovers Pizza", calories: 2320 },
    { id: "jets-veggie-thin", name: "Thin Crust Veggie Pizza", calories: 1840 },
    { id: "jets-hawaiian-thin", name: "Thin Crust Hawaiian Pizza", calories: 1920 }
  ],
  "Specialty Pizzas": [
    { id: "jets-bbq", name: "BBQ Chicken Pizza", calories: 2480 },
    { id: "jets-buffalo", name: "Buffalo Chicken Pizza", calories: 2400 },
    { id: "jets-alfredo", name: "Chicken Alfredo Pizza", calories: 2640 },
    { id: "jets-philly", name: "Philly Cheesesteak Pizza", calories: 2720 },
    { id: "jets-spicy", name: "Spicy Italian Pizza", calories: 2560 }
  ],
  "Sides & Extras": [
    { id: "jets-breadsticks", name: "Breadsticks (2)", calories: 220 },
    { id: "jets-wings", name: "Wings (6 pc)", calories: 520 },
    { id: "jets-salad", name: "Garden Salad", calories: 120 },
    { id: "jets-cheese-sticks", name: "Cheese Sticks", calories: 440 },
    { id: "jets-potato-wedges", name: "Potato Wedges", calories: 320 }
  ],
  "Sweet Treats": [
    { id: "jets-cinnamon", name: "Cinnamon Sticks", calories: 280 }
  ]
};

export const jetsPizzaItems: FastFoodItem[] = Object.values(JETS_PIZZA_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Jet's Pizza",
      item: item.name,
      calories: item.calories,
      category: Object.entries(JETS_PIZZA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );