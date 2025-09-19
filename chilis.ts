import { FastFoodItem } from '../types';

const CHILIS_CATEGORIES = {
  "Appetizers & Snacks": [
    { id: "chilis-texas-cheese-fries", name: "Texas Cheese Fries", calories: 1750 },
    { id: "chilis-fried-pickles", name: "Fried Pickles", calories: 760 },
    { id: "chilis-southwest-eggrolls", name: "Southwest Eggrolls", calories: 820 },
    { id: "chilis-chips-salsa", name: "Chips & Salsa", calories: 440 },
    { id: "chilis-queso", name: "Skillet Queso", calories: 890 },
    { id: "chilis-wings", name: "Boneless Wings (10 pc)", calories: 920 },
    { id: "chilis-awesome-blossom", name: "Awesome Blossom Petals", calories: 820 }
  ],
  "Burgers & Sandwiches": [
    { id: "chilis-oldtimer", name: "Oldtimer Burger", calories: 880 },
    { id: "chilis-bacon-burger", name: "Bacon Burger", calories: 1060 },
    { id: "chilis-mushroom-burger", name: "Mushroom Swiss Burger", calories: 1040 },
    { id: "chilis-big-mouth", name: "Big Mouth Bites (4)", calories: 1410 },
    { id: "chilis-buffalo-chicken", name: "Buffalo Chicken Ranch Sandwich", calories: 1060 },
    { id: "chilis-turkey-avocado", name: "Turkey Avocado Toasted", calories: 940 }
  ],
  "Fajitas & Mexican": [
    { id: "chilis-chicken-fajitas", name: "Chicken Fajitas", calories: 1120 },
    { id: "chilis-steak-fajitas", name: "Steak Fajitas", calories: 1220 },
    { id: "chilis-enchiladas", name: "Beef Enchiladas", calories: 960 },
    { id: "chilis-chipotle-bowl", name: "Chipotle Chicken Bowl", calories: 810 },
    { id: "chilis-quesadillas", name: "Bacon Ranch Chicken Quesadillas", calories: 1240 }
  ],
  "Ribs & Steaks": [
    { id: "chilis-baby-backs", name: "Original Baby Back Ribs (Full)", calories: 1080 },
    { id: "chilis-sirloin", name: "6 oz. Classic Sirloin", calories: 680 },
    { id: "chilis-ribeye", name: "10 oz. Ribeye", calories: 940 },
    { id: "chilis-prime-rib", name: "Prime Rib (12 oz)", calories: 1020 }
  ],
  "Chicken & Seafood": [
    { id: "chilis-cajun-pasta", name: "Cajun Chicken Pasta", calories: 1140 },
    { id: "chilis-chicken-crispers", name: "Chicken Crispers", calories: 1020 },
    { id: "chilis-margarita-grilled", name: "Margarita Grilled Chicken", calories: 630 },
    { id: "chilis-salmon", name: "Ancho Salmon", calories: 640 },
    { id: "chilis-fish-tacos", name: "Mango-Chile Fish Tacos", calories: 880 }
  ],
  "Fresh Sides": [
    { id: "chilis-fries", name: "Homestyle Fries", calories: 360 },
    { id: "chilis-corn", name: "Skillet Mexican Street Corn", calories: 340 },
    { id: "chilis-broccoli", name: "Steamed Broccoli", calories: 100 },
    { id: "chilis-mashed-potatoes", name: "Loaded Mashed Potatoes", calories: 400 },
    { id: "chilis-rice", name: "Cilantro Rice", calories: 210 },
    { id: "chilis-black-beans", name: "Black Beans", calories: 180 }
  ],
  "Sweet Treats": [
    { id: "chilis-molten", name: "Molten Chocolate Cake", calories: 1160 },
    { id: "chilis-cheesecake", name: "New York Style Cheesecake", calories: 940 },
    { id: "chilis-paradise", name: "Paradise Pie", calories: 1290 },
    { id: "chilis-skillet-cookie", name: "Skillet Chocolate Chip Cookie", calories: 1040 }
  ],
  "Beverages": [
    { id: "chilis-coke", name: "Coca-Cola", calories: 200 },
    { id: "chilis-sprite", name: "Sprite", calories: 200 },
    { id: "chilis-lemonade", name: "Strawberry Lemonade", calories: 180 },
    { id: "chilis-tea", name: "Fresh-Brewed Iced Tea", calories: 0 }
  ]
};

export const chilisItems: FastFoodItem[] = Object.values(CHILIS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Chili's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CHILIS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );