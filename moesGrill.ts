import { FastFoodItem } from '../types';

const MOES_CATEGORIES = {
  "Signature Burritos": [
    { id: "moes-homewrecker", name: "Homewrecker Burrito", calories: 890, description: "Choice of protein, rice, beans, shredded cheese, pico de gallo, lettuce, sour cream, guacamole" },
    { id: "moes-joey", name: "Joey Bag of Donuts Burrito", calories: 820, description: "Choice of protein, rice, beans, shredded cheese, pico de gallo" },
    { id: "moes-art", name: "Art Vandalay Burrito", calories: 730, description: "Vegetarian burrito with rice, beans, shredded cheese, pico de gallo" }
  ],
  "Signature Quesadillas": [
    { id: "moes-chicken-quesadilla", name: "Chicken Club Quesadilla", calories: 930, description: "Grilled chicken, bacon, shredded cheese, pico de gallo" },
    { id: "moes-steak-quesadilla", name: "Steak Club Quesadilla", calories: 970, description: "Grilled steak, bacon, shredded cheese, pico de gallo" }
  ],
  "Southwest Power Bowls": [
    { id: "moes-earmuffs", name: "Earmuffs Bowl", calories: 720, description: "Choice of protein over rice, beans, shredded cheese" },
    { id: "moes-band-camp", name: "Band Camp Bowl", calories: 680, description: "Vegetarian bowl with rice, beans, shredded cheese" }
  ],
  "Stacked & Loaded Tacos": [
    { id: "moes-wrong-doug", name: "Wrong Doug Stack", calories: 710, description: "Hard and soft shell with queso between" },
    { id: "moes-john-coctostan", name: "John Coctostan Stack", calories: 760, description: "Steak taco with queso and crispy shell" }
  ],
  "Fresh-Made Sides": [
    { id: "moes-rice", name: "Seasoned Rice", calories: 180, description: "Southwest seasoned rice" },
    { id: "moes-beans", name: "Black Beans", calories: 130, description: "Seasoned black beans" },
    { id: "moes-pinto-beans", name: "Pinto Beans", calories: 130, description: "Seasoned pinto beans" },
    { id: "moes-chips", name: "Tortilla Chips", calories: 280, description: "Fresh-made daily" },
    { id: "moes-queso", name: "Famous Queso (Cup)", calories: 220, description: "Signature white cheese dip" },
    { id: "moes-guac", name: "Guacamole (Cup)", calories: 150, description: "Fresh-made guacamole" }
  ],
  "Sweet Finishers": [
    { id: "moes-cookie", name: "Chocolate Chip Cookie", calories: 200, description: "Fresh-baked cookie" },
    { id: "moes-brownie", name: "Triple Chocolate Brownie", calories: 440, description: "Rich chocolate brownie" }
  ],
  "Refreshing Drinks": [
    { id: "moes-fountain", name: "Fountain Drink", calories: 0, description: "Coca-Cola products" },
    { id: "moes-tea", name: "Fresh Brewed Tea", calories: 0, description: "Unsweetened iced tea" },
    { id: "moes-lemonade", name: "Lemonade", calories: 140, description: "Fresh-squeezed lemonade" }
  ]
};

export const moesGrillItems: FastFoodItem[] = Object.values(MOES_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Moe's Southwest Grill",
      item: item.name,
      calories: item.calories,
      category: Object.entries(MOES_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );