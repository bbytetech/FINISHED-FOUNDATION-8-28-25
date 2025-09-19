import { FastFoodItem } from '../types';

const WHATABURGER_CATEGORIES = {
  "Signature Burgers": [
    { id: "wb-whataburger", name: "Whataburger", calories: 590, description: "100% pure beef patty with mustard, lettuce, tomatoes, pickles, diced onions" },
    { id: "wb-double-meat", name: "Double Meat Whataburger", calories: 850, description: "Two 100% pure beef patties with all the fixings" },
    { id: "wb-triple-meat", name: "Triple Meat Whataburger", calories: 1080, description: "Three 100% pure beef patties for serious appetites" },
    { id: "wb-jalapeno-cheese", name: "Jalapeño & Cheese Whataburger", calories: 700, description: "Spicy jalapeños and melted cheese" },
    { id: "wb-bacon-cheese", name: "Bacon & Cheese Whataburger", calories: 680, description: "Crispy bacon and American cheese" },
    { id: "wb-avocado-bacon", name: "Avocado Bacon Burger", calories: 950, description: "Fresh avocado and crispy bacon" },
    { id: "wb-mushroom-swiss", name: "Mushroom Swiss Burger", calories: 720, description: "Sautéed mushrooms and Swiss cheese" }
  ],
  "Chicken": [
    { id: "wb-whatachicken", name: "Whatachick'n Sandwich", calories: 580, description: "Breaded chicken breast with lettuce and tomato" },
    { id: "wb-grilled-chicken", name: "Grilled Chicken Sandwich", calories: 430, description: "Marinated grilled chicken breast" },
    { id: "wb-spicy-chicken", name: "Spicy Chicken Sandwich", calories: 600, description: "Spicy breaded chicken breast" },
    { id: "wb-chicken-strips-3", name: "Chicken Strips (3 pc)", calories: 380, description: "Hand-breaded chicken strips" },
    { id: "wb-chicken-bites", name: "Whatachick'n Bites (6 pc)", calories: 250, description: "Bite-sized breaded chicken" }
  ],
  "Breakfast": [
    { id: "wb-breakfast-taquito", name: "Breakfast on a Bun", calories: 420, description: "Egg, cheese, and choice of meat" },
    { id: "wb-honey-butter", name: "Honey Butter Chicken Biscuit", calories: 560, description: "Chicken strip with honey butter" },
    { id: "wb-pancakes", name: "Pancakes", calories: 440, description: "Fresh-made buttermilk pancakes" },
    { id: "wb-biscuit-gravy", name: "Biscuit & Gravy", calories: 380, description: "Fresh biscuit with cream gravy" }
  ],
  "Sides": [
    { id: "wb-fries", name: "French Fries (Medium)", calories: 400, description: "Hot, crispy french fries" },
    { id: "wb-onion-rings", name: "Onion Rings (Medium)", calories: 420, description: "Crispy breaded onion rings" },
    { id: "wb-apple-slices", name: "Apple Slices", calories: 30, description: "Fresh-cut apple slices" },
    { id: "wb-texas-toast", name: "Texas Toast", calories: 170, description: "Grilled Texas toast" }
  ],
  "Salads": [
    { id: "wb-garden-salad", name: "Garden Salad", calories: 220, description: "Fresh garden greens and vegetables" },
    { id: "wb-apple-cranberry", name: "Apple & Cranberry Salad", calories: 380, description: "Mixed greens with fruit" },
    { id: "wb-chicken-salad", name: "Grilled Chicken Salad", calories: 420, description: "Grilled chicken on fresh greens" }
  ],
  "Shakes & Desserts": [
    { id: "wb-shake-chocolate", name: "Chocolate Shake", calories: 650, description: "Rich chocolate shake" },
    { id: "wb-shake-vanilla", name: "Vanilla Shake", calories: 580, description: "Classic vanilla shake" },
    { id: "wb-shake-strawberry", name: "Strawberry Shake", calories: 610, description: "Fresh strawberry shake" },
    { id: "wb-cinnamon-roll", name: "Cinnamon Roll", calories: 410, description: "Warm cinnamon roll" },
    { id: "wb-cookie", name: "Chocolate Chunk Cookie", calories: 220, description: "Fresh-baked cookie" }
  ],
  "Beverages": [
    { id: "wb-coke", name: "Coca-Cola (Medium)", calories: 200, description: "Fountain drink" },
    { id: "wb-dr-pepper", name: "Dr Pepper (Medium)", calories: 190, description: "Fountain drink" },
    { id: "wb-sprite", name: "Sprite (Medium)", calories: 200, description: "Fountain drink" },
    { id: "wb-sweet-tea", name: "Sweet Tea (Medium)", calories: 120, description: "Fresh-brewed sweet tea" },
    { id: "wb-lemonade", name: "Lemonade (Medium)", calories: 180, description: "Fresh-squeezed lemonade" }
  ]
};

export const whataburgerItems: FastFoodItem[] = Object.values(WHATABURGER_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Whataburger",
      item: item.name,
      calories: item.calories,
      category: Object.entries(WHATABURGER_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );