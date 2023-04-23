import { Link } from 'react-router-dom';

import Restaurant from '../models/Restaurant';

type RestaurantsProps = {
  restaurants: Restaurant[];
};

export default function Restaurants({ restaurants }: RestaurantsProps) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link to={`/restaurants/${restaurant.id}`}>
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
