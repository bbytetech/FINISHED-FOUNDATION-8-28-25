import { FastFoodItem } from '../types';

const LONGHORN_STEAKHOUSE_CATEGORIES = {
  "Hand-Cut Steaks": [
    { id: "longhorn-filet-6oz", name: "6 oz. Filet", calories: 290, description: "Center-cut filet" },
    { id: "longhorn-filet-8oz", name: "8 oz. Filet", calories: 380, description: "Center-cut filet" },
    { id: "longhorn-ribeye-12oz", name: "12 oz. Ribeye", calories: 910, description: "Marbled ribeye" },
    { id: "longhorn-ribeye-16oz", name: "16 oz. Ribeye", calories: 1220, description: "Marbled ribeye" },
    { id: "longhorn-ny-strip", name: "NY Strip (12 oz)", calories: 640, description: "Center-cut strip" },
    { id: "longhorn-prime-rib-12oz", name: "12 oz. Prime Rib", calories: 930, description: "Slow-roasted" },
    { id: "longhorn-prime-rib-16oz", name: "16 oz. Prime Rib", calories: 1240, description: "Slow-roasted" },
    { id: "longhorn-porterhouse", name: "23 oz. Porterhouse T-Bone", calories: 1580, description: "Best of both" },
    { id: "longhorn-road-kill", name: "Road Kill (Chopped Steak)", calories: 820, description: "Smothered chopped steak" }
  ],
  "Country Dinners": [
    { id: "longhorn-grilled-chicken", name: "Grilled BBQ Chicken", calories: 430, description: "BBQ-basted" },
    { id: "longhorn-country-chicken", name: "Country Fried Chicken", calories: 760, description: "Hand-breaded" },
    { id: "longhorn-chicken-critters", name: "Chicken Critters", calories: 680, description: "Hand-breaded strips" },
    { id: "longhorn-chicken-tenders", name: "Chicken Tenders", calories: 690, description: "Hand-breaded" },
    { id: "longhorn-pulled-pork", name: "Pulled Pork Dinner", calories: 640, description: "Slow-smoked" },
    { id: "longhorn-grilled-salmon", name: "Grilled Salmon", calories: 540, description: "Lemon pepper" }
  ],
  "Fall-Off-The-Bone Ribs": [
    { id: "longhorn-ribs-half", name: "Half Slab of Ribs", calories: 840, description: "Award-winning ribs" },
    { id: "longhorn-ribs-full", name: "Full Slab of Ribs", calories: 1480, description: "Award-winning ribs" }
  ],
  "Texas Size Combos": [
    { id: "longhorn-ribs-chicken", name: "Ribs & Chicken Combo", calories: 1240, description: "Best of both" },
    { id: "longhorn-ribs-sirloin", name: "Ribs & Sirloin Combo", calories: 1380, description: "Steak & ribs" },
    { id: "longhorn-chicken-sirloin", name: "Chicken & Sirloin Combo", calories: 890, description: "Surf & turf" }
  ],
  "Made-From-Scratch Sides": [
    { id: "longhorn-rolls", name: "Fresh Baked Rolls (2)", calories: 230, description: "Famous rolls" },
    { id: "longhorn-baked-potato", name: "Baked Potato", calories: 340, description: "Loaded" },
    { id: "longhorn-sweet-potato", name: "Sweet Potato", calories: 380, description: "Cinnamon butter" },
    { id: "longhorn-fries", name: "Seasoned Fries", calories: 350, description: "Steak fries" },
    { id: "longhorn-green-beans", name: "Green Beans", calories: 110, description: "Country style" },
    { id: "longhorn-corn", name: "Fresh Corn", calories: 180, description: "Buttered" },
    { id: "longhorn-rice", name: "Seasoned Rice", calories: 330, description: "Pilaf style" },
    { id: "longhorn-mashed-potatoes", name: "Mashed Potatoes", calories: 250, description: "Made fresh" },
    { id: "longhorn-house-salad", name: "House Salad", calories: 230, description: "Garden fresh" },
    { id: "longhorn-caesar-salad", name: "Caesar Salad", calories: 210, description: "Classic Caesar" }
  ],
  "Legendary Desserts": [
    { id: "longhorn-brownie", name: "Big Ol' Brownie", calories: 1200, description: "Chocolate lover's" },
    { id: "longhorn-apple-pie", name: "Apple Pie", calories: 1140, description: "Cinnamon apple" },
    { id: "longhorn-strawberry-cheesecake", name: "Strawberry Cheesecake", calories: 1090, description: "NY style" }
  ],
  "Ice Cold Drinks": [
    { id: "longhorn-coke", name: "Coca-Cola", calories: 200, description: "Fountain drink" },
    { id: "longhorn-diet-coke", name: "Diet Coke", calories: 0, description: "Sugar free" },
    { id: "longhorn-sprite", name: "Sprite", calories: 200, description: "Lemon-lime" },
    { id: "longhorn-dr-pepper", name: "Dr Pepper", calories: 200, description: "Classic soda" },
    { id: "longhorn-sweet-tea", name: "Sweet Tea", calories: 120, description: "Southern style" },
    { id: "longhorn-unsweet-tea", name: "Unsweetened Tea", calories: 0, description: "Fresh brewed" },
    { id: "longhorn-lemonade", name: "Fresh Lemonade", calories: 140, description: "Hand-squeezed" },
    { id: "longhorn-coffee", name: "Fresh Brewed Coffee", calories: 0, description: "Regular or decaf" }
  ]
};

export const longhornSteakhouseItems: FastFoodItem[] = Object.values(LONGHORN_STEAKHOUSE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "LongHorn Steakhouse",
      item: item.name,
      calories: item.calories,
      category: Object.entries(LONGHORN_STEAKHOUSE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );