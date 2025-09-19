import { FastFoodItem } from '../types';

const HARDEES_CATEGORIES = {
  "Angus Thickburgers®": [
    { id: "hardees-monster", name: "Monster Thickburger", calories: 1290, description: "Two 1/3 lb patties, bacon, cheese, mayo" },
    { id: "hardees-western", name: "Western Bacon Thickburger", calories: 850, description: "BBQ sauce, bacon, onion rings" },
    { id: "hardees-double-western", name: "Double Western Bacon Thickburger", calories: 1070, description: "Double patty with BBQ and bacon" },
    { id: "hardees-frisco", name: "Frisco Thickburger", calories: 850, description: "Sourdough with bacon and swiss" },
    { id: "hardees-jalapeno", name: "Jalapeño Thickburger", calories: 760, description: "Spicy with jalapeños and pepper-jack" },
    { id: "hardees-mushroom", name: "Mushroom & Swiss Thickburger", calories: 740, description: "Sautéed mushrooms and swiss" },
    { id: "hardees-original", name: "Original Thickburger", calories: 730, description: "Classic 1/3 lb Angus beef patty" }
  ],
  "Charbroiled Burgers": [
    { id: "hardees-famous-star", name: "Famous Star with Cheese", calories: 670, description: "Charbroiled beef with cheese" },
    { id: "hardees-superstar", name: "Super Star with Cheese", calories: 920, description: "Double patty with cheese" },
    { id: "hardees-california", name: "California Classic Double", calories: 920, description: "Double patty with classic toppings" },
    { id: "hardees-double-cheeseburger", name: "Double Cheeseburger", calories: 710, description: "Two patties with American cheese" }
  ],
  "Hand-Breaded Chicken™": [
    { id: "hardees-hand-breaded", name: "Hand-Breaded Chicken Sandwich", calories: 690, description: "Crispy chicken breast fillet" },
    { id: "hardees-spicy-chicken", name: "Spicy Chicken Sandwich", calories: 660, description: "Spicy crispy chicken breast" },
    { id: "hardees-bbq-chicken", name: "BBQ Chicken Sandwich", calories: 680, description: "Crispy chicken with BBQ sauce" },
    { id: "hardees-chicken-tenders-3", name: "Hand-Breaded Chicken Tenders (3 pc)", calories: 360, description: "Hand-breaded tenders" },
    { id: "hardees-chicken-tenders-5", name: "Hand-Breaded Chicken Tenders (5 pc)", calories: 600, description: "Hand-breaded tenders" }
  ],
  "Made From Scratch™ Breakfast": [
    { id: "hardees-breakfast-platter", name: "Breakfast Platter", calories: 1050, description: "Eggs, bacon, hash rounds, biscuit" },
    { id: "hardees-monster-biscuit", name: "Monster Biscuit", calories: 790, description: "Eggs, bacon, sausage, cheese" },
    { id: "hardees-loaded-omelet", name: "Loaded Omelet Biscuit", calories: 580, description: "Loaded omelet on fresh biscuit" },
    { id: "hardees-bacon-biscuit", name: "Bacon, Egg & Cheese Biscuit", calories: 450, description: "Classic breakfast sandwich" },
    { id: "hardees-hash-rounds", name: "Hash Rounds", calories: 290, description: "Crispy potato rounds" }
  ],
  "Natural-Cut Fries": [
    { id: "hardees-natural-cut-small", name: "Natural-Cut French Fries (Small)", calories: 300, description: "Natural-cut fries" },
    { id: "hardees-natural-cut-medium", name: "Natural-Cut French Fries (Medium)", calories: 390, description: "Natural-cut fries" },
    { id: "hardees-natural-cut-large", name: "Natural-Cut French Fries (Large)", calories: 440, description: "Natural-cut fries" }
  ],
  "Hand-Scooped Shakes": [
    { id: "hardees-shake-chocolate", name: "Chocolate Hand-Scooped Ice Cream Shake", calories: 810, description: "Real ice cream shake" },
    { id: "hardees-shake-vanilla", name: "Vanilla Hand-Scooped Ice Cream Shake", calories: 780, description: "Real ice cream shake" },
    { id: "hardees-shake-strawberry", name: "Strawberry Hand-Scooped Ice Cream Shake", calories: 790, description: "Real ice cream shake" }
  ]
};

export const hardeesItems: FastFoodItem[] = Object.values(HARDEES_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Hardee's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(HARDEES_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );