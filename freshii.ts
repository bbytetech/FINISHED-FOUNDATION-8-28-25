import { FastFoodItem } from '../types';

const FRESHII_CATEGORIES = {
  "Signature Bowls": [
    { id: "freshii-buddha", name: "Buddha Satay Bowl", calories: 520, description: "Brown rice, broccoli, carrots, cabbage, crispy wontons, green onions, spicy peanut sauce" },
    { id: "freshii-teriyaki", name: "Teriyaki Twist Bowl", calories: 480, description: "Brown rice, edamame, crispy wontons, carrots, cucumber, green onions, teriyaki sauce" },
    { id: "freshii-oaxaca", name: "Oaxaca Bowl", calories: 440, description: "Brown rice, black beans, corn, tomatoes, tortilla chips, cilantro, spicy yogurt sauce" },
    { id: "freshii-pangoa", name: "Pangoa Bowl", calories: 460, description: "Brown rice, avocado, aged cheddar, cherry tomatoes, black beans, corn, cilantro, fiery bbq sauce" }
  ],
  "Fresh Salads": [
    { id: "freshii-metaboost", name: "Metaboost Salad", calories: 390, description: "Spinach, kale, goat cheese, mango, almonds, carrots, edamame, balsamic vinaigrette" },
    { id: "freshii-cobb", name: "Superfood Cobb Salad", calories: 470, description: "Field greens, avocado, blue cheese, cherry tomatoes, hard-boiled egg, bacon bits, ranch dressing" },
    { id: "freshii-market", name: "Market Salad", calories: 340, description: "Field greens, quinoa, feta cheese, strawberries, green apple, carrots, walnuts, balsamic vinaigrette" }
  ],
  "Wraps & Burritos": [
    { id: "freshii-wrap", name: "Market Wrap", calories: 430, description: "Quinoa, avocado, aged cheddar, cherry tomatoes, black beans, corn, cilantro" },
    { id: "freshii-buddha-wrap", name: "Buddha Satay Wrap", calories: 540, description: "Rice noodles, carrots, cabbage, crispy wontons, green onions, spicy peanut sauce" },
    { id: "freshii-tex-mex", name: "Tex Mex Burrito", calories: 580, description: "Brown rice, black beans, corn, salsa, aged cheddar, cilantro" }
  ],
  "Soups & Broths": [
    { id: "freshii-tortilla-soup", name: "Spicy Lemongrass Soup", calories: 220, description: "Vegetable broth, rice noodles, mushrooms, cilantro, lime" },
    { id: "freshii-energii-soup", name: "Energii Soup", calories: 180, description: "Vegetable broth, quinoa, kale, celery, tomatoes" }
  ],
  "Smoothies & Juices": [
    { id: "freshii-green-energy", name: "Green Energy Smoothie", calories: 220, description: "Spinach, kale, pineapple, apple, lime" },
    { id: "freshii-berry-blast", name: "Berry Blast Smoothie", calories: 280, description: "Strawberries, blueberries, banana, greek yogurt, honey" },
    { id: "freshii-red-power", name: "Red Power Juice", calories: 160, description: "Beet, carrot, apple, lemon, ginger" }
  ],
  "Healthy Snacks": [
    { id: "freshii-energii-bites", name: "Energii Bites", calories: 90, description: "Peanut butter, oats, honey, dark chocolate chips" },
    { id: "freshii-protein-balls", name: "Protein Power Balls", calories: 110, description: "Dates, almonds, protein powder, coconut" }
  ]
};

export const freshiiItems: FastFoodItem[] = Object.values(FRESHII_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Freshii",
      item: item.name,
      calories: item.calories,
      category: Object.entries(FRESHII_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );