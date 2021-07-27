import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState('21년도 K-POP 현황');
  let [분류, 분류변경] = useState(['남자그룹', '남자가수', '여자그룹', '여자가수']);
  let [이름, 이름변경] = useState(['BTS', '나훈아', '블랙핑크', '아이유']);
  let [노래, 노래변경] = useState(['Butter', '테스형', '뚜두뚜두', '좋은날']);
  let [장르, 장르변경] = useState(['트로트', '댄스', '힙합', '발라드']);
  let [따봉1, 따봉변경1] = useState(0);
  let [따봉2, 따봉변경2] = useState(2);
  let [따봉3, 따봉변경3] = useState(5);
  let [따봉4, 따봉변경4] = useState(8);

  let [modal, modal변경] = useState(false);

  function 반복ui(){
    let arr = [];
    for(let i=0; i<4; i++){
      arr.push(<div>hi!</div>);
    }

    return arr;
  }
 
  return (
    <div className="App">
      <div className="nav">
        {글제목}
        {반복ui()}
      </div>

      <div className="list">
        <h4>
          {이름[0]} : {노래[0]} : {장르[1]}
          <span onClick={()=>따봉변경1(따봉1+1)}>♥</span>{따봉1}
        </h4>
        <h4>
          {이름[1]} : {노래[1]} : {장르[0]}
          <span onClick={()=>따봉변경2(따봉2+1)}>★</span>{따봉2}
        </h4>
        <h4>
          {이름[2]} : {노래[2]} : {장르[2]}
          <span onClick={()=>따봉변경3(따봉3+1)}>♡</span>{따봉3}
        </h4>
        <h4>
          {이름[3]} : {노래[3]} : {장르[3]}
          <span onClick={()=>따봉변경4(따봉4+1)}>♣</span>{따봉4}
        </h4>
      </div>
      {
        이름.map(function(한팀){
          return(
            <div className="list">
              <h3>{한팀}</h3>
              <h3>
                <span onClick={()=>따봉변경1(따봉1+1)}>★</span>
              </h3>
            </div>
          )
        })

      }

      <Modal></Modal>
      {
        modal == true?<Modal></Modal>:null

      }
      <div className="modal">
        <h5 onClick={()=>modal변경(true)}>가수이름</h5>
        <p>가수노래</p>
        <p>장르</p>
    </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h5>가수이름</h5>
      <p>가수노래</p>
      <p>장르</p>
    </div>
  );
}

export default App;