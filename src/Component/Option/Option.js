import React from 'react';

import './Option.css'

const Option = (props) => {
    const {option,correctAnswer}=props;
    console.log(correctAnswer)
    
    const notify=(ans)=>alert(`${ans}`);

    const handleChecker=(selectedAnswer)=>{
        console.log(selectedAnswer)
        console.log(correctAnswer)
        if(selectedAnswer === correctAnswer){
            let ans = 'correct answer'
            notify(ans)
            
        }
        else{
           let ans = 'Wrong answer'
           notify(ans)
          
       }
    }
    
    return (
        <div>

           <div>
           <input type="radio" name='option' onClick={()=>handleChecker(option)} /> <label htmlFor="">{option}</label>
           </div>
           
            
            
        </div>
    );
};

export default Option;