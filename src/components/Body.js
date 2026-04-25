import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { BNG_SWIGGY_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  // State hook to manage restaurant data
  // Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BNG_SWIGGY_API);
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

  const { loggedInUser, setUserName } = useContext(UserContext)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search-btn m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-0.5 bg-green-100 m-4 rounded-md cursor-pointer"
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
        <div className="search-btn m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-0.5 bg-gray-100 rounded-md cursor-pointer"
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
        <div className="search-btn m-4 p-4 flex items-center">
          <label className="p-2">UserName:</label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="restaurant-container flex flex-wrap">
        {filterRestaurants.map((restaurantData) => (
          <Link
            key={restaurantData.info.id}
            to={"/restaurants/" + restaurantData.info.id}
          >
            {restaurantData.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurantData} />
            ) : (
              <RestaurantCard resData={restaurantData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
