import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizData=useLoaderData()
    const quiz = quizData.data;
    
    const {name,id,questions}= quiz
    
    return (
        <div>
            <h2>Details about quiz</h2>
            <h2>Name:{name}</h2>
            {
                questions.map(question=><Question 
                key={question.id}
                question={question}
                quiz={quiz}
                ></Question>)
            }
            
        </div>
    );
};

export default Quiz;