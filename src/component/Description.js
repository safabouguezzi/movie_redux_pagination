import React from 'react'
import './styleDescription.css';
import './style.css';

import {Button}  from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Description = () => {
    const movies = useSelector(state => state.movieReducer)

    const navigate =useNavigate()
    const params = useParams()
  

    let desc = movies.find(movie => movie.id === params.id)
   
    return (
        <div >
            <div className='descriptionPage' >

                <h1> Movie Description</h1>
                <Button  className='GoBack'  onClick={()=>navigate("/")} >
                    Go Back
                </Button>
            
            </div>
            
            <div className='movieDescriptionPage'>


                <div className='text' >

                    <h1>{desc.name}</h1>
                    <div className='desc'> {desc.description} </div> 


                </div>


                <div className='trailer'>

                    <iframe  
                    title="frame0"
                    className='video'
                    frameBorder={0}  
                    allowFullScreen
                        src={desc.trailer}>
                    </iframe>
                  
                </div>



            </div>
        </div>
    )
}

export default Description;
