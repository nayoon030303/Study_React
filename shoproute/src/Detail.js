import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import './detail.scss'

let 박스 = styled.div`
    padding: 20px;
    font-family: 궁서체;
    color: red;
    border: 2px solid green;
    border-radius: 20px 0;
    border-padding: 2px;
    border-width: 5px;
`;

let 제목 = styled.h3 `
    font-size: 30px;
    color: ${props => props.색상};
`;

function Detail() {
    let history = useHistory();
    return (
        <div className="container"> 
            <div className="sass1">SASS</div>
            <박스>test 박스</박스> 
            <제목 색상={'red'}>상품 제목</제목>

            <div className="myalert2">
                <p>재고량이 부족할거 같습니다. </p>
            </div>

            <div className = "row">
                <div className = "col-md-4">
                    <img src ={'https://codingapple1.github.io/shop/shoes2.jpg'} width="100%"/>
                    <h3>상품명: pink shoes</h3>
                    <h3>상품설명: 트랜디한 디자인과 신소재</h3>
                    <h3>price: 44000원</h3>
                    <button>주문하기</button>&nbsp;&nbsp;
                    <button onClick={()=>{ history.goBack() }}>
                        뒤로가기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Detail;