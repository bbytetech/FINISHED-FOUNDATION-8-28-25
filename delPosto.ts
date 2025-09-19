import { FastFoodItem } from '../types';

const DEL_POSTO_CATEGORIES = {
  "Antipasti": [
    { id: "dp-crudo", name: "Yellowfin Tuna Crudo", calories: 240, description: "Fresh tuna with citrus and olive oil" },
    { id: "dp-vitello", name: "Vitello Tonnato", calories: 320, description: "Thinly sliced veal with tuna sauce" },
    { id: "dp-insalata", name: "Insalata Primavera", calories: 180, description: "Spring vegetables and greens" }
  ],
  "Primi Piatti": [
    { id: "dp-agnolotti", name: "Agnolotti dal Plin", calories: 680, description: "Stuffed pasta with roasted meats" },
    { id: "dp-orecchiette", name: "Orecchiette with Lamb Neck Ragu", calories: 780, description: "Ear-shaped pasta with rich lamb sauce" },
    { id: "dp-garganelli", name: "Garganelli Verdi al Ragu", calories: 740, description: "Green pasta with classic meat sauce" }
  ],
  "Secondi": [
    { id: "dp-veal", name: "Veal Chop", calories: 920, description: "Pan-roasted with seasonal vegetables" },
    { id: "dp-branzino", name: "Branzino", calories: 580, description: "Mediterranean sea bass" },
    { id: "dp-duck", name: "Duck Breast", calories: 680, description: "Hudson Valley duck with cherry sauce" }
  ],
  "Contorni": [
    { id: "dp-mushrooms", name: "Wild Mushrooms", calories: 220, description: "Seasonal mushroom selection" },
    { id: "dp-spinach", name: "Creamed Spinach", calories: 280, description: "Classic creamed spinach" }
  ],
  "Dolci": [
    { id: "dp-budino", name: "Chocolate Budino", calories: 440, description: "Rich chocolate pudding" },
    { id: "dp-gelato", name: "Olive Oil Gelato", calories: 380, description: "House-made gelato" }
  ]
};

export const delPostoItems: FastFoodItem[] = Object.values(DEL_POSTO_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Del Posto",
      item: item.name,
      calories: item.calories,
      category: Object.entries(DEL_POSTO_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );