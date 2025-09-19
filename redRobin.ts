import { FastFoodItem } from '../types';

const RED_ROBIN_CATEGORIES = {
  "Gourmet Burgers": [
    { id: "rr-royal", name: "Royal Red Robin Burger", calories: 1210 },
    { id: "rr-madlove", name: "Madlove Burger", calories: 1120 },
    { id: "rr-bbq", name: "Whiskey River BBQ Burger", calories: 1060 },
    { id: "rr-bleu", name: "Bleu Ribbon Burger", calories: 1180 },
    { id: "rr-banzai", name: "Banzai Burger", calories: 1040 },
    { id: "rr-guacamole", name: "Guacamole Bacon Burger", calories: 1090 },
    { id: "rr-prime", name: "Prime Chophouse Burger", calories: 1180 },
    { id: "rr-burnin-love", name: "Burnin' Love Burger", calories: 1140 },
    { id: "rr-monster", name: "Monster Burger", calories: 1420 }
  ],
  "Chicken & More": [
    { id: "rr-california", name: "California Chicken Sandwich", calories: 780 },
    { id: "rr-whiskey-chicken", name: "Whiskey River BBQ Chicken", calories: 820 },
    { id: "rr-grilled-chicken", name: "Simply Grilled Chicken", calories: 620 },
    { id: "rr-crispy-chicken", name: "Crispy Chicken Sandwich", calories: 850 },
    { id: "rr-teriyaki", name: "Teriyaki Chicken Sandwich", calories: 790 },
    { id: "rr-clucks-combos", name: "Clucks & Fries", calories: 1240 }
  ],
  "Appetizers": [
    { id: "rr-tower-rings", name: "Tower of Onion Rings", calories: 1140 },
    { id: "rr-pretzel-bites", name: "Pretzel Bites", calories: 580 },
    { id: "rr-mozzarella", name: "Mozzarella Sticks", calories: 840 },
    { id: "rr-wings", name: "Bar Wings 'n' Yukon Chips", calories: 910 },
    { id: "rr-nachos", name: "Red's Bold Boneless Wings", calories: 880 },
    { id: "rr-poppers", name: "Jalapeño Poppers", calories: 640 }
  ],
  "Fresh Salads": [
    { id: "rr-caesar", name: "Simply Grilled Chicken Caesar", calories: 540 },
    { id: "rr-cobb", name: "Avo-Cobb-O Salad", calories: 740 },
    { id: "rr-southwest", name: "Southwest Chicken Salad", calories: 680 },
    { id: "rr-house", name: "House Salad", calories: 110 }
  ],
  "Sides": [
    { id: "rr-fries", name: "Steak Fries", calories: 370 },
    { id: "rr-sweet-fries", name: "Sweet Potato Fries", calories: 390 },
    { id: "rr-rings", name: "Onion Rings", calories: 420 },
    { id: "rr-broccoli", name: "Steamed Broccoli", calories: 40 },
    { id: "rr-coleslaw", name: "Coleslaw", calories: 210 },
    { id: "rr-mac-cheese", name: "Mac & Cheese", calories: 540 }
  ],
  "Shakes & Desserts": [
    { id: "rr-chocolate-shake", name: "Chocolate Shake", calories: 780 },
    { id: "rr-vanilla-shake", name: "Vanilla Shake", calories: 760 },
    { id: "rr-strawberry-shake", name: "Strawberry Shake", calories: 740 },
    { id: "rr-oreo-shake", name: "Oreo Cookie Magic Shake", calories: 820 },
    { id: "rr-chocolate-hazelnut", name: "Chocolate Hazelnut Shake", calories: 850 },
    { id: "rr-salted-caramel", name: "Salted Caramel Shake", calories: 790 }
  ]
};

export const redRobinItems: FastFoodItem[] = Object.values(RED_ROBIN_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Red Robin",
      item: item.name,
      calories: item.calories,
      category: Object.entries(RED_ROBIN_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );