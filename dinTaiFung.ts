import { FastFoodItem } from '../types';

// Export categories for menu organization
export const DIN_TAI_FUNG_CATEGORIES = {
  "Signature Dumplings": [
    { id: "dtf-pork-xlb", name: "Pork Xiao Long Bao (6)", calories: 320 },
    { id: "dtf-crab-xlb", name: "Crab & Pork XLB (6)", calories: 340 },
    { id: "dtf-chicken-xlb", name: "Chicken Xiao Long Bao (6)", calories: 300 },
    { id: "dtf-truffle-xlb", name: "Truffle & Pork XLB (6)", calories: 350 },
    { id: "dtf-shrimp-shaomai", name: "Shrimp & Pork Shao Mai (6)", calories: 310 },
    { id: "dtf-veggie-dumplings", name: "Vegetable & Mushroom Dumplings (6)", calories: 280 },
    { id: "dtf-chicken-dumplings", name: "Chicken Dumplings (6)", calories: 290 }
  ],
  "Handmade Noodles": [
    { id: "dtf-sesame-noodles", name: "Noodles with Sesame Sauce", calories: 440 },
    { id: "dtf-beef-noodle-soup", name: "Beef Noodle Soup", calories: 520 },
    { id: "dtf-wonton-noodle-soup", name: "Wonton Soup", calories: 280 },
    { id: "dtf-dan-dan-noodles", name: "Dan Dan Noodles", calories: 460 },
    { id: "dtf-spicy-wonton-noodles", name: "Spicy Wontons (6)", calories: 310 },
    { id: "dtf-shanghai-rice-noodles", name: "Shanghai Rice Noodles", calories: 380 },
    { id: "dtf-veggie-noodle-soup-1", name: "Vegetable & Mushroom Noodle Soup", calories: 290 }
  ],
  "Wok-Fried Rice": [
    { id: "dtf-pork-fried-rice", name: "Pork Fried Rice", calories: 540 },
    { id: "dtf-chicken-fried-rice", name: "Chicken Fried Rice", calories: 480 },
    { id: "dtf-shrimp-fried-rice", name: "Shrimp Fried Rice", calories: 510 },
    { id: "dtf-veggie-fried-rice", name: "Vegetable Fried Rice", calories: 420 },
    { id: "dtf-egg-fried-rice", name: "Egg Fried Rice", calories: 450 }
  ],
  "Small Plates & Vegetables": [
    { id: "dtf-cucumber-salad", name: "Cucumber Salad", calories: 70 },
    { id: "dtf-seaweed-salad", name: "Seaweed & Bean Curd", calories: 120 },
    { id: "dtf-wood-ear-mushroom-1", name: "Wood Ear Mushroom", calories: 100 },
    { id: "dtf-string-beans", name: "Sautéed String Beans", calories: 180 },
    { id: "dtf-garlic-spinach-1", name: "Spinach with Garlic", calories: 160 },
    { id: "dtf-baby-bok-choy", name: "Baby Bok Choy", calories: 90 }
  ],
  "Sweet Dumplings & Desserts": [
    { id: "dtf-red-bean-bun-1", name: "Red Bean Bun", calories: 260 },
    { id: "dtf-chocolate-xlb-dessert", name: "Chocolate Xiao Long Bao (6)", calories: 280 },
    { id: "dtf-taro-bun-1", name: "Taro Bun", calories: 250 },
    { id: "dtf-sweet-taro-mochi", name: "Sweet Taro Mochi", calories: 220 }
  ]
};

// Transform categories into a flat array for the menu
export const dinTaiFungItems: FastFoodItem[] = Object.values(DIN_TAI_FUNG_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Din Tai Fung",
      item: item.name,
      calories: item.calories,
      category: Object.entries(DIN_TAI_FUNG_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );