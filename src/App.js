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
    //para visualizar el flujo de renderizado
    console.log("render de Paragraph")
    return <p> { this.props.text } </p>
  }
}

class CustomDivOne extends Component{

  constructor(props){
      super(props);
      this.state = { contador: this.props.ContadorInicial };
      setInterval(() => {
        this.setState({ contador: this.state.contador + 1 })
      }, 1000);
    }

  render(){
    //para visualizar el flujo de renderizado
    console.log("render de custom div");

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

      <p> { this.state.contador } </p>
      <Paragraph text= { this.state.contador } />
    </div>
  }
} 

//definir valores por defecto
CustomDivOne.defaultProps = {
  Array: [ 1,2,3 ],
  CustomComponent: '',
  ContadorInicial: 1
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
        Function = { function(value){ 
          return value * 2;
        } }
        CustomComponent = { <h3> This is a Custom React Component </h3> } />
        
    </div>
  );
}

export default App;
