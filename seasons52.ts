import { FastFoodItem } from '../types';

const SEASONS_52_CATEGORIES = {
  "Starters & Small Plates": [
    { id: "s52-flatbread-mushroom", name: "Wild Mushroom Flatbread", calories: 380 },
    { id: "s52-flatbread-pesto", name: "Pesto Chicken Flatbread", calories: 420 },
    { id: "s52-tuna-tartare", name: "Ahi Tuna Tartare", calories: 280 },
    { id: "s52-crab-cake", name: "Lump Crab Cake", calories: 340 },
    { id: "s52-shrimp-scampi", name: "Shrimp Scampi Skillet", calories: 310 }
  ],
  "Garden Fresh Soups & Salads": [
    { id: "s52-butternut-soup", name: "Butternut Squash Soup", calories: 220 },
    { id: "s52-spinach-salad", name: "Spinach & Pear Salad", calories: 280 },
    { id: "s52-harvest-salad", name: "Harvest Salad", calories: 340 },
    { id: "s52-mediterranean", name: "Mediterranean Chicken Salad", calories: 430 }
  ],
  "Wood-Grilled Entrees": [
    { id: "s52-filet-mignon-6", name: "6 oz Filet Mignon", calories: 380 },
    { id: "s52-filet-mignon-8", name: "8 oz Filet Mignon", calories: 490 },
    { id: "s52-ribeye", name: "13 oz Ribeye", calories: 820 },
    { id: "s52-ny-strip", name: "13 oz NY Strip", calories: 760 },
    { id: "s52-pork-chop", name: "Bone-in Pork Chop", calories: 570 },
    { id: "s52-chicken-marsala", name: "Chicken Marsala", calories: 620 },
    { id: "s52-chicken", name: "Wood-Grilled Chicken", calories: 590 }
  ],
  "Fresh Seafood": [
    { id: "s52-chilean-bass", name: "Chilean Sea Bass", calories: 410 },
    { id: "s52-rainbow-trout", name: "Rainbow Trout", calories: 320 },
    { id: "s52-atlantic-cod", name: "Atlantic Cod", calories: 320 },
    { id: "s52-mahi-mango", name: "Mahi Mahi + Mango Salsa", calories: 310 },
    { id: "s52-ahi-tuna-steak", name: "Ahi Tuna Steak", calories: 290 },
    { id: "s52-shrimp-scampi", name: "Shrimp Scampi", calories: 580 },
    { id: "s52-salmon", name: "Atlantic Salmon", calories: 580 }
  ],
  "Seasonal Power Bowls": [
    { id: "s52-santa-fe", name: "Santa Fe Bowl", calories: 640 },
    { id: "s52-banh-mi", name: "Banh Mi Bowl", calories: 580 },
    { id: "s52-buddha", name: "Buddha Bowl", calories: 520 },
    { id: "s52-korean", name: "Korean BBQ Bowl", calories: 680 }
  ],
  "Fresh Sides": [
    { id: "s52-au-gratin", name: "Potatoes Au Gratin", calories: 440 },
    { id: "s52-garlic-whipped", name: "Garlic Whipped Potatoes", calories: 280 },
    { id: "s52-seasonal-veggies", name: "Seasonal Veggies", calories: 110 },
    { id: "s52-sauteed-spinach", name: "Sautéed Spinach", calories: 150 },
    { id: "s52-french-fries", name: "French Fries", calories: 360 },
    { id: "s52-asparagus", name: "Wood-Grilled Asparagus", calories: 100 },
    { id: "s52-brussels", name: "Brussels Sprouts", calories: 250 },
    { id: "s52-rice", name: "Jasmine Rice", calories: 220 }
  ],
  "Mini Indulgences": [
    { id: "s52-macadamia-brownie", name: "Macadamia Nut Brownie", calories: 1230 },
    { id: "s52-key-lime", name: "Key Lime Pie", calories: 820 },
    { id: "s52-creme-brulee", name: "Crème Brûlée", calories: 810 },
    { id: "s52-seasonal-cheesecake", name: "Seasonal Cheesecake", calories: 930 }
  ]
};

export const seasons52Items: FastFoodItem[] = Object.values(SEASONS_52_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Seasons 52",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SEASONS_52_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );