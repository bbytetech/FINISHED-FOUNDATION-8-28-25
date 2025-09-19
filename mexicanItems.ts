import { FastFoodItem } from '../types';

// Export categories for menu organization
const MEXICAN_CATEGORIES = {
  "Burritos": [
    { id: "mexican-bean-burrito", name: "Bean & Cheese Burrito", calories: 350, description: "Refried beans and melted cheese" },
    { id: "mexican-chicken-burrito", name: "Grilled Chicken Burrito", calories: 550, description: "Marinated grilled chicken" },
    { id: "mexican-steak-burrito", name: "Carne Asada Burrito", calories: 620, description: "Grilled steak with guacamole" },
    { id: "mexican-california", name: "California Burrito", calories: 980, description: "Carne asada, fries, cheese" }
  ],
  "Tacos": [
    { id: "mexican-fish-taco", name: "Baja Fish Taco", calories: 230, description: "Battered fish with cabbage slaw" },
    { id: "mexican-chicken-taco", name: "Grilled Chicken Taco", calories: 210, description: "Marinated chicken" },
    { id: "mexican-steak-taco", name: "Carne Asada Taco", calories: 240, description: "Grilled steak" },
    { id: "mexican-shrimp-taco", name: "Grilled Shrimp Taco", calories: 220, description: "Seasoned shrimp" }
  ],
  "Enchiladas": [
    { id: "mexican-cheese-enchiladas", name: "Cheese Enchiladas", calories: 540, description: "Rolled tortillas with cheese" },
    { id: "mexican-chicken-enchiladas", name: "Chicken Enchiladas", calories: 580, description: "Shredded chicken" },
    { id: "mexican-steak-enchiladas", name: "Beef Enchiladas", calories: 620, description: "Ground beef" }
  ],
  "Quesadillas": [
    { id: "mexican-cheese-quesadilla", name: "Cheese Quesadilla", calories: 580, description: "Melted cheese blend" },
    { id: "mexican-chicken-quesadilla", name: "Chicken Quesadilla", calories: 640, description: "Grilled chicken and cheese" },
    { id: "mexican-steak-quesadilla", name: "Steak Quesadilla", calories: 680, description: "Grilled steak and cheese" }
  ],
  "Fajitas": [
    { id: "mexican-chicken-fajitas", name: "Chicken Fajitas", calories: 740, description: "Grilled chicken with peppers" },
    { id: "mexican-steak-fajitas", name: "Steak Fajitas", calories: 780, description: "Grilled steak with peppers" },
    { id: "mexican-shrimp-fajitas", name: "Shrimp Fajitas", calories: 690, description: "Grilled shrimp with peppers" }
  ],
  "Salads & Soups": [
    { id: "mexican-tostada", name: "Tostada Salad", calories: 520, description: "Crispy tortilla bowl salad" },
    { id: "mexican-chicken-salad", name: "Grilled Chicken Salad", calories: 440, description: "Grilled chicken on greens" },
    { id: "mexican-tortilla-soup", name: "Tortilla Soup", calories: 280, description: "Traditional Mexican soup" }
  ],
  "Fresh Made Sides": [
    { id: "mexican-rice", name: "Mexican Rice", calories: 200, description: "Seasoned rice" },
    { id: "mexican-beans", name: "Black Beans", calories: 180, description: "Whole black beans" },
    { id: "mexican-pinto-beans", name: "Pinto Beans", calories: 190, description: "Slow-cooked pinto beans" },
    { id: "mexican-chips", name: "Tortilla Chips", calories: 290, description: "Fresh-made chips" },
    { id: "mexican-guacamole", name: "Fresh Guacamole", calories: 150, description: "Made fresh daily" },
    { id: "mexican-pico", name: "Pico de Gallo", calories: 25, description: "Fresh chopped salsa" },
    { id: "mexican-salsa-verde", name: "Salsa Verde", calories: 20, description: "Tomatillo salsa" }
  ],
  "Sweet Treats": [
    { id: "mexican-churros", name: "Cinnamon Churros", calories: 280, description: "Mexican-style pastry" },
    { id: "mexican-flan", name: "Mexican Flan", calories: 320, description: "Caramel custard" },
    { id: "mexican-sopapillas", name: "Sopapillas", calories: 260, description: "Fried pastry with honey" }
  ],
  "Beverages": [
    { id: "mexican-horchata", name: "Horchata", calories: 220, description: "Rice and cinnamon drink" },
    { id: "mexican-jamaica", name: "Jamaica (Hibiscus Tea)", calories: 80, description: "Hibiscus iced tea" },
    { id: "mexican-fountain", name: "Fountain Drink", calories: 150, description: "Assorted sodas" },
    { id: "mexican-mexican-coke", name: "Mexican Coca-Cola", calories: 150, description: "Made with cane sugar" }
  ]
};

// Transform categories into a flat array for the menu
export const mexicanItems: FastFoodItem[] = Object.values(MEXICAN_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Mexican Entrees",
      item: item.name,
      calories: item.calories,
      category: Object.entries(MEXICAN_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );