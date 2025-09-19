import { FastFoodItem } from '../types';

const CITY_BBQ_CATEGORIES = {
  "Smoked Meats": [
    { id: "cb-brisket", name: "Beef Brisket", calories: 640, allergens: [] },
    { id: "cb-pulled-pork", name: "Pulled Pork", calories: 520, allergens: [] },
    { id: "cb-pulled-chicken", name: "Pulled Chicken", calories: 480, allergens: [] },
    { id: "cb-smoked-turkey", name: "Smoked Turkey", calories: 450, allergens: [] },
    { id: "cb-sausage", name: "Texas-Style Sausage", calories: 400, allergens: ["soy"] },
    { id: "cb-ribs", name: "St. Louis–Cut Ribs (Half Slab)", calories: 720, allergens: [] }
  ],
  "Sandwiches": [
    { id: "cb-lo-los-pulled-pork", name: "LoLo's Pulled Pork", calories: 600, allergens: ["gluten", "sesame"] },
    { id: "cb-more-cowbell", name: "More Cowbell", calories: 780, allergens: ["gluten", "dairy", "sesame"] },
    { id: "cb-nashville-hot-chicken", name: "Nashville Hot Chicken", calories: 700, allergens: ["gluten", "egg", "sesame"] },
    { id: "cb-pulled-chicken-sandwich", name: "Pulled Chicken Sandwich", calories: 550, allergens: ["gluten", "sesame"] },
    { id: "cb-smoked-turkey-sandwich", name: "Smoked Turkey Sandwich", calories: 530, allergens: ["gluten", "sesame"] }
  ],
  "Samplers": [
    { id: "cb-city-sampler", name: "City Sampler", calories: 1200, allergens: ["soy"] },
    { id: "cb-judges-sampler", name: "Judge's Sampler", calories: 1800, allergens: ["soy"] },
    { id: "cb-motherload", name: "The Motherload", calories: 2500, allergens: ["soy"] }
  ],
  "Sides": [
    { id: "cb-mac-cheese", name: "Mac & Cheese", calories: 300, allergens: ["gluten", "dairy"] },
    { id: "cb-baked-beans", name: "Baked Beans with Brisket", calories: 260, allergens: [] },
    { id: "cb-cornbread", name: "Cornbread", calories: 210, allergens: ["gluten", "egg", "dairy"] },
    { id: "cb-potato-salad", name: "Potato Salad", calories: 220, allergens: ["egg"] },
    { id: "cb-green-beans", name: "Green Beans with Bacon", calories: 130, allergens: [] },
    { id: "cb-hush-puppies", name: "Hush Puppies", calories: 250, allergens: ["gluten", "egg"] },
    { id: "cb-fries", name: "Fresh-Cut Fries", calories: 320, allergens: [] },
    { id: "cb-corn-pudding", name: "Corn Pudding", calories: 240, allergens: ["egg", "dairy"] },
    { id: "cb-collards", name: "Collards with Pork", calories: 180, allergens: [] }
  ],
  "Desserts": [
    { id: "cb-peach-cobbler", name: "Peach Cobbler", calories: 400, allergens: ["gluten", "egg", "dairy"] },
    { id: "cb-banana-pudding", name: "Banana Pudding", calories: 350, allergens: ["egg", "dairy"] },
    { id: "cb-triple-chocolate-cake", name: "Triple Chocolate Cake", calories: 450, allergens: ["gluten", "egg", "dairy", "soy"] }
  ]
};

export const cityBbqItems: FastFoodItem[] = Object.entries(CITY_BBQ_CATEGORIES)
  .flatMap(([category, items]) =>
    items.map(item => ({
      id: item.id,
      restaurant: "City Barbeque",
      item: item.name,
      calories: item.calories,
      allergens: item.allergens,
      category
    }))
  );