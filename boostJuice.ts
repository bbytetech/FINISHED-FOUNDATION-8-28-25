import { FastFoodItem } from '../types';

const BOOST_JUICE_CATEGORIES = {
  "Original Smoothies": [
    { id: "bj-berry", name: "All Berry Bang", calories: 260 },
    { id: "bj-mango", name: "Mango Magic", calories: 280 },
    { id: "bj-tropical", name: "Tropical Crush", calories: 270 }
  ],
  "Pure Eden Smoothies": [
    { id: "bj-protein", name: "Protein Supreme", calories: 320 },
    { id: "bj-green", name: "Green Goddess", calories: 210 },
    { id: "bj-acai", name: "Acai Plus", calories: 290 }
  ],
  "Boosters": [
    { id: "bj-energizer", name: "Gym Junkie", calories: 340 },
    { id: "bj-immunity", name: "Immunity Warrior", calories: 250 },
    { id: "bj-detox", name: "Clean & Green", calories: 200 }
  ]
};

export const boostJuiceItems: FastFoodItem[] = Object.values(BOOST_JUICE_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Boost Juice",
      item: item.name,
      calories: item.calories,
      category: Object.entries(BOOST_JUICE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );