import { FastFoodItem } from '../types';

const CARIBOU_CATEGORIES = {
  "Hot Coffee": [
    { id: "caribou-light", name: "Light Roast", calories: 5, description: "Smooth, bright morning blend" },
    { id: "caribou-medium", name: "Caribou Blend", calories: 5, description: "Signature medium roast" },
    { id: "caribou-dark", name: "Mahogany Dark Roast", calories: 5, description: "Bold, smoky dark roast" },
    { id: "caribou-decaf", name: "Decaf", calories: 5, description: "Decaffeinated coffee" }
  ],
  "Signature Drinks": [
    { id: "caribou-latte", name: "Caffe Latte", calories: 180, description: "Espresso with steamed milk" },
    { id: "caribou-mocha", name: "Caffe Mocha", calories: 430, description: "Espresso with chocolate and steamed milk" },
    { id: "caribou-cappuccino", name: "Cappuccino", calories: 140, description: "Espresso topped with foamy milk" },
    { id: "caribou-americano", name: "Americano", calories: 10, description: "Espresso with hot water" },
    { id: "caribou-caramel-hc", name: "Caramel High Rise", calories: 380, description: "Caramel and espresso with whipped cream" }
  ],
  "Cold Press": [
    { id: "caribou-cold-press", name: "Cold Press Coffee", calories: 5, description: "Smooth cold-brewed coffee" },
    { id: "caribou-nitro", name: "Nitro Cold Press", calories: 5, description: "Nitrogen-infused cold press" },
    { id: "caribou-vanilla-cp", name: "Vanilla Cold Press", calories: 120, description: "Cold press with vanilla" }
  ],
  "Coolers & Blended": [
    { id: "caribou-cooler", name: "Caribou Cooler", calories: 410, description: "Blended coffee drink" },
    { id: "caribou-mint-condition", name: "Mint Condition", calories: 530, description: "Mint chocolate blended drink" },
    { id: "caribou-malt-cooler", name: "Malted Mocha Cooler", calories: 670, description: "Chocolate malt blended drink" }
  ],
  "Tea & Other": [
    { id: "caribou-chai", name: "Chai Tea Latte", calories: 290, description: "Spiced chai with steamed milk" },
    { id: "caribou-green-tea", name: "Green Tea Latte", calories: 240, description: "Japanese green tea with milk" },
    { id: "caribou-hot-chocolate", name: "Hot Chocolate", calories: 430, description: "Rich hot chocolate" }
  ],
  "Food": [
    { id: "caribou-bagel", name: "Everything Bagel", calories: 290, description: "Classic everything bagel" },
    { id: "caribou-muffin", name: "Morning Glory Muffin", calories: 460, description: "Hearty morning muffin" },
    { id: "caribou-scone", name: "Vanilla Bean Scone", calories: 420, description: "Sweet vanilla scone" },
    { id: "caribou-donut", name: "Old Fashioned Donut", calories: 280, description: "Classic cake donut" }
  ]
};

export const caribouItems: FastFoodItem[] = Object.values(CARIBOU_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Caribou Coffee",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CARIBOU_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );