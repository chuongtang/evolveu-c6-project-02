import React, { useState } from "react";

const ListingType = () => {
  const [listingType, setListingType] = useState(" ");

  const typeInsertedHandler = (event) => {
    setListingType(event.target.value);
  };

  return (
    <div className="add-listing__control">
      <label>Type</label>
      <input
        type="text"
        value={listingType}
        onChange={typeInsertedHandler}
      ></input>
    </div>
  );
};

export default ListingType;