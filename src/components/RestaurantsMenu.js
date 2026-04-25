import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantsCategory from "./RestaurantsCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0)

  const resInfo = useRestaurantMenu(resId); //Used Custom Hook where we written menu fetching logic.

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  //console.log({categories});

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines} - {costForTwoMessage}
      </p>

      {/* categories accordian */}

      {categories.map((category, index) => (
        <RestaurantsCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true :false}
          setShowIndex ={() => setShowIndex(index)}
        />
        // <RestaurantsCategory
        //   key={`${category?.card?.card?.categoryId || "cat"}-${index}`}
        //   data={category?.card?.card}
        // />

      ))}

      {/* <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name} - Rs.{items.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default RestaurantMenu;
