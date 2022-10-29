import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Welcome extends React.Component {
    render() {
        return <h1>Hello {this.props.firstName} {this.props.lastName}!</h1>;
    }
}

root.render(<Welcome firstName="Bruce" lastName="Banner"/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
