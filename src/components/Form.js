import React,{ useState } from 'react';
import './Form.css';

function Form() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
}

const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
}

const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
}


  return (
    <div className='form-container'>
        <form className='register-form'>
            <input
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            className='form-field'
            placeholder='First Name'
            type='text'
            name='firstName' />
             
             <input
             onChange={handleLastNameInputChange}
            value={values.lastName}
            className='form-field'
            placeholder='Last Name'
            type='text'
            name='lastName' />
            
             <input
             onChange={handleEmailInputChange}
            value={values.email}
            className='form-field'
            placeholder='Email'
            type='text'
            name='email' />
            
            <button type='submit'>Register</button>
        </form>
    </div>
  );
}

export default Form;