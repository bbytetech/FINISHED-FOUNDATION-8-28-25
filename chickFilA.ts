import { FastFoodItem } from '../types';

const CHICK_FIL_A_CATEGORIES = {
  "Original Chicken Entrées": [
    { id: "cfa-sandwich", name: "Original Chicken Sandwich", calories: 440, description: "Hand-breaded chicken breast" },
    { id: "cfa-deluxe", name: "Deluxe Sandwich", calories: 500, description: "With lettuce, tomato, cheese" },
    { id: "cfa-deluxe-spicy", name: "Spicy Deluxe Sandwich", calories: 550, description: "Spicy with cheese and toppings" },
    { id: "cfa-spicy", name: "Spicy Chicken Sandwich", calories: 460, description: "Hand-breaded spicy chicken" },
    { id: "cfa-spicy-deluxe", name: "Spicy Deluxe Sandwich", calories: 540, description: "Spicy with cheese" },
    { id: "cfa-grilled", name: "Grilled Chicken Sandwich", calories: 320, description: "Marinated grilled chicken" },
    { id: "cfa-grilled-club", name: "Grilled Chicken Club", calories: 520, description: "Grilled with bacon and cheese" },
    { id: "cfa-grilled-deluxe", name: "Grilled Chicken Deluxe", calories: 380, description: "Grilled with toppings" },
    { id: "cfa-club", name: "Chicken Club", calories: 560, description: "Original with bacon and cheese" },
    { id: "cfa-cool-wrap", name: "Grilled Cool Wrap", calories: 350, description: "Grilled chicken wrap" }
  ],
  "Chick-n-Bites & Nuggets": [
    { id: "cfa-nuggets-4", name: "4ct Chicken Nuggets", calories: 130, description: "Hand-breaded nuggets" },
    { id: "cfa-nuggets-8", name: "8ct Chicken Nuggets", calories: 250, description: "Hand-breaded nuggets" },
    { id: "cfa-nuggets-12", name: "12ct Chicken Nuggets", calories: 380, description: "Hand-breaded nuggets" },
    { id: "cfa-nuggets-30", name: "30ct Chicken Nuggets", calories: 950, description: "Hand-breaded nuggets" },
    { id: "cfa-grilled-nuggets-4", name: "4ct Grilled Nuggets", calories: 70, description: "Grilled nuggets" },
    { id: "cfa-grilled-nuggets-8", name: "8ct Grilled Nuggets", calories: 130, description: "Grilled nuggets" },
    { id: "cfa-grilled-nuggets-12", name: "12ct Grilled Nuggets", calories: 200, description: "Grilled nuggets" }
  ],
  "Chick-fil-A® Breakfast": [
    { id: "cfa-chicken-biscuit", name: "Chicken Biscuit", calories: 460, description: "On fresh-baked biscuit" },
    { id: "cfa-spicy-biscuit", name: "Spicy Chicken Biscuit", calories: 450, description: "Spicy chicken on biscuit" },
    { id: "cfa-minis-4", name: "4ct Chick-n-Minis", calories: 360, description: "Mini chicken biscuits" },
    { id: "cfa-minis-10", name: "10ct Chick-n-Minis", calories: 900, description: "Mini chicken biscuits" },
    { id: "cfa-burrito", name: "Hash Brown Scramble Burrito", calories: 700, description: "Breakfast burrito" },
    { id: "cfa-bowl", name: "Hash Brown Scramble Bowl", calories: 470, description: "Breakfast bowl" },
    { id: "cfa-bagel", name: "Egg White Grill", calories: 290, description: "Grilled breakfast sandwich" },
    { id: "cfa-breakfast-platter", name: "Chicken Biscuit Platter", calories: 640, description: "Breakfast platter" },
    { id: "cfa-hash-browns", name: "Hash Browns", calories: 270, description: "Crispy potato hash browns" }
  ],
  "Garden Fresh Salads": [
    { id: "cfa-cobb", name: "Cobb Salad", calories: 510, description: "Grilled chicken salad" },
    { id: "cfa-market", name: "Market Salad", calories: 340, description: "Fresh market greens" },
    { id: "cfa-spicy-southwest", name: "Spicy Southwest Salad", calories: 450, description: "Southwest-style salad" },
    { id: "cfa-market-grilled", name: "Market Salad with Grilled Chicken", calories: 410, description: "Market salad with grilled chicken" },
    { id: "cfa-cobb-grilled", name: "Cobb Salad with Grilled Chicken", calories: 540, description: "Cobb with grilled chicken" }
  ],
  "Chick-fil-A® Sides": [
    { id: "cfa-fries-small", name: "Small Waffle Fries", calories: 320, description: "Waffle-cut potatoes" },
    { id: "cfa-fries-medium", name: "Medium Waffle Fries", calories: 420, description: "Waffle-cut potatoes" },
    { id: "cfa-fries-large", name: "Large Waffle Fries", calories: 520, description: "Waffle-cut potatoes" },
    { id: "cfa-fruit-cup", name: "Fruit Cup", calories: 60, description: "Fresh-cut fruit" },
    { id: "cfa-side-salad", name: "Side Salad", calories: 160, description: "Fresh garden salad" },
    { id: "cfa-mac", name: "Mac & Cheese", calories: 440, description: "Baked mac and cheese" }
  ],
  "Sweet Treats": [
    { id: "cfa-milkshake", name: "Chocolate Milkshake", calories: 590, description: "Hand-spun milkshake" },
    { id: "cfa-milkshake-vanilla", name: "Vanilla Milkshake", calories: 570, description: "Hand-spun milkshake" },
    { id: "cfa-milkshake-strawberry", name: "Strawberry Milkshake", calories: 580, description: "Hand-spun milkshake" },
    { id: "cfa-frosted-lemonade", name: "Frosted Lemonade", calories: 330, description: "Frozen lemonade treat" },
    { id: "cfa-frosted-coffee", name: "Frosted Coffee", calories: 350, description: "Frozen coffee treat" },
    { id: "cfa-icedream", name: "IceDream Cone", calories: 180, description: "Vanilla soft serve" },
    { id: "cfa-cookie", name: "Chocolate Chunk Cookie", calories: 370, description: "Fresh-baked cookie" }
  ],
  "Beverages": [
    { id: "cfa-lemonade", name: "Fresh-Squeezed Lemonade", calories: 220, description: "Fresh-squeezed daily" },
    { id: "cfa-diet-lemonade", name: "Diet Lemonade", calories: 0, description: "Sugar-free lemonade" },
    { id: "cfa-sweet-tea", name: "Sweet Tea", calories: 120, description: "Freshly-brewed tea" },
    { id: "cfa-unsweet-tea", name: "Unsweetened Tea", calories: 0, description: "Freshly-brewed tea" },
    { id: "cfa-coke", name: "Coca-Cola", calories: 140, description: "Fountain drink" },
    { id: "cfa-diet-coke", name: "Diet Coke", calories: 0, description: "Zero calorie cola" },
    { id: "cfa-sprite", name: "Sprite", calories: 140, description: "Lemon-lime soda" }
  ]
};

export const chickFilAItems: FastFoodItem[] = Object.values(CHICK_FIL_A_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Chick-fil-A",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CHICK_FIL_A_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );