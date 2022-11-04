import {Food} from './app/sharing/models/Food';


export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Fish-Fry',
    cookTime: '10-20',
    price: 100,
    favorite: false,
    origins: ['Kerala'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['Starter', 'Fish', 'Lunch'],
  },
  {
    id:'2',
    name: 'Chicken-Masala',
    price: 200,
    cookTime: '20-30',
    favorite: true,
    origins: ['Mahashtra'],
    stars: 4.7,
    imageUrl: 'assets/food-2.avif',
    tags: ['MainCourse', 'Lunch','Dinner'],
  },
  {
    id:'3',
    name: 'Chicken-Thali',
    price: 200,
    cookTime: '10-15',
    favorite: false,
    origins: ['Maharashtra'],
    stars: 3.5,
    imageUrl: 'assets/food-3.webp',
    tags: ['Dinner','MainCourse','Lunch'],
  },
  {
    id:'4',
    name: 'Chicken-Tikka',
    price: 100,
    cookTime: '15-20',
    favorite: true,
    origins: ['Kerala'],
    stars: 3.3,
    imageUrl: 'assets/food-4.jpeg',
    tags: ['Starter', 'Lunch'],
  },
  {
    id:'5',
    name: 'Mutton-Biryani',
    price: 110,
    cookTime: '40-50',
    favorite: false,
    origins: ['Hyderabad'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['Dinner'],
  },
  {
    id:'6',
    name: 'Mutton Seek Kabab',
    price: 90,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpeg',
    tags: ['Dinner', 'Starter', 'Lunch'],
  },
]
