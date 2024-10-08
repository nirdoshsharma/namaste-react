import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200">
      {resData ? (
        <>
          <img
            className="w-full h-[150px] object-cover rounded-t-lg"
            src={CDN_URL + cloudinaryImageId}
            alt={name}
          />
          <div className="p-4">
            <h4 className="text-lg font-bold text-gray-800">{name}</h4>
            <h6 className="text-sm text-gray-600 mb-2">
              {cuisines.join(", ")}
            </h6>
            <div className="flex justify-between items-center text-gray-700">
              <h4 className="font-semibold">{avgRating} ⭐</h4>
              <h5>{costForTwo}</h5>
            </div>
            <h6 className="text-sm text-gray-500">{sla.slaString}</h6>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-0 left-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg shadow-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
