import { FastFoodItem } from '../types';

// Export categories for menu organization
const GIORDANOS_CATEGORIES = {
  "Famous Stuffed Deep Dish Slices": [
    { id: "giordanos-slice-cheese", name: "Deep Dish Cheese Slice", calories: 520 },
    { id: "giordanos-slice-pepperoni", name: "Deep Dish Pepperoni Slice", calories: 560 },
    { id: "giordanos-slice-supreme", name: "Deep Dish Supreme Slice", calories: 580 },
    { id: "giordanos-slice-chicago", name: "Chicago Special Deep Dish Slice", calories: 590 },
    { id: "giordanos-slice-meat", name: "Deep Dish Meat & More Meat Slice", calories: 610 },
    { id: "giordanos-slice-spinach", name: "Deep Dish Spinach Slice", calories: 510 },
    { id: "giordanos-slice-veggie", name: "Deep Dish Veggie Slice", calories: 490 },
    { id: "giordanos-slice-bbq", name: "Deep Dish BBQ Chicken Slice", calories: 540 }
  ],
  "Hand-Tossed Thin Crust Slices": [
    { id: "giordanos-slice-cheese-thin", name: "Thin Crust Cheese Slice", calories: 230 },
    { id: "giordanos-slice-pepperoni-thin", name: "Thin Crust Pepperoni Slice", calories: 250 },
    { id: "giordanos-slice-supreme-thin", name: "Thin Crust Supreme Slice", calories: 280 },
    { id: "giordanos-slice-chicago-thin", name: "Chicago Special Thin Crust Slice", calories: 270 },
    { id: "giordanos-slice-meat-thin", name: "Thin Crust Meat & More Meat Slice", calories: 290 },
    { id: "giordanos-slice-spinach-thin", name: "Thin Crust Spinach Slice", calories: 240 },
    { id: "giordanos-slice-veggie-thin", name: "Thin Crust Veggie Slice", calories: 220 },
    { id: "giordanos-slice-bbq-thin", name: "Thin Crust BBQ Chicken Slice", calories: 260 }
  ],
  "World Famous Stuffed Deep Dish": [
    { id: "giordanos-cheese-deep", name: "Deep Dish Cheese Pizza", calories: 4160 },
    { id: "giordanos-pepperoni-deep", name: "Deep Dish Pepperoni Pizza", calories: 4480 },
    { id: "giordanos-supreme-deep", name: "Deep Dish Supreme Pizza", calories: 4640 },
    { id: "giordanos-chicago-deep", name: "Chicago Special Deep Dish", calories: 4720 },
    { id: "giordanos-meat-deep", name: "Deep Dish Meat & More Meat", calories: 4880 },
    { id: "giordanos-spinach-deep", name: "Deep Dish Spinach", calories: 4080 },
    { id: "giordanos-veggie-deep", name: "Deep Dish Veggie", calories: 3920 },
    { id: "giordanos-bbq-deep", name: "Deep Dish BBQ Chicken", calories: 4320 }
  ],
  "Hand-Tossed Thin Crust Pizzas": [
    { id: "giordanos-cheese-thin", name: "Thin Crust Cheese Pizza", calories: 1840 },
    { id: "giordanos-pepperoni-thin", name: "Thin Crust Pepperoni Pizza", calories: 2000 },
    { id: "giordanos-supreme-thin", name: "Thin Crust Supreme Pizza", calories: 2240 },
    { id: "giordanos-chicago-thin", name: "Chicago Special Thin Crust", calories: 2160 },
    { id: "giordanos-meat-thin", name: "Thin Crust Meat & More Meat", calories: 2320 },
    { id: "giordanos-spinach-thin", name: "Thin Crust Spinach", calories: 1920 },
    { id: "giordanos-veggie-thin", name: "Thin Crust Veggie", calories: 1760 },
    { id: "giordanos-bbq-thin", name: "Thin Crust BBQ Chicken", calories: 2080 }
  ],
  "Appetizers": [
    { id: "giordanos-wings", name: "Buffalo Wings (6 pc)", calories: 540 },
    { id: "giordanos-garlic-bread", name: "Garlic Bread", calories: 240 },
    { id: "giordanos-mozzarella", name: "Mozzarella Triangles", calories: 620 },
    { id: "giordanos-bruschetta", name: "Bruschetta", calories: 380 },
    { id: "giordanos-calamari", name: "Calamari", calories: 580 }
  ],
  "Fresh Salads": [
    { id: "giordanos-house", name: "House Salad", calories: 180 },
    { id: "giordanos-caesar", name: "Caesar Salad", calories: 320 },
    { id: "giordanos-chopped", name: "Chopped Salad", calories: 420 },
    { id: "giordanos-greek", name: "Greek Salad", calories: 380 }
  ],
  "Italian Sandwiches": [
    { id: "giordanos-italian", name: "Italian Sub", calories: 780 },
    { id: "giordanos-meatball", name: "Meatball Sub", calories: 820 },
    { id: "giordanos-chicken-parm", name: "Chicken Parmesan Sub", calories: 760 }
  ],
  "Sweet Endings": [
    { id: "giordanos-tiramisu", name: "Tiramisu", calories: 440 },
    { id: "giordanos-cannoli", name: "Cannoli", calories: 320 },
    { id: "giordanos-cheesecake", name: "New York Style Cheesecake", calories: 460 }
  ]
};

// Transform categories into a flat array for the menu
export const giordanosItems: FastFoodItem[] = Object.values(GIORDANOS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Giordano's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(GIORDANOS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );