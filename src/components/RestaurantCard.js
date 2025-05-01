import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOrderClick = (e) => {
    e.preventDefault(); // Prevent navigation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {resData ? (
        <>
          <div className="relative h-48 overflow-hidden">
            <img
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              src={CDN_URL + cloudinaryImageId}
              alt={name}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">⭐</span>
                <span className="text-white font-semibold">{avgRating}</span>
                <span className="text-white text-sm">•</span>
                <span className="text-white text-sm">{sla.slaString}</span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">
              {name}
            </h3>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {cuisines.join(", ")}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">{costForTwo}</span>
              <button
                onClick={handleOrderClick}
                className={`relative px-4 py-2 bg-green-500 text-white rounded-lg overflow-hidden group ${
                  isAnimating ? "animate-pulse" : ""
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Order Now</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isAnimating ? "scale-150 rotate-12" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span
                  className={`absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    isAnimating ? "scale-x-100" : ""
                  }`}
                />
                {isAnimating && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full animate-bounce" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="p-4 text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      )}
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
            Promoted
          </span>
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
