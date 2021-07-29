import logo from './logo.svg';
import './App.css';
import {Navbar,Container,Button,NavDropdown,Nav} from 'react-bootstrap';
import {Route, Switch, Link, useHistory} from 'react-router-dom'
import Detail from './Detail';
import Inform from './inform';

function App() {

  let shoes=[
    { id:0,
      name:'나이키1999',
      src :"https://codingapple1.github.io/shop/shoes1.jpg" ,
      content:'폭신폭신 운동화',
      price: 33000
    },
    { id:1,
      name:'아디다스33',
      src :"https://codingapple1.github.io/shop/shoes2.jpg" ,
      content:'삐까뻔쩍 운동화',
      price: 4500
    },
    {
      id:2,
      name:'black&pink',
      src :"https://codingapple1.github.io/shop/shoes3.jpg" ,
      content:'main in korea',
      price: 5300

  }];

  let history = useHistory();
  
  return (
  <div className="App">
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shoes shopping Mall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail">Detail</Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      
      
      <Route exact path="/">
        <div>
        <Button variant="warning" onClick={()=>{history.goBack();}}>이전화면</Button>
        <Button variant="warning" onClick={()=>{history.push('/detail');}}>상세페이지</Button>
          <h1>Main Page~</h1>
          <div className= "background">
            <h1>50% Season off </h1>
            <h2>This is a shoes shoppingMall</h2>
            <p>
              <Button variant ="primary">start shopping</Button>
            </p>
          </div>

          <div className="container">
          <div className = "row">
            <div className = "col-md-4">
                <img src ="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
                <h3>상품명</h3>
                <h3>상품설명:</h3>
            </div>
            <div className = "col-md-4">
                <img src ="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" /> 
                <h3>상품명</h3>
                <h3>상품설명:</h3>
            </div>
            <div className = "col-md-4">
                <img src ="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" /> 
                <h3>상품명</h3>
                <h3>상품설명:</h3>
            </div>
              
          </div>
        </div>
        <hr/>
        <div className = "row">
          <Card  shoes ={shoes[0]}/>
          <Card  shoes ={shoes[1]}/>
          <Card  shoes ={shoes[2]}/>
        </div>
        <hr/>
        <div className="container">
          <div className="row">
            {
              shoes.map((data,i)=>{
                return <Card shoes={shoes[i]} i={i} key={i}/>
              })
            }
          </div>
        </div>
          </div>
        </Route>
        <Route path="/detail">
          <div>
            <h1>detail Page~</h1>
            <Detail/>
          </div>
        </Route>
        <Route path="/inform">
          <div>
            <h1>inform Page~</h1>
            <Inform/>
          </div>
        </Route>
       
        <hr/>
   
</div>
  
  );
}

function Card(props){
  return(
    <div className = "col-md-4">
    <img src ={props.shoes.src} width="100%"/>
    <h3>상품명:{props.shoes.name}</h3>
    <h3>상품설명:{props.shoes.content}</h3>
 </div>
  );
}



export default App;
