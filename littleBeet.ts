import { FastFoodItem } from '../types';

const LITTLE_BEET_CATEGORIES = {
  "Signature Bowls": [
    { id: "little-beet-falafel", name: "Beet Falafel Bowl", calories: 520, description: "Beet falafel, quinoa, roasted vegetables, tahini" },
    { id: "little-beet-chicken-avocado", name: "Chicken & Avocado Bowl", calories: 580, description: "Grilled chicken, avocado, quinoa, roasted vegetables" },
    { id: "little-beet-tofu", name: "Tofu Vegetable Bowl", calories: 490, description: "Roasted tofu, seasonal vegetables, brown rice" },
    { id: "little-beet-salmon", name: "Salmon & Quinoa Bowl", calories: 610, description: "Grilled salmon, quinoa, roasted vegetables" },
    { id: "little-beet-steak", name: "Steak & Sweet Potato Bowl", calories: 640, description: "Grilled steak, roasted sweet potatoes, greens" }
  ],
  "Salads": [
    { id: "little-beet-harvest", name: "Harvest Salad", calories: 380, description: "Mixed greens, roasted vegetables, goat cheese, vinaigrette" },
    { id: "little-beet-kale-caesar", name: "Kale Caesar Salad", calories: 420, description: "Kale, parmesan, croutons, caesar dressing" },
    { id: "little-beet-mediterranean", name: "Mediterranean Salad", calories: 390, description: "Mixed greens, feta, olives, cucumber, tomato" }
  ],
  "Sides": [
    { id: "little-beet-roasted-veg", name: "Roasted Vegetables", calories: 180, description: "Seasonal vegetables roasted with herbs" },
    { id: "little-beet-quinoa", name: "Quinoa", calories: 210, description: "Fluffy quinoa with herbs" },
    { id: "little-beet-sweet-potato", name: "Sweet Potato", calories: 160, description: "Roasted sweet potato" },
    { id: "little-beet-avocado", name: "Avocado", calories: 120, description: "Fresh sliced avocado" }
  ]
};

export const littleBeetItems: FastFoodItem[] = Object.values(LITTLE_BEET_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "The Little Beet",
      item: item.name,
      calories: item.calories,
      category: Object.entries(LITTLE_BEET_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );