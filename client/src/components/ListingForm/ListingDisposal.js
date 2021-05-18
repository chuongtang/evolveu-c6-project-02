import React, { useState } from "react";

const ListingDisposal = () => {
  const [listingDisposal, setListingDisposal] = useState(" ");

  const disposalInsertedHandler = (event) => {
    setListingDisposal(event.target.value);
  };

  return (
    <div className="add-listing__control">
      <label>How do you want to dispose your items?</label>
      <select
        type="radio"
        value={listingDisposal}
        onChange={disposalInsertedHandler}
      >
        <option value="pick-up">Pick up</option>
        <option value="drop-off">Drop-off</option>
      </select>
    </div>
  );
};

export default ListingDisposal;
