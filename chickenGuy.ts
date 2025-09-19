import { FastFoodItem } from '../types';

const CHICKEN_GUY_CATEGORIES = {
  "Signature Tenders": [
    { id: "cg-tenders-3", name: "Chicken Tenders (3 pc)", calories: 330, description: "Hand-pounded and breaded fresh daily" },
    { id: "cg-tenders-5", name: "Chicken Tenders (5 pc)", calories: 550, description: "Hand-pounded and breaded fresh daily" },
    { id: "cg-tenders-combo-3", name: "Tenders Combo (3 pc)", calories: 780, description: "With fries and drink" },
    { id: "cg-tenders-combo-5", name: "Tenders Combo (5 pc)", calories: 990, description: "With fries and drink" }
  ],
  "Sandwiches": [
    { id: "cg-classic", name: "The Classic", calories: 420, description: "Crispy chicken, lettuce, tomato, Guy's special sauce" },
    { id: "cg-bourbon-brown", name: "Bourbon Brown Sugar BBQ", calories: 480, description: "BBQ sauce, slaw, pickles, BBQ kettle chips" },
    { id: "cg-buffalo", name: "Buffalo", calories: 450, description: "Buffalo sauce, blue cheese slaw, buttermilk ranch" },
    { id: "cg-sweet-heat", name: "Sweet Heat", calories: 460, description: "Sweet chili sauce, spicy mayo, pickles, slaw" }
  ],
  "Flavortown Sauces": [
    { id: "cg-special-sauce", name: "Special Sauce", calories: 120, description: "Guy's signature sauce" },
    { id: "cg-bourbon-bbq", name: "Bourbon Brown Sugar BBQ", calories: 90, description: "Sweet and tangy BBQ" },
    { id: "cg-buffalo", name: "Buffalo", calories: 80, description: "Classic buffalo sauce" },
    { id: "cg-ranch", name: "Buttermilk Ranch", calories: 140, description: "Creamy ranch" },
    { id: "cg-honey-mustard", name: "Honey Mustard", calories: 110, description: "Sweet and tangy" },
    { id: "cg-sweet-sriracha", name: "Sweet Sriracha", calories: 90, description: "Sweet and spicy" },
    { id: "cg-chipotle", name: "Chipotle", calories: 100, description: "Smoky and spicy" },
    { id: "cg-lemon-pepper", name: "Lemon Pepper", calories: 70, description: "Citrus and pepper" }
  ],
  "Loaded Fries": [
    { id: "cg-fries-plain", name: "Chicken Guy! Fries", calories: 320, description: "Crispy fries with signature seasoning" },
    { id: "cg-fries-loaded", name: "Loaded Fries", calories: 580, description: "SMC (super melty cheese), bacon, green onions" },
    { id: "cg-fries-buffalo", name: "Buffalo Fries", calories: 490, description: "Buffalo sauce, blue cheese crumbles" },
    { id: "cg-fries-bbq", name: "BBQ Fries", calories: 460, description: "BBQ sauce, SMC, bacon" }
  ],
  "Mac Daddy Mac 'N' Cheese": [
    { id: "cg-mac-classic", name: "Classic Mac", calories: 540, description: "Super melty cheese blend" },
    { id: "cg-mac-bacon", name: "Bacon Mac", calories: 620, description: "Crispy bacon, green onions" },
    { id: "cg-mac-buffalo", name: "Buffalo Mac", calories: 580, description: "Buffalo chicken, blue cheese crumbles" }
  ],
  "Flavortown Shakes": [
    { id: "cg-shake-vanilla", name: "Triple Double Vanilla", calories: 580, description: "Triple vanilla, double thick" },
    { id: "cg-shake-chocolate", name: "Triple Double Chocolate", calories: 640, description: "Triple chocolate, double thick" },
    { id: "cg-shake-oreo", name: "Oreo Cookies & Cream", calories: 690, description: "Vanilla shake with Oreo pieces" }
  ],
  "Beverages": [
    { id: "cg-fountain", name: "Fountain Drink", calories: 180, description: "Assorted sodas" },
    { id: "cg-lemonade", name: "Fresh Lemonade", calories: 160, description: "House-made daily" },
    { id: "cg-iced-tea", name: "Iced Tea", calories: 0, description: "Fresh-brewed unsweetened" }
  ]
};

export const chickenGuyItems: FastFoodItem[] = Object.values(CHICKEN_GUY_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Guy Fieri's Chicken Guy!",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CHICKEN_GUY_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );