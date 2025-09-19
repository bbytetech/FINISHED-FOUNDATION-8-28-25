import { FastFoodItem } from '../types';

const PEETS_CATEGORIES = {
  "Hot Coffee": [
    { id: "peets-drip", name: "House Blend", calories: 5, description: "Signature medium roast blend" },
    { id: "peets-dark", name: "Major Dickason's Blend", calories: 5, description: "Full-bodied dark roast" },
    { id: "peets-light", name: "Cafe Domingo", calories: 5, description: "Medium-light roast blend" },
    { id: "peets-decaf", name: "Decaf House Blend", calories: 5, description: "Decaffeinated medium roast" }
  ],
  "Espresso Drinks": [
    { id: "peets-latte", name: "Caffe Latte", calories: 190, description: "Espresso with steamed milk" },
    { id: "peets-cappuccino", name: "Cappuccino", calories: 140, description: "Espresso topped with foam" },
    { id: "peets-americano", name: "Americano", calories: 15, description: "Espresso with hot water" },
    { id: "peets-mocha", name: "Caffe Mocha", calories: 290, description: "Espresso with chocolate" },
    { id: "peets-macchiato", name: "Caramel Macchiato", calories: 250, description: "Espresso marked with caramel" }
  ],
  "Cold Coffee": [
    { id: "peets-cold-brew", name: "Cold Brew", calories: 5, description: "Smooth cold-brewed coffee" },
    { id: "peets-iced-latte", name: "Iced Caffe Latte", calories: 180, description: "Espresso over cold milk" },
    { id: "peets-iced-mocha", name: "Iced Caffe Mocha", calories: 280, description: "Cold espresso with chocolate" },
    { id: "peets-javiva", name: "Javiva Blended Drink", calories: 260, description: "Blended coffee drink" }
  ],
  "Tea": [
    { id: "peets-black-tea", name: "English Breakfast Tea", calories: 0, description: "Classic black tea" },
    { id: "peets-green-tea", name: "Jasmine Green Tea", calories: 0, description: "Fragrant green tea" },
    { id: "peets-chai-latte", name: "Chai Tea Latte", calories: 240, description: "Spiced chai with milk" },
    { id: "peets-matcha-latte", name: "Matcha Green Tea Latte", calories: 200, description: "Japanese green tea latte" }
  ],
  "Food": [
    { id: "peets-bagel", name: "Plain Bagel", calories: 280, description: "Fresh-baked bagel" },
    { id: "peets-muffin", name: "Blueberry Muffin", calories: 460, description: "Fresh-baked muffin" },
    { id: "peets-scone", name: "Maple Oat Scone", calories: 420, description: "Fresh-baked scone" },
    { id: "peets-croissant", name: "Butter Croissant", calories: 340, description: "Flaky butter croissant" }
  ]
};

export const peetsItems: FastFoodItem[] = Object.values(PEETS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Peet's Coffee",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PEETS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );