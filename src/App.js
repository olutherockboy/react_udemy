import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends React.Component{

state ={
  Persons:[
    {key:1, Name:"1",Age:29},
    {key:2, Name:"2",Age:30},
    {key:3, Name:"3",Age:30}
  ],
  showContent: true,
  inputText:""

}




changeTextInput =(event,id) => {
  const personIndex= this.state.Persons.findIndex((p)=>{
    return  p.key === id;
  });

  const person = { ...this.state.Persons[personIndex]}

  person.Name = event.target.value;

  const persons = [...this.state.Persons];
  persons[personIndex]=person;

 this.setState({Persons: persons})

}


CheckLenghtHandler = (event) => {

var word = event.target.value;
this.setState({ inputText: word })
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

removeBlock = (index) =>{
  var Input = this.state.inputText.split('')
      Input.splice(index,1)
      var newtext =  Input.join('')
      this.setState({
        inputText: newtext
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

        let list = this.state.inputText
        var letters = list.split("")
        console.log(letters)
    
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
          </a><br></br>
          <input onChange={this.CheckLenghtHandler}   value={this.state.inputText.length == null? "enter a value" : this.state.inputText}/>
            

             <p style ={{color:'green'}}>{this.state.inputText.length}</p>
             <Validation inputTextLength={this.state.inputText.length}  />

            {letters.map((c,index)=> {return <Char letter={c} key={index} click={()=> this.removeBlock(index)} />})}


          

        </header>
      </div>
    );
  }
}
export default App;
