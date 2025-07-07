import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HelloWorld extends Component{
  render(){
    //I can Access props with this.props.title
    return <h3>  Hello World. </h3>
  }
}

class Paragraph extends Component {
  render (){
    return <p> { this.props.text } </p>
  }
}

class CustomDivOne extends Component{
  
  render(){
    const {
      Array,
      Function,
      Object,
      CustomComponent
    } = this.props;
    
    const MappedNumbers = Array.map(Function);

    return <div>
      <p> { MappedNumbers.join(', ') } </p>
      <p> { Object.key } </p>
      { CustomComponent }
    </div>
  }
} 

//definir valores por defecto
CustomDivOne.defaultProps = {
  Array: [ 1,2,3 ],
  CustomComponent: ''
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld title="this is a title"/>
        <Paragraph text="Primera demo de React." />
      </header>
      <CustomDivOne 
        Array = {[ 1, 2, 3 , 4]} 
        Object = {{ key: 'value of js object'}}
        CustomComponent = { <h3> This is a Custom React Component </h3> } />
        
    </div>
  );
}

export default App;
