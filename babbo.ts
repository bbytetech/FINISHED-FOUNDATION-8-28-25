import { FastFoodItem } from '../types';
// Define categories
const BABBO_CATEGORIES = {
  Appetizers: [
    { id: "babbo-carpaccio", name: "Black Bass Carpaccio", calories: 280 },
    { id: "babbo-grilled-octopus", name: "Grilled Octopus", calories: 340 },
    { id: "babbo-salumi", name: "House-Made Salumi", calories: 420 },
    { id: "babbo-bruschetta", name: "Seasonal Bruschetta", calories: 280 },
    { id: "babbo-mozzarella", name: "Fresh Mozzarella", calories: 360 }
  ],
  "First Course": [
    { id: "babbo-beef-cheek", name: "Beef Cheek Ravioli", calories: 780 },
    { id: "babbo-mint-love", name: "Mint Love Letters", calories: 680 },
    { id: "babbo-bucatini", name: "Bucatini All'Amatriciana", calories: 820 },
    { id: "babbo-garganelli", name: "Garganelli with Funghi Trifolati", calories: 740 },
    { id: "babbo-pappardelle", name: "Pappardelle Bolognese", calories: 860 },
    { id: "babbo-gnocchi", name: "Gnocchi al Pomodoro", calories: 720 },
    { id: "babbo-spaghetti", name: "Spaghetti alle Vongole", calories: 780 },
    { id: "babbo-agnolotti", name: "Black Truffle Agnolotti", calories: 840 }
  ],
  "Main Course": [
    { id: "babbo-pork", name: "Grilled Pork Chop", calories: 880 },
    { id: "babbo-lamb", name: "Grilled Lamb Chops", calories: 920 },
    { id: "babbo-ribeye", name: "Grilled Ribeye", calories: 1040 },
    { id: "babbo-branzino", name: "Whole Grilled Branzino", calories: 620 },
    { id: "babbo-duck", name: "Duck Breast", calories: 780 },
    { id: "babbo-veal", name: "Veal Chop Milanese", calories: 890 }
  ],
  "Side Dishes": [
    { id: "babbo-beans", name: "Tuscan White Beans", calories: 240 },
    { id: "babbo-broccoli", name: "Broccoli Rabe", calories: 180 },
    { id: "babbo-potatoes", name: "Rosemary Potatoes", calories: 260 },
    { id: "babbo-mushrooms", name: "Sautéed Wild Mushrooms", calories: 220 },
    { id: "babbo-spinach", name: "Sautéed Spinach", calories: 160 }
  ],
  Desserts: [
    { id: "babbo-zeppole", name: "Zeppole", calories: 380 },
    { id: "babbo-gelato", name: "Seasonal Gelati", calories: 320 },
    { id: "babbo-chocolate", name: "Chocolate Hazelnut Cake", calories: 440 },
    { id: "babbo-panna-cotta", name: "Maple Mascarpone Panna Cotta", calories: 360 },
    { id: "babbo-tiramisu", name: "Classic Tiramisu", calories: 420 },
    { id: "babbo-cannoli", name: "Pistachio Cannoli", calories: 340 },
    { id: "babbo-affogato", name: "Affogato al Caffè", calories: 280 },
    { id: "babbo-semifreddo", name: "Chocolate Semifreddo", calories: 390 },
    { id: "babbo-crostata", name: "Seasonal Fruit Crostata", calories: 360 }
  ]
};

export const babboItems: FastFoodItem[] = [
  // Appetizers
  { id: "babbo-carpaccio", restaurant: "Babbo", item: "Black Bass Carpaccio", calories: 280, category: "Appetizers" },
  { id: "babbo-grilled-octopus", restaurant: "Babbo", item: "Grilled Octopus", calories: 340, category: "Appetizers" },
  { id: "babbo-salumi", restaurant: "Babbo", item: "House-Made Salumi", calories: 420, category: "Appetizers" },
  { id: "babbo-bruschetta", restaurant: "Babbo", item: "Seasonal Bruschetta", calories: 280, category: "Appetizers" },
  { id: "babbo-mozzarella", restaurant: "Babbo", item: "Fresh Mozzarella", calories: 360, category: "Appetizers" },
  
  // Pasta
  { id: "babbo-beef-cheek", restaurant: "Babbo", item: "Beef Cheek Ravioli", calories: 780, category: "First Course" },
  { id: "babbo-mint-love", restaurant: "Babbo", item: "Mint Love Letters", calories: 680, category: "First Course" },
  { id: "babbo-bucatini", restaurant: "Babbo", item: "Bucatini All'Amatriciana", calories: 820, category: "First Course" },
  { id: "babbo-garganelli", restaurant: "Babbo", item: "Garganelli with Funghi Trifolati", calories: 740, category: "First Course" },
  { id: "babbo-pappardelle", restaurant: "Babbo", item: "Pappardelle Bolognese", calories: 860, category: "First Course" },
  { id: "babbo-gnocchi", restaurant: "Babbo", item: "Gnocchi al Pomodoro", calories: 720, category: "First Course" },
  { id: "babbo-spaghetti", restaurant: "Babbo", item: "Spaghetti alle Vongole", calories: 780, category: "First Course" },
  { id: "babbo-agnolotti", restaurant: "Babbo", item: "Black Truffle Agnolotti", calories: 840, category: "First Course" },
  
  // Main Course
  { id: "babbo-pork", restaurant: "Babbo", item: "Grilled Pork Chop", calories: 880, category: "Main Course" },
  { id: "babbo-lamb", restaurant: "Babbo", item: "Grilled Lamb Chops", calories: 920, category: "Main Course" },
  { id: "babbo-ribeye", restaurant: "Babbo", item: "Grilled Ribeye", calories: 1040, category: "Main Course" },
  { id: "babbo-branzino", restaurant: "Babbo", item: "Whole Grilled Branzino", calories: 620, category: "Main Course" },
  { id: "babbo-duck", restaurant: "Babbo", item: "Duck Breast", calories: 780, category: "Main Course" },
  { id: "babbo-veal", restaurant: "Babbo", item: "Veal Chop Milanese", calories: 890, category: "Main Course" },
  
  // Side Dishes
  { id: "babbo-beans", restaurant: "Babbo", item: "Tuscan White Beans", calories: 240, category: "Side Dishes" },
  { id: "babbo-broccoli", restaurant: "Babbo", item: "Broccoli Rabe", calories: 180, category: "Side Dishes" },
  { id: "babbo-potatoes", restaurant: "Babbo", item: "Rosemary Potatoes", calories: 260, category: "Side Dishes" },
  { id: "babbo-mushrooms", restaurant: "Babbo", item: "Sautéed Wild Mushrooms", calories: 220, category: "Side Dishes" },
  { id: "babbo-spinach", restaurant: "Babbo", item: "Sautéed Spinach", calories: 160, category: "Side Dishes" },
  
  // Desserts
  { id: "babbo-zeppole", restaurant: "Babbo", item: "Zeppole", calories: 380, category: "Desserts" },
  { id: "babbo-gelato", restaurant: "Babbo", item: "Seasonal Gelati", calories: 320, category: "Desserts" },
  { id: "babbo-chocolate", restaurant: "Babbo", item: "Chocolate Hazelnut Cake", calories: 440, category: "Desserts" },
  { id: "babbo-panna-cotta", restaurant: "Babbo", item: "Maple Mascarpone Panna Cotta", calories: 360, category: "Desserts" },
  { id: "babbo-tiramisu", restaurant: "Babbo", item: "Classic Tiramisu", calories: 420, category: "Desserts" },
  { id: "babbo-cannoli", restaurant: "Babbo", item: "Pistachio Cannoli", calories: 340, category: "Desserts" },
  { id: "babbo-affogato", restaurant: "Babbo", item: "Affogato al Caffè", calories: 280, category: "Desserts" },
  { id: "babbo-semifreddo", restaurant: "Babbo", item: "Chocolate Semifreddo", calories: 390, category: "Desserts" },
  { id: "babbo-crostata", restaurant: "Babbo", item: "Seasonal Fruit Crostata", calories: 360, category: "Desserts" }
];