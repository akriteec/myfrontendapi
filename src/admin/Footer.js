import React, { Component } from 'react'
import { Button, Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { MDBCol, Row, Container, MDBContainer, MDBRow, MDBFooter,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, Link,MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/')
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {
        return (
 
  
            <div> {/* for wrapping jsx components or use Fragment <> </> */}
                
            
 <MDBFooter color="blue-gradient" className="font-small pt-4 mt-4">
     
        <MDBRow className="text-center text-md-left mt-3 pb-3" >
          <hr className="w-100 clearfix d-md-none" />
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3" >
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
 
                </div>
 

        )
    }

}

export default withRouter(Footer)