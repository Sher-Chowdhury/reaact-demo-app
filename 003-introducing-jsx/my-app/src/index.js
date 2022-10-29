import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Peter',
    lastName: 'Parker'
};

// - This constant contains JSX syntax.
// - Then curly braces, {...}, is used to contain any valid javscript code, e.g. calling a
//   javascript function.
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

root.render(element);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
