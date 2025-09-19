import { FastFoodItem } from '../types';

const VOODOO_DOUGHNUT_CATEGORIES = {
  "Signature Creations": [
    { id: "voodoo-bacon-maple", name: "Bacon Maple Bar", calories: 400 },
    { id: "voodoo-voodoo", name: "Voodoo Doll", calories: 340 },
    { id: "voodoo-captain", name: "Captain My Captain", calories: 290 },
    { id: "voodoo-dirt", name: "Dirt Doughnut", calories: 280 },
    { id: "voodoo-old-dirty", name: "Old Dirty Bastard", calories: 420 },
    { id: "voodoo-grape-ape", name: "Grape Ape", calories: 310 },
    { id: "voodoo-marshall", name: "Marshall Mathers", calories: 270 },
    { id: "voodoo-loop", name: "Loop", calories: 240 },
    { id: "voodoo-memphis-mafia", name: "Memphis Mafia", calories: 460 }
  ],
  "Classic Favorites": [
    { id: "voodoo-glazed", name: "Portland Cream", calories: 300 },
    { id: "voodoo-chocolate", name: "Chocolate Ring", calories: 280 },
    { id: "voodoo-maple", name: "Maple Bar", calories: 330 },
    { id: "voodoo-apple", name: "Apple Fritter", calories: 380 },
    { id: "voodoo-cake", name: "Chocolate Cake", calories: 290 }
  ],
  "Vegan Doughnuts": [
    { id: "voodoo-vegan-cream", name: "Vegan Cream Filled", calories: 290 },
    { id: "voodoo-vegan-apple", name: "Vegan Apple Fritter", calories: 320 },
    { id: "voodoo-vegan-pb", name: "Vegan PB&J", calories: 310 }
  ],
  "Specialty Doughnuts": [
    { id: "voodoo-ring-fire", name: "Ring of Fire", calories: 280 },
    { id: "voodoo-tangfastic", name: "Tangfastic", calories: 270 },
    { id: "voodoo-oh-captain", name: "Oh Captain, My Captain", calories: 320 },
    { id: "voodoo-school-daze", name: "School Daze", calories: 290 }
  ],
  "Beverages": [
    { id: "voodoo-coffee", name: "Coffee", calories: 5 },
    { id: "voodoo-cold-brew", name: "Cold Brew", calories: 5 },
    { id: "voodoo-hot-chocolate", name: "Hot Chocolate", calories: 180 }
  ]
};

export const voodooDoughnutItems: FastFoodItem[] = Object.values(VOODOO_DOUGHNUT_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Voodoo Doughnut",
      item: item.name,
      calories: item.calories,
      category: Object.entries(VOODOO_DOUGHNUT_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );