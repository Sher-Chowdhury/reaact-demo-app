import React from 'react';
import ReactDOM from 'react-dom/client'; // This I think indicates that this app is a client-side-rendered (csr) app

const root = ReactDOM.createRoot(document.getElementById('app'));


function Welcome(props) {
    let name = props.firstName + ' ' + props.lastName

    return (
        <h1>
            Hello {name}!
        </h1>
    )
}

function App(){
    return (
        <div>
            <Welcome firstName="Peter" lastName="Parker"/>
            <Welcome firstName="Tony" lastName="Stark"/>
            <Welcome firstName="Steve" lastName="Rogers"/>
        </div>
    )

}

// This shows how to nest components, i.e. 1 component (called "App" in this example) calls another component (called "Welcome" in this example)
root.render(App());