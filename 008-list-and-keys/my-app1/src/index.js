import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Note, each list item needs to have a unique "key" attribute. This helps react keep track of any changes.
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers}/>);



reportWebVitals();
