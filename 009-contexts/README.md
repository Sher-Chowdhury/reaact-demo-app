ref - https://reactjs.org/docs/context.html

There are 3 ways to share data between components:

1. Lifting state approach - https://reactjs.org/docs/lifting-state-up.html. This basically shares state-date via props. This approach isn't recommend, and is only suitable for basic use cases. 
2. Using contexts - this is a newer approach, as described here - https://reactjs.org/docs/context.html
3. Using [Redux](https://redux.js.org/) - This is the most powerful option, and is the recommended approach. 


### my-app1 
The context feature lets you pass props down the component tree without having to explicitly do it. 

Ref - [https://www.freecodecamp.org/news/react-context-for-beginners/#what-is-the-usecontext-hook](https://www.freecodecamp.org/news/react-context-for-beginners/#what-is-the-usecontext-hook)

You can define the context at the project level using "export" or at a component level, if you want to limit's it scope
to that component and it's children components only. 

context is suitable to certain kinds of data, e.g.:

These types of data include:
- Theme data (like dark or light mode)
- User data (the currently authenticated user)
- Location-specific data (like user language or locale)

It's not easy to work with when it comes to arrays of objects that needs processing. That's probably best done using the props approach. 


### my-app2
Same as my-app1 but this time using the `<myContextName.Comsumer>...</myContextName.Comsumer>` tags rather than the `React.useContext(myContextName)` hook. 
