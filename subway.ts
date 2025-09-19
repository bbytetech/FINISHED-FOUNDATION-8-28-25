import { FastFoodItem } from '../types';

const SUBWAY_CATEGORIES = {
  "Signature Footlongs": [
    { id: "subway-bmt", name: "Italian B.M.T. (Footlong)", calories: 680 },
    { id: "subway-club", name: "Subway Club (Footlong)", calories: 510 },
    { id: "subway-tuna", name: "Tuna (Footlong)", calories: 760 },
    { id: "subway-meatball", name: "Meatball Marinara (Footlong)", calories: 800 },
    { id: "subway-cold-cut", name: "Cold Cut Combo (Footlong)", calories: 580 },
    { id: "subway-spicy-italian", name: "Spicy Italian (Footlong)", calories: 740 },
    { id: "subway-steak-cheese", name: "Steak & Cheese (Footlong)", calories: 640 },
    { id: "subway-veggie-delite", name: "Veggie Delite (Footlong)", calories: 320 },
    { id: "subway-turkey", name: "Turkey Breast (Footlong)", calories: 520 },
    { id: "subway-ham", name: "Black Forest Ham (Footlong)", calories: 480 }
  ],
  "Classic Six Inch Subs": [
    { id: "subway-bmt-6", name: "Italian B.M.T. (6-inch)", calories: 340 },
    { id: "subway-club-6", name: "Subway Club (6-inch)", calories: 255 },
    { id: "subway-tuna-6", name: "Tuna (6-inch)", calories: 380 },
    { id: "subway-meatball-6", name: "Meatball Marinara (6-inch)", calories: 400 },
    { id: "subway-cold-cut-6", name: "Cold Cut Combo (6-inch)", calories: 290 },
    { id: "subway-spicy-italian-6", name: "Spicy Italian (6-inch)", calories: 370 },
    { id: "subway-steak-cheese-6", name: "Steak & Cheese (6-inch)", calories: 320 },
    { id: "subway-veggie-delite-6", name: "Veggie Delite (6-inch)", calories: 160 },
    { id: "subway-turkey-6", name: "Turkey Breast (6-inch)", calories: 260 },
    { id: "subway-ham-6", name: "Black Forest Ham (6-inch)", calories: 240 }
  ],
  "Fresh Wraps": [
    { id: "subway-turkey-wrap", name: "Turkey Breast Wrap", calories: 430 },
    { id: "subway-tuna-wrap", name: "Tuna Fish Wrap", calories: 510 },
    { id: "subway-veggie-wrap", name: "Veggie Delite Wrap", calories: 330 },
    { id: "subway-club-wrap", name: "Subway Club Wrap", calories: 440 }
  ],
  "Garden Fresh Salads": [
    { id: "subway-turkey-salad", name: "Turkey Breast Salad", calories: 110 },
    { id: "subway-tuna-salad", name: "Tuna Salad", calories: 310 },
    { id: "subway-veggie-salad", name: "Veggie Delite Salad", calories: 60 },
    { id: "subway-club-salad", name: "Subway Club Salad", calories: 140 }
  ],
  "Breakfast Menu": [
    { id: "subway-bacon-egg", name: "Bacon, Egg & Cheese", calories: 460 },
    { id: "subway-bmt-egg", name: "B.M.T. Breakfast", calories: 410 },
    { id: "subway-steak-egg", name: "Steak, Egg & Cheese", calories: 450 }
  ],
  "Sides & Snacks": [
    { id: "subway-chips", name: "Lay's Classic Chips", calories: 230 },
    { id: "subway-cookies-choc", name: "Chocolate Chip Cookie", calories: 210 },
    { id: "subway-cookies-oat", name: "Oatmeal Raisin Cookie", calories: 200 },
    { id: "subway-cookies-mac", name: "White Macadamia Nut Cookie", calories: 220 },
    { id: "subway-apple-slices", name: "Apple Slices", calories: 35 }
  ],
  "Drinks & Beverages": [
    { id: "subway-coke", name: "Coca-Cola (Medium)", calories: 200 },
    { id: "subway-diet-coke", name: "Diet Coke (Medium)", calories: 0 },
    { id: "subway-sprite", name: "Sprite (Medium)", calories: 200 },
    { id: "subway-fanta", name: "Fanta Orange (Medium)", calories: 230 }
  ]
};

export const subwayItems: FastFoodItem[] = Object.values(SUBWAY_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Subway",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SUBWAY_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );