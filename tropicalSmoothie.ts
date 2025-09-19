import { FastFoodItem } from '../types';

const TROPICAL_SMOOTHIE_CATEGORIES = {
  "Superfood Smoothies": [
    { id: "ts-detox", name: "Detox Island Green (24 oz)", calories: 180 },
    { id: "ts-chia-banana", name: "Chia Banana Boost (24 oz)", calories: 320 },
    { id: "ts-acai-berry", name: "Acai Berry Boost (24 oz)", calories: 280 }
  ],
  "Classic Smoothies": [
    { id: "ts-sunrise", name: "Sunrise Sunset (24 oz)", calories: 350 },
    { id: "ts-bahama", name: "Bahama Mama (24 oz)", calories: 380 },
    { id: "ts-paradise", name: "Paradise Point (24 oz)", calories: 340 }
  ],
  "Health Nut Smoothies": [
    { id: "ts-peanut", name: "Peanut Paradise (24 oz)", calories: 710 },
    { id: "ts-mocha", name: "Mocha Madness (24 oz)", calories: 490 },
    { id: "ts-muscle", name: "Muscle Blaster (24 oz)", calories: 460 }
  ],
  "Island Eats": [
    { id: "ts-chicken-wrap", name: "Thai Chicken Wrap", calories: 640 },
    { id: "ts-quesadilla", name: "Buffalo Chicken Quesadilla", calories: 860 },
    { id: "ts-flatbread", name: "Chipotle Chicken Flatbread", calories: 710 }
  ]
};

export const tropicalSmoothieItems: FastFoodItem[] = Object.values(TROPICAL_SMOOTHIE_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Tropical Smoothie Cafe",
      item: item.name,
      calories: item.calories,
      category: Object.entries(TROPICAL_SMOOTHIE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );