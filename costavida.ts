import { FastFoodItem } from '../types';

// Export categories for menu organization
const COSTAVIDA_CATEGORIES = {
  "Sweet Pork Specialties": [
    { id: "cv-sweet-pork", name: "Sweet Pork Burrito", calories: 860, description: "House specialty sweet pork with rice and beans" },
    { id: "cv-sweet-pork-enchilada", name: "Sweet Pork Enchilada", calories: 720, description: "Sweet pork enchiladas with cheese" },
    { id: "cv-sweet-pork-quesadilla", name: "Sweet Pork Quesadilla", calories: 780, description: "Grilled tortilla with sweet pork" },
    { id: "cv-sweet-pork-nachos", name: "Sweet Pork Nachos", calories: 920, description: "Tortilla chips loaded with sweet pork" },
    { id: "cv-sweet-pork-taco", name: "Sweet Pork Taco", calories: 320, description: "Sweet pork street taco" }
  ],
  "Grilled Chicken Favorites": [
    { id: "cv-grilled-chicken", name: "Grilled Chicken Burrito", calories: 740, description: "Marinated chicken with rice and beans" },
    { id: "cv-chicken-enchilada", name: "Chicken Enchilada", calories: 580, description: "Grilled chicken enchiladas" },
    { id: "cv-chicken-quesadilla", name: "Grilled Chicken Quesadilla", calories: 680, description: "Cheese quesadilla with chicken" },
    { id: "cv-chicken-taco", name: "Grilled Chicken Taco", calories: 280, description: "Grilled chicken street taco" },
    { id: "cv-chicken-salad", name: "Grilled Chicken Salad", calories: 490, description: "Fresh salad with grilled chicken" }
  ],
  "Steak & Seafood": [
    { id: "cv-steak-burrito", name: "Grilled Steak Burrito", calories: 820, description: "Marinated steak burrito" },
    { id: "cv-steak-quesadilla", name: "Grilled Steak Quesadilla", calories: 760, description: "Cheese quesadilla with steak" },
    { id: "cv-steak-taco", name: "Grilled Steak Taco", calories: 310, description: "Grilled steak street taco" },
    { id: "cv-fish-taco", name: "Grilled Fish Taco", calories: 290, description: "Seasoned grilled fish taco" },
    { id: "cv-shrimp-taco", name: "Grilled Shrimp Taco", calories: 270, description: "Seasoned grilled shrimp taco" }
  ],
  "Fresh Salads & Bowls": [
    { id: "cv-tostada", name: "Tostada Salad", calories: 580, description: "Crispy tortilla bowl salad" },
    { id: "cv-mango-chicken", name: "Mango Chicken Salad", calories: 540, description: "Fresh mango and grilled chicken" },
    { id: "cv-grilled-salad", name: "Grilled Chicken Salad", calories: 490, description: "Mixed greens with chicken" },
    { id: "cv-sweet-pork-salad", name: "Sweet Pork Salad", calories: 640, description: "Mixed greens with sweet pork" }
  ],
  "Enchiladas & Combinations": [
    { id: "cv-enchilada-combo", name: "Two Enchilada Plate", calories: 820, description: "Choice of two enchiladas" },
    { id: "cv-burrito-enchilada", name: "Burrito & Enchilada Combo", calories: 980, description: "Burrito and enchilada plate" },
    { id: "cv-taco-enchilada", name: "Taco & Enchilada Combo", calories: 740, description: "Taco and enchilada plate" }
  ],
  "Fresh Made Sides": [
    { id: "cv-rice", name: "Cilantro Lime Rice", calories: 180, description: "Seasoned rice" },
    { id: "cv-beans", name: "Black Beans", calories: 160, description: "Whole black beans" },
    { id: "cv-chips", name: "Fresh Tortilla Chips", calories: 280, description: "Made fresh daily" },
    { id: "cv-guacamole", name: "Fresh Guacamole", calories: 240, description: "Made fresh daily" },
    { id: "cv-pico", name: "Pico de Gallo", calories: 25, description: "Fresh chopped salsa" },
    { id: "cv-queso", name: "Chile Con Queso", calories: 210, description: "Melted cheese dip" },
    { id: "cv-tortilla-soup", name: "Tortilla Soup", calories: 240, description: "Homemade soup" }
  ],
  "Desserts": [
    { id: "cv-tres-leches", name: "Tres Leches Cake", calories: 420, description: "Three milk cake" },
    { id: "cv-flan", name: "Mexican Flan", calories: 310, description: "Caramel custard" },
    { id: "cv-sopapillas", name: "Sopapillas", calories: 290, description: "Fried pastry with honey" },
    { id: "cv-churros", name: "Cinnamon Churros", calories: 280, description: "Mexican pastry dessert" }
  ],
  "Beverages": [
    { id: "cv-horchata", name: "Horchata", calories: 220, description: "Rice and cinnamon drink" },
    { id: "cv-jamaica", name: "Jamaica (Hibiscus Tea)", calories: 80, description: "Hibiscus iced tea" },
    { id: "cv-fountain", name: "Fountain Drink", calories: 150, description: "Assorted sodas" },
    { id: "cv-lemonade", name: "Fresh Squeezed Lemonade", calories: 160, description: "Made fresh daily" }
  ]
};

// Transform categories into a flat array for the menu
export const costavidaItems: FastFoodItem[] = Object.values(COSTAVIDA_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Costa Vida Fresh Mexican Grill",
      item: item.name,
      calories: item.calories,
      category: Object.entries(COSTAVIDA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );