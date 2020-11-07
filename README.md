# Comparison page

## Description
A web-based application for comparing products with multiple dynamic attributes. \
It fetches product comparison data from [a mock API](https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all), parses and display the data in browser.

The application includes front-end written in Typescript:
- Framework used : ReactJS
- State management : React Hooks, without persistence library
- Styling : SCSS (using node-sass parser)
- Unit Testing : React Testing Library, Jest
- Code formatter : Prettier

## Installation

To install the website, navigate to the desired folder in your terminal and clone this repository

    git clone https://github.com/fleea/compare-products.git
    
After the repository has been cloned, navigate to the new created folder and install the dependencies

    cd compare-products
    yarn install

With these packages installed, the server can be started by running the following command:

    yarn start

This should start up the server and runs the app in the development mode, which will automatically open your default browser in [http://localhost:3000](http://localhost:3000). \
The page will reload if you make edits.You will also see any lint errors in the console.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). \
All available scripts from Create React App are also available in this package.


## Available Scripts

In the project directory, you can run:

    yarn start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

    yarn test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

    yarn build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

    yarn pretty

Run prettifier code formatter in single quote and tab with 4 for all js, ts, tsx and scss files in `src` folder

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
