import { FastFoodItem } from '../types';

const JAMBA_JUICE_CATEGORIES = {
  "Classic Smoothies": [
    { id: "jj-strawberry", name: "Strawberries Wild (Original)", calories: 250 },
    { id: "jj-caribbean", name: "Caribbean Passion (Original)", calories: 280 },
    { id: "jj-mango", name: "Mango-A-Go-Go (Original)", calories: 290 }
  ],
  "Plant-Based Smoothies": [
    { id: "jj-protein", name: "PB & Banana Protein (Original)", calories: 330 },
    { id: "jj-amazing-greens", name: "Amazing Greens (Original)", calories: 200 },
    { id: "jj-acai", name: "Acai Super-Antioxidant (Original)", calories: 280 }
  ],
  "Wellness Blends": [
    { id: "jj-protein-berry", name: "Protein Berry Workout (Original)", calories: 290 },
    { id: "jj-matcha", name: "Matcha Green Tea Blast (Original)", calories: 280 },
    { id: "jj-orange", name: "Orange-C Booster (Original)", calories: 240 }
  ],
  "Energy Bowls": [
    { id: "jj-acai-bowl", name: "Acai Prima Bowl", calories: 510 },
    { id: "jj-peachy-bowl", name: "Peachy Green Bowl", calories: 410 },
    { id: "jj-dragon-bowl", name: "Dragon Fruit Bowl", calories: 430 }
  ]
};

export const jambaJuiceItems: FastFoodItem[] = Object.values(JAMBA_JUICE_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Jamba Juice",
      item: item.name,
      calories: item.calories,
      category: Object.entries(JAMBA_JUICE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );