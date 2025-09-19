import { FastFoodItem } from '../types';

const BOILING_CRAB_CATEGORIES = {
  "Seafood Boils": [
    { id: "boiling-shrimp", name: "Shrimp (1 lb)", calories: 420, description: "Headless, shell-on shrimp" },
    { id: "boiling-crawfish", name: "Crawfish (1 lb)", calories: 380, description: "Seasonal Louisiana crawfish" },
    { id: "boiling-crab-legs", name: "Snow Crab Legs (1 lb)", calories: 320, description: "Clusters of snow crab legs" },
    { id: "boiling-king-crab", name: "King Crab Legs (1 lb)", calories: 340, description: "Premium Alaskan king crab" },
    { id: "boiling-lobster", name: "Whole Lobster", calories: 440, description: "Maine lobster" },
    { id: "boiling-clams", name: "Clams (1 lb)", calories: 280, description: "Fresh littleneck clams" },
    { id: "boiling-mussels", name: "Mussels (1 lb)", calories: 290, description: "Black mussels" }
  ],
  "Boil Sauces & Spice Levels": [
    { id: "boiling-whole-shabang", name: "The Whole Sha-Bang", calories: 180, description: "Blend of all sauces" },
    { id: "boiling-rajun-cajun", name: "Rajun Cajun", calories: 160, description: "Traditional Louisiana style" },
    { id: "boiling-lemon-pepper", name: "Lemon Pepper", calories: 140, description: "Zesty citrus blend" },
    { id: "boiling-garlic-butter", name: "Garlic Butter", calories: 220, description: "Rich garlic butter sauce" }
  ],
  "Fried Baskets": [
    { id: "boiling-fried-catfish", name: "Fried Catfish Basket", calories: 680, description: "Cornmeal crusted, with fries" },
    { id: "boiling-fried-shrimp", name: "Fried Shrimp Basket", calories: 720, description: "Breaded shrimp, with fries" },
    { id: "boiling-fried-oysters", name: "Fried Oyster Basket", calories: 640, description: "Breaded oysters, with fries" },
    { id: "boiling-chicken-wings", name: "Cajun Wings", calories: 580, description: "Spicy chicken wings" }
  ],
  "Starters & Sides": [
    { id: "boiling-gumbo", name: "Seafood Gumbo", calories: 320, description: "Rich roux with seafood" },
    { id: "boiling-cajun-fries", name: "Cajun Fries", calories: 380, description: "Seasoned french fries" },
    { id: "boiling-corn", name: "Corn on the Cob (1 pc)", calories: 180, description: "Boiled sweet corn" },
    { id: "boiling-potatoes", name: "Cajun Potatoes", calories: 240, description: "Seasoned red potatoes" },
    { id: "boiling-sausage", name: "Andouille Sausage", calories: 320, description: "Spicy Cajun sausage" },
    { id: "boiling-hush-puppies", name: "Hush Puppies", calories: 340, description: "Fried cornmeal fritters" }
  ],
  "Extras": [
    { id: "boiling-garlic-bread", name: "Garlic Bread", calories: 280, description: "Buttery garlic toast" },
    { id: "boiling-rice", name: "Steamed Rice", calories: 180, description: "White rice" },
    { id: "boiling-coleslaw", name: "Coleslaw", calories: 160, description: "Creamy house-made slaw" }
  ]
};

export const boilingCrabItems: FastFoodItem[] = Object.values(BOILING_CRAB_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "The Boiling Crab",
      item: item.name,
      calories: item.calories,
      category: Object.entries(BOILING_CRAB_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );