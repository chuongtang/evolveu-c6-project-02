import React, { useState } from "react";

const ListingDescription = () => {

  const [listingDescription, setListingDescription] = useState(" ");

  const descriptionInsertedHandler = (event) => {
    setListingDescription(event.target.value);
  };

  return (
    <div className='form-inputs'>
      <label className='form-label'>Please, provide a description of your item</label>
      <textarea
        className='form-input'
        type="text"
        value={listingDescription}
        onChange={descriptionInsertedHandler}
      ></textarea>
    </div>
  );
};

export default ListingDescription;