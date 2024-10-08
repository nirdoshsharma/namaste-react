import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants || []); // Ensure it's an array or an empty array
    setFilteredRestaurant(restaurants || []);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Seems Like you are Offline , Check your Internet Connection</h1>;

  // Conditional Rendreing
  // if(listOfRestaurants.length === 0){
  //     return <Shimmer/>;
  //   }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex-initial">
        <div className="Search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the Restaurant List and update the UI
              // Need Search text
              // console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-1 bg-green-100 m-4 flex items-center"
          onClick={() => {
            //Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList || []);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="res-container flex flex-wrap rounded-lg">
          {filteredRestaurants?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {" "}
              {restaurant.info.parentId < 500 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
