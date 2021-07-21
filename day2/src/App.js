import logo from './logo.svg';
import './App.css';

function Food(props){
  return(
    <>
    <h1>I like {props.menu} </h1>
    <h1>I like {props.price} </h1>
    </>
  );
}
function App() {//컴포넌트
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Food menu = "kimchi" price="3000" />
        <p>
         안녕 미림정보과학고 학생여러분
        </p>
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

export default App;
