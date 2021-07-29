import logo from './logo.svg';
import './App.css';
import {Navbar,Container,Button,NavDropdown,Nav} from 'react-bootstrap';
import {Route, Switch, Link, useHistory} from 'react-router-dom'
import Detail from './Detail';
import Inform from './inform';

function App() {

  let shoes=[
    { id:0,
      name:'체리블라썸 라때 ',
      src :"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99FC5E505C92160209" ,
      content:'New Cherry Blessams',
      price: 33000
    },
    { id:1,
      name:'피치레몬블렌디드',
      src :"https://cdnweb01.wikitree.co.kr/webdata/editor/202005/06/img_20200506085034_940524b3.webp" ,
      content:'2021.05 NEW',
      price: 4500
    },
    {
      id:2,
      name:'초코릿 크림 칩 프라프치노',
      src :"https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/38996_1534917447_dLxOyz3k.jpg" ,
      content:'sweet chocolate',
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
        <Button variant="warning" onClick={()=>{history.goBack();}}>이전화면</Button> &nbsp;
        <Button variant="warning" onClick={()=>{history.push('/detail');}}>상세페이지</Button>
          <h1>Main Page~</h1>
          <div className= "background">
            <h1>50% Season off </h1>
            <h2>This is a shoes shoppingMall</h2>
            <p>
              <Button variant ="primary">start shopping</Button>
            </p>
          </div>

          
        <hr/>
        <div className="container"> 
          <div className = "row">
            <Card  shoes ={shoes[0]}/>
            <Card  shoes ={shoes[1]}/>
            <Card  shoes ={shoes[2]}/>
          </div>
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
