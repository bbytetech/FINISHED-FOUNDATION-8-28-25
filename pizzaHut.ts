import { FastFoodItem } from '../types';

const PIZZA_HUT_CATEGORIES = {
  "Original Pan® Pizza": [
    { id: "ph-pan-pepperoni", name: "Pan Pizza Pepperoni", calories: 2720 },
    { id: "ph-pan-supreme", name: "Pan Pizza Supreme", calories: 3040 },
    { id: "ph-pan-meat", name: "Pan Pizza Meat Lover's", calories: 3280 },
    { id: "ph-pan-cheese", name: "Pan Pizza Cheese", calories: 2400 },
    { id: "ph-pan-veggie", name: "Pan Pizza Veggie Lover's", calories: 2320 },
    { id: "ph-pan-hawaiian", name: "Pan Pizza Hawaiian", calories: 2560 }
  ],
  "Hand-Tossed Pizza": [
    { id: "ph-pepperoni", name: "Pepperoni Pizza", calories: 2400 },
    { id: "ph-cheese", name: "Cheese Pizza", calories: 2000 },
    { id: "ph-supreme", name: "Supreme Pizza", calories: 2720 },
    { id: "ph-meat-lovers", name: "Meat Lover's Pizza", calories: 3040 },
    { id: "ph-veggie-lovers", name: "Veggie Lover's Pizza", calories: 2080 },
    { id: "ph-hawaiian", name: "Hawaiian Luau Pizza", calories: 2320 },
    { id: "ph-buffalo", name: "Buffalo Chicken Pizza", calories: 2560 },
    { id: "ph-bbq-chicken", name: "BBQ Chicken Pizza", calories: 2480 },
    { id: "ph-ultimate-cheese", name: "Ultimate Cheese Lover's Pizza", calories: 2240 },
    { id: "ph-backyard-bbq", name: "Backyard BBQ Pizza", calories: 2600 },
    { id: "ph-chicken-bacon", name: "Chicken Bacon Parmesan Pizza", calories: 2520 }
  ],
  "Thin 'N Crispy®": [
    { id: "ph-thin-pepperoni", name: "Thin 'N Crispy Pepperoni", calories: 2080 },
    { id: "ph-thin-supreme", name: "Thin 'N Crispy Supreme", calories: 2240 },
    { id: "ph-thin-veggie", name: "Thin 'N Crispy Veggie", calories: 1840 },
    { id: "ph-thin-cheese", name: "Thin 'N Crispy Cheese", calories: 1920 },
    { id: "ph-thin-hawaiian", name: "Thin 'N Crispy Hawaiian", calories: 2000 },
    { id: "ph-thin-meat", name: "Thin 'N Crispy Meat Lover's", calories: 2320 }
  ],
  "Stuffed Crust": [
    { id: "ph-stuffed-pepperoni", name: "Stuffed Crust Pepperoni", calories: 2880 },
    { id: "ph-stuffed-cheese", name: "Stuffed Crust Cheese", calories: 2640 },
    { id: "ph-stuffed-supreme", name: "Stuffed Crust Supreme", calories: 3120 },
    { id: "ph-stuffed-meat", name: "Stuffed Crust Meat Lover's", calories: 3280 }
  ],
  "Wings & Things": [
    { id: "ph-wings", name: "Traditional Wings (8)", calories: 760 },
    { id: "ph-wings-boneless", name: "Boneless Wings (8)", calories: 740 },
    { id: "ph-wings-breaded", name: "Breaded Wings (8)", calories: 780 }
  ],
  "Hut Favorites": [
    { id: "ph-breadsticks", name: "Breadsticks (2 pc)", calories: 260 },
    { id: "ph-cheese-sticks", name: "Cheese Sticks", calories: 340 },
    { id: "ph-fries", name: "French Fries", calories: 360 },
    { id: "ph-mozzarella-sticks", name: "Mozzarella Sticks", calories: 440 },
    { id: "ph-jalapeno-poppers", name: "Jalapeño Poppers", calories: 320 }
  ],
  "Sweet Endings": [
    { id: "ph-cinnamon", name: "Cinnamon Sticks", calories: 420 },
    { id: "ph-cookie", name: "Hershey's Triple Chocolate Cookie", calories: 380 },
    { id: "ph-brownie", name: "Hershey's Chocolate Brownie", calories: 360 },
    { id: "ph-cinnabon", name: "Cinnabon Mini Rolls", calories: 480 }
  ]
};

export const pizzaHutItems: FastFoodItem[] = Object.values(PIZZA_HUT_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Pizza Hut",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PIZZA_HUT_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );