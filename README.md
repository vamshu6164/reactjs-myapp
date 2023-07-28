# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



<!-- added by vamshu -->
### `npm i bootstrap`
Import the below bootstrap files in src/index.js file

### `import 'bootstrap/dist/css/bootstrap.min.css';`
### `import 'bootstrap/dist/js/bootstrap.bundle.js';`

<!-- Building + Hosting React App For free on Github Pages -->
<!-- 
1. run 'npm run build' (build fould will be create)- it can use to deployee our app in host. just we have to add build folder in host
 --hosting from github--
2. Install git and github for Desktop
3. open chrome and search for 'deployment of create react app -- https://create-react-app.dev/docs/deployment/' 
4. in that document search for github pages.
5. upload your files in github repository not in bitbucket - and clone it
6. follow this document 'https://create-react-app.dev/docs/deployment/'
    Step 1: Add homepage to package.json (search in document)
      "homepage": "https://myusername.github.io/my-app",
    Step 2: Install gh-pages and add deploy to scripts in package.json
    Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.
      npm install --save gh-pages
    Add the following scripts in your package.json:
      "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
    Step 3: Deploy the site by running npm run deploy
      npm run deploy
    Step 4: For a project page, ensure your project’s settings->pages use gh-pages
      Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:

Watch YouTube : https://www.youtube.com/watch?v=Fi75tq9JikI&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=17
-->