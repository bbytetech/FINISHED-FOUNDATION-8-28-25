import { FastFoodItem } from '../types';

export const BENIHANA_CATEGORIES = {
  "Hibachi Entrees": [
    { id: "benihana-hibachi-chicken", name: "Hibachi Chicken", calories: 780, description: "Tender chicken breast grilled with vegetables" },
    { id: "benihana-hibachi-steak", name: "Hibachi Steak", calories: 850, description: "Premium steak grilled to perfection" },
    { id: "benihana-hibachi-shrimp", name: "Hibachi Shrimp", calories: 640, description: "Succulent shrimp grilled with butter" },
    { id: "benihana-combo-chicken-shrimp", name: "Chicken & Shrimp Combo", calories: 890, description: "Best of both worlds" },
    { id: "benihana-combo-steak-chicken", name: "Steak & Chicken Combo", calories: 920, description: "Perfect surf & turf combo" }
  ],
  "Sushi & Sashimi": [
    { id: "benihana-california-roll", name: "California Roll", calories: 320, description: "Crab, avocado, cucumber" },
    { id: "benihana-spicy-tuna", name: "Spicy Tuna Roll", calories: 290, description: "Fresh tuna with spicy sauce" },
    { id: "benihana-dragon-roll", name: "Dragon Roll", calories: 450, description: "Eel, avocado, cucumber" }
  ],
  "Appetizers & Starters": [
    { id: "benihana-edamame", name: "Edamame", calories: 180, description: "Steamed soybeans with sea salt" },
    { id: "benihana-gyoza", name: "Gyoza", calories: 320, description: "Pan-fried pork dumplings" },
    { id: "benihana-tempura", name: "Shrimp Tempura", calories: 410, description: "Crispy battered shrimp" }
  ],
  "Soups & Salads": [
    { id: "benihana-miso-soup", name: "Miso Soup", calories: 60, description: "Traditional Japanese soup" },
    { id: "benihana-onion-soup", name: "Onion Soup", calories: 45, description: "Clear broth with mushrooms" },
    { id: "benihana-house-salad", name: "House Salad with Ginger Dressing", calories: 130, description: "Fresh greens with signature dressing" }
  ],
  "Sides & Accompaniments": [
    { id: "benihana-fried-rice", name: "Hibachi Fried Rice", calories: 370, description: "Grilled with vegetables and egg" },
    { id: "benihana-vegetables", name: "Hibachi Vegetables", calories: 140, description: "Seasonal grilled vegetables" },
    { id: "benihana-noodles", name: "Hibachi Noodles", calories: 320, description: "Stir-fried udon noodles" }
  ],
  "Desserts": [
    { id: "benihana-ice-cream", name: "Green Tea Ice Cream", calories: 180, description: "Traditional matcha flavor" },
    { id: "benihana-cheesecake", name: "Tempura Cheesecake", calories: 450, description: "Crispy fried NY cheesecake" },
    { id: "benihana-mochi", name: "Mochi Ice Cream", calories: 210, description: "Ice cream wrapped in rice dough" }
  ]
};

export const benihanaItems: FastFoodItem[] = Object.values(BENIHANA_CATEGORIES)
  .flatMap(category =>
    category.map(item => ({
      id: item.id,
      restaurant: "Benihana",
      item: item.name,
      calories: item.calories,
      description: (item as any).description,
      category: Object.entries(BENIHANA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );