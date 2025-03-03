# mobile-plan-compatible

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

Deployment is done using Vercel. It is deployed on this [link](https://mobile-plan-compatible.vercel.app/)


### Setup

To run this app, no need to install dependencies. If required, please install using command `npm install --legacy-peer-deps` to avoid any issues.

You can directly run using `npm run start` command.

Please use node version `v22` to avoid any failure in running app.


### Approach

1. User will select which type of search they want to perform whether "By Mobile Name" or "IMEI number"
2. Once selected, they can input their respective selection in input. For testing, please refer to `src/mocks/phonePlans` to get list and copy paste value in input
3. Once entered, user can hit enter and see their result. Delay is added in mocking to view loading transition (Used msw for it. Delay can be updated by updating param in `delay()` method in `src/mocks/handlers.js` file). 
4. Once API complete, they can see list of plans available.
5. If no matching record found, user can see "No result found" text.

### Technical approach
1. Search Type and Search Value are stored in redux store to fetch in `CompatibilityChecker` component
2. Two separate components are created for input `IMEISearch` and `MobileSearch` to run their validation in their respective file.
3. useMutation is used to run POST call, which on success, result is cached in `QueryClient`. `QueryClient` caches is refreshed on each API request.
4. Once result is fetched, cache from `QueryClient` is used to display result in `PhonePlans` component
5. `LoadingPlan` component is added for loading transition