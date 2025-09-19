import { FastFoodItem } from '../types';

// Export categories for menu organization
const TORCHYS_CATEGORIES = {
  "Damn Good Tacos": [
    { id: "torchys-trailer-park", name: "Trailer Park (Fried Chicken)", calories: 520, description: "Hand-battered chicken, green chiles, lettuce, pico, cheddar jack, ranch" },
    { id: "torchys-democrat", name: "The Democrat (Barbacoa)", calories: 460, description: "Shredded beef barbacoa, avocado, queso fresco, cilantro, onions, lime" },
    { id: "torchys-republican", name: "The Republican (Jalapeño Sausage)", calories: 490, description: "Grilled jalapeño sausage, cheese, pico, poblano sauce" },
    { id: "torchys-brushfire", name: "Brushfire (Jamaican Jerk Chicken)", calories: 480, description: "Jerk chicken, grilled jalapeños, mango, sour cream, cilantro" },
    { id: "torchys-crossroads", name: "Crossroads (Smoked Beef Brisket)", calories: 510, description: "Smoked brisket, grilled onions, jalapeños, cilantro, jack cheese, tomatillo" }
  ],
  "Breakfast of Champions": [
    { id: "torchys-monk-morning", name: "The Monk (Breakfast)", calories: 380, description: "Scrambled eggs, bacon, green chiles, cheese" },
    { id: "torchys-migas", name: "Migas Taco", calories: 420, description: "Eggs, crispy corn strips, green chiles, avocado" },
    { id: "torchys-ranch-hand", name: "Ranch Hand (Breakfast)", calories: 440, description: "Eggs, beef fajita, potatoes, cheese" }
  ],
  "Torchy's Sides & Extras": [
    { id: "torchys-street-corn", name: "Street Corn", calories: 280, description: "Mexican street corn with queso fresco" },
    { id: "torchys-rice", name: "Mexican Rice", calories: 180, description: "Seasoned rice" },
    { id: "torchys-beans", name: "Refried Beans", calories: 220, description: "Homestyle refried beans" },
    { id: "torchys-green-chile-queso", name: "Green Chile Queso", calories: 390, description: "Signature queso with green chiles" },
    { id: "torchys-guac", name: "Fresh Guacamole", calories: 240, description: "Made fresh daily" },
    { id: "torchys-chips-salsa", name: "Chips & Salsa", calories: 280, description: "House-made tortilla chips" },
    { id: "torchys-chips-queso", name: "Chips & Queso", calories: 580, description: "Chips with signature queso" }
  ],
  "Drinks & Margaritas": [
    { id: "torchys-margarita", name: "Torchy's Rocks Margarita", calories: 220, description: "House margarita on the rocks" },
    { id: "torchys-frozen-margarita", name: "Frozen Margarita", calories: 250, description: "Frozen house margarita" },
    { id: "torchys-mexican-coke", name: "Mexican Coca-Cola", calories: 150, description: "Made with cane sugar" },
    { id: "torchys-topo-chico", name: "Topo Chico", calories: 0, description: "Sparkling mineral water" },
    { id: "torchys-fountain", name: "Fountain Drink", calories: 140, description: "Assorted sodas" }
  ]
};

// Transform categories into a flat array for the menu
export const torchysItems: FastFoodItem[] = Object.values(TORCHYS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Torchy's Tacos",
      item: item.name,
      calories: item.calories,
      category: Object.entries(TORCHYS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );