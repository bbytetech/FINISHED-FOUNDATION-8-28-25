import { FastFoodItem } from '../types';

const JACK_IN_THE_BOX_CATEGORIES = {
  "Signature Burgers": [
    { id: "jitb-jumbo-jack", name: "Jumbo Jack", calories: 580, description: "100% beef patty, lettuce, tomato, pickles, onions, mayo" },
    { id: "jitb-double-jack", name: "Double Jack", calories: 880, description: "Two beef patties with cheese and fixings" },
    { id: "jitb-ultimate", name: "Ultimate Cheeseburger", calories: 930, description: "Two beef patties with three slices of cheese" },
    { id: "jitb-bacon-ultimate", name: "Bacon Ultimate Cheeseburger", calories: 980, description: "Ultimate with crispy bacon" },
    { id: "jitb-sourdough-jack", name: "Sourdough Jack", calories: 670, description: "Beef patty on toasted sourdough" },
    { id: "jitb-buttery-jack", name: "Classic Buttery Jack", calories: 850, description: "Signature butter-topped beef patty" }
  ],
  "Chicken & More": [
    { id: "jitb-chicken-sandwich", name: "Chicken Sandwich", calories: 490, description: "Crispy chicken fillet with lettuce" },
    { id: "jitb-spicy-chicken", name: "Spicy Chicken Sandwich", calories: 560, description: "Spicy crispy chicken with fresh lettuce" },
    { id: "jitb-homestyle-ranch", name: "Homestyle Ranch Chicken Club", calories: 630, description: "Crispy chicken with bacon and ranch" },
    { id: "jitb-chicken-nuggets-8", name: "Chicken Nuggets (8 pc)", calories: 240, description: "All-white meat chicken nuggets" },
    { id: "jitb-chicken-nuggets-10", name: "Chicken Nuggets (10 pc)", calories: 300, description: "All-white meat chicken nuggets" },
    { id: "jitb-chicken-strips-3", name: "Chicken Strips (3 pc)", calories: 350, description: "Hand-breaded chicken strips" }
  ],
  "Tacos & More": [
    { id: "jitb-tacos-2", name: "2 Tacos", calories: 340, description: "Crunchy tacos with American cheese" },
    { id: "jitb-tiny-tacos-15", name: "Tiny Tacos (15)", calories: 650, description: "Mini crispy tacos" }
  ],
  "Breakfast Menu": [
    { id: "jitb-supreme-croissant", name: "Supreme Croissant", calories: 610, description: "Eggs, bacon, and cheese on croissant" },
    { id: "jitb-breakfast-jack", name: "Breakfast Jack", calories: 350, description: "Ham, egg, and cheese on a bun" },
    { id: "jitb-grande-breakfast", name: "Grande Sausage Breakfast Burrito", calories: 1040, description: "Eggs, cheese, hash browns, sausage" },
    { id: "jitb-mini-pancakes", name: "Mini Pancakes", calories: 440, description: "8 mini pancakes with syrup" }
  ],
  "Sides & Snacks": [
    { id: "jitb-curly-fries", name: "Curly Fries", calories: 380, description: "Seasoned curly-cut fries" },
    { id: "jitb-french-fries", name: "French Fries", calories: 300, description: "Classic straight-cut fries" },
    { id: "jitb-onion-rings", name: "Onion Rings", calories: 440, description: "Crispy breaded onion rings" },
    { id: "jitb-stuffed-jalepenos", name: "Stuffed Jalapeños", calories: 360, description: "Breaded jalapeños with cheese" },
    { id: "jitb-mini-churros", name: "Mini Churros", calories: 240, description: "Cinnamon sugar churros" }
  ],
  "Shakes & Desserts": [
    { id: "jitb-shake-oreo", name: "Oreo Cookie Shake", calories: 780, description: "Vanilla shake with Oreo pieces" },
    { id: "jitb-shake-chocolate", name: "Chocolate Shake", calories: 740, description: "Rich chocolate shake" },
    { id: "jitb-shake-vanilla", name: "Vanilla Shake", calories: 700, description: "Classic vanilla shake" },
    { id: "jitb-shake-strawberry", name: "Strawberry Shake", calories: 720, description: "Sweet strawberry shake" }
  ],
  "Beverages": [
    { id: "jitb-coke", name: "Coca-Cola (Medium)", calories: 210, description: "Fountain drink" },
    { id: "jitb-diet-coke", name: "Diet Coke (Medium)", calories: 0, description: "Sugar-free cola" },
    { id: "jitb-sprite", name: "Sprite (Medium)", calories: 200, description: "Lemon-lime soda" },
    { id: "jitb-dr-pepper", name: "Dr Pepper (Medium)", calories: 190, description: "Fountain drink" }
  ]
};

export const jackInTheBoxItems: FastFoodItem[] = Object.values(JACK_IN_THE_BOX_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Jack in the Box",
      item: item.name,
      calories: item.calories,
      category: Object.entries(JACK_IN_THE_BOX_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );