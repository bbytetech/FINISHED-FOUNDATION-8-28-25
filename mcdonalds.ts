import { FastFoodItem } from '../types';

const MCDONALDS_CATEGORIES = {
  "Big Mac & Signature Burgers": [
    { id: "mc-big-mac", name: "Big Mac", calories: 563, allergens: ["gluten", "dairy", "soy", "sesame"] },
    { id: "mc-quarter-pounder", name: "Quarter Pounder with Cheese", calories: 520, allergens: ["gluten", "dairy", "soy", "sesame"] },
    { id: "mc-double-quarter", name: "Double Quarter Pounder", calories: 740, allergens: ["gluten", "dairy", "soy", "sesame"] },
    { id: "mc-big-mac-bacon", name: "Big Mac Bacon", calories: 620, allergens: ["gluten", "dairy", "soy", "sesame"] }
  ],
  "Classic Burgers": [
    { id: "mc-double", name: "McDouble", calories: 400, allergens: ["gluten", "dairy", "soy"] },
    { id: "mc-triple", name: "Triple Cheeseburger", calories: 520, allergens: ["gluten", "dairy", "soy"] },
    { id: "mc-hamburger", name: "Hamburger", calories: 250, allergens: ["gluten", "soy"] },
    { id: "mc-cheeseburger", name: "Cheeseburger", calories: 300, allergens: ["gluten", "dairy", "soy"] }
  ],
  "Chicken & Fish": [
    { id: "mc-filet", name: "Filet-O-Fish", calories: 390, allergens: ["gluten", "fish", "dairy"] },
    { id: "mc-mcchicken", name: "McChicken", calories: 400, allergens: ["gluten", "soy"] },
    { id: "mc-crispy-chicken", name: "McCrispy", calories: 470, allergens: ["gluten", "soy"] },
    { id: "mc-spicy-crispy", name: "Spicy McCrispy", calories: 480, allergens: ["gluten", "soy"] }
  ],
  "McNuggets & Tenders": [
    { id: "mc-nuggets-4", name: "4pc Chicken McNuggets", calories: 170, allergens: ["gluten", "soy"] },
    { id: "mc-nuggets-6", name: "6pc Chicken McNuggets", calories: 250, allergens: ["gluten", "soy"] },
    { id: "mc-nuggets-10", name: "10pc Chicken McNuggets", calories: 420, allergens: ["gluten", "soy"] },
    { id: "mc-nuggets-20", name: "20pc Chicken McNuggets", calories: 840, allergens: ["gluten", "soy"] },
    { id: "mc-grilled-nuggets-4", name: "4ct Grilled Nuggets", calories: 70, allergens: [] },
    { id: "mc-grilled-nuggets-8", name: "8ct Grilled Nuggets", calories: 130, allergens: [] },
    { id: "mc-latte", name: "Caramel Latte", calories: 250, allergens: ["dairy"] },
    { id: "mc-mocha", name: "Mocha", calories: 290, allergens: ["dairy"] },
    { id: "mc-cappuccino", name: "Cappuccino", calories: 120, allergens: ["dairy"] },
    { id: "mc-americano", name: "Americano", calories: 0, allergens: [] },
    { id: "mc-hot-chocolate", name: "Hot Chocolate", calories: 370, allergens: ["dairy"] },
    { id: "mc-frappe-mocha", name: "Mocha Frappé", calories: 420, allergens: ["dairy"] },
    { id: "mc-frappe-caramel", name: "Caramel Frappé", calories: 430, allergens: ["dairy"] }
  ],
  "Breakfast Menu": [
    { id: "mc-egg-mcmuffin", name: "Egg McMuffin", calories: 310, allergens: ["gluten", "egg", "dairy"] },
    { id: "mc-sausage-mcmuffin", name: "Sausage McMuffin", calories: 400, allergens: ["gluten", "dairy", "soy"] },
    { id: "mc-sausage-egg-mcmuffin", name: "Sausage & Egg McMuffin", calories: 480, allergens: ["gluten", "egg", "dairy", "soy"] },
    { id: "mc-hotcakes", name: "Hotcakes", calories: 590, allergens: ["gluten", "egg", "dairy"] },
    { id: "mc-big-breakfast", name: "Big Breakfast with Hotcakes", calories: 1340, allergens: ["gluten", "egg", "dairy", "soy"] }
  ],
  "Snacks & Sides": [
    { id: "mc-fries-small", name: "Small Fries", calories: 220, allergens: [] },
    { id: "mc-fries-medium", name: "Medium Fries", calories: 320, allergens: [] },
    { id: "mc-fries-large", name: "Large Fries", calories: 490, allergens: [] },
    { id: "mc-apple-slices", name: "Apple Slices", calories: 15, allergens: [] }
  ],
  "Desserts & Shakes": [
    { id: "mc-mcflurry-oreo", name: "Oreo McFlurry", calories: 510, allergens: ["dairy", "gluten", "soy"] },
    { id: "mc-mcflurry-mm", name: "M&M's McFlurry", calories: 640, allergens: ["dairy", "soy"] },
    { id: "mc-sundae-hot-fudge", name: "Hot Fudge Sundae", calories: 330, allergens: ["dairy", "soy"] },
    { id: "mc-sundae-caramel", name: "Caramel Sundae", calories: 340, allergens: ["dairy"] },
    { id: "mc-cone", name: "Vanilla Cone", calories: 200, allergens: ["dairy"] },
    { id: "mc-cookie", name: "Chocolate Chip Cookie", calories: 170, allergens: ["gluten", "egg", "dairy", "soy"] },
    { id: "mc-apple-pie", name: "Baked Apple Pie", calories: 230, allergens: ["gluten"] }
  ]
};

export const mcdonaldsItems: FastFoodItem[] = Object.values(MCDONALDS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "McDonald's",
      item: item.name,
      calories: item.calories,
      allergens: item.allergens,
      category: Object.entries(MCDONALDS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );