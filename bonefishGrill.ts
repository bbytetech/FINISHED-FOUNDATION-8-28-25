import { FastFoodItem } from '../types';

const BONEFISH_GRILL_CATEGORIES = {
  "Ocean's Appetizers": [
    { id: "bf-bang-bang-shrimp-app", name: "Bang Bang Shrimp", calories: 620, description: "Crispy shrimp, tossed in signature creamy, spicy sauce" },
    { id: "bf-wagyu-potstickers", name: "Wagyu Beef Potstickers", calories: 460, description: "Pan-seared dumplings with ponzu sauce" },
    { id: "bf-coconut-shrimp", name: "Coconut Shrimp", calories: 570, description: "Citrus-chili sauce" },
    { id: "bf-ahi-tuna", name: "Ahi Tuna Sashimi", calories: 280, description: "Premium sushi-grade tuna" },
    { id: "bf-imperial-dip", name: "Imperial Dip", calories: 760, description: "Warm, creamy fish dip with seasoned crostini" },
    { id: "bf-calamari", name: "Calamari", calories: 1160, description: "Flash-fried with cherry peppers" },
    { id: "bf-crab-cakes", name: "Maryland Crab Cakes", calories: 540, description: "Jumbo lump crab, red pepper aioli" }
  ],
  "Wood-Grilled Fish": [
    { id: "bf-chilean-bass", name: "Chilean Sea Bass", calories: 410, description: "Wood-grilled with miso sauce" },
    { id: "bf-rainbow-trout", name: "Rainbow Trout", calories: 320, description: "Wood-grilled with lemon butter" },
    { id: "bf-atlantic-cod", name: "Atlantic Cod", calories: 320, description: "Wood-grilled with lemon butter" },
    { id: "bf-mahi-mango", name: "Mahi Mahi + Mango Salsa", calories: 310, description: "Wood-grilled with tropical salsa" },
    { id: "bf-ahi-tuna-steak", name: "Ahi Tuna Steak", calories: 290, description: "Sesame-seared rare" },
    { id: "bf-shrimp-scampi", name: "Shrimp Scampi", calories: 580, description: "Garlic, white wine butter sauce" },
    { id: "bf-salmon", name: "Atlantic Salmon", calories: 580, description: "Wood-grilled with lemon butter" }
  ],
  "From the Land": [
    { id: "bf-filet-mignon-6", name: "6 oz. Filet Mignon", calories: 380, description: "Center-cut, wood-grilled" },
    { id: "bf-filet-mignon-8", name: "8 oz. Filet Mignon", calories: 490, description: "Center-cut, wood-grilled" },
    { id: "bf-ribeye", name: "13 oz. Ribeye", calories: 820, description: "Wood-grilled, well-marbled" },
    { id: "bf-ny-strip", name: "13 oz. NY Strip", calories: 760, description: "Wood-grilled center cut" },
    { id: "bf-pork-chop", name: "Bone-in Pork Chop", calories: 570, description: "Wood-grilled with mango salsa" }
  ],
  "Fresh Catch Bowls & Greens": [
    { id: "bf-bang-bang-bowl", name: "Bang Bang Shrimp Bowl", calories: 840, description: "With jasmine rice and Asian slaw" },
    { id: "bf-tuna-bowl", name: "Ahi Tuna Poke Bowl", calories: 720, description: "Sushi-grade tuna, avocado, mango" },
    { id: "bf-cobb-salad", name: "Grilled Cobb Salad", calories: 680, description: "Wood-grilled chicken or shrimp" },
    { id: "bf-caesar-salad", name: "Caesar Side Salad", calories: 210, description: "Hearts of romaine, garlic croutons" },
    { id: "bf-house-salad", name: "House Side Salad", calories: 120, description: "Mixed greens, tomatoes, citrus herb vinaigrette" }
  ],
  "Coastal Accompaniments": [
    { id: "bf-au-gratin", name: "Potatoes Au Gratin", calories: 440, description: "Sliced potatoes, creamy cheese sauce" },
    { id: "bf-garlic-whipped", name: "Garlic Whipped Potatoes", calories: 280, description: "Creamy mashed potatoes" },
    { id: "bf-seasonal-veggies", name: "Seasonal Veggies", calories: 110, description: "Chef's selection" },
    { id: "bf-sauteed-spinach", name: "Sautéed Spinach", calories: 150, description: "With garlic and herbs" },
    { id: "bf-french-fries", name: "French Fries", calories: 360, description: "Seasoned waffle fries" },
    { id: "bf-asparagus", name: "Wood-Grilled Asparagus", calories: 100, description: "With olive oil" },
    { id: "bf-brussels", name: "Brussels Sprouts", calories: 250, description: "With bacon and aged balsamic" },
    { id: "bf-rice", name: "Jasmine Rice", calories: 220, description: "Steamed aromatic rice" }
  ],
  "Sweet Waves": [
    { id: "bf-macadamia-brownie", name: "Macadamia Nut Brownie", calories: 1230, description: "Vanilla ice cream, chocolate sauce" },
    { id: "bf-key-lime", name: "Key Lime Pie", calories: 820, description: "Classic Florida style" },
    { id: "bf-creme-brulee", name: "Crème Brûlée", calories: 810, description: "Madagascar vanilla bean" },
    { id: "bf-seasonal-cheesecake", name: "Seasonal Cheesecake", calories: 930, description: "Chef's seasonal creation" }
  ]
};

export const bonefishGrillItems: FastFoodItem[] = Object.values(BONEFISH_GRILL_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Bonefish Grill",
      item: item.name,
      calories: item.calories,
      category: Object.entries(BONEFISH_GRILL_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );