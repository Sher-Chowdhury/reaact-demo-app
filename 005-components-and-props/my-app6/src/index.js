import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Welcome(props) {
    let name = props.firstName + ' ' + props.lastName

    return (
        <h1>
            Hello {name}!
        </h1>
    )
}

// This shows how to nest components, i.e. 1 component calls another component.
function App(){
    return (
        <div>
            <Welcome firstName="Peter" lastName="Parker"/>
            <Welcome firstName="Tony" lastName="Stark"/>
            <Welcome firstName="Steve" lastName="Rogers"/>
        </div>
    )

}

root.render(App());


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
