import { FastFoodItem } from '../types';

const WAFFLE_HOUSE_CATEGORIES = {
  "Famous Waffles": [
    { id: "wh-classic-waffle", name: "Classic Waffle", calories: 410 },
    { id: "wh-pecan-waffle", name: "Pecan Waffle", calories: 580 },
    { id: "wh-chocolate-chip-waffle", name: "Chocolate Chip Waffle", calories: 520 },
    { id: "wh-peanut-butter-waffle", name: "Peanut Butter Waffle", calories: 590 },
    { id: "wh-blueberry-waffle", name: "Blueberry Waffle", calories: 470 }
  ],
  "Breakfast Favorites": [
    { id: "wh-all-star", name: "All-Star Breakfast", calories: 860 },
    { id: "wh-hashbrowns", name: "Hashbrowns", calories: 430 },
    { id: "wh-scattered-covered", name: "Scattered & Covered Hashbrowns", calories: 520 },
    { id: "wh-scattered-smothered", name: "Scattered & Smothered Hashbrowns", calories: 580 },
    { id: "wh-scattered-all-way", name: "Hashbrowns All The Way", calories: 780 },
    { id: "wh-cheese-eggs", name: "Cheese 'N Eggs", calories: 380 },
    { id: "wh-ham-eggs", name: "Ham & Eggs", calories: 450 },
    { id: "wh-bacon-eggs", name: "Bacon & Eggs", calories: 420 },
    { id: "wh-sausage-eggs", name: "Sausage & Eggs", calories: 510 },
    { id: "wh-steak-eggs", name: "Steak & Eggs", calories: 680 }
  ],
  "Sandwiches & Melts": [
    { id: "wh-texas-bacon", name: "Texas Bacon Cheesesteak Melt", calories: 850 },
    { id: "wh-patty-melt", name: "Patty Melt", calories: 730 },
    { id: "wh-grilled-cheese", name: "Grilled Cheese", calories: 440 },
    { id: "wh-blt", name: "BLT", calories: 520 },
    { id: "wh-texas-cheesesteak", name: "Texas Cheesesteak", calories: 780 },
    { id: "wh-ham-cheese", name: "Grilled Ham & Cheese", calories: 590 }
  ],
  "Angus Burgers": [
    { id: "wh-hamburger", name: "Hamburger", calories: 640 },
    { id: "wh-cheeseburger", name: "Cheeseburger", calories: 710 },
    { id: "wh-double-burger", name: "Double Cheeseburger", calories: 850 },
    { id: "wh-bacon-burger", name: "Bacon Cheeseburger", calories: 790 }
  ],
  "Hash Brown Sides": [
    { id: "wh-grits", name: "Grits", calories: 220 },
    { id: "wh-cheese-grits", name: "Cheese Grits", calories: 290 },
    { id: "wh-toast", name: "Texas Toast", calories: 180 },
    { id: "wh-raisin-toast", name: "Raisin Toast", calories: 160 },
    { id: "wh-biscuit", name: "Biscuit", calories: 220 },
    { id: "wh-country-gravy", name: "Country Gravy", calories: 140 },
    { id: "wh-bacon-side", name: "Bacon (3 Slices)", calories: 140 },
    { id: "wh-sausage-side", name: "Sausage (2 Patties)", calories: 360 },
    { id: "wh-city-ham", name: "City Ham", calories: 180 }
  ],
  "Beverages": [
    { id: "wh-coffee", name: "Coffee", calories: 5 },
    { id: "wh-chocolate-milk", name: "Chocolate Milk", calories: 180 },
    { id: "wh-orange-juice", name: "Orange Juice", calories: 110 },
    { id: "wh-sweet-tea", name: "Sweet Tea", calories: 120 },
    { id: "wh-soda", name: "Coca-Cola", calories: 140 }
  ]
};

export const waffleHouseItems: FastFoodItem[] = Object.values(WAFFLE_HOUSE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Waffle House",
      item: item.name,
      calories: item.calories,
      category: Object.entries(WAFFLE_HOUSE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );