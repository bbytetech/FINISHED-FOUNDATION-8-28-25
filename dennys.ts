import { FastFoodItem } from '../types';

const DENNYS_CATEGORIES = {
  "Signature Slams": [
    { id: "dennys-grand-slam", name: "Original Grand Slam", calories: 920 },
    { id: "dennys-all-american", name: "All-American Slam", calories: 1080 },
    { id: "dennys-french-slam", name: "French Toast Slam", calories: 840 },
    { id: "dennys-lumberjack", name: "Lumberjack Slam", calories: 1420 },
    { id: "dennys-fit-slam", name: "Fit Slam", calories: 460 },
    { id: "dennys-moons-over", name: "Moons Over My Hammy", calories: 780 },
    { id: "dennys-country-fried", name: "Country Fried Steak & Eggs", calories: 1140 },
    { id: "dennys-belgian-waffle", name: "Belgian Waffle Slam", calories: 820 },
    { id: "dennys-ultimate-omelette", name: "Ultimate Omelette", calories: 960 },
    { id: "dennys-santa-fe", name: "Santa Fe Skillet", calories: 980 }
  ],
  "Sizzling Skillets": [
    { id: "dennys-supreme-skillet", name: "Supreme Skillet", calories: 1120 },
    { id: "dennys-crazy-spicy", name: "Crazy Spicy Skillet", calories: 1040 },
    { id: "dennys-meat-lovers", name: "Meat Lover's Skillet", calories: 1280 },
    { id: "dennys-veggie-skillet", name: "Veggie Skillet", calories: 840 }
  ],
  "Burgers & Sandwiches": [
    { id: "dennys-bacon-burger", name: "Bacon Avocado Cheeseburger", calories: 1010 },
    { id: "dennys-classic-burger", name: "Classic Burger", calories: 850 },
    { id: "dennys-bourbon-burger", name: "Bourbon Bacon Burger", calories: 1180 },
    { id: "dennys-melt", name: "Super Bird Turkey Melt", calories: 710 },
    { id: "dennys-club", name: "Club Sandwich", calories: 780 },
    { id: "dennys-grilled-cheese", name: "Grilled Cheese", calories: 640 }
  ],
  "Classic Entrees": [
    { id: "dennys-country-fried-dinner", name: "Country Fried Steak Dinner", calories: 1080 },
    { id: "dennys-chicken-tenders", name: "Chicken Tenders", calories: 680 },
    { id: "dennys-sirloin", name: "T-Bone Steak", calories: 940 },
    { id: "dennys-pot-roast", name: "Slow-Cooked Pot Roast", calories: 760 },
    { id: "dennys-grilled-chicken", name: "Grilled Chicken Breast", calories: 540 }
  ],
  "Fresh Sides": [
    { id: "dennys-hashbrowns", name: "Hash Browns", calories: 210 },
    { id: "dennys-fries", name: "Wavy Cut French Fries", calories: 280 },
    { id: "dennys-grits", name: "Grits", calories: 170 },
    { id: "dennys-seasonal-fruit", name: "Seasonal Fruit", calories: 70 },
    { id: "dennys-toast", name: "Toast (2 slices)", calories: 140 },
    { id: "dennys-bacon", name: "Bacon Strips (4)", calories: 190 },
    { id: "dennys-sausage", name: "Sausage Links (4)", calories: 320 }
  ],
  "Sweet Treats": [
    { id: "dennys-sundae", name: "Hot Fudge Brownie Sundae", calories: 1060 },
    { id: "dennys-milkshake", name: "Hand-Dipped Milkshake", calories: 680 },
    { id: "dennys-pie-slice", name: "Pie Slice", calories: 480 },
    { id: "dennys-pancake-puppies", name: "Pancake Puppies", calories: 520 }
  ],
  "Beverages": [
    { id: "dennys-coffee", name: "Diner Blend Coffee", calories: 0 },
    { id: "dennys-hot-chocolate", name: "Hot Chocolate", calories: 240 },
    { id: "dennys-juice", name: "Orange Juice", calories: 110 },
    { id: "dennys-milk", name: "Milk", calories: 120 },
    { id: "dennys-soft-drink", name: "Soft Drink", calories: 180 }
  ]
};

export const dennysItems: FastFoodItem[] = Object.values(DENNYS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Denny's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(DENNYS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );