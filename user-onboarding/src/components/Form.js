import React, {useState, useEffect} from "react";
import * as yup from "yup";
import {schema} from './FormSchema'
import axios from "axios";


export default function UserForm(){
    const [form, setForm] = useState({
        user: '',
        email: '',
        password: '',
        agree: false,
      });

      const [errors, setErrors] = useState({
        user: '',
        email: '',
        password: '',
        agree: '',
      });

      const [disabled, setDisabled] = useState(true)

      const setFormErrors = (name, value) => {
          yup.reach(schema, name).validate(value)
          .then(() => setErrors({...errors, [name]: ''}))
          .catch(err => setErrors({...errors, [name]: err.errors[0]}))
      }
    
      const handleChange = event => {
          const { checked, value, name, type } = event.target
          const termsChecked = type === 'checkbox' ? checked : value
          setFormErrors(name, termsChecked)
          setForm({ ...form, [name]: termsChecked })
      }

      const submit = event  => {
        event.preventDefault()
        const newUser = { user: form.user.trim(), email: form.email, password: form.password, agree: form.agree }
        axios.post(`https://reqres.in/api/users`, newUser)
        .then(res => {
          setForm({ user: '', email: '', password: '', agree: false})

        })
        .catch(err => {
          debugger
        })
        console.log(newUser)
      }

      useEffect(() => {
          schema.isValid(form).then(valid => setDisabled(!valid))
      }, [form])
    
      return (
        <div className="formContainer">
            <div style={{color: 'red'}}>
                <div>{errors.user}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.agree}</div>
            </div>
            <h1></h1>
          <form onSubmit={submit}>
            <label htmlFor="user">Name </label>
              <input value={form.user} 
              name="user" 
              type="text" 
              onChange={handleChange}/>
              <br/>
            

            <label htmlFor="email">Email </label>
                <input value={form.email} 
                name="email" 
                type="text" 
                onChange={handleChange}/>
                <br/>

            <label htmlFor="password">Password </label>
                <input value={form.password} 
                name="password" 
                type="text"
                onChange={handleChange}/>
                <br/>

            <label htmlFor="agree">Terms of Service </label>
                <input checked={form.agree}
                name="agree" 
                type="checkbox"
                onChange={handleChange}/>
                <br/>
            
            <button disabled={disabled}>Submit</button>
          </form>
        </div>
      );
}

