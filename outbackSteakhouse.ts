import { FastFoodItem } from '../types';

const OUTBACK_STEAKHOUSE_CATEGORIES = {
  "Signature Steaks": [
    { id: "outback-special", name: "Outback Special Sirloin (6 oz)", calories: 567, description: "Our signature center-cut sirloin" },
    { id: "outback-ribeye", name: "Bone-in Ribeye (22 oz)", calories: 1086, description: "Well-marbled, bone-in cut" },
    { id: "outback-filet", name: "Victoria's Filet Mignon (6 oz)", calories: 580, description: "Our most tender center-cut" },
    { id: "outback-ny-strip", name: "New York Strip (12 oz)", calories: 893, description: "Full-flavored strip steak" },
    { id: "outback-prime-rib", name: "Slow-Roasted Prime Rib (12 oz)", calories: 1246, description: "Seasoned and slow-roasted" },
    { id: "outback-porterhouse", name: "Melbourne Porterhouse (20 oz)", calories: 1340, description: "Filet and strip in one" }
  ],
  "Aussie Favorites": [
    { id: "outback-alice-chicken", name: "Alice Springs Chicken", calories: 850, description: "Grilled chicken with mushrooms, bacon, cheese" },
    { id: "outback-grilled-chicken", name: "Grilled Chicken on the Barbie", calories: 540, description: "Seasoned and grilled chicken breast" },
    { id: "outback-baby-backs", name: "Baby Back Ribs (Full Order)", calories: 1230, description: "Fall-off-the-bone ribs" },
    { id: "outback-pork-porterhouse", name: "Pork Porterhouse", calories: 890, description: "Thick-cut, bone-in chop" }
  ],
  "Aussie-Tizers": [
    { id: "outback-blooming", name: "Bloomin' Onion", calories: 1950, description: "Our signature appetizer" },
    { id: "outback-cheese-fries", name: "Aussie Cheese Fries", calories: 1620, description: "Topped with melted cheese and bacon" },
    { id: "outback-wings", name: "Kookaburra Wings", calories: 1090, description: "Tossed in our secret spices" },
    { id: "outback-coconut-shrimp", name: "Gold Coast Coconut Shrimp", calories: 880, description: "Hand-dipped in beer batter" },
    { id: "outback-crab-cakes", name: "Signature Crab Cakes", calories: 660, description: "Made with lump crab meat" }
  ],
  "Fresh Salads": [
    { id: "outback-house-salad", name: "House Salad", calories: 230, description: "Mixed greens and fresh veggies" },
    { id: "outback-caesar", name: "Caesar Salad", calories: 210, description: "Classic Caesar with croutons" },
    { id: "outback-cobb", name: "Steakhouse Cobb Salad", calories: 520, description: "Loaded with fresh toppings" }
  ],
  "Signature Sides": [
    { id: "outback-potato", name: "Baked Potato", calories: 350, description: "Classic baked potato" },
    { id: "outback-sweet-potato", name: "Sweet Potato", calories: 380, description: "With honey butter" },
    { id: "outback-broccoli", name: "Fresh Steamed Broccoli", calories: 40, description: "Seasoned and steamed" },
    { id: "outback-asparagus", name: "Grilled Asparagus", calories: 60, description: "Fresh grilled spears" },
    { id: "outback-mac", name: "Mac & Cheese", calories: 500, description: "Creamy four-cheese blend" },
    { id: "outback-fries", name: "Aussie Fries", calories: 350, description: "Seasoned steak fries" },
    { id: "outback-mashed", name: "Garlic Mashed Potatoes", calories: 280, description: "Creamy garlic mashed" }
  ],
  "Aussie-Sized Desserts": [
    { id: "outback-thunder", name: "Chocolate Thunder From Down Under", calories: 1200, description: "Warm brownie dessert" },
    { id: "outback-cheesecake", name: "New York-Style Cheesecake", calories: 1050, description: "Classic cheesecake" },
    { id: "outback-carrot-cake", name: "Carrot Cake", calories: 1240, description: "Layered carrot cake" }
  ]
};

export const outbackSteakhouseItems: FastFoodItem[] = Object.values(OUTBACK_STEAKHOUSE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Outback Steakhouse",
      item: item.name,
      calories: item.calories,
      category: Object.entries(OUTBACK_STEAKHOUSE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );