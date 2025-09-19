import { FastFoodItem } from '../types';

export const MASA_YORK_CATEGORIES = {
  "Masa Signature Rolls": [
    { id: "masa-truffle", name: "Truffle Roll", calories: 380 },
    { id: "masa-toro", name: "Toro Roll", calories: 340 },
    { id: "masa-uni", name: "Uni Roll", calories: 290 },
    { id: "masa-king-crab", name: "King Crab Roll", calories: 320 },
    { id: "masa-lobster", name: "Lobster Roll", calories: 360 },
    { id: "masa-caviar", name: "Caviar Roll", calories: 310 },
    { id: "masa-wagyu", name: "Wagyu Roll", calories: 420 },
    { id: "masa-vegetable", name: "Seasonal Vegetable Roll", calories: 240 }
  ],
  "Premium Nigiri & Sashimi": [
    { id: "masa-otoro", name: "Otoro Nigiri (2 pc)", calories: 140 },
    { id: "masa-chutoro", name: "Chutoro Nigiri (2 pc)", calories: 130 },
    { id: "masa-uni-nigiri", name: "Uni Nigiri (2 pc)", calories: 120 },
    { id: "masa-king-crab-nigiri", name: "King Crab Nigiri (2 pc)", calories: 110 }
  ],
  "Masa Hot Specialties": [
    { id: "masa-wagyu-beef", name: "A5 Wagyu Beef", calories: 460 },
    { id: "masa-black-cod", name: "Miso Black Cod", calories: 380 }
  ]
};

export const masaYorkItems: FastFoodItem[] = Object.values(MASA_YORK_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Masa (New York)",
      item: item.name,
      calories: item.calories,
      category: Object.entries(MASA_YORK_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );