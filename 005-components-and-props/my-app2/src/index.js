import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const user = {
    firstName: 'Peter',
    lastName: 'Parker'
};


// A "component" is just a function that returns jsx syntax.
// A component's name must ALWAYS start with a capital letter, in order to tell it apart from ordinary html tags, e.g. h1, p, div...etc.
function Welcome(user) {
    return (
        <h1>
            Hello World
        </h1>
    )
}

// Components can be called using tag-like syntax
root.render(
    <Welcome />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
