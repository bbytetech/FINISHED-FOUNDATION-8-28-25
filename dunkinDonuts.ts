import { FastFoodItem } from '../types';

const DUNKIN_DONUTS_CATEGORIES = {
  "Classic Donuts": [
    { id: "dd-glazed", name: "Glazed Donut", calories: 240, description: "Classic glazed ring donut" },
    { id: "dd-boston-kreme", name: "Boston Kreme Donut", calories: 300, description: "Chocolate-topped, custard-filled" },
    { id: "dd-jelly", name: "Jelly Donut", calories: 260, description: "Powdered sugar with raspberry filling" },
    { id: "dd-chocolate-frosted", name: "Chocolate Frosted Donut", calories: 270, description: "Glazed ring with chocolate frosting" },
    { id: "dd-old-fashioned", name: "Old Fashioned Donut", calories: 280, description: "Classic cake-style donut" },
    { id: "dd-blueberry", name: "Blueberry Cake Donut", calories: 290, description: "Blueberry-flavored cake donut" },
    { id: "dd-chocolate-glazed", name: "Chocolate Glazed Donut", calories: 260, description: "Chocolate cake with glaze" },
    { id: "dd-strawberry-frosted", name: "Strawberry Frosted Donut", calories: 270, description: "Pink frosted with sprinkles" },
    { id: "dd-powdered", name: "Powdered Sugar Donut", calories: 250, description: "Classic powdered sugar coating" },
    { id: "dd-vanilla-frosted", name: "Vanilla Frosted Donut", calories: 270, description: "White frosted with sprinkles" }
  ],
  "Breakfast Sandwiches": [
    { id: "dd-bacon-egg", name: "Bacon, Egg & Cheese", calories: 460, description: "On your choice of bagel or croissant" },
    { id: "dd-sausage-egg", name: "Sausage, Egg & Cheese", calories: 550, description: "Savory breakfast sandwich" },
    { id: "dd-ham-egg", name: "Ham, Egg & Cheese", calories: 400, description: "Lean breakfast sandwich" },
    { id: "dd-power-breakfast", name: "Power Breakfast Sandwich", calories: 370, description: "Turkey sausage and egg white" },
    { id: "dd-wake-wrap", name: "Wake-Up Wrap", calories: 180, description: "Eggs and cheese in a tortilla" },
    { id: "dd-turkey-sausage", name: "Turkey Sausage Wake-Up Wrap", calories: 240, description: "Lean protein breakfast wrap" }
  ],
  "Bakery Items": [
    { id: "dd-bagel-plain", name: "Plain Bagel", calories: 310, description: "Fresh-baked plain bagel" },
    { id: "dd-bagel-everything", name: "Everything Bagel", calories: 320, description: "Topped with savory seasonings" },
    { id: "dd-muffin-blueberry", name: "Blueberry Muffin", calories: 460, description: "Fresh-baked muffin" },
    { id: "dd-muffin-chocolate-chip", name: "Chocolate Chip Muffin", calories: 480, description: "Fresh-baked chocolate muffin" },
    { id: "dd-croissant", name: "Butter Croissant", calories: 340, description: "Flaky butter croissant" },
    { id: "dd-hash-browns", name: "Hash Browns", calories: 130, description: "Crispy potato bites" }
  ],
  "Hot Beverages": [
    { id: "dd-hot-coffee", name: "Hot Coffee (Medium)", calories: 5, description: "Original Blend coffee" },
    { id: "dd-hot-latte", name: "Hot Latte (Medium)", calories: 120, description: "Espresso with steamed milk" },
    { id: "dd-hot-cappuccino", name: "Hot Cappuccino (Medium)", calories: 80, description: "Espresso topped with foam" },
    { id: "dd-hot-americano", name: "Hot Americano (Medium)", calories: 10, description: "Espresso with hot water" },
    { id: "dd-hot-mocha", name: "Hot Mocha (Medium)", calories: 200, description: "Espresso with chocolate" },
    { id: "dd-hot-chocolate", name: "Hot Chocolate (Medium)", calories: 320, description: "Rich hot chocolate" }
  ],
  "Cold Beverages": [
    { id: "dd-iced-coffee", name: "Iced Coffee (Medium)", calories: 10, description: "Original Blend over ice" },
    { id: "dd-iced-latte", name: "Iced Latte (Medium)", calories: 130, description: "Espresso with cold milk" },
    { id: "dd-cold-brew", name: "Cold Brew (Medium)", calories: 5, description: "Slow-steeped coffee" },
    { id: "dd-frozen-coffee", name: "Frozen Coffee (Medium)", calories: 420, description: "Blended frozen coffee" },
    { id: "dd-frozen-chocolate", name: "Frozen Chocolate (Medium)", calories: 440, description: "Blended chocolate drink" },
    { id: "dd-coolatta-blue", name: "Blue Raspberry Coolatta (Medium)", calories: 250, description: "Frozen blue raspberry" },
    { id: "dd-coolatta-strawberry", name: "Strawberry Coolatta (Medium)", calories: 240, description: "Frozen strawberry" },
    { id: "dd-refresher", name: "Refresher (Medium)", calories: 130, description: "Green tea with fruit flavors" }
  ]
};

export const dunkinDonutsItems: FastFoodItem[] = Object.values(DUNKIN_DONUTS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Dunkin' Donuts",
      item: item.name,
      calories: item.calories,
      category: Object.entries(DUNKIN_DONUTS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );