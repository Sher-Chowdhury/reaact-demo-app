ref - https://reactjs.org/docs/introducing-jsx.html

This is the same as 001, but with `src/index.js` updated to show "hello world"



A "Component" is a javascript function that returns "jsx" syntax

JSX looks like javascript, but it isn't. 

JSX is just an alternative way to write javascript code. 

JSX: JavaScript eXtension

JSX syntax is usually translated to normal javascript code, via a tool called, [Babel](https://babeljs.io/). 

A component must only return jsx syntax that has only one parent component, e.g. this is invalid jsx becuase it has 2 tags at the top level:

```angular2html
<h1>title</h1>
<p>paragragh</p>
```

To make this valid, we can put a div tag around it:

```angular2html
<div>
    <h1>title</h1>
    <p>paragragh</p>
</div>
```

Alternatively you can use the `<React.Fragment>` approach - https://reactjs.org/docs/fragments.html


So:
<pre>
jsx code  --(babel)-->  javascript code  --(react-dom)-->  html code. 
</pre>

The [react-dom package](https://www.npmjs.com/package/react-dom) takes javascript code, and constructs them into html (Document Object Model) for web browsers.

The babel rendered javascript code will contain lots of `React.createElement(...` code, with lots of nesting, making it very hard to read, hence why we write in
jsx instead. I.e. babel converts jsx into javascript code that in turn contains lots and lots of react api calls. 

If you want your app to be displayed as an iOS or Android App, then you should be pulling in [react native](https://reactnative.dev/) rather than `react-dom`. 



