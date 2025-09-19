import { FastFoodItem } from '../types';

const THE_SHED_BBQ_CATEGORIES = {
  "Signature BBQ": [
    { id: "shed-pulled-pork", name: "Pulled Pork Plate", calories: 780 },
    { id: "shed-brisket", name: "Beef Brisket Plate", calories: 890 },
    { id: "shed-baby-backs", name: "Baby Back Ribs (1/2 Rack)", calories: 840 },
    { id: "shed-chicken", name: "BBQ Chicken (Half)", calories: 520 },
    { id: "shed-sausage", name: "Smoked Sausage Plate", calories: 680 }
  ],
  "Mississippi Sandwiches": [
    { id: "shed-pork-sandwich", name: "Pulled Pork Sandwich", calories: 560 },
    { id: "shed-brisket-sandwich", name: "Brisket Sandwich", calories: 640 },
    { id: "shed-chicken-sandwich", name: "BBQ Chicken Sandwich", calories: 480 }
  ],
  "Southern Sides": [
    { id: "shed-collards", name: "Collard Greens", calories: 160 },
    { id: "shed-mac", name: "Mac & Cheese", calories: 420 },
    { id: "shed-fries", name: "Fresh Cut Fries", calories: 380 },
    { id: "shed-beans", name: "BBQ Baked Beans", calories: 290 },
    { id: "shed-slaw", name: "Mississippi Slaw", calories: 190 },
    { id: "shed-potato-salad", name: "Southern Potato Salad", calories: 260 }
  ],
  "Family Feasts": [
    { id: "shed-family-pork", name: "Family Pork Pack", calories: 2400 },
    { id: "shed-family-ribs", name: "Family Rib Pack", calories: 3200 },
    { id: "shed-family-mix", name: "Family Mixed Pack", calories: 2800 }
  ],
  "The Shed Sauces": [
    { id: "shed-original", name: "Original BBQ Sauce", calories: 60 },
    { id: "shed-spicy", name: "Spicy BBQ Sauce", calories: 60 },
    { id: "shed-sweet", name: "Sweet & Tangy Sauce", calories: 70 },
    { id: "shed-mustard", name: "Mississippi Mustard Sauce", calories: 50 }
  ]
};

export const theShedBbqItems: FastFoodItem[] = Object.values(THE_SHED_BBQ_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "The Shed BBQ & Blues",
      item: item.name,
      calories: item.calories,
      category: Object.entries(THE_SHED_BBQ_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );