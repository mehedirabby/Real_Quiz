import React from 'react';
import Option from '../Option/Option';
import './Question.css'

const Question = (props) => {
    // 
    const {options,correctAnswer} =props.question
    console.log(props.question.correctAnswer)
    console.log(props)
    
    return (
        <div>
           <h3>Question</h3>
           
           <div  className='option-container'>
           <h5>{props.question.question}:</h5>
           {
            options.map(option=><Option
            option={option}
            correctAnswer={correctAnswer}
            ></Option>)
           }
           </div>
        </div>
    );
};

export default Question;