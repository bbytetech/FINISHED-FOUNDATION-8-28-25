import { FastFoodItem } from '../types';

// Export categories for menu organization
const CAFERIO_CATEGORIES = {
  "Sweet Pork Specialties": [
    { id: "cr-sweet-pork", name: "Sweet Pork Burrito", calories: 840, description: "House specialty sweet pork, rice, beans, cheese" },
    { id: "cr-sweet-pork-enchilada", name: "Sweet Pork Enchilada", calories: 720, description: "Sweet pork with enchilada sauce" },
    { id: "cr-sweet-pork-quesadilla", name: "Sweet Pork Quesadilla", calories: 780, description: "Grilled tortilla with sweet pork" },
    { id: "cr-sweet-pork-nachos", name: "Sweet Pork Nachos", calories: 920, description: "Loaded nachos with sweet pork" },
    { id: "cr-sweet-pork-taco", name: "Sweet Pork Taco", calories: 320, description: "Signature sweet pork taco" }
  ],
  "Grilled Chicken Favorites": [
    { id: "cr-grilled-chicken", name: "Grilled Chicken Burrito", calories: 740, description: "Marinated chicken breast" },
    { id: "cr-chicken-enchilada", name: "Chicken Enchilada", calories: 580, description: "Grilled chicken enchilada" },
    { id: "cr-chicken-quesadilla", name: "Grilled Chicken Quesadilla", calories: 680, description: "Cheese quesadilla with chicken" },
    { id: "cr-chicken-taco", name: "Grilled Chicken Taco", calories: 280, description: "Grilled chicken breast taco" },
    { id: "cr-chicken-salad", name: "Grilled Chicken Salad", calories: 490, description: "Fresh salad with grilled chicken" }
  ],
  "Steak & Seafood": [
    { id: "cr-steak-burrito", name: "Grilled Steak Burrito", calories: 820, description: "Marinated steak burrito" },
    { id: "cr-steak-quesadilla", name: "Grilled Steak Quesadilla", calories: 760, description: "Cheese quesadilla with steak" },
    { id: "cr-steak-taco", name: "Grilled Steak Taco", calories: 310, description: "Grilled steak taco" },
    { id: "cr-fish-taco", name: "Grilled Fish Taco", calories: 290, description: "Seasoned grilled fish" },
    { id: "cr-shrimp-taco", name: "Grilled Shrimp Taco", calories: 270, description: "Seasoned grilled shrimp" }
  ],
  "Fresh Salads & Bowls": [
    { id: "cr-tostada", name: "Tostada Salad", calories: 580, description: "Crispy tortilla bowl salad" },
    { id: "cr-mango-chicken", name: "Mango Chicken Salad", calories: 540, description: "Fresh mango and grilled chicken" },
    { id: "cr-grilled-salad", name: "Grilled Chicken Salad", calories: 490, description: "Mixed greens with chicken" },
    { id: "cr-sweet-pork-salad", name: "Sweet Pork Salad", calories: 640, description: "Mixed greens with sweet pork" }
  ],
  "Fresh Made Sides": [
    { id: "cr-rice", name: "Cilantro Lime Rice", calories: 180, description: "Fresh cilantro and lime" },
    { id: "cr-beans", name: "Black Beans", calories: 160, description: "Seasoned black beans" },
    { id: "cr-chips", name: "Fresh Tortilla Chips", calories: 280, description: "Made fresh daily" },
    { id: "cr-guacamole", name: "Fresh Guacamole", calories: 240, description: "Made fresh daily" },
    { id: "cr-pico", name: "Pico de Gallo", calories: 25, description: "Fresh chopped salsa" },
    { id: "cr-queso", name: "Chile Con Queso", calories: 210, description: "Melted cheese dip" },
    { id: "cr-tortilla-soup", name: "Tortilla Soup", calories: 240, description: "Homemade soup" }
  ],
  "Desserts": [
    { id: "cr-tres-leches", name: "Tres Leches Cake", calories: 420, description: "Traditional three milk cake" },
    { id: "cr-flan", name: "Mexican Flan", calories: 310, description: "Classic caramel custard" },
    { id: "cr-sopapillas", name: "Sopapillas", calories: 290, description: "Fried pastry with honey" },
    { id: "cr-churros", name: "Cinnamon Churros", calories: 280, description: "Mexican pastry dessert" }
  ],
  "Beverages": [
    { id: "cr-horchata", name: "Horchata", calories: 220, description: "Rice and cinnamon drink" },
    { id: "cr-jamaica", name: "Jamaica (Hibiscus Tea)", calories: 80, description: "Hibiscus iced tea" },
    { id: "cr-fountain", name: "Fountain Drink", calories: 150, description: "Assorted sodas" },
    { id: "cr-lemonade", name: "Fresh Squeezed Lemonade", calories: 160, description: "Made fresh daily" }
  ]
};

// Transform categories into a flat array for the menu
export const caferioItems: FastFoodItem[] = Object.values(CAFERIO_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Cafe Rio Mexican Grill",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CAFERIO_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );