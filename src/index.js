
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

 Container,Row,Col,Card, Form, FormControl, Button, Carousel

} from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import Regsitration from './components/Registration/Registration'
import Login from './components/Login/Login'
import Feedback from './components/Feedback/Feedback'
import Home from './components/Home/Home'
import About from './components/About/About'


class Index extends React.Component {

    constructor() {

        super()
        this.state={
          color: "#ffffff"

        }
    }



    Footer = () => {
     return (

      <MDBFooter color="blue-gradient" className="font-small pt-4 mt-4">
     
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <hr className="w-100 clearfix d-md-none" />
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a  as={Link} to="/home">About Us</a>
            </p>
            <p>
              <a  as={Link} to="/home">Products</a>
            </p>
            <p>
              <a  as={Link} to="/feedback">Feedback</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <h6> Email us via </h6>
          <h6> Gmail: grocery@gmail.com   </h6>      
          <h6> Call Us at: +44-990-964-1025 </h6>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us On</h6>
           <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <img src='./Image/fb.png' style={{height:'30px', width:'30px'}}/>
                </li>
                <li className="list-inline-item">
                    <img src='./Image/twit.png' style={{height:'30px', width:'30px'}}/>
                </li>
                <li className="list-inline-item">
                      <img src='./Image/insta.png' style={{height:'30px', width:'30px'}}/>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              Grocery &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.MDBootstrap.com"> All Rights Reserved </a>
            </p>
          </MDBCol>
        </MDBRow>
    </MDBFooter>
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

               {/* <Navbar variant="pills" className="mr-sm-6"
                 bg="green" expand="lg">
  <Navbar.Brand style={{marginRight:'550px'}} href="#home">Grocery</Navbar.Brand>
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

    </Form>
  </Navbar.Collapse>
</Navbar>*/}

 <MDBNavbar color="blue-gradient" dark expand="md" >
        <MDBNavbarBrand style={{marginRight:'460px'}}>
          <strong className="white-text">GharkoGrocery</strong>
        </MDBNavbarBrand >
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink as={Link} to="/home" active={true} >Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/product">Product</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/feedback">Feedback</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/registration">Regsitration</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/login">Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>



                </div>
                </Row>
                </Container>

 <Switch>
		<Route exact path="/home">
                  < Home/>
                  </Route>
                  <Route exact path="/about">
                  < About/>
		  </Route>

        	 <Route exact path="/feedback">
                  < Feedback/>
                  </Route>

                  <Route exact path="/registration">
                  < Regsitration/>
                  </Route>

		<Route exact path="/login">
                  < Login/>
                  </Route>

                  
                </Switch>
      
                </Router>


                </div>
                  < this.Footer/>
                </Container>

        )
    }

}

ReactDOM.render(<Index />, document.getElementById('root'))





