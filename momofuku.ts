import { FastFoodItem } from '../types';

export const MOMOFUKU_CATEGORIES = {
  "Momofuku Signatures": [
    { id: "momofuku-pork-buns", name: "Pork Belly Buns", calories: 320 },
    { id: "momofuku-ramen", name: "Momofuku Ramen", calories: 780 },
    { id: "momofuku-spicy-noodles", name: "Spicy Cold Noodles", calories: 520 },
    { id: "momofuku-ginger-scallion", name: "Ginger Scallion Noodles", calories: 480 },
    { id: "momofuku-chilled-spicy", name: "Chilled Spicy Noodles", calories: 490 }
  ],
  "Small Plates & Bites": [
    { id: "momofuku-wings", name: "Korean Wings", calories: 440 },
    { id: "momofuku-rice-cakes", name: "Spicy Rice Cakes", calories: 380 },
    { id: "momofuku-kimchi", name: "Kimchi Stew", calories: 290 },
    { id: "momofuku-shiitake-buns", name: "Shiitake Buns", calories: 280 },
    { id: "momofuku-shrimp-buns", name: "Shrimp Buns", calories: 310 }
  ],
  "Noodles & Rice Bowls": [
    { id: "momofuku-dan-dan", name: "Dan Dan Noodles", calories: 620 },
    { id: "momofuku-beef-noodles", name: "Spicy Beef Noodle Soup", calories: 680 },
    { id: "momofuku-mushroom-ramen", name: "Mushroom Ramen", calories: 580 },
    { id: "momofuku-rice-bowl", name: "Pork Belly Rice Bowl", calories: 740 },
    { id: "momofuku-chicken-rice", name: "Ginger Chicken Rice", calories: 560 }
  ],
  "Momofuku Main Plates": [
    { id: "momofuku-chicken", name: "Fried Chicken", calories: 850 },
    { id: "momofuku-bo-ssam", name: "Bo Ssäm", calories: 920 },
    { id: "momofuku-short-rib", name: "Braised Short Rib", calories: 840 },
    { id: "momofuku-whole-fish", name: "Whole Fish Ssäm", calories: 760 }
  ],
  "Seasonal Sides": [
    { id: "momofuku-kimchi-plate", name: "Seasonal Kimchi Plate", calories: 120 },
    { id: "momofuku-roasted-carrots", name: "Roasted Carrots", calories: 180 },
    { id: "momofuku-brussels", name: "Roasted Brussels Sprouts", calories: 220 },
    { id: "momofuku-rice", name: "Steamed Rice", calories: 150 }
  ],
  "Milk Bar Desserts": [
    { id: "momofuku-crack-pie", name: "Crack Pie", calories: 440 },
    { id: "momofuku-cereal-milk", name: "Cereal Milk Soft Serve", calories: 280 },
    { id: "momofuku-cake-truffles", name: "Birthday Cake Truffles", calories: 320 },
    { id: "momofuku-cookies", name: "Corn Cookie", calories: 240 }
  ]
};

export const momofukuItems: FastFoodItem[] = Object.values(MOMOFUKU_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Momofuku",
      item: item.name,
      calories: item.calories,
      category: Object.entries(MOMOFUKU_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );