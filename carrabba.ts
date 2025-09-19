import { FastFoodItem } from '../types';

const CARRABBA_CATEGORIES = {
  "Antipasti & Starters": [
    { id: "carrabba-calamari", name: "Calamari", calories: 920 },
    { id: "carrabba-mozzarella", name: "Mozzarella Marinara", calories: 640 },
    { id: "carrabba-bruschette", name: "Bruschette Siciliani", calories: 480 },
    { id: "carrabba-zucchini-fritte", name: "Zucchini Fritte", calories: 660 }
  ],
  "Zuppe & Insalate": [
    { id: "carrabba-minestrone", name: "Minestrone Soup", calories: 150 },
    { id: "carrabba-caesar", name: "Caesar Salad", calories: 350 },
    { id: "carrabba-house", name: "House Side Salad", calories: 220 },
    { id: "carrabba-italian", name: "Italian Salad", calories: 380 }
  ],
  "Pasta Specialties": [
    { id: "carrabba-lasagne", name: "Lasagne", calories: 780 },
    { id: "carrabba-fettuccine", name: "Fettuccine Carrabba", calories: 1150 },
    { id: "carrabba-spaghetti", name: "Spaghetti & Meatballs", calories: 890 },
    { id: "carrabba-linguine", name: "Linguine Pescatore", calories: 920 },
    { id: "carrabba-rigatoni", name: "Rigatoni Martino", calories: 840 },
    { id: "carrabba-penne-vodka", name: "Penne Vodka", calories: 920 },
    { id: "carrabba-penne-alfredo", name: "Penne Alfredo", calories: 1080 }
  ],
  "Pollo & Vitello": [
    { id: "carrabba-marsala", name: "Chicken Marsala", calories: 640 },
    { id: "carrabba-bryan", name: "Chicken Bryan", calories: 620 },
    { id: "carrabba-parmesan", name: "Chicken Parmesan", calories: 1080 },
    { id: "carrabba-rosa", name: "Pollo Rosa Maria", calories: 840 },
    { id: "carrabba-veal-marsala", name: "Veal Marsala", calories: 740 },
    { id: "carrabba-veal-parmesan", name: "Veal Parmesan", calories: 1140 }
  ],
  "Griglia & Bistecca": [
    { id: "carrabba-sirloin", name: "Tuscan-Grilled Sirloin", calories: 580 },
    { id: "carrabba-filet", name: "Filet Marsala", calories: 740 },
    { id: "carrabba-ribeye", name: "Tuscan-Grilled Ribeye", calories: 920 },
    { id: "carrabba-pork-chop", name: "Grilled Pork Chop", calories: 840 }
  ],
  "Pesce": [
    { id: "carrabba-salmon", name: "Wood-Grilled Salmon", calories: 540 },
    { id: "carrabba-mahi", name: "Mahi Wulfe", calories: 480 },
    { id: "carrabba-spiedino", name: "Spiedino di Mare", calories: 670 }
  ],
  "Contorni": [
    { id: "carrabba-bread", name: "Italian Bread with Herbs", calories: 140 },
    { id: "carrabba-broccoli", name: "Sautéed Broccoli", calories: 120 },
    { id: "carrabba-asparagus", name: "Grilled Asparagus", calories: 90 },
    { id: "carrabba-potatoes", name: "Garlic Mashed Potatoes", calories: 240 },
    { id: "carrabba-penne-pomodoro", name: "Penne Pomodoro", calories: 480 }
  ],
  "Dolci": [
    { id: "carrabba-cannoli", name: "Cannoli", calories: 420 },
    { id: "carrabba-tiramisu", name: "Tiramisù", calories: 680 },
    { id: "carrabba-sogno", name: "Sogno di Cioccolata", calories: 1090 }
  ]
};

export const carrabbaItems: FastFoodItem[] = Object.values(CARRABBA_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Carrabba's Italian Grill",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CARRABBA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );