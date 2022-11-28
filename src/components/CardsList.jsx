import React from 'react';
import { useState } from 'react';
import CardImg from './CardImg'
import CardText from './CardText';
import classes from '../styles/Card.css'

const CardsList = () => {
    const image = "../img/grey.jpg";
    return (
      <div className='cardsAlign'>
        <CardImg img = {image}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
        </CardImg>
        <CardText>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">With supporting text bellow as a natural lead-in to additional content.</p>          
        </CardText>
      </div>
    );  
}
export default CardsList;