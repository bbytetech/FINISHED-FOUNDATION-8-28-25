import { FastFoodItem } from '../types';

const GRIMALDI_CATEGORIES = {
  "Signature NY Style Pizzas": [
    { id: "grimaldis-margherita", name: "Margherita Pizza", calories: 2000 },
    { id: "grimaldis-marinara", name: "Marinara Pizza", calories: 1760 },
    { id: "grimaldis-white", name: "White Pizza", calories: 2240 },
    { id: "grimaldis-pepperoni", name: "Pepperoni Pizza", calories: 2400 },
    { id: "grimaldis-quattro", name: "Quattro Formaggi Pizza", calories: 2560 },
    { id: "grimaldis-pesto", name: "Pesto Pizza", calories: 2320 },
    { id: "grimaldis-bruschetta", name: "Bruschetta Pizza", calories: 2160 },
    { id: "grimaldis-garden", name: "Garden Pizza", calories: 2080 }
  ],
  "Gourmet Specialty Pies": [
    { id: "grimaldis-don", name: "Don Pizza", calories: 2720 },
    { id: "grimaldis-calabrese", name: "Calabrese Pizza", calories: 2640 },
    { id: "grimaldis-prosciutto", name: "Prosciutto Pizza", calories: 2480 },
    { id: "grimaldis-alla-vodka", name: "Alla Vodka Pizza", calories: 2560 },
    { id: "grimaldis-truffle", name: "Black Truffle Pizza", calories: 2680 },
    { id: "grimaldis-arugula", name: "Arugula Pizza", calories: 2240 }
  ],
  "Calzones": [
    { id: "grimaldis-calzone", name: "Classic Calzone", calories: 580 },
    { id: "grimaldis-spinach-calzone", name: "Spinach & Ricotta Calzone", calories: 540 },
    { id: "grimaldis-meat-calzone", name: "Meat Lover's Calzone", calories: 680 },
    { id: "grimaldis-veggie-calzone", name: "Vegetarian Calzone", calories: 520 }
  ],
  "Fresh Salads": [
    { id: "grimaldis-caesar", name: "Caesar Salad", calories: 220 },
    { id: "grimaldis-house", name: "House Salad", calories: 180 },
    { id: "grimaldis-mediterranean", name: "Mediterranean Salad", calories: 240 },
    { id: "grimaldis-caprese", name: "Caprese Salad", calories: 260 },
    { id: "grimaldis-arugula-salad", name: "Arugula & Parmesan Salad", calories: 200 },
    { id: "grimaldis-antipasto", name: "Antipasto Salad", calories: 320 }
  ],
  "Appetizers": [
    { id: "grimaldis-garlic-bread", name: "Garlic Bread", calories: 240 },
    { id: "grimaldis-meatballs", name: "Homemade Meatballs", calories: 420 },
    { id: "grimaldis-bruschetta-app", name: "Bruschetta", calories: 280 },
    { id: "grimaldis-antipasto-plate", name: "Antipasto Plate", calories: 440 },
    { id: "grimaldis-calamari", name: "Fried Calamari", calories: 460 }
  ],
  "Desserts": [
    { id: "grimaldis-cheesecake", name: "New York Cheesecake", calories: 460 },
    { id: "grimaldis-tiramisu", name: "Tiramisu", calories: 420 },
    { id: "grimaldis-cannoli", name: "Cannoli", calories: 380 },
    { id: "grimaldis-zeppole", name: "Zeppole", calories: 340 },
    { id: "grimaldis-gelato", name: "Italian Gelato", calories: 280 }
  ],
  "Beverages": [
    { id: "grimaldis-san-pellegrino", name: "San Pellegrino", calories: 0 },
    { id: "grimaldis-italian-soda", name: "Italian Soda", calories: 120 },
    { id: "grimaldis-espresso", name: "Espresso", calories: 0 },
    { id: "grimaldis-cappuccino", name: "Cappuccino", calories: 80 },
    { id: "grimaldis-soft-drinks", name: "Soft Drinks", calories: 140 }
  ]
};

export const grimaldisItems: FastFoodItem[] = Object.values(GRIMALDI_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Grimaldi's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(GRIMALDI_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );