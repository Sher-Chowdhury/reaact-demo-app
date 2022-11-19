import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Welcome(props) {
    let name = props.firstName + ' ' + props.lastName

    return (
        <h1>
            Hello {name}!
        </h1>
    )
}

Welcome.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
};

// Noticed we used react.fragment - https://reactjs.org/docs/fragments.html
// Notice how components are reusable, with the behaviour changing based on the attributes supplied.
root.render(
    <React.Fragment>
        <Welcome firstName="Peter" lastName="Parker"/>
        <Welcome firstName="Tony" lastName="Stark"/>
    </React.Fragment>
);
// jsx syntax must always contain a single top level tag. However the above has 2 top level "Welcome" tags. Therefore in this situation we used `<React.Fragment>` as a work around.


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
