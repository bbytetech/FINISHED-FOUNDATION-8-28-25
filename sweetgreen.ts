import { FastFoodItem } from '../types';

const SWEETGREEN_CATEGORIES = {
  "Signature Bowls": [
    { id: "sg-harvest-bowl", name: "Harvest Bowl", calories: 705, description: "Roasted chicken, sweet potatoes, apples, goat cheese, wild rice, toasted almonds, balsamic vinaigrette" },
    { id: "sg-kale-caesar", name: "Kale Caesar", calories: 400, description: "Shredded kale, parmesan crisp, roasted chicken, tomatoes, parmesan cheese, lime squeeze, caesar dressing" },
    { id: "sg-guacamole-greens", name: "Guacamole Greens", calories: 530, description: "Avocado, roasted chicken, red onions, tomatoes, tortilla chips, lime squeeze, lime cilantro jalapeño vinaigrette" },
    { id: "sg-chicken-pesto", name: "Chicken Pesto Parm", calories: 590, description: "Roasted chicken, spicy broccoli, tomatoes, shaved parmesan, za'atar breadcrumbs, warm quinoa, pesto vinaigrette" }
  ],
  "Warm Bowls": [
    { id: "sg-buffalo-chicken", name: "Buffalo Chicken Bowl", calories: 555, description: "Blackened chicken, raw carrots, crispy rice, tomatoes, blue cheese, buffalo sauce" },
    { id: "sg-shroomami", name: "Shroomami", calories: 500, description: "Roasted mushrooms, raw beets, cucumbers, basil, spicy sunflower seeds, warm wild rice, miso sesame ginger dressing" },
    { id: "sg-curry-cauliflower", name: "Curry Cauliflower Bowl", calories: 470, description: "Roasted curry cauliflower, chickpeas, warm quinoa, raisins, toasted almonds, hot sauce" }
  ],
  "Fresh Salads": [
    { id: "sg-super-green-goddess", name: "Super Green Goddess", calories: 315, description: "Shredded kale, lentils, chickpeas, raw beets, roasted sweet potatoes, green goddess ranch" },
    { id: "sg-mediterranean", name: "Mediterranean Bowl", calories: 555, description: "Hummus, hot chickpeas, cucumbers, roasted peppers, kalamata olives, feta cheese, za'atar breadcrumbs" },
    { id: "sg-spicy-cashew", name: "Spicy Cashew Bowl", calories: 670, description: "Roasted chicken, sweet potatoes, cucumber, cilantro, spicy cashew dressing" }
  ],
  "Seasonal Specials": [
    { id: "sg-fish-taco", name: "Fish Taco Bowl", calories: 485, description: "Roasted steelhead, avocado, tortilla chips, red onions, cilantro, warm quinoa, lime cilantro jalapeño vinaigrette" },
    { id: "sg-mango-chicken", name: "Mango Chipotle Bowl", calories: 555, description: "Roasted chicken, mango, red onions, tortilla chips, chipotle vinaigrette" }
  ],
  "Build Your Own": [
    { id: "sg-quinoa-avocado", name: "Quinoa + Avocado Bowl", calories: 640, description: "Custom bowl with quinoa base, avocado, seasonal vegetables" },
    { id: "sg-custom-salad", name: "Custom Greens Bowl", calories: 420, description: "Build your own salad with choice of greens and toppings" }
  ]
};

export const sweetgreenItems: FastFoodItem[] = Object.values(SWEETGREEN_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Sweetgreen",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SWEETGREEN_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );