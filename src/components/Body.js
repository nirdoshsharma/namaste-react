import ResturantCard from "./ResturantCard"
import { useEffect, useState } from "react"

const Body = () => {
    const[listOfResturants, setListOfResturants] = useState([])

  useEffect(() =>{
    fetchData()},[]
  )
    const fetchData = async() => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()
      setListOfResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     
    };

    if(listOfResturants.length == 0){
        return <h1>Loading....</h1>;
      }
        
    return (
        <div className="body">
            <div className="filter">
            <button className="filter-btn" onClick={() => {
                //Filter logic here
                const filteredList = listOfResturants.filter(
                    (res) => res.avgRating>4
            );
              setListOfResturants(filteredList)
            }}>Top Rated Resturants</button>
            <div className="res-container">
            {
                   listOfResturants?.map(resturant => <ResturantCard key= {resturant.id} resData={resturant}/>)
            }
                
             
                </div> 

            </div>
        </div>
    )
 }

 



export default Body