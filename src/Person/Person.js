import React from 'react';
import './Person.css';
import Radium from 'radium';




const Person = (props)=>{
    const style ={
        '@media (max-width: 500px)':{
            color: 'white'
        }
    }


    return(
        <div className="person" style={style} >
            <p>{props.name}</p>
            <input type="text" onChange={props.changeTextInput} value={props.name} ></input>
            <button onClick={props.deletePerson} >DELETE</button>
        </div>
    )
}



export default Radium(Person); 