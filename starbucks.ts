import { FastFoodItem } from '../types';

const STARBUCKS_CATEGORIES = {
  "Hot Coffees": [
    { id: "sb-pike", name: "Pike Place Roast (Grande)", calories: 5, description: "Signature medium roast coffee" },
    { id: "sb-latte", name: "Caffè Latte (Grande)", calories: 190, description: "Rich espresso with steamed milk" },
    { id: "sb-cappuccino", name: "Cappuccino (Grande)", calories: 140, description: "Espresso with steamed milk foam" },
    { id: "sb-americano", name: "Caffè Americano (Grande)", calories: 15, description: "Espresso shots with hot water" },
    { id: "sb-mocha", name: "Caffè Mocha (Grande)", calories: 370, description: "Espresso with mocha sauce and steamed milk" },
    { id: "sb-white-mocha", name: "White Chocolate Mocha (Grande)", calories: 430, description: "Espresso with white chocolate sauce" },
    { id: "sb-caramel-macchiato", name: "Caramel Macchiato (Grande)", calories: 250, description: "Vanilla-flavored drink marked with espresso" },
    { id: "sb-flat-white", name: "Flat White (Grande)", calories: 170, description: "Ristretto shots with steamed whole milk" }
  ],
  "Cold Coffees": [
    { id: "sb-cold-brew", name: "Cold Brew (Grande)", calories: 5, description: "Slow-steeped, super-smooth cold coffee" },
    { id: "sb-nitro", name: "Nitro Cold Brew (Grande)", calories: 5, description: "Nitrogen-infused cold brew coffee" },
    { id: "sb-iced-latte", name: "Iced Caffè Latte (Grande)", calories: 130, description: "Espresso with cold milk" },
    { id: "sb-iced-mocha", name: "Iced Caffè Mocha (Grande)", calories: 350, description: "Espresso with mocha sauce and cold milk" },
    { id: "sb-cold-foam", name: "Vanilla Sweet Cream Cold Brew (Grande)", calories: 110, description: "Cold brew topped with vanilla sweet cream" },
    { id: "sb-iced-white-mocha", name: "Iced White Chocolate Mocha (Grande)", calories: 420, description: "Espresso with white chocolate and cold milk" },
    { id: "sb-iced-caramel", name: "Iced Caramel Macchiato (Grande)", calories: 250, description: "Vanilla-flavored drink marked with espresso" }
  ],
  "Frappuccinos": [
    { id: "sb-mocha-frapp", name: "Mocha Frappuccino (Grande)", calories: 410, description: "Coffee with mocha sauce and whipped cream" },
    { id: "sb-caramel-frapp", name: "Caramel Frappuccino (Grande)", calories: 380, description: "Coffee blended with caramel syrup" },
    { id: "sb-java-chip", name: "Java Chip Frappuccino (Grande)", calories: 440, description: "Coffee with mocha sauce and chocolate chips" },
    { id: "sb-vanilla-frapp", name: "Vanilla Bean Frappuccino (Grande)", calories: 380, description: "Creamy vanilla-flavored frappuccino" },
    { id: "sb-strawberries-cream", name: "Strawberries & Cream Frappuccino (Grande)", calories: 370, description: "Strawberries blended with milk" },
    { id: "sb-white-mocha-frapp", name: "White Chocolate Mocha Frappuccino (Grande)", calories: 420, description: "White chocolate flavored sauce, coffee, milk" },
    { id: "sb-caramel-ribbon", name: "Caramel Ribbon Crunch Frappuccino (Grande)", calories: 470, description: "Buttery caramel syrup blended with coffee" }
  ],
  "Refreshers & Iced Teas": [
    { id: "sb-strawberry-acai", name: "Strawberry Açaí Refresher (Grande)", calories: 90, description: "Sweet strawberry flavors with açaí notes" },
    { id: "sb-mango-dragonfruit", name: "Mango Dragonfruit Refresher (Grande)", calories: 90, description: "Tropical mango and dragonfruit flavors" },
    { id: "sb-pineapple-passionfruit", name: "Pineapple Passionfruit Refresher (Grande)", calories: 100, description: "Tropical pineapple and passionfruit" },
    { id: "sb-paradise-drink", name: "Paradise Drink Refresher (Grande)", calories: 140, description: "Tropical refresher with coconut milk" },
    { id: "sb-lemonade", name: "Lemonade (Grande)", calories: 120, description: "Classic lemonade" }
  ],
  "Breakfast": [
    { id: "sb-bacon-gouda", name: "Bacon, Gouda & Egg Sandwich", calories: 360, description: "Bacon and egg with aged Gouda" },
    { id: "sb-sausage-cheddar", name: "Sausage, Cheddar & Egg Sandwich", calories: 480, description: "Savory sausage with egg and cheddar" },
    { id: "sb-spinach-feta", name: "Spinach, Feta & Egg White Wrap", calories: 290, description: "Egg whites with spinach and feta" },
    { id: "sb-impossible-breakfast", name: "Impossible Breakfast Sandwich", calories: 420, description: "Plant-based sausage patty with egg" },
    { id: "sb-egg-bites", name: "Egg White & Roasted Red Pepper Egg Bites", calories: 170, description: "Cage-free egg whites with Monterey Jack" }
  ],
  "Bakery": [
    { id: "sb-butter-croissant", name: "Butter Croissant", calories: 260, description: "Classic butter croissant" },
    { id: "sb-coffee-cake", name: "Classic Coffee Cake", calories: 410, description: "Buttery, cinnamon-swirled coffee cake" },
    { id: "sb-banana-bread", name: "Banana Nut Bread", calories: 420, description: "Banana bread with walnuts" },
    { id: "sb-blueberry-muffin", name: "Blueberry Muffin", calories: 360, description: "Blueberry muffin with yogurt" },
    { id: "sb-chocolate-croissant", name: "Chocolate Croissant", calories: 340, description: "Butter croissant filled with chocolate" },
    { id: "sb-bagel", name: "Plain Bagel", calories: 280, description: "Classic plain bagel" }
  ]
};

export const starbucksItems: FastFoodItem[] = Object.values(STARBUCKS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Starbucks",
      item: item.name,
      calories: item.calories,
      category: Object.entries(STARBUCKS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );