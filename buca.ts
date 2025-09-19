import { FastFoodItem } from '../types';

const BUCA_CATEGORIES = {
  "Appetizers": [
    { id: "buca-garlic-bread", name: "Garlic Bread", calories: 640 },
    { id: "buca-calamari", name: "Fried Calamari", calories: 920 },
    { id: "buca-bruschetta", name: "Bruschetta", calories: 480 },
    { id: "buca-mozzarella", name: "Mozzarella Caprese", calories: 540 },
    { id: "buca-antipasto", name: "Antipasto", calories: 680 }
  ],
  "Pasta": [
    { id: "buca-spaghetti", name: "Spaghetti Marinara", calories: 840 },
    { id: "buca-fettuccine", name: "Fettuccine Alfredo", calories: 1240 },
    { id: "buca-lasagna", name: "Lasagna", calories: 960 },
    { id: "buca-penne", name: "Penne Arrabbiata", calories: 880 },
    { id: "buca-ravioli", name: "Cheese Ravioli", calories: 820 },
    { id: "buca-linguine", name: "Linguine Frutti di Mare", calories: 920 },
    { id: "buca-rigatoni", name: "Rigatoni al Forno", calories: 940 }
  ],
  "Entrees": [
    { id: "buca-chicken-parm", name: "Chicken Parmigiana", calories: 1080 },
    { id: "buca-marsala", name: "Chicken Marsala", calories: 840 },
    { id: "buca-saltimbocca", name: "Veal Saltimbocca", calories: 920 },
    { id: "buca-salmon", name: "Salmon Sorrento", calories: 680 },
    { id: "buca-eggplant", name: "Eggplant Parmigiana", calories: 780 },
    { id: "buca-chicken-limone", name: "Chicken Limone", calories: 720 }
  ],
  "Pizza": [
    { id: "buca-margherita", name: "Pizza Margherita", calories: 880 },
    { id: "buca-pepperoni", name: "Pepperoni Pizza", calories: 960 },
    { id: "buca-supremo", name: "Pizza Supremo", calories: 1040 },
    { id: "buca-quattro", name: "Quattro Formaggi Pizza", calories: 920 }
  ],
  "Salads": [
    { id: "buca-chopped", name: "Chopped Antipasti Salad", calories: 440 },
    { id: "buca-caesar", name: "Caesar Salad", calories: 380 },
    { id: "buca-apple", name: "Apple Gorgonzola Salad", calories: 420 },
    { id: "buca-mixed", name: "Mixed Green Salad", calories: 280 }
  ],
  "Sides": [
    { id: "buca-broccoli", name: "Garlic Broccoli", calories: 140 },
    { id: "buca-potatoes", name: "Rosemary Potatoes", calories: 280 },
    { id: "buca-green-beans", name: "Italian Green Beans", calories: 120 }
  ],
  "Desserts": [
    { id: "buca-tiramisu", name: "Tiramisu", calories: 890 },
    { id: "buca-cannoli", name: "Cannoli", calories: 420 },
    { id: "buca-cheesecake", name: "Italian Creme Cake", calories: 780 }
  ]
};

export const bucaDiBeppoItems: FastFoodItem[] = Object.values(BUCA_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Buca di Beppo",
      item: item.name,
      calories: item.calories,
      category: Object.entries(BUCA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );