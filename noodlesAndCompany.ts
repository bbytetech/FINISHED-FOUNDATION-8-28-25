import { FastFoodItem } from '../types';

// Export categories for menu organization
export const NOODLES_AND_COMPANY_CATEGORIES = {
  "World Famous Noodles": [
    { id: "nac-mac-cheese", name: "Wisconsin Mac & Cheese", calories: 980 },
    { id: "nac-mac-cheese-reg", name: "Wisconsin Mac & Cheese (Regular)", calories: 670 },
    { id: "nac-mac-cheese-small", name: "Wisconsin Mac & Cheese (Small)", calories: 470 },
    { id: "nac-buttered-noodles", name: "Buttered Noodles", calories: 660 },
    { id: "nac-penne-rosa", name: "Penne Rosa", calories: 640 },
    { id: "nac-spaghetti-meatballs", name: "Spaghetti & Meatballs", calories: 910 },
    { id: "nac-alfredo-mke", name: "Alfredo MontAmore", calories: 850 }
  ],
  "Asian Inspired": [
    { id: "nac-pad-thai", name: "Pad Thai", calories: 870 },
    { id: "nac-japanese-pan", name: "Japanese Pan Noodles", calories: 690 },
    { id: "nac-bangkok-curry", name: "Bangkok Curry", calories: 740 },
    { id: "nac-korean-noodles", name: "Korean BBQ Noodles", calories: 820 },
    { id: "nac-spicy-korean", name: "Spicy Korean Beef Noodles", calories: 950 }
  ],
  "Zoodles & Cauliflower": [
    { id: "nac-zucchini-rosa", name: "Zucchini Rosa", calories: 370 },
    { id: "nac-zucchini-garlic", name: "Zucchini Garlic & Wine", calories: 310 },
    { id: "nac-cauli-alfredo", name: "Cauliflower Rigatoni in Light Onion Cream", calories: 470 },
    { id: "nac-cauli-rosa", name: "Cauliflower Rigatoni Rosa", calories: 460 }
  ],
  "Fresh Salads": [
    { id: "nac-med-salad", name: "Mediterranean Salad", calories: 440 },
    { id: "nac-chicken-veggies", name: "Grilled Chicken & Veggies", calories: 320 },
    { id: "nac-caesar", name: "Caesar Salad", calories: 460 },
    { id: "nac-chinese-salad", name: "Chinese Chop Salad", calories: 540 }
  ],
  "Signature Soups": [
    { id: "nac-tomato-soup", name: "Tomato Basil Soup", calories: 240 },
    { id: "nac-thai-curry", name: "Thai Curry Soup", calories: 290 },
    { id: "nac-chicken-noodle", name: "Chicken Noodle Soup", calories: 180 }
  ],
  "Shareable Sides": [
    { id: "nac-potstickers", name: "Potstickers (4 pc)", calories: 290 },
    { id: "nac-korean-meatballs", name: "Korean BBQ Meatballs", calories: 340 },
    { id: "nac-cheesy-garlic", name: "Cheesy Garlic Bread", calories: 380 },
    { id: "nac-garlic-bread", name: "Garlic Bread", calories: 210 }
  ],
  "Protein Add-Ons": [
    { id: "nac-grilled-chicken", name: "Grilled Chicken Add-On", calories: 110 },
    { id: "nac-parmesan-chicken", name: "Parmesan-Crusted Chicken Add-On", calories: 170 },
    { id: "nac-tofu", name: "Marinated Tofu Add-On", calories: 90 },
    { id: "nac-beef", name: "Grilled Beef Add-On", calories: 150 },
    { id: "nac-shrimp", name: "Sautéed Shrimp Add-On", calories: 80 }
  ],
  "Sweet Treats": [
    { id: "nac-rice-krispy", name: "Rice Krispy", calories: 290 },
    { id: "nac-chocolate-cookie", name: "Chocolate Chunk Cookie", calories: 340 },
    { id: "nac-snickerdoodle", name: "Snickerdoodle Cookie", calories: 320 }
  ]
};

// Transform categories into a flat array for the menu
export const noodlesAndCompanyItems: FastFoodItem[] = Object.values(NOODLES_AND_COMPANY_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Noodles & Company",
      item: item.name,
      calories: item.calories
    }))
  );