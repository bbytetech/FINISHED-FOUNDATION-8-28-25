import { FastFoodItem } from '../types';

const CALIFORNIA_PIZZA_CATEGORIES = {
  "Original Hand Tossed": [
    { id: "cpk-bbq-chicken", name: "BBQ Chicken Pizza", calories: 1100 },
    { id: "cpk-bbq-chicken-bacon", name: "BBQ Chicken & Bacon Pizza", calories: 1180 },
    { id: "cpk-thai-chicken", name: "Thai Chicken Pizza", calories: 1120 },
    { id: "cpk-margherita", name: "Margherita Pizza", calories: 980 },
    { id: "cpk-pepperoni", name: "Traditional Pepperoni Pizza", calories: 1140 },
    { id: "cpk-mushroom", name: "Wild Mushroom Pizza", calories: 1020 },
    { id: "cpk-works", name: "The Works Pizza", calories: 1280 },
    { id: "cpk-california-club", name: "California Club Pizza", calories: 1160 },
    { id: "cpk-jamaican-jerk", name: "Jamaican Jerk Chicken Pizza", calories: 1140 },
    { id: "cpk-tostada", name: "Tostada Pizza", calories: 1080 },
    { id: "cpk-sicilian", name: "Sicilian Pizza", calories: 1240 },
    { id: "cpk-roasted-garlic", name: "Roasted Garlic Chicken Pizza", calories: 1120 },
    { id: "cpk-greek", name: "Greek Pizza", calories: 1040 },
    { id: "cpk-california-veggie", name: "California Veggie Pizza", calories: 980 },
    { id: "cpk-spicy-chipotle", name: "Spicy Chipotle Chicken Pizza", calories: 1180 }
  ],
  "Cauliflower Crust": [
    { id: "cpk-cauli-bbq", name: "Cauliflower BBQ Chicken", calories: 880 },
    { id: "cpk-cauli-margherita", name: "Cauliflower Margherita", calories: 760 },
    { id: "cpk-cauli-pepperoni", name: "Cauliflower Pepperoni", calories: 820 },
    { id: "cpk-cauli-mushroom", name: "Cauliflower Mushroom", calories: 780 },
    { id: "cpk-cauli-veggie", name: "Cauliflower Veggie", calories: 720 }
  ],
  "Thin Crust": [
    { id: "cpk-thin-bbq", name: "Thin Crust BBQ Chicken", calories: 920 },
    { id: "cpk-thin-margherita", name: "Thin Crust Margherita", calories: 840 },
    { id: "cpk-thin-pepperoni", name: "Thin Crust Pepperoni", calories: 880 },
    { id: "cpk-thin-mushroom", name: "Thin Crust Mushroom", calories: 820 },
    { id: "cpk-thin-works", name: "Thin Crust The Works", calories: 960 }
  ],
  "Appetizers": [
    { id: "cpk-wings", name: "Spicy Buffalo Wings", calories: 740 },
    { id: "cpk-lettuce-wraps", name: "Lettuce Wraps", calories: 540 },
    { id: "cpk-bruschetta", name: "Tomato Bruschetta", calories: 380 },
    { id: "cpk-spinach-dip", name: "Spinach Artichoke Dip", calories: 620 },
    { id: "cpk-avocado-rolls", name: "Avocado Club Egg Rolls", calories: 540 },
    { id: "cpk-white-corn", name: "White Corn Guacamole", calories: 460 },
    { id: "cpk-dynamite-shrimp", name: "Dynamite Shrimp", calories: 580 }
  ],
  "Fresh Salads": [
    { id: "cpk-bbq-salad", name: "BBQ Chicken Salad", calories: 840 },
    { id: "cpk-caesar", name: "Original Caesar", calories: 540 },
    { id: "cpk-cobb", name: "Classic Cobb", calories: 780 },
    { id: "cpk-thai-crunch", name: "Thai Crunch Salad", calories: 720 },
    { id: "cpk-italian", name: "Italian Chopped Salad", calories: 680 },
    { id: "cpk-waldorf", name: "Waldorf Chicken Salad", calories: 690 },
    { id: "cpk-california", name: "California Harvest", calories: 580 }
  ],
  "Power Bowls": [
    { id: "cpk-santa-fe", name: "Santa Fe Bowl", calories: 640 },
    { id: "cpk-banh-mi", name: "Banh Mi Bowl", calories: 580 },
    { id: "cpk-buddha", name: "Buddha Bowl", calories: 520 },
    { id: "cpk-korean", name: "Korean BBQ Bowl", calories: 680 }
  ],
  "Sweet Endings": [
    { id: "cpk-butter-cake", name: "Butter Cake", calories: 1380 },
    { id: "cpk-tiramisu", name: "Tiramisu", calories: 780 },
    { id: "cpk-key-lime", name: "Key Lime Pie", calories: 680 },
    { id: "cpk-chocolate-souffle", name: "Belgian Chocolate Soufflé Cake", calories: 890 },
    { id: "cpk-apple-crostata", name: "Warm Apple Crostata", calories: 820 },
    { id: "cpk-smores", name: "S'mores Pudding", calories: 760 }
  ]
};

export const californiaPizzaItems: FastFoodItem[] = Object.values(CALIFORNIA_PIZZA_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "California Pizza Kitchen",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CALIFORNIA_PIZZA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );