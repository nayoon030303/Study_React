import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import SetState from './SetState'


class App extends Component { 
 
 render(){ 
  
  return (
    <div className="App">
         <SetState/>
    </div>
  );
 }
}
export default App;
