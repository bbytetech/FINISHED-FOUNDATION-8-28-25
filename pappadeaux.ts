import { FastFoodItem } from '../types';

const PAPPADEAUX_CATEGORIES = {
  "Creole Classics": [
    { id: "pappadeaux-gumbo", name: "Seafood Gumbo", calories: 380, description: "Rich roux with shrimp, crab and andouille sausage" },
    { id: "pappadeaux-etouffee", name: "Crawfish Étouffée", calories: 520, description: "Crawfish tails in spicy Cajun sauce" },
    { id: "pappadeaux-jambalaya", name: "Pasta Mardi Gras", calories: 940, description: "Crawfish, andouille sausage, creole sauce" },
    { id: "pappadeaux-red-beans", name: "Red Beans & Rice", calories: 420, description: "With andouille sausage" }
  ],
  "Seafood Specialties": [
    { id: "pappadeaux-redfish", name: "Blackened Redfish", calories: 580, description: "Creole spices, dirty rice" },
    { id: "pappadeaux-mahi", name: "Grilled Mahi Mahi", calories: 460, description: "Pineapple pico de gallo" },
    { id: "pappadeaux-salmon", name: "Atlantic Salmon", calories: 540, description: "Grilled with lemon butter" },
    { id: "pappadeaux-tilapia", name: "Tilapia Pontchartrain", calories: 620, description: "Topped with crawfish, shrimp, mushrooms" },
    { id: "pappadeaux-catfish", name: "Fried Catfish", calories: 680, description: "Cornmeal crusted, tartar sauce" }
  ],
  "Shellfish & Platters": [
    { id: "pappadeaux-shrimp-platter", name: "Fried Shrimp Platter", calories: 720, description: "Gulf shrimp, french fries, coleslaw" },
    { id: "pappadeaux-seafood-platter", name: "Pappadeaux Platter", calories: 1240, description: "Fried shrimp, crawfish, catfish, oysters" },
    { id: "pappadeaux-crab-legs", name: "Snow Crab Legs", calories: 480, description: "Steamed with drawn butter" },
    { id: "pappadeaux-lobster-tail", name: "Lobster Tail", calories: 420, description: "Broiled with lemon butter" }
  ],
  "Louisiana Favorites": [
    { id: "pappadeaux-crawfish", name: "Crawfish Platter", calories: 680, description: "Fried tail meat, Cajun fries" },
    { id: "pappadeaux-po-boy-shrimp", name: "Shrimp Po-Boy", calories: 740, description: "Dressed with lettuce, tomato, mayo" },
    { id: "pappadeaux-po-boy-oyster", name: "Oyster Po-Boy", calories: 760, description: "Dressed with lettuce, tomato, mayo" },
    { id: "pappadeaux-po-boy-catfish", name: "Catfish Po-Boy", calories: 720, description: "Dressed with lettuce, tomato, mayo" }
  ],
  "Starters": [
    { id: "pappadeaux-calamari", name: "Crispy Calamari", calories: 540, description: "Marinara and remoulade sauces" },
    { id: "pappadeaux-crab-cakes", name: "Crab Cakes", calories: 480, description: "Lump crab, remoulade sauce" },
    { id: "pappadeaux-oysters-dozen", name: "Oysters on Half Shell (Dozen)", calories: 240, description: "Fresh Gulf oysters" },
    { id: "pappadeaux-boudin", name: "Boudin Balls", calories: 420, description: "Fried Cajun sausage, creole mustard" },
    { id: "pappadeaux-shrimp-fondeaux", name: "Shrimp Fondeaux", calories: 580, description: "Shrimp, crab, spinach, cheese dip" }
  ],
  "Sides": [
    { id: "pappadeaux-dirty-rice", name: "Dirty Rice", calories: 240, description: "Traditional Cajun rice" },
    { id: "pappadeaux-cajun-fries", name: "Cajun Fries", calories: 320, description: "Seasoned french fries" },
    { id: "pappadeaux-coleslaw", name: "Coleslaw", calories: 180, description: "Creamy house-made" },
    { id: "pappadeaux-hush-puppies", name: "Hush Puppies", calories: 340, description: "Fried cornmeal fritters" },
    { id: "pappadeaux-green-beans", name: "Green Beans", calories: 120, description: "Sautéed with bacon" }
  ],
  "Desserts": [
    { id: "pappadeaux-bread-pudding", name: "Bread Pudding", calories: 680, description: "Whiskey sauce, vanilla ice cream" },
    { id: "pappadeaux-key-lime", name: "Key Lime Pie", calories: 520, description: "Graham cracker crust" },
    { id: "pappadeaux-cheesecake", name: "New York Cheesecake", calories: 580, description: "Praline sauce" }
  ]
};

export const pappadeauxItems: FastFoodItem[] = Object.values(PAPPADEAUX_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Pappadeaux Seafood Kitchen",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PAPPADEAUX_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );