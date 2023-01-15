ref - https://reactjs.org/docs/hello-world.html

This is also a really good general guide of react - https://nextjs.org/learn/foundations/from-javascript-to-react 

## my-app1
This is the same as my-app2, in 001




However this setup is a bit hard to do development work with, in the sense that everytime you make code change, you have to always take the following 
steps to see your changes on the browser side:

1. Rerun `npm run dev:bundler` to reload the updated bundle.js 
2. Rerun `npm start`
2. Reload the web page. 

## my-app2

Same as my-app1 but with some monitoring enabled that automates the running of steps 1 and 2 above. 

Note have to use node 18 for node's `--watch` flag to work - https://nodejs.org/en/blog/release/v18.11.0/

Then on 2 separated terminals, run steps 1 and 2, so that they stay running in the background. 




## Debugging React based apps

It's not actually possible to debug (e.g. create breakpoints) react in webstorm. That's because the actual execution of code occurs on the browser side (chrome). 

However you can debug the app via chrome:

1. Run `npm start`, then open the app on chrome. 
2. Open the app in chrome, e.g. - http://localhost:3000/
3. Open the chrome developer tools
4. Go to the sources tab, and you can add breakpoints their. 
5. Also all `console.log(...)` will appear in the consoles tab. 




# deploying react app for the public to use

https://github.com/Sher-Chowdhury/host-react-app-on-github-pages

See - https://github.com/gitname/react-gh-pages



