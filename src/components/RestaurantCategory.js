import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);
  //   const [showItems, setShowItems] = useState();
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>

          {showItems && <ItemList items={data.itemCards} />}
          <span> ⬇️</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
