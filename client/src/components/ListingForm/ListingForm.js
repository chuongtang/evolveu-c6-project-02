import React from "react";
import "./ListingForm.css";

import ListingCategories from "./ListingCategories";
import ListingType from "./ListingType";
import ListingDisposal from "./ListingDisposal";
import ListingLocation from "./ListingLocation";
import ListingDescription from "./ListingDescription";
import ListingQuantity from "./ListingQuantity";

const ListingForm = (props) => {
  
  const listingsData = props.listingData;

  const listingDataHandler = () => {
    listingsData.map((listing) => {
      return {
        category: listing.category,
        type: listing.type,
        diposal: listing.diposal,
        locationPC: listing.location,
        description: listing.description,
        quantity: listing.quantity,
      }
    })
  }

  console.log(listingDataHandler())
  
    
  const submitHandler = (event) => {
    event.preventDefault();
  };

  // props.onSaveListingData();

  return (
    <form onSubmit={submitHandler, listingDataHandler}>
      <div className="add-listing__controls">
        <ListingCategories />
        <ListingType />
        <ListingDisposal />
        <ListingLocation />
        <ListingDescription />
        <ListingQuantity />
        <div className="add-listing__actions">
          <button type="submit">Add Listing</button>
        </div>
      </div>
    </form>
  );
};

export default ListingForm;
