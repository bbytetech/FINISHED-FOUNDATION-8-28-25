import { FastFoodItem } from '../types';

const CHOPT_CATEGORIES = {
  "Signature Salads": [
    { id: "chopt-mexican-caesar", name: "Mexican Caesar Salad", calories: 440, description: "Romaine, cotija cheese, jalapeño, tortilla chips, Mexican caesar dressing" },
    { id: "chopt-santa-fe", name: "Santa Fe Salad", calories: 490, description: "Romaine, avocado, corn, black beans, tortilla chips, chipotle vinaigrette" },
    { id: "chopt-kebab-cobb", name: "Kebab Cobb Salad", calories: 510, description: "Romaine, grilled chicken, feta, tomatoes, cucumber, za'atar vinaigrette" },
    { id: "chopt-classic-cobb", name: "Classic Cobb Salad", calories: 580, description: "Romaine, grilled chicken, bacon, egg, avocado, blue cheese dressing" },
    { id: "chopt-palm-beach", name: "Palm Beach Salad", calories: 390, description: "Romaine, hearts of palm, cucumber, tomatoes, champagne vinaigrette" },
    { id: "chopt-greek", name: "Greek Salad", calories: 360, description: "Romaine, feta, olives, tomatoes, cucumber, red wine vinaigrette" }
  ],
  "Warm Grain Bowls": [
    { id: "chopt-sesame-power", name: "Sesame Power Bowl", calories: 520, description: "Warm grains, kale, edamame, carrots, sesame ginger dressing" },
    { id: "chopt-kale-quinoa", name: "Kale & Quinoa Bowl", calories: 440, description: "Quinoa, kale, sweet potatoes, chickpeas, tahini dressing" },
    { id: "chopt-mexicali", name: "Mexicali Vegan Bowl", calories: 410, description: "Warm grains, roasted corn, black beans, crispy shallots, spicy tahini" }
  ],
  "Seasonal Specials": [
    { id: "chopt-harvest-bowl", name: "Harvest Bowl", calories: 480, description: "Warm grains, roasted vegetables, goat cheese, balsamic vinaigrette" },
    { id: "chopt-asian-power", name: "Asian Power Bowl", calories: 450, description: "Warm grains, tofu, edamame, carrots, miso sesame dressing" },
    { id: "chopt-southwest-bowl", name: "Southwest Bowl", calories: 520, description: "Warm grains, avocado, corn, black beans, chipotle vinaigrette" }
  ],
  "Fresh Add-Ons": [
    { id: "chopt-avocado", name: "Avocado", calories: 120, description: "Fresh sliced avocado" },
    { id: "chopt-quinoa", name: "Warm Quinoa", calories: 140, description: "Steamed quinoa" },
    { id: "chopt-pita", name: "Warm Pita", calories: 160, description: "Fresh-baked pita bread" }
  ],
  "House-Made Dressings": [
    { id: "chopt-classic-caesar", name: "Classic Caesar", calories: 140, description: "Traditional caesar dressing" },
    { id: "chopt-balsamic", name: "Balsamic Vinaigrette", calories: 90, description: "Classic balsamic dressing" },
    { id: "chopt-tahini", name: "Spicy Tahini", calories: 120, description: "Creamy tahini with spices" }
  ]
};

export const choptItems: FastFoodItem[] = Object.values(CHOPT_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Chopt Creative Salad Co.",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CHOPT_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );