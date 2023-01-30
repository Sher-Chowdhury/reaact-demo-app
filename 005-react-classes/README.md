### my-app1
a component can be written in the form of a class, rather than a function.

Note: The React team has recommended to always write all components in the form of functions rather than classes. 

This class needs to be a subclass of the [React.Component class](https://reactjs.org/docs/react-component.html), and as a minimum this subclass needs to define
a method called [render()]( https://reactjs.org/docs/react-component.html#overview). The `render()` method needs to return some jsx syntax. 

As far as react is concerned, function based and classed based functions are just equivalent of eachother. 

Here's a quick guide on how to convert a function to a class - https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class