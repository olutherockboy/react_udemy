import React from 'react';
// import './person.css';




const Person = (props)=>{
    return(
        <div className="person">
            <p>{props.name}</p>
            <input type="text" onChange={props.changeTextInput} value={props.name} ></input>
        </div>
    )
}



export default Person; 