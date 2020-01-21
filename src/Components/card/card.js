import React from 'react';
import './card.styles.css'

const catnames = ['Mittens', "Minime", "Tiger", "Panther", "Lion", "William", "Paul", "Ninja", "Cutie", "Kevin", "Creamy", "Diablo"] 


  /*  const randomstuff = Math.floor(Math.random() * 11)  
     a random number between 0-11 
  <h1>{catnames[randomstuff]}</h1> */  

 
export const Card = props => (
    <div className="card-container container-fluid">
        <img className="cardimg" alt="kitten"
         src={`https://robohash.org/${props.kitten.name}?set=set4&size=200x200`}
          />
        
    <h2> Owner: {props.kitten.name}</h2>
    <h3><p>Adopt me: <br /> {props.kitten.email} <br /> {props.kitten.phone} </p></h3>
    <h2>City: {props.kitten.address.city}</h2>
    </div>
);

/* api key ebfc89fe-7988-4d88-abb5-f0931884d3b6 */ 
