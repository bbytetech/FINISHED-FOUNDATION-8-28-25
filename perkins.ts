import { FastFoodItem } from '../types';

const PERKINS_CATEGORIES = {
  "Breakfast Favorites": [
    { id: "perkins-buttermilk", name: "Buttermilk Pancakes", calories: 590 },
    { id: "perkins-belgian", name: "Belgian Waffle", calories: 410 },
    { id: "perkins-french-toast", name: "Brioche French Toast", calories: 640 },
    { id: "perkins-breakfast-combo", name: "Big-Two-Do Breakfast", calories: 920 },
    { id: "perkins-breakfast-melt", name: "Breakfast Melt", calories: 840 },
    { id: "perkins-eggs-benedict", name: "Eggs Benedict", calories: 680 },
    { id: "perkins-breakfast-sampler", name: "Hearty Man's Combo", calories: 1180 },
    { id: "perkins-steak-eggs", name: "Steak & Eggs", calories: 870 },
    { id: "perkins-country-fried", name: "Country Fried Steak & Eggs", calories: 1040 }
  ],
  "Omelettes": [
    { id: "perkins-denver", name: "Denver Omelette", calories: 740 },
    { id: "perkins-veggie", name: "Garden Fresh Omelette", calories: 580 },
    { id: "perkins-meat-lovers", name: "Meat Lover's Omelette", calories: 890 },
    { id: "perkins-cheese", name: "Three Cheese Omelette", calories: 640 }
  ],
  "Pancakes & Waffles": [
    { id: "perkins-blueberry", name: "Blueberry Pancakes", calories: 620 },
    { id: "perkins-chocolate-chip", name: "Chocolate Chip Pancakes", calories: 680 },
    { id: "perkins-pecan", name: "Pecan Waffle", calories: 590 },
    { id: "perkins-strawberry", name: "Strawberry Waffle", calories: 540 }
  ],
  "Burgers & Sandwiches": [
    { id: "perkins-patty-melt", name: "Patty Melt", calories: 890 },
    { id: "perkins-club", name: "Triple Club Sandwich", calories: 750 },
    { id: "perkins-blt", name: "BLT Sandwich", calories: 580 },
    { id: "perkins-grilled-cheese", name: "Grilled Cheese", calories: 640 },
    { id: "perkins-turkey-avocado", name: "Turkey Avocado Melt", calories: 720 }
  ],
  "Entrees": [
    { id: "perkins-pot-roast", name: "Slow-Roasted Pot Roast", calories: 820 },
    { id: "perkins-chicken-dinner", name: "Country-Fried Chicken", calories: 890 },
    { id: "perkins-meatloaf", name: "Homestyle Meatloaf", calories: 780 },
    { id: "perkins-turkey-dinner", name: "Roasted Turkey & Dressing", calories: 710 },
    { id: "perkins-grilled-chicken", name: "Grilled Chicken Breast", calories: 520 }
  ],
  "Salads": [
    { id: "perkins-chicken-salad", name: "Grilled Chicken Salad", calories: 440 },
    { id: "perkins-chef-salad", name: "Chef Salad", calories: 620 },
    { id: "perkins-house-salad", name: "House Side Salad", calories: 120 }
  ],
  "Sides": [
    { id: "perkins-hashbrowns", name: "Hashbrowns", calories: 240 },
    { id: "perkins-fries", name: "French Fries", calories: 320 },
    { id: "perkins-soup", name: "Soup of the Day", calories: 180 },
    { id: "perkins-mashed-potatoes", name: "Mashed Potatoes & Gravy", calories: 240 },
    { id: "perkins-mac-cheese", name: "Macaroni & Cheese", calories: 340 },
    { id: "perkins-green-beans", name: "Green Beans with Ham", calories: 110 },
    { id: "perkins-coleslaw", name: "Cole Slaw", calories: 180 }
  ],
  "Desserts": [
    { id: "perkins-pie-apple", name: "Apple Pie", calories: 410 },
    { id: "perkins-pie-cherry", name: "Cherry Pie", calories: 430 },
    { id: "perkins-cinnamon-roll", name: "Cinnamon Roll", calories: 510 },
    { id: "perkins-cookie", name: "Chocolate Chip Cookie", calories: 280 },
    { id: "perkins-brownie", name: "Chocolate Brownie", calories: 440 }
  ],
  "Beverages": [
    { id: "perkins-coffee", name: "Bottomless Coffee", calories: 0 },
    { id: "perkins-hot-chocolate", name: "Hot Chocolate", calories: 240 },
    { id: "perkins-milk", name: "Milk", calories: 120 },
    { id: "perkins-juice", name: "Orange Juice", calories: 110 },
    { id: "perkins-soda", name: "Fountain Drink", calories: 180 }
  ]
};

export const perkinsItems: FastFoodItem[] = Object.values(PERKINS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Perkins",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PERKINS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );