import { FastFoodItem } from '../types';

const MARCOS_PIZZA_CATEGORIES = {
  "Specialty Pizzas": [
    { id: "marcos-pepperoni", name: "Pepperoni Magnifico", calories: 2320 },
    { id: "marcos-white-cheezy", name: "White Cheezy", calories: 2240 },
    { id: "marcos-deluxe", name: "Deluxe Uno", calories: 2480 },
    { id: "marcos-all-meat", name: "All Meat", calories: 2720 },
    { id: "marcos-garden", name: "Garden", calories: 2160 },
    { id: "marcos-hawaiian", name: "Hawaiian Chicken", calories: 2400 },
    { id: "marcos-buffalo", name: "Buffalo Chicken", calories: 2480 },
    { id: "marcos-bbq", name: "BBQ Chicken", calories: 2440 }
  ],
  "Build Your Own Pizza": [
    { id: "marcos-cheese", name: "Classic Cheese Pizza", calories: 2080 },
    { id: "marcos-pepperoni-classic", name: "Classic Pepperoni Pizza", calories: 2240 },
    { id: "marcos-veggie", name: "Veggie Pizza", calories: 1760 },
    { id: "marcos-supreme", name: "Supreme Pizza", calories: 2080 }
  ],
  "Subs & Sandwiches": [
    { id: "marcos-sub", name: "Italian Sub", calories: 820 },
    { id: "marcos-chicken-sub", name: "Chicken Club Sub", calories: 780 },
    { id: "marcos-meatball", name: "Meatball Sub", calories: 840 }
  ],
  "CheezyBread & Sides": [
    { id: "marcos-cheezybread", name: "CheezyBread", calories: 170 },
    { id: "marcos-wings", name: "Wings (8 pc)", calories: 640 },
    { id: "marcos-brownies", name: "Double Chocolate Brownies", calories: 130 },
    { id: "marcos-salad", name: "Garden Salad", calories: 140 },
    { id: "marcos-chicken-dippers", name: "Chicken Dippers", calories: 420 },
    { id: "marcos-pepperoni-rolls", name: "Pepperoni Rolls", calories: 380 }
  ],
  "Desserts": [
    { id: "marcos-cinnasquares", name: "CinnaSquares", calories: 360 },
    { id: "marcos-smores", name: "S'mores Brownie", calories: 440 }
  ]
};

export const marcosPizzaItems: FastFoodItem[] = Object.values(MARCOS_PIZZA_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Marco's Pizza",
      item: item.name,
      calories: item.calories,
      category: Object.entries(MARCOS_PIZZA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );