## my-app1-before-redux
This is just sample app where we'll convert into using redux. 

The problems here is that the we have the following line inside the counter component:


```
const [counter, setCounter] = React.useState(0)
```

That means that this state only exists in that component and can't be used upstream or downstream. 

So if the state changes then only that component will get reshreshed automatically. 




## my-app2-just-the-initial-boiler-plate


Here's the recommended way to create a react-redux app - https://redux.js.org/introduction/getting-started#create-a-react-redux-app

e.g.

```angular2html
npx create-react-app my-app2-after-redux --template redux
```

This app contains all the boiler plate code unchanged. Hence it's not functionally identical to `my-app1-before-redux`



## my-app3-after-redux

This is made up of a few parts:

1. We used `configureStore()` to create a new store. 
2. We used `<Provider ...>` tags to specify what components can access this store
3. In the UI, we defined the `onClick` event to trigger a function that in turn calls the `dispatch()`
4. The dispatcher calls the action-creator function, in order to obtain an new action-object. 
5. dispatcher then sends action-object to the redux store (called "store" in this example). 
6. The store forwards the action object (along with the current state) to the reducer functions that it knows 
about (as configured as part of the `configureStore()` call)
7. The reducer function returns the new state object
8. As soon as the redux-store has been updated, the `useSelector()` function will automatically run to run it's selector function again and then inspect the return value
9. If the return value is different from what it was before, then it would trigger its component to re-render it's component agein.

The useSelector() auto trigger feature is mentioned here - https://redux.js.org/tutorials/essentials/part-2-app-structure#reading-data-with-useselector

Here's the actual quote:

```angular2html
Any time an action has been dispatched and the Redux store has been updated, useSelector will re-run our selector function. If the selector returns a different value than last time, useSelector will make sure our component re-renders with the new value.
```




