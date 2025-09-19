import { FastFoodItem } from '../types';

const APPLEBEES_CATEGORIES = {
  "Appetizers & Snacks": [
    { id: "applebees-boneless-wings", name: "Boneless Wings", calories: 840 },
    { id: "applebees-mozzarella-sticks", name: "Mozzarella Sticks", calories: 910 },
    { id: "applebees-spinach-dip", name: "Spinach & Artichoke Dip", calories: 960 },
    { id: "applebees-nachos", name: "Neighborhood Nachos", calories: 1940 },
    { id: "applebees-pretzels", name: "Brew Pub Pretzels", calories: 1160 },
    { id: "applebees-wonton-tacos", name: "Chicken Wonton Tacos", calories: 590 }
  ],
  "Steaks & Ribs": [
    { id: "applebees-riblets", name: "Riblets Platter", calories: 1320 },
    { id: "applebees-sirloin-8", name: "8 oz. Top Sirloin", calories: 620 },
    { id: "applebees-sirloin-6", name: "6 oz. Top Sirloin", calories: 460 },
    { id: "applebees-bourbon-steak", name: "Bourbon Street Steak", calories: 780 },
    { id: "applebees-ribs-full", name: "Double-Glazed Baby Back Ribs (Full Rack)", calories: 1540 }
  ],
  "Chicken & Pasta": [
    { id: "applebees-chicken-tenders-platter", name: "Chicken Tenders Platter", calories: 1430 },
    { id: "applebees-chicken-alfredo", name: "Classic Chicken Alfredo", calories: 1420 },
    { id: "applebees-chicken-penne", name: "Classic Broccoli Chicken Alfredo", calories: 1460 },
    { id: "applebees-chicken-parmesan", name: "Classic Chicken Parmesan", calories: 1240 },
    { id: "applebees-fiesta-lime", name: "Fiesta Lime Chicken", calories: 1180 },
    { id: "applebees-bourbon-chicken", name: "Bourbon Street Chicken", calories: 780 }
  ],
  "Burgers": [
    { id: "applebees-burger", name: "Classic Burger", calories: 780 },
    { id: "applebees-quesadilla-burger", name: "Quesadilla Burger", calories: 1650 },
    { id: "applebees-whiskey-burger", name: "Whiskey Bacon Burger", calories: 1320 },
    { id: "applebees-brunch-burger", name: "Brunch Burger", calories: 1610 }
  ],
  "Sandwiches & Wraps": [
    { id: "applebees-clubhouse", name: "Clubhouse Grille", calories: 920 },
    { id: "applebees-oriental-wrap", name: "Oriental Chicken Wrap", calories: 1810 },
    { id: "applebees-chicken-sandwich", name: "Grilled Chicken Sandwich", calories: 850 }
  ],
  "Salads": [
    { id: "applebees-oriental-salad", name: "Oriental Chicken Salad", calories: 1550 },
    { id: "applebees-southwest-salad", name: "Southwest Chicken Salad", calories: 850 },
    { id: "applebees-grilled-caesar", name: "Grilled Chicken Caesar Salad", calories: 920 },
    { id: "applebees-house-salad", name: "House Salad", calories: 120 }
  ],
  "Seafood": [
    { id: "applebees-shrimp-wonton", name: "Shrimp Wonton Stir-Fry", calories: 1020 },
    { id: "applebees-fish-chips", name: "Hand-Battered Fish & Chips", calories: 1490 },
    { id: "applebees-salmon", name: "Grilled Salmon", calories: 740 }
  ],
  "Sides": [
    { id: "applebees-fries-classic", name: "Classic Fries", calories: 430 },
    { id: "applebees-mashed-potatoes", name: "Garlic Mashed Potatoes", calories: 280 },
    { id: "applebees-broccoli", name: "Steamed Broccoli", calories: 100 },
    { id: "applebees-coleslaw", name: "Coleslaw", calories: 260 },
    { id: "applebees-mac-cheese", name: "Four Cheese Mac & Cheese", calories: 470 }
  ],
  "Desserts": [
    { id: "applebees-brownie", name: "Triple Chocolate Meltdown", calories: 980 },
    { id: "applebees-butter-cake", name: "Butter Pecan Blondie", calories: 1160 },
    { id: "applebees-churros", name: "Cinnamon Sugar Churros", calories: 1040 },
    { id: "applebees-blue-ribbon", name: "Blue Ribbon Brownie", calories: 1280 }
  ]
};

export const applebeesItems: FastFoodItem[] = Object.values(APPLEBEES_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Applebee's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(APPLEBEES_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );