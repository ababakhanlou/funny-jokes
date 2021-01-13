Deployed on Netlify: https://quirky-cori-371a74.netlify.app/#/ 

This application reaches out to a REST API to retrieve jokes and render them to the user. 
It also allows for liking/saving a joke so that it can be viewed on a separate page at a later time. 
It writes all the saved jokes to the browser’s localStorage so that the user can revisit them after they close their browser.  
This application makes use of React’s class components and lifecycle methods as well as React Router for navigating from the new jokes to the page of saved jokes. 
This app also has unit tests using Jest & Enzyme integrated with CircleCI that is running tests on deployment.

Instructions to run locally: 
Ensure you have latest versions of node and git installed. 
After cloning:
- npm i
- npm start
