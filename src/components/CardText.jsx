import React from 'react';
import { useState } from 'react';

const CardText = ({ children }) => {


    return(  
        <div className="card" style={{width: 18 +'rem'}}>          
          <div className="card-body">
          {children}
          <a href="#" className="btn btn-primary">Go somewhere</a> 
          </div>
        </div>

    )    
}
export default CardText;