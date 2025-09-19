import { FastFoodItem } from '../types';

const STEAK_AND_SHAKE_CATEGORIES = {
  "Famous Steakburgers": [
    { id: "sns-original", name: "Original Steakburger", calories: 390 },
    { id: "sns-double", name: "Double Steakburger", calories: 540 },
    { id: "sns-triple", name: "Triple Steakburger", calories: 690 },
    { id: "sns-western-bbq", name: "Western BBQ 'n Bacon", calories: 730 },
    { id: "sns-frisco-melt", name: "Frisco Melt", calories: 760 },
    { id: "sns-patty-melt", name: "Patty Melt", calories: 670 },
    { id: "sns-garlic-burger", name: "Garlic Steakburger", calories: 580 }
  ],
  "Fresh Cut Sides": [
    { id: "sns-fries", name: "Thin 'n Crispy Fries", calories: 310 },
    { id: "sns-cheese-fries", name: "Cheese Fries", calories: 460 },
    { id: "sns-chili-cheese-fries", name: "Chili Cheese Fries", calories: 580 },
    { id: "sns-onion-rings", name: "Onion Rings", calories: 420 }
  ],
  "Hand-Dipped Shakes": [
    { id: "sns-shake-vanilla", name: "Vanilla Shake", calories: 580 },
    { id: "sns-shake-chocolate", name: "Chocolate Shake", calories: 610 },
    { id: "sns-shake-strawberry", name: "Strawberry Shake", calories: 590 },
    { id: "sns-shake-oreo", name: "Oreo Cookies 'n Cream Shake", calories: 680 },
    { id: "sns-shake-butterfinger", name: "Butterfinger Shake", calories: 700 },
    { id: "sns-shake-reeses", name: "Reese's Peanut Butter Cup Shake", calories: 710 }
  ]
};

export const steakAndShakeItems: FastFoodItem[] = Object.values(STEAK_AND_SHAKE_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Steak 'n Shake",
      item: item.name,
      calories: item.calories,
      category: Object.entries(STEAK_AND_SHAKE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );