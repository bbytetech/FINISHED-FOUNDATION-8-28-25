import { FastFoodItem } from '../types';

// Export categories for menu organization
const PAPPYS_SMOKEHOUSE_CATEGORIES = {
  "Pappy's Famous BBQ": [
    { id: "pappys-ribs-full", name: "Full Slab Ribs", calories: 1240, description: "Award-winning Memphis-style ribs" },
    { id: "pappys-ribs-half", name: "Half Slab Ribs", calories: 720, description: "Memphis-style ribs" },
    { id: "pappys-brisket", name: "Beef Brisket Plate", calories: 780, description: "Slow-smoked brisket" },
    { id: "pappys-pulled-pork", name: "Pulled Pork Plate", calories: 680, description: "Hand-pulled pork" },
    { id: "pappys-turkey", name: "Smoked Turkey", calories: 420, description: "House-smoked turkey" }
  ],
  "St. Louis Sandwiches": [
    { id: "pappys-brisket-sandwich", name: "Brisket Sandwich", calories: 620, description: "Sliced brisket on a bun" },
    { id: "pappys-pulled-pork-sandwich", name: "Pulled Pork Sandwich", calories: 580, description: "Pulled pork sandwich" },
    { id: "pappys-turkey-sandwich", name: "Turkey Sandwich", calories: 420, description: "Smoked turkey sandwich" }
  ],
  "Smokehouse Sides": [
    { id: "pappys-sweet-potato", name: "Sweet Potato Fries", calories: 320, description: "Hand-cut fries" },
    { id: "pappys-baked-beans", name: "Pappy's Baked Beans", calories: 260, description: "House recipe beans" },
    { id: "pappys-slaw", name: "Sweet & Tangy Slaw", calories: 180, description: "Fresh-made slaw" },
    { id: "pappys-potato-salad", name: "Potato Salad", calories: 240, description: "Classic potato salad" },
    { id: "pappys-green-beans", name: "Green Beans", calories: 90, description: "Southern style" },
    { id: "pappys-applesauce", name: "Cinnamon Applesauce", calories: 120, description: "Homemade applesauce" }
  ],
  "Family Packs": [
    { id: "pappys-family-4", name: "Family Pack (Feeds 4)", calories: 2400, description: "Family-sized portions" },
    { id: "pappys-family-6", name: "Family Pack (Feeds 6)", calories: 3600, description: "Family-sized portions" },
    { id: "pappys-family-8", name: "Family Pack (Feeds 8)", calories: 4800, description: "Family-sized portions" }
  ]
};

export const pappysSmokeHouseItems: FastFoodItem[] = Object.values(PAPPYS_SMOKEHOUSE_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Pappy's Smokehouse",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PAPPYS_SMOKEHOUSE_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );