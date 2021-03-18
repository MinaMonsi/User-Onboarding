import React, {useState} from 'react';
import * as yup from 'yup'
import {FormSchema} from "./components/FormSchema"

import './App.css';
import Form from './components/Form';

// const initialFormValues = {
//   //TEXT INPUTS
//   user: '',
//   email: '',
//   password: '',
//   //CHECKBOX
//   agree: false,
// }

function App(){
  return(
    <div className="formDiv">
      <Form/>
    </div>
  )
}
    

export default App;
