## Table of Content

- [Birth Of React](#BirthOfReact)
- [React Basics](#ReactBasics)
- [Folder Structure](#FolderStructure)
- [AvailableScripts](#AvailableScripts)
- [React Class based components](#ReactClass)
- [JSX](#JSX)
- [State](#State)

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

## State

- The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
- Whenever the state changes inside the component the components re renders.
- We never modify state directly i.e we only update state using `setState` function. This is because state change needs to render the component so manually doing this would not re render.
- Changing state calls the render function again.

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
