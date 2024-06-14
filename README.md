# Task List Application
This is a simple task list application built with React, Vite.js, Redux, and Redux Saga. The application allows you to fetch, add, update, and remove tasks from a task list, demonstrating the use of Redux for state management and Redux Saga for handling asynchronous actions.
<br/>

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#structure)
- [Technologies Used](#technoligies)
- [Contributing](#contributing)
- [License](#license)
<br/>

## Features
- <b>Fetch Tasks:</b> Retrieve the initial list of tasks from an API.
- <b>Add Task</b>: Add a new task to the list.
- <b>Update Task</b>: Update the status of an existing task.
- <b>Remove Task</b>: Remove a task from the list.
- <b>Asynchronous Actions</b>: Utilize Redux Saga to handle asynchronous operations.
<br/>

## Demo
Check out the live demo of the application [here](https://google.com).
<br/>

## Installation
To get a local copy up and running, follow these simple steps:
1. Clone the repository:
    ```sh
    git clone https://github.com/yusufobr/redux-saga.git
    cd redux-saga
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```
<br/>

## Usage
To use the application, follow these steps:

1. Open your browser and navigate to `http://localhost:5173`.
2. Use the interface to add, update, and remove tasks.

<br/>

## Folder Structure
Here's a brief overview of the project's folder structure:

    src/
    ├── actions/           # Redux action creators
    ├── components/        # React components
    ├── reducers/          # Redux reducers
    ├── sagas/             # Redux Saga watchers and workers
    ├── store/             # Redux store configuration
    ├── App.jsx            # Main application component
    ├── index.js           # Entry point of the application
    └── ...

<br/>

## Technologies Used
- <b>React</b>: A JavaScript library for building user interfaces.
- <b>Vite.js</b>: A fast build tool and development server.
- <b>Redux</b>: A predictable state container for JavaScript apps.
- <b>Redux Saga</b>: A middleware library to handle side effects in Redux.
- <b>Axios</b>: A promise-based HTTP client for the browser and Node.js.

<br/>

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are <b>greatly appreciated</b>.

