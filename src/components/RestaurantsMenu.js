import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId); //Used Custom Hook where we written menu fetching logic.

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card,
  );

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        <b>
          {cuisines} - {costForTwoMessage}
        </b>
      </p>
      <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name} - Rs.{items.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
