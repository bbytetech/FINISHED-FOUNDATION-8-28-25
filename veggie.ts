import { FastFoodItem } from '../types';

const VEGGIE_GRILL_CATEGORIES = {
  "Plant-Based Burgers": [
    { id: "veggie-beyond-burger", name: "Beyond Burger", calories: 510, description: "Beyond patty, American cheese, lettuce, tomato, special sauce" },
    { id: "veggie-steakhouse", name: "Steakhouse Burger", calories: 580, description: "Beyond patty, provolone, grilled mushrooms, steakhouse sauce" },
    { id: "veggie-bbq-burger", name: "BBQ Burger", calories: 540, description: "Beyond patty, crispy onion rings, BBQ sauce, ranch" }
  ],
  "Sandwiches & Wraps": [
    { id: "veggie-santa-fe", name: "Santa Fe Crispy Chickin", calories: 540, description: "Plant-based chickin, lettuce, tomato, chipotle mayo" },
    { id: "veggie-grilledchickin", name: "Grilled Chickin Sandwich", calories: 490, description: "Grilled plant-based chickin, avocado, tomato, pesto" },
    { id: "veggie-buffalo-wrap", name: "Buffalo Bomber Wrap", calories: 520, description: "Crispy chickin, ranch, lettuce, tomato, buffalo sauce" }
  ],
  "Power Bowls": [
    { id: "veggie-bowl", name: "Harvest Bowl", calories: 620, description: "Quinoa, roasted vegetables, kale, hummus, harissa" },
    { id: "veggie-masala", name: "Masala Bowl", calories: 580, description: "Cauliflower rice, chickpeas, roasted vegetables, coconut curry" },
    { id: "veggie-mediterranean", name: "Mediterranean Supergreens", calories: 420, description: "Kale, quinoa, hummus, falafel, tahini sauce" }
  ],
  "Comfort Classics": [
    { id: "veggie-mac", name: "Mac-N-Cheese", calories: 590, description: "Creamy cashew cheese sauce, breadcrumbs" },
    { id: "veggie-wings", name: "Buffalo Wings", calories: 440, description: "Plant-based wings, buffalo sauce, ranch" },
    { id: "veggie-nachos", name: "Mondo Nachos", calories: 680, description: "Tortilla chips, queso, beans, pico de gallo" }
  ],
  "Fresh Salads": [
    { id: "veggie-caesar", name: "All Hail Kale Caesar", calories: 380, description: "Marinated kale, romaine, tempeh bacon, croutons" },
    { id: "veggie-quinoa", name: "Quinoa Power Salad", calories: 420, description: "Quinoa, arugula, chickpeas, almonds, citrus vinaigrette" },
    { id: "veggie-tempeh", name: "Tempeh Taco Salad", calories: 460, description: "Taco tempeh, romaine, corn salsa, tortilla strips" }
  ],
  "Sides & Snacks": [
    { id: "veggie-sweet-potato", name: "Sweet Potato Fries", calories: 320, description: "Crispy sweet potato fries with chipotle ranch" },
    { id: "veggie-cauliflower", name: "Buffalo Cauliflower", calories: 280, description: "Crispy cauliflower, buffalo sauce" },
    { id: "veggie-soup", name: "Seasonal Soup", calories: 220, description: "Chef's daily creation" }
  ]
};

export const veggieItems: FastFoodItem[] = Object.values(VEGGIE_GRILL_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Veggie Grill",
      item: item.name,
      calories: item.calories,
      category: Object.entries(VEGGIE_GRILL_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );