import React, {useState} from 'react';
import * as yup from 'yup'
import {FormSchema} from "./components/FormSchema"

import './App.css';
import Form from './components/Form';
import Users from './components/Users';

// const initialFormValues = {
//   //TEXT INPUTS
//   user: '',
//   email: '',
//   password: '',
//   //CHECKBOX
//   agree: false,
// }



function App(){
  const [users, setUsers] = useState([])
  const addUser=(newUser) => {
    setUser(
      [...users, setUsers]
    )
  }
  console.log(users);
  return(
    <div className="formDiv">
      <Form addUser={addUser}/>
      <Users users={users}/>
    </div>
  )
}
    

export default App;
