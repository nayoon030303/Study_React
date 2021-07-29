import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import { Button,Navbar,Container, NavDropdown, Nav  } 
      from 'react-bootstrap';

function App() {
  let data=[{
    id:1,
    cname:'아이스아메리카노',
    content:'2021 best menu',
    price:4400,
    img: 'http://img.danawa.com/prod_img/500000/631/014/img/3014631_1.jpg?shrink=360:360&_v=20200212092442'
  },{
    id:2,
    cname:'러블리 딸기 라떼',
    content:'2021 new menu',
    price:5200,
    img:'https://pbs.twimg.com/media/EQJRfNGU8AAchqE.jpg'
  },{
    id:2,
    cname:'체리블라썸 라떼',
    content:'2021 new menu',
    price:5000,
    img:'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99FC5E505C92160209'
  }]
  

  return (
    
    <div className="App">
      <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

    <div className="jumbotone">
      <h1>Love Coffe</h1>
      <h2>Summer season~ </h2>
      <Button variant="success">Get Start</Button>
    </div>
   
    </div>
  );
}

export default App;
