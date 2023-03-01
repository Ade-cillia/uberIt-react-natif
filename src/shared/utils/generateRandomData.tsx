const generateRandomRestaurantData = () => {
  const names = [
    'Burger Palace',
    'Pizza Planet',
    'Taco Town',
    'Sushi Spot',
    'BBQ Joint',
    'Pho Restaurant',
    'Cafe Central',
    'Diner Deluxe',
    'Steak House',
    'Salad Bar',
    'Waffle House',
    'Sandwich Shop',
    'Pasta Place',
    'Bakery',
    'Ice Cream Shop',
    'Coffee Shop',
    'Tea House',
    'Dessert Place',
    'Donut Shop',
    'Juice Bar',
    'Smoothie Shop',
    'Fruit Stand',
    'Cupcake Shop',
    'Pie Shop',
    'Bakery',
    'Bagel Shop',
    'Cafe',
    'Deli',
    'Diner',
  ];
  const deliveryCosts = [
    'Frais de livraison: 2€',
    'Frais de livraison: 4€',
    'Frais de livraison: Gratuit',
    'Frais de livraison: 1,50€',
    'Frais de livraison: 3€',
  ];
  const deliveryTimes = [
    '10 - 20min',
    '20 - 30min',
    '30 - 40min',
    '40 - 50min',
    '50 - 60min',
  ];
  const ratings = [4.8, 4.3, 4.5, 3.7, 3.5, 3.0, 2.5, 2.0];
  const imageUris = [
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  ];

  const randomIndex = (arr: any[]) => Math.floor(Math.random() * arr.length);

  return {
    id:
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15),
    name: names[randomIndex(names)],
    deliveryCost: deliveryCosts[randomIndex(deliveryCosts)],
    deliveryTime: deliveryTimes[randomIndex(deliveryTimes)],
    rating: ratings[randomIndex(ratings)],
    imageUri: imageUris[randomIndex(imageUris)],
  };
};

const randomRestaurantsData = Array.from(
  {length: 20},
  generateRandomRestaurantData,
);

export interface IRestaurant {
  id: string;
  name: string;
  deliveryCost: string;
  deliveryTime: string;
  rating: number;
  imageUri: string;
}

export default randomRestaurantsData;
