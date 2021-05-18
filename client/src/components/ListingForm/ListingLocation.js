import React, { useState } from "react";

const ListingLocation = () => {
  
    const [listingLocationPC, setListingLocationPC] = useState(" ");

    const locationPCInsertedHandler = (event) => {
        setListingLocationPC(event.target.value);
      };
  
    return (
    <div className='form-inputs'>
      <label className='form-label'>Location</label>
      <input
        className='form-input'
        type="text"
        value={listingLocationPC}
        onChange={locationPCInsertedHandler}
      ></input>
    </div>
  );
};

export default ListingLocation;
