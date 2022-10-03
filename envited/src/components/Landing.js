import React from 'react';
import MovieNight from './Images/MovieNight.png';
import {Link} from "react-router-dom"

function MovieNightImg (){

  const MovieNightImg = require('.Images/MovieNight.png');
}

function CreateEventButton(){

  return
  <Link to="/create" class="nav-link">
  <button class="btn btn-primary" >
    <span style={{"font-size": "20px"}} >
       🎉 Create my event
    </span>
  </button>
  </Link>


  function LandingFrameMessage(){

    const style ={
      margin: "auto",

    }
  }

  return <div style={style}>

  <div style={{"font-size": "96px"}}>

  Easily create Events.


   </div>

   <br />

   <CreateEventButton />


  </div>



  
}


export default Landing;
