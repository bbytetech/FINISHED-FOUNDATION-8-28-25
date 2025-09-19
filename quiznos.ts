import { FastFoodItem } from '../types';

// Export categories for menu organization
const QUIZNOS_CATEGORIES = {
  "Signature Subs": [
    { id: "quiznos-classic-italian", name: "Classic Italian", calories: 910 },
    { id: "quiznos-turkey-ranch", name: "Turkey Ranch & Swiss", calories: 820 },
    { id: "quiznos-mesquite-chicken", name: "Mesquite Chicken", calories: 760 },
    { id: "quiznos-tuna-melt", name: "Classic Tuna Melt", calories: 850 },
    { id: "quiznos-club", name: "Traditional Club", calories: 780 },
    { id: "quiznos-french-dip", name: "Classic French Dip", calories: 890 },
    { id: "quiznos-baja-chicken", name: "Baja Chicken", calories: 740 },
    { id: "quiznos-spicy-monterey", name: "Spicy Monterey", calories: 870 },
    { id: "quiznos-turkey-bacon-guac", name: "Turkey Bacon Guacamole", calories: 840 },
    { id: "quiznos-prime-rib", name: "Prime Rib Peppercorn", calories: 920 }
  ],
  "Grilled Flatbreads": [
    { id: "quiznos-chicken-flatbread", name: "Chicken Carbonara Flatbread", calories: 560 },
    { id: "quiznos-pesto-flatbread", name: "Pesto Turkey Flatbread", calories: 520 },
    { id: "quiznos-caprese-flatbread", name: "Caprese Flatbread", calories: 490 }
  ],
  "Garden Fresh Salads": [
    { id: "quiznos-chicken-caesar", name: "Chicken Caesar Salad", calories: 410 },
    { id: "quiznos-chef-salad", name: "Chef Salad", calories: 380 },
    { id: "quiznos-apple-harvest", name: "Apple Harvest Salad", calories: 450 },
    { id: "quiznos-mediterranean", name: "Mediterranean Salad", calories: 360 }
  ],
  "Soups & Chili": [
    { id: "quiznos-broccoli-cheese", name: "Broccoli Cheese Soup", calories: 280 },
    { id: "quiznos-chicken-noodle", name: "Chicken Noodle Soup", calories: 220 },
    { id: "quiznos-chili", name: "Chili", calories: 310 },
    { id: "quiznos-potato-soup", name: "Loaded Baked Potato Soup", calories: 290 }
  ],
  "Sides & Snacks": [
    { id: "quiznos-chips", name: "Regular Chips", calories: 150 },
    { id: "quiznos-jalapeno-chips", name: "Jalapeño Chips", calories: 150 },
    { id: "quiznos-bbq-chips", name: "BBQ Chips", calories: 150 },
    { id: "quiznos-salt-vinegar-chips", name: "Salt & Vinegar Chips", calories: 150 }
  ],
  "Sweet Treats": [
    { id: "quiznos-cookie", name: "Chocolate Chip Cookie", calories: 220 },
    { id: "quiznos-brownie", name: "Fudge Brownie", calories: 340 },
    { id: "quiznos-sugar-cookie", name: "Sugar Cookie", calories: 200 },
    { id: "quiznos-oatmeal-cookie", name: "Oatmeal Raisin Cookie", calories: 210 }
  ]
};

// Transform categories into a flat array for the menu
export const quiznosItems: FastFoodItem[] = Object.values(QUIZNOS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Quiznos",
      item: item.name,
      calories: item.calories,
      category: Object.entries(QUIZNOS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );