import { FastFoodItem } from '../types';

const LEGAL_SEAFOODS_CATEGORIES = {
  "New England Classics": [
    { id: "legal-clam-chowder", name: "New England Clam Chowder", calories: 220, description: "Award-winning creamy chowder with clams and potatoes" },
    { id: "legal-lobster-roll", name: "Maine Lobster Roll", calories: 580, description: "Classic lobster salad on a toasted roll" },
    { id: "legal-crab-cakes", name: "Maryland Crab Cakes", calories: 480, description: "Jumbo lump crab, minimal filler" },
    { id: "legal-stuffed-shrimp", name: "Baked Stuffed Shrimp", calories: 440, description: "Jumbo shrimp with buttery crab stuffing" }
  ],
  "Fresh Catch": [
    { id: "legal-grilled-salmon", name: "Grilled Atlantic Salmon", calories: 540, description: "Sustainably sourced, simply grilled" },
    { id: "legal-baked-cod", name: "Baked Boston Cod", calories: 420, description: "Seasoned crumbs, lemon butter" },
    { id: "legal-seared-tuna", name: "Seared Yellowfin Tuna", calories: 380, description: "Sesame crusted, ginger soy sauce" },
    { id: "legal-grilled-swordfish", name: "Grilled Swordfish", calories: 460, description: "Lemon caper butter" },
    { id: "legal-baked-scallops", name: "Baked Sea Scallops", calories: 520, description: "Buttery crumbs, seasonal vegetables" }
  ],
  "Fried Favorites": [
    { id: "legal-fish-chips", name: "Fish & Chips", calories: 780, description: "Crispy beer battered cod, tartar sauce" },
    { id: "legal-fried-clams", name: "Fried Clams", calories: 690, description: "Whole belly clams, tartar sauce" },
    { id: "legal-fried-shrimp", name: "Fried Gulf Shrimp", calories: 650, description: "Crispy golden brown, cocktail sauce" },
    { id: "legal-fisherman-platter", name: "Fisherman's Platter", calories: 1240, description: "Shrimp, scallops, clams, fish, onion strings" }
  ],
  "Starters & Small Plates": [
    { id: "legal-calamari", name: "Crispy Calamari", calories: 460, description: "Rhode Island style with hot peppers" },
    { id: "legal-shrimp-cocktail", name: "Jumbo Shrimp Cocktail", calories: 120, description: "Traditional cocktail sauce" },
    { id: "legal-oysters", name: "Freshly Shucked Oysters (6)", calories: 120, description: "Raw on the half shell" },
    { id: "legal-clams", name: "Littleneck Clams (6)", calories: 100, description: "Raw on the half shell" },
    { id: "legal-tuna-tartare", name: "Tuna Tartare", calories: 310, description: "Avocado, cucumber, ginger" }
  ],
  "Soups & Salads": [
    { id: "legal-lobster-bisque", name: "Lobster Bisque", calories: 340, description: "Creamy with chunks of lobster" },
    { id: "legal-caesar", name: "Classic Caesar Salad", calories: 380, description: "Romaine, croutons, parmesan" },
    { id: "legal-house-salad", name: "House Salad", calories: 220, description: "Mixed greens, cherry tomatoes, cucumber" }
  ],
  "Sides": [
    { id: "legal-jasmine-rice", name: "Jasmine Rice", calories: 180, description: "Steamed" },
    { id: "legal-french-fries", name: "French Fries", calories: 320, description: "Sea salt seasoned" },
    { id: "legal-coleslaw", name: "Coleslaw", calories: 140, description: "Creamy dressing" },
    { id: "legal-broccoli", name: "Broccoli", calories: 90, description: "Steamed" },
    { id: "legal-mashed-potatoes", name: "Mashed Potatoes", calories: 240, description: "Buttery and creamy" }
  ],
  "Desserts": [
    { id: "legal-key-lime", name: "Key Lime Pie", calories: 420, description: "Fresh lime, graham cracker crust" },
    { id: "legal-boston-cream", name: "Boston Cream Pie", calories: 480, description: "Chocolate sauce, rum caramel" },
    { id: "legal-cheesecake", name: "New York Cheesecake", calories: 520, description: "Seasonal berries" }
  ]
};

export const legalSeafoodsItems: FastFoodItem[] = Object.values(LEGAL_SEAFOODS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Legal Sea Foods",
      item: item.name,
      calories: item.calories,
      category: Object.entries(LEGAL_SEAFOODS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );