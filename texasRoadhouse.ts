import { FastFoodItem } from '../types';

const TEXAS_ROADHOUSE_CATEGORIES = {
  "Hand-Cut Steaks": [
    { id: "tr-filet-6oz", name: "6 oz. Filet", calories: 290, description: "Center-cut filet" },
    { id: "tr-filet-8oz", name: "8 oz. Filet", calories: 380, description: "Center-cut filet" },
    { id: "tr-ribeye-12oz", name: "12 oz. Ribeye", calories: 910, description: "Marbled ribeye" },
    { id: "tr-ribeye-16oz", name: "16 oz. Ribeye", calories: 1220, description: "Marbled ribeye" },
    { id: "tr-ny-strip", name: "NY Strip (12 oz)", calories: 640, description: "Center-cut strip" },
    { id: "tr-prime-rib-12oz", name: "12 oz. Prime Rib", calories: 930, description: "Slow-roasted" },
    { id: "tr-prime-rib-16oz", name: "16 oz. Prime Rib", calories: 1240, description: "Slow-roasted" },
    { id: "tr-porterhouse", name: "23 oz. Porterhouse T-Bone", calories: 1580, description: "Best of both" },
    { id: "tr-road-kill", name: "Road Kill (Chopped Steak)", calories: 820, description: "Smothered chopped steak" }
  ],
  "Country Dinners": [
    { id: "tr-grilled-chicken", name: "Grilled BBQ Chicken", calories: 430, description: "BBQ-basted" },
    { id: "tr-country-chicken", name: "Country Fried Chicken", calories: 760, description: "Hand-breaded" },
    { id: "tr-chicken-critters", name: "Chicken Critters", calories: 680, description: "Hand-breaded strips" },
    { id: "tr-chicken-tenders", name: "Chicken Tenders", calories: 690, description: "Hand-breaded" },
    { id: "tr-pulled-pork", name: "Pulled Pork Dinner", calories: 640, description: "Slow-smoked" },
    { id: "tr-grilled-salmon", name: "Grilled Salmon", calories: 540, description: "Lemon pepper" }
  ],
  "Fall-Off-The-Bone Ribs": [
    { id: "tr-ribs-half", name: "Half Slab of Ribs", calories: 840, description: "Award-winning ribs" },
    { id: "tr-ribs-full", name: "Full Slab of Ribs", calories: 1480, description: "Award-winning ribs" }
  ],
  "Texas Size Combos": [
    { id: "tr-ribs-chicken", name: "Ribs & Chicken Combo", calories: 1240, description: "Best of both" },
    { id: "tr-ribs-sirloin", name: "Ribs & Sirloin Combo", calories: 1380, description: "Steak & ribs" },
    { id: "tr-chicken-sirloin", name: "Chicken & Sirloin Combo", calories: 890, description: "Surf & turf" }
  ],
  "Made-From-Scratch Sides": [
    { id: "tr-rolls", name: "Fresh Baked Rolls (2)", calories: 230, description: "Famous rolls" },
    { id: "tr-baked-potato", name: "Baked Potato", calories: 340, description: "Loaded" },
    { id: "tr-sweet-potato", name: "Sweet Potato", calories: 380, description: "Cinnamon butter" },
    { id: "tr-fries", name: "Seasoned Fries", calories: 350, description: "Steak fries" },
    { id: "tr-green-beans", name: "Green Beans", calories: 110, description: "Country style" },
    { id: "tr-corn", name: "Fresh Corn", calories: 180, description: "Buttered" },
    { id: "tr-rice", name: "Seasoned Rice", calories: 330, description: "Pilaf style" },
    { id: "tr-mashed-potatoes", name: "Mashed Potatoes", calories: 250, description: "Made fresh" },
    { id: "tr-house-salad", name: "House Salad", calories: 230, description: "Garden fresh" },
    { id: "tr-caesar-salad", name: "Caesar Salad", calories: 210, description: "Classic Caesar" }
  ],
  "Legendary Desserts": [
    { id: "tr-brownie", name: "Big Ol' Brownie", calories: 1200, description: "Chocolate lover's" },
    { id: "tr-apple-pie", name: "Apple Pie", calories: 1140, description: "Cinnamon apple" },
    { id: "tr-strawberry-cheesecake", name: "Strawberry Cheesecake", calories: 1090, description: "NY style" }
  ],
  "Ice Cold Drinks": [
    { id: "tr-coke", name: "Coca-Cola", calories: 200, description: "Fountain drink" },
    { id: "tr-diet-coke", name: "Diet Coke", calories: 0, description: "Sugar free" },
    { id: "tr-sprite", name: "Sprite", calories: 200, description: "Lemon-lime" },
    { id: "tr-dr-pepper", name: "Dr Pepper", calories: 200, description: "Classic soda" },
    { id: "tr-sweet-tea", name: "Sweet Tea", calories: 120, description: "Southern style" },
    { id: "tr-unsweet-tea", name: "Unsweetened Tea", calories: 0, description: "Fresh brewed" },
    { id: "tr-lemonade", name: "Fresh Lemonade", calories: 140, description: "Hand-squeezed" },
    { id: "tr-coffee", name: "Fresh Brewed Coffee", calories: 0, description: "Regular or decaf" }
  ]
};

export const texasRoadhouseItems: FastFoodItem[] = Object.values(TEXAS_ROADHOUSE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Texas Roadhouse",
      item: item.name,
      calories: item.calories,
      category: Object.entries(TEXAS_ROADHOUSE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );