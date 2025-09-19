import { FastFoodItem } from '../types';

const RAOS_CATEGORIES = {
  Appetizers: [
    { id: "raos-meatballs", name: "Famous Meatballs", calories: 420 },
    { id: "raos-seafood", name: "Seafood Salad", calories: 280 },
    { id: "raos-baked-clams", name: "Baked Clams", calories: 340 },
    { id: "raos-calamari", name: "Fried Calamari", calories: 460 },
    { id: "raos-antipasto", name: "Antipasto Misto", calories: 380 }
  ],
  "First Course": [
    { id: "raos-penne-vodka", name: "Penne Vodka", calories: 880 },
    { id: "raos-linguine", name: "Linguine with Clam Sauce", calories: 760 },
    { id: "raos-fettuccine", name: "Fettuccine Bolognese", calories: 920 },
    { id: "raos-spaghetti", name: "Spaghetti Marinara", calories: 720 },
    { id: "raos-rigatoni", name: "Rigatoni with Meatballs", calories: 940 },
    { id: "raos-orecchiette", name: "Orecchiette with Broccoli Rabe", calories: 680 }
  ],
  "Main Course": [
    { id: "raos-lemon-chicken", name: "Lemon Chicken", calories: 640 },
    { id: "raos-veal", name: "Veal Milanese", calories: 890 },
    { id: "raos-shrimp", name: "Shrimp Scampi", calories: 580 },
    { id: "raos-eggplant", name: "Eggplant Parmigiana", calories: 720 },
    { id: "raos-osso-buco", name: "Osso Buco", calories: 860 }
  ],
  "Side Dishes": [
    { id: "raos-escarole", name: "Sautéed Escarole", calories: 160 },
    { id: "raos-broccoli-rabe", name: "Broccoli Rabe", calories: 140 },
    { id: "raos-potatoes", name: "Roasted Potatoes", calories: 280 },
    { id: "raos-spinach", name: "Sautéed Spinach", calories: 120 }
  ],
  Desserts: [
    { id: "raos-cheesecake", name: "New York Cheesecake", calories: 460 },
    { id: "raos-tiramisu", name: "Tiramisu", calories: 420 },
    { id: "raos-cannoli", name: "Cannoli", calories: 380 },
    { id: "raos-tartufo", name: "Chocolate Tartufo", calories: 440 }
  ]
};

export const raosItems: FastFoodItem[] = Object.values(RAOS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Rao's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(RAOS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );