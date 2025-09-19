import { FastFoodItem } from '../types';

// Export categories for menu organization
export const PEI_WEI_CATEGORIES = {
  "Signature Rice Bowls": [
    { id: "pw-orange-chicken", name: "Orange Chicken Bowl", calories: 960 },
    { id: "pw-kung-pao", name: "Kung Pao Chicken Bowl", calories: 780 },
    { id: "pw-mongolian-beef", name: "Mongolian Beef Bowl", calories: 840 },
    { id: "pw-honey-chicken", name: "Honey-Seared Chicken Bowl", calories: 720 },
    { id: "pw-sesame-chicken", name: "Sesame Chicken Bowl", calories: 890 },
    { id: "pw-sweet-sour", name: "Sweet & Sour Chicken Bowl", calories: 850 },
    { id: "pw-teriyaki", name: "Teriyaki Chicken Bowl", calories: 760 },
    { id: "pw-thai-dynamite", name: "Thai Dynamite Bowl", calories: 920 }
  ],
  "Wok-Fired Noodles": [
    { id: "pw-pad-thai", name: "Pad Thai", calories: 940 },
    { id: "pw-lo-mein", name: "Lo Mein", calories: 880 },
    { id: "pw-dan-dan", name: "Dan Dan Noodles", calories: 920 },
    { id: "pw-korean-noodles", name: "Korean Glass Noodles", calories: 840 },
    { id: "pw-cauliflower-rice", name: "Cauliflower Rice Bowl", calories: 580 }
  ],
  "Small Plates & Starters": [
    { id: "pw-lettuce-wraps", name: "Asian Chicken Lettuce Wraps", calories: 540 },
    { id: "pw-dumplings", name: "Pork Dumplings (4)", calories: 320 },
    { id: "pw-spring-rolls", name: "Vegetable Spring Rolls (2)", calories: 240 },
    { id: "pw-edamame", name: "Edamame", calories: 180 },
    { id: "pw-crab-wontons", name: "Crab Wontons (4)", calories: 360 }
  ],
  "Fresh Salads": [
    { id: "pw-asian-chopped", name: "Asian Chopped Chicken Salad", calories: 520 },
    { id: "pw-mandarin-crunch", name: "Mandarin Crunch Salad", calories: 480 },
    { id: "pw-ginger-broccoli", name: "Ginger Broccoli Chicken Salad", calories: 440 }
  ],
  "Sushi Rolls": [
    { id: "pw-spicy-tuna", name: "Spicy Tuna Roll", calories: 460 },
    { id: "pw-california", name: "California Roll", calories: 380 },
    { id: "pw-tempura-roll", name: "Tempura Shrimp Roll", calories: 490 }
  ],
  "Sides & Add-Ons": [
    { id: "pw-white-rice", name: "Steamed White Rice", calories: 210 },
    { id: "pw-brown-rice", name: "Steamed Brown Rice", calories: 190 },
    { id: "pw-fried-rice", name: "Fried Rice", calories: 340 },
    { id: "pw-mixed-veggies", name: "Mixed Vegetables", calories: 120 }
  ],
  "Desserts": [
    { id: "pw-cheesecake", name: "New York Cheesecake", calories: 420 },
    { id: "pw-fortune-cookie", name: "Fortune Cookie", calories: 30 }
  ],
  "Beverages": [
    { id: "pw-thai-tea", name: "Thai Iced Tea", calories: 180 },
    { id: "pw-boba-tea", name: "Boba Milk Tea", calories: 240 },
    { id: "pw-fountain", name: "Fountain Drink", calories: 180 }
  ]
};

// Transform categories into a flat array for the menu
export const peiWeiItems: FastFoodItem[] = Object.values(PEI_WEI_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Pei Wei Asian Kitchen",
      item: item.name,
      calories: item.calories,
      category: Object.entries(PEI_WEI_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );