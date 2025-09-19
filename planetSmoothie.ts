import { FastFoodItem } from '../types';

const PLANET_SMOOTHIE_CATEGORIES = {
  "Original Smoothies": [
    { id: "ps-mediterranean", name: "Mediterranean Monster (22 oz)", calories: 290 },
    { id: "ps-captain", name: "Captain Kid (22 oz)", calories: 320 },
    { id: "ps-last-mango", name: "Last Mango in Paris (22 oz)", calories: 280 }
  ],
  "Protein Smoothies": [
    { id: "ps-chocolate", name: "Chocolate Elvis (22 oz)", calories: 430 },
    { id: "ps-lean", name: "Lean & Green (22 oz)", calories: 260 },
    { id: "ps-zeus", name: "Zeus Juice (22 oz)", calories: 310 }
  ],
  "Energy Smoothies": [
    { id: "ps-blast", name: "Blast-Off (22 oz)", calories: 350 },
    { id: "ps-energy", name: "Energy Bomb (22 oz)", calories: 380 },
    { id: "ps-meteor", name: "Meteor (22 oz)", calories: 340 }
  ]
};

export const planetSmoothieItems: FastFoodItem[] = Object.values(PLANET_SMOOTHIE_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Planet Smoothie",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PLANET_SMOOTHIE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );