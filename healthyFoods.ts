import { FastFoodItem } from '../types';

// Define categories for Healthy Foods restaurant
const HEALTHY_FOODS_CATEGORIES = {
  "Power Bowls": [
    { id: "healthy-quinoa-bowl", name: "Quinoa Power Bowl", calories: 440 },
    { id: "healthy-buddha-bowl", name: "Buddha Bowl", calories: 410 },
    { id: "healthy-acai-bowl", name: "Acai Superfood Bowl", calories: 380 },
    { id: "healthy-poke-bowl", name: "Tuna Poke Bowl", calories: 420 },
    { id: "healthy-morning-glory", name: "Morning Glory Bowl", calories: 410 },
    { id: "healthy-dragon", name: "Dragon Bowl", calories: 390 }
  ],
  "Fresh Salads": [
    { id: "healthy-kale-caesar", name: "Kale Caesar Salad", calories: 320 },
    { id: "healthy-mediterranean", name: "Mediterranean Salad", calories: 340 },
    { id: "healthy-harvest", name: "Harvest Bowl Salad", calories: 380 },
    { id: "healthy-cobb", name: "Superfood Cobb Salad", calories: 420 },
    { id: "healthy-quinoa-salad", name: "Quinoa & Avocado Salad", calories: 360 }
  ],
  "Protein Plates": [
    { id: "healthy-grilled-chicken", name: "Grilled Chicken Plate", calories: 310 },
    { id: "healthy-baked-salmon", name: "Baked Salmon Plate", calories: 360 },
    { id: "healthy-tofu-steak", name: "Tofu Steak Plate", calories: 280 },
    { id: "healthy-tempeh", name: "Grilled Tempeh Plate", calories: 290 },
    { id: "healthy-chickpea", name: "Spiced Chickpea Plate", calories: 270 }
  ],
  "Fresh Wraps": [
    { id: "healthy-hummus-wrap", name: "Hummus & Veggie Wrap", calories: 340 },
    { id: "healthy-falafel-wrap", name: "Falafel Wrap", calories: 380 },
    { id: "healthy-chicken-wrap", name: "Grilled Chicken Wrap", calories: 360 },
    { id: "healthy-tofu-wrap", name: "Tofu & Avocado Wrap", calories: 320 },
    { id: "healthy-quinoa-wrap", name: "Quinoa & Black Bean Wrap", calories: 350 }
  ],
  "Superfood Sides": [
    { id: "healthy-sweet-potato", name: "Roasted Sweet Potato", calories: 120 },
    { id: "healthy-quinoa", name: "Herbed Quinoa", calories: 180 },
    { id: "healthy-kale-slaw", name: "Kale & Brussels Slaw", calories: 90 },
    { id: "healthy-roasted-veggies", name: "Roasted Seasonal Vegetables", calories: 110 },
    { id: "healthy-avocado", name: "Avocado & Microgreens", calories: 160 }
  ],
  "Fresh Pressed Juices": [
    { id: "healthy-green-juice", name: "Green Goddess Juice", calories: 120 },
    { id: "healthy-beet-juice", name: "Beet & Ginger Juice", calories: 110 },
    { id: "healthy-carrot-juice", name: "Carrot Apple Juice", calories: 140 },
    { id: "healthy-celery-juice", name: "Pure Celery Juice", calories: 40 },
    { id: "healthy-citrus-juice", name: "Citrus Immunity Juice", calories: 90 }
  ],
  "Healthy Snacks": [
    { id: "healthy-hummus-plate", name: "Hummus & Veggie Plate", calories: 240 },
    { id: "healthy-avocado-toast", name: "Avocado Toast", calories: 280 },
    { id: "healthy-energy-bites", name: "Energy Protein Bites", calories: 160 },
    { id: "healthy-chia-pudding", name: "Chia Seed Pudding", calories: 190 },
    { id: "healthy-trail-mix", name: "Superfood Trail Mix", calories: 210 }
  ]
};

// Transform categories into a flat array for the menu
export const healthyFoodItems: FastFoodItem[] = Object.values(HEALTHY_FOODS_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Healthy Foods",
      item: item.name,
      calories: item.calories
    }))
  );