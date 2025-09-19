import { FastFoodItem } from '../types';

const TRUE_FOOD_CATEGORIES = {
  "Seasonal Bowls": [
    { id: "truefood-ancient-grains", name: "Ancient Grains Bowl", calories: 690, description: "Miso-glazed sweet potato, turmeric, charred onion, snow pea, grilled portobello, avocado, hemp seed" },
    { id: "truefood-mediterranean", name: "Mediterranean Quinoa", calories: 640, description: "Persian cucumber, olive, peppadew, cherry tomato, pole bean, feta, almond, oregano vinaigrette" },
    { id: "truefood-teriyaki", name: "Teriyaki Quinoa Bowl", calories: 660, description: "Broccoli, heirloom carrot, bok choy, mushroom, brown rice, avocado, toasted sesame" }
  ],
  "Garden Fresh": [
    { id: "truefood-chopped", name: "Chopped Salad", calories: 440, description: "Medjool date, dried cranberry, jicama, organic apple, manchego, farro, marcona almond, champagne vinaigrette" },
    { id: "truefood-mediterranean-salad", name: "Mediterranean Salad", calories: 510, description: "Persian cucumber, olive, peppadew, cherry tomato, pole bean, feta, almond, oregano vinaigrette" }
  ],
  "Pizzas & Flatbreads": [
    { id: "truefood-pizza", name: "Butternut Squash Pizza", calories: 740, description: "Caramelized onion, roasted garlic, organic kale, vegan almond ricotta, dried cranberry" },
    { id: "truefood-margherita", name: "Margherita Pizza", calories: 680, description: "Organic tomato, fresh mozzarella, basil" }
  ],
  "Entrees": [
    { id: "truefood-lasagna", name: "Squash Lasagna", calories: 490, description: "Lemon ricotta, organic spinach, zucchini, fresh herbs" },
    { id: "truefood-grain-bowl", name: "Forbidden Rice Bowl", calories: 580, description: "Black pearl rice, charred onion, snow pea, grilled portobello, avocado" },
    { id: "truefood-korean-noodle", name: "Korean Noodle Bowl", calories: 510, description: "Sweet potato glass noodle, pickled shiitake, organic spinach, carrot, bean sprout, toasted sesame" }
  ],
  "Starters & Shares": [
    { id: "truefood-hummus", name: "Charred Cauliflower Hummus", calories: 470, description: "Greek salad, feta, mint, dill, warm pita" },
    { id: "truefood-edamame-dumplings", name: "Edamame Dumplings", calories: 420, description: "Dashi, white truffle oil, asian herbs" }
  ],
  "Sandwiches & Burgers": [
    { id: "truefood-turkey-burger", name: "Turkey Burger", calories: 540, description: "Smashed avocado, tomato, butter lettuce, smoked gouda, jalapeño remoulade" },
    { id: "truefood-veggie-burger", name: "Inside Out Quinoa Burger", calories: 490, description: "Hummus, tzatziki, tomato, cucumber, red onion, avocado, feta" }
  ],
  "Refreshers": [
    { id: "truefood-sparkling-tea", name: "Sparkling Antioxidant Tea", calories: 90, description: "Green tea, pomegranate, honey" },
    { id: "truefood-medicine-man", name: "Medicine Man", calories: 110, description: "Sea buckthorn, pomegranate, honey, green tea" }
  ]
};

export const truefoodItems: FastFoodItem[] = Object.values(TRUE_FOOD_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "True Food Kitchen",
      item: item.name,
      calories: item.calories,
      category: Object.entries(TRUE_FOOD_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );