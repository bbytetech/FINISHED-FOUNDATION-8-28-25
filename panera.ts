import { FastFoodItem } from '../types';

const PANERA_CATEGORIES = {
  "Breakfast": [
    { id: "panera-bagel-plain", name: "Plain Bagel", calories: 280, description: "Freshly baked plain bagel" },
    { id: "panera-bagel-everything", name: "Everything Bagel", calories: 290, description: "Everything bagel with seeds and spices" },
    { id: "panera-cream-cheese", name: "Plain Cream Cheese", calories: 100, description: "Classic cream cheese spread" },
    { id: "panera-breakfast-sandwich", name: "Bacon, Egg & Cheese on Ciabatta", calories: 520, description: "Applewood-smoked bacon with egg and cheese" },
    { id: "panera-avocado-toast", name: "Avocado Toast", calories: 360, description: "Fresh avocado with cracked pepper" },
    { id: "panera-steel-cut-oatmeal", name: "Steel Cut Oatmeal with Strawberries", calories: 340, description: "Steel cut oats with fresh berries" }
  ],
  "Soups": [
    { id: "panera-broccoli-cheddar", name: "Broccoli Cheddar Soup", calories: 360, description: "Creamy soup with broccoli and cheese" },
    { id: "panera-chicken-noodle", name: "Chicken Noodle Soup", calories: 120, description: "Classic chicken soup with vegetables" },
    { id: "panera-tomato", name: "Creamy Tomato Soup", calories: 230, description: "Creamy tomato soup with cream" },
    { id: "panera-french-onion", name: "French Onion Soup", calories: 170, description: "Traditional onion soup with croutons" }
  ],
  "Fresh Salads": [
    { id: "panera-caesar", name: "Caesar Salad", calories: 440, description: "Romaine, parmesan, and croutons" },
    { id: "panera-greek", name: "Greek Salad", calories: 400, description: "Mixed greens with Mediterranean toppings" },
    { id: "panera-fuji-apple", name: "Fuji Apple Chicken Salad", calories: 560, description: "Chicken with apple and gorgonzola" },
    { id: "panera-asian-chicken", name: "Asian Sesame Chicken Salad", calories: 410, description: "Chicken with Asian-inspired dressing" },
    { id: "panera-southwest", name: "Southwest Chile Lime Ranch Salad", calories: 670, description: "Chicken with corn and black bean salsa" }
  ],
  "Sandwiches": [
    { id: "panera-turkey-avocado", name: "Turkey Avocado BLT", calories: 630, description: "Turkey with bacon and avocado" },
    { id: "panera-chipotle-chicken", name: "Chipotle Chicken Avocado Melt", calories: 770, description: "Chicken with chipotle sauce" },
    { id: "panera-tuna", name: "Tuna Salad Sandwich", calories: 640, description: "Classic tuna salad sandwich" },
    { id: "panera-grilled-cheese", name: "Classic Grilled Cheese", calories: 580, description: "Blend of cheeses on white miche" },
    { id: "panera-mediterranean", name: "Mediterranean Veggie", calories: 440, description: "Vegetables with feta spread" }
  ],
  "Mac & Cheese": [
    { id: "panera-mac", name: "Mac & Cheese", calories: 950, description: "Creamy mac and cheese" },
    { id: "panera-mac-bacon", name: "Bacon Mac & Cheese", calories: 1010, description: "Mac and cheese with bacon" },
    { id: "panera-mac-broccoli", name: "Broccoli Cheddar Mac & Cheese", calories: 970, description: "Mac and cheese with broccoli" }
  ],
  "Bowls": [
    { id: "panera-baja", name: "Baja Bowl", calories: 680, description: "Cilantro lime rice bowl" },
    { id: "panera-mediterranean-bowl", name: "Mediterranean Bowl", calories: 620, description: "Quinoa and hummus bowl" },
    { id: "panera-teriyaki", name: "Teriyaki Chicken & Broccoli Bowl", calories: 650, description: "Chicken with teriyaki sauce" }
  ],
  "Pastries & Sweets": [
    { id: "panera-cookie", name: "Chocolate Chipper Cookie", calories: 380, description: "Classic chocolate chip cookie" },
    { id: "panera-brownie", name: "Chocolate Brownie", calories: 490, description: "Rich chocolate brownie" },
    { id: "panera-muffin", name: "Blueberry Muffin", calories: 460, description: "Fresh blueberry muffin" },
    { id: "panera-scone", name: "Orange Scone", calories: 440, description: "Orange-flavored scone" },
    { id: "panera-cinnamon-roll", name: "Cinnamon Roll", calories: 640, description: "Classic cinnamon roll" }
  ],
  "Beverages": [
    { id: "panera-coffee", name: "Dark Roast Coffee", calories: 0, description: "Bold dark roast coffee" },
    { id: "panera-latte", name: "Caffe Latte", calories: 120, description: "Espresso with steamed milk" },
    { id: "panera-cold-brew", name: "Cold Brew", calories: 0, description: "Smooth cold brew coffee" },
    { id: "panera-smoothie-green", name: "Green Passion Smoothie", calories: 200, description: "Green tea smoothie" },
    { id: "panera-smoothie-strawberry", name: "Strawberry Banana Smoothie", calories: 260, description: "Fruit smoothie" },
    { id: "panera-lemonade", name: "Passion Papaya Green Tea", calories: 140, description: "Green tea with tropical flavors" }
  ]
};

export const paneraItems: FastFoodItem[] = Object.values(PANERA_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Panera",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PANERA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );