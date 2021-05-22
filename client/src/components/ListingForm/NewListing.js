import React, { useCallback, useReducer } from 'react';

import Input from '../../Shared/components/FormElements/Input';
import Button from '../../Shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH, VALIDATOR_MIN } from '../util/validators';

import './NewListing.css';
import ListingCategories from '../../Shared/components/FormElements/ListingCategories';

const formReducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (inputId === inputId) {
            formIsValid = formIsValid && action.isValid;
            } else {
              formIsValid = formIsValid && state.inputs[inputId].isValid;

            }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid }
          },
          isValid: formIsValid
        }
      
      default:
      return state;
    }
};

const NewListing = () => {

    const [formState, dispatch] = useReducer(formReducer, {
      inputs: {   //stores the information about the validity of the individual inputs 
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        }
      }, 
        isValid: false
          //stores the information if the overall form is valid
    });
  
    const inputHandler = useCallback((id, value, isValid) => {    //useCallback wraps a function and define dependencies that will call the function, it avoids infinite loops
        dispatch({
          type: "INPUT_CHANGE", 
          value: value, 
          isValid: isValid, 
          inputId: id
        });
    }, []);

    const listingSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs) //send this to the backend
    };

    return (
      <form className='listing-form' onSubmit={listingSubmitHandler}>
        <Input 
          element='select'
          type='text'
          label='Category'
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please select a category."
          onInput={inputHandler}
        />
        <Input 
          element='input'
          type='text'
          label='Title'
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid Title."
          onInput={inputHandler}
        />
        {console.log()}
        <Input 
          element='textarea'
          type='text'
          label='Description'
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid quantity."
          onInput={inputHandler}
        />
        <Input 
          element='input'
          type='number'
          label='Quantity'
          validators={[VALIDATOR_MIN(1)]}
          errorText="Please enter a valid Description."
          onInput={inputHandler}
        />
        <Input 
          element='input'
          type='text'
          label='Postal Code'
          errorText="Please enter a Postal Code."
          onInput={inputHandler}
        />
        <Button type="submit" disable={!formState.isValid}>Add Listing</Button>
      </form>
    ); 
} 

export default NewListing;