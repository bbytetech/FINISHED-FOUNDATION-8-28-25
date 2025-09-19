import { FastFoodItem } from '../types';

const JOHNS_CATEGORIES = {
  "Coal-Fired Pizzas": [
    { id: "johns-margherita", name: "Margherita Pizza", calories: 2000 },
    { id: "johns-marinara", name: "Marinara Pizza", calories: 1760 },
    { id: "johns-white", name: "White Pizza", calories: 2240 },
    { id: "johns-pepperoni", name: "Pepperoni Pizza", calories: 2400 },
    { id: "johns-sausage", name: "Italian Sausage Pizza", calories: 2480 },
    { id: "johns-mushroom", name: "Mushroom Pizza", calories: 2160 },
    { id: "johns-anchovy", name: "Anchovy Pizza", calories: 2200 },
    { id: "johns-garlic", name: "Roasted Garlic Pizza", calories: 2120 }
  ],
  "Pizza By The Slice": [
    { id: "johns-slice-plain", name: "Plain Slice", calories: 250 },
    { id: "johns-slice-pepperoni", name: "Pepperoni Slice", calories: 300 },
    { id: "johns-slice-sausage", name: "Sausage Slice", calories: 310 },
    { id: "johns-slice-mushroom", name: "Mushroom Slice", calories: 270 },
    { id: "johns-slice-white", name: "White Slice", calories: 280 }
  ],
  "Fresh Salads": [
    { id: "johns-house", name: "House Salad", calories: 180 },
    { id: "johns-caesar", name: "Caesar Salad", calories: 220 },
    { id: "johns-arugula", name: "Arugula & Parmesan", calories: 190 }
  ],
  "Appetizers & Sides": [
    { id: "johns-garlic-bread", name: "Garlic Bread", calories: 240 },
    { id: "johns-meatballs", name: "Homemade Meatballs", calories: 420 },
    { id: "johns-bruschetta", name: "Bruschetta", calories: 280 }
  ]
};

export const johnsItems: FastFoodItem[] = Object.values(JOHNS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "John's of Bleecker Street",
      item: item.name,
      calories: item.calories,
      category: Object.entries(JOHNS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );