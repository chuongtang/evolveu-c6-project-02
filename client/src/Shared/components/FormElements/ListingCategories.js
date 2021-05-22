import React from 'react';

const ListingCategories = (props) => {
    
    return (
        <option id={props.category}>
            {props.displayedCategory}
        </option>    
    )
};

export default ListingCategories;
