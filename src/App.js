import logo from './logo.svg';
import './App.css';

class HelloWorld extends Component{
  render(){
    return <h3>  Hello World. </h3>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Primera demo de React.
        </p>
        
      </header>
    </div>
  );
}

export default App;
