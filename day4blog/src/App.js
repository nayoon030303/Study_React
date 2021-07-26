import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [a,b] = useState('비빔밥');
  let [c,d] = useState("3위",55);
  let [title1,setTitle1] = useState(['한식 맛집 추천','양식 맛집 추천','일식 맛집 추천']);
  let [title2,setTitle2] = useState('음식리스트');
  let [count,countf] = useState(0);
  let posts = "관악구 food 맛집";
  let logo ="data:image/jpeg;base64,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";
  let style ={color:"pink"}

  function changeTitle(){
    //let newArray = [...글제목];
    //newArray[0] = "김밥집 "
  }

  function gkatn(){
    return(
      <h2>함수입니다.</h2>
    );
  } 

  function f(){
    return "백종원이 추천한";
  }
  return (
    <div className="App">
      <div className="nav">
        <h4>{posts}</h4>
        <h3 className="list">{c}</h3>
      </div>
      <h4 style={style}>{f()}</h4>
      <img src={logo}/>
      <div>
        <h4 className="list">{title1[0]}<span onClick={()=>{countf(count+1)}}>🧡</span>{count}</h4>
        <p>7월 26알</p>
        <hr/>
      </div>
      <div>
        <h4 className="list">{title1[1]}<span onClick={()=>{countf(count+1)}}>💛</span>{count}</h4>
        <p>7월 26알</p>
        <hr/>
      </div>
      <div>
        <h4 className="list">{title1[2]}<span onClick={()=>{countf(count+1)}}>💚</span>{count}</h4>
        <p>7월 26알</p>
        <hr/>
      </div>
      
      <Modal></Modal>
    </div>
    
  );
}

function Modal(){
  return(
    <>
      <div>
        <h3>제목</h3>
        <p>날짜</p>
        <p>상세정보</p>
      </div>
    </>
  );
}

export default App;
