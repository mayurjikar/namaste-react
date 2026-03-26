import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

    // State hook to manage restaurant data
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.0);
            setListOfRestaurants(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurantData) => (
          <RestaurantCard key={restaurantData.info.id} resData={restaurantData} />
        ))}
      </div>
    </div>
  );
};

export default Body;