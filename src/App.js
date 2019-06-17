import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends React.Component{

state ={
  Persons:[
    {key:1, Name:"1",Age:29},
    {key:2, Name:"2",Age:30},
    {key:3, Name:"3",Age:30}
  ],
  showContent: true
}


changeTextInput =(event,id) => {
  const personIndex= this.state.Persons.findIndex((p)=>{
    return  p.key == id;
  });

  const person = { ...this.state.Persons[personIndex]}

  person.Name = event.target.value;

  const persons = [...this.state.Persons];
  persons[personIndex]=person;

this.setState({
  Persons: persons

})

}

showContentHandler = () =>{
    const doesShow = this.state.showContent
  this.setState({showContent: !doesShow});
}

deletePerson = (index)=>{
  const newArray = this.state.Persons.slice();
  newArray.splice(index,1);
this.setState({
Persons: newArray
})
}

  render(){
    const showContent = this.state.showContent;
    let Content;
    if(showContent) {
      Content = (
      <div>
        {this.state.Persons.map((P,index) =>{
          return <Person 
        key ={P.key}
        name={P.Name}
        age={P.age}
        changeTextInput={(event)=> this.changeTextInput(event,P.key)}
        deletePerson={()=> this.deletePerson(index)}
        />})}
      </div>)
        }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <button onClick={this.showContentHandler}>
            Show Content 
         
          </button>
           {/* {this.State.Persons.map( person =>  */}
           
           {Content}
           
           {/* )} */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
