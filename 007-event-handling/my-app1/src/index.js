import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Counter(props) {

    const [counter, setCounter] = useState(0);

    // Functions that are to be called by eventHandlers e.g. onCLick, should be stored in a variable.
    const IncrementCounter = ()=> {
            // calling useState() generated functions will automtically trigger a new render.
            setCounter(count => count + 1)
    }
    return (
        <div>
            <h1>Hello, {props.firstName} {props.lastName}</h1>
            <button onClick={IncrementCounter}>{counter}</button>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter firstName="Peter" lastName="Parker" />);

reportWebVitals();