import { FastFoodItem } from '../types';

// Export categories for menu organization
const CARNEGIE_CATEGORIES = {
  "Signature Sandwiches": [
    { id: "carnegie-woody", name: "The Woody Allen", calories: 1200, description: "Hot pastrami and corned beef piled high" },
    { id: "carnegie-reuben", name: "Classic Reuben", calories: 980, description: "Corned beef, sauerkraut, Swiss cheese, Russian dressing" },
    { id: "carnegie-pastrami", name: "Pastrami on Rye", calories: 890, description: "Hot pastrami, deli mustard" },
    { id: "carnegie-corned-beef", name: "Corned Beef on Rye", calories: 860, description: "Hot corned beef, deli mustard" },
    { id: "carnegie-brisket", name: "Hot Brisket on Rye", calories: 840, description: "Tender brisket, gravy" },
    { id: "carnegie-turkey", name: "Roast Turkey on Rye", calories: 690, description: "Fresh roasted turkey breast" },
    { id: "carnegie-tongue", name: "Beef Tongue on Rye", calories: 760, description: "Sliced beef tongue, deli mustard" },
    { id: "carnegie-combo", name: "Combination Sandwich", calories: 1280, description: "Choice of any two meats" }
  ],
  "Breakfast Platters": [
    { id: "carnegie-lox", name: "Lox & Bagel Platter", calories: 680, description: "Nova Scotia salmon, cream cheese, bagel" },
    { id: "carnegie-nova", name: "Nova Scotia Salmon Platter", calories: 640, description: "With cream cheese, tomato, onion, bagel" },
    { id: "carnegie-whitefish", name: "Whitefish Salad Platter", calories: 580, description: "Smoked whitefish salad, bagel" },
    { id: "carnegie-eggs-pastrami", name: "Pastrami & Eggs", calories: 720, description: "Three eggs any style with pastrami" },
    { id: "carnegie-eggs-corned", name: "Corned Beef & Eggs", calories: 690, description: "Three eggs any style with corned beef" }
  ],
  "Homemade Soups": [
    { id: "carnegie-matzo", name: "Matzo Ball Soup", calories: 240, description: "Classic chicken soup with matzo ball" },
    { id: "carnegie-borscht", name: "Borscht", calories: 180, description: "Chilled beet soup with sour cream" },
    { id: "carnegie-chicken-soup", name: "Chicken Soup", calories: 160, description: "Traditional chicken noodle soup" },
    { id: "carnegie-mushroom-barley", name: "Mushroom Barley Soup", calories: 220, description: "Hearty mushroom barley soup" },
    { id: "carnegie-split-pea", name: "Split Pea Soup", calories: 200, description: "With chunks of ham" }
  ],
  "Appetizers & Sides": [
    { id: "carnegie-knish", name: "Potato Knish", calories: 340, description: "Baked pastry filled with potato" },
    { id: "carnegie-latkes", name: "Potato Latkes (3)", calories: 460, description: "Crispy potato pancakes" },
    { id: "carnegie-coleslaw", name: "Coleslaw", calories: 150, description: "Creamy house-made coleslaw" },
    { id: "carnegie-pickle", name: "Sour Pickle", calories: 15, description: "Classic kosher dill pickle" },
    { id: "carnegie-potato-salad", name: "Potato Salad", calories: 280, description: "Traditional deli-style potato salad" },
    { id: "carnegie-chopped-liver", name: "Chopped Liver", calories: 320, description: "Traditional Jewish-style chopped liver" },
    { id: "carnegie-stuffed-derma", name: "Stuffed Derma", calories: 380, description: "Traditional kishke" }
  ],
  "Garden Fresh Salads": [
    { id: "carnegie-chef-salad", name: "Chef's Salad", calories: 420, description: "Mixed greens with turkey, ham, Swiss cheese" },
    { id: "carnegie-tuna-salad", name: "Tuna Salad Platter", calories: 380, description: "House-made tuna salad on lettuce" },
    { id: "carnegie-egg-salad", name: "Egg Salad Platter", calories: 360, description: "Fresh egg salad on lettuce" },
    { id: "carnegie-russian", name: "Russian Salad", calories: 340, description: "Mixed vegetables with Russian dressing" }
  ],
  "Hot Entrees": [
    { id: "carnegie-stuffed-cabbage", name: "Stuffed Cabbage", calories: 440, description: "Traditional sweet and sour recipe" },
    { id: "carnegie-beef-stew", name: "Old Fashioned Beef Stew", calories: 520, description: "Hearty beef stew with vegetables" },
    { id: "carnegie-brisket-plate", name: "Hot Brisket Platter", calories: 680, description: "Sliced brisket with gravy" },
    { id: "carnegie-liver-onions", name: "Calves Liver & Onions", calories: 490, description: "Pan-seared with caramelized onions" }
  ],
  "Desserts": [
    { id: "carnegie-cheesecake", name: "NY Style Cheesecake", calories: 580, description: "Classic New York cheesecake" },
    { id: "carnegie-strudel", name: "Apple Strudel", calories: 420, description: "Flaky pastry with spiced apples" },
    { id: "carnegie-rugelach", name: "Rugelach (3)", calories: 340, description: "Chocolate or cinnamon" },
    { id: "carnegie-black-white", name: "Black & White Cookie", calories: 380, description: "Classic NYC black and white cookie" },
    { id: "carnegie-rice-pudding", name: "Rice Pudding", calories: 320, description: "Creamy rice pudding with cinnamon" }
  ],
  "Beverages": [
    { id: "carnegie-egg-cream", name: "Chocolate Egg Cream", calories: 190, description: "Traditional NY egg cream" },
    { id: "carnegie-seltzer", name: "Fresh Seltzer", calories: 0, description: "Brooklyn-style seltzer water" },
    { id: "carnegie-coffee", name: "Hot Coffee", calories: 5, description: "Fresh brewed coffee" },
    { id: "carnegie-dr-brown", name: "Dr. Brown's Soda", calories: 160, description: "Assorted flavors" }
  ]
};

// Transform categories into a flat array for the menu
export const carnegieItems: FastFoodItem[] = Object.values(CARNEGIE_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Carnegie Deli",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CARNEGIE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );