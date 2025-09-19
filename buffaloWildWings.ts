import { FastFoodItem } from '../types';

const BUFFALO_WILD_WINGS_CATEGORIES = {
  "Traditional Wings": [
    { id: "bww-traditional-6", name: "Traditional Wings (6 pc)", calories: 430 },
    { id: "bww-traditional-10", name: "Traditional Wings (10 pc)", calories: 720 },
    { id: "bww-traditional-15", name: "Traditional Wings (15 pc)", calories: 1080 },
    { id: "bww-traditional-20", name: "Traditional Wings (20 pc)", calories: 1440 },
    { id: "bww-traditional-30", name: "Traditional Wings (30 pc)", calories: 2160 },
    { id: "bww-traditional-50", name: "Traditional Wings (50 pc)", calories: 3600 }
  ],
  "Boneless Wings": [
    { id: "bww-boneless-6", name: "Boneless Wings (6 pc)", calories: 360 },
    { id: "bww-boneless-10", name: "Boneless Wings (10 pc)", calories: 600 },
    { id: "bww-boneless-15", name: "Boneless Wings (15 pc)", calories: 900 },
    { id: "bww-boneless-20", name: "Boneless Wings (20 pc)", calories: 1200 },
    { id: "bww-boneless-30", name: "Boneless Wings (30 pc)", calories: 1800 },
    { id: "bww-boneless-50", name: "Boneless Wings (50 pc)", calories: 3000 }
  ],
  "Chicken Tenders": [
    { id: "bww-tenders-3", name: "Chicken Tenders (3 pc)", calories: 480 },
    { id: "bww-tenders-5", name: "Chicken Tenders (5 pc)", calories: 800 }
  ],
  "Burgers & Sandwiches": [
    { id: "bww-burger", name: "All-American Cheeseburger", calories: 890 },
    { id: "bww-bacon-burger", name: "Bacon Burger", calories: 1040 },
    { id: "bww-southwest-burger", name: "Southwest Burger", calories: 1120 },
    { id: "bww-buffalo-ranch", name: "Buffalo Ranch Chicken Sandwich", calories: 920 },
    { id: "bww-nashville-hot", name: "Nashville Hot Chicken Sandwich", calories: 940 }
  ],
  "Shareable Appetizers": [
    { id: "bww-fried-pickles", name: "Fried Pickles", calories: 680 },
    { id: "bww-mozzarella", name: "Mozzarella Sticks", calories: 840 },
    { id: "bww-onion-rings", name: "Onion Rings", calories: 720 },
    { id: "bww-nachos", name: "Ultimate Nachos", calories: 2080 },
    { id: "bww-cheddar-curds", name: "Wisconsin Cheese Curds", calories: 1080 }
  ],
  "Fresh Salads": [
    { id: "bww-buffalo-chicken-salad", name: "Buffalo Chicken Salad", calories: 620 },
    { id: "bww-caesar-salad", name: "Chicken Caesar Salad", calories: 580 },
    { id: "bww-southwest-salad", name: "Southwest Chicken Salad", calories: 640 }
  ],
  "Signature Sides": [
    { id: "bww-fries", name: "Natural-Cut Fries", calories: 380 },
    { id: "bww-wedges", name: "Buffalo Wedges", calories: 420 },
    { id: "bww-slaw", name: "Coleslaw", calories: 220 },
    { id: "bww-mac-cheese", name: "Mac & Cheese", calories: 580 },
    { id: "bww-veggies", name: "Veggie Boat", calories: 40 }
  ],
  "Sweet Finishers": [
    { id: "bww-cake", name: "Chocolate Fudge Cake", calories: 780 },
    { id: "bww-cheesecake", name: "New York Cheesecake", calories: 620 },
    { id: "bww-sundae", name: "Dessert Nachos", calories: 840 }
  ],
  "Drinks & Refreshments": [
    { id: "bww-coke", name: "Coca-Cola", calories: 200 },
    { id: "bww-sprite", name: "Sprite", calories: 200 },
    { id: "bww-lemonade", name: "Lemonade", calories: 180 },
    { id: "bww-tea", name: "Fresh-Brewed Iced Tea", calories: 0 }
  ]
};

export const buffaloWildWingsItems: FastFoodItem[] = Object.values(BUFFALO_WILD_WINGS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Buffalo Wild Wings",
      item: item.name,
      calories: item.calories,
      category: Object.entries(BUFFALO_WILD_WINGS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );