import { FastFoodItem } from '../types';

const IHOP_CATEGORIES = {
  "Breakfast Combos": [
    { id: "ihop-breakfast-sampler", name: "Breakfast Sampler", calories: 1250 },
    { id: "ihop-split-decision", name: "Split Decision Breakfast", calories: 1090 },
    { id: "ihop-2x2x2", name: "2x2x2", calories: 870 },
    { id: "ihop-quick-2", name: "Quick 2-Egg Breakfast", calories: 740 }
  ],
  "Pancakes & Crepes": [
    { id: "ihop-buttermilk", name: "Original Buttermilk Pancakes", calories: 750 },
    { id: "ihop-blueberry", name: "Blueberry Pancakes", calories: 800 },
    { id: "ihop-chocolate-chip", name: "Chocolate Chip Pancakes", calories: 850 },
    { id: "ihop-new-york-cheesecake", name: "New York Cheesecake Pancakes", calories: 940 },
    { id: "ihop-strawberry-banana", name: "Strawberry Banana Pancakes", calories: 780 },
    { id: "ihop-crepes", name: "Swedish Crepes", calories: 590 },
    { id: "ihop-nutella-crepes", name: "Nutella Crepes", calories: 840 }
  ],
  "French Toast & Waffles": [
    { id: "ihop-french-toast", name: "Original French Toast", calories: 680 },
    { id: "ihop-stuffed-french", name: "Stuffed French Toast", calories: 780 },
    { id: "ihop-belgian-waffle", name: "Belgian Waffle", calories: 620 },
    { id: "ihop-chicken-waffle", name: "Chicken & Waffles", calories: 1080 },
    { id: "ihop-strawberry-waffle", name: "Strawberry Waffle", calories: 680 }
  ],
  "Farm-Fresh Omelettes": [
    { id: "ihop-colorado", name: "Colorado Omelette", calories: 1110 },
    { id: "ihop-big-steak", name: "Big Steak Omelette", calories: 1180 },
    { id: "ihop-spinach-mushroom", name: "Spinach & Mushroom Omelette", calories: 840 },
    { id: "ihop-western", name: "Western Omelette", calories: 960 },
    { id: "ihop-cheese", name: "Create Your Own Omelette", calories: 680 }
  ],
  "Burgers & Sandwiches": [
    { id: "ihop-big-burger", name: "The Classic Burger", calories: 730 },
    { id: "ihop-mega-monster", name: "Mega Monster Cheeseburger", calories: 1460 },
    { id: "ihop-philly", name: "Philly Cheese Steak", calories: 850 },
    { id: "ihop-crispy-chicken", name: "Crispy Chicken Sandwich", calories: 780 },
    { id: "ihop-ham-egg", name: "Ham & Egg Melt", calories: 720 }
  ],
  "Hearty Entrees": [
    { id: "ihop-chicken-strips", name: "Crispy Chicken Strips", calories: 1220 },
    { id: "ihop-country-fried", name: "Country Fried Steak", calories: 1440 },
    { id: "ihop-tilapia", name: "Grilled Tilapia", calories: 480 }
  ],
  "Signature Sides": [
    { id: "ihop-hashbrowns", name: "Hash Browns", calories: 290 },
    { id: "ihop-fries", name: "French Fries", calories: 320 },
    { id: "ihop-bacon", name: "Bacon (4 strips)", calories: 190 },
    { id: "ihop-sausage", name: "Sausage Links (4)", calories: 320 },
    { id: "ihop-toast", name: "Toast (2 slices)", calories: 140 },
    { id: "ihop-fruit", name: "Fresh Fruit", calories: 80 }
  ],
  "Sweet Treats": [
    { id: "ihop-milkshake", name: "Hand-Scooped Milkshake", calories: 750 },
    { id: "ihop-sundae", name: "Ice Cream Sundae", calories: 610 },
    { id: "ihop-coffee", name: "Regular Coffee", calories: 0 },
    { id: "ihop-hot-chocolate", name: "Hot Chocolate", calories: 240 },
    { id: "ihop-juice", name: "Orange Juice", calories: 110 }
  ]
};

export const ihopItems: FastFoodItem[] = Object.values(IHOP_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "IHOP",
      item: item.name,
      calories: item.calories,
      category: Object.entries(IHOP_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );