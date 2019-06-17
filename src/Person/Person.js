import React from 'react';
import './Person.css';




const Person = (props)=>{
    return(
        <div className="person">
            <p>{props.name}</p>
            <input type="text" onChange={props.changeTextInput} value={props.name} ></input>
            <button onClick={props.deletePerson} >DELETE</button>
        </div>
    )
}



export default Person; 