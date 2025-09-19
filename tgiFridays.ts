import { FastFoodItem } from '../types';

const TGI_FRIDAYS_CATEGORIES = {
  "Appetizers": [
    { id: "tgi-loaded-potato", name: "Loaded Potato Skins", calories: 1430 },
    { id: "tgi-wings", name: "Traditional Wings", calories: 920 },
    { id: "tgi-mozz-sticks", name: "Mozzarella Sticks", calories: 830 },
    { id: "tgi-spinach-dip", name: "Spinach & Artichoke Dip", calories: 1080 },
    { id: "tgi-pan-seared-potstickers", name: "Pan-Seared Potstickers", calories: 640 },
    { id: "tgi-sesame-strips", name: "Sesame Chicken Strips", calories: 890 }
  ],
  "Burgers & Sandwiches": [
    { id: "tgi-whiskey-burger", name: "Whiskey-Glazed Burger", calories: 1110 },
    { id: "tgi-bacon-cheeseburger", name: "Bacon Cheeseburger", calories: 1060 },
    { id: "tgi-buffalo-chicken", name: "Buffalo Chicken Sandwich", calories: 890 },
    { id: "tgi-signature-whiskey", name: "Signature Whiskey-Glazed Burger", calories: 1250 },
    { id: "tgi-philly", name: "Philly Cheesesteak", calories: 960 },
    { id: "tgi-chicken-sandwich", name: "Cajun Chicken Sandwich", calories: 820 }
  ],
  "Entrees": [
    { id: "tgi-ribs", name: "Big Ribs", calories: 1780 },
    { id: "tgi-chicken-fingers", name: "Chicken Fingers", calories: 1090 },
    { id: "tgi-sirloin", name: "Sirloin Steak", calories: 840 },
    { id: "tgi-salmon", name: "Salmon", calories: 640 },
    { id: "tgi-chicken-parmesan", name: "Chicken Parmesan Pasta", calories: 1460 },
    { id: "tgi-friday-shrimp", name: "Friday's Shrimp", calories: 1120 },
    { id: "tgi-sizzling-chicken", name: "Sizzling Chicken & Shrimp", calories: 1280 }
  ],
  "Salads": [
    { id: "tgi-caesar", name: "Caesar Salad", calories: 440 },
    { id: "tgi-pecan-chicken", name: "Pecan-Crusted Chicken Salad", calories: 1080 },
    { id: "tgi-cobb", name: "Million Dollar Cobb", calories: 930 },
    { id: "tgi-southwest-salad", name: "Southwest Salad", calories: 880 }
  ],
  "Sides": [
    { id: "tgi-fries", name: "Seasoned Fries", calories: 320 },
    { id: "tgi-mac", name: "Mac & Cheese", calories: 580 },
    { id: "tgi-mashed", name: "Mashed Potatoes", calories: 280 },
    { id: "tgi-broccoli", name: "Broccoli", calories: 100 },
    { id: "tgi-coleslaw", name: "Coleslaw", calories: 200 },
    { id: "tgi-jasmine-rice", name: "Jasmine Rice", calories: 240 }
  ],
  "Desserts": [
    { id: "tgi-brownie", name: "Brownie Obsession", calories: 1470 },
    { id: "tgi-sundae", name: "Oreo Madness", calories: 1290 },
    { id: "tgi-vanilla-bean", name: "Vanilla Bean Cheesecake", calories: 930 },
    { id: "tgi-cinnabon", name: "Cinnabon Caramel Pecan Cheesecake", calories: 1110 }
  ],
  "Beverages": [
    { id: "tgi-coke", name: "Coca-Cola", calories: 200 },
    { id: "tgi-sprite", name: "Sprite", calories: 200 },
    { id: "tgi-lemonade", name: "Strawberry Lemonade", calories: 180 },
    { id: "tgi-tea", name: "Fresh-Brewed Iced Tea", calories: 0 }
  ]
};

export const tgiFridaysItems: FastFoodItem[] = Object.values(TGI_FRIDAYS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "TGI Fridays",
      item: item.name,
      calories: item.calories,
      category: Object.entries(TGI_FRIDAYS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );