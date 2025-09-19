import { FastFoodItem } from '../types';

// Export categories for menu organization
const BAJA_FRESH_CATEGORIES = {
  "Baja Favorites": [
    { id: "bf-baja", name: "Baja Burrito", calories: 670, description: "Choice of meat with rice, beans, cheese, pico de gallo" },
    { id: "bf-ultimo", name: "Ultimo Burrito", calories: 890, description: "Double meat with rice, beans, cheese, guacamole" },
    { id: "bf-grilled-veggie", name: "Grilled Veggie Burrito", calories: 580, description: "Grilled vegetables with rice and beans" },
    { id: "bf-bean-cheese", name: "Bean & Cheese Burrito", calories: 540, description: "Refried beans and cheese blend" }
  ],
  "Fresh Grilled Tacos": [
    { id: "bf-fish-taco", name: "Baja Fish Taco", calories: 230, description: "Grilled fish with cabbage slaw" },
    { id: "bf-chicken-taco", name: "Grilled Chicken Taco", calories: 210, description: "Marinated chicken breast" },
    { id: "bf-steak-taco", name: "Grilled Steak Taco", calories: 240, description: "Grilled steak with onions" },
    { id: "bf-shrimp-taco", name: "Grilled Shrimp Taco", calories: 220, description: "Seasoned grilled shrimp" }
  ],
  "Enchiladas & Platters": [
    { id: "bf-enchiladas", name: "Chicken Enchiladas", calories: 580, description: "Topped with red sauce" },
    { id: "bf-cheese-enchiladas", name: "Cheese Enchiladas", calories: 540, description: "Blend of Mexican cheeses" },
    { id: "bf-steak-enchiladas", name: "Steak Enchiladas", calories: 620, description: "Grilled steak enchiladas" }
  ],
  "Baja Quesadillas": [
    { id: "bf-quesadilla", name: "Chicken Quesadilla", calories: 640, description: "Grilled flour tortilla with cheese" },
    { id: "bf-steak-quesadilla", name: "Steak Quesadilla", calories: 680, description: "With grilled steak" },
    { id: "bf-cheese-quesadilla", name: "Cheese Quesadilla", calories: 580, description: "Melted cheese blend" }
  ],
  "Sizzling Fajitas": [
    { id: "bf-chicken-fajitas", name: "Chicken Fajitas", calories: 740, description: "With grilled peppers and onions" },
    { id: "bf-steak-fajitas", name: "Steak Fajitas", calories: 780, description: "Grilled steak fajitas" },
    { id: "bf-shrimp-fajitas", name: "Shrimp Fajitas", calories: 690, description: "Grilled shrimp fajitas" }
  ],
  "Fresh Salads & Soups": [
    { id: "bf-tostada", name: "Tostada Salad", calories: 520, description: "Crispy tortilla bowl salad" },
    { id: "bf-grilled-chicken-salad", name: "Grilled Chicken Salad", calories: 440, description: "Mixed greens with chicken" },
    { id: "bf-tortilla-soup", name: "Tortilla Soup", calories: 280, description: "Traditional Mexican soup" }
  ],
  "Fresh-Made Sides": [
    { id: "bf-rice", name: "Mexican Rice", calories: 200, description: "Seasoned rice" },
    { id: "bf-beans", name: "Black Beans", calories: 180, description: "Whole black beans" },
    { id: "bf-pinto-beans", name: "Pinto Beans", calories: 190, description: "Slow-cooked pinto beans" },
    { id: "bf-chips", name: "Tortilla Chips", calories: 290, description: "Fresh-made daily" },
    { id: "bf-guacamole", name: "Fresh Guacamole", calories: 150, description: "Made fresh daily" },
    { id: "bf-pico", name: "Pico de Gallo", calories: 25, description: "Fresh chopped salsa" },
    { id: "bf-salsa-verde", name: "Salsa Verde", calories: 20, description: "Tomatillo salsa" }
  ],
  "Sweet Treats": [
    { id: "bf-churros", name: "Cinnamon Churros", calories: 280, description: "Mexican pastry dessert" },
    { id: "bf-flan", name: "Mexican Flan", calories: 320, description: "Traditional custard" },
    { id: "bf-sopapillas", name: "Sopapillas", calories: 260, description: "Fried pastry with honey" }
  ],
  "Beverages": [
    { id: "bf-horchata", name: "Horchata", calories: 220, description: "Rice and cinnamon drink" },
    { id: "bf-jamaica", name: "Jamaica (Hibiscus Tea)", calories: 80, description: "Hibiscus iced tea" },
    { id: "bf-fountain", name: "Fountain Drink", calories: 150, description: "Assorted sodas" }
  ]
};

// Transform categories into a flat array for the menu
export const bajafreshItems: FastFoodItem[] = Object.values(BAJA_FRESH_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Baja Fresh",
      item: item.name,
      calories: item.calories,
      category: Object.entries(BAJA_FRESH_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );