import { FastFoodItem } from '../types';

const LUCALI_CATEGORIES = {
  "Signature Pizzas": [
    { id: "lucali-plain", name: "Plain Pizza", calories: 860 },
    { id: "lucali-pepperoni", name: "Pepperoni Pizza", calories: 920 },
    { id: "lucali-mushroom", name: "Mushroom Pizza", calories: 880 },
    { id: "lucali-onion", name: "Onion Pizza", calories: 870 },
    { id: "lucali-basil", name: "Fresh Basil Pizza", calories: 850 },
    { id: "lucali-garlic", name: "Garlic Pizza", calories: 870 }
  ],
  "Pizza By The Slice": [
    { id: "lucali-slice-plain", name: "Plain Pizza Slice", calories: 215 },
    { id: "lucali-slice-pepperoni", name: "Pepperoni Slice", calories: 290 },
    { id: "lucali-slice-mushroom", name: "Mushroom Slice", calories: 250 },
    { id: "lucali-slice-onion", name: "Onion Slice", calories: 220 },
    { id: "lucali-slice-basil", name: "Fresh Basil Slice", calories: 210 },
    { id: "lucali-slice-garlic", name: "Garlic Slice", calories: 220 }
  ],
  "Calzones": [
    { id: "lucali-calzone", name: "Calzone", calories: 790 }
  ],
  "Fresh Accompaniments": [
    { id: "lucali-salad", name: "House Salad", calories: 170 },
    { id: "lucali-meatballs", name: "Meatballs", calories: 340 }
  ]
};

export const lucaliItems: FastFoodItem[] = Object.values(LUCALI_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Lucali",
      item: item.name,
      calories: item.calories,
      category: Object.entries(LUCALI_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );