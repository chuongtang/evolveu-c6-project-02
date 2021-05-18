import React, { useState } from "react";

const ListingLocation = () => {
  
    const [listingLocationPC, setListingLocationPC] = useState(" ");

    const locationPCInsertedHandler = (event) => {
        setListingLocationPC(event.target.value);
      };
  
    return (
    <div className="add-listing__control">
      <label>Location</label>
      <input
        type="text"
        value={listingLocationPC}
        onChange={locationPCInsertedHandler}
      ></input>
    </div>
  );
};

export default ListingLocation;
