import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizData=useLoaderData()
    return (
        <div>
            <h2>Details about quiz</h2>
        </div>
    );
};

export default Quiz;