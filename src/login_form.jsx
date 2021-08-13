import React from 'react';
import ReactDOM from 'react-dom';
import {Field} from './field'
import { formStyle, submitStyle } from './login_form_styling';
import axios from 'axios';
import API from './api'

export const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };

    const handleGoogleSignin = e => {
        API.get(`auth/login`)
        .then(res => {
          console.log( res.data );
        })
    };


    return (
      <form style={formStyle} onSubmit={handleSubmit} >
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button style={submitStyle} type="submit">Submit</button>
        </div>
        <div>
          <button style={submitStyle} type="submit" onClick={handleGoogleSignin}>Signin with Google</button>
        </div>
      </form>
    );
};
