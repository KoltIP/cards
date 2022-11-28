import React from 'react';
import { useState } from 'react';

const CardImg = (props) => {

    const image = props.img;
    const children = props.children;

    return(  
        <div className="card" style={{width: 18 +'rem'}}>
          <img src={image} style={{height: 150 + 'px'}}  className="card-img-top" alt="..." /> 
          <div className="card-body">
          {children}
          </div>
        </div>

    )    
}
export default CardImg;

