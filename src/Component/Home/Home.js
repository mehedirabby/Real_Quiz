import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Courses/Course';
import './Home.css'

const Home = () => {
    const coursesData = useLoaderData()
    const courses = coursesData.data

    
    
    console.log(courses)
    
    
    return (
        <div className='home-container'>
            <h2>this is home{courses.length}</h2>
            <div className="course-container">
            {
                courses.map(course=><Course 
                    key={course.id}
                    course={course}
                    ></Course>)
            }
            </div>
        </div>
    );
};

export default Home;