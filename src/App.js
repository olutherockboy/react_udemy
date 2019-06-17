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


changeTextInput =(event) => {
this.setState({
  Persons:[

    {key:1, Name: event.target.value ,Age:29},
    {key:2, Name: event.target.value ,Age:30}

  ]

})

}

showContentHandler = () =>{
    const doesShow = this.state.showContent
  this.setState({showContent: !doesShow});
}

deletePerson = (index)=>{
  const newArray = this.state.Persons;
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
        changeTextInput={this.changeTextInput}
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
