import React, {useState} from 'react';
import * as yup from 'yup'
import {FormSchema} from "./components/FormSchema"

import './App.css';
import Form from './components/Form';
import Users from './components/Users';


function App(){
  const [users, setUsers] = useState([])
  const addUser=(newUser) => {
    setUsers(
      [...users, newUser]
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
