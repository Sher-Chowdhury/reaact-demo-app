import React from 'react';
import ReactDOM from 'react-dom/client'; // This I think indicates that this app is a client-side-rendered (csr) app
import PropTypes from 'prop-types';



const root = ReactDOM.createRoot(document.getElementById('app'));

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

root.render(
    <React.Fragment>
        <Welcome firstName="Peter" lastName="Parker"/>
        <Welcome firstName="Tony" lastName="Stark"/>
    </React.Fragment>
);
