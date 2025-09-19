import { FastFoodItem } from '../types';

const YARD_HOUSE_CATEGORIES = {
  "Appetizers & Snacks": [
    { id: "yh-onion-rings", name: "Onion Ring Tower", calories: 1580 },
    { id: "yh-chicken-nachos", name: "Chicken Nachos", calories: 1920 },
    { id: "yh-wings", name: "Traditional Wings (8)", calories: 760 },
    { id: "yh-spinach-dip", name: "Spinach & Artichoke Dip", calories: 1240 },
    { id: "yh-poke-nachos", name: "Poke Nachos", calories: 840 },
    { id: "yh-queso-dip", name: "Queso & Chips", calories: 1180 }
  ],
  "Yard House Burgers": [
    { id: "yh-classic-burger", name: "Classic Cheeseburger", calories: 1210 },
    { id: "yh-bbq-bacon", name: "BBQ Bacon Cheddar Burger", calories: 1460 },
    { id: "yh-truffle", name: "Truffle Cheeseburger", calories: 1380 },
    { id: "yh-kuaili", name: "Kuaili Burger", calories: 1290 }
  ],
  "Street Tacos": [
    { id: "yh-fish-tacos", name: "Baja Fish Tacos", calories: 920 },
    { id: "yh-asada-tacos", name: "Carne Asada Tacos", calories: 840 },
    { id: "yh-korean-tacos", name: "Korean Beef Tacos", calories: 890 },
    { id: "yh-chicken-tacos", name: "Nashville Hot Chicken Tacos", calories: 860 }
  ],
  "House Entrees": [
    { id: "yh-mac-chicken", name: "Mac & Cheese with Chicken", calories: 1480 },
    { id: "yh-ribeye", name: "Ribeye (14 oz)", calories: 1240 },
    { id: "yh-ny-steak", name: "New York Steak", calories: 960 },
    { id: "yh-fish-chips", name: "Fish & Chips", calories: 1380 },
    { id: "yh-salmon", name: "Grilled Salmon", calories: 780 }
  ],
  "Yard House Pizzas": [
    { id: "yh-margherita", name: "Margherita Pizza", calories: 1140 },
    { id: "yh-bbq-chicken", name: "BBQ Chicken Pizza", calories: 1280 },
    { id: "yh-pepperoni", name: "Pepperoni & Mushroom Pizza", calories: 1320 },
    { id: "yh-truffle-pizza", name: "Truffle Mushroom Pizza", calories: 1240 }
  ],
  "Fresh Salads": [
    { id: "yh-caesar", name: "Chicken Caesar Salad", calories: 880 },
    { id: "yh-cobb", name: "Cobb Salad", calories: 940 },
    { id: "yh-ahi-tuna", name: "Ahi Tuna Salad", calories: 640 },
    { id: "yh-bbq-chicken-salad", name: "BBQ Chicken Salad", calories: 820 }
  ],
  "House Sides": [
    { id: "yh-fries", name: "French Fries", calories: 380 },
    { id: "yh-sweet-potato", name: "Sweet Potato Fries", calories: 420 },
    { id: "yh-mac-cheese", name: "Mac & Cheese", calories: 680 },
    { id: "yh-brussels", name: "Brussels Sprouts", calories: 220 },
    { id: "yh-mashed", name: "Garlic Mashed Potatoes", calories: 280 }
  ],
  "Sweet Endings": [
    { id: "yh-brownie", name: "Chocolate Soufflé", calories: 1180 },
    { id: "yh-cheesecake", name: "NY Style Cheesecake", calories: 940 },
    { id: "yh-bread-pudding", name: "Bread Pudding", calories: 1040 }
  ],
  "Refreshments": [
    { id: "yh-coke", name: "Coca-Cola", calories: 200 },
    { id: "yh-sprite", name: "Sprite", calories: 200 },
    { id: "yh-lemonade", name: "Fresh Lemonade", calories: 180 },
    { id: "yh-tea", name: "Fresh-Brewed Iced Tea", calories: 0 }
  ]
};

export const yardHouseItems: FastFoodItem[] = Object.values(YARD_HOUSE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Yard House",
      item: item.name,
      calories: item.calories,
      category: Object.entries(YARD_HOUSE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );