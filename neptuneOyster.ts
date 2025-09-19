import { FastFoodItem } from '../types';

const NEPTUNE_OYSTER_CATEGORIES = {
  "Raw Bar": [
    { id: "neptune-oysters", name: "East Coast Oysters (6)", calories: 120, description: "Daily selection, mignonette" },
    { id: "neptune-west-coast-oysters", name: "West Coast Oysters (6)", calories: 120, description: "Daily selection, mignonette" },
    { id: "neptune-littlenecks", name: "Littleneck Clams (6)", calories: 100, description: "On the half shell" },
    { id: "neptune-shellfish-sampler", name: "Neptune Shellfish Sampler", calories: 340, description: "Oysters, clams, shrimp" }
  ],
  "Signature Dishes": [
    { id: "neptune-lobster-roll-hot", name: "Hot Lobster Roll", calories: 620, description: "Warm with butter" },
    { id: "neptune-lobster-roll-cold", name: "Cold Lobster Roll", calories: 580, description: "Mayo, celery, lemon" },
    { id: "neptune-neptune-johnnycake", name: "Neptune Johnnycake", calories: 420, description: "Honey butter, smoked trout tartare" },
    { id: "neptune-cioppino", name: "Cioppino", calories: 540, description: "Seafood stew, tomato broth" }
  ],
  "Entrees": [
    { id: "neptune-north-end-cioppino", name: "North End Cioppino", calories: 680, description: "Lobster, shellfish, grilled bread" },
    { id: "neptune-fried-ipswich-clams", name: "Fried Ipswich Clams", calories: 720, description: "Whole belly clams, tartar sauce" },
    { id: "neptune-grilled-salmon", name: "Grilled Salmon", calories: 540, description: "Seasonal preparation" },
    { id: "neptune-seared-scallops", name: "Seared Sea Scallops", calories: 480, description: "Brown butter, seasonal vegetables" }
  ],
  "Small Plates": [
    { id: "neptune-clam-chowder", name: "New England Clam Chowder", calories: 320, description: "Traditional creamy chowder" },
    { id: "neptune-tuna-crudo", name: "Yellowfin Tuna Crudo", calories: 280, description: "Olive oil, sea salt, citrus" },
    { id: "neptune-crab-cake", name: "Jumbo Lump Crab Cake", calories: 380, description: "Minimal filler, remoulade" },
    { id: "neptune-vitello-tonnato", name: "Vitello Tonnato", calories: 340, description: "Thinly sliced veal, tuna sauce" }
  ],
  "Salads": [
    { id: "neptune-caesar", name: "Caesar Salad", calories: 340, description: "Romaine, parmesan, croutons" },
    { id: "neptune-house-salad", name: "House Salad", calories: 220, description: "Mixed greens, seasonal vegetables" }
  ]
};

export const neptuneOysterItems: FastFoodItem[] = Object.values(NEPTUNE_OYSTER_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Neptune Oyster",
      item: item.name,
      calories: item.calories,
      category: Object.entries(NEPTUNE_OYSTER_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );