import { FastFoodItem } from '../types';

const SONIC_DRIVE_IN_CATEGORIES = {
  "Signature Burgers": [
    { id: "sonic-supersonic", name: "SuperSONIC Double Cheeseburger", calories: 1120, description: "Two quarter-pound beef patties" },
    { id: "sonic-bacon-double", name: "SuperSONIC Bacon Double", calories: 1240, description: "Double patty with bacon" },
    { id: "sonic-quarter-pound", name: "Quarter Pound Double Cheeseburger", calories: 830, description: "Two patties with cheese" },
    { id: "sonic-jr-burger", name: "Jr. Burger", calories: 340, description: "Classic junior burger" },
    { id: "sonic-jr-double", name: "Jr. Double Burger", calories: 450, description: "Double junior burger" }
  ],
  "Hot Dogs & Coneys": [
    { id: "sonic-footlong-quarter", name: "Footlong Quarter Pound Coney", calories: 620, description: "Footlong hot dog with chili" },
    { id: "sonic-chili-cheese", name: "Chili Cheese Coney", calories: 420, description: "Hot dog with chili and cheese" },
    { id: "sonic-corn-dog", name: "Corn Dog", calories: 230, description: "Classic corn dog" },
    { id: "sonic-footlong", name: "All-American Footlong", calories: 510, description: "Footlong hot dog" }
  ],
  "Chicken & More": [
    { id: "sonic-crispy-chicken", name: "Crispy Chicken Sandwich", calories: 560, description: "Hand-breaded chicken" },
    { id: "sonic-grilled-chicken", name: "Classic Grilled Chicken Sandwich", calories: 470, description: "Grilled chicken breast" },
    { id: "sonic-buffalo-chicken", name: "Buffalo Chicken Sandwich", calories: 590, description: "Spicy buffalo chicken" },
    { id: "sonic-chicken-strips-3", name: "Chicken Strips (3 pc)", calories: 400, description: "Hand-breaded strips" },
    { id: "sonic-chicken-strips-5", name: "Chicken Strips (5 pc)", calories: 660, description: "Hand-breaded strips" }
  ],
  "Sides & Snacks": [
    { id: "sonic-tots", name: "Tots (Medium)", calories: 320, description: "Crispy tater tots" },
    { id: "sonic-fries", name: "Fries (Medium)", calories: 300, description: "Classic french fries" },
    { id: "sonic-rings", name: "Onion Rings (Medium)", calories: 410, description: "Hand-battered rings" },
    { id: "sonic-mozzarella", name: "Mozzarella Sticks (4 pc)", calories: 420, description: "Breaded mozzarella" },
    { id: "sonic-chili-cheese-tots", name: "Chili Cheese Tots", calories: 470, description: "Tots with chili and cheese" },
    { id: "sonic-chili-cheese-fries", name: "Chili Cheese Fries", calories: 450, description: "Fries with chili and cheese" }
  ],
  "Frozen Favorites": [
    { id: "sonic-blast-oreo", name: "Oreo Blast", calories: 720, description: "Vanilla ice cream with Oreos" },
    { id: "sonic-blast-mm", name: "M&M's Blast", calories: 700, description: "Vanilla ice cream with M&M's" },
    { id: "sonic-blast-butterfinger", name: "Butterfinger Blast", calories: 740, description: "Vanilla ice cream with Butterfinger" },
    { id: "sonic-blast-reeses", name: "Reese's Peanut Butter Cup Blast", calories: 760, description: "Vanilla ice cream with Reese's" }
  ],
  "Real Ice Cream Shakes": [
    { id: "sonic-shake-chocolate", name: "Chocolate Shake", calories: 650, description: "Real ice cream shake" },
    { id: "sonic-shake-vanilla", name: "Vanilla Shake", calories: 640, description: "Real ice cream shake" },
    { id: "sonic-shake-strawberry", name: "Strawberry Shake", calories: 630, description: "Real ice cream shake" },
    { id: "sonic-shake-banana", name: "Banana Shake", calories: 640, description: "Real ice cream shake" }
  ],
  "Drinks & Slushes": [
    { id: "sonic-slush-cherry", name: "Cherry Slush (Medium)", calories: 180, description: "Cherry-flavored slush" },
    { id: "sonic-slush-blue", name: "Blue Raspberry Slush (Medium)", calories: 180, description: "Blue raspberry slush" },
    { id: "sonic-slush-grape", name: "Grape Slush (Medium)", calories: 180, description: "Grape-flavored slush" },
    { id: "sonic-limeade", name: "Cherry Limeade (Medium)", calories: 220, description: "Signature cherry limeade" },
    { id: "sonic-ocean-water", name: "Ocean Water (Medium)", calories: 190, description: "Signature blue coconut" },
    { id: "sonic-rt44-drink", name: "Route 44 Drink", calories: 280, description: "44 oz fountain drink" }
  ]
};

export const sonicDriveInItems: FastFoodItem[] = Object.values(SONIC_DRIVE_IN_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Sonic Drive-In",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SONIC_DRIVE_IN_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );