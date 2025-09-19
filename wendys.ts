import { FastFoodItem } from '../types';

const WENDYS_CATEGORIES = {
  "Made Fresh Burgers": [
    { id: "wendys-baconator", name: "Baconator", calories: 950 },
    { id: "wendys-son-of-baconator", name: "Son of Baconator", calories: 630 },
    { id: "wendys-big-bacon-cheddar", name: "Big Bacon Cheddar", calories: 810 },
    { id: "wendys-pretzel-bacon-pub", name: "Pretzel Bacon Pub", calories: 780 },
    { id: "wendys-dave-single", name: "Dave's Single", calories: 570 },
    { id: "wendys-dave-double", name: "Dave's Double", calories: 870 },
    { id: "wendys-dave-triple", name: "Dave's Triple", calories: 1090 }
  ],
  "Value Menu": [
    { id: "wendys-jr-bacon", name: "Jr. Bacon Cheeseburger", calories: 380 },
    { id: "wendys-jr-cheeseburger", name: "Jr. Cheeseburger", calories: 280 },
    { id: "wendys-crispy-chicken", name: "Crispy Chicken Sandwich", calories: 320 }
  ],
  "Fresh-Made Chicken": [
    { id: "wendys-classic-chicken", name: "Classic Chicken Sandwich", calories: 490 },
    { id: "wendys-spicy-chicken", name: "Spicy Chicken Sandwich", calories: 510 },
    { id: "wendys-grilled-chicken", name: "Grilled Chicken Sandwich", calories: 350 },
    { id: "wendys-asiago-ranch", name: "Asiago Ranch Chicken Club", calories: 630 }
  ],
  "Fresh Salads": [
    { id: "wendys-southwest-avocado", name: "Southwest Avocado Salad", calories: 570 },
    { id: "wendys-parmesan-caesar", name: "Parmesan Caesar Salad", calories: 440 },
    { id: "wendys-taco-salad", name: "Taco Salad", calories: 690 },
    { id: "wendys-apple-pecan", name: "Apple Pecan Chicken Salad", calories: 550 }
  ],
  "Fresh-Made Sides": [
    { id: "wendys-fries-small", name: "Small Fries", calories: 320 },
    { id: "wendys-fries-medium", name: "Medium Fries", calories: 420 },
    { id: "wendys-fries-large", name: "Large Fries", calories: 470 },
    { id: "wendys-baked-potato", name: "Plain Baked Potato", calories: 270 },
    { id: "wendys-chili-small", name: "Small Chili", calories: 240 }
  ],
  "Frosty Treats": [
    { id: "wendys-frosty-chocolate", name: "Chocolate Frosty", calories: 350 },
    { id: "wendys-frosty-vanilla", name: "Vanilla Frosty", calories: 340 },
    { id: "wendys-frosty-strawberry", name: "Strawberry Frosty", calories: 330 },
    { id: "wendys-frosty-caramel", name: "Caramel Frosty", calories: 360 }
  ],
  "Fresh-Made Breakfast": [
    { id: "wendys-breakfast-baconator", name: "Breakfast Baconator", calories: 730 },
    { id: "wendys-honey-butter-chicken", name: "Honey Butter Chicken Biscuit", calories: 500 },
    { id: "wendys-sausage-biscuit", name: "Sausage, Egg & Cheese Biscuit", calories: 610 },
    { id: "wendys-breakfast-potatoes", name: "Seasoned Potatoes", calories: 250 }
  ]
};

export const wendysItems: FastFoodItem[] = Object.values(WENDYS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Wendy's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(WENDYS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );