import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../cartSlice";
import { useState } from "react";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const [animatingItems, setAnimatingItems] = useState({});
  const cartItems = useSelector((store) => store.cart.items);

  const handleAdditem = (item) => {
    // Set animation state for this item
    setAnimatingItems((prev) => ({
      ...prev,
      [item.card.info.id]: true,
    }));

    // Dispatch the action
    dispatch(addItem(item));

    // Reset animation after 1 second
    setTimeout(() => {
      setAnimatingItems((prev) => ({
        ...prev,
        [item.card.info.id]: false,
      }));
    }, 1000);
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item.card.info.id === itemId);
  };

  const getItemQuantity = (itemId) => {
    const item = cartItems.find((item) => item.card.info.id === itemId);
    return item ? item.quantity : 0;
  };

  console.log(items);
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {items?.map((item) => {
          const itemInCart = isItemInCart(item.card.info.id);
          const quantity = getItemQuantity(item.card.info.id);
          return (
            <li
              key={item?.card?.info?.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="flex-1">
                <span className="text-lg font-semibold text-gray-800">
                  {item?.card?.info?.name}
                </span>
                <p className="text-sm text-gray-600 mt-1">
                  {item?.card?.info?.description}
                </p>
                <div className="mt-2 text-md font-medium text-gray-700">
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </div>
              </div>
              <div className="relative">
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="w-40 h-40 object-cover rounded-lg"
                  alt={item?.card?.info?.name}
                />
                <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                  {!itemInCart ? (
                    <button
                      className={`p-2 bg-green-500 text-white font-bold shadow-lg rounded-md w-24 transition-all duration-300 hover:bg-green-600 hover:scale-105 ${
                        animatingItems[item.card.info.id]
                          ? "animate-add-to-cart"
                          : ""
                      }`}
                      onClick={() => handleAdditem(item)}
                    >
                      <span className="flex items-center justify-center gap-1">
                        <span>+ Add</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-300 ${
                            animatingItems[item.card.info.id]
                              ? "rotate-180 scale-150"
                              : ""
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
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold min-w-[80px] text-center">
                        {quantity} Added
                      </span>
                      <button
                        onClick={() => handleAdditem(item)}
                        className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                {animatingItems[item.card.info.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce" />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
