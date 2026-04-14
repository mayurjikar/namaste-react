import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State hook to manage restaurant data
  // Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.733804&lng=78.59559899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    //console.log(json.data.cards[1]);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilterRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h2>
        Looks like you're offline!! Please check your internet connection.
      </h2>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-btn">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilterRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.0,
            );
            setFilterRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filterRestaurants.map((restaurantData) => (
          <Link
            key={restaurantData.info.id}
            to={"/restaurants/" + restaurantData.info.id}
          >
            <RestaurantCard resData={restaurantData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
