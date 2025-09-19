import { FastFoodItem } from '../types';

const CHEESECAKE_FACTORY_CATEGORIES = {
  "Appetizers & Snacks": [
    { id: "cf-avocado-eggrolls", name: "Avocado Eggrolls", calories: 960 },
    { id: "cf-tex-mex-eggrolls", name: "Tex Mex Eggrolls", calories: 930 },
    { id: "cf-buffalo-wings", name: "Buffalo Wings", calories: 950 },
    { id: "cf-korean-wings", name: "Korean Fried Chicken Wings", calories: 1080 },
    { id: "cf-lettuce-wraps", name: "Asian Chicken Lettuce Wraps", calories: 580 },
    { id: "cf-factory-nachos", name: "Factory Nachos", calories: 1840 },
    { id: "cf-fried-mac", name: "Fried Mac and Cheese", calories: 1060 }
  ],
  "Fresh Salads": [
    { id: "cf-santa-fe", name: "Santa Fe Salad", calories: 930 },
    { id: "cf-caesar", name: "Caesar Salad", calories: 880 },
    { id: "cf-chinese-chicken", name: "Chinese Chicken Salad", calories: 920 },
    { id: "cf-cobb", name: "Cobb Salad", calories: 1060 },
    { id: "cf-bbq-ranch", name: "BBQ Ranch Chicken Salad", calories: 980 }
  ],
  "Flatbread Pizzas": [
    { id: "cf-margherita-pizza", name: "Margherita Pizza", calories: 1230 },
    { id: "cf-pepperoni-pizza", name: "Pepperoni Pizza", calories: 1340 },
    { id: "cf-bbq-chicken-pizza", name: "BBQ Chicken Pizza", calories: 1280 },
    { id: "cf-mushroom-pizza", name: "Fresh Mushroom Pizza", calories: 1180 }
  ],
  "Pasta Specialties": [
    { id: "cf-cajun-jambalaya", name: "Cajun Jambalaya Pasta", calories: 1830 },
    { id: "cf-carbonara", name: "Pasta Carbonara", calories: 2100 },
    { id: "cf-da-vinci", name: "Pasta Da Vinci", calories: 1520 },
    { id: "cf-four-cheese", name: "Four Cheese Pasta", calories: 1520 },
    { id: "cf-louisiana", name: "Louisiana Chicken Pasta", calories: 2120 }
  ],
  "Factory Specialties": [
    { id: "cf-chicken-madeira", name: "Chicken Madeira", calories: 1460 },
    { id: "cf-chicken-piccata", name: "Chicken Piccata", calories: 1280 },
    { id: "cf-chicken-marsala", name: "Chicken Marsala", calories: 1240 },
    { id: "cf-orange-chicken", name: "Orange Chicken", calories: 1880 },
    { id: "cf-crusted-chicken", name: "Crusted Chicken Romano", calories: 1420 },
    { id: "cf-chicken-costoletta", name: "Chicken Costoletta", calories: 1560 }
  ],
  "Steaks & Chops": [
    { id: "cf-ribeye", name: "Ribeye Steak", calories: 1390 },
    { id: "cf-filet", name: "Filet Mignon", calories: 910 },
    { id: "cf-pork-chop", name: "Grilled Pork Chop", calories: 1260 },
    { id: "cf-steak-diane", name: "Steak Diane", calories: 1280 }
  ],
  "Fresh Seafood": [
    { id: "cf-sea-bass", name: "Chilean Sea Bass", calories: 390 },
    { id: "cf-salmon", name: "Fresh Grilled Salmon", calories: 440 },
    { id: "cf-fish-chips", name: "Fish & Chips", calories: 1880 },
    { id: "cf-shrimp-scampi", name: "Shrimp Scampi", calories: 1280 }
  ],
  "Glamburgers": [
    { id: "cf-americana-burger", name: "Americana Burger", calories: 1420 },
    { id: "cf-bacon-burger", name: "Bacon-Bacon Burger", calories: 1680 },
    { id: "cf-mushroom-burger", name: "Mushroom Burger", calories: 1380 },
    { id: "cf-macaroni-burger", name: "Macaroni and Cheese Burger", calories: 1740 }
  ],
  "Sandwiches": [
    { id: "cf-club", name: "Club Sandwich", calories: 1180 },
    { id: "cf-chicken-sandwich", name: "Chicken Sandwich", calories: 1090 },
    { id: "cf-grilled-cheese", name: "Grilled Cheese & Tomato", calories: 1060 },
    { id: "cf-california", name: "California Sandwich", calories: 1210 }
  ],
  "Famous Cheesecakes": [
    { id: "cf-original", name: "Original Cheesecake", calories: 830 },
    { id: "cf-fresh-strawberry", name: "Fresh Strawberry Cheesecake", calories: 1000 },
    { id: "cf-oreo", name: "Oreo Dream Extreme Cheesecake", calories: 1600 },
    { id: "cf-chocolate", name: "Godiva Chocolate Cheesecake", calories: 1380 },
    { id: "cf-red-velvet", name: "Red Velvet Cheesecake", calories: 1380 },
    { id: "cf-tiramisu", name: "Tiramisu Cheesecake", calories: 1230 },
    { id: "cf-peanut-butter", name: "Reese's PB Chocolate Cheesecake", calories: 1510 },
    { id: "cf-white-chocolate", name: "White Chocolate Raspberry Cheesecake", calories: 1250 },
    { id: "cf-dulce", name: "Dulce de Leche Caramel Cheesecake", calories: 1280 }
  ],
  "Specialty Desserts": [
    { id: "cf-carrot-cake", name: "Carrot Cake", calories: 1720 },
    { id: "cf-chocolate-cake", name: "Linda's Chocolate Fudge Cake", calories: 1770 },
    { id: "cf-warm-apple", name: "Warm Apple Crisp", calories: 1740 },
    { id: "cf-lemoncello", name: "Lemoncello Cream Torte", calories: 1280 }
  ]
};

export const cheesecakeFactoryItems: FastFoodItem[] = Object.values(CHEESECAKE_FACTORY_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "The Cheesecake Factory",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CHEESECAKE_FACTORY_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );