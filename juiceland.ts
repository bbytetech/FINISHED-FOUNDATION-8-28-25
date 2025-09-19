import { FastFoodItem } from '../types';

const JUICELAND_CATEGORIES = {
  "Signature Smoothies": [
    { id: "juiceland-originator", name: "The Originator", calories: 240, description: "Banana, apple juice, blueberry, cherry, pear" },
    { id: "juiceland-wundershowzen", name: "Wundershowzen", calories: 260, description: "Banana, apple juice, spirulina, peach" },
    { id: "juiceland-peachy-green", name: "Peachy Green", calories: 220, description: "Peach, spinach, apple, coconut water" },
    { id: "juiceland-morning-glory", name: "Morning Glory", calories: 210, description: "Banana, orange juice, strawberry, apple" },
    { id: "juiceland-watermelon", name: "Watermelon High", calories: 140, description: "Watermelon, lime, coconut water" }
  ],
  "Power Smoothies": [
    { id: "juiceland-protein-power", name: "Protein Power Smoothie", calories: 320, description: "Plant protein, banana, almond milk" },
    { id: "juiceland-recovery", name: "Recovery Punch", calories: 290, description: "Banana, apple juice, hemp protein, spirulina" },
    { id: "juiceland-muscle-up", name: "Muscle Up", calories: 340, description: "Peanut butter, banana, protein, almond milk" },
    { id: "juiceland-green-energy", name: "Green Energy", calories: 220, description: "Spinach, kale, apple, ginger" }
  ],
  "Fresh Pressed Juices": [
    { id: "juiceland-green-juice", name: "Green Juice", calories: 120, description: "Cucumber, celery, kale, lemon, ginger" },
    { id: "juiceland-carrot-juice", name: "Carrot Apple Ginger", calories: 95, description: "Fresh carrot, apple, ginger" },
    { id: "juiceland-beet-juice", name: "Beet Boost", calories: 110, description: "Beet, carrot, apple, lemon" },
    { id: "juiceland-celery-juice", name: "Pure Celery", calories: 40, description: "100% organic celery juice" }
  ],
  "Wellness Shots": [
    { id: "juiceland-ginger-shot", name: "Ginger Shot", calories: 15, description: "Pure ginger with lemon and cayenne" },
    { id: "juiceland-turmeric-shot", name: "Turmeric Shot", calories: 20, description: "Turmeric, black pepper, lemon" },
    { id: "juiceland-wheatgrass-shot", name: "Wheatgrass Shot", calories: 10, description: "Fresh wheatgrass juice" },
    { id: "juiceland-immunity-shot", name: "Immunity Booster Shot", calories: 25, description: "Ginger, turmeric, citrus, echinacea" }
  ],
  "Superfood Bowls": [
    { id: "juiceland-acai-bowl", name: "Acai Bowl", calories: 380, description: "Acai blend topped with granola and fruit" },
    { id: "juiceland-dragon-bowl", name: "Dragon Bowl", calories: 390, description: "Dragonfruit blend with coconut" },
    { id: "juiceland-pitaya-bowl", name: "Pitaya Bowl", calories: 360, description: "Pitaya blend with fresh fruit toppings" },
    { id: "juiceland-green-bowl", name: "Green Bowl", calories: 340, description: "Spirulina blend with granola and honey" }
  ],
  "Healthy Snacks": [
    { id: "juiceland-energy-bites", name: "Energy Protein Bites", calories: 160, description: "Dates, nuts, protein powder" },
    { id: "juiceland-chia-pudding", name: "Chia Seed Pudding", calories: 190, description: "Chia seeds, almond milk, vanilla" },
    { id: "juiceland-granola", name: "House-Made Granola", calories: 240, description: "Oats, nuts, seeds, honey" },
    { id: "juiceland-fruit-cup", name: "Fresh Fruit Cup", calories: 90, description: "Seasonal fresh-cut fruits" }
  ]
};

export const juicelandItems: FastFoodItem[] = Object.values(JUICELAND_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "JuiceLand",
      item: item.name,
      calories: item.calories,
      category: Object.entries(JUICELAND_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );