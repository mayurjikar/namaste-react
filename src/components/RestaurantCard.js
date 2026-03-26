import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { avgRating, cloudinaryImageId, costForTwo, cuisines, sla, name } =
    resData?.info;

  return (
    <div className="RestaurantCard">
      <img
        className="restaurant-image"
        src={LOGO_URL + cloudinaryImageId}
        alt="restaurant"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
