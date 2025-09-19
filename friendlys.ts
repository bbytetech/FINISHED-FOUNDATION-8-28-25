import { FastFoodItem } from '../types';

const FRIENDLYS_CATEGORIES = {
  "Breakfast All Day": [
    { id: "friendlys-pancakes", name: "Buttermilk Pancakes", calories: 660 },
    { id: "friendlys-belgian", name: "Belgian Waffle", calories: 580 },
    { id: "friendlys-french-toast", name: "Brioche French Toast", calories: 640 },
    { id: "friendlys-breakfast-combo", name: "Big-Two-Do Breakfast", calories: 920 },
    { id: "friendlys-breakfast-melt", name: "Breakfast Melt", calories: 840 }
  ],
  "SuperMelt® Sandwiches": [
    { id: "friendlys-honey-bbq", name: "Honey BBQ Chicken SuperMelt", calories: 940 },
    { id: "friendlys-turkey-melt", name: "Turkey Club SuperMelt", calories: 880 },
    { id: "friendlys-reuben", name: "Reuben SuperMelt", calories: 920 },
    { id: "friendlys-philly", name: "Philly Steak & Cheese SuperMelt", calories: 960 }
  ],
  "Burgers & Sandwiches": [
    { id: "friendlys-big-beef", name: "Big Beef Burger", calories: 840 },
    { id: "friendlys-bacon-cheese", name: "Bacon Cheeseburger", calories: 920 },
    { id: "friendlys-swiss-mushroom", name: "Swiss Mushroom Burger", calories: 880 },
    { id: "friendlys-honey-bbq-burger", name: "Honey BBQ Burger", calories: 940 }
  ],
  "Entrees & Platters": [
    { id: "friendlys-chicken-tenders", name: "Chicken Tenders Platter", calories: 780 },
    { id: "friendlys-fish-chips", name: "Fish & Chips", calories: 1040 },
    { id: "friendlys-mac-cheese", name: "Mac & Cheese", calories: 820 },
    { id: "friendlys-quesadilla", name: "Chicken Quesadilla", calories: 860 }
  ],
  "Fresh Salads": [
    { id: "friendlys-chicken-salad", name: "Grilled Chicken Salad", calories: 440 },
    { id: "friendlys-apple-cranberry", name: "Apple & Cranberry Salad", calories: 520 },
    { id: "friendlys-taco-salad", name: "Taco Salad", calories: 680 }
  ],
  "Sides & Fries": [
    { id: "friendlys-fries", name: "French Fries", calories: 320 },
    { id: "friendlys-rings", name: "Onion Rings", calories: 380 },
    { id: "friendlys-coleslaw", name: "Coleslaw", calories: 140 },
    { id: "friendlys-broccoli", name: "Steamed Broccoli", calories: 60 }
  ],
  "Famous Ice Cream": [
    { id: "friendlys-jim-dandy", name: "Jim Dandy Sundae", calories: 1180 },
    { id: "friendlys-fribble", name: "Chocolate Fribble", calories: 680 },
    { id: "friendlys-cone", name: "Ice Cream Cone", calories: 260 },
    { id: "friendlys-sundae", name: "Hot Fudge Sundae", calories: 580 },
    { id: "friendlys-brownie", name: "Brownie Sundae", calories: 890 },
    { id: "friendlys-banana-split", name: "Banana Split", calories: 920 },
    { id: "friendlys-royal", name: "Royal Banana Split", calories: 1240 },
    { id: "friendlys-forbidden", name: "Forbidden Chocolate Sundae", calories: 840 }
  ],
  "Beverages": [
    { id: "friendlys-soda", name: "Fountain Soda", calories: 180 },
    { id: "friendlys-coffee", name: "Coffee", calories: 0 },
    { id: "friendlys-tea", name: "Fresh-Brewed Iced Tea", calories: 0 },
    { id: "friendlys-lemonade", name: "Lemonade", calories: 160 }
  ]
};

export const friendlysItems: FastFoodItem[] = Object.values(FRIENDLYS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Friendly's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(FRIENDLYS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );