import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantsCategory = ({ data, showItems, setShowIndex }) => {
    //console.log({data})
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
       setShowIndex();
    }
  return (
    <div>
      {/* Accordion Header */}
      <div data-testid="foodItems" className="max-w-150 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/> }
        {/* Accordion Body */}
      </div>
    </div>
  );
};

export default RestaurantsCategory;
