import React from 'react';
import { createRoot } from 'react-dom/client';
import {Provider, useSelector} from 'react-redux';
// import { store } from './app/store';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { configureStore } from '@reduxjs/toolkit'

const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'counter/increment') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: state.value + 1
        }
    }

    if (action.type === 'doubler/increment') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: state.value * 2
        }
    }

    // otherwise return the existing state unchanged
    return state
}







const store = configureStore(
    {
        reducer: {
            MyCounterComponentReducer: counterReducer
        }
    }
)


function Counter() {

    // This is an action-creator function
    const increment = () => {
        return {
            type: 'counter/increment'
        }
    }

    const incrementor = () => {
        // This runs the action-creator to get a new action object. It then forwards this object (along with the current state object) to the reducer function.
        store.dispatch(increment())
        console.log(store.getState())
    }

    // This is a selector function
    const selectCounterValue = state => state.MyCounterComponentReducer.value

    // This calls the selector function for us, The `useSelector()` also automatically runs whenever the redux-store has been updated.
    // If the returning value has changed from last time, then `useSelector()` runs triggers its component to do a full re-render.
    const count = useSelector(selectCounterValue);

    // View: the UI definition
    return (
        <div>
            Value: {count} <button onClick={incrementor}>Increment</button>
            <hr />
        </div>
    )
}


function Doubler() {

    // This is an action-creator function
    const increment = () => {
        return {
            type: 'doubler/increment'
        }
    }

    const incrementor = () => {
        // This runs the action-creator to get a new action object. It then forwards this object (along with the current state object) to the reducer function.
        store.dispatch(increment())
        console.log(store.getState())
    }

    // This is a selector function
    const selectCounterValue = state => state.MyCounterComponentReducer.value

    // This calls the selector function for us, The `useSelector()` also automatically runs whenever the redux-store has been updated.
    // If the returning value has changed from last time, then `useSelector()` runs triggers its component to do a full re-render.
    const count = useSelector(selectCounterValue);

    // View: the UI definition
    return (
        <div>
            Value: {count} <button onClick={incrementor}>Doubler</button>
            <hr />
        </div>
    )
}



const container = document.getElementById('root');
const root = createRoot(container);

// The "Provider tags gives everything inside it access to the store. "
root.render(
    <Provider store={store}>
        <Counter />
        <Doubler />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
