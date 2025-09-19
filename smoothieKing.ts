import { FastFoodItem } from '../types';

const SMOOTHIE_KING_CATEGORIES = {
  "Purpose Blends": [
    { id: "sk-gladiator", name: "Gladiator Chocolate (20 oz)", calories: 230 },
    { id: "sk-hulk", name: "The Hulk Vanilla (20 oz)", calories: 910 },
    { id: "sk-power-plus", name: "Power Plus Chocolate (20 oz)", calories: 370 }
  ],
  "Get Fit Blends": [
    { id: "sk-lean1", name: "Lean1 Chocolate (20 oz)", calories: 240 },
    { id: "sk-slim-n-trim", name: "Slim-N-Trim Vanilla (20 oz)", calories: 210 },
    { id: "sk-metabolism", name: "Metabolism Boost Strawberry (20 oz)", calories: 280 }
  ],
  "Wellness Blends": [
    { id: "sk-protein-berry", name: "Protein Berry Workout (20 oz)", calories: 290 },
    { id: "sk-matcha", name: "Matcha Green Tea Blast (20 oz)", calories: 280 },
    { id: "sk-orange", name: "Orange-C Booster (20 oz)", calories: 240 }
  ],
  "Energy Bowls": [
    { id: "sk-acai-bowl", name: "Acai Prima Bowl", calories: 510 },
    { id: "sk-peachy-bowl", name: "Peachy Green Bowl", calories: 410 },
    { id: "sk-dragon-bowl", name: "Dragon Fruit Bowl", calories: 430 }
  ]
};

export const smoothieKingItems: FastFoodItem[] = Object.values(SMOOTHIE_KING_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Smoothie King",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SMOOTHIE_KING_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );