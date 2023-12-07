# Getting Started
This repository aims to assist you in beginning work on a MERN stack application with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams.


Getting Started
**This project includes both the client application and the server application, and the node_modules directory will be present in two different places. To set up the project, follow these steps:**

**Run npm install from the root directory.**
After this initial installation, run npm run-script install-all from the root directory. You can use this command anytime you need to install all modules again. This command is defined as a script in the package.json file.

# Installing Dependencies

**npm install**       
#Install root-level dependencies
**npm run-script install-all** 
#Install dependencies for both client and server

# Deployment
If you have deployed the frontend and backend on Vercel instead of Heroku, you need to update the deployment-related information accordingly. The script in the package.json file that automates the build and deployment process might differ based on the hosting platform.

**Assuming you have a vercel.json or now.json file for Vercel configuration, update your scripts section in package.json:**

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "deploy": "vercel"
}

**Additionally, you might need to add "engines" field to specify the required Node.js version.**
 For example:

"engines": {
  "node": "14.x"
}
# Scripts
**start:** Start the client application.
**build:** Build the client application for production.
**test:** Run tests.
**eject:** Eject from Create React App

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "install-all": "npm install && cd client && npm install && cd .."
}

# File Structure
 loan app contains all the file
# Loan App

The Loan App project is organized into the following directories to maintain a clean and modular structure:

## Frontend (loanapp)

- **public:** Holds all static files for the application.

- **src:**
  - **components:** Contains different components that make up the views of our application.
  - **Images:** Holds all the images used in the application.
  - **Pages:** This folder contains all the pages used in the web app.
  - **App.js:** Renders all browser routes and different views.
  - **index.js:** Renders the React app by rendering App.js (should not be changed).
  - **package.json:** Defines npm behaviors and packages for the client.
  - **.gitignore:** Tells Git which files to ignore.
  - **README:** This file!

## Backend

- **Routes:** Holds all route definitions for the backend.

  - **UserRoutes.js:** Defines routes related to user operations in the backend.


- **Controllers:** The heart of the backend logic. The `UserController` in this directory is particularly important.

- **Models:** Holds the models of the app.

  - **LoanUser.js:** Defines the model for regular users of the loan application.
  - **ShubhamAdmin.js:** Defines the model for administrative users, such as ShubhamAdmin.

- **Connection.js:** Manages the database connection for the backend.

- **index.js:** The main entry point of the backend. It brings everything together, including setting up the server and connecting to the database.


## UserController

The `UserController` in the Controllers directory is a crucial part of our backend. It manages user-related operations, including authentication, registration, and other tasks. Explore this controller to understand how user-related functionalities are implemented in our backend.



## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script server`

Runs just the server in development mode.

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to Heroku, this does not need to be run since it is handled by the heroku-postbuild script. Customize this according to your project.


## Learn More

- You can learn more in the [Create React App documentation](https://create-react-app.dev/docs/getting-started/)
- To learn how to set up a local MongoDB instance for testing, check out the guide on [Connecting to MongoDB](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database).
- To learn how to deploy a full-stack web app to Heroku, follow this [comprehensive guide](https://dev.to/smithmanny/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncd).
- Explore React further by referring to the [React documentation](https://reactjs.org/).
- If `npm run build` fails to minify, refer to the [official documentation](https://create-react-app.dev/docs/troubleshooting#npm-run-build-fails-to-minify).
