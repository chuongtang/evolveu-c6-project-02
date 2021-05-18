import React, { useState } from "react";

const ListingType = () => {
  const [listingType, setListingType] = useState(" ");

  const typeInsertedHandler = (event) => {
    setListingType(event.target.value);
  };

  return (
    <div className='form-inputs'>
      <label className='form-label'>Type</label>
      <input
        className='form-input'
        type="text"
        value={listingType}
        onChange={typeInsertedHandler}
      ></input>
    </div>
  );
};

export default ListingType;