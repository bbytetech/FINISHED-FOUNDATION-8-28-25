import { FastFoodItem } from '../types';

export const MORIMOTO_CATEGORIES = {
  "Signature Sushi Rolls": [
    { id: "morimoto-dragon", name: "Dragon Roll", calories: 450 },
    { id: "morimoto-rainbow", name: "Rainbow Roll", calories: 420 },
    { id: "morimoto-spider", name: "Spider Roll", calories: 380 },
    { id: "morimoto-california", name: "California Roll", calories: 320 },
    { id: "morimoto-spicy-tuna", name: "Spicy Tuna Roll", calories: 290 },
    { id: "morimoto-philly", name: "Philadelphia Roll", calories: 350 },
    { id: "morimoto-dynamite", name: "Dynamite Roll", calories: 420 },
    { id: "morimoto-eel-avo", name: "Eel Avocado Roll", calories: 380 },
    { id: "morimoto-tempura", name: "Shrimp Tempura Roll", calories: 440 },
    { id: "morimoto-veggie", name: "Vegetable Roll", calories: 240 }
  ],
  "Premium Nigiri & Sashimi": [
    { id: "morimoto-tuna-nigiri", name: "Tuna Nigiri (2 pc)", calories: 120 },
    { id: "morimoto-salmon-nigiri", name: "Salmon Nigiri (2 pc)", calories: 140 },
    { id: "morimoto-hamachi-nigiri", name: "Yellowtail Nigiri (2 pc)", calories: 130 },
    { id: "morimoto-eel-nigiri", name: "Eel Nigiri (2 pc)", calories: 160 }
  ],
  "Iron Chef Specialties": [
    { id: "morimoto-duck", name: "Duck Duck Duck", calories: 780 },
    { id: "morimoto-black-cod", name: "Black Cod Miso", calories: 460 },
    { id: "morimoto-wagyu", name: "A5 Wagyu Steak", calories: 820 }
  ],
  "Hot Appetizers": [
    { id: "morimoto-edamame", name: "Spicy Garlic Edamame", calories: 180 },
    { id: "morimoto-gyoza", name: "Wagyu Beef Gyoza", calories: 320 },
    { id: "morimoto-rock-shrimp", name: "Rock Shrimp Tempura", calories: 380 },
    { id: "morimoto-kakuni", name: "Braised Black Pork Belly", calories: 420 }
  ],
  "Cold Appetizers": [
    { id: "morimoto-tartare", name: "Toro Tartare", calories: 280 },
    { id: "morimoto-carpaccio", name: "Whitefish Carpaccio", calories: 220 },
    { id: "morimoto-hamachi", name: "Yellowtail Tartare", calories: 260 },
    { id: "morimoto-oysters", name: "Seasonal Oysters", calories: 140 }
  ],
  "Noodles & Rice": [
    { id: "morimoto-ramen", name: "Iron Chef Ramen", calories: 580 },
    { id: "morimoto-udon", name: "Duck Udon", calories: 620 },
    { id: "morimoto-fried-rice", name: "Chef's Fried Rice", calories: 440 }
  ],
  "Desserts": [
    { id: "morimoto-chocolate", name: "Chocolate Sphere", calories: 420 },
    { id: "morimoto-matcha", name: "Matcha Tiramisu", calories: 380 },
    { id: "morimoto-mochi", name: "Assorted Mochi", calories: 240 }
  ]
};

export const morimotoItems: FastFoodItem[] = Object.values(MORIMOTO_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Morimoto",
      item: item.name,
      calories: item.calories,
      category: Object.entries(MORIMOTO_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );