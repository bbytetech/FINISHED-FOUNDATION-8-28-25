import { FastFoodItem } from '../types';

const ZAXBYS_CATEGORIES = {
  "Zax Snax™": [
    { id: "zax-signature", name: "Signature Sandwich", calories: 750 },
    { id: "zax-spicy-signature", name: "Spicy Signature Sandwich", calories: 770 },
    { id: "zax-club", name: "Club Sandwich", calories: 810 },
    { id: "zax-grilled", name: "Grilled Chicken Sandwich", calories: 530 },
    { id: "zax-buffalo-blue", name: "Buffalo Blue Sandwich", calories: 790 }
  ],
  "World Famous Chicken Fingerz™": [
    { id: "zax-fingerz-4", name: "4 Chicken Fingerz", calories: 440 },
    { id: "zax-fingerz-5", name: "5 Chicken Fingerz", calories: 550 },
    { id: "zax-fingerz-6", name: "6 Chicken Fingerz", calories: 660 },
    { id: "zax-fingerz-plate", name: "Fingerz Plate", calories: 1040 },
    { id: "zax-big-zax-snak", name: "Big Zax Snak", calories: 920 }
  ],
  "Traditional Wings & Things": [
    { id: "zax-traditional-5", name: "Traditional Wings (5)", calories: 470 },
    { id: "zax-traditional-10", name: "Traditional Wings (10)", calories: 940 },
    { id: "zax-traditional-20", name: "Traditional Wings (20)", calories: 1880 },
    { id: "zax-boneless-5", name: "Boneless Wings (5)", calories: 440 },
    { id: "zax-boneless-10", name: "Boneless Wings (10)", calories: 880 },
    { id: "zax-boneless-20", name: "Boneless Wings (20)", calories: 1760 }
  ],
  "Fresh-Made Zalads®": [
    { id: "zax-house", name: "House Zalad", calories: 380 },
    { id: "zax-caesar", name: "Caesar Zalad", calories: 420 },
    { id: "zax-cobb", name: "Cobb Zalad", calories: 580 },
    { id: "zax-blue", name: "The Blue Zalad", calories: 540 },
    { id: "zax-garden", name: "Garden Zalad", calories: 270 }
  ],
  "Zax Kidz™ Meals": [
    { id: "zax-kidz-fingerz", name: "Kidz Fingerz (2)", calories: 220 },
    { id: "zax-kidz-sandwich", name: "Kidz Sandwich", calories: 290 },
    { id: "zax-kidz-wings", name: "Kidz Wings (3)", calories: 280 }
  ],
  "Zesty Sides": [
    { id: "zax-fries", name: "Crinkle Fries", calories: 350 },
    { id: "zax-toast", name: "Texas Toast", calories: 150 },
    { id: "zax-slaw", name: "Coleslaw", calories: 140 },
    { id: "zax-celery", name: "Celery", calories: 5 },
    { id: "zax-potato-chips", name: "Potato Chips", calories: 150 },
    { id: "zax-onion-rings", name: "Onion Rings", calories: 480 }
  ],
  "Zax Sauce® & Dips": [
    { id: "zax-zax-sauce", name: "Zax Sauce", calories: 150 },
    { id: "zax-ranch", name: "Ranch Sauce", calories: 140 },
    { id: "zax-honey-mustard", name: "Honey Mustard Sauce", calories: 140 },
    { id: "zax-buffalo", name: "Buffalo Sauce", calories: 50 },
    { id: "zax-sweet-spicy", name: "Sweet & Spicy Sauce", calories: 70 },
    { id: "zax-bbq", name: "BBQ Sauce", calories: 70 },
    { id: "zax-nuclear", name: "Nuclear Sauce", calories: 50 },
    { id: "zax-teriyaki", name: "Teriyaki Sauce", calories: 70 }
  ],
  "Sweet Indulgences": [
    { id: "zax-cookie", name: "Chocolate Chip Cookie", calories: 270 },
    { id: "zax-brownie", name: "Chocolate Brownie", calories: 350 },
    { id: "zax-funnel-cake", name: "Funnel Cake Fries", calories: 410 }
  ],
  "Beverages": [
    { id: "zax-coke", name: "Coca-Cola (Regular)", calories: 180 },
    { id: "zax-diet-coke", name: "Diet Coke (Regular)", calories: 0 },
    { id: "zax-sprite", name: "Sprite (Regular)", calories: 170 },
    { id: "zax-dr-pepper", name: "Dr Pepper (Regular)", calories: 180 },
    { id: "zax-sweet-tea", name: "Sweet Tea (Regular)", calories: 120 },
    { id: "zax-unsweet-tea", name: "Unsweetened Tea (Regular)", calories: 0 },
    { id: "zax-lemonade", name: "Lemonade (Regular)", calories: 150 }
  ],
  "Family Meals": [
    { id: "zax-20pc-fingerz", name: "20 Chicken Fingerz Family Pack", calories: 2200 },
    { id: "zax-30pc-fingerz", name: "30 Chicken Fingerz Family Pack", calories: 3300 },
    { id: "zax-40pc-fingerz", name: "40 Chicken Fingerz Family Pack", calories: 4400 },
    { id: "zax-25pc-wings", name: "25 Traditional Wings Family Pack", calories: 2350 },
    { id: "zax-50pc-wings", name: "50 Traditional Wings Family Pack", calories: 4700 }
  ]
};

export const zaxbysItems: FastFoodItem[] = Object.values(ZAXBYS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Zaxby's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(ZAXBYS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );