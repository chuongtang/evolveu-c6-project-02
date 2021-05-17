import React, { useState } from "react";
import './ListingForm.css'

const ListingForm = (props) => {
  const [listingCategory, setListingCategory] = useState(" ");
  const [listingType, setListingType] = useState(" ");
  const [listingDisposal, setListingDisposal] = useState(" ");
  const [listingLocationPC, setListingLocationPC] = useState(" ")
  const [listingDescription, setListingDescription] = useState(" ");
  const [listingQuantity, setListingQuantity] = useState(0);

  const categories = {
    category1: 'Paper',
    category2: 'Plastic',
    category3: 'Electronic',
    category4: 'Glass',
    category5: 'Metal',
    category6: 'Furniture',
    category7: 'Textiles',
    category8: 'Other'
  };

  const categoryInsertedHandler = (event) => {
    setListingCategory(event.target.value);
  };

  const typeInsertedHandler = (event) => {
    setListingType(event.target.value);
  };

  const disposalInsertedHandler = (event) => {
    setListingDisposal(event.target.value);
  };

  const locationPCInsertedHandler = (event) => {
    setListingLocationPC(event.target.value);
  };

  const descriptionInsertedHandler = (event) => {
    setListingDescription(event.target.value);
  };

  const quantityInsertedHandler = (event) => {
    setListingQuantity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  
  // const listingDataHandler = () => {
  //   const listingData = {
  //     category: listingCategory,
  //     type: listingType,
  //     locationPC: listingLocationPC,
  //     disposal: listingDisposal,
  //     description: listingDescription,
  //     quantity: listingQuantity,
  //   };

  // }
  
  // props.onSaveListingData();

  return (
    <form onSubmit={submitHandler}>
      <div className="add-listing__controls">
        <div className="add-listing__control">
          <label>Category</label>
          <select 
            value={listingCategory} 
            onChange={categoryInsertedHandler}>
                <option value={categories.category1}>Paper</option>
                <option value={categories.category2}>Plastic</option>
                <option value={categories.category3}>Electronic</option>
                <option value={categories.category4}>Glass</option>
                <option value={categories.category5}>Metal</option>
                <option value={categories.category6}>Furniture</option>
                <option value={categories.category7}>Textiles</option>
                <option value={categories.category8}>Other</option>
            </select>
        </div>
        <div className="add-listing__control">
          <label>Type</label>
          <input
            type="text"
            value={listingType}
            onChange={typeInsertedHandler}
          ></input>
        </div>
        <div className="add-listing__control">
          <label>How do you want to dispose your items?</label>
          <select
            type="radio"
            value={listingDisposal}
            onChange={disposalInsertedHandler}
            >            
            <option value='pick-up'>Pick up</option>
            <option value='drop-off'>Drop-off</option>
          </select>
        </div>
        <div className="add-listing__control">
          <label>Location</label>
          <input
            type="text"
            value={listingLocationPC}
            onChange={locationPCInsertedHandler}
            ></input>
        </div>       
        <div className="add-listing__control">
          <label>Please, provide a description of your item</label>
          <input
            type="text"
            value={listingDescription}
            onChange={descriptionInsertedHandler}
          ></input>
        </div>
        <div className="add-listing__control">
          <label>Quantity</label>
          <input
            type="number"
            value={listingQuantity}
            onChange={quantityInsertedHandler}
            ></input>
          <div className="add-listing__actions">
            <button type="submit">Add Listing</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ListingForm;
