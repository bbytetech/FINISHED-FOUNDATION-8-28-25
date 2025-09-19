import { FastFoodItem } from '../types';

const CONNIE_AND_TEDS_CATEGORIES = {
  "New England Classics": [
    { id: "connie-lobster-roll", name: "Maine Lobster Roll", calories: 580, description: "Warm with butter or cold with mayo" },
    { id: "connie-clam-cakes", name: "Rhode Island Clam Cakes", calories: 420, description: "Fried clam fritters" },
    { id: "connie-stuffies", name: "Stuffies", calories: 380, description: "Stuffed quahog clams" },
    { id: "connie-fish-chips", name: "Fish & Chips", calories: 780, description: "Beer battered cod, tartar sauce" }
  ],
  "Chowders & Soups": [
    { id: "connie-new-england", name: "New England Clam Chowder", calories: 320, description: "Creamy with clams and potatoes" },
    { id: "connie-rhode-island", name: "Rhode Island Clear Chowder", calories: 280, description: "Clear broth with clams" },
    { id: "connie-manhattan", name: "Manhattan Clam Chowder", calories: 260, description: "Tomato-based with clams" },
    { id: "connie-lobster-bisque", name: "Lobster Bisque", calories: 380, description: "Creamy with lobster meat" }
  ],
  "Raw Bar": [
    { id: "connie-oysters", name: "East Coast Oysters (6)", calories: 120, description: "Daily selection, mignonette" },
    { id: "connie-west-coast-oysters", name: "West Coast Oysters (6)", calories: 120, description: "Daily selection, mignonette" },
    { id: "connie-littlenecks", name: "Littleneck Clams (6)", calories: 100, description: "On the half shell" },
    { id: "connie-shellfish-platter", name: "Shellfish Platter", calories: 480, description: "Oysters, clams, shrimp, lobster" }
  ],
  "Seafood Entrees": [
    { id: "connie-fried-clams", name: "Fried Clams", calories: 680, description: "Whole belly clams, tartar sauce" },
    { id: "connie-grilled-salmon", name: "Grilled Atlantic Salmon", calories: 540, description: "Lemon butter sauce" },
    { id: "connie-lobster-dinner", name: "Steamed Lobster Dinner", calories: 620, description: "1.5 lb Maine lobster, drawn butter" },
    { id: "connie-scallops", name: "Pan-Seared Scallops", calories: 480, description: "Seasonal preparation" }
  ],
  "Sandwiches": [
    { id: "connie-crab-roll", name: "Crab Roll", calories: 520, description: "Jonah crab, mayo, butter toasted roll" },
    { id: "connie-shrimp-roll", name: "Shrimp Roll", calories: 480, description: "Poached shrimp, mayo, butter toasted roll" },
    { id: "connie-fish-sandwich", name: "Fried Fish Sandwich", calories: 640, description: "Cod, tartar sauce, lettuce, tomato" },
    { id: "connie-clam-roll", name: "Fried Clam Roll", calories: 680, description: "Whole belly clams, tartar sauce" }
  ],
  "Sides": [
    { id: "connie-fries", name: "French Fries", calories: 320, description: "Hand-cut" },
    { id: "connie-onion-rings", name: "Onion Rings", calories: 380, description: "Beer battered" },
    { id: "connie-coleslaw", name: "Coleslaw", calories: 180, description: "House-made" },
    { id: "connie-corn-on-cob", name: "Corn on the Cob", calories: 160, description: "Butter, salt" }
  ],
  "Desserts": [
    { id: "connie-indian-pudding", name: "Indian Pudding", calories: 420, description: "Molasses, cornmeal, vanilla ice cream" },
    { id: "connie-blueberry-pie", name: "Maine Blueberry Pie", calories: 480, description: "Wild Maine blueberries" }
  ]
};

export const connieAndTedsItems: FastFoodItem[] = Object.values(CONNIE_AND_TEDS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Connie & Ted's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CONNIE_AND_TEDS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );