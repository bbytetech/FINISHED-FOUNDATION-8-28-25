import { FastFoodItem } from '../types';

const RED_LOBSTER_CATEGORIES = {
  "Fresh Catch Starters": [
    { id: "rl-shrimp-cocktail", name: "Colossal Shrimp Cocktail", calories: 190, description: "Jumbo shrimp with house-made cocktail sauce" },
    { id: "rl-mozzarella-sticks", name: "Mozzarella Cheesesticks", calories: 760, description: "Hand-breaded and served with marinara" },
    { id: "rl-calamari", name: "Calamari", calories: 920, description: "Lightly breaded and fried golden brown" },
    { id: "rl-crab-cakes", name: "Crab Cakes", calories: 730, description: "Pan-seared with corn relish" },
    { id: "rl-seafood-stuffed-mushrooms", name: "Seafood-Stuffed Mushrooms", calories: 450, description: "Stuffed with seafood, cheese and herbs" }
  ],
  "Ultimate Feasts": [
    { id: "rl-ultimate-feast", name: "Ultimate Feast", calories: 1280, description: "Lobster tail, snow crab legs, shrimp scampi and fried shrimp" },
    { id: "rl-admirals-feast", name: "Admiral's Feast", calories: 1420, description: "Fried shrimp, bay scallops, clam strips and flounder" },
    { id: "rl-seaside-shrimp", name: "Seaside Shrimp Trio", calories: 1110, description: "Three styles of shrimp: grilled, fried and scampi" },
    { id: "rl-seafood-feast", name: "Bar Harbor Seafood Feast", calories: 1380, description: "Lobster, scallops and shrimp in a garlic-butter sauce" }
  ],
  "Live Maine Lobster & Crab": [
    { id: "rl-live-lobster", name: "Live Maine Lobster", calories: 380, description: "Steamed or roasted with crab-and-seafood stuffing" },
    { id: "rl-lobster-tail", name: "Rock Lobster Tail", calories: 440, description: "Wild-caught Caribbean lobster tail" },
    { id: "rl-crab-legs", name: "Snow Crab Legs", calories: 440, description: "A full pound of wild-caught snow crab legs" },
    { id: "rl-king-crab", name: "Wild-Caught King Crab Legs", calories: 580, description: "Over a pound of premium king crab legs" }
  ],
  "Fresh Caught Seafood": [
    { id: "rl-salmon", name: "Atlantic Salmon", calories: 540, description: "Wood-grilled fresh Atlantic salmon" },
    { id: "rl-tilapia", name: "Tilapia", calories: 320, description: "Oven-broiled with fresh herbs" },
    { id: "rl-flounder", name: "Wild-Caught Flounder", calories: 420, description: "Hand-breaded and fried golden brown" },
    { id: "rl-cod", name: "Hand-Breaded Cod", calories: 1080, description: "Wild-caught cod fillets, hand-breaded" }
  ],
  "Signature Sides": [
    { id: "rl-biscuits", name: "Cheddar Bay Biscuits (2)", calories: 380, description: "Warm, house-made cheese biscuits" },
    { id: "rl-fries", name: "French Fries", calories: 420, description: "Crispy seasoned fries" },
    { id: "rl-rice", name: "Wild Rice Pilaf", calories: 180, description: "Long-grain wild rice blend" },
    { id: "rl-potato", name: "Baked Potato", calories: 270, description: "Classic baked potato" },
    { id: "rl-broccoli", name: "Fresh Broccoli", calories: 40, description: "Steamed fresh broccoli" },
    { id: "rl-coleslaw", name: "Coleslaw", calories: 260, description: "Creamy house-made coleslaw" }
  ],
  "Sweet Waves": [
    { id: "rl-brownie", name: "Chocolate Wave", calories: 1110, description: "Warm chocolate cake with vanilla ice cream" },
    { id: "rl-cheesecake", name: "New York Style Cheesecake", calories: 820, description: "Classic NY cheesecake" },
    { id: "rl-key-lime", name: "Key Lime Pie", calories: 420, description: "Traditional Florida key lime pie" }
  ],
  "Lighthouse Refreshments": [
    { id: "rl-coke", name: "Coca-Cola", calories: 200, description: "Classic Coca-Cola" },
    { id: "rl-sprite", name: "Sprite", calories: 200, description: "Lemon-lime soda" },
    { id: "rl-lemonade", name: "Minute Maid Lemonade", calories: 180, description: "Fresh-squeezed lemonade" },
    { id: "rl-iced-tea", name: "Fresh-Brewed Iced Tea", calories: 0, description: "Unsweetened iced tea" }
  ]
};

export const redLobsterItems: FastFoodItem[] = Object.values(RED_LOBSTER_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Red Lobster",
      item: item.name,
      calories: item.calories,
      category: Object.entries(RED_LOBSTER_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );