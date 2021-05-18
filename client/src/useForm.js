import {useState, useEffect} from 'react'
//import React, {useState} from './FormSignUp';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password:'',
    password2:''
});
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState (false);

//e = events
// handleChange =  when you change something, you want to update the value

const handleChange = e => {
    const {name, value} = e.target;
    setValues ({
        ...values, //spreading the values, targets the name in the formsignup
        [name]:value
    });
};

const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting (true);
};
    useEffect(
        () => {
            if(Object.keys(errors).length === 0 && isSubmitting){
                callback();
            }
        },
        [errors]
    );
    
    return {handleChange, values, handleSubmit, errors};
};

export default useForm;
