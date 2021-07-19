import logo from './logo.svg';
import './App.css';

function Potato(props){
  return <h1>I love {props.fav}</h1>;
}

function Rain(){
  return <h3>장마..더워더워</h3>
}

function Movie(props){
  return <h3>좋아하는 영화는 {props.fav}</h3>
}

function App() {
  return (
    <div>
      <Rain/>
      <h1>장마</h1>
      <Potato fav = "sweet-potato" />
      <Movie fav="Dead-apple" />
      <Movie fav="부산행" />
    </div>
   
  );
}

export default App;
