import React, { useState } from "react";

const ListingCategories = () => {
  const [listingCategory, setListingCategory] = useState(" ");

  const categories = {
    category1: "Paper",
    category2: "Plastic",
    category3: "Electronic",
    category4: "Glass",
    category5: "Metal",
    category6: "Furniture",
    category7: "Textiles",
    category8: "Other",
    category9: "Recyclables"
  };

  const categoryInsertedHandler = (event) => {
    setListingCategory(event.target.value);
  };

  return (
    <div className="form-inputs">
      <label className='form-labels'>Category</label>
      <select className='form-input' value={listingCategory} onChange={categoryInsertedHandler}>
        <option value={categories.category1}>Paper</option>
        <option value={categories.category2}>Plastic</option>
        <option value={categories.category3}>Electronic</option>
        <option value={categories.category4}>Glass</option>
        <option value={categories.category5}>Metal</option>
        <option value={categories.category6}>Furniture</option>
        <option value={categories.category7}>Textiles</option>
        <option value={categories.category8}>Other</option>
        <option value={categories.category9}>Recyclables</option>
      </select>
    </div>
  );
};

export default ListingCategories;
