import React from 'react'
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function Detail(){

 
    let history = useHistory();

    return(
        <div className="container">
            <div className = "row">
            <div className = "col-md-4">
                <img src ="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
                <h3>상품명: pink shoes</h3>
                <h3>상품설명: 트랜디한 디자인과 신소재</h3>
                <h3>price: 4300</h3>
                <Button variant="info">상품 구매</Button> &nbsp;
                <Button variant="secondary" onClick={()=>{history.push("/");}}>go main</Button> &nbsp;
                <Button variant="secondary" onClick={()=>{history.push("/infor");}}>go infor</Button>
            </div>
            </div>
        </div>
    );
}

export default Detail;