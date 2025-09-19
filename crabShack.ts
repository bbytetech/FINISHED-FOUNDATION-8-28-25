import { FastFoodItem } from '../types';

const CRAB_SHACK_CATEGORIES = {
  "Low Country Boils": [
    { id: "crabshack-captains-feast", name: "Captain's Feast", calories: 1240, description: "Snow crab, shrimp, mussels, clams, corn, potatoes, sausage" },
    { id: "crabshack-snow-crab", name: "Snow Crab Boil", calories: 840, description: "Snow crab legs, corn, potatoes" },
    { id: "crabshack-shrimp-boil", name: "Shrimp Boil", calories: 720, description: "Peel & eat shrimp, corn, potatoes" },
    { id: "crabshack-combo-boil", name: "Combo Boil", calories: 980, description: "Pick any two: crab, shrimp, mussels, or clams" }
  ],
  "Crab Specialties": [
    { id: "crabshack-garlic-crab", name: "Garlic Crab", calories: 780, description: "Whole Dungeness crab, garlic butter" },
    { id: "crabshack-snow-crab-legs", name: "Snow Crab Legs (1 lb)", calories: 320, description: "Steamed, drawn butter" },
    { id: "crabshack-king-crab", name: "King Crab Legs (1 lb)", calories: 340, description: "Steamed, drawn butter" },
    { id: "crabshack-crab-cakes", name: "Crab Cakes", calories: 480, description: "Lump crab meat, remoulade" }
  ],
  "Fried Seafood Baskets": [
    { id: "crabshack-fried-shrimp", name: "Fried Shrimp Basket", calories: 680, description: "Breaded shrimp, fries, hush puppies" },
    { id: "crabshack-fried-oysters", name: "Fried Oyster Basket", calories: 640, description: "Breaded oysters, fries, hush puppies" },
    { id: "crabshack-fried-fish", name: "Fried Fish Basket", calories: 720, description: "Battered fish, fries, hush puppies" },
    { id: "crabshack-fried-combo", name: "Fried Seafood Combo", calories: 880, description: "Shrimp, fish, oysters, fries, hush puppies" }
  ],
  "Starters": [
    { id: "crabshack-peel-eat-shrimp", name: "Peel & Eat Shrimp (1/2 lb)", calories: 240, description: "Chilled, Old Bay seasoning" },
    { id: "crabshack-crab-dip", name: "Crab Dip", calories: 480, description: "Cream cheese, lump crab, toast points" },
    { id: "crabshack-calamari", name: "Fried Calamari", calories: 420, description: "Lightly breaded, marinara" },
    { id: "crabshack-hush-puppies", name: "Hush Puppies", calories: 340, description: "Sweet cornmeal fritters" }
  ],
  "Sandwiches": [
    { id: "crabshack-crab-roll", name: "Crab Roll", calories: 580, description: "Lump crab salad, butter toasted roll" },
    { id: "crabshack-po-boy-shrimp", name: "Shrimp Po' Boy", calories: 720, description: "Fried shrimp, lettuce, tomato, remoulade" },
    { id: "crabshack-po-boy-oyster", name: "Oyster Po' Boy", calories: 740, description: "Fried oysters, lettuce, tomato, remoulade" }
  ],
  "Sides": [
    { id: "crabshack-corn", name: "Corn on the Cob", calories: 180, description: "Boiled with Old Bay" },
    { id: "crabshack-potatoes", name: "Red Potatoes", calories: 220, description: "Boiled with Old Bay" },
    { id: "crabshack-sausage", name: "Andouille Sausage", calories: 320, description: "Spicy Cajun sausage" },
    { id: "crabshack-fries", name: "French Fries", calories: 380, description: "Seasoned fries" },
    { id: "crabshack-coleslaw", name: "Coleslaw", calories: 180, description: "Creamy house-made" }
  ],
  "Desserts": [
    { id: "crabshack-key-lime", name: "Key Lime Pie", calories: 420, description: "Graham cracker crust" },
    { id: "crabshack-bread-pudding", name: "Bread Pudding", calories: 580, description: "Bourbon sauce" }
  ]
};

export const crabShackItems: FastFoodItem[] = Object.values(CRAB_SHACK_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "The Crab Shack",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CRAB_SHACK_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );