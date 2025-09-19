import { FastFoodItem } from '../types';

const BURGER_KING_CATEGORIES = {
  "Signature Burgers": [
    { id: "bk-whopper", name: "Whopper", calories: 670 },
    { id: "bk-double-whopper", name: "Double Whopper", calories: 900 },
    { id: "bk-bacon-king", name: "Bacon King", calories: 1150 },
    { id: "bk-double-bacon-king", name: "Double Bacon King", calories: 1400 }
  ],
  "Classic Burgers": [
    { id: "bk-whopper-jr", name: "Whopper Jr", calories: 310 },
    { id: "bk-big-king", name: "Big King", calories: 580 },
    { id: "bk-hamburger", name: "Hamburger", calories: 240 },
    { id: "bk-cheeseburger", name: "Cheeseburger", calories: 280 },
    { id: "bk-double-cheeseburger", name: "Double Cheeseburger", calories: 400 }
  ],
  "Chicken & Fish": [
    { id: "bk-chicken", name: "Original Chicken Sandwich", calories: 693 },
    { id: "bk-spicy-chicken", name: "Spicy Chicken Sandwich", calories: 700 },
    { id: "bk-deluxe-chicken", name: "Deluxe Chicken Sandwich", calories: 730 }
  ],
  "Chicken Nuggets & Tenders": [
    { id: "bk-crispy-chicken", name: "Crispy Chicken Jr", calories: 450 },
    { id: "bk-nuggets-4", name: "4pc Chicken Nuggets", calories: 170 },
    { id: "bk-nuggets-8", name: "8pc Chicken Nuggets", calories: 380 },
    { id: "bk-nuggets-20", name: "20pc Chicken Nuggets", calories: 950 },
    { id: "bk-spicy-nuggets-8", name: "8pc Spicy Nuggets", calories: 390 },
    { id: "bk-chicken-fries", name: "Chicken Fries", calories: 290 }
  ],
  "Breakfast Menu": [
    { id: "bk-croissan-wich", name: "Croissan'wich with Sausage", calories: 500 },
    { id: "bk-bacon-croissan-wich", name: "Bacon Croissan'wich", calories: 340 },
    { id: "bk-ham-croissan-wich", name: "Ham Croissan'wich", calories: 330 },
    { id: "bk-breakfast-burrito", name: "Breakfast Burrito Jr", calories: 370 },
    { id: "bk-pancakes", name: "Pancakes & Sausage Platter", calories: 610 },
    { id: "bk-hash-browns", name: "Hash Browns", calories: 250 }
  ],
  "Sides & Snacks": [
    { id: "bk-fries-small", name: "Small Fries", calories: 320 },
    { id: "bk-fries-medium", name: "Medium Fries", calories: 380 },
    { id: "bk-fries-large", name: "Large Fries", calories: 443 },
    { id: "bk-onion-rings-small", name: "Small Onion Rings", calories: 320 },
    { id: "bk-onion-rings-medium", name: "Medium Onion Rings", calories: 410 },
    { id: "bk-onion-rings-large", name: "Large Onion Rings", calories: 500 }
  ],
  "Shakes & Desserts": [
    { id: "bk-shake-chocolate", name: "Chocolate Shake", calories: 761 },
    { id: "bk-shake-vanilla", name: "Vanilla Shake", calories: 740 },
    { id: "bk-shake-strawberry", name: "Strawberry Shake", calories: 740 },
    { id: "bk-sundae", name: "Chocolate Sundae", calories: 280 },
    { id: "bk-pie-apple", name: "Dutch Apple Pie", calories: 340 },
    { id: "bk-cookie", name: "Chocolate Chip Cookie", calories: 160 },
    { id: "bk-cinnamon-roll", name: "Cinnamon Roll", calories: 410 }
  ]
};

export const burgerKingItems: FastFoodItem[] = Object.values(BURGER_KING_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Burger King",
      item: item.name,
      calories: item.calories,
      category: Object.entries(BURGER_KING_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );