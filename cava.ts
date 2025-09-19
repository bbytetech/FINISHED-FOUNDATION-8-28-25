import { FastFoodItem } from '../types';

const CAVA_CATEGORIES = {
  "Signature Bowls": [
    { id: "cava-greens-grains", name: "Greens & Grains Bowl", calories: 670, description: "SuperGreens, grains, hummus, falafel, roasted vegetables, tzatziki" },
    { id: "cava-lentils-bowl", name: "Lentils & Avocado Bowl", calories: 590, description: "Lentils, brown rice, avocado, tomatoes, cucumber, tahini" },
    { id: "cava-mediterranean", name: "Mediterranean Bowl", calories: 620, description: "RightRice, hummus, grilled chicken, feta, olives, Greek vinaigrette" },
    { id: "cava-chicken-bowl", name: "Grilled Chicken Bowl", calories: 550, description: "Grilled chicken, SuperGreens, hummus, tzatziki, lemon herb tahini" }
  ],
  "Plant-Powered Bowls": [
    { id: "cava-falafel", name: "Falafel Bowl", calories: 640, description: "Falafel, hummus, tabbouleh, pickled onions, tahini" },
    { id: "cava-harissa-bowl", name: "Harissa Honey Chicken Bowl", calories: 580, description: "Harissa honey chicken, RightRice, roasted vegetables" },
    { id: "cava-riced-cauli", name: "Riced Cauliflower Bowl", calories: 490, description: "Cauliflower rice, roasted vegetables, hummus, tahini" }
  ],
  "Fresh Sides & Dips": [
    { id: "cava-hummus", name: "Classic Hummus & Pita", calories: 440, description: "Traditional hummus with warm pita bread" },
    { id: "cava-seasonal-soup", name: "Seasonal Soup", calories: 320, description: "Chef's seasonal soup selection" },
    { id: "cava-pita-chips", name: "Pita Chips", calories: 180, description: "Crispy seasoned pita chips" }
  ],
  "Proteins & Add-Ons": [
    { id: "cava-spicy-lamb", name: "Spicy Lamb Meatballs", calories: 690, description: "Mediterranean-spiced lamb meatballs" },
    { id: "cava-grilled-chicken", name: "Grilled Chicken", calories: 180, description: "Herb-marinated grilled chicken" },
    { id: "cava-falafel-side", name: "Falafel (3 pieces)", calories: 240, description: "Crispy chickpea falafel" }
  ],
  "Fresh Dressings": [
    { id: "cava-tahini-caesar", name: "Tahini Caesar", calories: 470, description: "Creamy tahini-based caesar dressing" },
    { id: "cava-greek-vinaigrette", name: "Greek Vinaigrette", calories: 120, description: "Classic Greek dressing" },
    { id: "cava-lemon-herb", name: "Lemon Herb Tahini", calories: 190, description: "Bright citrus tahini dressing" }
  ]
};

export const cavaItems: FastFoodItem[] = Object.values(CAVA_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "CAVA",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CAVA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );