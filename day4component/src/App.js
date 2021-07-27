import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App1() {
  return (
    <div className="App">
      
    </div>
  );
}


class App extends React.Component{
  state={
    count:0
  };

  render(){
    return(
      <div className="App">
        <h1>나는 컨포넌트다</h1>
      </div>
    );
  }
}

export default App;
