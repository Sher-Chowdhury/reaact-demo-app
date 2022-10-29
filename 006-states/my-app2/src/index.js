import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Clock(props) {
    const [date, setDate] = useState(new Date());

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setDate(new Date())
        setInterval(
            () => {
                setDate(new Date())
            },
            1000
        )
    })

    return (
        <div>
            <h1>Hello, {props.firstName} {props.lastName}</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock firstName="Peter" lastName="Parker"/>);

reportWebVitals();
