import { FastFoodItem } from '../types';

const DAIRY_QUEEN_CATEGORIES = {
  "DQ Blizzards": [
    { id: "dq-oreo", name: "Oreo® Blizzard (Medium)", calories: 720, description: "Oreo cookie pieces and vanilla soft serve" },
    { id: "dq-cookie-dough", name: "Cookie Dough Blizzard (Medium)", calories: 780, description: "Cookie dough pieces and vanilla soft serve" },
    { id: "dq-reeses", name: "Reese's® Peanut Butter Cup Blizzard (Medium)", calories: 760, description: "Reese's peanut butter cup pieces and vanilla soft serve" },
    { id: "dq-mm", name: "M&M's® Blizzard (Medium)", calories: 740, description: "M&M's candies and vanilla soft serve" },
    { id: "dq-choc-chip", name: "Chocolate Chip Cookie Dough Blizzard (Medium)", calories: 790, description: "Cookie dough and chocolate chips with vanilla soft serve" },
    { id: "dq-heath", name: "Heath® Blizzard (Medium)", calories: 730, description: "Heath toffee bar pieces and vanilla soft serve" },
    { id: "dq-butterfinger", name: "Butterfinger® Blizzard (Medium)", calories: 750, description: "Butterfinger pieces and vanilla soft serve" }
  ],
  "DQ Food": [
    { id: "dq-1-4-burger", name: "1/4 lb. GrillBurger™", calories: 580, description: "Beef patty with cheese and toppings" },
    { id: "dq-1-2-burger", name: "1/2 lb. FlameThrower® GrillBurger™", calories: 970, description: "Spicy burger with jalapeño bacon" },
    { id: "dq-cheeseburger", name: "Cheeseburger", calories: 420, description: "Classic cheeseburger" },
    { id: "dq-deluxe-burger", name: "Deluxe Cheeseburger", calories: 470, description: "Cheeseburger with deluxe toppings" },
    { id: "dq-bacon-burger", name: "Bacon Cheeseburger", calories: 480, description: "Cheeseburger with crispy bacon" },
    { id: "dq-chicken-basket", name: "Chicken Strip Basket (4 pc)", calories: 1060, description: "Crispy chicken strips with fries" },
    { id: "dq-chicken-sandwich", name: "Crispy Chicken Sandwich", calories: 560, description: "Breaded chicken sandwich" }
  ],
  "DQ Treats": [
    { id: "dq-dilly-bar", name: "Chocolate Dilly® Bar", calories: 220, description: "Chocolate-dipped ice cream bar" },
    { id: "dq-buster-bar", name: "Peanut Buster® Bar", calories: 370, description: "Peanuts, fudge and vanilla ice cream" },
    { id: "dq-cone", name: "Small Cone", calories: 230, description: "Vanilla soft serve cone" },
    { id: "dq-sundae", name: "Hot Fudge Sundae", calories: 330, description: "Vanilla soft serve with hot fudge" },
    { id: "dq-banana-split", name: "Banana Split", calories: 510, description: "Classic banana split sundae" },
    { id: "dq-peanut-buster", name: "Peanut Buster® Parfait", calories: 710, description: "Layered sundae with peanuts" },
    { id: "dq-royal-treat", name: "Royal Treat", calories: 570, description: "Premium sundae creation" }
  ],
  "DQ Cakes": [
    { id: "dq-round-cake", name: "Round Cake (8\")", calories: 2670, description: "Ice cream cake with fudge and crunch" },
    { id: "dq-sheet-cake", name: "Sheet Cake (10\"x14\")", calories: 4180, description: "Large ice cream cake" },
    { id: "dq-log-cake", name: "Log Cake", calories: 2890, description: "Roll-style ice cream cake" },
    { id: "dq-heart-cake", name: "Heart Cake", calories: 2780, description: "Heart-shaped ice cream cake" },
    { id: "dq-cupcake", name: "Cupcake Cake", calories: 290, description: "Individual ice cream cupcake" }
  ],
  "DQ Shakes & Malts": [
    { id: "dq-shake-chocolate", name: "Chocolate Shake (Medium)", calories: 670, description: "Chocolate milkshake" },
    { id: "dq-shake-vanilla", name: "Vanilla Shake (Medium)", calories: 620, description: "Vanilla milkshake" },
    { id: "dq-shake-strawberry", name: "Strawberry Shake (Medium)", calories: 640, description: "Strawberry milkshake" },
    { id: "dq-malt-chocolate", name: "Chocolate Malt (Medium)", calories: 700, description: "Chocolate malt" },
    { id: "dq-malt-vanilla", name: "Vanilla Malt (Medium)", calories: 650, description: "Vanilla malt" },
    { id: "dq-malt-strawberry", name: "Strawberry Malt (Medium)", calories: 670, description: "Strawberry malt" }
  ],
  "DQ Beverages": [
    { id: "dq-pepsi", name: "Pepsi (Medium)", calories: 200, description: "Fountain drink" },
    { id: "dq-diet-pepsi", name: "Diet Pepsi (Medium)", calories: 0, description: "Sugar-free cola" },
    { id: "dq-mtn-dew", name: "Mountain Dew (Medium)", calories: 240, description: "Citrus soda" },
    { id: "dq-dr-pepper", name: "Dr Pepper (Medium)", calories: 180, description: "Fountain drink" },
    { id: "dq-sweet-tea", name: "Sweet Tea (Medium)", calories: 120, description: "Sweetened iced tea" },
    { id: "dq-unsweet-tea", name: "Unsweetened Tea (Medium)", calories: 0, description: "Unsweetened iced tea" },
    { id: "dq-lemonade", name: "Lemonade (Medium)", calories: 140, description: "Fresh lemonade" }
  ]
};

export const dairyQueenItems: FastFoodItem[] = Object.values(DAIRY_QUEEN_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Dairy Queen",
      item: item.name,
      calories: item.calories,
      category: Object.entries(DAIRY_QUEEN_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );