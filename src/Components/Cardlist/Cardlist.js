import React from 'react';
import './Cardlist.styles.css'
import {Card} from '../card/card'
/* this is a functional component */ 
export const Cardlist = props => (
<div className="card-list">
    {props.kittens.map(kitten => (
          <Card key={kitten.id} kitten={kitten}></Card> 
         ))}
    </div>
);


/* give it props in the app screen in the <Cardlist /> area */ 
/* passing the props of kittens into the card component */ 