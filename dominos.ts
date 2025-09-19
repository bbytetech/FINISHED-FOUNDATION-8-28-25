import { FastFoodItem } from '../types';

const DOMINOS_CATEGORIES = {
  "Handmade Pan Pizzas": [
    { id: "dominos-pan-pepperoni", name: "Handmade Pan Pepperoni", calories: 2720 },
    { id: "dominos-pan-cheese", name: "Handmade Pan Cheese", calories: 2400 },
    { id: "dominos-pan-supreme", name: "Handmade Pan Supreme", calories: 3040 },
    { id: "dominos-pan-meat", name: "Handmade Pan Meat Lover's", calories: 3280 },
    { id: "dominos-pan-veggie", name: "Handmade Pan Veggie", calories: 2320 },
    { id: "dominos-pan-hawaiian", name: "Handmade Pan Hawaiian", calories: 2560 }
  ],
  "Brooklyn Style Pizzas": [
    { id: "dominos-brooklyn-pepperoni", name: "Brooklyn Style Pepperoni", calories: 2320 },
    { id: "dominos-brooklyn-cheese", name: "Brooklyn Style Cheese", calories: 1920 },
    { id: "dominos-brooklyn-supreme", name: "Brooklyn Style Supreme", calories: 2640 },
    { id: "dominos-brooklyn-meat", name: "Brooklyn Style Meat Lover's", calories: 2960 },
    { id: "dominos-brooklyn-veggie", name: "Brooklyn Style Veggie", calories: 2000 },
    { id: "dominos-brooklyn-bbq", name: "Brooklyn Style BBQ Chicken", calories: 2400 }
  ],
  "Hand Tossed Pizzas": [
    { id: "dominos-pepperoni", name: "Pepperoni Pizza", calories: 2400 },
    { id: "dominos-cheese", name: "Cheese Pizza", calories: 2000 },
    { id: "dominos-supreme", name: "Supreme Pizza", calories: 2720 },
    { id: "dominos-meat-lovers", name: "Meat Lover's Pizza", calories: 3040 },
    { id: "dominos-veggie-lovers", name: "Veggie Lover's Pizza", calories: 2080 },
    { id: "dominos-hawaiian", name: "Hawaiian Luau Pizza", calories: 2320 },
    { id: "dominos-buffalo", name: "Buffalo Chicken Pizza", calories: 2560 },
    { id: "dominos-bbq-chicken", name: "BBQ Chicken Pizza", calories: 2480 },
    { id: "dominos-ultimate-cheese", name: "Ultimate Cheese Lover's Pizza", calories: 2240 },
    { id: "dominos-backyard-bbq", name: "Backyard BBQ Pizza", calories: 2600 },
    { id: "dominos-chicken-bacon", name: "Chicken Bacon Ranch Pizza", calories: 2520 }
  ],
  "Crunchy Thin Crust": [
    { id: "dominos-thin-pepperoni", name: "Thin Crust Pepperoni", calories: 2080 },
    { id: "dominos-thin-cheese", name: "Thin Crust Cheese", calories: 1760 },
    { id: "dominos-thin-supreme", name: "Thin Crust Supreme", calories: 2240 },
    { id: "dominos-thin-meat", name: "Thin Crust Meat Lover's", calories: 2320 },
    { id: "dominos-thin-veggie", name: "Thin Crust Veggie", calories: 1840 },
    { id: "dominos-thin-hawaiian", name: "Thin Crust Hawaiian", calories: 2000 }
  ],
  "Domino's Specialties": [
    { id: "dominos-extravaganzza", name: "ExtravaganZZa", calories: 2880 },
    { id: "dominos-meatzza", name: "MeatZZa", calories: 3120 },
    { id: "dominos-philly-cheese", name: "Philly Cheese Steak", calories: 2640 },
    { id: "dominos-cali-chicken", name: "California Chicken", calories: 2480 },
    { id: "dominos-spinach-feta", name: "Spinach & Feta", calories: 2240 },
    { id: "dominos-wisconsin", name: "Wisconsin 6 Cheese", calories: 2560 }
  ],
  "Wings & Boneless": [
    { id: "dominos-wings-plain", name: "Plain Wings (8 pc)", calories: 640 },
    { id: "dominos-wings-bbq", name: "BBQ Wings (8 pc)", calories: 680 },
    { id: "dominos-wings-buffalo", name: "Hot Buffalo Wings (8 pc)", calories: 660 },
    { id: "dominos-wings-mango", name: "Mango Habanero Wings (8 pc)", calories: 670 },
    { id: "dominos-wings-garlic", name: "Garlic Parmesan Wings (8 pc)", calories: 700 }
  ],
  "Fresh Baked Bread": [
    { id: "dominos-bread-twists", name: "Garlic Bread Twists", calories: 220 },
    { id: "dominos-bread-bites", name: "Parmesan Bread Bites", calories: 110 },
    { id: "dominos-stuffed-cheesy", name: "Stuffed Cheesy Bread", calories: 280 },
    { id: "dominos-stuffed-bacon", name: "Stuffed Cheesy Bread with Bacon", calories: 320 }
  ],
  "Oven Baked Sandwiches": [
    { id: "dominos-philly-sandwich", name: "Philly Cheesesteak", calories: 690 },
    { id: "dominos-chicken-bacon", name: "Chicken Bacon Ranch", calories: 680 },
    { id: "dominos-italian", name: "Italian", calories: 640 },
    { id: "dominos-chicken-parm", name: "Chicken Parm", calories: 670 }
  ],
  "Sweet Treats": [
    { id: "dominos-chocolate-lava", name: "Chocolate Lava Crunch Cake", calories: 350 },
    { id: "dominos-marbled-cookie", name: "Marbled Cookie Brownie", calories: 200 },
    { id: "dominos-cinna-stix", name: "Cinna Stix", calories: 250 }
  ],
  "Drinks & Beverages": [
    { id: "dominos-coke", name: "Coca-Cola (20 oz)", calories: 240 },
    { id: "dominos-diet-coke", name: "Diet Coke (20 oz)", calories: 0 },
    { id: "dominos-sprite", name: "Sprite (20 oz)", calories: 230 },
    { id: "dominos-fanta", name: "Fanta Orange (20 oz)", calories: 270 }
  ]
};

export const dominosItems: FastFoodItem[] = Object.values(DOMINOS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Domino's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(DOMINOS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );