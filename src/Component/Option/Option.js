import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Option.css'

const Option = (props) => {
    const {option,correctAnswer}=props;
    console.log(correctAnswer)
    
    const notify=(ans)=>toast(`${ans}`);

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
           
            
           <ToastContainer />
        </div>
    );
};

export default Option;