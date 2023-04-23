import { useParams } from 'react-router-dom';

import Restaurant from '../components/Restaurant';

import useFetchRestaurant from '../hooks/useFetchRestaurant';

export default function RestaurantDetailPage() {
  const { id } = useParams();

  const restaurant = useFetchRestaurant(id);

  if (!restaurant) {
    return null;
  }

  return (
    <Restaurant restaurant={restaurant} />
  );
}
