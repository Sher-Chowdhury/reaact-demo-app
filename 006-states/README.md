Ref - https://reactjs.org/docs/state-and-lifecycle.html

## my-app1

A component can take 2 input parameters:

- props (this should be treated as read only)
- state (this holds readable/writable data that is internal to the component)


React is reactive, i.e. when the (private) "state" (input) changes, then the UI (output) changes as well.

This means, react works a bit like ajax, if you fill in some text fields, it can automatically show a preview elsewhere without need to refresh the page.


The `constructor` function is used to 
- make the props data available to the `this` object which in turn can be used by the class's methods. 
- Create a state object and assign some initial values to them. 

See - https://reactjs.org/docs/react-component.html#constructor


### Lifecycle Methods

Here we've added 2 lifecycle methods:

- [componentDidMount](https://reactjs.org/docs/react-component.html#componentdidmount) - this method automatically get run right after the 
  component has finished running the constructor()+render() methods, and the compoent is displayed in the web browser (aka "mounted"). 
- [componentWillUnmount](https://reactjs.org/docs/react-component.html#componentwillunmount) - this is run when a compenent 
  get unmounted, i.e. the component is no longer visible in the web browser

these methods are used in conjunction with class based components. The equivalent for function based components is [hooks](https://reactjs.org/docs/hooks-intro.html).


  
If the current props+state values are going to be used to update the next iteration of the state object, then it's 
best practice to pass in function to the `setState()`, that updates 
the state object - https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous

## my-app2 
This is the same example as my-app1, but with components written as functions rather than components. 

This was achieved using hooks - https://reactjs.org/docs/hooks-overview.html

A bit of info about hooks:
- they are functions
- the hook's function name starts with the "use" prefix
- It's possible to create custom hooks. 
- React's builtin hooks needs to be imported before they can be used. 
- Hooks have some important usage rules - https://reactjs.org/docs/hooks-rules.html, to summarise
  - A component function's useState() must ALWAYS be called when the component's function is called. 
  - hooks are only used inside component functions

Hooks are used for setting initial state values using the `useState()` hook. The `useState()` also returns a function that used for updating that particular state value. 

There's also `useEffect()` which is the `componentDidMount` equivalent, i.e. it gets triggered straight after the component's ui is displayed on the browser. 
