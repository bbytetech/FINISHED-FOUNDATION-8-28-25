import { FastFoodItem } from '../types';

export const WASABI_CATEGORIES = {
  "Signature Hibachi": [
    { id: "wasabi-ribeye", name: "Hibachi Ribeye", calories: 820 },
    { id: "wasabi-filet", name: "Hibachi Filet Mignon", calories: 750 },
    { id: "wasabi-chicken", name: "Hibachi Chicken", calories: 630 },
    { id: "wasabi-shrimp", name: "Hibachi Shrimp", calories: 540 },
    { id: "wasabi-scallops", name: "Hibachi Scallops", calories: 520 },
    { id: "wasabi-combo-deluxe", name: "Wasabi Deluxe Combo", calories: 960 },
    { id: "wasabi-combo-seafood", name: "Seafood Combo", calories: 840 }
  ],
  "Fresh Sushi Rolls": [
    { id: "wasabi-california", name: "California Roll", calories: 310 },
    { id: "wasabi-dynamite", name: "Dynamite Roll", calories: 420 },
    { id: "wasabi-rainbow", name: "Rainbow Roll", calories: 440 },
    { id: "wasabi-dragon", name: "Dragon Roll", calories: 460 },
    { id: "wasabi-spicy-tuna", name: "Spicy Tuna Roll", calories: 290 },
    { id: "wasabi-philadelphia", name: "Philadelphia Roll", calories: 380 }
  ],
  "Japanese Appetizers": [
    { id: "wasabi-spring-rolls", name: "Spring Rolls", calories: 250 },
    { id: "wasabi-tempura", name: "Vegetable Tempura", calories: 280 },
    { id: "wasabi-miso", name: "Miso Soup", calories: 70 },
    { id: "wasabi-gyoza", name: "Gyoza", calories: 280 },
    { id: "wasabi-edamame", name: "Edamame", calories: 120 }
  ],
  "Sides": [
    { id: "wasabi-fried-rice", name: "Hibachi Fried Rice", calories: 340 },
    { id: "wasabi-white-rice", name: "Steamed White Rice", calories: 180 },
    { id: "wasabi-vegetables", name: "Hibachi Vegetables", calories: 120 },
    { id: "wasabi-noodles", name: "Yaki Udon", calories: 310 }
  ]
};

export const wasabiItems: FastFoodItem[] = Object.values(WASABI_CATEGORIES)
  .flatMap(category =>
    category.map(item => ({
      id: item.id,
      restaurant: "Wasabi Japanese Steakhouse",
      item: item.name,
      calories: item.calories,
      category: Object.entries(WASABI_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );