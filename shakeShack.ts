import { FastFoodItem } from '../types';

const SHAKE_SHACK_CATEGORIES = {
  "Signature Burgers": [
    { id: "ss-shackburger", name: "ShackBurger", calories: 550, description: "Cheeseburger with lettuce, tomato, ShackSauce" },
    { id: "ss-shackburger-double", name: "Double ShackBurger", calories: 850, description: "Double cheeseburger with ShackSauce" },
    { id: "ss-smokeshack", name: "SmokeShack", calories: 620, description: "Cheeseburger with bacon, chopped cherry peppers" },
    { id: "ss-smokeshack-double", name: "Double SmokeShack", calories: 920, description: "Double cheeseburger with bacon" },
    { id: "ss-shroom-burger", name: "'Shroom Burger", calories: 550, description: "Crisp-fried portobello mushroom with cheese" },
    { id: "ss-hamburger", name: "Hamburger", calories: 410, description: "Lettuce, tomato, ShackSauce" },
    { id: "ss-cheeseburger", name: "Cheeseburger", calories: 470, description: "American cheese, lettuce, tomato" }
  ],
  "Chicken": [
    { id: "ss-chicken", name: "Chicken Shack", calories: 480, description: "Crispy chicken breast with lettuce, pickles" },
    { id: "ss-chicken-bites-6", name: "Chicken Bites (6 pc)", calories: 320, description: "Hand-breaded chicken pieces" },
    { id: "ss-chicken-bites-10", name: "Chicken Bites (10 pc)", calories: 530, description: "Hand-breaded chicken pieces" }
  ],
  "Hot Dogs": [
    { id: "ss-hotdog", name: "Hot Dog", calories: 280, description: "100% beef, no hormones or antibiotics" },
    { id: "ss-chili-dog", name: "Chili Dog", calories: 420, description: "Hot dog topped with cheese and chili" }
  ],
  "Sides": [
    { id: "ss-fries", name: "Crinkle Cut Fries", calories: 420, description: "Crispy crinkle cut fries" },
    { id: "ss-cheese-fries", name: "Cheese Fries", calories: 570, description: "Topped with cheese sauce" },
    { id: "ss-bacon-cheese-fries", name: "Bacon Cheese Fries", calories: 700, description: "Topped with cheese sauce and bacon" }
  ],
  "Shakes & Frozen Custard": [
    { id: "ss-shake-vanilla", name: "Vanilla Shake", calories: 640, description: "Hand-spun vanilla shake" },
    { id: "ss-shake-chocolate", name: "Chocolate Shake", calories: 660, description: "Hand-spun chocolate shake" },
    { id: "ss-shake-strawberry", name: "Strawberry Shake", calories: 650, description: "Hand-spun strawberry shake" },
    { id: "ss-shake-blackwhite", name: "Black & White Shake", calories: 650, description: "Vanilla shake with chocolate syrup" },
    { id: "ss-float", name: "Root Beer Float", calories: 510, description: "Root beer with vanilla custard" }
  ],
  "Beverages": [
    { id: "ss-lemonade", name: "Fresh Lemonade", calories: 190, description: "Fresh-squeezed lemonade" },
    { id: "ss-iced-tea", name: "Iced Tea", calories: 0, description: "Fresh-brewed iced tea" },
    { id: "ss-fountain-drink", name: "Fountain Drink", calories: 180, description: "Fountain beverages" }
  ]
};

export const shakeShackItems: FastFoodItem[] = Object.values(SHAKE_SHACK_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Shake Shack",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SHAKE_SHACK_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );