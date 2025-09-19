import { FastFoodItem } from '../types';

const MAGGIANOS_CATEGORIES = {
  "Appetizers": [
    { id: "maggianos-calamari", name: "Calamari", calories: 920 },
    { id: "maggianos-mozzarella", name: "Mozzarella Marinara", calories: 640 },
    { id: "maggianos-bruschetta", name: "Bruschetta", calories: 480 },
    { id: "maggianos-spinach-dip", name: "Spinach & Artichoke al Forno", calories: 920 },
    { id: "maggianos-stuffed-mushrooms", name: "Stuffed Mushrooms", calories: 580 }
  ],
  "Salads": [
    { id: "maggianos-chopped", name: "Chopped Antipasti Salad", calories: 440 },
    { id: "maggianos-caesar", name: "Caesar Salad", calories: 380 },
    { id: "maggianos-italian", name: "Italian Tossed Salad", calories: 320 }
  ],
  "Pasta": [
    { id: "maggianos-spaghetti", name: "Spaghetti & Meatballs", calories: 1220 },
    { id: "maggianos-fettuccine", name: "Fettuccine Alfredo", calories: 1240 },
    { id: "maggianos-lasagna", name: "Mom's Lasagna", calories: 960 },
    { id: "maggianos-penne", name: "Penne Arrabbiata", calories: 880 },
    { id: "maggianos-ravioli", name: "Cheese Ravioli", calories: 820 },
    { id: "maggianos-linguine", name: "Linguine Frutti di Mare", calories: 920 },
    { id: "maggianos-rigatoni", name: "Rigatoni al Forno", calories: 940 }
  ],
  "Main Course": [
    { id: "maggianos-chicken-parm", name: "Chicken Parmigiana", calories: 1080 },
    { id: "maggianos-marsala", name: "Chicken Marsala", calories: 840 },
    { id: "maggianos-saltimbocca", name: "Veal Saltimbocca", calories: 920 },
    { id: "maggianos-chicken-limone", name: "Chicken Limone", calories: 720 },
    { id: "maggianos-veal-marsala", name: "Veal Marsala", calories: 740 },
    { id: "maggianos-veal-parmesan", name: "Veal Parmesan", calories: 1140 },
    { id: "maggianos-sirloin", name: "Tuscan-Grilled Sirloin", calories: 580 },
    { id: "maggianos-filet", name: "Filet Marsala", calories: 740 },
    { id: "maggianos-ribeye", name: "Tuscan-Grilled Ribeye", calories: 920 },
    { id: "maggianos-pork-chop", name: "Grilled Pork Chop", calories: 840 }
  ],
  "Side Dishes": [
    { id: "maggianos-broccoli", name: "Sautéed Broccoli", calories: 120 },
    { id: "maggianos-potatoes", name: "Garlic Mashed Potatoes", calories: 280 },
    { id: "maggianos-asparagus", name: "Grilled Asparagus", calories: 90 }
  ],
  "Desserts": [
    { id: "maggianos-cannoli", name: "Cannoli", calories: 420 },
    { id: "maggianos-tiramisu", name: "Tiramisù", calories: 680 },
    { id: "maggianos-sogno", name: "Sogno di Cioccolata", calories: 1090 }
  ]
};

export const maggianosItems: FastFoodItem[] = Object.values(MAGGIANOS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Maggiano's Little Italy",
      item: item.name,
      calories: item.calories,
      category: Object.entries(MAGGIANOS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );