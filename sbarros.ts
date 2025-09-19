import { FastFoodItem } from '../types';

const SBARROS_CATEGORIES = {
  "Pizza Slices": [
    { id: "sbarros-slice-cheese", name: "NY Style Cheese Slice", calories: 410 },
    { id: "sbarros-slice-pepperoni", name: "Pepperoni Slice", calories: 480 },
    { id: "sbarros-slice-supreme", name: "Supreme Slice", calories: 520 },
    { id: "sbarros-slice-meat", name: "Meat Lovers Slice", calories: 540 },
    { id: "sbarros-slice-veggie", name: "Veggie Slice", calories: 440 },
    { id: "sbarros-slice-white", name: "White Pizza Slice", calories: 430 },
    { id: "sbarros-slice-buffalo", name: "Buffalo Chicken Slice", calories: 490 },
    { id: "sbarros-slice-bbq", name: "BBQ Chicken Slice", calories: 480 },
    { id: "sbarros-slice-hawaiian", name: "Hawaiian Slice", calories: 460 },
    { id: "sbarros-slice-margherita", name: "Margherita Slice", calories: 420 }
  ],
  "Whole Pizzas": [
    { id: "sbarros-cheese-pie", name: "NY Style Cheese Pizza", calories: 3280 },
    { id: "sbarros-pepperoni-pie", name: "Pepperoni Pizza", calories: 3840 },
    { id: "sbarros-supreme-pie", name: "Supreme Pizza", calories: 4160 },
    { id: "sbarros-meat-pie", name: "Meat Lovers Pizza", calories: 4320 },
    { id: "sbarros-veggie-pie", name: "Veggie Pizza", calories: 3520 },
    { id: "sbarros-white-pie", name: "White Pizza", calories: 3440 },
    { id: "sbarros-buffalo-pie", name: "Buffalo Chicken Pizza", calories: 3920 },
    { id: "sbarros-bbq-pie", name: "BBQ Chicken Pizza", calories: 3840 }
  ],
  "Stromboli & Rolls": [
    { id: "sbarros-stromboli", name: "Classic Stromboli", calories: 860 },
    { id: "sbarros-pepperoni-roll", name: "Pepperoni Roll", calories: 680 },
    { id: "sbarros-spinach-roll", name: "Spinach & Cheese Roll", calories: 620 },
    { id: "sbarros-chicken-roll", name: "Chicken Parm Roll", calories: 740 }
  ],
  "Pasta": [
    { id: "sbarros-spaghetti", name: "Spaghetti & Meatballs", calories: 840 },
    { id: "sbarros-baked-ziti", name: "Baked Ziti", calories: 760 },
    { id: "sbarros-fettuccine", name: "Fettuccine Alfredo", calories: 920 },
    { id: "sbarros-lasagna", name: "Meat Lasagna", calories: 880 },
    { id: "sbarros-chicken-parm", name: "Chicken Parmigiana", calories: 840 }
  ],
  "Salads": [
    { id: "sbarros-garden", name: "Garden Salad", calories: 120 },
    { id: "sbarros-caesar", name: "Caesar Salad", calories: 280 },
    { id: "sbarros-greek", name: "Greek Salad", calories: 260 }
  ],
  "Sides": [
    { id: "sbarros-breadsticks", name: "Garlic Breadsticks (2)", calories: 260 },
    { id: "sbarros-meatballs", name: "Italian Meatballs (3)", calories: 420 },
    { id: "sbarros-garlic-knots", name: "Garlic Knots (4)", calories: 320 }
  ],
  "Desserts": [
    { id: "sbarros-cannoli", name: "Cannoli", calories: 320 },
    { id: "sbarros-cheesecake", name: "NY Style Cheesecake", calories: 460 },
    { id: "sbarros-tiramisu", name: "Tiramisu", calories: 380 }
  ]
};

export const sbarrosItems: FastFoodItem[] = Object.values(SBARROS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Sbarro's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SBARROS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0] || 'Menu Items'
    }))
  );