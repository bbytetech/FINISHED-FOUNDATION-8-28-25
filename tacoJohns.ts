import { FastFoodItem } from '../types';

const TACO_JOHNS_CATEGORIES = {
  "West-Mex® Originals": [
    { id: "tj-potato-oles", name: "Potato Olés", calories: 400 },
    { id: "tj-super-potato-oles", name: "Super Potato Olés", calories: 780 },
    { id: "tj-meat-potato-burrito", name: "Meat & Potato Burrito", calories: 590 }
  ],
  "Crispy Tacos & More": [
    { id: "tj-softshell-taco", name: "Softshell Taco", calories: 180 },
    { id: "tj-crispy-taco", name: "Crispy Taco", calories: 170 },
    { id: "tj-street-taco", name: "Street Taco", calories: 160 }
  ],
  "Signature Burritos": [
    { id: "tj-super-burrito", name: "Super Burrito", calories: 520 },
    { id: "tj-grilled-burrito", name: "Grilled Chicken Burrito", calories: 460 },
    { id: "tj-bean-burrito", name: "Bean Burrito", calories: 380 }
  ],
  "Taco John's Favorites": [
    { id: "tj-taco-bravo", name: "Taco Bravo", calories: 380 },
    { id: "tj-mexican-donut", name: "Mexican Donut Bites", calories: 260 },
    { id: "tj-quesadilla", name: "Chicken Quesadilla", calories: 460 },
    { id: "tj-nachos", name: "Super Nachos", calories: 780 },
    { id: "tj-churros", name: "Churros", calories: 150 }
  ]
};

export const tacoJohnsItems: FastFoodItem[] = Object.values(TACO_JOHNS_CATEGORIES)
  .flatMap(category => 
    category.map((item, _, array) => ({
      id: item.id,
      restaurant: "Taco John's",
      item: item.name,
      calories: item.calories,
      category: Object.entries(TACO_JOHNS_CATEGORIES).find(([_, items]) => items.includes(item))?.[0]
    }))
  );