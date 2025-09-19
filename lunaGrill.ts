import { FastFoodItem } from '../types';

const LUNA_GRILL_CATEGORIES = {
  "Mediterranean Plates": [
    { id: "luna-chicken-kabob", name: "Chicken Kabob", calories: 580, description: "Marinated chicken breast with rice and vegetables" },
    { id: "luna-beef-kabob", name: "Beef Kabob", calories: 640, description: "Marinated sirloin with rice and vegetables" },
    { id: "luna-gyros-plate", name: "Gyros Plate", calories: 710, description: "Traditional gyros with rice and vegetables" }
  ],
  "Wraps & Pitas": [
    { id: "luna-chicken-wrap", name: "Chicken Wrap", calories: 520, description: "Grilled chicken with hummus and vegetables" },
    { id: "luna-falafel-wrap", name: "Falafel Wrap", calories: 480, description: "Crispy falafel with tahini sauce" },
    { id: "luna-gyros-wrap", name: "Gyros Wrap", calories: 590, description: "Gyros meat with tzatziki sauce" }
  ],
  "Salads": [
    { id: "luna-greek", name: "Greek Salad", calories: 320, description: "Mixed greens with feta and olives" },
    { id: "luna-mediterranean", name: "Mediterranean Salad", calories: 290, description: "Fresh vegetables with house dressing" },
    { id: "luna-chicken-salad", name: "Chicken Salad", calories: 410, description: "Grilled chicken over mixed greens" }
  ],
  "Sides": [
    { id: "luna-hummus", name: "Hummus", calories: 210, description: "Traditional hummus with pita" },
    { id: "luna-falafel", name: "Falafel", calories: 260, description: "Crispy falafel with tahini sauce" },
    { id: "luna-rice", name: "Saffron Rice", calories: 180, description: "Aromatic basmati rice" }
  ]
};

export const lunaGrillItems: FastFoodItem[] = Object.values(LUNA_GRILL_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Luna Grill",
      item: item.name,
      calories: item.calories,
      category: Object.entries(LUNA_GRILL_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );