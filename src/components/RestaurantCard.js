import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log(resData)

  const {loggedInUser} = useContext(UserContext);

  const {
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines = [],
    sla = {},
    name,
  } = resData?.info;

  return (
    <div data-testid="resCard" className="RestaurantCard p-4 m-4 w-[250] bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img
        className="restaurant-image rounded-lg"
        src={LOGO_URL + cloudinaryImageId}
        alt="restaurant"
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h5>User: {loggedInUser}</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
   return (props) => {
      return (
        <div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
        </div>
      )
   }
}

export default RestaurantCard;
