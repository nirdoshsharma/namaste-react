import { CDN_URL } from "../utils/contants";

const ItemList = ({ items }) => {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.card.info.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm relative"
          >
            <div className="flex-1">
              <span className="text-lg font-semibold text-gray-800">
                {item.card.info.name}
              </span>
              <p className="text-sm text-gray-600 mt-1">
                {item.card.info.description}
              </p>
              <div className="mt-2 text-md font-medium text-gray-700">
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </div>
            </div>
            <div className="relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-40 h-40 object-cover rounded-lg"
                alt={item.card.info.name}
              />
              <button className="p-2 bg-green-400 text-white font-bold shadow-lg absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 rounded-md w-24">
                + Add
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
