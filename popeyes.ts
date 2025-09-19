import { FastFoodItem } from '../types';

const POPEYES_CATEGORIES = {
  "Louisiana Chicken": [
    { id: "popeyes-spicy-breast", name: "Spicy Chicken Breast", calories: 350, description: "Signature spicy chicken" },
    { id: "popeyes-spicy-thigh", name: "Spicy Chicken Thigh", calories: 280, description: "Spicy dark meat" },
    { id: "popeyes-spicy-wing", name: "Spicy Chicken Wing", calories: 210, description: "Spicy wing" },
    { id: "popeyes-spicy-leg", name: "Spicy Chicken Leg", calories: 160, description: "Spicy drumstick" },
    { id: "popeyes-mild-breast", name: "Mild Chicken Breast", calories: 380, description: "Classic mild chicken" },
    { id: "popeyes-mild-thigh", name: "Mild Chicken Thigh", calories: 290, description: "Mild dark meat" },
    { id: "popeyes-mild-wing", name: "Mild Chicken Wing", calories: 210, description: "Mild wing" },
    { id: "popeyes-mild-leg", name: "Mild Chicken Leg", calories: 160, description: "Mild drumstick" }
  ],
  "Popeyes® Sandwiches": [
    { id: "popeyes-classic-sandwich", name: "Classic Chicken Sandwich", calories: 699, description: "Signature chicken sandwich" },
    { id: "popeyes-spicy-sandwich", name: "Spicy Chicken Sandwich", calories: 700, description: "Spicy chicken sandwich" },
    { id: "popeyes-blackened-sandwich", name: "Blackened Chicken Sandwich", calories: 550, description: "Blackened chicken breast" },
    { id: "popeyes-spicy-blackened", name: "Spicy Blackened Chicken Sandwich", calories: 550, description: "Spicy blackened chicken" }
  ],
  "Handcrafted Tenders": [
    { id: "popeyes-tenders-3", name: "Handcrafted Tenders (3 pc)", calories: 340, description: "Mild chicken tenders" },
    { id: "popeyes-tenders-5", name: "Handcrafted Tenders (5 pc)", calories: 567, description: "Mild chicken tenders" },
    { id: "popeyes-blackened-tenders-3", name: "Blackened Tenders (3 pc)", calories: 170, description: "Blackened tenders" },
    { id: "popeyes-blackened-tenders-5", name: "Blackened Tenders (5 pc)", calories: 283, description: "Blackened tenders" }
  ],
  "Seafood Favorites": [
    { id: "popeyes-shrimp-8", name: "Popcorn Shrimp", calories: 290, description: "Crispy popcorn shrimp" },
    { id: "popeyes-fish-fillet", name: "Flounder Fish Fillet", calories: 670, description: "Crispy fish fillet" },
    { id: "popeyes-seafood-po-boy", name: "Shrimp Po' Boy", calories: 690, description: "Classic shrimp sandwich" }
  ],
  "Southern Sides": [
    { id: "popeyes-cajun-fries", name: "Cajun Fries", calories: 268, description: "Seasoned french fries" },
    { id: "popeyes-red-beans", name: "Red Beans & Rice", calories: 230, description: "New Orleans style" },
    { id: "popeyes-biscuit", name: "Buttermilk Biscuit", calories: 260, description: "Fresh-baked biscuit" },
    { id: "popeyes-mashed-potatoes", name: "Mashed Potatoes with Cajun Gravy", calories: 110, description: "Creamy mashed potatoes" },
    { id: "popeyes-coleslaw", name: "Coleslaw", calories: 140, description: "Creamy coleslaw" },
    { id: "popeyes-mac-cheese", name: "Mac & Cheese", calories: 290, description: "Creamy mac and cheese" },
    { id: "popeyes-green-beans", name: "Green Beans", calories: 40, description: "Seasoned green beans" },
    { id: "popeyes-corn", name: "Corn on the Cob", calories: 190, description: "Sweet corn" }
  ],
  "Popeyes® Sauces": [
    { id: "popeyes-bayou-buffalo", name: "Bayou Buffalo Sauce", calories: 80, description: "Spicy buffalo sauce" },
    { id: "popeyes-blackened-ranch", name: "Blackened Ranch Sauce", calories: 150, description: "Creamy ranch" },
    { id: "popeyes-buttermilk-ranch", name: "Buttermilk Ranch Sauce", calories: 140, description: "Classic ranch" },
    { id: "popeyes-mardi-gras", name: "Mardi Gras Mustard Sauce", calories: 100, description: "Creole mustard" },
    { id: "popeyes-sweet-heat", name: "Sweet Heat Sauce", calories: 70, description: "Sweet and spicy" }
  ],
  "Sweet Treats": [
    { id: "popeyes-pie-apple", name: "Cinnamon Apple Pie", calories: 230, description: "Flaky crust pie" },
    { id: "popeyes-pie-peach", name: "Peach Pie", calories: 230, description: "Southern peach pie" },
    { id: "popeyes-pie-strawberry", name: "Strawberry & Cream Cheese Pie", calories: 230, description: "Cream cheese pie" }
  ],
  "Ice Cold Drinks": [
    { id: "popeyes-pepsi", name: "Pepsi (Medium)", calories: 200, description: "Fountain drink" },
    { id: "popeyes-diet-pepsi", name: "Diet Pepsi (Medium)", calories: 0, description: "Zero calorie" },
    { id: "popeyes-mtn-dew", name: "Mountain Dew (Medium)", calories: 240, description: "Citrus soda" },
    { id: "popeyes-dr-pepper", name: "Dr Pepper (Medium)", calories: 180, description: "Fountain drink" },
    { id: "popeyes-sweet-tea", name: "Sweet Tea (Medium)", calories: 130, description: "Southern sweet tea" },
    { id: "popeyes-unsweet-tea", name: "Unsweetened Tea (Medium)", calories: 0, description: "Fresh-brewed tea" },
    { id: "popeyes-lemonade", name: "Lemonade (Medium)", calories: 150, description: "Fresh lemonade" }
  ]
};

export const popeyesItems: FastFoodItem[] = Object.values(POPEYES_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Popeyes",
      item: item.name,
      calories: item.calories,
      category: Object.entries(POPEYES_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );