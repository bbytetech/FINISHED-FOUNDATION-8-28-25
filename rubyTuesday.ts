import { FastFoodItem } from '../types';

const RUBY_TUESDAY_CATEGORIES = {
  "Appetizers": [
    { id: "rt-spinach-dip", name: "Spinach Artichoke Dip", calories: 1050 },
    { id: "rt-mozzarella", name: "Mozzarella Sticks", calories: 840 },
    { id: "rt-wings", name: "Classic Wings (8 pc)", calories: 720 },
    { id: "rt-boneless-wings", name: "Boneless Wings (8 pc)", calories: 680 },
    { id: "rt-potstickers", name: "Potstickers", calories: 420 }
  ],
  "Burgers & Sandwiches": [
    { id: "rt-classic-burger", name: "Classic Cheeseburger", calories: 880 },
    { id: "rt-bacon-burger", name: "Bacon Cheeseburger", calories: 1020 },
    { id: "rt-smokehouse", name: "Smokehouse Burger", calories: 1140 },
    { id: "rt-mushroom-burger", name: "Mushroom Swiss Burger", calories: 940 },
    { id: "rt-avocado-turkey", name: "Avocado Turkey Burger", calories: 760 }
  ],
  "Steaks & Ribs": [
    { id: "rt-ribeye", name: "Ribeye (12 oz)", calories: 940 },
    { id: "rt-sirloin", name: "Top Sirloin (6 oz)", calories: 520 },
    { id: "rt-ny-strip", name: "New York Strip (12 oz)", calories: 860 },
    { id: "rt-ribs-full", name: "Full Rack Baby-Back Ribs", calories: 1080 },
    { id: "rt-ribs-half", name: "Half Rack Baby-Back Ribs", calories: 540 }
  ],
  "Chicken & More": [
    { id: "rt-chicken-tenders", name: "Chicken Tenders", calories: 820 },
    { id: "rt-chicken-parmesan", name: "Chicken Parmesan", calories: 1140 },
    { id: "rt-chicken-fresco", name: "Chicken Fresco", calories: 620 },
    { id: "rt-chicken-bella", name: "Chicken Bella", calories: 740 }
  ],
  "Seafood": [
    { id: "rt-salmon", name: "Coastal Salmon", calories: 540 },
    { id: "rt-tilapia", name: "Blackened Tilapia", calories: 440 },
    { id: "rt-shrimp", name: "Crispy Shrimp", calories: 890 }
  ],
  "Pastas": [
    { id: "rt-cajun-pasta", name: "Cajun Chicken & Shrimp Pasta", calories: 1240 },
    { id: "rt-chicken-alfredo", name: "Chicken & Broccoli Pasta", calories: 1180 },
    { id: "rt-pasta-marinara", name: "Pasta Marinara", calories: 840 }
  ],
  "Sides": [
    { id: "rt-fries", name: "French Fries", calories: 360 },
    { id: "rt-mashed", name: "Mashed Potatoes", calories: 240 },
    { id: "rt-broccoli", name: "Fresh Steamed Broccoli", calories: 45 },
    { id: "rt-rice", name: "White Rice", calories: 180 },
    { id: "rt-mac-cheese", name: "Mac 'n Cheese", calories: 420 },
    { id: "rt-green-beans", name: "Green Beans", calories: 90 }
  ],
  "Desserts": [
    { id: "rt-chocolate-fall", name: "Chocolate Fall Cake", calories: 1120 },
    { id: "rt-apple-crumble", name: "Apple Crumble", calories: 940 },
    { id: "rt-cheesecake", name: "New York Cheesecake", calories: 880 }
  ],
  "Beverages": [
    { id: "rt-coke", name: "Coca-Cola", calories: 200 },
    { id: "rt-sprite", name: "Sprite", calories: 200 },
    { id: "rt-lemonade", name: "Fresh Lemonade", calories: 180 },
    { id: "rt-tea", name: "Fresh-Brewed Iced Tea", calories: 0 }
  ]
};

export const rubyTuesdayItems: FastFoodItem[] = Object.values(RUBY_TUESDAY_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Ruby Tuesday",
      item: item.name,
      calories: item.calories,
      category: Object.entries(RUBY_TUESDAY_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );