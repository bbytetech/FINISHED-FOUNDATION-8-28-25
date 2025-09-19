import { FastFoodItem } from '../types';

const LOMBARDI_CATEGORIES = {
  "Signature Pizza": [
    { id: "lombardis-margherita", name: "Original Margherita Pizza", calories: 2000 },
    { id: "lombardis-marinara", name: "Marinara Pizza", calories: 1760 },
    { id: "lombardis-bianca", name: "Pizza Bianca (White Pizza)", calories: 2240 },
    { id: "lombardis-pepperoni", name: "Pepperoni Pizza", calories: 2400 },
    { id: "lombardis-sausage", name: "Italian Sausage Pizza", calories: 2480 },
    { id: "lombardis-clam", name: "Fresh Clam Pizza", calories: 2320 }
  ],
  "Gourmet Specialty Pizzas": [
    { id: "lombardis-supreme", name: "Lombardi's Supreme Pizza", calories: 2720 },
    { id: "lombardis-quattro", name: "Quattro Formaggi Pizza", calories: 2560 },
    { id: "lombardis-alla-vodka", name: "Alla Vodka Pizza", calories: 2480 },
    { id: "lombardis-truffle", name: "Black Truffle Pizza", calories: 2680 },
    { id: "lombardis-prosciutto", name: "Prosciutto & Arugula Pizza", calories: 2440 },
    { id: "lombardis-meatball", name: "Homemade Meatball Pizza", calories: 2580 }
  ],
  "Pizza By The Slice": [
    { id: "lombardis-slice-margherita", name: "Margherita Slice", calories: 250 },
    { id: "lombardis-slice-pepperoni", name: "Pepperoni Slice", calories: 300 },
    { id: "lombardis-slice-bianca", name: "White Slice", calories: 280 },
    { id: "lombardis-slice-supreme", name: "Supreme Slice", calories: 340 }
  ],
  "Calzones & Stromboli": [
    { id: "lombardis-calzone", name: "Classic Calzone", calories: 580 },
    { id: "lombardis-spinach-calzone", name: "Spinach & Ricotta Calzone", calories: 540 },
    { id: "lombardis-stromboli", name: "Italian Stromboli", calories: 620 }
  ],
  "Appetizers": [
    { id: "lombardis-meatballs", name: "Homemade Meatballs", calories: 420 },
    { id: "lombardis-calamari", name: "Fried Calamari", calories: 460 },
    { id: "lombardis-bruschetta", name: "Bruschetta", calories: 280 },
    { id: "lombardis-caprese", name: "Caprese", calories: 320 },
    { id: "lombardis-antipasto", name: "Antipasto Misto", calories: 380 }
  ],
  "Fresh Salads": [
    { id: "lombardis-house", name: "House Salad", calories: 180 },
    { id: "lombardis-caesar", name: "Caesar Salad", calories: 220 },
    { id: "lombardis-arugula", name: "Arugula & Parmesan", calories: 190 },
    { id: "lombardis-italian", name: "Italian Chopped Salad", calories: 280 }
  ],
  "Dolci (Desserts)": [
    { id: "lombardis-tiramisu", name: "Tiramisu", calories: 420 },
    { id: "lombardis-cannoli", name: "Cannoli", calories: 380 },
    { id: "lombardis-cheesecake", name: "NY Style Cheesecake", calories: 460 },
    { id: "lombardis-gelato", name: "Italian Gelato", calories: 280 },
    { id: "lombardis-zeppole", name: "Zeppole", calories: 340 }
  ],
  "Beverages": [
    { id: "lombardis-espresso", name: "Espresso", calories: 0 },
    { id: "lombardis-cappuccino", name: "Cappuccino", calories: 80 },
    { id: "lombardis-san-pellegrino", name: "San Pellegrino", calories: 0 },
    { id: "lombardis-italian-soda", name: "Italian Soda", calories: 120 },
    { id: "lombardis-wine", name: "House Wine", calories: 125 }
  ]
};

export const lombardisItems: FastFoodItem[] = Object.values(LOMBARDI_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Lombardi's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(LOMBARDI_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );