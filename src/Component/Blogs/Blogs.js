import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h2>Answer Some Queations</h2>
            <div className='answer'>
                <h3>What Is The Purpose of React Router?</h3>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

                </p>
                <br />
                <h3>How Does Context Api Works?</h3>
                <p>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
                <br />
                <h3>Write Something About useRef()</h3>
                <p>The useRef Hook lets us create mutable variables inside functional components. There are three main key points that you should keep in mind when using the useRef Hook.
                A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle.
                Refs can be used for accessing DOM nodes or React elements, and for storing mutable variables (like with instance variables in class components).
                Updating a ref is a side effect so it should be done only inside a useEffect (or useLayoutEffect) or inside an event handler</p>
            </div>

        </div>
    );
};

export default Blogs;