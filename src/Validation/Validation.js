import React from 'react';
import './Validation.css';

const Validation = (props) =>{
  return(
      <div className="Validation">
          {props.inputTextLength < 5 ?<p>Text too short</p> : <p>Text too long </p> }
     </div>
     )
}


export default Validation ;



