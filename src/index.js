
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Link, // ahref equiv
    Route // to catch the cliked route

} from 'react-router-dom'
import {

    Nav, Container,Row,Col,Card, Navbar, Form, FormControl, Button, Carousel

} from 'react-bootstrap'



class Index extends React.Component {

    constructor() {

        super()
        this.state={
          color: "#ffffff"

        }
    }



    Footer = () => {
     return (
                <Row style={{marginTop:'50px'}}>

<Navbar bg="light" variant="light">
<Col sm={4} style={{marginBottom:'130px'}}>
      <h4> About Us
     <h6>About Grocery Shop</h6> 
      <h6>Groceries </h6>
      </h4>
      </Col>
  
  <Col sm={4}>
      <h4> Contact Us
     <h6>Send us your views about the bookstore through the website. 
      You can just fill the form to send us your feedback and suggestions towards us.</h6> 
      <h6>Or </h6>
          <h6> Email us via </h6>
          <h6> Gmail: grocery@gmail.com   </h6>      
          <h6> Call Us at: +44-990-964-1025 </h6>
      </h4>
      </Col>
  
  <Col sm={4} style={{marginBottom:'120px'}}>
          <h4> Follow Us On
          <h6>Facebook </h6> 
          <h6>Instagram </h6>
          <h6>Twitter </h6>
         
      </h4>
      </Col>
  </Navbar>
  <div>
  <Col sm={12}>
      <p classnName="text-center"><strong>Copyright &copy; Grocery 2020.All Rights Reserved</strong></p>
      </Col>
    </div>
        </Row>
            )

}
    render() {
        return (
          <Container>
  
            <div> {/* for wrapping jsx components or use Fragment <> </> */}
                
                <Router>
                <Container>
                <Row style={{marginTop:'10px'}}>
                <div>

                <Navbar variant="pills" className="mr-sm-14"
                 bg="light" expand="lg">
  <Navbar.Brand style={{marginRight:'280px'}} href="#home">Grocery</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/home" active={true} >Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/product">Product</Nav.Link>
      <Nav.Link as={Link} to="/feedback">Contact Us</Nav.Link>
      <Nav.Link as={Link} to="/registration">Sign Up</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
       
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>



                </div>
                </Row>
                </Container>
      
                </Router>


                </div>
                  < this.Footer/>
                </Container>

        )
    }

}

ReactDOM.render(<Index />, document.getElementById('root'))





