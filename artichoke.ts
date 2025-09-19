import { FastFoodItem } from '../types';

const ARTICHOKE_CATEGORIES = {
  "Signature Artichoke Slices": [
    { id: "artichoke-artichoke", name: "Artichoke Slice", calories: 420 },
    { id: "artichoke-crab", name: "Crab Slice", calories: 380 },
    { id: "artichoke-vodka", name: "Vodka Slice", calories: 360 }
  ],
  "Classic NY Style Slices": [
    { id: "artichoke-margherita", name: "Margherita Slice", calories: 290 },
    { id: "artichoke-pepperoni", name: "Pepperoni Slice", calories: 320 },
    { id: "artichoke-sicilian", name: "Sicilian Slice", calories: 440 }
  ],
  "Specialty Slices": [
    { id: "artichoke-buffalo", name: "Buffalo Chicken Slice", calories: 380 },
    { id: "artichoke-meatball", name: "Meatball Parm Slice", calories: 410 }
  ],
  "Whole Specialty Pizzas": [
    { id: "artichoke-pie-classic", name: "Classic Pie", calories: 2320 },
    { id: "artichoke-pie-signature", name: "Artichoke Pie", calories: 3360 }
  ]
};

export const artichokeItems: FastFoodItem[] = Object.values(ARTICHOKE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Artichoke Basille's Pizza",
      item: item.name,
      calories: item.calories,
      category: Object.entries(ARTICHOKE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );