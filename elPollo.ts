import { FastFoodItem } from '../types';

const EL_POLLO_CATEGORIES = {
  "Signature Chicken": [
    { id: "epl-2pc", name: "2 Piece Chicken Meal", calories: 540, description: "Fire-grilled chicken with sides" },
    { id: "epl-3pc", name: "3 Piece Chicken Meal", calories: 810, description: "Fire-grilled chicken with sides" },
    { id: "epl-half", name: "Half Chicken Meal", calories: 870, description: "Fire-grilled half chicken with sides" }
  ],
  "Fresh Bowls": [
    { id: "epl-double-bowl", name: "Double Chicken Bowl", calories: 880, description: "Double portion of chicken over rice" },
    { id: "epl-pollo-bowl", name: "Original Pollo Bowl", calories: 720, description: "Chicken over rice with beans" },
    { id: "epl-keto-bowl", name: "Keto Certified Bowl", calories: 570, description: "Low-carb bowl with cauliflower rice" }
  ],
  "Mexican Favorites": [
    { id: "epl-chicken-avo", name: "Chicken Avocado Burrito", calories: 830, description: "Chicken and avocado burrito" },
    { id: "epl-chipotle", name: "Chipotle Chicken Burrito", calories: 920, description: "Spicy chicken burrito" },
    { id: "epl-chicken-quesadilla", name: "Chicken Quesadilla", calories: 810, description: "Cheese quesadilla with chicken" }
  ],
  "Street Tacos & More": [
    { id: "epl-tostada", name: "Classic Chicken Tostada", calories: 410, description: "Crispy corn tortilla with toppings" },
    { id: "epl-street-tacos", name: "Chicken Street Tacos", calories: 560, description: "Authentic street-style tacos" },
    { id: "epl-baja-tacos", name: "Baja Fish Tacos", calories: 530, description: "Battered fish with slaw" }
  ],
  "Family Feasts": [
    { id: "epl-8pc", name: "8 Piece Family Meal", calories: 2880, description: "Feeds 3-4 people" },
    { id: "epl-12pc", name: "12 Piece Family Meal", calories: 4320, description: "Feeds 4-5 people" },
    { id: "epl-16pc", name: "16 Piece Family Meal", calories: 5760, description: "Feeds 6-8 people" }
  ],
  "Fresh-Made Sides": [
    { id: "epl-corn", name: "Sweet Corn", calories: 190, description: "Fresh corn on the cob" },
    { id: "epl-beans", name: "Pinto Beans", calories: 210, description: "Slow-cooked pinto beans" },
    { id: "epl-rice", name: "Mexican Rice", calories: 200, description: "Seasoned Mexican rice" },
    { id: "epl-broccoli", name: "Fresh Broccoli", calories: 40, description: "Steamed broccoli" },
    { id: "epl-coleslaw", name: "Coleslaw", calories: 140, description: "Fresh coleslaw" }
  ],
  "House-Made Sauces": [
    { id: "epl-avocado", name: "Avocado Salsa", calories: 60, description: "Fresh avocado salsa" },
    { id: "epl-chipotle-sauce", name: "Chipotle Sauce", calories: 100, description: "Spicy chipotle sauce" },
    { id: "epl-creamy-cilantro", name: "Creamy Cilantro", calories: 120, description: "Creamy cilantro dressing" },
    { id: "epl-pico", name: "Fresh Pico de Gallo", calories: 10, description: "Fresh chopped salsa" }
  ],
  "Sweet Treats": [
    { id: "epl-churros", name: "Churros", calories: 180, description: "Traditional Mexican pastry" },
    { id: "epl-flan", name: "Mexican Flan", calories: 240, description: "Classic caramel custard" },
    { id: "epl-tres-leches", name: "Tres Leches Cake", calories: 290, description: "Three milk cake" }
  ]
};

export const elPolloItems: FastFoodItem[] = Object.values(EL_POLLO_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "El Pollo Loco",
      item: item.name,
      calories: item.calories,
      category: Object.entries(EL_POLLO_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );