import { FastFoodItem } from '../types';

const RUTHS_CHRIS_CATEGORIES = {
  "USDA Prime Steaks": [
    { id: "rc-filet", name: "Filet (11 oz)", calories: 500, description: "Center-cut tenderloin" },
    { id: "rc-ribeye", name: "Bone-In Ribeye (22 oz)", calories: 1370, description: "USDA Prime marbled ribeye" },
    { id: "rc-ny-strip", name: "New York Strip (16 oz)", calories: 1010, description: "USDA Prime strip steak" },
    { id: "rc-porterhouse", name: "Porterhouse for Two", calories: 1620, description: "40 oz USDA Prime cut" },
    { id: "rc-t-bone", name: "T-Bone (24 oz)", calories: 1480, description: "USDA Prime T-bone" }
  ],
  "Signature Chops": [
    { id: "rc-lamb-chops", name: "Lamb Chops", calories: 860, description: "New Zealand premium lamb" }
  ],
  "Ocean's Finest": [
    { id: "rc-lobster", name: "Live Maine Lobster", calories: 440, description: "Fresh-caught Maine lobster" },
    { id: "rc-salmon", name: "Fresh Salmon", calories: 580, description: "Atlantic salmon fillet" },
    { id: "rc-sea-bass", name: "Chilean Sea Bass", calories: 620, description: "Pan-seared sea bass" }
  ],
  "Poultry Selections": [
    { id: "rc-stuffed-chicken", name: "Stuffed Chicken Breast", calories: 720, description: "Herb-stuffed chicken" }
  ],
  "Soups & Greens": [
    { id: "rc-caesar", name: "Caesar Salad", calories: 260, description: "Classic tableside Caesar" },
    { id: "rc-wedge", name: "Iceberg Wedge", calories: 220, description: "Blue cheese & bacon" },
    { id: "rc-lobster-bisque", name: "Lobster Bisque", calories: 320, description: "Creamy lobster soup" }
  ],
  "Ruth's Signature Sides": [
    { id: "rc-potatoes", name: "Mashed Potatoes", calories: 440, description: "Creamy garlic mashed" },
    { id: "rc-asparagus", name: "Grilled Asparagus", calories: 100, description: "With hollandaise sauce" },
    { id: "rc-creamed-spinach", name: "Creamed Spinach", calories: 440, description: "Ruth's classic recipe" },
    { id: "rc-brussels", name: "Roasted Brussels Sprouts", calories: 180, description: "Honey butter glazed" },
    { id: "rc-sweet-potato", name: "Sweet Potato Casserole", calories: 380, description: "Pecan crust topping" }
  ],
  "Decadent Desserts": [
    { id: "rc-bread-pudding", name: "Bread Pudding", calories: 940, description: "Whiskey sauce" },
    { id: "rc-cheesecake", name: "Classic Cheesecake", calories: 820, description: "New York style" },
    { id: "rc-chocolate-cake", name: "Chocolate Sin Cake", calories: 780, description: "Rich chocolate cake" }
  ]
};

export const ruthsChrisItems: FastFoodItem[] = Object.values(RUTHS_CHRIS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Ruth's Chris",
      item: item.name,
      calories: item.calories,
      category: Object.entries(RUTHS_CHRIS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );