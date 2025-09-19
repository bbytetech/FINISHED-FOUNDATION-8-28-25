import { FastFoodItem } from '../types';

const CRACKER_BARREL_CATEGORIES = {
  "Country Breakfast": [
    { id: "cb-mommas-pancake", name: "Momma's Pancake Breakfast", calories: 1040 },
    { id: "cb-old-timer", name: "Old Timer's Breakfast", calories: 980 },
    { id: "cb-uncle-herschel", name: "Uncle Herschel's Favorite", calories: 1120 },
    { id: "cb-grandpa-country", name: "Grandpa's Country Fried Breakfast", calories: 1310 },
    { id: "cb-french-toast", name: "French Toast Breakfast", calories: 880 },
    { id: "cb-sunrise-sampler", name: "Sunrise Sampler", calories: 1240 },
    { id: "cb-ham-breakfast", name: "Country Ham Breakfast", calories: 930 },
    { id: "cb-steak-eggs", name: "Sirloin Steak & Eggs", calories: 870 }
  ],
  "Home Style Dinners": [
    { id: "cb-chicken-dumplings", name: "Chicken n' Dumplings", calories: 450 },
    { id: "cb-meatloaf", name: "Meatloaf", calories: 640 },
    { id: "cb-chicken-fried", name: "Country Fried Steak", calories: 790 },
    { id: "cb-roast-beef", name: "Roast Beef", calories: 540 },
    { id: "cb-grilled-chicken", name: "Grilled Chicken Tenderloins", calories: 360 },
    { id: "cb-chicken-fried-chicken", name: "Country Fried Chicken", calories: 810 },
    { id: "cb-sugar-ham", name: "Sugar Cured Ham", calories: 420 },
    { id: "cb-pot-roast", name: "Braised Pot Roast", calories: 560 }
  ],
  "Burgers & Sandwiches": [
    { id: "cb-bacon-burger", name: "Bacon Cheeseburger", calories: 870 },
    { id: "cb-chicken-sandwich", name: "Homestyle Chicken Sandwich", calories: 720 },
    { id: "cb-patty-melt", name: "Patty Melt", calories: 840 },
    { id: "cb-blt", name: "BLT", calories: 560 },
    { id: "cb-grilled-cheese", name: "Grilled Cheese", calories: 580 },
    { id: "cb-club", name: "Club Sandwich", calories: 680 }
  ],
  "Fresh Salads": [
    { id: "cb-chicken-salad", name: "Grilled Chicken Salad", calories: 540 },
    { id: "cb-chef-salad", name: "Chef Salad", calories: 620 },
    { id: "cb-house-salad", name: "House Salad", calories: 180 }
  ],
  "Country Sides": [
    { id: "cb-hashbrowns", name: "Hash Brown Casserole", calories: 190 },
    { id: "cb-fries", name: "French Fries", calories: 320 },
    { id: "cb-mashed-potatoes", name: "Mashed Potatoes", calories: 160 },
    { id: "cb-mac-cheese", name: "Mac n' Cheese", calories: 270 },
    { id: "cb-green-beans", name: "Country Green Beans", calories: 90 },
    { id: "cb-corn", name: "Whole Kernel Corn", calories: 180 },
    { id: "cb-carrots", name: "Baby Carrots", calories: 120 },
    { id: "cb-coleslaw", name: "Cole Slaw", calories: 170 },
    { id: "cb-biscuits", name: "Buttermilk Biscuits (2)", calories: 320 },
    { id: "cb-cornbread", name: "Corn Muffins (2)", calories: 340 },
    { id: "cb-fried-apples", name: "Fried Apples", calories: 220 },
    { id: "cb-sweet-potato", name: "Sweet Potato Casserole", calories: 260 },
    { id: "cb-dumplins", name: "Dumplins", calories: 210 }
  ],
  "Sweet Treats": [
    { id: "cb-apple-pie", name: "Baked Apple Pie", calories: 520 },
    { id: "cb-chocolate-cobbler", name: "Chocolate Cobbler", calories: 760 },
    { id: "cb-fruit-cobbler", name: "Fruit Cobbler", calories: 640 },
    { id: "cb-sundae", name: "Ice Cream Sundae", calories: 480 },
    { id: "cb-apple-dumpling", name: "Apple Pecan Streusel Dumpling", calories: 680 },
    { id: "cb-double-chocolate", name: "Double Chocolate Fudge Coca-Cola Cake", calories: 720 }
  ],
  "Beverages": [
    { id: "cb-coffee", name: "Coffee", calories: 0 },
    { id: "cb-milk", name: "Milk", calories: 120 },
    { id: "cb-juice", name: "Orange Juice", calories: 110 },
    { id: "cb-lemonade", name: "Lemonade", calories: 180 },
    { id: "cb-sweet-tea", name: "Sweet Tea", calories: 130 },
    { id: "cb-soda", name: "Fountain Soda", calories: 140 }
  ]
};

export const crackerBarrelItems: FastFoodItem[] = Object.values(CRACKER_BARREL_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Cracker Barrel",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CRACKER_BARREL_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );