import React, { useState } from "react";

const ListingQuantity = () => {
  
  const [listingQuantity, setListingQuantity] = useState(0);

  const quantityInsertedHandler = (event) => {
    setListingQuantity(event.target.value);
  };

  return (
    <div className='form-inputs'>
      <label className='form-label'>Quantity</label>
      <input
        className='form-input'
        type="number"
        value={listingQuantity}
        onChange={quantityInsertedHandler}
      ></input>
    </div>
  );
};

export default ListingQuantity;
