import { FastFoodItem } from '../types';

export const KYOTO_CATEGORIES = {
  "Hibachi Entrees": [
    { id: "kyoto-filet", name: "Hibachi Filet Mignon", calories: 790 },
    { id: "kyoto-ny-strip", name: "Hibachi NY Strip", calories: 840 },
    { id: "kyoto-ribeye", name: "Hibachi Ribeye", calories: 890 },
    { id: "kyoto-chicken", name: "Hibachi Chicken", calories: 620 },
    { id: "kyoto-shrimp", name: "Hibachi Shrimp", calories: 540 },
    { id: "kyoto-scallops", name: "Hibachi Scallops", calories: 520 },
    { id: "kyoto-lobster", name: "Hibachi Lobster", calories: 580 },
    { id: "kyoto-combo-surf-turf", name: "Surf & Turf Combo", calories: 940 },
    { id: "kyoto-combo-emperor", name: "Emperor's Feast", calories: 1120 }
  ],
  "Sushi & Sashimi": [
    { id: "kyoto-rainbow", name: "Rainbow Roll", calories: 420 },
    { id: "kyoto-california", name: "California Roll", calories: 310 },
    { id: "kyoto-spicy-tuna", name: "Spicy Tuna Roll", calories: 290 },
    { id: "kyoto-dragon", name: "Dragon Roll", calories: 460 },
    { id: "kyoto-philadelphia", name: "Philadelphia Roll", calories: 380 },
    { id: "kyoto-volcano", name: "Volcano Roll", calories: 460 }
  ],
  "Appetizers & Starters": [
    { id: "kyoto-spring-rolls", name: "Spring Rolls", calories: 240 },
    { id: "kyoto-gyoza", name: "Gyoza", calories: 280 },
    { id: "kyoto-edamame", name: "Edamame", calories: 120 },
    { id: "kyoto-tempura", name: "Vegetable Tempura", calories: 280 }
  ],
  "Soups & Salads": [
    { id: "kyoto-miso", name: "Miso Soup", calories: 60 },
    { id: "kyoto-onion", name: "Clear Onion Soup", calories: 45 },
    { id: "kyoto-house-salad", name: "House Salad", calories: 120 },
    { id: "kyoto-seaweed", name: "Seaweed Salad", calories: 130 }
  ],
  "Sides & Accompaniments": [
    { id: "kyoto-fried-rice", name: "Hibachi Fried Rice", calories: 320 },
    { id: "kyoto-white-rice", name: "Steamed White Rice", calories: 180 },
    { id: "kyoto-vegetables", name: "Hibachi Vegetables", calories: 110 },
    { id: "kyoto-noodles", name: "Yaki Udon", calories: 310 }
  ],
  "Desserts": [
    { id: "kyoto-ice-cream", name: "Green Tea Ice Cream", calories: 180 },
    { id: "kyoto-tempura-ice", name: "Tempura Ice Cream", calories: 320 },
    { id: "kyoto-mochi", name: "Mochi Ice Cream", calories: 210 }
  ]
};

export const kyotoItems: FastFoodItem[] = Object.values(KYOTO_CATEGORIES)
  .flatMap(category =>
    category.map(item => ({
      id: item.id,
      restaurant: "Kyoto Japanese Steakhouse",
      item: item.name,
      calories: item.calories,
      category: Object.entries(KYOTO_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );