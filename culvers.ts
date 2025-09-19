import { FastFoodItem } from '../types';

// Organize items by category for better maintainability
const CULVERS_CATEGORIES = {
  "Signature ButterBurgers": [
    { id: "culvers-butterburger", name: "ButterBurger", calories: 460 },
    { id: "culvers-deluxe", name: "ButterBurger Deluxe", calories: 600 },
    { id: "culvers-bacon-deluxe", name: "Bacon Deluxe", calories: 750 },
    { id: "culvers-mushroom-swiss", name: "Mushroom & Swiss", calories: 670 },
    { id: "culvers-cheddar-deluxe", name: "Cheddar ButterBurger Deluxe", calories: 650 },
    { id: "culvers-sourdough", name: "Sourdough Melt", calories: 720 }
  ],
  "Specialty Melts": [
    { id: "culvers-wisconsin-swiss", name: "Wisconsin Swiss Melt", calories: 680 },
    { id: "culvers-patty-melt", name: "Patty Melt", calories: 760 }
  ],
  "Chicken Sandwiches": [
    { id: "culvers-spicy-chicken", name: "Spicy Chicken Sandwich", calories: 530 },
    { id: "culvers-grilled-chicken", name: "Grilled Chicken Sandwich", calories: 390 },
    { id: "culvers-crispy-chicken", name: "Crispy Chicken Sandwich", calories: 510 }
  ],
  "Wisconsin Favorites": [
    { id: "culvers-curds", name: "Wisconsin Cheese Curds", calories: 570 },
    { id: "culvers-pot-roast", name: "Beef Pot Roast Sandwich", calories: 640 },
    { id: "culvers-fish-dinner", name: "North Atlantic Cod Dinner", calories: 720 }
  ],
  "Fresh Sides": [
    { id: "culvers-fries", name: "Crinkle Cut Fries", calories: 350 },
    { id: "culvers-cheese-fries", name: "Cheese Fries", calories: 460 },
    { id: "culvers-chili-cheese-fries", name: "Chili Cheese Fries", calories: 580 },
    { id: "culvers-onion-rings", name: "Onion Rings", calories: 420 },
    { id: "culvers-green-beans", name: "Green Beans", calories: 40 },
    { id: "culvers-coleslaw", name: "Coleslaw", calories: 140 },
    { id: "culvers-mashed", name: "Mashed Potatoes & Gravy", calories: 190 }
  ],
  "Fresh Frozen Custard": [
    { id: "culvers-vanilla-custard", name: "Vanilla Custard", calories: 380 },
    { id: "culvers-chocolate-custard", name: "Chocolate Custard", calories: 400 },
    { id: "culvers-flavor-day-custard", name: "Flavor of the Day", calories: 420 }
  ],
  "Concrete Mixers": [
    { id: "culvers-concrete-chocolate", name: "Chocolate Concrete Mixer", calories: 850 },
    { id: "culvers-concrete-oreo", name: "Oreo Concrete Mixer", calories: 920 },
    { id: "culvers-concrete-reeses", name: "Reese's Concrete Mixer", calories: 980 },
    { id: "culvers-concrete-cookie-dough", name: "Cookie Dough Concrete Mixer", calories: 890 },
    { id: "culvers-concrete-mint", name: "Mint Oreo Concrete Mixer", calories: 940 },
    { id: "culvers-concrete-turtle", name: "Turtle Concrete Mixer", calories: 910 }
  ],
  "Hand-Spun Shakes": [
    { id: "culvers-shake-chocolate", name: "Chocolate Shake", calories: 670 },
    { id: "culvers-shake-vanilla", name: "Vanilla Shake", calories: 620 },
    { id: "culvers-shake-strawberry", name: "Strawberry Shake", calories: 640 },
    { id: "culvers-malt-chocolate", name: "Chocolate Malt", calories: 700 },
    { id: "culvers-malt-vanilla", name: "Vanilla Malt", calories: 650 },
    { id: "culvers-malt-strawberry", name: "Strawberry Malt", calories: 670 }
  ],
  "Beverages": [
    { id: "culvers-soda", name: "Fountain Drink (Medium)", calories: 210 },
    { id: "culvers-lemonade", name: "Fresh Lemonade", calories: 160 },
    { id: "culvers-iced-tea", name: "Fresh Brewed Iced Tea", calories: 0 },
    { id: "culvers-root-beer", name: "Root Beer", calories: 220 }
  ]
};

// Transform categories into a flat array for the menu
export const culversItems: FastFoodItem[] = Object.values(CULVERS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Culver's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CULVERS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );