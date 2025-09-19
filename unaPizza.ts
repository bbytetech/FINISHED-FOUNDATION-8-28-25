import { FastFoodItem } from '../types';

const UNA_PIZZA_CATEGORIES = {
  "Signature Neapolitan Pizzas": [
    { id: "una-margherita", name: "Margherita Pizza", calories: 890 },
    { id: "una-marinara", name: "Marinara Pizza", calories: 780 },
    { id: "una-bianca", name: "Bianca Pizza", calories: 920 },
    { id: "una-filetti", name: "Filetti Pizza", calories: 850 },
    { id: "una-ilaria", name: "Ilaria Pizza", calories: 870 },
    { id: "una-apollonia", name: "Apollonia Pizza", calories: 910 },
    { id: "una-concetta", name: "Concetta Pizza", calories: 880 },
    { id: "una-regina", name: "Regina Margherita Pizza", calories: 860 }
  ],
  "Specialty Pizzas": [
    { id: "una-diavola", name: "Diavola Pizza", calories: 940 },
    { id: "una-bufala", name: "Bufala Pizza", calories: 870 },
    { id: "una-romana", name: "Romana Pizza", calories: 890 },
    { id: "una-napoli", name: "Napoli Pizza", calories: 900 }
  ],
  "Appetizers & Sides": [
    { id: "una-salad", name: "Mixed Green Salad", calories: 160 },
    { id: "una-burrata", name: "Burrata", calories: 330 },
    { id: "una-olives", name: "Marinated Olives", calories: 120 },
    { id: "una-prosciutto", name: "Prosciutto di Parma", calories: 190 },
    { id: "una-arugula", name: "Arugula Salad", calories: 140 }
  ]
};

export const unaPizzaItems: FastFoodItem[] = Object.values(UNA_PIZZA_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Una Pizza Napoletana",
      item: item.name,
      calories: item.calories,
      category: Object.entries(UNA_PIZZA_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );