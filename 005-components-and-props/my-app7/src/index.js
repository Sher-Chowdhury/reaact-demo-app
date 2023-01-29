import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// The component's input parameter is called "props" by convention.
function Welcome(props) {
    // let name = props.firstName + ' ' + props.lastName

    return (
        <h1>
            Hello {props.title} {props.children}!
        </h1>
    )
}

// Noticed we used react.fragment - https://reactjs.org/docs/fragments.html
// Notice how components are reusable, with the behaviour changing based on the attributes supplied.
root.render(
     <Welcome title="Mr">Clark Kent</Welcome>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
