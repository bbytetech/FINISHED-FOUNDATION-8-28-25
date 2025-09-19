import { FastFoodItem } from '../types';

const FIVE_GUYS_CATEGORIES = {
  "Handcrafted Burgers": [
    { id: "fg-hamburger", name: "Hamburger", calories: 840 },
    { id: "fg-cheeseburger", name: "Cheeseburger", calories: 980 },
    { id: "fg-bacon-burger", name: "Bacon Burger", calories: 920 },
    { id: "fg-bacon-cheese", name: "Bacon Cheeseburger", calories: 1060 },
    { id: "fg-little-hamburger", name: "Little Hamburger", calories: 540 },
    { id: "fg-little-cheeseburger", name: "Little Cheeseburger", calories: 610 },
    { id: "fg-little-bacon-burger", name: "Little Bacon Burger", calories: 620 },
    { id: "fg-little-bacon-cheese", name: "Little Bacon Cheeseburger", calories: 690 }
  ],
  "Fresh-Made Sandwiches": [
    { id: "fg-veggie", name: "Veggie Sandwich", calories: 440 },
    { id: "fg-cheese-veggie", name: "Cheese Veggie Sandwich", calories: 510 },
    { id: "fg-grilled-cheese", name: "Grilled Cheese", calories: 470 },
    { id: "fg-blt", name: "BLT", calories: 510 }
  ],
  "All-Beef Hot Dogs": [
    { id: "fg-hot-dog", name: "Hot Dog", calories: 520 },
    { id: "fg-cheese-dog", name: "Cheese Dog", calories: 590 },
    { id: "fg-bacon-dog", name: "Bacon Dog", calories: 600 },
    { id: "fg-bacon-cheese-dog", name: "Bacon Cheese Dog", calories: 670 }
  ],
  "Fresh-Cut Fries": [
    { id: "fg-fries-little", name: "Little Fries", calories: 530 },
    { id: "fg-fries-regular", name: "Regular Fries", calories: 950 },
    { id: "fg-fries-large", name: "Large Fries", calories: 1310 },
    { id: "fg-cajun-fries-little", name: "Little Cajun Fries", calories: 530 },
    { id: "fg-cajun-fries-regular", name: "Regular Cajun Fries", calories: 950 },
    { id: "fg-cajun-fries-large", name: "Large Cajun Fries", calories: 1310 }
  ],
  "Hand-Spun Shakes": [
    { id: "fg-shake-vanilla", name: "Vanilla Shake", calories: 670 },
    { id: "fg-shake-chocolate", name: "Chocolate Shake", calories: 690 },
    { id: "fg-shake-strawberry", name: "Strawberry Shake", calories: 670 },
    { id: "fg-shake-oreo", name: "Oreo Cream Shake", calories: 710 },
    { id: "fg-shake-oreo-cookie", name: "Oreo Cookie Shake", calories: 730 },
    { id: "fg-shake-peanut-butter", name: "Peanut Butter Shake", calories: 750 },
    { id: "fg-shake-banana", name: "Banana Shake", calories: 650 },
    { id: "fg-shake-coffee", name: "Coffee Shake", calories: 680 },
    { id: "fg-shake-bacon", name: "Bacon Shake", calories: 750 },
    { id: "fg-shake-cherry", name: "Cherry Shake", calories: 670 },
    { id: "fg-shake-malted-vanilla", name: "Malted Vanilla Shake", calories: 690 },
    { id: "fg-shake-salted-caramel", name: "Salted Caramel Shake", calories: 710 }
  ],
  "Mix-ins": [
    { id: "fg-mixin-bananas", name: "Bananas Mix-In", calories: 30 },
    { id: "fg-mixin-cherries", name: "Cherries Mix-In", calories: 25 },
    { id: "fg-mixin-chocolate", name: "Chocolate Mix-In", calories: 40 },
    { id: "fg-mixin-oreo-cookies", name: "Oreo Cookie Mix-In", calories: 45 },
    { id: "fg-mixin-peanut-butter", name: "Peanut Butter Mix-In", calories: 50 },
    { id: "fg-mixin-bacon", name: "Bacon Mix-In", calories: 35 },
    { id: "fg-mixin-coffee", name: "Coffee Mix-In", calories: 20 },
    { id: "fg-mixin-malted-milk", name: "Malted Milk Mix-In", calories: 30 },
    { id: "fg-mixin-salted-caramel", name: "Salted Caramel Mix-In", calories: 35 }
  ],
  "Beverages": [
    { id: "fg-fountain-drink-small", name: "Fountain Drink (Small)", calories: 150 },
    { id: "fg-fountain-drink-medium", name: "Fountain Drink (Medium)", calories: 210 },
    { id: "fg-fountain-drink-large", name: "Fountain Drink (Large)", calories: 280 },
    { id: "fg-bottled-water", name: "Bottled Water", calories: 0 }
  ]
};

export const fiveGuysItems: FastFoodItem[] = Object.values(FIVE_GUYS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Five Guys",
      item: item.name,
      calories: item.calories,
      category: Object.entries(FIVE_GUYS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );