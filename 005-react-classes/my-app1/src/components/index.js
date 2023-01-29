import React from 'react';
import ReactDOM from 'react-dom/client'; // This I think indicates that this app is a client-side-rendered (csr) app

const root = ReactDOM.createRoot(document.getElementById('app'));



class Welcome extends React.Component {
    render() {
        return <h1>Hello {this.props.firstName} {this.props.lastName}!</h1>;
    }
}

root.render(<Welcome firstName="Bruce" lastName="Banner"/>);
