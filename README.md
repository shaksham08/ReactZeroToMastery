## For more detailed explanation [Click Here](more_Details/README.md)

## Table of Content

- [Birth Of React](#BirthOfReact)
- [React Basics](#ReactBasics)
- [Folder Structure](#FolderStructure)
- [AvailableScripts](#AvailableScripts)
- [JS Module Systems](#Javascript_module_Systems)
- [React Class based components](#ReactClass)
- [JSX](#JSX)
- [Babel](#Babel)
- [State](#State)
- [Create React App](#Create_React_App)
- [React_Class_Based_Example](#React_Class_Based_Example)
- [Life Cycle Methods](#LifeCycleMethods)

## BirthOfReact

React was developed by Facebook in 2013.

Earier we used to have three files html,css and js.When some user goes to a link of a website then we do a backend request to the server and then server serves us these html,css and js files back so that we can show the contents on the webpage.

For every page this happens same.

As the working with DOM became easier with time and other library(Jquery,backboneJS etc.), there came the Birth of SPA(single Page Application).

Now we focus more on js and only load applications One time and stay on the same page entire time. The JS changes the DOM for us and we dont need to speak to server anymore.Js does the AJAX request for us and updates the DOM.

We now use MVN(Model View Controller)

React Concepts :-

- _**Dont touch DOM ... REACT WILL DO IT!!!!**_

  - The DOM changes takes a lot of time as browsers need to work a lot.
  - React says it will handle this automatically and we dont need to change the DOM manually.
  - we just set some state of the APP and react acts upon that state how the app should look.

- _**Build Websites like Lego Blocks**_

  - React breaks into small components
  - we can put these small components to make a big applications.
  - we can reuse these components as well (eg. buttons , cards etc)
  - components are created based on that state(Data)
  - Components are just build over javascript functions or a class
  - `React Dev Tools` Helps to see those components in the browser itself.

- _**Unidirectional Data FLow**_

  - Here the state is the data of our App

    ```js
    let state = {
      isLoggedIn: true,
      Name: "Mike",
    };
    ```

    And this works with the component (which is built using JSX)

    ```jsx
    const element = (
      <div>
        <h1>Helloo!!!</h1>
      </div>
    );
    ```

    and these two combines to make react work. It creates a virtual DOM i.e the Javascript version of the DOM.React takes all of these and react go to the original dom and modifies it according to the virtual DOM blueprint.When the data change in the state, react intercept that change and it combines the new state and the component and creates a new DOM.Data cannot move up.

- _**React is just UI**_

  - React is just a UI library so we only we need to manage other things.
  - React only care about component and virtual DOM and it just work with the UI. For other things we can customize according to our needs.
  - So React is a UI library.
  - This makes REACT very small.
  - It dosent assume our technology Stack as it works with everything.
  - So Now react can be used everywhere not only in WEB eg. React Native , React 360 , Electron and React Desktop etc
  - Same code can be used Everywhere and the crossplatform applications became popular with React

## ReactBasics

- We use `create-react-app` to create a react project as this handles and install everything for a react code to be compiled to a broswer based html,css and JS eg. BAEBEL , WEBPACKJS etc. and also it does all the pre configurations for us.

- We would be using this [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html) in our all projects.

- Just run the command `npx create-react-app my-app`

## FolderStructure

- After creation your project should look like

  - ```
    my-app/
      README.md
      node_modules/
      package.json
      public/
        index.html
        favicon.ico
      src/
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg
    ```

- Here the `package.json` file keep track of all the configurations and the dependencies/library to be installed for the project.

- Babel make sure that our code can run on any broswer.


## Project Directory

```
/ProjectDirectory
    /src  -> Folder WHere we put all the souce code we write
    /public -> Folder that stores static files like images or HTML file that never changes
    /node_modules -> Folder that contains all of our project dependencies
    package.json -> Records our project dependencies and configure our project
  ge-lock.json -> Records the exact version of Package that we install 
```

## Javascript_module_Systems 

1. Common Js  
    - [Link1](https://jscomplete.com/learn/node-beyond-basics/requiring-modules)
    - [Link2](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/)
2. ES6
    - [Link1](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c)


## Difference between React and  ReactDOM

- React library know how to work with components.
- called a "reconciler"
- While ReactDOM knows how to take instructions on what we want to show and turn it into HTML
- Called a "renderer"

## AvailableScripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

- `yarn eject` will remove all the pre confguration which the `create-react-app` has dont for so that we can do our own custom changes in that script files,but this is not a good idea and running this is permenant.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

- These two files are very important for React

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

Content of index.js file

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## React Class

```jsx
import React, { Component } from "react";
import ReactDOM from "react-dom";
class MyComponent extends Component {
  render() {
    return <h1> Hello world </h1>;
  }
}
ReactDOM.render(<MyComponent />, document.getElementById("root"));
```

- this is same as functional component but with more funtionality.

- older version of React uses class based components but now React mostly uses Functional based components

## JSX

```jsx
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      {4 + 5}
      Learn React
    </a>
  </header>
</div>
```

- This is a `JSX` which looks similar to HTML file (the syntax)
- Since this is a JS there are few changes , here we dont use `class` keyword but we use `className` to assign some Css class (this is because js dont get confused between js class keyword and css class keyword)
- We can use js inside jsx anywhere by just using a `{}` and writing our js expression inside that braces.


1. Tell React to create a normal HTML element eg. div,hr etc
2. Tell recact to some other component.

React checks if in JSX tag it is a normal HTML DOM element then it shows on the screen, and if it not a standard DOM element then it will call the component function and it will check for the returned JSX.


## Babel


**[Babel](https://babeljs.io/)** converts this JSX into the normal Javascript functions.

- Its not HTML 
- Broswer dont understand JSX
- But this is almost same as HTML


## Babel Playgroundd

- [BabelPlayground](https://babeljs.io/repl)

```js
function test(){
  return <h1 test="check"><span>Hello </span></h1>
}
```

This gets converted to normal js funtions

```js   
function test() {
  return /*#__PURE__*/ React.createElement(
    "h1",
    {
      test: "check"
    },
    /*#__PURE__*/ React.createElement("span", null, "Hello ")
  );
}
```

JSX helps us to write simple syntax to make these complex function calls.
## State

- The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
- Whenever the state changes inside the component the components re renders.
- We never modify state directly i.e we only update state using `setState` function. This is because state change needs to render the component so manually doing this would not re render.
- Changing state calls the render function again.

- state is used to keep track of some data and then update the content which is using that data.


## Create_React_App

- `npx create-react-app appname` - this command is used to create a react application with all the preconfiguration.
- Behind the sence there are three library that are working **webbpack** , **Babel** and **DevServer**
- These libraries also require some other librires to work in behind.
# React_Class_Based_Example

```js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Dracula" },
        { name: "Frankestein" },
        { name: "Zombie" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```

- Here we are using `extends Component` because we want to use other react methods in our own created class so we do this. This is same as Inheritence concept.

- This uses already built functionality React has.

```js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Dracula" },
        { name: "Frankestein" },
        { name: "Zombie" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1> {monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
```

- React sees this array we get from map contains some jsx so it renders them as jsx only.

- **Note:-** Whenever we map over some jsx we need to add some key to it so to make it unique.

- This is because react should know which element has been changed and react will only update that particular h1 in DOM and it will not re render all of other h1.

- This makes _react_ so great.

```js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Dracula", id: 1 },
        { name: "Frankestein", id: 2 },
        { name: "Zombie", id: 3 },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((el) => (
          <h1 key={el.id}> {el.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
```

- Using Single Page Applications we dont need to request backend to get the html css or js but rather we just need to do request to get some data(which is generaly formatted is `json` file type)

- Now that data can be used to show on the page using React(JS)


### How_React_Can_Be_Used

THe react can be used in functional component or class components

## class Components

- can produce jsx
- can use the lifecycle methods to run code at specific point in time
- can use the state system to update content on the screen

## Functional Components

- can produce JSX
- NOw functional compoennts can also make use of `HOOKS SYSTEM` to use lifecycle methods and state system


NOTE:- SOME APPLICATION USES BOTH CLASS BASED AND FUNCTIONAL BASED COMPONENTS 

# Communicating_With_Props

Many time we may have single parent component and which has many child components.

- Props system is basically system for passing data from a parent component to a child component.
- The goal is to customize the child component.
- The child cannot pass any data to the parent component.

### Parent Component

```js
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" />
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" />
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" />
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector("#root"));
```

### Child Component

```js 
import React from "react";
import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
```



## LifeCycleMethods

Lifecycle methods are some methods in javascript which helps us to perform some task at some particular moment.

Like once the component gets mounted or loaded first time we want to do some api call to get some data then this is the best way to do. We can use `componentDidMount` function provided by react component.

Here we wait for our component to mount and once its mounted then only we fetch the data from the api.

```js
 componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => this.setState({ monsters: res }));
  }
```

Note:- **Here the setState function is asynchronous so it will take some time to update the state**

There are more lifecycle methods.

## PureReactinVanillaJs

Here in below code we have used `react` library to render some `html` on the page.

This show us that `react` is just it help us to build the views and manage figure our what is the right thing in our view we need to update.

Here in web page we are using `React Dom` to render those to DOM , in native mobile app developement we use `react native` to show these changes.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pure React Application</title>
  </head>
  <body>
    <div id="root">React Not Rendered First</div>
    <!-- React is just Api -->
    <!-- React is just an engine  -->
    <script src="https://unpkg.com/react@16.8.6/umd/react.development.js"></script>
    <!-- It uses rect dom package to render things to DOM -->
    <script src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js"></script>
    <script>
      const Person = (props) => {
        return React.createElement("div", {}, [
          React.createElement("h1", {}, props.name),
          React.createElement("p", {}, props.occupation),
        ]);
      };

      const App = () => {
        return React.createElement("div", { class: "Card-list" }, [
          React.createElement("h1", {}, [
            "React is Rendered",
            React.createElement(Person, {
              name: "Shaksham",
              occupation: "devloper",
            }),
            React.createElement(Person, { name: "John", occupation: "Farmer" }),
            React.createElement(Person, {
              name: "Mike",
              occupation: "Tester",
            }),
          ]),
        ]);
      };

      ReactDOM.render(
        React.createElement(App),
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```
