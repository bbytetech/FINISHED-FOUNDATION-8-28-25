import { FastFoodItem } from '../types';

const ANCHOR_BAR_CATEGORIES = {
  "Original Wings": [
    { id: "anchor-original-10", name: "Original Wings (10 pc)", calories: 800 },
    { id: "anchor-original-20", name: "Original Wings (20 pc)", calories: 1600 },
    { id: "anchor-original-50", name: "Original Wings (50 pc)", calories: 4000 }
  ],
  "Boneless Wings": [
    { id: "anchor-boneless-10", name: "Boneless Wings (10 pc)", calories: 750 },
    { id: "anchor-boneless-20", name: "Boneless Wings (20 pc)", calories: 1500 }
  ],
  "Appetizers": [
    { id: "anchor-mozzarella", name: "Mozzarella Sticks", calories: 820 },
    { id: "anchor-onion-rings", name: "Onion Rings", calories: 740 },
    { id: "anchor-loaded-fries", name: "Loaded Fries", calories: 970 }
  ],
  "Sandwiches & Burgers": [
    { id: "anchor-buffalo-chicken-sandwich", name: "Buffalo Chicken Sandwich", calories: 910 },
    { id: "anchor-anchor-burger", name: "Anchor Bar Cheeseburger", calories: 980 }
  ],
  "Sides": [
    { id: "anchor-fries", name: "Fries", calories: 400 },
    { id: "anchor-celery", name: "Celery with Bleu Cheese", calories: 150 }
  ]
};

export const anchorBarItems: FastFoodItem[] = Object.entries(ANCHOR_BAR_CATEGORIES).flatMap(
  ([category, items]) =>
    items.map(item => ({
      ...item,
      item: item.name, // ✅ Add this line
      restaurant: "Anchor Bar",
      category
    }))
);