import { FastFoodItem } from '../types';

export const BOSTON_MARKET_CATEGORIES = {
  "Rotisserie Chicken": [
    { id: "bm-quarter-white", name: "Quarter White Rotisserie Chicken", calories: 270, description: "White meat chicken breast and wing" },
    { id: "bm-quarter-dark", name: "Quarter Dark Rotisserie Chicken", calories: 330, description: "Dark meat chicken leg and thigh" },
    { id: "bm-half-chicken", name: "Half Rotisserie Chicken", calories: 600, description: "Half chicken with signature seasoning" },
    { id: "bm-three-piece", name: "Three Piece Dark Chicken", calories: 510, description: "Three pieces of dark meat chicken" }
  ],
  "Other Entrees": [
    { id: "bm-meatloaf", name: "Meatloaf", calories: 460, description: "Home-style meatloaf" },
    { id: "bm-turkey", name: "Roasted Turkey Breast", calories: 220, description: "Hand-carved turkey breast" },
    { id: "bm-pot-pie", name: "Chicken Pot Pie", calories: 780, description: "Classic chicken pot pie" },
    { id: "bm-prime-rib", name: "Prime Rib", calories: 720, description: "Slow-roasted prime rib" }
  ],
  "Sandwiches": [
    { id: "bm-chicken-sandwich", name: "Rotisserie Chicken Sandwich", calories: 510, description: "Chicken with lettuce and tomato" },
    { id: "bm-turkey-sandwich", name: "Turkey Carver Sandwich", calories: 480, description: "Turkey with lettuce and tomato" },
    { id: "bm-meatloaf-sandwich", name: "Meatloaf Sandwich", calories: 670, description: "Home-style meatloaf sandwich" }
  ],
  "Homemade Sides": [
    { id: "bm-mashed-potatoes", name: "Mashed Potatoes & Gravy", calories: 240, description: "Creamy mashed potatoes" },
    { id: "bm-mac-cheese", name: "Mac & Cheese", calories: 320, description: "Creamy macaroni and cheese" },
    { id: "bm-sweet-corn", name: "Sweet Corn", calories: 180, description: "Steamed corn" },
    { id: "bm-green-beans", name: "Green Beans with Ham", calories: 90, description: "Seasoned green beans" },
    { id: "bm-creamed-spinach", name: "Creamed Spinach", calories: 220, description: "Creamy spinach" },
    { id: "bm-stuffing", name: "Cornbread Stuffing", calories: 240, description: "Home-style stuffing" },
    { id: "bm-sweet-potato", name: "Sweet Potato Casserole", calories: 380, description: "Sweet potato with streusel" },
    { id: "bm-coleslaw", name: "Coleslaw", calories: 170, description: "Fresh coleslaw" }
  ],
  "Soups": [
    { id: "bm-chicken-noodle", name: "Chicken-N-Noodles Soup", calories: 180, description: "Classic chicken soup" },
    { id: "bm-vegetable-soup", name: "Vegetable Beef Soup", calories: 160, description: "Hearty vegetable soup" },
    { id: "bm-chili", name: "Hearty Beef Chili", calories: 240, description: "Home-style chili" }
  ],
  "Desserts": [
    { id: "bm-pie-apple", name: "Apple Pie", calories: 410, description: "Classic apple pie" },
    { id: "bm-pie-cherry", name: "Cherry Pie", calories: 430, description: "Sweet cherry pie" },
    { id: "bm-cinnamon-roll", name: "Cinnamon Roll", calories: 510, description: "Fresh-baked cinnamon roll" },
    { id: "bm-cookie", name: "Chocolate Chip Cookie", calories: 280, description: "Fresh-baked cookie" },
    { id: "bm-brownie", name: "Chocolate Brownie", calories: 440, description: "Rich chocolate brownie" }
  ],
  "Beverages": [
    { id: "bm-coffee", name: "Bottomless Coffee", calories: 0, description: "Regular or decaf coffee" },
    { id: "bm-hot-chocolate", name: "Hot Chocolate", calories: 240, description: "Rich hot chocolate" },
    { id: "bm-milk", name: "Milk", calories: 120, description: "Regular or chocolate milk" },
    { id: "bm-juice", name: "Orange Juice", calories: 110, description: "100% orange juice" },
    { id: "bm-soda", name: "Fountain Drink", calories: 180, description: "Assorted sodas" }
  ]
};

export const bostonMarketItems: FastFoodItem[] = Object.values(BOSTON_MARKET_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Boston Market",
      item: item.name,
      calories: item.calories,
      category: Object.entries(BOSTON_MARKET_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );