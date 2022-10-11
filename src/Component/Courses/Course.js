import React from 'react';
import { Link } from 'react-router-dom';
import './courses.css'

const Course = ({ course }) => {
    const { id, name, logo } = course
    return (
        <div className='c-container'>
            <img className='img' src={logo}></img>
            <div className='des-container'>
                <h3>{name}</h3>
                <Link to={`/quiz/${id}`}>
                <button className='btn'>Start quiz</button>
                </Link>
            </div>



        </div>
    );
};

export default Course;