import { FastFoodItem } from '../types';

// Export categories for menu organization
export const NOBU_CATEGORIES = {
  "Cold Dishes & Sashimi": [
    { id: "nobu-yellowtail", name: "Yellowtail Sashimi with Jalapeño", calories: 220 },
    { id: "nobu-tuna-tataki", name: "Tuna Tataki with Ponzu", calories: 180 },
    { id: "nobu-tiradito", name: "Tiradito Nobu Style", calories: 210 },
    { id: "nobu-new-style-salmon", name: "New Style Salmon Sashimi", calories: 240 },
    { id: "nobu-lobster-shiitake", name: "Lobster Salad with Shiitake", calories: 280 }
  ],
  "Nobu Signature Hot Dishes": [
    { id: "nobu-black-cod", name: "Black Cod with Miso", calories: 420 },
    { id: "nobu-rock-shrimp", name: "Rock Shrimp Tempura", calories: 380 },
    { id: "nobu-wagyu", name: "Wagyu Beef", calories: 580 },
    { id: "nobu-king-crab", name: "King Crab Tempura", calories: 440 },
    { id: "nobu-lobster-wasabi", name: "Lobster with Wasabi Pepper", calories: 460 }
  ],
  "Nobu Style Rolls": [
    { id: "nobu-spicy-tuna", name: "Spicy Tuna Roll", calories: 290 },
    { id: "nobu-california", name: "California Roll", calories: 310 },
    { id: "nobu-soft-shell-crab", name: "Soft Shell Crab Roll", calories: 380 },
    { id: "nobu-yellowtail-roll", name: "Yellowtail Scallion Roll", calories: 260 },
    { id: "nobu-house-special", name: "Nobu House Special Roll", calories: 420 }
  ],
  "Premium Nigiri & Sashimi": [
    { id: "nobu-tuna-nigiri", name: "Tuna Nigiri (2 pc)", calories: 120 },
    { id: "nobu-salmon-nigiri", name: "Salmon Nigiri (2 pc)", calories: 140 },
    { id: "nobu-yellowtail-nigiri", name: "Yellowtail Nigiri (2 pc)", calories: 130 },
    { id: "nobu-eel-nigiri", name: "Eel Nigiri (2 pc)", calories: 160 }
  ],
  "Nobu Signature Dishes": [
    { id: "nobu-miso-soup", name: "Nobu Miso Soup", calories: 120 },
    { id: "nobu-edamame", name: "Spicy Edamame", calories: 180 },
    { id: "nobu-tempura", name: "Assorted Tempura", calories: 420 },
    { id: "nobu-tobanyaki", name: "Toban Yaki", calories: 380 }
  ],
  "Nobu Sweet Selections": [
    { id: "nobu-mochi", name: "Mochi Ice Cream Selection", calories: 220 },
    { id: "nobu-chocolate-bento", name: "Chocolate Bento Box", calories: 440 },
    { id: "nobu-green-tea", name: "Green Tea Ice Cream", calories: 180 }
  ]
};

// Transform categories into a flat array for the menu
export const nobuItems: FastFoodItem[] = Object.values(NOBU_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Nobu",
      item: item.name,
      calories: item.calories,
      category: Object.entries(NOBU_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );