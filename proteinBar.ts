import { FastFoodItem } from '../types';

const PROTEIN_BAR_CATEGORIES = {
  "Bowls": [
    { id: "protein-bar-spinach-pesto", name: "Spinach & Pesto Bowl", calories: 510, description: "Quinoa, spinach, chicken, pesto, parmesan" },
    { id: "protein-bar-el-greco", name: "El Greco Bowl", calories: 540, description: "Quinoa, chicken, hummus, feta, cucumber, tomato" },
    { id: "protein-bar-buffalo", name: "Buffalo Bowl", calories: 580, description: "Quinoa, chicken, buffalo sauce, blue cheese, celery" },
    { id: "protein-bar-mexicali", name: "Mexicali Bowl", calories: 620, description: "Quinoa, chicken, black beans, avocado, salsa" }
  ],
  "Wraps": [
    { id: "protein-bar-spinach-wrap", name: "Spinach & Pesto Wrap", calories: 480, description: "Spinach, chicken, pesto, parmesan in a whole wheat wrap" },
    { id: "protein-bar-buffalo-wrap", name: "Buffalo Wrap", calories: 520, description: "Chicken, buffalo sauce, blue cheese, celery in a whole wheat wrap" },
    { id: "protein-bar-mexicali-wrap", name: "Mexicali Wrap", calories: 560, description: "Chicken, black beans, avocado, salsa in a whole wheat wrap" }
  ],
  "Salads": [
    { id: "protein-bar-superfood", name: "Superfood Salad", calories: 380, description: "Kale, quinoa, blueberries, almonds, goat cheese" },
    { id: "protein-bar-kale-caesar", name: "Kale Caesar Salad", calories: 420, description: "Kale, parmesan, croutons, caesar dressing" }
  ],
  "Shakes": [
    { id: "protein-bar-vanilla", name: "Vanilla Protein Shake", calories: 240, description: "Vanilla protein, almond milk, banana" },
    { id: "protein-bar-chocolate", name: "Chocolate Protein Shake", calories: 260, description: "Chocolate protein, almond milk, banana" },
    { id: "protein-bar-pbj", name: "PB & J Protein Shake", calories: 320, description: "Peanut butter, strawberry, protein, almond milk" }
  ],
  "Smoothies": [
    { id: "protein-bar-green", name: "Green Smoothie", calories: 210, description: "Spinach, kale, apple, banana, ginger" },
    { id: "protein-bar-berry", name: "Berry Smoothie", calories: 230, description: "Mixed berries, banana, almond milk" }
  ]
};

export const proteinBarItems: FastFoodItem[] = Object.values(PROTEIN_BAR_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Protein Bar & Kitchen",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PROTEIN_BAR_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );