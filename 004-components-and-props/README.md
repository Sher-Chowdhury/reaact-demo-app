ref - https://reactjs.org/docs/components-and-props.html

### my-app1 
A react "component" is just a function that returns jsx syntax. 

### my-app2
A component can be called using the `<ComponentName />`. In fact this is the recommended way of calling components, 
as opposed to the approach used in the my-app1 demo. This approach gives the impression that we're effectively creating our very own custom html tags. 

### my-app3 
We can supply arguments to our components. That's done by specifying attributes for our custom html tags. 
react will send these attributes to the component in the form of a single object, called "properties", aka props. 

### my-app4
Ref - https://reactjs.org/docs/typechecking-with-proptypes.html
This shows how to specify data types for prop settings, and how to make them required. 



### my-app5
this is another example of how components are reusable, and how to nest component calls. This allows for a tree-like approach 
to organsizing and structuring your components. In other words compopents can be broken down into small components. 


### my-app6
This shows the special `children` props property, which holds the content of input passed in by calling components using the syntax:

```
<ComponentName>content-to-be-stored-in-childer</ComponentName>
```
Ref - https://reactjs.org/docs/composition-vs-inheritance.html#containment




Other notes:

the props name, `className`, is a special name reserved for css purposes - https://reactjs.org/docs/faq-styling.html

This `className` attributes corresponds to html's `class` attribute. 

You can set default vlaues for props and also add type-checking for your props (e.g. throw error if integer value passed in to prop that's expecting a string). Thats possble using:
`propTypes`
- `defaultProps`
For more info, see https://reactjs.org/docs/typechecking-with-proptypes.html


