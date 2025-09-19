import { FastFoodItem } from '../types';

const BOJANGLES_CATEGORIES = {
  "Famous Chicken & Biscuits": [
    { id: "bo-2pc", name: "2 Piece Dinner", calories: 780 },
    { id: "bo-3pc", name: "3 Piece Dinner", calories: 980 },
    { id: "bo-4pc", name: "4 Piece Dinner", calories: 1180 },
    { id: "bo-breast", name: "Homestyle Chicken Breast", calories: 380 },
    { id: "bo-thigh", name: "Homestyle Chicken Thigh", calories: 280 },
    { id: "bo-wing", name: "Homestyle Chicken Wing", calories: 180 },
    { id: "bo-leg", name: "Homestyle Chicken Leg", calories: 190 }
  ],
  "Supremes™ & Tenders": [
    { id: "bo-supremes-2", name: "2 Piece Supremes", calories: 270 },
    { id: "bo-supremes-3", name: "3 Piece Supremes", calories: 405 },
    { id: "bo-supremes-4", name: "4 Piece Supremes", calories: 540 },
    { id: "bo-supremes-box", name: "Supremes Combo", calories: 890 }
  ],
  "Signature Sandwiches": [
    { id: "bo-sandwich", name: "Chicken Sandwich", calories: 690 },
    { id: "bo-sandwich-spicy", name: "Spicy Chicken Sandwich", calories: 710 },
    { id: "bo-grilled-sandwich", name: "Grilled Chicken Sandwich", calories: 560 },
    { id: "bo-club", name: "Chicken Club Sandwich", calories: 780 }
  ],
  "Famous Biscuit Breakfast™": [
    { id: "bo-cajun-biscuit", name: "Cajun Filet Biscuit", calories: 560 },
    { id: "bo-sausage-biscuit", name: "Sausage Biscuit", calories: 510 },
    { id: "bo-bacon-biscuit", name: "Bacon, Egg & Cheese Biscuit", calories: 450 },
    { id: "bo-plain-biscuit", name: "Plain Biscuit", calories: 260 },
    { id: "bo-pimento-biscuit", name: "Pimento Cheese Biscuit", calories: 410 },
    { id: "bo-steak-biscuit", name: "Country Fried Steak Biscuit", calories: 610 },
    { id: "bo-chicken-rice", name: "Roasted Chicken Bites & Rice Bowl", calories: 690 },
    { id: "bo-country-ham", name: "Country Ham Biscuit", calories: 430 },
    { id: "bo-steak-biscuit", name: "Steak Biscuit", calories: 480 },
    { id: "bo-gravy-biscuit", name: "Biscuit & Gravy", calories: 580 },
    { id: "bo-egg-cheese", name: "Egg & Cheese Biscuit", calories: 380 },
    { id: "bo-bo-berry", name: "Bo-Berry Biscuit", calories: 390 },
    { id: "bo-cinnamon", name: "Cinnamon Biscuit", calories: 370 }
  ],
  "Southern Fixin's™": [
    { id: "bo-fries", name: "Seasoned Fries", calories: 380 },
    { id: "bo-bo-rounds", name: "Bo-Rounds", calories: 420 },
    { id: "bo-dirty-rice", name: "Cajun Pintos & Rice", calories: 260 },
    { id: "bo-mac", name: "Mac & Cheese", calories: 310 },
    { id: "bo-green-beans", name: "Green Beans", calories: 60 },
    { id: "bo-mashed", name: "Mashed Potatoes & Gravy", calories: 190 },
    { id: "bo-coleslaw", name: "Coleslaw", calories: 150 }
  ],
  "Sweet Treats": [
    { id: "bo-sweet-potato", name: "Sweet Potato Pie", calories: 280 },
    { id: "bo-cinnamon-twist", name: "Cinnamon Twist", calories: 260 },
    { id: "bo-cookie", name: "Chocolate Chip Cookie", calories: 220 }
  ],
  "Beverages": [
    { id: "bo-pepsi", name: "Pepsi (Medium)", calories: 200 },
    { id: "bo-diet-pepsi", name: "Diet Pepsi (Medium)", calories: 0 },
    { id: "bo-mtn-dew", name: "Mountain Dew (Medium)", calories: 240 },
    { id: "bo-dr-pepper", name: "Dr Pepper (Medium)", calories: 180 },
    { id: "bo-sweet-tea", name: "Sweet Tea (Medium)", calories: 120 },
    { id: "bo-unsweet-tea", name: "Unsweetened Tea (Medium)", calories: 0 },
    { id: "bo-lemonade", name: "Legendary Iced Tea™ (Medium)", calories: 140 }
  ],
  "Family Meals": [
    { id: "bo-8pc", name: "8 Piece Family Meal", calories: 3120 },
    { id: "bo-12pc", name: "12 Piece Family Meal", calories: 4680 },
    { id: "bo-20pc", name: "20 Piece Family Meal", calories: 7800 },
    { id: "bo-supremes-family", name: "12 Piece Supremes Family Meal", calories: 3240 }
  ]
};

export const bojanglesItems: FastFoodItem[] = Object.values(BOJANGLES_CATEGORIES)
  .flatMap(category => 
    category.map(item => ({
      id: item.id,
      restaurant: "Bojangles",
      item: item.name,
      calories: item.calories,
      category: Object.entries(BOJANGLES_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );