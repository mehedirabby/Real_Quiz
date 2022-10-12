import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Statics = () => {
    const [datas,setDatas]=useState([])
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/quiz')
        // .then(res=>res.json())
        // .
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data=>{
            const datasLoaded = data.data;
            console.log(datasLoaded.id)
            const loadedData = datasLoaded.map(data=>{
                const total = datasLoaded.total;
                
            })

        })


    },[])
   
    return (
        <div>
            <h2>This is statics</h2>
           
        </div>
    );
};

export default Statics;