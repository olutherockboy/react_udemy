import React from 'react';
import './Char.css'

const Char = (props) =>{
    return(
    <div className="char" onClick={props.click} >
        {props.letter}
    </div>
    )
}

export default Char;