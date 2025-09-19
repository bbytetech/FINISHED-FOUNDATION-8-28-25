export const HUHOT_CATEGORIES = {
  "Mongolian Grill Bowls": [
    { id: "huhot-chicken-bowl", name: "Create Your Own Chicken Bowl", calories: 650 },
    { id: "huhot-beef-bowl", name: "Create Your Own Beef Bowl", calories: 720 },
    { id: "huhot-shrimp-bowl", name: "Create Your Own Shrimp Bowl", calories: 580 },
    { id: "huhot-tofu-bowl", name: "Create Your Own Tofu Bowl", calories: 490 }
  ],
  "HuHot Signature Bowls": [
    { id: "huhot-khan-bowl", name: "Khan's Favorite", calories: 780 },
    { id: "huhot-mongol-bowl", name: "Mongol Bowl", calories: 840 },
    { id: "huhot-thai-bowl", name: "Thai Bowl", calories: 720 }
  ],
  "Fresh Proteins": [
    { id: "huhot-chicken", name: "Grilled Chicken", calories: 120 },
    { id: "huhot-beef", name: "Grilled Beef", calories: 150 },
    { id: "huhot-pork", name: "Grilled Pork", calories: 140 },
    { id: "huhot-shrimp", name: "Grilled Shrimp", calories: 90 },
    { id: "huhot-tofu", name: "Grilled Tofu", calories: 80 }
  ],
  "Noodles & Rice": [
    { id: "huhot-udon", name: "Udon Noodles", calories: 220 },
    { id: "huhot-yakisoba", name: "Yakisoba Noodles", calories: 200 },
    { id: "huhot-rice-noodles", name: "Rice Noodles", calories: 190 },
    { id: "huhot-white-rice", name: "White Rice", calories: 180 },
    { id: "huhot-fried-rice", name: "Fried Rice", calories: 240 }
  ],
  "Fresh Vegetables": [
    { id: "huhot-broccoli", name: "Fresh Broccoli", calories: 30 },
    { id: "huhot-carrots", name: "Shredded Carrots", calories: 25 },
    { id: "huhot-mushrooms", name: "Mushrooms", calories: 20 },
    { id: "huhot-cabbage", name: "Shredded Cabbage", calories: 15 },
    { id: "huhot-onions", name: "Sliced Onions", calories: 20 },
    { id: "huhot-peppers", name: "Bell Peppers", calories: 15 },
    { id: "huhot-bean-sprouts", name: "Bean Sprouts", calories: 10 },
    { id: "huhot-water-chestnuts", name: "Water Chestnuts", calories: 25 }
  ],
  "Signature Sauces": [
    { id: "huhot-mongolian", name: "Mongolian Sauce", calories: 60 },
    { id: "huhot-teriyaki", name: "Teriyaki Sauce", calories: 70 },
    { id: "huhot-garlic", name: "Garlic Sauce", calories: 50 },
    { id: "huhot-szechuan", name: "Szechuan Sauce", calories: 45 },
    { id: "huhot-kung-pao", name: "Kung Pao Sauce", calories: 55 },
    { id: "huhot-ginger", name: "Ginger Sauce", calories: 40 }
  ]
};

// Export menu items array
export const huhotItems: FastFoodItem[] = Object.values(HUHOT_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "HuHot Mongolian Grill",
      item: item.name,
      calories: item.calories,
      category: Object.entries(HUHOT_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );