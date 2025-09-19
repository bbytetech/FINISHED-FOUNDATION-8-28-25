import { FastFoodItem } from '../types';

// Export categories for menu organization
export const PANDA_EXPRESS_CATEGORIES = {
  "Signature Entrees": [
    { id: "pe-orange-chicken", name: "Orange Chicken", calories: 490 },
    { id: "pe-beijing-beef", name: "Beijing Beef", calories: 470 },
    { id: "pe-broccoli-beef", name: "Broccoli Beef", calories: 150 },
    { id: "pe-mushroom-chicken", name: "Mushroom Chicken", calories: 170 },
    { id: "pe-sweetfire-chicken", name: "SweetFire Chicken Breast", calories: 380 },
    { id: "pe-kungpao-chicken", name: "Kung Pao Chicken", calories: 290 },
    { id: "pe-honey-walnut-shrimp", name: "Honey Walnut Shrimp", calories: 360 },
    { id: "pe-black-pepper-chicken", name: "Black Pepper Chicken", calories: 280 },
    { id: "pe-string-bean-chicken", name: "String Bean Chicken Breast", calories: 190 },
    { id: "pe-teriyaki-chicken", name: "Teriyaki Chicken", calories: 300 },
    { id: "pe-grilled-teriyaki", name: "Grilled Teriyaki Chicken", calories: 300 },
    { id: "pe-eggplant-tofu", name: "Eggplant Tofu", calories: 340 },
    { id: "pe-super-greens", name: "Super Greens", calories: 90 },
    { id: "pe-general-tso", name: "General Tso's Chicken", calories: 430 },
    { id: "pe-shanghai-steak", name: "Shanghai Angus Steak", calories: 310 },
    { id: "pe-honey-chicken", name: "Honey Sesame Chicken Breast", calories: 420 },
    { id: "pe-mongolian-beef", name: "Mongolian Beef", calories: 320 }
  ],
  "Rice & Noodles": [
    { id: "pe-chow-mein", name: "Chow Mein", calories: 310 },
    { id: "pe-fried-rice", name: "Fried Rice", calories: 520 },
    { id: "pe-white-rice", name: "White Steamed Rice", calories: 380 },
    { id: "pe-brown-rice", name: "Brown Steamed Rice", calories: 420 },
    { id: "pe-mixed-veggies", name: "Mixed Vegetables", calories: 80 }
  ],
  "Appetizers & Sides": [
    { id: "pe-rangoon", name: "Cream Cheese Rangoon (3 pc)", calories: 190 },
    { id: "pe-eggroll", name: "Vegetable Spring Roll", calories: 190 },
    { id: "pe-chicken-eggroll", name: "Chicken Egg Roll", calories: 200 },
    { id: "pe-potstickers", name: "Chicken Potstickers (3 pc)", calories: 160 },
    { id: "pe-hot-sour-soup", name: "Hot & Sour Soup", calories: 90 }
  ]
};

// Transform categories into a flat array for the menu
export const pandaExpressItems: FastFoodItem[] = Object.values(PANDA_EXPRESS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Panda Express",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PANDA_EXPRESS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );