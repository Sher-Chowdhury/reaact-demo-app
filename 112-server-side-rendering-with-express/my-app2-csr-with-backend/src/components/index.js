import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import getRandomWord from '../backend/randomWord'

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

function RandomWord(props) {
    const [randomword, setRandomWord] = useState("Initial");

    // Functions that are to be called by eventHandlers e.g. onCLick, should be stored in a variable.
    const newRandomWord = ()=> {
        // calling useState() generated functions will automtically trigger a new render.
        console.log("getting random word")
        setRandomWord( async (previousState) => {
            let result = await getRandomWord.getRandomWord(previousState)
            return result
        })
    }
    return (
        <div>
            <button onClick={newRandomWord}>Get random word</button>
            <p>New Random word is {randomword}</p>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <div>
        <Counter firstName="Peter" lastName="Parker" />
        <RandomWord />
    </div>
);
