import { FastFoodItem } from '../types';

const TACO_BELL_CATEGORIES = {
  "Cravings Value Menu": [
    { id: "tb-cheesy-bean", name: "Cheesy Bean & Rice Burrito", calories: 420, description: "Refried beans, nacho cheese sauce, creamy jalapeño sauce" },
    { id: "tb-potato-taco", name: "Spicy Potato Soft Taco", calories: 230, description: "Crispy potatoes, lettuce, cheese, chipotle sauce" },
    { id: "tb-beefy-melt", name: "Beefy Melt Burrito", calories: 620, description: "Seasoned beef, seasoned rice, nacho cheese sauce" }
  ],
  "Specialties & Favorites": [
    { id: "tb-crunchwrap", name: "Crunchwrap Supreme", calories: 540, description: "Seasoned beef, nacho cheese sauce, sour cream, tomatoes" },
    { id: "tb-mexican-pizza", name: "Mexican Pizza", calories: 530, description: "Two crispy shells, seasoned beef, refried beans, pizza sauce" },
    { id: "tb-gordita-crunch", name: "Cheesy Gordita Crunch", calories: 500, description: "Hard shell taco wrapped in a soft flatbread with cheese" },
    { id: "tb-chalupa", name: "Chalupa Supreme", calories: 350, description: "Fried flatbread shell with seasoned beef and toppings" },
    { id: "tb-quesarito", name: "Beef Quesarito", calories: 650, description: "Seasoned beef burrito wrapped in a cheese quesadilla" }
  ],
  "Classic Tacos": [
    { id: "tb-crunchy-taco", name: "Crunchy Taco", calories: 170, description: "Seasoned beef, lettuce, cheese in a crunchy shell" },
    { id: "tb-soft-taco", name: "Soft Taco", calories: 180, description: "Seasoned beef, lettuce, cheese in a soft tortilla" },
    { id: "tb-doritos-taco", name: "Nacho Cheese Doritos Locos Taco", calories: 170, description: "Seasoned beef in a Doritos shell" },
    { id: "tb-doritos-taco-supreme", name: "Nacho Cheese Doritos Locos Taco Supreme", calories: 190, description: "Supreme version with sour cream and tomatoes" }
  ],
  "Burritos & Wraps": [
    { id: "tb-burrito", name: "Bean Burrito", calories: 350, description: "Refried beans, red sauce, onions, cheese" },
    { id: "tb-5-layer", name: "Beefy 5-Layer Burrito", calories: 490, description: "Seasoned beef, beans, cheese, nacho cheese, sour cream" },
    { id: "tb-grilled-cheese", name: "Grilled Cheese Burrito", calories: 710, description: "Seasoned beef, rice, cheese, grilled tortilla" },
    { id: "tb-chicken-burrito", name: "Chicken Chipotle Melt", calories: 190, description: "Grilled chicken, creamy chipotle sauce" }
  ],
  "Loaded Nachos & Fries": [
    { id: "tb-nachos", name: "Nachos BellGrande", calories: 740, description: "Chips topped with beef, beans, cheese, sour cream" },
    { id: "tb-nachos-supreme", name: "Nachos Supreme", calories: 430, description: "Chips with beef, beans, cheese sauce" },
    { id: "tb-chips-guac", name: "Chips & Guacamole", calories: 230, description: "Tortilla chips with guacamole" },
    { id: "tb-chips-nacho", name: "Chips & Nacho Cheese Sauce", calories: 220, description: "Tortilla chips with cheese sauce" }
  ],
  "Bell Breakfast": [
    { id: "tb-breakfast-crunch", name: "Breakfast Crunchwrap", calories: 670, description: "Eggs, bacon, hash brown, cheese, jalapeño sauce" },
    { id: "tb-breakfast-quesadilla", name: "Breakfast Quesadilla", calories: 510, description: "Eggs, cheese, sausage in a grilled tortilla" },
    { id: "tb-hash-brown", name: "Hash Brown", calories: 160, description: "Crispy potato hash brown" }
  ],
  "Sweets & Sides": [
    { id: "tb-cinnamon-twists", name: "Cinnamon Twists", calories: 170, description: "Light, crispy twists dusted with cinnamon sugar" },
    { id: "tb-cinnabon", name: "Cinnabon Delights (2 Pack)", calories: 160, description: "Warm donut holes filled with cream" }
  ],
  "Freezes & Drinks": [
    { id: "tb-mountain-dew", name: "Mountain Dew Baja Blast (Medium)", calories: 220, description: "Tropical lime Mountain Dew" },
    { id: "tb-pepsi", name: "Pepsi (Medium)", calories: 200, description: "Classic Pepsi cola" },
    { id: "tb-diet-pepsi", name: "Diet Pepsi (Medium)", calories: 0, description: "Zero calorie Pepsi" },
    { id: "tb-sierra-mist", name: "Sierra Mist (Medium)", calories: 200, description: "Lemon-lime soda" }
  ]
};

export const tacoBellItems: FastFoodItem[] = Object.values(TACO_BELL_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Taco Bell",
      item: item.name,
      calories: item.calories,
      category: Object.entries(TACO_BELL_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );