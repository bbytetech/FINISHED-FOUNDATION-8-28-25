import { FastFoodItem } from '../types';

// Define categories
const FAZOLIS_CATEGORIES = {
  "Signature Pasta": [
    { id: "fazolis-spaghetti-marinara", name: "Spaghetti with Marinara", calories: 670 },
    { id: "fazolis-spaghetti-meatballs", name: "Spaghetti & Meatballs", calories: 890 },
    { id: "fazolis-fettuccine", name: "Fettuccine Alfredo", calories: 1240 },
    { id: "fazolis-chicken-alfredo", name: "Chicken Fettuccine Alfredo", calories: 1280 },
    { id: "fazolis-chicken-carbonara", name: "Chicken Carbonara", calories: 1080 },
    { id: "fazolis-ravioli", name: "Cheese Ravioli", calories: 820 },
    { id: "fazolis-lasagna", name: "Classic Lasagna", calories: 960 },
    { id: "fazolis-penne", name: "Penne Arrabbiata", calories: 880 }
  ],
  "Baked Italian Favorites": [
    { id: "fazolis-chicken-parm", name: "Chicken Parmigiana", calories: 960 },
    { id: "fazolis-baked-ziti", name: "Baked Ziti", calories: 890 },
    { id: "fazolis-five-cheese", name: "Five Cheese Baked Ziti", calories: 920 },
    { id: "fazolis-ultimate-spaghetti", name: "Ultimate Spaghetti", calories: 1020 }
  ],
  "Italian Sandwiches": [
    { id: "fazolis-italian-sub", name: "Italian Submarine", calories: 820 },
    { id: "fazolis-meatball-sub", name: "Meatball Sub", calories: 790 },
    { id: "fazolis-turkey-club", name: "Turkey Club Italiano", calories: 740 }
  ],
  "Fresh Salads": [
    { id: "fazolis-garden-salad", name: "Garden Side Salad", calories: 120 },
    { id: "fazolis-caesar-salad", name: "Caesar Side Salad", calories: 210 },
    { id: "fazolis-italian-salad", name: "Italian Salad", calories: 280 }
  ],
  "Fresh-Baked Sides": [
    { id: "fazolis-breadsticks", name: "Breadsticks (3)", calories: 390 },
    { id: "fazolis-broccoli", name: "Steamed Broccoli", calories: 45 },
    { id: "fazolis-meatballs", name: "Italian Meatballs (3)", calories: 420 }
  ],
  "Dolci (Desserts)": [
    { id: "fazolis-cheesecake", name: "NY Style Cheesecake", calories: 460 },
    { id: "fazolis-chocolate-cake", name: "Double Dark Chocolate Layer Cake", calories: 520 },
    { id: "fazolis-brownie", name: "Chocolate Chunk Brownie", calories: 340 }
  ]
};

export const fazolisItems: FastFoodItem[] = Object.values(FAZOLIS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Fazoli's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(FAZOLIS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );