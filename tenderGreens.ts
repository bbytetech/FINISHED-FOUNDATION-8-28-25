import { FastFoodItem } from '../types';

const TENDER_GREENS_CATEGORIES = {
  "Plates": [
    { id: "tender-greens-chicken", name: "Grilled Chicken Plate", calories: 580, description: "Herb-marinated chicken with sides" },
    { id: "tender-greens-tuna", name: "Herb Brushed Tuna Plate", calories: 620, description: "Seared tuna with sides" },
    { id: "tender-greens-steak", name: "Salt & Pepper Steak Plate", calories: 680, description: "Grilled steak with sides" },
    { id: "tender-greens-falafel", name: "Falafel Plate", calories: 540, description: "House-made falafel with sides" }
  ],
  "Salads": [
    { id: "tender-greens-chipotle", name: "Chipotle Barbecue Chicken Salad", calories: 510, description: "Romaine, grilled chicken, avocado, tortilla strips, chipotle dressing" },
    { id: "tender-greens-tuna-nicoise", name: "Tuna Nicoise Salad", calories: 480, description: "Tuna, egg, green beans, potatoes, olives, capers" },
    { id: "tender-greens-vegan", name: "Happy Vegan Salad", calories: 420, description: "Farro, cranberries, nuts, avocado, quinoa" },
    { id: "tender-greens-chinese", name: "Chinese Chicken Salad", calories: 540, description: "Romaine, chicken, wontons, peanuts, sesame dressing" }
  ],
  "Sandwiches": [
    { id: "tender-greens-chicken-sandwich", name: "Grilled Chicken Sandwich", calories: 580, description: "Grilled chicken, avocado, aioli on ciabatta" },
    { id: "tender-greens-fried-chicken", name: "Fried Chicken Sandwich", calories: 640, description: "Buttermilk fried chicken, slaw on ciabatta" },
    { id: "tender-greens-tuna-sandwich", name: "Herb Brushed Tuna Sandwich", calories: 620, description: "Seared tuna, aioli, arugula on ciabatta" }
  ],
  "Soups": [
    { id: "tender-greens-tomato", name: "Tomato Soup", calories: 220, description: "Roasted tomato soup" },
    { id: "tender-greens-chicken-noodle", name: "Chicken Noodle Soup", calories: 240, description: "Classic chicken noodle soup" }
  ],
  "Sides": [
    { id: "tender-greens-mashed", name: "Mashed Potatoes", calories: 210, description: "Yukon gold mashed potatoes" },
    { id: "tender-greens-vegetables", name: "Roasted Vegetables", calories: 180, description: "Seasonal roasted vegetables" }
  ]
};

export const tenderGreensItems: FastFoodItem[] = Object.values(TENDER_GREENS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Tender Greens",
      item: item.name,
      calories: item.calories,
      category: Object.entries(TENDER_GREENS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );