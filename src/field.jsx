import React from 'react';
import ReactDOM from 'react-dom';
import {labelStyle, inputStyle} from './login_form_styling'

export const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
});
