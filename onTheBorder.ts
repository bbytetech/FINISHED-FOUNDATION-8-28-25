import { FastFoodItem } from '../types';

const ON_THE_BORDER_CATEGORIES = {
  "Sizzling Fajita Fiesta": [
    { id: "otb-chicken-fajitas", name: "Chicken Fajitas", calories: 910, description: "Mesquite-grilled chicken with peppers and onions" },
    { id: "otb-steak-fajitas", name: "Steak Fajitas", calories: 980, description: "Mesquite-grilled steak with peppers and onions" },
    { id: "otb-grande-burrito", name: "Classic Burrito", calories: 980, description: "Large flour tortilla filled with choice of meat" },
    { id: "otb-border-queso", name: "Border Queso Beef Burrito", calories: 1040, description: "Burrito smothered in queso" }
  ],
  "Enchilada Especialidades": [
    { id: "otb-cheese-enchiladas", name: "Cheese & Onion Enchiladas", calories: 840, description: "Filled with cheese and onions" },
    { id: "otb-chicken-enchiladas", name: "Chicken Enchiladas", calories: 890, description: "Filled with seasoned chicken" },
    { id: "otb-enchilada-combo", name: "Enchilada Combo", calories: 920, description: "Choose any two enchiladas" },
    { id: "otb-border-combo", name: "Border Combo", calories: 1080, description: "Enchilada and taco combo" }
  ],
  "Auténtico Street Tacos": [
    { id: "otb-southwest-tacos", name: "Southwest Chicken Tacos", calories: 720, description: "Grilled chicken with southwest sauce" },
    { id: "otb-brisket-tacos", name: "Brisket Tacos", calories: 850, description: "Slow-roasted brisket" },
    { id: "otb-fish-tacos", name: "Grilled Fish Tacos", calories: 680, description: "Grilled fish with lime-cilantro slaw" },
    { id: "otb-street-tacos", name: "Street-Style Tacos", calories: 740, description: "Authentic Mexican street tacos" }
  ],
  "Border Classics": [
    { id: "otb-chimichanga", name: "Chimichanga", calories: 940, description: "Deep-fried burrito" },
    { id: "otb-flautas", name: "Chicken Flautas", calories: 820, description: "Crispy rolled tacos" },
    { id: "otb-quesadillas", name: "Fajita Quesadillas", calories: 890, description: "Grilled flour tortilla with cheese" },
    { id: "otb-taco-salad", name: "Grande Taco Salad", calories: 780, description: "Crispy tortilla bowl salad" }
  ],
  "Fiesta Starters": [
    { id: "otb-guacamole", name: "Fresh Guacamole", calories: 240, description: "Made fresh at your table" },
    { id: "otb-queso", name: "Signature Queso", calories: 380, description: "Melted cheese dip" },
    { id: "otb-nachos", name: "Grande Nachos", calories: 1240, description: "Loaded nachos with all the toppings" },
    { id: "otb-quesadillas-app", name: "Chicken Quesadillas", calories: 720, description: "Appetizer portion" }
  ],
  "Acompañamientos": [
    { id: "otb-rice", name: "Mexican Rice", calories: 280, description: "Traditional Mexican rice" },
    { id: "otb-beans", name: "Refried Beans", calories: 220, description: "Traditional refried beans" },
    { id: "otb-black-beans", name: "Black Beans", calories: 180, description: "Whole black beans" },
    { id: "otb-grilled-veggies", name: "Grilled Vegetables", calories: 90, description: "Seasonal grilled vegetables" }
  ],
  "Dulces Delights": [
    { id: "otb-sopapillas", name: "Sopapillas", calories: 340, description: "Mexican pastry with honey" },
    { id: "otb-churros", name: "Border Churros", calories: 380, description: "Cinnamon-sugar churros" },
    { id: "otb-flan", name: "Mexican Flan", calories: 320, description: "Traditional caramel custard" },
    { id: "otb-brownie", name: "Chocolate Brownie Sundae", calories: 780, description: "Warm brownie with ice cream" }
  ]
};

export const onTheBorderItems: FastFoodItem[] = Object.values(ON_THE_BORDER_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "On The Border",
      item: item.name,
      calories: item.calories,
      category: Object.entries(ON_THE_BORDER_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );