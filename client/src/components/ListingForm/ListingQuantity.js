import React, { useState } from "react";

const ListingQuantity = () => {
  
  const [listingQuantity, setListingQuantity] = useState(0);

  const quantityInsertedHandler = (event) => {
    setListingQuantity(event.target.value);
  };

  return (
    <div className="add-listing__control">
      <label>Quantity</label>
      <input
        type="number"
        value={listingQuantity}
        onChange={quantityInsertedHandler}
      ></input>
    </div>
  );
};

export default ListingQuantity;
