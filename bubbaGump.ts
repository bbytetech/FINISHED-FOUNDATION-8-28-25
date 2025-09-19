import { FastFoodItem } from '../types';

// Define categories for Bubba Gump
const BUBBA_GUMP_CATEGORIES = {
  "Run Forrest Run Specialties": [
    { id: "bg-shrimp-scampi", name: "Shrimp Scampi", calories: 720, description: "Garlic butter shrimp with herb rice" },
    { id: "bg-coconut-shrimp", name: "Coconut Shrimp", calories: 680, description: "With tropical chili sauce" },
    { id: "bg-fried-shrimp", name: "Fried Shrimp", calories: 780, description: "Hand-breaded and golden fried" },
    { id: "bg-shrimp-mac", name: "Shrimp Mac & Cheese", calories: 890, description: "Creamy three-cheese sauce" }
  ],
  "Jenny's Catch": [
    { id: "bg-fish-chips", name: "Fish & Chips", calories: 820, description: "Beer-battered cod fillets" },
    { id: "bg-mahi", name: "Mahi Mahi", calories: 540, description: "Grilled with herb butter" }
  ],
  "Bubba's Land Favorites": [
    { id: "bg-ribs", name: "Baby Back Ribs", calories: 920, description: "Memphis style BBQ sauce" },
    { id: "bg-chicken", name: "Mama Blue's Chicken", calories: 680, description: "Southern fried chicken" }
  ],
  "Bayou Sides": [
    { id: "bg-fries", name: "French Fries", calories: 380, description: "Seasoned crispy fries" },
    { id: "bg-hush-puppies", name: "Hush Puppies", calories: 420, description: "Southern cornmeal fritters" }
  ]
};

// Export menu items
export const bubbaGumpItems: FastFoodItem[] = Object.values(BUBBA_GUMP_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Bubba Gump Shrimp Co.",
      item: item.name,
      calories: item.calories,
      category: Object.entries(BUBBA_GUMP_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );