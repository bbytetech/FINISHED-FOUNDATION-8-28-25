import { FastFoodItem } from '../types';

const DIG_INN_CATEGORIES = {
  "Market Bowls": [
    { id: "diginn-charred-chicken", name: "Charred Chicken Bowl", calories: 640, description: "Herb-roasted chicken, seasonal market sides, ancient grains" },
    { id: "diginn-salmon", name: "Wild Salmon Bowl", calories: 580, description: "Sustainably-sourced salmon, market vegetables, brown rice" },
    { id: "diginn-meatballs", name: "Classic Meatballs Bowl", calories: 690, description: "Grass-fed beef meatballs, marinara, seasonal sides" },
    { id: "diginn-tofu", name: "Herb Roasted Tofu Bowl", calories: 520, description: "Organic tofu, seasonal vegetables, brown rice" }
  ],
  "Seasonal Market Plates": [
    { id: "diginn-cauliflower", name: "Roasted Cauliflower Bowl", calories: 480, description: "Herb-roasted cauliflower, quinoa, market vegetables" },
    { id: "diginn-seasonal-market", name: "Seasonal Market Bowl", calories: 490, description: "Chef's selection of seasonal vegetables and grains" },
    { id: "diginn-falafel", name: "Falafel Bowl", calories: 560, description: "House-made falafel, hummus, market vegetables" },
    { id: "diginn-steak", name: "Grilled Steak Bowl", calories: 670, description: "Grass-fed steak, roasted vegetables, ancient grains" }
  ],
  "Market Sides": [
    { id: "diginn-sweet-potato", name: "Roasted Sweet Potato", calories: 220, description: "Maple-glazed roasted sweet potatoes" },
    { id: "diginn-broccoli", name: "Charred Broccoli", calories: 180, description: "Lemon-charred broccoli with garlic" },
    { id: "diginn-brussels", name: "Brussels Sprouts", calories: 210, description: "Roasted brussels sprouts with honey" },
    { id: "diginn-kale", name: "Kale & Apple Salad", calories: 160, description: "Fresh kale, apple, lemon vinaigrette" }
  ],
  "Grains & Bases": [
    { id: "diginn-brown-rice", name: "Brown Rice", calories: 190, description: "Organic brown rice" },
    { id: "diginn-quinoa", name: "Red Quinoa", calories: 210, description: "Organic red quinoa with herbs" },
    { id: "diginn-farro", name: "Herb Farro", calories: 230, description: "Ancient grain farro with fresh herbs" },
    { id: "diginn-cauli-rice", name: "Cauliflower Rice", calories: 120, description: "Low-carb cauliflower rice" }
  ],
  "Proteins": [
    { id: "diginn-chicken-protein", name: "Herb Chicken", calories: 180, description: "Herb-roasted chicken breast" },
    { id: "diginn-salmon-protein", name: "Wild Salmon", calories: 220, description: "Sustainably-sourced salmon" },
    { id: "diginn-tofu-protein", name: "Roasted Tofu", calories: 140, description: "Organic herb-roasted tofu" },
    { id: "diginn-meatball-protein", name: "Grass-Fed Meatballs", calories: 240, description: "House-made grass-fed beef meatballs" }
  ],
  "House-Made Sauces": [
    { id: "diginn-pesto", name: "Basil Pesto", calories: 120, description: "Fresh basil and pine nut pesto" },
    { id: "diginn-tahini", name: "Lemon Tahini", calories: 90, description: "House-made lemon tahini sauce" },
    { id: "diginn-hot-sauce", name: "Charred Jalapeño Hot Sauce", calories: 45, description: "House-made spicy sauce" },
    { id: "diginn-vinaigrette", name: "Citrus Vinaigrette", calories: 80, description: "Light citrus dressing" }
  ]
};

export const diginnItems: FastFoodItem[] = Object.values(DIG_INN_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Dig Inn",
      item: item.name,
      calories: item.calories,
      category: Object.entries(DIG_INN_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );