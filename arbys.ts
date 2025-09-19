import { FastFoodItem } from '../types';

const ARBYS_CATEGORIES = {
  "Roast Beef Classics": [
    { id: "arbys-classic-beef", name: "Classic Roast Beef", calories: 360 },
    { id: "arbys-double-beef", name: "Double Roast Beef", calories: 510 },
    { id: "arbys-half-pound", name: "Half Pound Roast Beef", calories: 610 },
    { id: "arbys-beef-n-cheddar", name: "Beef 'n Cheddar Classic", calories: 450 },
    { id: "arbys-french-dip", name: "French Dip & Swiss", calories: 540 }
  ],
  "Market Fresh® Sandwiches": [
    { id: "arbys-turkey-swiss", name: "Roast Turkey & Swiss", calories: 400 },
    { id: "arbys-reuben", name: "Classic Reuben", calories: 680 },
    { id: "arbys-buffalo-chicken", name: "Buffalo Chicken Sandwich", calories: 550 },
    { id: "arbys-chicken-bacon-swiss", name: "Chicken Bacon Swiss", calories: 580 }
  ],
  "Sliders & Snacks": [
    { id: "arbys-beef-slider", name: "Roast Beef 'n Cheese Slider", calories: 240 },
    { id: "arbys-turkey-slider", name: "Turkey 'n Cheese Slider", calories: 200 },
    { id: "arbys-ham-slider", name: "Ham 'n Cheese Slider", calories: 210 }
  ],
  "Market Fresh® Wraps": [
    { id: "arbys-turkey-bacon", name: "Turkey Bacon Ranch", calories: 810 },
    { id: "arbys-club", name: "Club Wrap", calories: 650 },
    { id: "arbys-chicken-wrap", name: "Chicken Wrap", calories: 430 }
  ],
  "Fresh Sides": [
    { id: "arbys-curly-fries-small", name: "Curly Fries (Small)", calories: 410 },
    { id: "arbys-curly-fries-medium", name: "Curly Fries (Medium)", calories: 550 },
    { id: "arbys-curly-fries-large", name: "Curly Fries (Large)", calories: 650 },
    { id: "arbys-mozz-sticks", name: "Mozzarella Sticks (4 pc)", calories: 440 },
    { id: "arbys-jalapeno-bites", name: "Jalapeño Bites (5 pc)", calories: 340 }
  ],
  "Sweet Treats": [
    { id: "arbys-shake-chocolate", name: "Chocolate Shake", calories: 540 },
    { id: "arbys-shake-vanilla", name: "Vanilla Shake", calories: 530 },
    { id: "arbys-shake-jamocha", name: "Jamocha Shake", calories: 550 },
    { id: "arbys-turnover-apple", name: "Apple Turnover", calories: 320 },
    { id: "arbys-cookie", name: "Chocolate Chip Cookie", calories: 270 }
  ]
};

export const arbysItems: FastFoodItem[] = Object.values(ARBYS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Arby's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(ARBYS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );