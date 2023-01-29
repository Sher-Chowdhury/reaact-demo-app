import React from 'react';
import ReactDOM from 'react-dom/client'; // This I think indicates that this app is a client-side-rendered (csr) app

const root = ReactDOM.createRoot(document.getElementById('app'));

function Welcome(props) {

    return (
        <h1>
            Hello {props.title} {props.children}!
        </h1>
    )
}

root.render(
     <Welcome title="Mr">Clark Kent</Welcome>
);