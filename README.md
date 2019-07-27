## It is no secret that the trend in web development is to work at the component level. And this is when React js comes into the picture.

## React js allows us to work at the component level by separating the UI into smaller pieces (components) that we can maintain & update individually.

##  Activity objectives
* To get confortable extracting components by saving reusable components into their own files.
* To practice importing and exporting components.
* Manipulate data from a json file to render cards by passing props.
* Maintain state.

### This list provides the files created and a description regarding the connection between these files.

1. For the purpose of this activity, we will create our own json file at the same level our App.js file is saved. This file is an array of objects [{key: value},{key: value}] ✓
2. Save images in assets folder [pending... ⁉️ ] 
3. Create `components` folder to store the following components: 
* CityCard ✓
* Title ✓
* Wrapper ✓
4. Within each component folder, create an index.js & style.css files. ✓
5. Components Folder
    `Notes: You can use props.children on components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’. `

    `Wrapper:`
    * import React from "react"
    * create a `stateless` functional component
    * pass in props object as a parameter
    * return an empty div & pass in `props.children`
    * export default Wrapper component

    `Title:`
    * import React from "react"
    * create a `stateless` functional component
    * pass in props object as a parameter
    * return <h1></h1> & pass in props.children
    * export default Title component

    `CityCard:`
    * import React from "react"
    * create a `stateless` functional component
    * pass in props object as a parameter
    * add <img> tag: alt & src will be passed in as props at a higher level component
    * remember our cities.json file? We will make reference to our json file by accessing the props object properties we defined in our json file: `props.name`, `props.image`, `props.id`
    * export default CityCard component

6. App.js file
    * import React from "react", CityCard, Wrapper, and Title components & cities.json file.
    * create a class component

7. Create a method to remove the card




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
