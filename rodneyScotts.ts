import { FastFoodItem } from '../types';

// Export categories for menu organization
const RODNEY_SCOTTS_CATEGORIES = {
  "Whole Hog BBQ": [
    { id: "rs-whole-hog", name: "Whole Hog Plate", calories: 820, description: "Signature pit-cooked whole hog" },
    { id: "rs-spare-ribs", name: "Spare Ribs (1/2 Rack)", calories: 760, description: "Dry-rubbed and smoked" },
    { id: "rs-chicken", name: "Smoked Chicken (Half)", calories: 540, description: "Rod's special rub" },
    { id: "rs-turkey", name: "Smoked Turkey", calories: 320, description: "Brined and smoked" },
    { id: "rs-rib-eye", name: "Smoked Prime Rib Eye", calories: 890, description: "Premium cut" }
  ],
  "South Carolina Sandwiches": [
    { id: "rs-pork-sandwich", name: "Whole Hog Sandwich", calories: 580, description: "Classic pulled pork" },
    { id: "rs-chicken-sandwich", name: "Rod's Original Sandwich", calories: 620, description: "Smoked chicken" },
    { id: "rs-catfish-sandwich", name: "Fried Catfish Sandwich", calories: 540, description: "Southern style" }
  ],
  "Lowcountry Sides": [
    { id: "rs-collards", name: "Collard Greens", calories: 160, description: "Smoked turkey seasoned" },
    { id: "rs-mac", name: "Mac & Cheese", calories: 420, description: "Southern style" },
    { id: "rs-fries", name: "Fresh Cut Fries", calories: 380, description: "Hand-cut daily" },
    { id: "rs-beans", name: "Baked Beans", calories: 290, description: "Pit-smoked" },
    { id: "rs-cornbread", name: "Cornbread", calories: 240, description: "Made fresh daily" }
  ],
  "Family Feasts": [
    { id: "rs-family-pork", name: "Family Pork Pack", calories: 2400, description: "Feeds 4-6" },
    { id: "rs-family-ribs", name: "Family Rib Pack", calories: 3200, description: "Feeds 4-6" },
    { id: "rs-family-mix", name: "Family Mixed Pack", calories: 2800, description: "Variety pack" }
  ],
  "Carolina Sauces": [
    { id: "rs-vinegar", name: "Carolina Vinegar Sauce", calories: 30, description: "Traditional vinegar" },
    { id: "rs-mustard", name: "Carolina Gold Mustard", calories: 45, description: "SC mustard sauce" },
    { id: "rs-spicy", name: "Spicy Vinegar Sauce", calories: 35, description: "Extra hot" },
    { id: "rs-sweet", name: "Sweet BBQ Sauce", calories: 60, description: "Tomato-based" }
  ]
};

export const rodneyScottsItems: FastFoodItem[] = Object.values(RODNEY_SCOTTS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Rodney Scott's BBQ",
      item: item.name,
      calories: item.calories,
      category: Object.entries(RODNEY_SCOTTS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );