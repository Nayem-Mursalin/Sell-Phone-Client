import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-600 bg-base-100 shadow-xl m-20">
                <div className="card-body">
                    <h2 className="card-title">Question 1. What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main types of state we need to properly manage in your React apps:<br></br>
                        1. Local state<br></br>
                        2. Global state<br></br>
                        3. Server state<br></br>
                        4. URL state</p>
                </div>
            </div>
            <div className="card w-600 bg-base-100 shadow-xl m-20">
                <div className="card-body">
                    <h2 className="card-title">Question 2. How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.</p>
                </div>
            </div>
            <div className="card w-600 bg-base-100 shadow-xl m-20">
                <div className="card-body">
                    <h2 className="card-title">Question 3. What is a unit test? Why should we write unit tests?</h2>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.<br></br> we have to write unit test because <br></br>
                        1. The earlier a problem is identified, the fewer compound errors occur.<br></br>
                        2. Costs of fixing a problem early can quickly outweigh the cost of fixing it later.<br></br>
                        3. Debugging processes are made easier.<br></br>
                        4. Developers can quickly make changes to the code base.<br></br>
                        5. Developers can also re-use code, migrating it to new projects.</p>
                </div>
            </div>
            <div className="card w-600 bg-base-100 shadow-xl m-20">
                <div className="card-body">
                    <h2 className="card-title">Question 4. What are the Difference between React vs. Angular vs. Vue?</h2>
                    <p>Angular is a TypeScript-based structure framework, while Vue is a progressive lightweight framework. Both - Angular JS and React JS frameworks are used to create web interfaces for front end development.
                        <br></br>Angular is Googles matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You.
                        <br></br>Vue is a popular progressive, open-source framework for developing complex user interfaces, while React is a JavaScript library for building web development for interactive elements on UIs. React is also used to develop SPAs and mobile apps.
                        <br></br>Vue JS is more oriented to novice developers, while React requires in-depth knowledge of JavaScript. React uses a virtual DOM (copy of the actual DOM) to interact with HTML files, but every element is represented as a JavaScript object. Vue has two-way binding and uses a virtual DOM.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;