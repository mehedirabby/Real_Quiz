
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './Statics.css'
import React from 'react';

const  Statics = () => {
    const data = [
        {
          name: "React",
          Question: 8,
          
        },
        {
          name: "Java Script",
          Question: 9,
          
        },
        {
          name: "CSS",
          Question: 8,
         
        },
        {
          name: "GIT",
          Question: 11,
          
        }
      ];
      
      
        return (

         <div>
            <h2>Simple Bar Chart On Quiz and Their Question</h2>
             <div className='bar-chart'>
             <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            
            <Bar dataKey="Question" fill="#82ca9d" />
          </BarChart>
             </div>
         </div>
        );
        }      

export default Statics;