import { CDN_URL, LOGO_URL } from "../utils/contants"




const ResturantCard = (props) =>{
    const {resData } = props
     return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      

         {resData  ? (
                <>
                  <img className="res-logo" src= { CDN_URL+resData.info?.cloudinaryImageId}/>
                    <h4>{resData.info.name}</h4>
                     <h6>{resData?.info?.cuisines.join(" , ")}</h6> 
                     <h4>{resData.info.avgRating}</h4>
                    <h5>{resData.info.costForTwo}</h5> 
                </>
        ) : (
          
          <p>Loading...</p> // Placeholder when data is not available
        )}
      </div>
     )
 }

 export default ResturantCard