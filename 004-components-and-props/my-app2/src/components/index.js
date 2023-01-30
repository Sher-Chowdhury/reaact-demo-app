import React from 'react';
import ReactDOM from 'react-dom/client'; // This I think indicates that this app is a client-side-rendered (csr) app



const root = ReactDOM.createRoot(document.getElementById('app'));

// A "component" is just a function that returns jsx syntax.
// A component's name must ALWAYS start with a capital letter, in order to tell it apart from ordinary html tags, e.g. h1, p, div...etc.
function Welcome() {
    return (
        <h1>
            Hello World
        </h1>
    )
}

// Components can be called using tag-like syntax
root.render(
    <Welcome />
);

