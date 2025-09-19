import { FastFoodItem } from '../types';

const CARBONE_CATEGORIES = {
  "Antipasti": [
    { id: "carbone-caesar", name: "Caesar Alla ZZ", calories: 380, description: "Tableside Caesar salad with anchovy" },
    { id: "carbone-carpaccio", name: "Carpaccio Piemontese", calories: 290, description: "Thinly sliced beef with black truffle" },
    { id: "carbone-octopus", name: "Octopus Pizzaiolo", calories: 340, description: "Grilled octopus with cherry tomatoes" },
    { id: "carbone-meatballs", name: "Spicy Rigatoni Meatballs", calories: 420, description: "House-made meatballs" },
    { id: "carbone-salad", name: "Mixed Green Salad", calories: 220, description: "Seasonal greens with house dressing" }
  ],
  "Pasta": [
    { id: "carbone-spicy-rigatoni", name: "Spicy Rigatoni Vodka", calories: 920, description: "Signature vodka sauce" },
    { id: "carbone-linguini", name: "Linguini Vongole", calories: 780, description: "Fresh clams and garlic" },
    { id: "carbone-tortellini", name: "Tortellini Al Ragu", calories: 840, description: "Meat-filled pasta with ragu" },
    { id: "carbone-spaghetti", name: "Spaghetti Pomodoro", calories: 720, description: "Classic tomato sauce" },
    { id: "carbone-fettuccine", name: "Fettuccine Alfredo", calories: 890, description: "Rich cream sauce" },
    { id: "carbone-penne", name: "Penne Arrabbiata", calories: 760, description: "Spicy tomato sauce" }
  ],
  "Secondi": [
    { id: "carbone-veal-parm", name: "Veal Parmesan", calories: 1180, description: "Breaded veal cutlet" },
    { id: "carbone-bass", name: "Bass Fra Diavolo", calories: 680, description: "Spicy seafood sauce" },
    { id: "carbone-lobster", name: "Lobster Fra Diavolo", calories: 740, description: "Whole lobster in spicy sauce" },
    { id: "carbone-chicken", name: "Chicken Scarpariello", calories: 820, description: "Sweet and sour chicken" },
    { id: "carbone-steak", name: "Bone-In NY Strip", calories: 960, description: "Dry-aged beef" }
  ],
  "Contorni": [
    { id: "carbone-corn", name: "Corn Tartufato", calories: 320, description: "Truffle corn" },
    { id: "carbone-broccoli", name: "Broccoli Rabe", calories: 180, description: "Sautéed with garlic" },
    { id: "carbone-potatoes", name: "Roasted Potatoes", calories: 260, description: "Herb-roasted" },
    { id: "carbone-spinach", name: "Creamed Spinach", calories: 340, description: "Classic creamed spinach" }
  ],
  "Dolci": [
    { id: "carbone-lemon", name: "Lemon Cheesecake", calories: 580, description: "New York style" },
    { id: "carbone-tiramisu", name: "Carbone's Tiramisu", calories: 520, description: "Classic tiramisu" },
    { id: "carbone-cannoli", name: "Sicilian Cannoli", calories: 440, description: "Fresh-filled" },
    { id: "carbone-gelato", name: "Gelato Selection", calories: 380, description: "Daily selection" }
  ]
};

export const carboneItems: FastFoodItem[] = Object.values(CARBONE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Carbone",
      item: item.name,
      calories: item.calories,
      category: Object.entries(CARBONE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );