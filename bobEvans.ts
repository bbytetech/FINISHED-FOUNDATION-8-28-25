import { FastFoodItem } from '../types';

const BOB_EVANS_CATEGORIES = {
  "Breakfast Favorites": [
    { id: "be-biscuits-gravy", name: "Biscuits & Gravy", calories: 860 },
    { id: "be-farmer-breakfast", name: "The Farmer's Breakfast", calories: 1140 },
    { id: "be-sunrise", name: "Sunrise Breakfast", calories: 920 },
    { id: "be-country-breakfast", name: "Country Biscuit Breakfast", calories: 980 },
    { id: "be-steak-eggs", name: "Sirloin Steak & Eggs", calories: 820 }
  ],
  "Pancakes & Waffles": [
    { id: "be-hotcakes", name: "Buttermilk Hotcakes", calories: 520 },
    { id: "be-french-toast", name: "Brioche French Toast", calories: 590 }
  ],
  "Omelettes": [
    { id: "be-omelette", name: "Western Omelette", calories: 740 },
    { id: "be-border-scramble", name: "Border Scramble", calories: 890 },
    { id: "be-meat-lovers", name: "Meat Lover's Breakfast", calories: 1080 }
  ],
  "Farm Fresh Dinners": [
    { id: "be-pot-roast", name: "Slow-Roasted Pot Roast", calories: 820 },
    { id: "be-chicken-dinner", name: "Country-Fried Chicken", calories: 890 },
    { id: "be-meatloaf", name: "Homestyle Meatloaf", calories: 780 },
    { id: "be-turkey-dinner", name: "Roasted Turkey & Dressing", calories: 710 },
    { id: "be-grilled-chicken", name: "Grilled Chicken Breast", calories: 520 },
    { id: "be-chicken-tenders", name: "Hand-Breaded Chicken Tenders", calories: 840 },
    { id: "be-country-fried-steak", name: "Country-Fried Steak", calories: 890 }
  ],
  "Sandwiches & Burgers": [
    { id: "be-burger", name: "Farmhouse Burger", calories: 890 },
    { id: "be-club", name: "Triple Club Sandwich", calories: 750 },
    { id: "be-grilled-cheese", name: "Grilled Cheese", calories: 640 },
    { id: "be-chicken-sandwich", name: "Crispy Chicken Sandwich", calories: 720 }
  ],
  "Sides": [
    { id: "be-mashed-potatoes", name: "Mashed Potatoes & Gravy", calories: 240 },
    { id: "be-green-beans", name: "Green Beans with Ham", calories: 110 },
    { id: "be-mac-cheese", name: "Macaroni & Cheese", calories: 340 },
    { id: "be-coleslaw", name: "Cole Slaw", calories: 180 },
    { id: "be-fries", name: "French Fries", calories: 320 },
    { id: "be-hash-browns", name: "Home Fries", calories: 240 },
    { id: "be-bacon", name: "Hardwood-Smoked Bacon", calories: 140 },
    { id: "be-sausage", name: "Bob Evans Sausage Links", calories: 320 }
  ],
  "Soups": [
    { id: "be-chicken-noodle", name: "Chicken-N-Noodles Soup", calories: 180 },
    { id: "be-vegetable-soup", name: "Vegetable Beef Soup", calories: 160 },
    { id: "be-chili", name: "Hearty Beef Chili", calories: 240 }
  ],
  "Desserts": [
    { id: "be-pie-apple", name: "Apple Pie", calories: 410 },
    { id: "be-pie-cherry", name: "Cherry Pie", calories: 430 },
    { id: "be-cinnamon-roll", name: "Cinnamon Roll", calories: 510 },
    { id: "be-cookie", name: "Chocolate Chip Cookie", calories: 280 },
    { id: "be-brownie", name: "Chocolate Brownie", calories: 440 }
  ],
  "Beverages": [
    { id: "be-coffee", name: "Bottomless Coffee", calories: 0 },
    { id: "be-hot-chocolate", name: "Hot Chocolate", calories: 240 },
    { id: "be-milk", name: "Milk", calories: 120 },
    { id: "be-juice", name: "Orange Juice", calories: 110 },
    { id: "be-soda", name: "Fountain Drink", calories: 180 }
  ]
};

export const bobEvansItems: FastFoodItem[] = Object.values(BOB_EVANS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Bob Evans",
      item: item.name,
      calories: item.calories,
      category: Object.entries(BOB_EVANS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );