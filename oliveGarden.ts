import { FastFoodItem } from '../types';

const OLIVE_GARDEN_CATEGORIES = {
  "Appetizers & Soups": [
    { id: "og-breadsticks", name: "Breadsticks (2)", calories: 280 },
    { id: "og-soup-fagioli", name: "Pasta e Fagioli", calories: 150 },
    { id: "og-soup-gnocchi", name: "Chicken & Gnocchi", calories: 230 },
    { id: "og-soup-toscana", name: "Zuppa Toscana", calories: 220 },
    { id: "og-calamari", name: "Calamari", calories: 670 },
    { id: "og-spinach-dip", name: "Spinach-Artichoke Dip", calories: 1100 },
    { id: "og-stuffed-ziti", name: "Stuffed Ziti Fritta", calories: 1080 }
  ],
  "Signature Pasta": [
    { id: "og-fettuccine", name: "Fettuccine Alfredo", calories: 1010 },
    { id: "og-spaghetti", name: "Spaghetti & Meatballs", calories: 940 },
    { id: "og-tour-italy", name: "Tour of Italy", calories: 1520 },
    { id: "og-ravioli", name: "Cheese Ravioli", calories: 850 },
    { id: "og-ziti", name: "Five Cheese Ziti al Forno", calories: 1220 },
    { id: "og-lasagna", name: "Lasagna Classico", calories: 940 },
    { id: "og-shrimp-scampi", name: "Shrimp Scampi", calories: 900 },
    { id: "og-carbonara", name: "Chicken Carbonara", calories: 1390 },
    { id: "og-seafood-alfredo", name: "Seafood Alfredo", calories: 1280 }
  ],
  "Classic Entrees": [
    { id: "og-chicken-parm", name: "Chicken Parmigiana", calories: 1060 },
    { id: "og-chicken-marsala", name: "Chicken Marsala", calories: 790 },
    { id: "og-chicken-piccata", name: "Chicken Piccata", calories: 580 },
    { id: "og-chicken-scampi", name: "Chicken Scampi", calories: 890 },
    { id: "og-salmon", name: "Herb-Grilled Salmon", calories: 460 },
    { id: "og-shrimp-scampi-fritta", name: "Shrimp Scampi Fritta", calories: 980 }
  ],
  "Fresh Salads": [
    { id: "og-salad", name: "Famous House Salad", calories: 150 },
    { id: "og-minestrone", name: "Minestrone Soup", calories: 110 },
    { id: "og-caesar", name: "Chicken Caesar Salad", calories: 470 }
  ],
  "Contorni (Sides)": [
    { id: "og-broccoli", name: "Steamed Broccoli", calories: 35 },
    { id: "og-fries", name: "Parmesan Garlic Fries", calories: 280 },
    { id: "og-pasta-side", name: "Side of Pasta", calories: 320 },
    { id: "og-meatballs", name: "Italian Meatballs (3)", calories: 480 }
  ],
  "Dolci (Desserts)": [
    { id: "og-tiramisu", name: "Tiramisu", calories: 470 },
    { id: "og-zeppoli", name: "Zeppoli", calories: 380 },
    { id: "og-cheesecake", name: "NY Style Cheesecake", calories: 620 }
  ]
};

export const oliveGardenItems: FastFoodItem[] = Object.values(OLIVE_GARDEN_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Olive Garden",
      item: item.name,
      calories: item.calories,
      category: Object.entries(OLIVE_GARDEN_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );