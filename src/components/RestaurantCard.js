import { CDN_URL, LOGO_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {resData ? (
        <>
          <img
            className="res-logo"
            src={CDN_URL + resData.info?.cloudinaryImageId}
          />
          <h4>{name}</h4>
          <h6>{cuisines.join(" , ")}</h6>
          <h4>{avgRating}</h4>
          <h5>{costForTwo}</h5>
          <h6>{sla.slaString}</h6>
        </>
      ) : (
        <p>Loading...</p> // Placeholder when data is not available
      )}
    </div>
  );
};

export default RestaurantCard;
