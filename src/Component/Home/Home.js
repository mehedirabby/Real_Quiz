import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Courses/Course';
import './Home.css'

const Home = () => {
    const coursesData = useLoaderData()
    const courses = coursesData.data

    return (
        <div className='home-container'>
            <div>
                <h2>Notes!</h2>
                <h2>If you take the quiz about your skills you know the status of your study.So You should take quiz regularly after the module finish</h2>
                <p>Quizes are taken or analysis about your study not to harrase you</p>
                <img src="./images/quisz.jpg" alt="" />
            </div>
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