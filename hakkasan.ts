import { FastFoodItem } from '../types';

export const HAKKASAN_CATEGORIES = {
  "Signature Rolls": [
    { id: "hakkasan-dragon", name: "Golden Dragon Roll", calories: 460 },
    { id: "hakkasan-lobster", name: "Lobster Roll", calories: 420 },
    { id: "hakkasan-rainbow", name: "Rainbow Roll", calories: 380 },
    { id: "hakkasan-spicy-tuna", name: "Spicy Tuna Roll", calories: 290 },
    { id: "hakkasan-california", name: "California Roll", calories: 320 },
    { id: "hakkasan-tempura", name: "Crispy Tempura Roll", calories: 440 },
    { id: "hakkasan-vegetable", name: "Garden Vegetable Roll", calories: 260 },
    { id: "hakkasan-salmon-avo", name: "Salmon Avocado Roll", calories: 310 }
  ],
  "Luxury Dim Sum": [
    { id: "hakkasan-dumpling", name: "Har Gau", calories: 220 },
    { id: "hakkasan-scallop", name: "Scallop Shumai", calories: 240 },
    { id: "hakkasan-cheung-fun", name: "Prawn Cheung Fun", calories: 280 }
  ],
  "Hakkasan Specialties": [
    { id: "hakkasan-black-cod", name: "Black Cod with Honey", calories: 520 },
    { id: "hakkasan-beef", name: "Stir-fry Black Pepper Beef", calories: 580 },
    { id: "hakkasan-chicken", name: "Sanpei Chicken Claypot", calories: 440 }
  ]
};

export const hakkasanItems: FastFoodItem[] = Object.values(HAKKASAN_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Hakkasan",
      item: item.name,
      calories: item.calories,
      category: Object.entries(HAKKASAN_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );