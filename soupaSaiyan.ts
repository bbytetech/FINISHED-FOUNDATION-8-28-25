import { FastFoodItem } from '../types';

const SOUPA_SAIYAN_CATEGORIES = {
  "Signature Ramen": [
    { id: "ss-ultra-instinct", name: "Ultra Instinct Ramen", calories: 680, description: "Premium tonkotsu broth, chashu pork, soft-boiled egg, nori" },
    { id: "ss-super-saiyan", name: "Super Saiyan Ramen", calories: 720, description: "Spicy miso broth, extra chashu, corn, bamboo shoots" },
    { id: "ss-vegeta-bowl", name: "Vegeta's Pride Bowl", calories: 580, description: "Vegetarian shoyu broth, tofu, mushrooms, spinach" },
    { id: "ss-kamehameha", name: "Kamehameha Ramen", calories: 750, description: "Rich garlic tonkotsu, black garlic oil, extra pork" },
    { id: "ss-piccolo", name: "Piccolo's Green Bowl", calories: 520, description: "Vegan broth, green tea noodles, seasonal vegetables" }
  ],
  "Power-Up Bowls": [
    { id: "ss-goku-bowl", name: "Goku's Training Bowl", calories: 820, description: "Rice bowl with grilled chicken, egg, vegetables" },
    { id: "ss-saiyan-rice", name: "Saiyan Power Rice", calories: 780, description: "Fried rice with mixed proteins, vegetables" },
    { id: "ss-fusion-bowl", name: "Fusion Bowl", calories: 680, description: "Half ramen, half rice with choice of protein" },
    { id: "ss-nimbus-bowl", name: "Flying Nimbus Bowl", calories: 580, description: "Light broth with rice noodles, shrimp, vegetables" }
  ],
  "Side Quests": [
    { id: "ss-gyoza", name: "Dragon Ball Gyoza (6 pc)", calories: 320, description: "Pan-fried dumplings" },
    { id: "ss-bao", name: "Power Level Bao (2 pc)", calories: 260, description: "Steamed buns with pork or tofu" },
    { id: "ss-edamame", name: "Senzu Bean Edamame", calories: 120, description: "Steamed soybeans with sea salt" },
    { id: "ss-wings", name: "Saiyan Wings (6 pc)", calories: 450, description: "Asian-style chicken wings" }
  ],
  "Special Techniques": [
    { id: "ss-kaio-ken", name: "Kaio-ken Spicy Challenge", calories: 920, description: "Extra spicy ramen with special sauce" },
    { id: "ss-fusion-dance", name: "Fusion Dance Combo", calories: 1200, description: "Combination of two signature dishes" },
    { id: "ss-spirit-bomb", name: "Spirit Bomb Party Bowl", calories: 1500, description: "Large sharing bowl for groups" }
  ],
  "Training Fuel": [
    { id: "ss-protein-boost", name: "Protein Power-Up", calories: 180, description: "Extra protein addition" },
    { id: "ss-egg-power", name: "Extra Power Level (Egg)", calories: 80, description: "Additional soft-boiled egg" },
    { id: "ss-noodle-boost", name: "Noodle Power-Up", calories: 200, description: "Extra serving of noodles" }
  ],
  "Zenkai Boost Drinks": [
    { id: "ss-matcha", name: "Super Saiyan Matcha", calories: 120, description: "Green tea latte" },
    { id: "ss-boba", name: "Dragon Ball Boba Tea", calories: 180, description: "Milk tea with boba" },
    { id: "ss-ramune", name: "Power Level Ramune", calories: 90, description: "Japanese soda" }
  ]
};

export const soupaSaiyanItems: FastFoodItem[] = Object.values(SOUPA_SAIYAN_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Soupa Saiyan",
      item: item.name,
      calories: item.calories,
      category: Object.entries(SOUPA_SAIYAN_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );