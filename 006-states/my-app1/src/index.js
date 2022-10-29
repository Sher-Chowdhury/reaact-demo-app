import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Clock extends React.Component {

    // props and state data is made available to a class's methods through the "this" object.
    // for that to be possible, we have to populate the "this" object with all the prop+state data using a constructor.
    // This constructor method is the first block of code that runs when a calss is called.
    // https://github.com/Sher-Chowdhury/javascript_study_guide/blob/05478b45bdea4f120a98b65bd3135e4f4367781e/11_classes/01_classes.js
    // I think behind the scenes, react calls "new Clock" when it sees the call <Clock />
    constructor(props) {
        // The "super()" call, simply runs the block of code that's inside the parent React.Component class's constructor function.
        // https://github.com/Sher-Chowdhury/javascript_study_guide/blob/de0d41299b1e94ad20d932f216b4de6d2841a953/11_classes/05_inheritance.js
        super(props);
        // this is where we initialize the state object:
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // We have to use the setState() method (inherited from the React.Component class) to update values stored in the state-object
        // this in turn will automatically re-trigger the render() method which will then update the UI based on the newly updated state object.
        this.setState({
            date: new Date()
        });
        // We should always use setState() for updating the state object. It is bad practice to update the state directly, e.g.:
        // this.state.date = new Date()  // this is bad practice
        // That's because this won't automatically retrigger the render() method afterwards.
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.firstName} {this.props.lastName}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock firstName="Peter" lastName="Parker" />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
