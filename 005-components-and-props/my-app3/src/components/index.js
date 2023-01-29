import React from 'react';
import ReactDOM from 'react-dom/client'; // This I think indicates that this app is a client-side-rendered (csr) app



const root = ReactDOM.createRoot(document.getElementById('app'));

// The component's input parameter is called "props" by convention.
function Welcome(props) {
    let name = props.firstName + ' ' + props.lastName

    return (
        <h1>
            Hello {name}!
        </h1>
    )
}

// Noticed we used react.fragment - https://reactjs.org/docs/fragments.html
// Notice how components are reusable, with the behaviour changing based on the attributes supplied.
root.render(
    <React.Fragment>
        <Welcome firstName="Peter" lastName="Parker"/>
        <Welcome firstName="Tony" lastName="Stark"/>
    </React.Fragment>
);
// jsx syntax must always contain a single top level tag. However the above has 2 top level "Welcome" tags. Therefore in this situation we used `<React.Fragment>` as a work around.
// An alternative to using the <React.Fragment> tag, is to just use a <div> tag
