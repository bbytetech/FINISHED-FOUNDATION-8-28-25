import { FastFoodItem } from '../types';

export const SHOGUN_CATEGORIES = {
  "Hibachi Entrees": [
    { id: "shogun-ribeye", name: "Hibachi Ribeye", calories: 840 },
    { id: "shogun-filet", name: "Hibachi Filet Mignon", calories: 760 },
    { id: "shogun-ny-strip", name: "Hibachi NY Strip", calories: 790 },
    { id: "shogun-chicken", name: "Hibachi Chicken", calories: 620 },
    { id: "shogun-shrimp", name: "Hibachi Shrimp", calories: 540 },
    { id: "shogun-scallops", name: "Hibachi Scallops", calories: 520 },
    { id: "shogun-lobster", name: "Hibachi Lobster", calories: 580 },
    { id: "shogun-combo-surf-turf", name: "Surf & Turf Combo", calories: 940 },
    { id: "shogun-combo-emperor", name: "Emperor's Feast", calories: 1120 }
  ],
  "Sushi & Sashimi": [
    { id: "shogun-rainbow", name: "Rainbow Roll", calories: 420 },
    { id: "shogun-california", name: "California Roll", calories: 310 },
    { id: "shogun-spicy-tuna", name: "Spicy Tuna Roll", calories: 290 },
    { id: "shogun-dragon", name: "Dragon Roll", calories: 460 },
    { id: "shogun-philadelphia", name: "Philadelphia Roll", calories: 380 },
    { id: "shogun-volcano", name: "Volcano Roll", calories: 460 }
  ],
  "Appetizers & Starters": [
    { id: "shogun-spring-rolls", name: "Spring Rolls", calories: 240 },
    { id: "shogun-gyoza", name: "Gyoza", calories: 280 },
    { id: "shogun-edamame", name: "Edamame", calories: 120 },
    { id: "shogun-tempura", name: "Vegetable Tempura", calories: 280 }
  ],
  "Soups & Salads": [
    { id: "shogun-miso", name: "Miso Soup", calories: 60 },
    { id: "shogun-onion", name: "Clear Onion Soup", calories: 45 },
    { id: "shogun-house-salad", name: "House Salad", calories: 120 },
    { id: "shogun-seaweed", name: "Seaweed Salad", calories: 130 }
  ],
  "Sides & Accompaniments": [
    { id: "shogun-fried-rice", name: "Hibachi Fried Rice", calories: 320 },
    { id: "shogun-white-rice", name: "Steamed White Rice", calories: 180 },
    { id: "shogun-vegetables", name: "Hibachi Vegetables", calories: 110 },
    { id: "shogun-noodles", name: "Yaki Udon", calories: 310 }
  ],
  "Desserts": [
    { id: "shogun-ice-cream", name: "Green Tea Ice Cream", calories: 180 },
    { id: "shogun-tempura-ice", name: "Tempura Ice Cream", calories: 320 },
    { id: "shogun-mochi", name: "Mochi Ice Cream", calories: 210 }
  ]
};

export const shogunItems: FastFoodItem[] = Object.values(SHOGUN_CATEGORIES)
  .flatMap(category =>
    category.map(item => ({
      id: item.id,
      restaurant: "Shogun Japanese Steakhouse",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SHOGUN_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );