import { FastFoodItem } from '../types';

// Define categories for menu organization
const JIMMY_JOHNS_CATEGORIES = {
  "Signature Favorites": [
    { id: "jj-gargantuan", name: "The J.J. Gargantuan", calories: 1100, description: "Genoa salami, sliced smoked ham, capicola, roast beef, turkey & provolone" },
    { id: "jj-vito", name: "The Vito", calories: 600, description: "Genoa salami, Italian capicola, provolone & fresh veggies" },
    { id: "jj-italian", name: "Italian Night Club", calories: 840, description: "Genoa salami, Italian capicola, smoked ham & provolone" }
  ],
  "Classic Originals": [
    { id: "jj-pepe", name: "Pepe", calories: 570, description: "Applewood-smoked ham & provolone" },
    { id: "jj-big-john", name: "Big John", calories: 540, description: "Medium rare choice roast beef" },
    { id: "jj-turkey-tom", name: "Turkey Tom", calories: 480, description: "Fresh sliced turkey breast" },
    { id: "jj-hunter", name: "Hunter's Club", calories: 700, description: "Quarter pound of medium rare roast beef" },
    { id: "jj-billy", name: "Billy Club", calories: 650, description: "Choice roast beef, smoked ham & provolone" }
  ],
  "Plain Slims": [
    { id: "jj-slim1", name: "Slim 1 - Ham & Cheese", calories: 450, description: "Double portion of ham & provolone" },
    { id: "jj-slim2", name: "Slim 2 - Roast Beef", calories: 470, description: "Double portion of roast beef" },
    { id: "jj-slim3", name: "Slim 3 - Tuna Salad", calories: 520, description: "Double portion of tuna salad" },
    { id: "jj-slim4", name: "Slim 4 - Turkey", calories: 420, description: "Double portion of turkey breast" },
    { id: "jj-slim5", name: "Slim 5 - Salami & Capicola", calories: 480, description: "Double portion of salami & capicola" },
    { id: "jj-slim6", name: "Slim 6 - Double Provolone", calories: 440, description: "Triple portion of provolone" }
  ],
  "Giant Club Sandwiches": [
    { id: "jj-club-lulu", name: "Club Lulu", calories: 620, description: "Fresh sliced turkey breast, bacon & provolone" },
    { id: "jj-club-tuna", name: "Club Tuna", calories: 680, description: "Fresh housemade tuna salad & provolone" },
    { id: "jj-ultimate-porker", name: "Ultimate Porker", calories: 590, description: "Applewood-smoked ham & bacon" },
    { id: "jj-beach-club", name: "Beach Club", calories: 570, description: "Turkey breast, provolone & avocado spread" },
    { id: "jj-bootlegger", name: "Bootlegger Club", calories: 610, description: "Roast beef, turkey breast & provolone" }
  ],
  "Fresh-Made Sides": [
    { id: "jj-chips-reg", name: "Regular Chips", calories: 150, description: "Crispy potato chips" },
    { id: "jj-chips-bbq", name: "BBQ Chips", calories: 150, description: "BBQ flavored chips" },
    { id: "jj-chips-jalapeno", name: "Jalapeño Chips", calories: 150, description: "Spicy jalapeño chips" },
    { id: "jj-pickle", name: "Jumbo Kosher Dill Pickle", calories: 25, description: "Extra large pickle" }
  ],
  "Fresh-Baked Cookies": [
    { id: "jj-cookie-choc", name: "Chocolate Chip Cookie", calories: 220, description: "Fresh-baked chocolate chip" },
    { id: "jj-cookie-oatmeal", name: "Oatmeal Raisin Cookie", calories: 200, description: "Fresh-baked oatmeal raisin" },
    { id: "jj-cookie-double", name: "Double Chocolate Cookie", calories: 230, description: "Fresh-baked double chocolate" }
  ],
  "Drinks & Refreshments": [
    { id: "jj-soda", name: "Fountain Drink", calories: 0, description: "Assorted sodas" },
    { id: "jj-bottled-water", name: "Bottled Water", calories: 0, description: "Pure spring water" },
    { id: "jj-iced-tea", name: "Fresh Brewed Iced Tea", calories: 0, description: "Unsweetened iced tea" }
  ]
};

// Transform categories into a flat array for the menu
export const jimmyJohnsItems: FastFoodItem[] = Object.entries(JIMMY_JOHNS_CATEGORIES)
  .flatMap(([categoryName, items]) => {
    return items.map(item => ({
      id: item.id,
      restaurant: "Jimmy John's",
      item: item.name,
      calories: item.calories,
      category: categoryName
    }
    )
    )
  }
  )