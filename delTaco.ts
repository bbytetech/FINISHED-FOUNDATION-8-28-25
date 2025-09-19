import { FastFoodItem } from '../types';

const DEL_TACO_CATEGORIES = {
  "Epic Burritos": [
    { id: "dt-epic-cali", name: "Epic Cali Bacon Burrito", calories: 1040, description: "Loaded California-style burrito" },
    { id: "dt-epic-original", name: "Epic Original Mex Burrito", calories: 970, description: "Classic Mexican burrito" },
    { id: "dt-epic-beyond", name: "Epic Beyond Original Mex Burrito", calories: 940, description: "Plant-based protein burrito" },
    { id: "dt-epic-fresh", name: "Epic Fresh Avocado Burrito", calories: 880, description: "Fresh avocado burrito" }
  ],
  "Signature Tacos": [
    { id: "dt-del-taco", name: "Del Taco", calories: 300, description: "Signature taco" },
    { id: "dt-grilled-chicken", name: "Grilled Chicken Taco", calories: 210, description: "Grilled chicken taco" },
    { id: "dt-fish-taco", name: "Beer Battered Fish Taco", calories: 290, description: "Beer-battered fish taco" },
    { id: "dt-beyond-taco", name: "Beyond Taco", calories: 260, description: "Plant-based taco" }
  ],
  "Platos & Combinations": [
    { id: "dt-2taco-plato", name: "2 Del Tacos Plato", calories: 740, description: "Two tacos with sides" },
    { id: "dt-wet-burrito", name: "Wet Burrito Plato", calories: 890, description: "Smothered burrito plate" },
    { id: "dt-chicken-verde", name: "Pollo Verde Wet Burrito", calories: 820, description: "Green sauce chicken burrito" }
  ],
  "Fresh Quesadillas": [
    { id: "dt-quesadilla", name: "Chicken Quesadilla", calories: 550, description: "Grilled chicken quesadilla" }
  ],
  "Loaded Fries & Nachos": [
    { id: "dt-nachos", name: "Deluxe Chili Cheddar Fries", calories: 610, description: "Loaded chili cheese fries" },
    { id: "dt-queso-nachos", name: "Queso Loaded Nachos", calories: 530, description: "Loaded queso nachos" },
    { id: "dt-chips-queso", name: "Chips & Queso", calories: 290, description: "Fresh chips with queso" }
  ],
  "Sides & Add-ons": [
    { id: "dt-fries", name: "Crinkle Cut Fries", calories: 280, description: "Crispy crinkle fries" },
    { id: "dt-beans", name: "Beans & Cheese", calories: 230, description: "Refried beans with cheese" },
    { id: "dt-rice", name: "Cilantro Lime Rice", calories: 180, description: "Seasoned rice" },
    { id: "dt-chips", name: "Chips & Guacamole", calories: 260, description: "Fresh chips with guacamole" }
  ]
};

export const delTacoItems: FastFoodItem[] = Object.values(DEL_TACO_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Del Taco",
      item: item.name,
      calories: item.calories,
      category: Object.entries(DEL_TACO_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );