import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { render } from '@testing-library/react';

class  App extends Component{
  
  render(){
    let maparr = [3,4,5,6];
    return (
        maparr.map(x=> x*2)
            
    );
  }
}
export default App;
