import { FastFoodItem } from '../types';

// Export categories for menu organization
const ZAROS_CATEGORIES = {
  "Signature Sandwiches": [
    { id: "zaros-pastrami", name: "Hot Pastrami", calories: 860, description: "Thinly sliced pastrami with deli mustard on rye" },
    { id: "zaros-corned-beef", name: "Corned Beef Special", calories: 820, description: "Corned beef with coleslaw and Russian dressing" },
    { id: "zaros-reuben", name: "Classic Reuben", calories: 940, description: "Corned beef, sauerkraut, Swiss cheese, Russian dressing on grilled rye" },
    { id: "zaros-turkey-club", name: "Turkey Club", calories: 780, description: "Roasted turkey, bacon, lettuce, tomato, mayo on triple-decker toast" },
    { id: "zaros-blt", name: "BLT Deluxe", calories: 650, description: "Crispy bacon, lettuce, tomato, mayo on toasted bread" },
    { id: "zaros-roast-beef", name: "Roast Beef & Swiss", calories: 740, description: "Sliced roast beef, Swiss cheese, horseradish sauce on rye" }
  ],
  "Hot Specialties": [
    { id: "zaros-meatloaf", name: "Homemade Meatloaf Sandwich", calories: 820, description: "Thick-cut meatloaf with gravy on sourdough" },
    { id: "zaros-french-dip", name: "French Dip", calories: 760, description: "Roast beef on French roll with au jus for dipping" },
    { id: "zaros-monte-cristo", name: "Monte Cristo", calories: 890, description: "Ham, turkey, Swiss cheese on French toast with powdered sugar" },
    { id: "zaros-patty-melt", name: "Patty Melt", calories: 920, description: "Beef patty, Swiss cheese, grilled onions on rye" }
  ],
  "Breakfast All Day": [
    { id: "zaros-breakfast-sandwich", name: "Breakfast Sandwich", calories: 580, description: "Eggs, cheese, choice of meat on a roll" },
    { id: "zaros-lox-bagel", name: "Lox & Bagel", calories: 640, description: "Smoked salmon, cream cheese, tomato, onion, capers" },
    { id: "zaros-omelette", name: "Three-Egg Omelette", calories: 520, description: "Made to order with choice of fillings" },
    { id: "zaros-pancakes", name: "Buttermilk Pancakes", calories: 490, description: "Stack of fluffy pancakes with maple syrup" }
  ],
  "Fresh Salads": [
    { id: "zaros-chef-salad", name: "Chef's Salad", calories: 420, description: "Mixed greens, turkey, ham, cheese, egg, vegetables" },
    { id: "zaros-greek-salad", name: "Greek Salad", calories: 380, description: "Romaine, feta, olives, tomato, cucumber, red onion" },
    { id: "zaros-cobb-salad", name: "Cobb Salad", calories: 460, description: "Grilled chicken, bacon, avocado, egg, blue cheese" }
  ],
  "Homemade Soups": [
    { id: "zaros-matzo-ball", name: "Matzo Ball Soup", calories: 220, description: "Traditional chicken soup with matzo ball" },
    { id: "zaros-chicken-noodle", name: "Chicken Noodle Soup", calories: 180, description: "Classic chicken soup with egg noodles" },
    { id: "zaros-split-pea", name: "Split Pea Soup", calories: 240, description: "Hearty soup with ham" }
  ],
  "Deli Sides": [
    { id: "zaros-potato-salad", name: "Potato Salad", calories: 280, description: "Creamy homestyle potato salad" },
    { id: "zaros-coleslaw", name: "Coleslaw", calories: 160, description: "Fresh cabbage in creamy dressing" },
    { id: "zaros-macaroni-salad", name: "Macaroni Salad", calories: 320, description: "Classic deli-style macaroni salad" },
    { id: "zaros-pickle", name: "Kosher Dill Pickle", calories: 15, description: "Crisp kosher dill pickle" },
    { id: "zaros-knish", name: "Potato Knish", calories: 350, description: "Traditional potato-filled pastry" }
  ],
  "Desserts": [
    { id: "zaros-cheesecake", name: "New York Cheesecake", calories: 460, description: "Classic creamy NY-style cheesecake" },
    { id: "zaros-rugelach", name: "Chocolate Rugelach", calories: 280, description: "Flaky pastry with chocolate filling" },
    { id: "zaros-black-white", name: "Black & White Cookie", calories: 340, description: "Classic NYC half-chocolate, half-vanilla cookie" }
  ]
};

// Transform categories into a flat array for the menu
export const zarosItems: FastFoodItem[] = Object.values(ZAROS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Zaro's Deli",
      item: item.name,
      calories: item.calories,
      category: Object.entries(ZAROS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0] || 'Signature Sandwiches'
    }))
  );