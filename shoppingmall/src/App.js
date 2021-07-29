//import logo from './logo.svg';
import './App.css';
import { Button,Navbar,Container, NavDropdown, Nav  } 
      from 'react-bootstrap';
import {name, name2} from './data0.js';
import {Link, Route,Router,Switch} from 'react-router-dom';

function App() {

  let data = [
    {
      id: 0, 
      title: 'Black & White Shoes',

      content: '가벼운 소재 사용', 
      price: 50000, 
      img: 'https://codingapple1.github.io/shop/shoes1.jpg'
    }
    ,
    {
      id: 1, 
      title: 'Pink Shoes',
      content: '착용감 편안', 
      price: 62000, 
      img: 'https://codingapple1.github.io/shop/shoes2.jpg'
    }
    , 
    {
      id: 2, 
      title: 'Red Shoes',
      content: '쿠션감 증대', 
      price: 70000, 
      img: 'https://codingapple1.github.io/shop/shoes3.jpg'
    }
  ];


  return (
    <div >      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="background"> 
          <h2 style={{marginTop:"30px"}}>50% Sales OPEN</h2>
            <p> This is a shoes ShoppingMall</p>
            <button style = {{fontWeight:'bold'}} variant ="primary" >React Start</button>
      </div>
      <h1>{name}</h1>
      <h1>{name2}</h1>
      <Router path="/">이곳은 메인 페이지입니다. 즐거운 시간되세요</Router>
      <Router path="/">상세페이지입니다.</Router>
      <div className="container">
        <div className="row" style={{paddingTop: "30px"}}>

        
          <Card shoes={data} id={0} />
          <Card shoes={data} id={1} />
          <Card shoes={data} id={2} />
       


          <div className="col-md-4" style={{textAlign: "center"}}>
            <img src={data[0].img} style={{width:"400px", height:"320px"}}/>
            <h1>{data[0].title}</h1>
            <h2>{data[0].content}</h2>
            <h3>price: &nbsp;
              <strike>{data[0].price}</strike> &nbsp;
              <strong>{data[0].price/2}원</strong>
            </h3>
          </div>
          <div className="col-md-4" style={{textAlign: "center"}}>
            <img src={data[1].img} style={{width:"100%", height:"320px"}}/>
            <h1>{data[1].title}</h1>
            <h2>{data[1].content}</h2>
            <h3>price: &nbsp;
              <strike>{data[1].price}</strike> &nbsp;
              <strong>{data[1].price/2}원</strong>
            </h3>
          </div>
          <div className="col-md-4" style={{textAlign: "center"}}>
            <img src={data[2].img} style={{width:"100%", height:"320px"}}/>
            <h1>{data[2].title}</h1>
            <h2>{data[2].content}</h2>
            <h3>price: &nbsp;
              <strike>{data[2].price}</strike> &nbsp;
              <strong>{data[2].price/2}원</strong>
            </h3>
          </div>
          
        </div>
      </div>
      <div className="container">
        <div className="row" style={{paddingTop:'30px'}}> 
          {
            data.map((shoe,i)=>{
              return <Card shoes = {data} id={i} key={i}/>
            })
          }
        </div>
      </div>

    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4 " style={{textAlign: "center"}}>
      <img src={props.shoes[props.id].img} style={{width:"100%", height:"320px"}}/>
      <h1>{props.shoes[props.id].title}</h1>
      <h2>{props.shoes[props.id].content}</h2>
      <h3>price: &nbsp;
        <strike>{props.shoes[props.id].price}</strike> &nbsp;
        <strong>{props.shoes[props.id].price/2}원</strong>
      </h3>
    </div>
  );
}


export default App;