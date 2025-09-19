import { FastFoodItem } from '../types';

const CHURCHS_CATEGORIES = {
  "Original & Spicy Chicken": [
    { id: "churchs-original-breast", name: "Original Chicken Breast", calories: 370 },
    { id: "churchs-original-thigh", name: "Original Chicken Thigh", calories: 280 },
    { id: "churchs-original-wing", name: "Original Chicken Wing", calories: 180 },
    { id: "churchs-original-leg", name: "Original Chicken Leg", calories: 160 },
    { id: "churchs-spicy-breast", name: "Spicy Chicken Breast", calories: 380 },
    { id: "churchs-spicy-thigh", name: "Spicy Chicken Thigh", calories: 290 },
    { id: "churchs-spicy-wing", name: "Spicy Chicken Wing", calories: 190 },
    { id: "churchs-spicy-leg", name: "Spicy Chicken Leg", calories: 170 }
  ],
  "Hand-Breaded Tenders": [
    { id: "churchs-tenders-3", name: "Original Chicken Tenders (3 pc)", calories: 340 },
    { id: "churchs-tenders-5", name: "Original Chicken Tenders (5 pc)", calories: 570 },
    { id: "churchs-spicy-tenders-3", name: "Spicy Chicken Tenders (3 pc)", calories: 350 },
    { id: "churchs-spicy-tenders-5", name: "Spicy Chicken Tenders (5 pc)", calories: 580 }
  ],
  "Sandwiches": [
    { id: "churchs-original-sandwich", name: "Original Chicken Sandwich", calories: 650 },
    { id: "churchs-spicy-sandwich", name: "Spicy Chicken Sandwich", calories: 670 },
    { id: "churchs-chicken-wrap", name: "Chicken Wrap", calories: 420 }
  ],
  "Southern Sides": [
    { id: "churchs-fries", name: "French Fries", calories: 310 },
    { id: "churchs-biscuit", name: "Honey-Butter Biscuit", calories: 180 },
    { id: "churchs-biscuit-plain", name: "Plain Biscuit", calories: 160 },
    { id: "churchs-biscuit-jalapeno", name: "Jalapeño Cheese Biscuit", calories: 220 },
    { id: "churchs-biscuit-gravy", name: "Biscuit with Country Gravy", calories: 280 },
    { id: "churchs-mashed", name: "Mashed Potatoes", calories: 140 },
    { id: "churchs-mac", name: "Mac & Cheese", calories: 280 },
    { id: "churchs-corn", name: "Corn on the Cob", calories: 180 },
    { id: "churchs-jalapeno-bombers", name: "Jalapeño Bombers", calories: 210 },
    { id: "churchs-fried-okra", name: "Fried Okra", calories: 190 },
    { id: "churchs-coleslaw", name: "Coleslaw", calories: 140 }
  ],
  "Sweet Treats": [
    { id: "churchs-apple-pie", name: "Apple Pie", calories: 230 },
    { id: "churchs-peach-cobbler", name: "Peach Cobbler", calories: 380 },
    { id: "churchs-honey-butter-biscuit", name: "Honey-Butter Biscuit Dessert", calories: 310 }
  ],
  "Signature Sauces": [
    { id: "churchs-honey-bbq", name: "Honey BBQ Sauce", calories: 60 },
    { id: "churchs-creamy-jalapeno", name: "Creamy Jalapeño Sauce", calories: 140 },
    { id: "churchs-ranch", name: "Ranch Sauce", calories: 140 },
    { id: "churchs-honey-mustard", name: "Honey Mustard Sauce", calories: 120 }
  ],
  "Family Meals": [
    { id: "churchs-8pc", name: "8 Piece Mixed Family Meal", calories: 2960 },
    { id: "churchs-12pc", name: "12 Piece Mixed Family Meal", calories: 4440 },
    { id: "churchs-16pc", name: "16 Piece Mixed Family Meal", calories: 5920 },
    { id: "churchs-20pc", name: "20 Piece Mixed Family Meal", calories: 7400 }
  ]
};

export const churchsItems: FastFoodItem[] = Object.values(CHURCHS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Church's Chicken",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CHURCHS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );