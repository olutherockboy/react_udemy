import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Person from './Person/Person';

class App extends React.Component{

State ={
  Persons:[
    {key:1, Name:"1",Age:29},
    {key:2, Name:"2",Age:30}
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
  let b = true
  this.setState({
    showContent: !b
  })
}

  render(){
    const showContent = this.State.showContent;
    let Content;
    if(showContent){
      Content =  <Person 
      key ={this.State.Persons[0].key}
      name={this.State.Persons[0].Name}
      age={this.State.Persons[0].age}
      changeTextInput={this.changeTextInput}

      />
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
