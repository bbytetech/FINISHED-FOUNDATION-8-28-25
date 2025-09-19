import { FastFoodItem } from '../types';
// Define categories
const SCARPETTA_CATEGORIES = {
  Appetizers: [
    { id: "scarpetta-polipo", name: "Mediterranean Octopus", calories: 320 },
    { id: "scarpetta-crudo", name: "Yellowtail Crudo", calories: 260 },
    { id: "scarpetta-burrata", name: "Burrata with Roasted Cherry Tomatoes", calories: 380 }
  ],
  "First Course": [
    { id: "scarpetta-spaghetti", name: "Spaghetti with Tomato and Basil", calories: 740 },
    { id: "scarpetta-duck-ravioli", name: "Duck and Foie Gras Ravioli", calories: 820 },
    { id: "scarpetta-tagliatelle", name: "Tagliatelle with Black Truffles", calories: 780 }
  ],
  "Main Course": [
    { id: "scarpetta-branzino", name: "Mediterranean Branzino", calories: 620 },
    { id: "scarpetta-chicken", name: "Roasted Chicken", calories: 680 },
    { id: "scarpetta-veal", name: "Veal Tenderloin", calories: 840 }
  ],
  "Side Dishes": [
    { id: "scarpetta-polenta", name: "Creamy Polenta", calories: 320 },
    { id: "scarpetta-brussels", name: "Brussels Sprouts", calories: 220 },
    { id: "scarpetta-mushrooms", name: "Roasted Mushrooms", calories: 180 }
  ],
  Desserts: [
    { id: "scarpetta-budino", name: "Vanilla Caramel Budino", calories: 460 },
    { id: "scarpetta-torta", name: "Chocolate Torta", calories: 520 },
    { id: "scarpetta-gelato", name: "Assorted Gelato", calories: 280 }
  ]
};

export const scarpettaItems: FastFoodItem[] = [
  // Appetizers
  { id: "scarpetta-polipo", restaurant: "Scarpetta", item: "Mediterranean Octopus", calories: 320, category: "Appetizers" },
  { id: "scarpetta-crudo", restaurant: "Scarpetta", item: "Yellowtail Crudo", calories: 260, category: "Appetizers" },
  { id: "scarpetta-burrata", restaurant: "Scarpetta", item: "Burrata with Roasted Cherry Tomatoes", calories: 380, category: "Appetizers" },
  
  // Pasta
  { id: "scarpetta-spaghetti", restaurant: "Scarpetta", item: "Spaghetti with Tomato and Basil", calories: 740, category: "First Course" },
  { id: "scarpetta-duck-ravioli", restaurant: "Scarpetta", item: "Duck and Foie Gras Ravioli", calories: 820, category: "First Course" },
  { id: "scarpetta-tagliatelle", restaurant: "Scarpetta", item: "Tagliatelle with Black Truffles", calories: 780, category: "First Course" },
  
  // Main Course
  { id: "scarpetta-branzino", restaurant: "Scarpetta", item: "Mediterranean Branzino", calories: 620, category: "Main Course" },
  { id: "scarpetta-chicken", restaurant: "Scarpetta", item: "Roasted Chicken", calories: 680, category: "Main Course" },
  { id: "scarpetta-veal", restaurant: "Scarpetta", item: "Veal Tenderloin", calories: 840, category: "Main Course" },
  
  // Side Dishes
  { id: "scarpetta-polenta", restaurant: "Scarpetta", item: "Creamy Polenta", calories: 320, category: "Side Dishes" },
  { id: "scarpetta-brussels", restaurant: "Scarpetta", item: "Brussels Sprouts", calories: 220, category: "Side Dishes" },
  { id: "scarpetta-mushrooms", restaurant: "Scarpetta", item: "Roasted Mushrooms", calories: 180, category: "Side Dishes" },
  
  // Desserts
  { id: "scarpetta-budino", restaurant: "Scarpetta", item: "Vanilla Caramel Budino", calories: 460, category: "Desserts" },
  { id: "scarpetta-torta", restaurant: "Scarpetta", item: "Chocolate Torta", calories: 520, category: "Desserts" },
  { id: "scarpetta-gelato", restaurant: "Scarpetta", item: "Assorted Gelato", calories: 280, category: "Desserts" }
];