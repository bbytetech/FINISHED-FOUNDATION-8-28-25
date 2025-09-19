import { FastFoodItem } from '../types';

// Define categories
const BERTUCCIS_CATEGORIES = {
  "Brick Oven Pizza": [
    { id: "bertucci-margherita", name: "Margherita Pizza", calories: 780 },
    { id: "bertucci-pepperoni", name: "Pepperoni Pizza", calories: 840 },
    { id: "bertucci-quattro", name: "Quattro Formaggi Pizza", calories: 920 },
    { id: "bertucci-silano", name: "Silano Pizza", calories: 860 },
    { id: "bertucci-ultimate", name: "Ultimate Bertucci Pizza", calories: 940 }
  ],
  "Fresh Pasta": [
    { id: "bertucci-lasagna", name: "Lasagna Rustica", calories: 920 },
    { id: "bertucci-tortellini", name: "Tortellini Alfredo", calories: 1080 },
    { id: "bertucci-rigatoni", name: "Rigatoni Abruzzi", calories: 840 },
    { id: "bertucci-spaghetti", name: "Spaghetti & Meatballs", calories: 890 }
  ],
  "Italian Entrees": [
    { id: "bertucci-chicken-parm", name: "Chicken Parmesan", calories: 960 },
    { id: "bertucci-marsala", name: "Chicken Marsala", calories: 780 },
    { id: "bertucci-salmon", name: "Grilled Salmon", calories: 640 }
  ],
  "Antipasti": [
    { id: "bertucci-rolls", name: "Fresh Rolls (2)", calories: 240 },
    { id: "bertucci-wings", name: "Tuscan Wings", calories: 820 },
    { id: "bertucci-meatballs", name: "Homemade Meatballs", calories: 440 }
  ],
  "Fresh Salads": [
    { id: "bertucci-caesar", name: "Caesar Salad", calories: 360 },
    { id: "bertucci-insalata", name: "Insalata", calories: 280 }
  ]
};

export const bertucciItems: FastFoodItem[] = [
  // Brick Oven Pizza
  { id: "bertucci-margherita", restaurant: "Bertucci's", item: "Margherita Pizza", calories: 780, category: "Brick Oven Pizza" },
  { id: "bertucci-pepperoni", restaurant: "Bertucci's", item: "Pepperoni Pizza", calories: 840, category: "Brick Oven Pizza" },
  { id: "bertucci-quattro", restaurant: "Bertucci's", item: "Quattro Formaggi Pizza", calories: 920, category: "Brick Oven Pizza" },
  { id: "bertucci-silano", restaurant: "Bertucci's", item: "Silano Pizza", calories: 860, category: "Brick Oven Pizza" },
  { id: "bertucci-ultimate", restaurant: "Bertucci's", item: "Ultimate Bertucci Pizza", calories: 940, category: "Brick Oven Pizza" },
  
  // Fresh Pasta
  { id: "bertucci-lasagna", restaurant: "Bertucci's", item: "Lasagna Rustica", calories: 920, category: "Fresh Pasta" },
  { id: "bertucci-tortellini", restaurant: "Bertucci's", item: "Tortellini Alfredo", calories: 1080, category: "Fresh Pasta" },
  { id: "bertucci-rigatoni", restaurant: "Bertucci's", item: "Rigatoni Abruzzi", calories: 840, category: "Fresh Pasta" },
  { id: "bertucci-spaghetti", restaurant: "Bertucci's", item: "Spaghetti & Meatballs", calories: 890, category: "Fresh Pasta" },
  
  // Italian Entrees
  { id: "bertucci-chicken-parm", restaurant: "Bertucci's", item: "Chicken Parmesan", calories: 960, category: "Italian Entrees" },
  { id: "bertucci-marsala", restaurant: "Bertucci's", item: "Chicken Marsala", calories: 780, category: "Italian Entrees" },
  { id: "bertucci-salmon", restaurant: "Bertucci's", item: "Grilled Salmon", calories: 640, category: "Italian Entrees" },
  
  // Antipasti
  { id: "bertucci-rolls", restaurant: "Bertucci's", item: "Fresh Rolls (2)", calories: 240, category: "Antipasti" },
  { id: "bertucci-wings", restaurant: "Bertucci's", item: "Tuscan Wings", calories: 820, category: "Antipasti" },
  { id: "bertucci-meatballs", restaurant: "Bertucci's", item: "Homemade Meatballs", calories: 440, category: "Antipasti" },
  
  // Fresh Salads
  { id: "bertucci-caesar", restaurant: "Bertucci's", item: "Caesar Salad", calories: 360, category: "Fresh Salads" },
  { id: "bertucci-insalata", restaurant: "Bertucci's", item: "Insalata", calories: 280, category: "Fresh Salads" }
];