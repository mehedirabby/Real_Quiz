import React from 'react';
import './Option.css'

const Option = (props) => {
    const {option,correctAnswer}=props;
    console.log(correctAnswer)
    let ans;
    const notify=(ans)=>alert(`${ans}`);

    const handleChecker=(selectedAnswer)=>{
        console.log(selectedAnswer)
        console.log(correctAnswer)
        if(selectedAnswer === correctAnswer){
             ans = 'correct answer'
            notify(ans)
            
        }
        else{
            ans = 'Wrong answer'
           notify(ans)
          
       }
    }
    
    return (
        <div>
            <input type="radio" name='option' onClick={()=>handleChecker(option)} /> <label htmlFor="">{option}</label>
            
            
        </div>
    );
};

export default Option;