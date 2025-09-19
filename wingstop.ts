import { FastFoodItem } from '../types';

const WINGSTOP_CATEGORIES = {
  "Classic Wings": [
    { id: "wingstop-classic-8", name: "Classic Wings (8 pc)", calories: 640 },
    { id: "wingstop-classic-12", name: "Classic Wings (12 pc)", calories: 960 },
    { id: "wingstop-classic-15", name: "Classic Wings (15 pc)", calories: 1200 },
    { id: "wingstop-classic-20", name: "Classic Wings (20 pc)", calories: 1600 },
    { id: "wingstop-classic-30", name: "Classic Wings (30 pc)", calories: 2400 },
    { id: "wingstop-classic-40", name: "Classic Wings (40 pc)", calories: 3200 },
    { id: "wingstop-classic-50", name: "Classic Wings (50 pc)", calories: 4000 }
  ],
  "Boneless Wings": [
    { id: "wingstop-boneless-8", name: "Boneless Wings (8 pc)", calories: 590 },
    { id: "wingstop-boneless-12", name: "Boneless Wings (12 pc)", calories: 885 },
    { id: "wingstop-boneless-15", name: "Boneless Wings (15 pc)", calories: 1105 },
    { id: "wingstop-boneless-20", name: "Boneless Wings (20 pc)", calories: 1475 },
    { id: "wingstop-boneless-30", name: "Boneless Wings (30 pc)", calories: 2210 },
    { id: "wingstop-boneless-40", name: "Boneless Wings (40 pc)", calories: 2950 },
    { id: "wingstop-boneless-50", name: "Boneless Wings (50 pc)", calories: 3685 }
  ],
  "Hand-Breaded Tenders": [
    { id: "wingstop-tenders-3", name: "Chicken Tenders (3 pc)", calories: 360 },
    { id: "wingstop-tenders-5", name: "Chicken Tenders (5 pc)", calories: 600 },
    { id: "wingstop-tenders-8", name: "Chicken Tenders (8 pc)", calories: 960 }
  ],
  "Fresh-Cut Sides": [
    { id: "wingstop-fries", name: "Seasoned Fries", calories: 380 },
    { id: "wingstop-voodoo-fries", name: "Louisiana Voodoo Fries", calories: 910 },
    { id: "wingstop-buffalo-fries", name: "Buffalo Ranch Fries", calories: 840 },
    { id: "wingstop-cheese-fries", name: "Cheese Fries", calories: 780 },
    { id: "wingstop-veggie-sticks", name: "Fresh Veggie Sticks", calories: 40 },
    { id: "wingstop-rolls", name: "Fresh-Baked Rolls (2)", calories: 260 }
  ],
  "Signature Dips & Sauces": [
    { id: "wingstop-ranch", name: "Ranch Dip", calories: 270 },
    { id: "wingstop-bleu-cheese", name: "Bleu Cheese Dip", calories: 260 },
    { id: "wingstop-honey-mustard", name: "Honey Mustard Dip", calories: 220 },
    { id: "wingstop-extra-sauce", name: "Extra Wing Sauce", calories: 80 }
  ],
  "Drinks & Refreshments": [
    { id: "wingstop-coke", name: "Coca-Cola (20 oz)", calories: 240 },
    { id: "wingstop-sprite", name: "Sprite (20 oz)", calories: 240 },
    { id: "wingstop-dr-pepper", name: "Dr Pepper (20 oz)", calories: 240 },
    { id: "wingstop-lemonade", name: "Lemonade (20 oz)", calories: 280 }
  ]
};

export const wingstopItems: FastFoodItem[] = Object.values(WINGSTOP_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Wingstop",
      item: item.name,
      calories: item.calories,
      category: Object.entries(WINGSTOP_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );