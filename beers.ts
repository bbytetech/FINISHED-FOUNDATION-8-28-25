import { FastFoodItem } from '../types';

// Organize beers by category for better maintainability
const BEER_CATEGORIES = {
  domestic_light: [
    { id: "bud-light", name: "Bud Light (12 oz)", calories: 110 },
    { id: "miller-lite", name: "Miller Lite (12 oz)", calories: 96 },
    { id: "busch-light", name: "Busch Light (12 oz)", calories: 95 },
    { id: "coors-light", name: "Coors Light (12 oz)", calories: 102 },
    { id: "michelob-ultra", name: "Michelob Ultra (12 oz)", calories: 95 },
    { id: "natural-light", name: "Natural Light (12 oz)", calories: 95 },
    { id: "keystone-light", name: "Keystone Light (12 oz)", calories: 100 },
  ],
  domestic_regular: [
    { id: "budweiser", name: "Budweiser (12 oz)", calories: 145 },
    { id: "coors-banquet", name: "Coors Banquet (12 oz)", calories: 147 },
    { id: "miller-high-life", name: "Miller High Life (12 oz)", calories: 141 },
    { id: "pabst-blue-ribbon", name: "Pabst Blue Ribbon (12 oz)", calories: 144 },
    { id: "rolling-rock", name: "Rolling Rock (12 oz)", calories: 130 },
    { id: "yuengling", name: "Yuengling Traditional Lager (12 oz)", calories: 128 },
  ],
  import: [
    { id: "corona-extra", name: "Corona Extra (12 oz)", calories: 148 },
    { id: "corona-light", name: "Corona Light (12 oz)", calories: 99 },
    { id: "corona-premier", name: "Corona Premier (12 oz)", calories: 90 },
    { id: "modelo-especial", name: "Modelo Especial (12 oz)", calories: 145 },
    { id: "modelo-negra", name: "Modelo Negra (12 oz)", calories: 173 },
    { id: "heineken", name: "Heineken (12 oz)", calories: 142 },
    { id: "heineken-light", name: "Heineken Light (12 oz)", calories: 99 },
    { id: "stella-artois", name: "Stella Artois (12 oz)", calories: 153 },
    { id: "guinness-draught", name: "Guinness Draught (12 oz)", calories: 125 },
    { id: "dos-equis", name: "Dos Equis Lager (12 oz)", calories: 131 },
    { id: "amstel-light", name: "Amstel Light (12 oz)", calories: 95 },
  ],
  craft: [
    { id: "sierra-nevada", name: "Sierra Nevada Pale Ale (12 oz)", calories: 175 },
    { id: "sam-adams-boston", name: "Samuel Adams Boston Lager (12 oz)", calories: 175 },
    { id: "blue-moon", name: "Blue Moon Belgian White (12 oz)", calories: 168 },
    { id: "new-belgium-fat-tire", name: "New Belgium Fat Tire (12 oz)", calories: 160 },
    { id: "lagunitas-ipa", name: "Lagunitas IPA (12 oz)", calories: 190 },
  ]
};

// Transform categories into a flat array for the menu
export const beerItems: FastFoodItem[] = Object.values(BEER_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Beer Selection",
      item: item.name,
      calories: item.calories
    }))
  );