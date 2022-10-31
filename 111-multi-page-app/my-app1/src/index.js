import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// https://redux.js.org/tutorials/essentials/part-1-overview-concepts#state-management
function Counter() {
    // State: a counter value
    const [counter, setCounter] = React.useState(0)

    // Action: code that causes an update to the state when something happens
    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
        // This console-log only appears on the chrome's developer tool's console tab.
        console.log("increment successful!!!!!")
    }

    // View: the UI definition
    return (
        <div>
            Value: {counter} <button onClick={increment}>Increment</button>
        </div>
    )
}


root.render(<Counter />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
