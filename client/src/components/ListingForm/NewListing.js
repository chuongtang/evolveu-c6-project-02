import React from 'react';

import Input from '../../Shared/components/FormElements/Input;'
import { VALIDATOR_REQUIRE } from '../util/validators';

import './NewListing.css';

const NewListing = () => {
    return (
      <form className='listing-form'>
        <Input element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid information."
      />

      </form>
    );
}

export default NewListing;